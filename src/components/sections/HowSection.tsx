import { Mic, Brain, Zap, CheckCircle } from 'lucide-react';

const HowSection = () => {
  const steps = [
    {
      icon: Mic,
      title: "Wake",
      description: "\"Hey Nova\" or press-hold"
    },
    {
      icon: Brain,
      title: "Understand",
      description: "tiny on-device STT + intent"
    },
    {
      icon: Zap,
      title: "Act",
      description: "runs routine instantly (offline where possible)"
    },
    {
      icon: CheckCircle,
      title: "Confirm",
      description: "subtle haptic + \"Done\""
    }
  ];

  return (
    <section id="how" className="section-padding bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Edge intelligence.{' '}
            <span className="text-gradient">No friction.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="relative">
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-primary opacity-30" />
                )}
                
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-primary mb-6 relative z-10">
                  <step.icon className="w-8 h-8 text-primary-foreground" />
                </div>
              </div>
              
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 glass-card max-w-4xl mx-auto">
          <p className="text-center text-muted-foreground">
            <strong>Emergency Feature:</strong> Triple-tap SOS + Mesh Relay sends location + short audio; 
            relays via nearby devices if no network.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowSection;