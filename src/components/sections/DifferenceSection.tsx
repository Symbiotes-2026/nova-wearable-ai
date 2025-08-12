import { Zap, Shield, Puzzle, Phone } from 'lucide-react';

const DifferenceSection = () => {
  const differences = [
    {
      icon: Zap,
      title: "2-second actions",
      description: "no unlock, no app hunt."
    },
    {
      icon: Shield,
      title: "Offline core intents",
      description: "privacy by default; mic kill-switch."
    },
    {
      icon: Puzzle,
      title: "Modular shells",
      description: "glasses, hats, pendants, bracelets, clips."
    },
    {
      icon: Phone,
      title: "Safety backstop",
      description: "SOS works even when networks fail."
    }
  ];

  return (
    <section className="section-padding bg-card/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Not another HUD. Not a camera.{' '}
            <br />A <span className="text-gradient">time machine</span>.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {differences.map((diff, index) => (
            <div
              key={index}
              className="text-center animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-primary mb-6">
                <diff.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              
              <h3 className="text-xl font-semibold mb-3">{diff.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {diff.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DifferenceSection;