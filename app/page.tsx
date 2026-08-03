import { Hero } from "@/components/home/hero";
import { ClientWall, PracticeCards, ProofStrip } from "@/components/home/proof";
import { Approach, Assessment } from "@/components/home/approach";
import { CapabilityIndex, HowItLands } from "@/components/home/landing";
import { Testimonial, WhoDelivers } from "@/components/home/team";
import { CtaBand } from "@/components/sections/cta-band";

export default function Home() {
  return (
    <>
      <Hero />
      <ClientWall />
      <PracticeCards />
      <ProofStrip />
      <Approach />
      <Assessment />
      <HowItLands />
      <CapabilityIndex />
      <WhoDelivers />
      <Testimonial />
      <CtaBand />
    </>
  );
}
