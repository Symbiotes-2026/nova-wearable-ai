import { Cpu, Smartphone, Lock, Mic } from 'lucide-react';

const TechSection = () => {
  const techFeatures = [
    {
      icon: Cpu,
      title: "Edge processing",
      description: "Wake-word, tiny STT, intent router, gesture engine"
    },
    {
      icon: Smartphone,
      title: "Platform integration",
      description: "Android Intents / iOS Shortcuts for rich actions"
    },
    {
      icon: Lock,
      title: "Privacy first",
      description: "Encrypted routines + SOS; hardware mic kill-switch"
    },
    {
      icon: Mic,
      title: "On-device audio",
      description: "Raw audio for core intents stays on-device"
    }
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Built like pro hardware—
            <span className="text-gradient">just smaller</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {techFeatures.map((feature, index) => (
            <div
              key={index}
              className="glass-card p-6 hover-lift animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-muted mb-4">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              
              <h3 className="text-lg font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechSection;