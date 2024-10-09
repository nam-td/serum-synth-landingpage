import { IoLogoWindows } from "react-icons/io5";
import { BsApple } from "react-icons/bs";
export default function Technicals() {
  return (
    <div className="w-full max-w-[1280px] p-6 mx-auto mt-20 flex flex-col gap-y-16 lg:flex-row lg:gap-x-8 lg:flex-wrap md:justify-center xl:justify-start">
      <div className="w-full lg:max-w-[600px] flex flex-col gap-y-4">
        <h1 className="text-3xl uppercase font-bold tracking-wider">Spec</h1>
        <p className="text-lg font-[Montserrat]">
          Serum comes with over
          <span className="text-lime-500"> 450 presets</span>,{" "}
          <span className="text-blue-400">144 wavetables</span>. Available as
          VST, AU, AAX 64bit.
        </p>
      </div>
      <div className="w-full lg:max-w-[600px] flex flex-col gap-y-4">
        <h1 className="text-3xl uppercase font-bold tracking-wider">
          Try it out now
        </h1>
        <p className="text-lg font-[Montserrat]">
          The demo version is available for OS X and Windows, and is limited to
          15 minutes.
        </p>
        <div className="flex flex-col gap-2 items-start md:flex-row">
          <button className="w-full max-w-[450px] py-3 px-6 bg-sky-800 rounded-sm flex justify-center items-center tracking-wider font-[Montserrat]">
            <span className="text-sm">Serum Demo for Windows</span>
            <span className="pl-2">
              <IoLogoWindows size={20}/>
            </span>
          </button>
          <button className="w-full max-w-[450px] py-3 px-6 bg-zinc-600 rounded-sm flex justify-center items-center tracking-wider font-[Montserrat]">
            <span className="text-sm">Serum Demo for OS X </span>
            <span className="pl-2 translate-y-[-2px]">
              <BsApple size={20}/>
            </span>
          </button>
        </div>
      </div>
      <div className="w-full lg:max-w-[600px] flex flex-col gap-y-4">
        <h1 className="text-3xl uppercase font-bold tracking-wider">
          System Requirements:
        </h1>
        <ul className="font-[Montserrat]">
          <li>Windows: Windows 7 SP1 or later</li>
          <li>Macintosh: macOS 10.11 or later</li>
          <li>64 bit VST2.4 , AU or AAX compatible host software.</li>
        </ul>
      </div>
    </div>
  );
}
