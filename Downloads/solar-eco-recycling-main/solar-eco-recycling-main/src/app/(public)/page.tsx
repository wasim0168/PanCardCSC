import dynamic from "next/dynamic";

const HomePage = dynamic(() => import("@/screens/home"));

export default function Page() {
  return <HomePage />;
}
