import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { Facebook, Twitter, Linkedin, Instagram, Youtube } from "lucide-react";

export const footerData = {
  brand: {
    name: "SHAMSH",
    poweredBy: "Resicode solutions",
    taglineTitle: "Building a Greener Tomorrow",
    taglineDescription:
      "Leading the way in sustainable solar panel recycling with certified eco-friendly processes and commitment to environmental excellence.",
  },

  socialLinks: [
    {
      icon: Facebook,
      href: "#",
      bg: "bg-blue-600 hover:bg-blue-700",
      label: "Facebook",
    },
    {
      icon: Twitter,
      href: "#",
      bg: "bg-blue-400 hover:bg-blue-500",
      label: "Twitter",
    },
    {
      icon: Linkedin,
      href: "#",
      bg: "bg-blue-700 hover:bg-blue-800",
      label: "LinkedIn",
    },
    {
      icon: Instagram,
      href: "#",
      bg: "bg-pink-600 hover:bg-pink-700",
      label: "Instagram",
    },
    {
      icon: Youtube,
      href: "#",
      bg: "bg-red-600 hover:bg-red-700",
      label: "YouTube",
    },
  ],

  quickLinks: [
    { name: "Home", href: "#" },
    { name: "About Us", href: "#" },
    { name: "Services", href: "#" },
    { name: "Recycling Process", href: "#" },
    { name: "Facilities", href: "#" },
    { name: "Contact Us", href: "#" },
  ],
// this is service 
  services: [
    { name: "Solar Panel Collection", href: "#" },
    { name: "Bulk Recycling", href: "#" },
    { name: "Industrial Solutions", href: "#" },
    { name: "Residential Pickup", href: "#" },
    { name: "Certification Services", href: "#" },
    { name: "Consulting", href: "#" },
  ],

  contact: {
    phone: "+1 (555) 123-4567",
    email: "info@solarrecovrecycling.com",
    address: `123 Green Energy Blvd,
Eco City, EC 12345`,
  },

  legalLinks: [
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms of Service", href: "/termsOfService" },
    { name: "Cookie Policy", href: "/cookiePolicy" },
  ],

  certifications: [
    "ISO 14001:2015 Certified",
    "E-Waste Compliant",
    "100% Eco-Friendly",
  ],
} as const;

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300">
      <div className="max-w-7xl mx-auto px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-teal-400 to-teal-600 rounded-lg flex items-center justify-center">
                <span className="text-white text-xs font-bold">
                  {footerData.brand.name[0]}
                </span>
              </div>
              <span className="text-white font-bold text-lg">
                {footerData.brand.name}
              </span>
            </div>

            <div className="border border-teal-500 rounded-lg px-3 py-2 w-fit flex items-center gap-2 bg-black/50">
              <code className="text-teal-400 text-xs">&lt;&gt;</code>
              <span className="text-teal-400 text-xs font-medium">
                Powered by {footerData.brand.poweredBy}
              </span>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-teal-400 text-lg">🌿</span>
              <div>
                <p className="text-white font-medium text-sm">
                  {footerData.brand.taglineTitle}
                </p>
                <p className="text-gray-500 text-xs mt-2 leading-relaxed">
                  {footerData.brand.taglineDescription}
                </p>
              </div>
            </div>

            <div className="flex gap-3 pt-4">
              {footerData.socialLinks.map((item, index) => {
                const Icon = item.icon;
                return (
                  <a
                    key={index}
                    href={item.href}
                    className={`${item.bg} p-3 rounded-full transition-colors`}
                    aria-label={item.label}
                  >
                    <Icon size={18} className="text-white" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-6">Quick Links</h3>
            <nav className="space-y-3">
              {footerData.quickLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="text-gray-400 hover:text-teal-400 transition-colors block text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold mb-6">Our Services</h3>
            <nav className="space-y-3">
              {footerData.services.map((service, index) => (
                <Link
                  key={index}
                  href={service.href}
                  className="text-gray-400 hover:text-teal-400 transition-colors block text-sm"
                >
                  {service.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone size={20} className="text-teal-400 mt-0.5" />
                <div>
                  <p className="text-gray-500 text-xs">Phone</p>
                  <p className="text-white text-sm font-medium">
                    {footerData.contact.phone}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail size={20} className="text-teal-400 mt-0.5" />
                <div>
                  <p className="text-gray-500 text-xs">Email</p>
                  <p className="text-white text-sm font-medium">
                    {footerData.contact.email}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin size={20} className="text-teal-400 mt-0.5" />
                <div>
                  <p className="text-gray-500 text-xs">Address</p>
                  <p className="text-white text-sm font-medium whitespace-pre-line">
                    {footerData.contact.address}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 my-8" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-xs">
            © {new Date().getFullYear()} {footerData.brand.name} Eco
            Renew-Recycling. All rights reserved.
          </p>

          <div className="flex gap-4 text-gray-500 text-xs">
            {footerData.legalLinks.map((item, index) => (
              <span key={index} className="flex items-center gap-2">
                <Link
                  href={item.href}
                  className="hover:text-teal-400 transition-colors"
                >
                  {item.name}
                </Link>
                {index !== 2 && <span>•</span>}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Certifications */}
      <div className="bg-black/50 border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-8 py-8">
          <div className="flex flex-wrap justify-center gap-6">
            {footerData.certifications.map((cert, index) => (
              <div
                key={index}
                className="border border-teal-500 rounded-lg px-4 py-2 text-center"
              >
                <p className="text-teal-400 text-xs font-medium">{cert}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
