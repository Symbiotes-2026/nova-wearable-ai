import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

// Pendant designs
import pendant01 from '@/assets/pendant-design-01.jpg';
import pendant02 from '@/assets/pendant-design-02.jpg';
import pendant03 from '@/assets/pendant-design-03.jpg';
import pendant04 from '@/assets/pendant-design-04.jpg';
import pendant05 from '@/assets/pendant-design-05.jpg';
import pendant06 from '@/assets/pendant-design-06.jpg';
import pendant07 from '@/assets/pendant-design-07.jpg';
import pendant08 from '@/assets/pendant-design-08.jpg';
import pendant09 from '@/assets/pendant-design-09.jpg';
import pendant10 from '@/assets/pendant-design-10.jpg';

// Glasses designs
import glasses01 from '@/assets/glasses-design-01.jpg';
import glasses02 from '@/assets/glasses-design-02.jpg';
import glasses03 from '@/assets/glasses-design-03.jpg';
import glasses04 from '@/assets/glasses-design-04.jpg';
import glasses05 from '@/assets/glasses-design-05.jpg';
import glasses06 from '@/assets/glasses-design-06.jpg';
import glasses07 from '@/assets/glasses-design-07.jpg';
import glasses08 from '@/assets/glasses-design-08.jpg';
import glasses09 from '@/assets/glasses-design-09.jpg';
import glasses10 from '@/assets/glasses-design-10.jpg';

// Bracelet designs
import bracelet01 from '@/assets/bracelet-design-01.jpg';
import bracelet02 from '@/assets/bracelet-design-02.jpg';
import bracelet03 from '@/assets/bracelet-design-03.jpg';
import bracelet04 from '@/assets/bracelet-design-04.jpg';
import bracelet05 from '@/assets/bracelet-design-05.jpg';
import bracelet06 from '@/assets/bracelet-design-06.jpg';
import bracelet07 from '@/assets/bracelet-design-07.jpg';
import bracelet08 from '@/assets/bracelet-design-08.jpg';
import bracelet09 from '@/assets/bracelet-design-09.jpg';
import bracelet10 from '@/assets/bracelet-design-10.jpg';

const DesignVariationsSection = () => {
  const [activeCategory, setActiveCategory] = useState<'pendant' | 'glasses' | 'bracelet'>('pendant');
  const [currentIndex, setCurrentIndex] = useState(0);

  const designCollections = {
    pendant: {
      title: "Pendant Designs",
      description: "Discrete chest-worn AI assistant",
      designs: [
        { image: pendant01, name: "Sleek Modern", feature: "Premium finish" },
        { image: pendant02, name: "Teardrop", feature: "Geometric pattern" },
        { image: pendant03, name: "Circular Ring", feature: "LED indicator" },
        { image: pendant04, name: "Hexagonal", feature: "Carbon fiber" },
        { image: pendant05, name: "Organic Pebble", feature: "Touch surface" },
        { image: pendant06, name: "Diamond Cut", feature: "Angular design" },
        { image: pendant07, name: "Flat Rectangle", feature: "LED strip" },
        { image: pendant08, name: "Crescent", feature: "Gradient finish" },
        { image: pendant09, name: "Triangular", feature: "Titanium body" },
        { image: pendant10, name: "Ribbed Oval", feature: "Textured grip" }
      ]
    },
    glasses: {
      title: "Smart Glasses",
      description: "Hands-free voice interaction",
      designs: [
        { image: glasses01, name: "Sleek Frame", feature: "Integrated core" },
        { image: glasses02, name: "Round Classic", feature: "Temple accent" },
        { image: glasses03, name: "Angular Tech", feature: "Geometric style" },
        { image: glasses04, name: "Cat-Eye", feature: "Detail lines" },
        { image: glasses05, name: "Oversized", feature: "LED indicators" },
        { image: glasses06, name: "Aviator", feature: "Tech accents" },
        { image: glasses07, name: "Wraparound", feature: "Side strips" },
        { image: glasses08, name: "Retro Frame", feature: "Button controls" },
        { image: glasses09, name: "Hexagonal", feature: "Geometric pattern" },
        { image: glasses10, name: "Sport Style", feature: "Racing stripes" }
      ]
    },
    bracelet: {
      title: "Smart Bracelets",
      description: "Wrist-based health monitoring",
      designs: [
        { image: bracelet01, name: "Sleek Band", feature: "LED display" },
        { image: bracelet02, name: "Curved Link", feature: "Geometric pattern" },
        { image: bracelet03, name: "Chunky Sport", feature: "Button controls" },
        { image: bracelet04, name: "Flexible", feature: "Touch surface" },
        { image: bracelet05, name: "Segmented", feature: "Core integration" },
        { image: bracelet06, name: "Magnetic Clasp", feature: "Accent stripes" },
        { image: bracelet07, name: "Perforated", feature: "Ventilation" },
        { image: bracelet08, name: "Chain Link", feature: "Luxury finish" },
        { image: bracelet09, name: "Woven Tech", feature: "Fiber accents" },
        { image: bracelet10, name: "Articulated", feature: "LED strip" }
      ]
    }
  };

  const currentCollection = designCollections[activeCategory];

  const nextDesign = () => {
    setCurrentIndex((prev) => (prev + 1) % currentCollection.designs.length);
  };

  const prevDesign = () => {
    setCurrentIndex((prev) => (prev - 1 + currentCollection.designs.length) % currentCollection.designs.length);
  };

  return (
    <section id="variations" className="section-padding bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-gradient">10 unique designs</span> per form
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Color view • Sketch view • 360° rotation
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center mb-12">
          <div className="glass-card p-2 inline-flex rounded-full">
            {Object.keys(designCollections).map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "ghost"}
                size="sm"
                className="rounded-full px-6"
                onClick={() => {
                  setActiveCategory(category as keyof typeof designCollections);
                  setCurrentIndex(0);
                }}
              >
                {designCollections[category as keyof typeof designCollections].title}
              </Button>
            ))}
          </div>
        </div>

        {/* Main Viewer */}
        <div className="max-w-4xl mx-auto mb-12">
          <Card className="glass-card overflow-hidden">
            <div className="relative">
              <img
                src={currentCollection.designs[currentIndex].image}
                alt={`${activeCategory} design ${currentIndex + 1}`}
                className="w-full h-[500px] lg:h-[600px] object-cover"
              />
              
              {/* Navigation */}
              <Button
                variant="ghost"
                size="icon"
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/20 backdrop-blur-sm hover:bg-background/30"
                onClick={prevDesign}
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
              
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/20 backdrop-blur-sm hover:bg-background/30"
                onClick={nextDesign}
              >
                <ChevronRight className="h-6 w-6" />
              </Button>

              {/* Design Info */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex items-center justify-between text-white">
                  <div>
                    <h3 className="text-xl font-semibold mb-1">
                      {currentCollection.designs[currentIndex].name}
                    </h3>
                    <p className="text-white/80 text-sm">
                      {currentCollection.designs[currentIndex].feature}
                    </p>
                  </div>
                  <div className="text-right text-sm text-white/60">
                    {currentIndex + 1} / {currentCollection.designs.length}
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Thumbnail Grid */}
        <div className="grid grid-cols-5 lg:grid-cols-10 gap-3 max-w-6xl mx-auto">
          {currentCollection.designs.map((design, index) => (
            <button
              key={index}
              className={`aspect-square rounded-lg overflow-hidden transition-all ${
                index === currentIndex
                  ? 'ring-2 ring-primary scale-105'
                  : 'opacity-60 hover:opacity-100'
              }`}
              onClick={() => setCurrentIndex(index)}
            >
              <img
                src={design.image}
                alt={design.name}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>

        {/* Category Description */}
        <div className="text-center mt-12">
          <div className="glass-card p-6 max-w-2xl mx-auto">
            <h3 className="text-lg font-semibold mb-2">
              {currentCollection.title}
            </h3>
            <p className="text-muted-foreground">
              {currentCollection.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesignVariationsSection;