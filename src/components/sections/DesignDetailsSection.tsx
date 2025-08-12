import { useState } from 'react';
import { ChevronLeft, ChevronRight, Zap, Mic, Usb, Cpu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import glassesSketch from '@/assets/nova-glasses-360-sketch.jpg';
import earView from '@/assets/nova-glasses-ear-view.jpg';
import coreExploded from '@/assets/nova-core-exploded.jpg';
import customerView from '@/assets/nova-pendant-customer-view.jpg';
import designShowcase from '@/assets/nova-design-showcase.jpg';

const DesignDetailsSection = () => {
  const [currentView, setCurrentView] = useState(0);

  const designViews = [
    {
      image: designShowcase,
      title: "Complete Design Family",
      description: "All form factors with technical specifications and core snap-in mechanism"
    },
    {
      image: glassesSketch,
      title: "360° Technical Sketch",
      description: "Engineering blueprints showing all perspectives and component placement"
    },
    {
      image: earView,
      title: "Ear-Level Experience",
      description: "Side profile showing bone conduction speakers and microphone positioning"
    },
    {
      image: coreExploded,
      title: "Core Module Breakdown",
      description: "Exploded view revealing AI processor, microphones, battery, and connectors"
    },
    {
      image: customerView,
      title: "Real-World Usage",
      description: "Customer perspective showing natural interaction and component accessibility"
    }
  ];

  const technicalSpecs = [
    {
      icon: Cpu,
      title: "AI Edge Processor",
      description: "Custom silicon for wake-word detection and intent processing"
    },
    {
      icon: Mic,
      title: "Microphone Array",
      description: "Noise-canceling mics with directional pickup patterns"
    },
    {
      icon: Usb,
      title: "USB-C Charging",
      description: "Fast charging port integrated seamlessly into frame design"
    },
    {
      icon: Zap,
      title: "Haptic Feedback",
      description: "Precise vibration motors for subtle confirmation signals"
    }
  ];

  const nextView = () => {
    setCurrentView((prev) => (prev + 1) % designViews.length);
  };

  const prevView = () => {
    setCurrentView((prev) => (prev - 1 + designViews.length) % designViews.length);
  };

  return (
    <section id="design" className="section-padding bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Designed for{' '}
            <span className="text-gradient">everyday life</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Every detail engineered for comfort, functionality, and seamless integration with your daily routine.
          </p>
        </div>

        {/* Interactive Design Viewer */}
        <div className="mb-16">
          <Card className="glass-card overflow-hidden">
            <div className="relative">
              <img
                src={designViews[currentView].image}
                alt={`Nova AI Assistant - ${designViews[currentView].title}`}
                className="w-full h-[500px] lg:h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              
              {/* Navigation Controls */}
              <Button
                variant="ghost"
                size="icon"
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/20 backdrop-blur-sm hover:bg-background/30"
                onClick={prevView}
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
              
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/20 backdrop-blur-sm hover:bg-background/30"
                onClick={nextView}
              >
                <ChevronRight className="h-6 w-6" />
              </Button>

              {/* View Info */}
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {designViews[currentView].title}
                </h3>
                <p className="text-white/80 text-sm">
                  {designViews[currentView].description}
                </p>
              </div>

              {/* View Indicators */}
              <div className="absolute bottom-6 right-6 flex space-x-2">
                {designViews.map((_, index) => (
                  <button
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentView ? 'bg-primary' : 'bg-white/40'
                    }`}
                    onClick={() => setCurrentView(index)}
                  />
                ))}
              </div>
            </div>
          </Card>
        </div>

        {/* Technical Specifications */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {technicalSpecs.map((spec, index) => (
            <div
              key={index}
              className="glass-card p-6 hover-lift animate-fade-in group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4 group-hover:bg-primary/20 transition-colors">
                <spec.icon className="w-6 h-6 text-primary" />
              </div>
              
              <h3 className="text-lg font-semibold mb-3">{spec.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {spec.description}
              </p>
            </div>
          ))}
        </div>

        {/* Design Philosophy */}
        <div className="mt-16 text-center">
          <div className="glass-card p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold mb-4">
              Invisible Technology, Visible Results
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Every component is precisely positioned for optimal performance while maintaining 
              the natural look and feel of everyday accessories. The core module snaps securely 
              into any form factor, bringing AI assistance wherever life takes you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesignDetailsSection;