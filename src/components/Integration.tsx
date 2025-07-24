import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, ArrowRight, Clock } from "lucide-react";

const Integration = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Simple Integration
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Drop into any backend with minimal overhead. 
            Two endpoints, maximum protection.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Decision API */}
          <Card className="bg-gradient-card backdrop-blur-sm border-border/50 shadow-soft hover:shadow-medium transition-smooth">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Code className="w-5 h-5 text-primary" />
                </div>
                <CardTitle className="text-xl">Decision API</CardTitle>
                <Badge variant="secondary" className="ml-auto">Before Request</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Check before serving requests. Get instant allow/deny decisions with context.
              </p>
              
              <div className="bg-background/50 rounded-lg p-4 border border-border/50 font-mono text-sm">
                <div className="text-accent font-semibold mb-2">POST /api/v1/decision</div>
                <div className="text-muted-foreground mb-3">Request:</div>
                <pre className="text-foreground whitespace-pre-wrap">{`{
  "ip": "192.168.1.1",
  "email": "user@example.com",
  "user_agent": "Mozilla/5.0...",
  "country": "US"
}`}</pre>
                
                <div className="mt-4 text-muted-foreground mb-2">Response:</div>
                <pre className="text-foreground whitespace-pre-wrap">{`{
  "action": "allow",
  "reason": "within_limits",
  "ttl": 300
}`}</pre>
              </div>
            </CardContent>
          </Card>
          
          {/* Logging API */}
          <Card className="bg-gradient-card backdrop-blur-sm border-border/50 shadow-soft hover:shadow-medium transition-smooth">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-accent/10">
                  <ArrowRight className="w-5 h-5 text-accent" />
                </div>
                <CardTitle className="text-xl">Logging API</CardTitle>
                <Badge variant="secondary" className="ml-auto">After Request</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Report request outcomes. Powers analytics and adaptive learning.
              </p>
              
              <div className="bg-background/50 rounded-lg p-4 border border-border/50 font-mono text-sm">
                <div className="text-accent font-semibold mb-2">POST /api/v1/log</div>
                <div className="text-muted-foreground mb-3">Request:</div>
                <pre className="text-foreground whitespace-pre-wrap">{`{
  "ip": "192.168.1.1",
  "status_code": 200,
  "response_time": 150,
  "endpoint": "/api/users",
  "method": "GET"
}`}</pre>
                
                <div className="mt-4 text-muted-foreground mb-2">Response:</div>
                <pre className="text-foreground whitespace-pre-wrap">{`{
  "logged": true,
  "anomaly_score": 0.12
}`}</pre>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Performance stats */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-6 bg-gradient-card backdrop-blur-sm border border-border/50 rounded-full px-6 py-4 shadow-soft">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-primary" />
              <span className="font-semibold text-foreground">&lt;200ms latency</span>
            </div>
            <div className="w-px h-6 bg-border" />
            <div className="flex items-center gap-2">
              <Code className="w-5 h-5 text-accent" />
              <span className="font-semibold text-foreground">Go + Fiber</span>
            </div>
            <div className="w-px h-6 bg-border" />
            <div className="flex items-center gap-2">
              <span className="font-semibold text-foreground">Minimal overhead</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Integration;