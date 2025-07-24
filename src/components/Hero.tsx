import { Button } from "@/components/ui/button";
import { Shield, Zap, Globe, BarChart3 } from "lucide-react";
import heroImage from "@/assets/hero-api-security.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/90 to-background/80" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center max-w-5xl">
        <div className="flex items-center justify-center mb-6">
          <div className="flex items-center gap-2 bg-gradient-card backdrop-blur-sm border border-border/50 rounded-full px-4 py-2 shadow-soft">
            <Shield className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-foreground">Enterprise API Security</span>
          </div>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent leading-tight">
          Access IQ
        </h1>
        
        <p className="text-xl md:text-2xl font-semibold mb-4 text-primary">
          API Traffic Monitoring, Control & Protection Layer
        </p>
        
        <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
          Built for companies, platforms, and service providers that run public or private APIs 
          and need real-time traffic governance without complexity or latency overhead.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Button variant="hero" size="lg" className="px-8 py-6 text-lg">
            <Zap className="w-5 h-5" />
            Start Free Trial
          </Button>
          <Button variant="outline" size="lg" className="px-8 py-6 text-lg">
            <BarChart3 className="w-5 h-5" />
            View Live Demo
          </Button>
        </div>
        
        {/* Key stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">&lt;200ms</div>
            <div className="text-sm text-muted-foreground">Response Time</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">25K</div>
            <div className="text-sm text-muted-foreground">Free Requests/Month</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">Global</div>
            <div className="text-sm text-muted-foreground">AWS Deployment</div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-accent/10 rounded-full blur-xl" />
    </section>
  );
};

export default Hero;