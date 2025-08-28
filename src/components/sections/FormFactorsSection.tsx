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
          <h2 className="headline mb-8 text-foreground">
            One core. Many ways to wear.
          </h2>
          <p className="body-large text-muted-foreground max-w-2xl mx-auto">
            Choose the form factor that fits your lifestyle.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {formFactors.map((factor, index) => (
            <div
              key={index}
              className="bg-card rounded-3xl overflow-hidden hover-lift group border border-border"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative aspect-square">
                <img
                  src={factor.image}
                  alt={`Nova ${factor.title}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-medium mb-2 text-foreground">{factor.title}</h3>
                <p className="text-muted-foreground text-sm">
                  {factor.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FormFactorsSection;