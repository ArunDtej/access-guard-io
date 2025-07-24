import { Settings, Clock, Target, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const configOptions = [
  {
    icon: Target,
    title: "What to Track",
    items: ["IP addresses", "Email addresses", "User agents", "Domains", "Countries", "Custom headers"]
  },
  {
    icon: Clock,
    title: "Timeframes",
    items: ["Per minute", "Per hour", "Per day", "Custom windows", "Rolling averages", "Peak detection"]
  },
  {
    icon: Shield,
    title: "Actions to Trigger",
    items: ["Block requests", "Rate limit", "Restrict access", "Allow bypass", "Custom responses", "Notifications"]
  },
  {
    icon: Settings,
    title: "Control Level",
    items: ["Automated actions", "Manual intervention", "Hybrid approach", "Approval workflows", "Custom logic", "API overrides"]
  }
];

const Configuration = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-card backdrop-blur-sm border border-border/50 rounded-full px-4 py-2 shadow-soft mb-6">
            <Settings className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-foreground">Fully Configurable</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Threshold-Based Control System
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Every monitoring and restriction mechanism in Access IQ is driven by client-defined thresholds. 
            You have complete control over what gets tracked, when actions are triggered, and how your API is protected.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {configOptions.map((option, index) => (
            <Card key={index} className="group hover:shadow-medium transition-smooth border-border/50 bg-gradient-card backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-smooth">
                    <option.icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-4 text-foreground group-hover:text-primary transition-smooth">
                  {option.title}
                </h3>
                <ul className="space-y-2">
                  {option.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-sm text-muted-foreground flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary/50" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Key benefit callout */}
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-hero text-primary-foreground shadow-medium border-0">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Complete Control & Flexibility</h3>
              <p className="text-lg mb-6 opacity-90">
                Admins can enable or disable automated restriction or blocking, 
                allowing full control over how Access IQ enforces your traffic policies.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold mb-2">100%</div>
                  <div className="text-sm opacity-80">Customizable Thresholds</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">Real-time</div>
                  <div className="text-sm opacity-80">Configuration Updates</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">Zero</div>
                  <div className="text-sm opacity-80">Downtime Changes</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Configuration;