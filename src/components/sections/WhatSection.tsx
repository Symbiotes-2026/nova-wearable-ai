import { Zap, Mic, FileText } from 'lucide-react';

const WhatSection = () => {
  const features = [
    {
      icon: Zap,
      title: "QuickTap Routines™",
      description: "Double-tap to send \"On my way 10m\" + share live location."
    },
    {
      icon: Mic,
      title: "Instant Voice Capsule",
      description: "Press-hold ≤6s: \"Reminder Friday insurance\" → set."
    },
    {
      icon: FileText,
      title: "Context Cards",
      description: "Meeting time? Nova surfaces join link + starts notes."
    }
  ];

  return (
    <section id="what" className="section-padding bg-card/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            A <span className="text-gradient">2-second</span> AI assistant{' '}
            <br />that lives on you
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Nova runs on a tiny wearable core. Voice or gesture triggers instant actions. 
            Core intents run on-device for speed and privacy; your phone handles rich actions.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="glass-card p-8 text-center hover-lift animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-primary mb-6">
                <feature.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatSection;