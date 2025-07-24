import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Globe, Server, Zap } from "lucide-react";

const pricingPlans = [
  {
    name: "Free Tier",
    price: "Free",
    period: "forever",
    description: "Perfect for getting started with API monitoring",
    features: [
      "25,000 requests per month",
      "Global US deployment",
      "Basic rate limiting",
      "Standard dashboards",
      "Email support"
    ],
    icon: Globe,
    popular: false,
    cta: "Start Free"
  },
  {
    name: "Regional Cluster",
    price: "Custom",
    period: "pricing",
    description: "Shared infrastructure in your preferred region",
    features: [
      "Choose your AWS region",
      "Shared cluster deployment",
      "Advanced anomaly detection",
      "Geo-based controls",
      "Priority support",
      "Custom thresholds"
    ],
    icon: Server,
    popular: true,
    cta: "Contact Sales"
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "pricing",
    description: "Dedicated infrastructure for large-scale operations",
    features: [
      "Dedicated server per user",
      "Multi-region deployment",
      "Advanced user tracking",
      "Custom integrations",
      "24/7 dedicated support",
      "SLA guarantees"
    ],
    icon: Zap,
    popular: false,
    cta: "Contact Sales"
  }
];

const Pricing = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Flexible Deployment Options
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From free tier to dedicated enterprise infrastructure, 
            choose the deployment that fits your scale and requirements.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative overflow-hidden transition-smooth hover:shadow-medium ${
                plan.popular 
                  ? 'border-primary bg-gradient-card shadow-medium' 
                  : 'border-border/50 bg-gradient-card backdrop-blur-sm'
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-primary" />
              )}
              
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-4">
                  <div className={`p-3 rounded-full ${
                    plan.popular ? 'bg-primary/20' : 'bg-muted/50'
                  }`}>
                    <plan.icon className={`w-8 h-8 ${
                      plan.popular ? 'text-primary' : 'text-muted-foreground'
                    }`} />
                  </div>
                </div>
                
                <CardTitle className="text-2xl font-bold text-foreground">
                  {plan.name}
                </CardTitle>
                
                <div className="mt-4">
                  <span className="text-4xl font-bold text-primary">{plan.price}</span>
                  {plan.period && (
                    <span className="text-muted-foreground ml-2">/{plan.period}</span>
                  )}
                </div>
                
                <p className="text-muted-foreground mt-2">
                  {plan.description}
                </p>
              </CardHeader>
              
              <CardContent className="pt-0">
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  variant={plan.popular ? "hero" : "outline"} 
                  className="w-full"
                  size="lg"
                >
                  {plan.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            All plans include ultra-low latency (&lt;200ms) and seamless integration via two simple API endpoints.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;