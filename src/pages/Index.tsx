import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Configuration from "@/components/Configuration";
import Integration from "@/components/Integration";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <Configuration />
      <Integration />
      <Pricing />
      <Footer />
    </div>
  );
};

export default Index;
