import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import heroImage from '@/assets/nova-core-hero.jpg';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative bg-background">
      <div className="container mx-auto px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Hero headline */}
          <h1 className="display-large mb-8 text-foreground">
            Do more in{' '}
            <span className="text-gradient">2 seconds</span>
          </h1>
          
          {/* Subheadline */}
          <p className="body-large text-muted-foreground mb-12 max-w-3xl mx-auto">
            Nova is a Jarvis-style AI assistant you wear. Speak or tap—Nova handles 
            reminders, quick texts, live location, meetings, and translate.
          </p>

          {/* Product image */}
          <div className="relative mb-16">
            <img
              src={heroImage}
              alt="Nova AI Assistant Core"
              className="w-full max-w-2xl mx-auto h-auto rounded-3xl shadow-nova"
            />
          </div>

          {/* Features */}
          <div className="flex flex-wrap gap-6 justify-center mb-12 text-sm text-muted-foreground">
            <span>Edge AI</span>
            <span>•</span>
            <span>Works offline</span>
            <span>•</span>
            <span>Mic kill-switch</span>
            <span>•</span>
            <span>Private by design</span>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="rounded-full px-8 py-3 text-base">
              Get Early Access
            </Button>
            <Button variant="outline" size="lg" className="rounded-full px-8 py-3 text-base">
              Watch Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;