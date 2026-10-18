import { AllServicesSection } from "@/components/sites/balifirsttimer-com-4cbcd837/root-8a5edab2/AllServicesSection";
import { FinalCtaSection } from "@/components/sites/balifirsttimer-com-4cbcd837/root-8a5edab2/FinalCtaSection";
import { HeroSection } from "@/components/sites/balifirsttimer-com-4cbcd837/root-8a5edab2/HeroSection";
import { InspirationCarouselSection } from "@/components/sites/balifirsttimer-com-4cbcd837/root-8a5edab2/InspirationCarouselSection";
import { ProjectsGridSection } from "@/components/sites/balifirsttimer-com-4cbcd837/root-8a5edab2/ProjectsGridSection";
import { ScrollReveal } from "@/components/sites/balifirsttimer-com-4cbcd837/root-8a5edab2/ScrollReveal";
import { ServicesHighlightSection } from "@/components/sites/balifirsttimer-com-4cbcd837/root-8a5edab2/ServicesHighlightSection";
import { SiteFooter } from "@/components/sites/balifirsttimer-com-4cbcd837/root-8a5edab2/SiteFooter";
import { SiteHeader } from "@/components/sites/balifirsttimer-com-4cbcd837/root-8a5edab2/SiteHeader";
import { StatsSection } from "@/components/sites/balifirsttimer-com-4cbcd837/root-8a5edab2/StatsSection";
import { StorySection } from "@/components/sites/balifirsttimer-com-4cbcd837/root-8a5edab2/StorySection";
import { ValueCtaSection } from "@/components/sites/balifirsttimer-com-4cbcd837/root-8a5edab2/ValueCtaSection";
import { WhatsAppFab } from "@/components/sites/balifirsttimer-com-4cbcd837/root-8a5edab2/WhatsAppFab";
import { WholesaleBenefitsSection } from "@/components/sites/balifirsttimer-com-4cbcd837/root-8a5edab2/WholesaleBenefitsSection";

export default function Home() {
  return (
    <div className="bft-site">
      <SiteHeader />
      <main>
        <HeroSection />
        <ServicesHighlightSection />
        <ValueCtaSection />
        <StatsSection />
        <StorySection />
        <AllServicesSection />
        <WholesaleBenefitsSection />
        <ScrollReveal direction="left">
          <InspirationCarouselSection />
        </ScrollReveal>
        <ProjectsGridSection />
        <ScrollReveal direction="scale">
          <FinalCtaSection />
        </ScrollReveal>
      </main>
      <SiteFooter />
      <WhatsAppFab />
    </div>
  );
}
