import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
export default function MainLayout() {
  return (
    <div className="relative w-full bg-neutral-900 text-neutral-200">
      <Navbar />
      <div className="w-full min-h-[calc(100vh-100px)] flex flex-col justify-center items-center">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
