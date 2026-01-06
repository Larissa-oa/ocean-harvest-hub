import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import TrustSection from "@/components/home/TrustSection";
import PromoBlocks from "@/components/home/PromoBlocks";
import CollectionsGrid from "@/components/home/CollectionsGrid";
import DealsSection from "@/components/home/DealsSection";
import SocialProofSection from "@/components/home/SocialProofSection";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <TrustSection />
        <PromoBlocks />
        <CollectionsGrid />
        <DealsSection />
        <SocialProofSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
