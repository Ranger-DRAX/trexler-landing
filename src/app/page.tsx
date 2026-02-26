import HeroSection from "@/components/home/HeroSection";
import IdentitySection from "@/components/home/IdentitySection";
import CapabilitiesSection from "@/components/home/CapabilitiesSection";
import IndustriesSection from "@/components/home/IndustriesSection";
import ProjectsSection from "@/components/home/ProjectsSection";
import CTASection from "@/components/home/ctaSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <IdentitySection />
      <CapabilitiesSection />

      {/* Industries Section */}
      <IndustriesSection />
      {/* Projects Section */}
      <ProjectsSection />
      <CTASection />
    </main>
  );
}
