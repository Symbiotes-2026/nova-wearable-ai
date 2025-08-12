import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState } from 'react';

const PricingSection = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle email submission
    console.log('Email submitted:', email);
  };

  return (
    <section id="pricing" className="section-padding bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Reserve <span className="text-gradient">Nova Core</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Pick your first shell. Add pro routines anytime.
          </p>
        </div>

        <div className="max-w-md mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-12 text-lg"
                required
              />
            </div>
            
            <Button 
              type="submit" 
              variant="hero" 
              size="lg" 
              className="w-full text-lg h-12"
            >
              Get Early Access
            </Button>
          </form>

          <p className="text-center text-sm text-muted-foreground mt-6">
            Be among the first to experience 2-second AI assistance
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;