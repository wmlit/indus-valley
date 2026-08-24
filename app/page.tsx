import { Hero } from "@/components/home/hero";
import { ClientWall, PracticeCards, ProofStrip } from "@/components/home/proof";
import { Approach } from "@/components/home/approach";
import { CapabilityIndex } from "@/components/home/capability-index";
import { WhoDelivers } from "@/components/home/team";
import { CtaBand } from "@/components/sections/cta-band";

export default function Home() {
  return (
    <>
      <Hero />
      <ClientWall />
      <PracticeCards />
      <ProofStrip />
      <Approach />
      <CapabilityIndex />
      <WhoDelivers />
      <CtaBand className="pt-20 sm:pt-28" />
    </>
  );
}
