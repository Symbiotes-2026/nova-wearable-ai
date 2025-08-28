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
      <div className="container mx-auto px-8">
        <div className="text-center mb-20">
          <h2 className="headline mb-8 text-foreground">
            Get early access
          </h2>
          <p className="body-large text-muted-foreground max-w-2xl mx-auto">
            Be among the first to experience 2-second AI assistance.
          </p>
        </div>

        <div className="max-w-md mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-14 text-lg rounded-full border-2 px-6"
              required
            />
            
            <Button 
              type="submit" 
              size="lg" 
              className="w-full text-lg h-14 rounded-full"
            >
              Get Early Access
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;