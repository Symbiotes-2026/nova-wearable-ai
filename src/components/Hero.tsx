import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
const heroImage = '/lovable-uploads/4f5c4c6b-fad6-4384-b43b-6896313cae20.png';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 hero-gradient" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left animate-fade-in">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 tracking-tight">
              Do more in{' '}
              <span className="text-gradient">2 seconds</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Nova is a Jarvis-style AI assistant you wear. Speak or tap—Nova handles 
              reminders, quick texts, live location, meetings, and translate. No phone unlock. 
              Private by design.
            </p>

            {/* Badges */}
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-8">
              <Badge variant="outline" className="glass">
                Edge AI
              </Badge>
              <Badge variant="outline" className="glass">
                Works offline for core commands
              </Badge>
              <Badge variant="outline" className="glass">
                Mic kill-switch
              </Badge>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="hero" size="lg" className="text-lg px-8">
                Get Early Access
              </Button>
              <Button variant="glass" size="lg" className="text-lg px-8">
                Watch 15-sec Demo
              </Button>
            </div>
          </div>

          {/* Visual */}
          <div className="relative flex justify-center lg:justify-end animate-fade-in">
            <div className="relative">
              <img
                src={heroImage}
                alt="Nova Spectacles - Midnight Indigo & Matte Graphite with AI assistant features"
                className="w-full max-w-lg h-auto rounded-2xl shadow-nova animate-glow-pulse"
              />
              <div className="absolute inset-0 bg-gradient-primary opacity-10 rounded-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;