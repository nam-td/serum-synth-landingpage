import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const artistList = [
  {
    id: 1,
    name: "Flume",
    photoURL: "/flume.jpg",
  },
  {
    id: 2,
    name: "Martin Garrix",
    photoURL: "/martin-garrix.jpg",
  },
  {
    id: 3,
    name: "What So Not",
    photoURL: "/what-so-not.jpg",
  },
  {
    id: 4,
    name: "Kygo",
    photoURL: "/kygo.jpg",
  },
  {
    id: 5,
    name: "Deadmau5",
    photoURL: "/deadmau5.jpg",
  },
  {
    id: 6,
    name: "Skrillex",
    photoURL: "/skrillex.jpg",
  },
  {
    id: 7,
    name: "Zedd",
    photoURL: "/zedd.jpg",
  },
  {
    id: 8,
    name: "Diplo",
    photoURL: "/diplo.jpg",
  },
  {
    id: 9,
    name: "Armin Van Buuren",
    photoURL: "/armin-van-buuren.jpg",
  },
  {
    id: 10,
    name: "Grimes",
    photoURL: "/grimes.jpg",
  },
  {
    id: 11,
    name: "Marshmello",
    photoURL: "/marshmello.jpg",
  },
  {
    id: 12,
    name: "Boys Noize",
    photoURL: "/boys-noize.jpg",
  },
];

const reviews = [
  {
    id: 1,
    source: "steemit.com",
    review:
      "Serum is a very obvious candidate for the single best synthesizer plugin right now. While it may be a touch greedy with CPU, the rewards are well worth it: A fun and intuitive interface, with unrivalled sonic potential. ",
  },
  {
    id: 2,
    source: "whippedcreamsounds.com",
    review:
      'Serum is a workhorse. It\'s easily our "desert island" software synthesizer, with unmatched versatility.',
  },
  {
    id: 3,
    source: "soundsandgear.com",
    review:
      "No doubt, there’s always a new synth coming out, and there are usually a few leaders of the pack, Serum is definitely one of those and for me the main draw is not just how powerful it can be, but how accessible it makes wavetable synthesis, no confusion, no tedious tweaking, just see it, tweak it, and get results.",
  },
  {
    id: 4,
    source: "gearspace.com",
    review:
      'You have a full suite of high quality onboard effects which can be ordered any way you like. There is also a very generous selection of different filter shapes, which even includes a plethora of exotic "filters" such as ring modulation, bit crushing, phase shapes, flange shapes, etc.',
  },
  {
    id: 5,
    source: "macprovideo.com",
    review:
      "What Xfer's Serum manages to do is help you achieve effortlessly complex and intricate sound design with a level of fluidity we've not previously experienced. This is an incredibly powerful synthesizer which provides an ultra clean and unique sound with a complex yet simple to use modulation system.",
  },
  {
    id: 6,
    source: "soundonsound.com",
    review:
      "Wavetable synthesis is known for its rich harmonic sweeps, glitchy transitions and sonic complexity. To this, Serum adds new dimensions of clean, high fidelity and accessibility.",
  },
];

function ArtistDisplay(props) {
  const { artist } = props;
  return (
    <li className="flex flex-col justify-center items-center gap-y-3">
      <div className="relative w-[120px] aspect-square bg-slate-100 rounded-full overflow-hidden border-2 border-zinc-200">
        <img
          src={artist.photoURL}
          alt=""
          className="w-full h-full max-w-fit object-cover grayscale"
        />
        <div className="w-full h-full top-0 left-0 absolute bg-sky-600/10"></div>
      </div>
      <span className="text-zinc-300 text-lg tracking-wide">{artist.name}</span>
    </li>
  );
}

export default function SocialProof() {
  const artistsRef = useRef(null);
  const artistSliderRef = useRef(null);
  const { contextSafe } = useGSAP({ scope: artistsRef });

  const revealAnim = contextSafe(() => {
    gsap.fromTo(
      ".reviews li",
      {
        opacity: 0,
      },
      {
        opacity: 1,
        stagger: 0.25,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: ".reviews",
          start: "top bottom",
          end: "bottom bottom",
          scrub: 1,
          once: true
        },
      }
    );
  });

  useEffect(() => {
    revealAnim();
  }, []);
  return (
    <div
      ref={artistsRef}
      className="w-full max-w-[1280px] min-h-[calc(100vh-80px)] p-6 mx-auto"
    >
      <h1 className="text-4xl lg:text-6xl font-bold lg:mb-20 mb-20">
        Artists who use Serum
      </h1>
      <div ref={artistSliderRef} className="artist-slider">
        <div className="scroller w-full overflow-x-hidden flex">
          <ul className="flex flex-row space-x-16 animate-loop-scroll-left pl-16">
            {artistList.map((artist) => {
              return artist.id % 2 == 0 ? (
                <ArtistDisplay artist={artist} key={artist.name} />
              ) : (
                ""
              );
            })}
          </ul>
          <ul
            className="flex flex-row space-x-16 animate-loop-scroll-left pl-16"
            aria-hidden={true}
          >
            {artistList.map((artist) => {
              return artist.id % 2 == 0 ? (
                <ArtistDisplay artist={artist} key={artist.name + " double"} />
              ) : (
                ""
              );
            })}
          </ul>
        </div>
        <div className="scroller w-full overflow-x-hidden flex mt-12">
          <ul className="flex flex-row space-x-16 items-start animate-loop-scroll-right pl-16">
            {artistList.map((artist) => {
              return artist.id % 2 != 0 ? (
                <ArtistDisplay artist={artist} key={artist.name} />
              ) : (
                ""
              );
            })}
          </ul>
          <ul
            className="flex flex-row space-x-16 items-start animate-loop-scroll-right pl-16"
            aria-hidden={true}
          >
            {artistList.map((artist) => {
              return artist.id % 2 != 0 ? (
                <ArtistDisplay artist={artist} key={artist.name + " double"} />
              ) : (
                ""
              );
            })}
          </ul>
        </div>
      </div>
      <h1 className="text-4xl lg:text-6xl font-bold lg:mb-20 my-16">
        What the community thinks about Serum
      </h1>
      <div>
        <ul className="reviews w-full flex flex-col md:flex-row md:flex-wrap md:justify-center gap-6 items-center md:items-start">
          {reviews.map((review) => {
            return (
              <li
                key={review.id}
                className="w-full md:w-[320px] max-w-[600px] md:aspect-square lg:aspect-[21/9] lg:w-auto px-8 py-6 bg-zinc-800/50 rounded-xl shadow-sm shadow-zinc-400 flex flex-col justify-start lg:justify-center"
              >
                <p className="font-[Montserrat] text-sm leading-6">
                  {review.review}
                </p>
                <p
                  className={`text-sm italic mt-4 tracking-wider text-lime-500`}
                >
                  - {review.source}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
