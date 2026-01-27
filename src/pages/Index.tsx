import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import TrustSection from "@/components/home/TrustSection";
import PromoBlocks from "@/components/home/PromoBlocks";
import CollectionsGrid from "@/components/home/CollectionsGrid";
import CatchOfTheMonthSlider from "@/components/home/CatchOfTheMonthSlider";
import ReviewsSection from "@/components/home/ReviewsSection";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <TrustSection />
        <PromoBlocks />
        <CollectionsGrid />
        <CatchOfTheMonthSlider />
        <ReviewsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;