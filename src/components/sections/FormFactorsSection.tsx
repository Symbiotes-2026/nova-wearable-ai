import glassesImage from '@/assets/nova-glasses.jpg';
import pendantImage from '@/assets/nova-pendant.jpg';
import braceletImage from '@/assets/nova-bracelet.jpg';
import hatImage from '@/assets/nova-hat.jpg';

const FormFactorsSection = () => {
  const formFactors = [
    {
      image: glassesImage,
      title: "Glasses",
      description: "fastest voice pickup; head gestures; bone-conduction",
      features: ["Voice optimized", "Head gestures", "Bone conduction"]
    },
    {
      image: pendantImage,
      title: "Pendant",
      description: "SOS triple-tap + breathing-coach haptics",
      features: ["SOS ready", "Haptic feedback", "Discreet wearing"]
    },
    {
      image: braceletImage,
      title: "Bracelet", 
      description: "HRV/stress monitoring + gesture control",
      features: ["Health tracking", "Gesture control", "Always accessible"]
    },
    {
      image: hatImage,
      title: "Hat/Cap",
      description: "hands-free assistant; mesh SOS antenna height",
      features: ["Hands-free", "Mesh network", "Sports friendly"]
    }
  ];

  return (
    <section id="forms" className="section-padding bg-background">
      <div className="container mx-auto px-8">
        <div className="text-center mb-20">
          <h2 className="headline mb-8 text-foreground stagger-animation">
            One core. Many ways to wear.
          </h2>
          <p className="body-large text-muted-foreground max-w-2xl mx-auto stagger-animation" style={{ animationDelay: '0.2s' }}>
            Choose the form factor that fits your lifestyle.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {formFactors.map((factor, index) => (
            <div
              key={index}
              className="interactive-card bg-card rounded-3xl overflow-hidden group border border-border/50 hover:border-accent/30"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={factor.image}
                  alt={`Nova ${factor.title}`}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-medium mb-3 text-foreground group-hover:text-accent transition-colors duration-300">
                  {factor.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {factor.description}
                </p>
                
                {/* Enhanced feature list */}
                <div className="space-y-2">
                  {factor.features.map((feature, featureIndex) => (
                    <div 
                      key={featureIndex} 
                      className="flex items-center space-x-3 text-xs text-muted-foreground group-hover:text-foreground transition-colors duration-300"
                      style={{ animationDelay: `${featureIndex * 0.1}s` }}
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FormFactorsSection;