const express = require('express');
const mysql = require('mysql2/promise');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// MySQL Connection Pool
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '02769500',
    database: 'pan_card_system',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// Test database connection
async function testConnection() {
    try {
        const connection = await pool.getConnection();
        console.log('MySQL Connected successfully');
        connection.release();
    } catch (error) {
        console.error('MySQL Connection error:', error);
    }
}
testConnection();

// Helper function to get next application ID
async function getNextApplicationId() {
    const connection = await pool.getConnection();
    try {
        await connection.beginTransaction();
        
        const [rows] = await connection.query(
            'UPDATE id_sequence SET value = value + 1 WHERE name = "application_id"'
        );
        
        const [result] = await connection.query(
            'SELECT value FROM id_sequence WHERE name = "application_id"'
        );
        
        await connection.commit();
        return result[0].value;
    } catch (error) {
        await connection.rollback();
        throw error;
    } finally {
        connection.release();
    }
}

// Routes

// Submit PAN application
app.post('/api/submit-pan', async (req, res) => {
    try {
        const { aadhar } = req.body;
        
        if (!aadhar || aadhar.length !== 12 || !/^\d+$/.test(aadhar)) {
            return res.status(400).json({ error: 'Invalid Aadhar number' });
        }

        const appId = await getNextApplicationId();

        const [result] = await pool.query(
            `INSERT INTO applications 
            (application_id, name, mobile, aadhar, password, type, status) 
            VALUES (?, ?, ?, ?, ?, ?, ?)`,
            [
                appId,
                `User ${appId}`,
                '9876543210',
                aadhar,
                `PAN${appId}`,
                'pan',
                'pending'
            ]
        );

        const [newApp] = await pool.query(
            'SELECT * FROM applications WHERE id = ?',
            [result.insertId]
        );

        res.json({ 
            success: true, 
            message: 'Application submitted successfully',
            application: newApp[0]
        });
    } catch (error) {
        console.error('Error submitting application:', error);
        res.status(500).json({ error: 'Server error' });
    }
});

// Get all applications
app.get('/api/applications', async (req, res) => {
    try {
        const { type, search } = req.query;
        
        let query = 'SELECT * FROM applications WHERE 1=1';
        const params = [];

        if (type && type !== 'all') {
            query += ' AND type = ?';
            params.push(type);
        }

        if (search) {
            query += ` AND (name LIKE ? OR aadhar LIKE ? OR mobile LIKE ? OR application_id LIKE ?)`;
            const searchPattern = `%${search}%`;
            params.push(searchPattern, searchPattern, searchPattern, searchPattern);
        }

        query += ' ORDER BY application_id DESC';

        const [applications] = await pool.query(query, params);
        
        const transformedApps = applications.map(app => ({
            id: app.application_id,
            date: app.date,
            type: app.type,
            name: app.name,
            mobile: app.mobile,
            aadhar: app.aadhar,
            appNo: app.app_no,
            dob: app.dob,
            password: app.password,
            walletBal: app.wallet_bal,
            status: app.status,
            textFeed: app.text_feed
        }));

        res.json(transformedApps);
    } catch (error) {
        console.error('Error fetching applications:', error);
        res.status(500).json({ error: 'Server error' });
    }
});

// Get single application by ID (for user dashboard)
app.get('/api/applications/:id', async (req, res) => {
    try {
        const { id } = req.params;
        
        const [applications] = await pool.query(
            'SELECT * FROM applications WHERE application_id = ?',
            [id]
        );

        if (applications.length === 0) {
            return res.status(404).json({ error: 'Application not found' });
        }

        const app = applications[0];
        const transformedApp = {
            id: app.application_id,
            date: app.date,
            type: app.type,
            name: app.name,
            mobile: app.mobile,
            aadhar: app.aadhar,
            appNo: app.app_no,
            dob: app.dob,
            password: app.password,
            walletBal: app.wallet_bal,
            status: app.status,
            textFeed: app.text_feed
        };

        res.json(transformedApp);
    } catch (error) {
        console.error('Error fetching application:', error);
        res.status(500).json({ error: 'Server error' });
    }
});

// Update application
app.put('/api/applications/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const updates = req.body;

        const allowedFields = ['appNo', 'aadhar', 'dob', 'walletBal', 'status', 'textFeed', 'password', 'name', 'mobile'];
        const updateFields = [];
        const params = [];

        allowedFields.forEach(field => {
            if (updates[field] !== undefined) {
                const dbField = field === 'walletBal' ? 'wallet_bal' :
                               field === 'appNo' ? 'app_no' :
                               field === 'textFeed' ? 'text_feed' :
                               field === 'dob' ? 'dob' :
                               field === 'aadhar' ? 'aadhar' :
                               field === 'password' ? 'password' :
                               field === 'status' ? 'status' :
                               field === 'name' ? 'name' :
                               field === 'mobile' ? 'mobile' : null;
                
                if (dbField) {
                    updateFields.push(`${dbField} = ?`);
                    params.push(updates[field]);
                }
            }
        });

        if (updateFields.length === 0) {
            return res.status(400).json({ error: 'No valid fields to update' });
        }

        params.push(id);
        const query = `UPDATE applications SET ${updateFields.join(', ')} WHERE application_id = ?`;
        
        const [result] = await pool.query(query, params);

        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Application not found' });
        }

        const [updatedApp] = await pool.query(
            'SELECT * FROM applications WHERE application_id = ?',
            [id]
        );

        const app = updatedApp[0];
        const transformedApp = {
            id: app.application_id,
            date: app.date,
            type: app.type,
            name: app.name,
            mobile: app.mobile,
            aadhar: app.aadhar,
            appNo: app.app_no,
            dob: app.dob,
            password: app.password,
            walletBal: app.wallet_bal,
            status: app.status,
            textFeed: app.text_feed
        };

        res.json({ success: true, application: transformedApp });
    } catch (error) {
        console.error('Error updating application:', error);
        res.status(500).json({ error: 'Server error' });
    }
});

// Delete application
app.delete('/api/applications/:id', async (req, res) => {
    try {
        const { id } = req.params;
        
        const [result] = await pool.query(
            'DELETE FROM applications WHERE application_id = ?',
            [id]
        );

        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Application not found' });
        }

        res.json({ success: true, message: 'Application deleted successfully' });
    } catch (error) {
        console.error('Error deleting application:', error);
        res.status(500).json({ error: 'Server error' });
    }
});

// Get application statistics
app.get('/api/stats', async (req, res) => {
    try {
        const [total] = await pool.query('SELECT COUNT(*) as count FROM applications');
        const [pan] = await pool.query('SELECT COUNT(*) as count FROM applications WHERE type = "pan"');
        const [ll] = await pool.query('SELECT COUNT(*) as count FROM applications WHERE type = "ll"');
        
        res.json({
            total: total[0].count,
            pan: pan[0].count,
            ll: ll[0].count
        });
    } catch (error) {
        console.error('Error fetching stats:', error);
        res.status(500).json({ error: 'Server error' });
    }
});

// pan history for user dashboard

// Store PAN search history
app.post('/api/pan-history/store', async (req, res) => {
    try {
        const { aadhar, userId } = req.body;
        
        if (!aadhar || aadhar.length !== 12) {
            return res.status(400).json({ error: 'Invalid Aadhar number' });
        }

        // Generate a session ID if not provided
        const sessionId = userId || req.headers['x-session-id'] || `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
        
        // Get IP address and user agent
        const ipAddress = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
        const userAgent = req.headers['user-agent'];

        // Insert into history
        const [result] = await pool.query(
            `INSERT INTO pan_search_history 
            (user_id, aadhar_number, ip_address, user_agent, status, is_pan_visible) 
            VALUES (?, ?, ?, ?, 'pending', FALSE)`,
            [sessionId, aadhar, ipAddress, userAgent]
        );

        // Check if this Aadhar has any applications
        const [applications] = await pool.query(
            'SELECT application_id, status, text_feed FROM applications WHERE aadhar = ? ORDER BY created_at DESC LIMIT 1',
            [aadhar]
        );

        let panNumber = null;
        let status = 'pending';
        
        if (applications.length > 0) {
            // If application exists, generate PAN number format
            const app = applications[0];
            panNumber = `PAN${app.application_id}`;
            status = app.status;
            
            // Update the history record with PAN info
            await pool.query(
                'UPDATE pan_search_history SET pan_number = ?, status = ? WHERE id = ?',
                [panNumber, status, result.insertId]
            );
        }

        res.json({ 
            success: true, 
            message: 'History stored successfully',
            sessionId: sessionId,
            historyId: result.insertId,
            application: applications.length > 0 ? applications[0] : null
        });

    } catch (error) {
        console.error('Error storing history:', error);
        res.status(500).json({ error: 'Server error' });
    }
});

// Get user's PAN history
app.post('/api/pan-history/get', async (req, res) => {
    try {
        const { userId, aadhar } = req.body;
        
        let query = 'SELECT * FROM pan_search_history WHERE 1=1';
        const params = [];

        if (userId) {
            query += ' AND user_id = ?';
            params.push(userId);
        }

        if (aadhar) {
            query += ' AND aadhar_number = ?';
            params.push(aadhar);
        }

        query += ' ORDER BY search_date DESC LIMIT 50';

        const [history] = await pool.query(query, params);

        // For each history item, check if there's an updated application
        for (let item of history) {
            const [applications] = await pool.query(
                'SELECT application_id, status, text_feed FROM applications WHERE aadhar = ? ORDER BY created_at DESC LIMIT 1',
                [item.aadhar_number]
            );

            if (applications.length > 0) {
                const app = applications[0];
                const panNumber = `PAN${app.application_id}`;
                
                // Update if PAN is now available
                if (item.pan_number !== panNumber || item.status !== app.status) {
                    await pool.query(
                        'UPDATE pan_search_history SET pan_number = ?, status = ?, is_pan_visible = ? WHERE id = ?',
                        [panNumber, app.status, app.status === 'completed', item.id]
                    );
                    item.pan_number = panNumber;
                    item.status = app.status;
                    item.is_pan_visible = app.status === 'completed';
                }
            }
        }

        // Fetch updated data
        const [updatedHistory] = await pool.query(
            'SELECT * FROM pan_search_history WHERE 1=1' + (userId ? ' AND user_id = ?' : '') + ' ORDER BY search_date DESC LIMIT 50',
            userId ? [userId] : []
        );

        const transformedHistory = updatedHistory.map(item => ({
            id: item.id,
            aadhar: item.aadhar_number.replace(/(\d{4})/g, '$1 ').trim(),
            panNumber: item.is_pan_visible ? item.pan_number : '•••••••••',
            serviceName: item.service_name,
            date: new Date(item.search_date).toLocaleDateString('en-IN', {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
            }),
            status: item.status,
            isPanVisible: item.is_pan_visible
        }));

        res.json({ 
            success: true, 
            history: transformedHistory,
            count: transformedHistory.length
        });

    } catch (error) {
        console.error('Error fetching history:', error);
        res.status(500).json({ error: 'Server error' });
    }
});

// Admin endpoint to reveal PAN numbers
app.post('/api/admin/reveal-pan', async (req, res) => {
    try {
        // Check admin authentication (you should implement proper auth)
        const { adminKey } = req.body;
        
        if (adminKey !== 'admin123') { // Use proper authentication in production
            return res.status(401).json({ error: 'Unauthorized' });
        }

        // Update all history items where status is completed
        const [result] = await pool.query(
            `UPDATE pan_search_history ph
            JOIN applications a ON ph.aadhar_number = a.aadhar
            SET ph.is_pan_visible = TRUE, 
                ph.pan_number = CONCAT('PAN', a.application_id),
                ph.status = a.status
            WHERE a.status = 'completed' OR a.status = 'active'`
        );

        res.json({ 
            success: true, 
            message: `Updated ${result.affectedRows} records`,
            count: result.affectedRows
        });

    } catch (error) {
        console.error('Error revealing PAN:', error);
        res.status(500).json({ error: 'Server error' });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));