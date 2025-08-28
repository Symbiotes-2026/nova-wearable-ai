import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import heroImage from '@/assets/nova-core-hero.jpg';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative bg-background overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '0s' }}></div>
        <div className="absolute top-3/4 right-1/4 w-64 h-64 bg-accent/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-48 h-48 bg-primary/5 rounded-full blur-xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>
      
      <div className="container mx-auto px-8 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Hero headline with stagger animation */}
          <div className="stagger-animation">
            <h1 className="display-large mb-8 text-foreground">
              Do more in{' '}
              <span className="text-gradient bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">2 seconds</span>
            </h1>
          </div>
          
          {/* Subheadline with delay */}
          <div className="stagger-animation" style={{ animationDelay: '0.2s' }}>
            <p className="body-large text-muted-foreground mb-16 max-w-4xl mx-auto">
              Nova is a Jarvis-style AI assistant you wear. Speak or tap—Nova handles 
              reminders, quick texts, live location, meetings, and translate.
            </p>
          </div>

          {/* Product image with hover effects */}
          <div className="relative mb-20 stagger-animation" style={{ animationDelay: '0.4s' }}>
            <div className="relative group">
              <img
                src={heroImage}
                alt="Nova AI Assistant Core"
                className="w-full max-w-3xl mx-auto h-auto rounded-3xl shadow-nova transition-all duration-700 group-hover:scale-105 group-hover:shadow-[0_30px_60px_rgba(0,0,0,0.15)]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
            </div>
          </div>

          {/* Features with enhanced animations */}
          <div className="flex flex-wrap gap-8 justify-center mb-16 text-sm text-muted-foreground stagger-animation" style={{ animationDelay: '0.6s' }}>
            {['Edge AI', 'Works offline', 'Mic kill-switch', 'Private by design'].map((feature, index) => (
              <div key={feature} className="flex items-center space-x-2 hover:text-foreground transition-colors duration-300" style={{ animationDelay: `${0.1 * index}s` }}>
                <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></div>
                <span>{feature}</span>
              </div>
            ))}
          </div>

          {/* CTA with enhanced animations */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center stagger-animation" style={{ animationDelay: '0.8s' }}>
            <Button 
              size="lg" 
              className="rounded-full px-10 py-4 text-base font-medium transition-all duration-300 hover:scale-105 hover:shadow-[0_10px_30px_rgba(0,0,0,0.2)] hover:-translate-y-1"
            >
              Get Early Access
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="rounded-full px-10 py-4 text-base font-medium transition-all duration-300 hover:scale-105 hover:bg-secondary hover:border-accent"
            >
              Watch Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;