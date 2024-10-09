import { FaAngleDown } from "react-icons/fa6";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const Accordion = (props) => {
  const { title, children, icon } = props;
  const [hidden, setHidden] = useState(true);
  const itemRef = useRef();
  const { contextSafe } = useGSAP({ scope: itemRef });

  const toggleContent = contextSafe(() => {
    if (hidden) {
      gsap.to("#icon", {
        rotate: 180,
        duration: 0.75,
        ease: "power3",
      });
      gsap.to("#toggle", {
        height: "auto",
        opacity: 1,
        duration: 0.75,
        ease: "power3",
        onComplete: () => {
          setHidden(!hidden);
        },
      });
    } else {
      gsap.to("#icon", {
        rotate: 0,
        duration: 1,
        ease: "power3",
      });
      gsap.to("#toggle", {
        height: 0,
        opacity: 0,
        duration: 1,
        ease: "power3",
        onComplete: () => {
          setHidden(!hidden);
        },
      });
    }
    return;
  });

  const revealingAnim = contextSafe(() => {
    gsap.fromTo(
      itemRef.current,{
        y: 100,
        opacity: 0  
      }, {
        y: 0,
        opacity: 1,
        ease: "power2",
        scrollTrigger: {
          trigger: itemRef.current,
          start: "top bottom",
          end: "+=200",
          scrub: 1,
          once: true
        }
      })
  })

  useEffect(() => {
    if(itemRef.current) revealingAnim();
  }, [])
  return (
    <li
      ref={itemRef}
      className="w-full px-4 py-4 lg:px-6 lg:py-8 bg-zinc-700/20 border-b border-zinc-500 flex flex-col items-center rounded-md"
    >
      <div className="w-full flex gap-4 flex-row justify-between items-start">
        <div className="flex flex-row lg:no-wrap gap-4 items-start sm:items-center">
          <span className="text-lime-400">{icon || ""}</span>
          <span className="text-md font-bold tracking-wide md:text-2xl">
            {title}
          </span>
        </div>
        <div id="icon" className="text-zinc-200">
          <FaAngleDown onClick={toggleContent} size={18} />
        </div>
      </div>
      <div className="w-full">
        <div id="toggle" className="w-full h-0 opacity-0 overflow-hidden">
          <div className="w-[90%] mx-auto md:mx-0 p-2 md:p-6 lg:max-w-[650px] leading-relaxed text-sm md:text-base text-zinc-200 font-[Montserrat] ">
            {children}
          </div>
        </div>
      </div>
    </li>
  );
};
export default Accordion;