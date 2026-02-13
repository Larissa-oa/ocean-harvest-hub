import PageLayout from "@/components/layout/PageLayout";
import HeroSection from "@/components/home/HeroSection";
import TrustSection from "@/components/home/TrustSection";
import PromoBlocks from "@/components/home/PromoBlocks";
import CollectionsGrid from "@/components/home/CollectionsGrid";
import CatchOfTheMonthSlider from "@/components/home/CatchOfTheMonthSlider";
import ReviewsSection from "@/components/home/ReviewsSection";

/** Homepage — assembles all landing page sections. */
const Index = () => (
  <PageLayout>
    <HeroSection />
    <TrustSection />
    <PromoBlocks />
    <CollectionsGrid />
    <CatchOfTheMonthSlider />
    <ReviewsSection />
  </PageLayout>
);

export default Index;
