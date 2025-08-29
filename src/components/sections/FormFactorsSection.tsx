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
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Snap the core into{' '}
            <span className="text-gradient">what you wear</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            One core, many ways to wear. Choose the form factor that fits your lifestyle.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {formFactors.map((factor, index) => (
            <div
              key={index}
              className="glass-card p-6 hover-lift animate-fade-in group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative mb-6">
                <img
                  src={factor.image}
                  alt={`Nova AI Assistant ${factor.title} form factor`}
                  className="w-full h-48 object-cover rounded-xl transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300" />
              </div>
              
              <h3 className="text-xl font-semibold mb-3">{factor.title}</h3>
              
              <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                {factor.description}
              </p>

              <div className="space-y-2">
                {factor.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FormFactorsSection;