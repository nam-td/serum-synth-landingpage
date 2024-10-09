import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useEffect, useLayoutEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
gsap.registerPlugin(useGSAP);

export default function Navbar() {
  const mobileMenuRef = useRef();
  const { contextSafe } = useGSAP({ scope: mobileMenuRef });
  const location = useLocation();
  const openMobileMenu = contextSafe(() => {
    gsap.to(mobileMenuRef.current, {
      x: 0,
      opacity: 1,
      duration: 0.75,
      ease: "power2",
    });
  });
  const closeMobileMenu = contextSafe(() => {
    gsap.to(mobileMenuRef.current, {
      x: "-100%",
      opacity: 0,
      duration: 0.75,
      ease: "power2",
    });
  });
  useLayoutEffect(() => {
    closeMobileMenu();
  }, []);
  useEffect(() => {
    closeMobileMenu();
  }, [location])
  return (
    <nav className="w-full min-h-[80px] max-w-[1920px] mx-auto z-50 fixed top-0 left-0 right-0 flex flex-row justify-between items-center bg-zinc-800/40 px-8 font-[Poppins] text-zinc-50 text-base shadow-sm shadow-neutral-200/50 backdrop-blur-md">
      <div className="w-[64px]">
        <Link to="/">
          <img src="/logo.png" alt="xferrecords logo" className="w-full" />
        </Link>
      </div>
      <ul className="md:flex flex-row items-center gap-6 hidden">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/forum">Forum</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/serum-packs">Serum Preset Packs</Link>
        </li>
        <li>
          <Link to="/faq">FAQ & Support</Link>
        </li>
      </ul>
      <ul className="lg:flex flex-row items-center gap-2 hidden">
        <li className="text-sm px-6 py-2 rounded-full border border-neutral-100  transition-all duration-300 ease-in-out shadow-lime-500/0 shadow-2xl hover:shadow-sky-100">
          <Link to="login">Sign in</Link>
        </li>
        <li className="text-sm px-6 py-2 rounded-full bg-neutral-900 transition-all duration-500 ease-in-out cursor-pointer shadow-lime-500/0 shadow-2xl hover:shadow-sky-100">
          <Link to="login">Sign up</Link>
        </li>
      </ul>
      <div className="cursor-pointer md:hidden">
        <GiHamburgerMenu onClick={openMobileMenu} size={24} />
      </div>
      <div
        ref={mobileMenuRef}
        className="mobile-menu absolute top-0 left-0 bg-neutral-900 w-screen h-screen z-[60] md:hidden"
        style={{transform: "translateX(0%)", opacity: 0}}
      >
        <div className="w-full max-w-[500px] pl-6 pr-8 py-8 flex flex-row justify-between items-center gap-6">
          <div className="logo w-[64px]">
            <Link to="/">
              <img src="/logo.png" alt="xfer record logo" />
            </Link>
          </div>
          <div className="close cursor-pointer">
            <IoClose onClick={closeMobileMenu} size={32} />
          </div>
        </div>
        <ul className="w-full max-w-[500px] flex flex-col text-lg">
          <li className="py-2 px-4 bg-neutral-700/0 hover:bg-lime-600 duration-800 ease-in-out transition-all">
            <Link 
            to="/">Home</Link>
          </li>
          <li className="py-2 px-4 bg-neutral-700/0 hover:bg-lime-600 duration-800 ease-in-out transition-all">
            <Link to="forum">Forum</Link>
          </li>
          <li className="py-2 px-4 bg-neutral-700/0 hover:bg-lime-600 duration-800 ease-in-out transition-all">
            <Link to="/products">Products</Link>
          </li>
          <li className="py-2 px-4 bg-neutral-700/0 hover:bg-lime-600 duration-800 ease-in-out transition-all">
            <Link to="/serum-packs">Serum Preset Packs</Link>
          </li>
          <li className="py-2 px-4 bg-neutral-700/0 hover:bg-lime-600 duration-800 ease-in-out transition-all">
            <Link to="/faq">FAQ & Support</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
