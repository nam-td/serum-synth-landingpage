import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import HeroCanvas from "./HeroCanvas";
gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const heroRef = useRef(null);

  const { contextSafe } = useGSAP({ scope: heroRef });

  const revealingAnimation = contextSafe(() => {
    gsap.fromTo(
      ".hero-img, .hero-text",
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        stagger: 0.5,
        duration: 1.25,
        ease: "power4.inOut",
      }
    );
  });
  useEffect(() => {
    revealingAnimation();
  }, []);
  return (
    <div ref={heroRef} className="w-full max-w-[1920px] h-screen relative">
      <HeroCanvas />
      <div className="absolute top-0 left-0 w-full min-h-screen flex flex-row justify-center items-center">
        <div className="w-[80%] sm:w-[400px] lg:w-[900px] lg:aspect-[16/9] flex flex-col lg:flex-row justify-center items-center p-10 lg:p-6 gap-6 lg:gap-12 bg-neutral-900/20 rounded-lg shadow-sm shadow-neutral-100/50">
          <div className="hero-img card-wrapper w-[200px] sm:w-[240px] lg:w-[280px] max-w-[400px] aspect-square overflow-hidden flex justify-center items-center">
            <div className="card-content flex flex-row items-center justify-center overflow-hidden">
              <div className="w-full h-full bg-blue-950/10 absolute top-0 left-0 z-30"></div>
              <img
                src="/serum-2.jpg"
                alt="serum synth"
                className="max-w-fit w-full h-full object-cover grayscale"
              />
            </div>
          </div>
          <div className="hero-text w-full lg:w-[40%] flex flex-col gap-4 items-center lg:gap-0 lg:items-start">
            <h1 className="text-4xl lg:text-5xl font-bold lg:mb-6">
              Why Serum?
            </h1>
            <p className="max-w-[350px] lg:mb-10 text-sm lg:text-base font-[Montserrat] leading-relaxed">
              A wavetable synthesizer with a truly high-quality sound, visual
              and creative workflow-oriented interface to make creating and
              altering sounds fun instead of tedious, and the ability to “go
              deep” when desired - to create, import, edit, morph wavetables,
              and manipulate these on playback in real-time.
            </p>
            <button className="text-neutral-200 px-8 py-2 rounded-full text-sm lg:text-base font-bold tracking-wider border border-neutral-200">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
