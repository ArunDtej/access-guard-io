import { Shield, Activity, Globe, Users, Lock, BarChart3, Settings, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Activity,
    title: "Rate Limiting & Abuse Protection",
    description: "IP and email-based request rate tracking across multiple timeframes. Set thresholds to restrict or block traffic automatically when limits are breached."
  },
  {
    icon: Shield,
    title: "Anomaly Detection by Status Code",
    description: "Monitor error patterns (4xx, 5xx spikes) per IP and email. Configure custom anomaly thresholds per time window with auto-triggered actions."
  },
  {
    icon: Globe,
    title: "Geo & Network-Based Access Controls",
    description: "Allow or deny traffic based on countries, domains, or network zones. Detect VPN abuse and credential sharing with mobility restrictions."
  },
  {
    icon: Users,
    title: "Intelligent User Tracking & Linkage",
    description: "Log and visualize all IPs, user agents, countries, and domains linked to each user. Built-in graph visualizations help spot abuse clusters."
  },
  {
    icon: Lock,
    title: "Blacklist & Whitelist Management",
    description: "Define custom allow/deny lists for IPs, emails, status codes, countries, and user agents based on known-good or bad behavior patterns."
  },
  {
    icon: BarChart3,
    title: "Advanced Dashboards & Insights",
    description: "Rich analytics dashboard with user-level insights, geo distribution heatmaps, usage graphs, and real-time network activity maps."
  },
  {
    icon: Settings,
    title: "Fully Configurable Thresholds",
    description: "Every monitoring and restriction mechanism is driven by client-defined thresholds. You decide what to track, timeframes, and actions to trigger."
  },
  {
    icon: Zap,
    title: "Ultra-Low Latency Integration",
    description: "Built with Go + Fiber for <200ms API responses. Integrates via two simple endpoints with minimal overhead to any backend system."
  }
];

const Features = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Key Features at a Glance
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive API protection with intelligent monitoring, 
            real-time controls, and actionable insights.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-medium transition-smooth border-border/50 bg-gradient-card backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-smooth">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-3 text-foreground group-hover:text-primary transition-smooth">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;