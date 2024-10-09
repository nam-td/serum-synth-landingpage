import Hero from "../components/Hero";
import Features from "../components/Features";
import SocialProof from "../components/SocialProof";
import Technical from "../components/Technical";
export default function SerumHome() {
  return (
    <>
      <Hero />
      <div className="container mx-auto">
        <Features />
        <SocialProof />
        <Technical />
      </div>
    </>
  );
}
