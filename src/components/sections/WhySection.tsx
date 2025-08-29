import { Smartphone, Clock, Shield, Zap } from 'lucide-react';

const WhySection = () => {
  const problems = [
    {
      icon: Clock,
      text: "Unlock → open app → tap → type = lost minutes daily."
    },
    {
      icon: Smartphone,
      text: "In motion (commute, events), phone use is clumsy or unsafe."
    },
    {
      icon: Zap,
      text: "Critical moments need action now—not apps or screens."
    },
    {
      icon: Shield,
      text: "People want speed and privacy, not more notifications."
    }
  ];

  return (
    <section id="why" className="section-padding bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Phones are slow for life's{' '}
            <span className="text-gradient">fast moments</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="glass-card p-8 hover-lift hover-glow animate-fade-in group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 hover-bounce">
                  <problem.icon className="w-8 h-8 text-primary transition-colors duration-300 group-hover:text-primary/80" />
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {problem.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhySection;