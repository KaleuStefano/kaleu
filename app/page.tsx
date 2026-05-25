import { LandingHero } from "@/components/landing/LandingHero";
import { ScrollPane } from "@/components/ui/ScrollPane";
import { PageTransition } from "@/components/ui/PageTransition";
import { FeaturedGrid } from "@/components/landing/FeaturedGrid";
import { ClientStrip } from "@/components/landing/ClientStrip";
import { LandingFooter } from "@/components/landing/LandingFooter";

export default function HomePage() {
  return (
    <ScrollPane>
      <PageTransition>
        <LandingHero />
        <FeaturedGrid />
        <ClientStrip />
        <LandingFooter />
      </PageTransition>
    </ScrollPane>
  );
}
