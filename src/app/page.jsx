import DonateCallout from "@/components/sections/donate-callout";
import FeaturedProjects from "@/components/sections/featured-projects";
import HomeHero from "@/components/sections/home-hero";
import ImpactByNumbers from "@/components/sections/impact-by-numbers";
import MissionSnapshot from "@/components/sections/mission-snapshot";
import TransparencyAccountability from "@/components/sections/transparency-accountability";
import VoicesOfSupport from "@/components/sections/voices-of-support";

export default function HomePage() {
  return (
    <main id="main-content">
      <HomeHero />
      <MissionSnapshot />
      <FeaturedProjects />
      <ImpactByNumbers />
      <VoicesOfSupport />
      <TransparencyAccountability />
      <DonateCallout />
    </main>
  );
}
