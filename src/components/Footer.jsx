import { Link } from "react-router-dom";

export default function Footer() {
  const d = new Date();
  return (
    <footer className="w-full h-[100px] bg-neutral-950 text-sm">
      <div className="w-full max-w-[1280px] h-full mx-auto font-[Montserrat] flex flex-col md:flex-row items-center justify-center md:justify-between md:p-6 gap-y-2">
        <p className="text-zinc-500">&copy; {d.getFullYear()} Xfer Records</p>
        <ul className="flex flex-row gap-x-6 text-zinc-400">
            <li><Link to="policies">Privacy Policy</Link></li>
            <li><Link to="contact">Contact</Link></li>
        </ul>
      </div>
    </footer>
  );
}
