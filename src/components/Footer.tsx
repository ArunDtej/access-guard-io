import { Shield, Github, Twitter, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Shield className="w-8 h-8 text-primary-glow" />
              <span className="text-2xl font-bold">Access IQ</span>
            </div>
            <p className="text-background/70 leading-relaxed max-w-md">
              Enterprise-grade API traffic monitoring, control, and protection layer 
              built for companies that need real-time governance without complexity.
            </p>
            <div className="flex gap-4 mt-6">
              <Button variant="ghost" size="icon" className="text-background/70 hover:text-primary-glow hover:bg-background/10">
                <Github className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-background/70 hover:text-primary-glow hover:bg-background/10">
                <Twitter className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-background/70 hover:text-primary-glow hover:bg-background/10">
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-background/70 hover:text-primary-glow hover:bg-background/10">
                <Mail className="w-5 h-5" />
              </Button>
            </div>
          </div>
          
          {/* Product */}
          <div>
            <h3 className="font-semibold mb-4 text-lg">Product</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-background/70 hover:text-primary-glow transition-smooth">Features</a></li>
              <li><a href="#" className="text-background/70 hover:text-primary-glow transition-smooth">Pricing</a></li>
              <li><a href="#" className="text-background/70 hover:text-primary-glow transition-smooth">Integration</a></li>
              <li><a href="#" className="text-background/70 hover:text-primary-glow transition-smooth">Documentation</a></li>
              <li><a href="#" className="text-background/70 hover:text-primary-glow transition-smooth">API Reference</a></li>
            </ul>
          </div>
          
          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4 text-lg">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-background/70 hover:text-primary-glow transition-smooth">About</a></li>
              <li><a href="#" className="text-background/70 hover:text-primary-glow transition-smooth">Blog</a></li>
              <li><a href="#" className="text-background/70 hover:text-primary-glow transition-smooth">Careers</a></li>
              <li><a href="#" className="text-background/70 hover:text-primary-glow transition-smooth">Contact</a></li>
              <li><a href="#" className="text-background/70 hover:text-primary-glow transition-smooth">Security</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-background/70">
              © 2024 Access IQ. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-background/70 hover:text-primary-glow transition-smooth">Privacy Policy</a>
              <a href="#" className="text-background/70 hover:text-primary-glow transition-smooth">Terms of Service</a>
              <a href="#" className="text-background/70 hover:text-primary-glow transition-smooth">Status</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;