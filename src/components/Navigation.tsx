import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#why', label: 'Why' },
    { href: '#what', label: 'What' },
    { href: '#how', label: 'How' },
    { href: '#forms', label: 'Wearables' },
    { href: '#design', label: 'Design' },
    { href: '#variations', label: 'Styles' },
    { href: '#pricing', label: 'Access' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isVisible ? 'glass backdrop-blur-xl' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full bg-gradient-primary animate-glow-pulse"></div>
            <span className="text-xl font-bold text-gradient">Nova</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="nav-link text-muted-foreground font-medium"
              >
                {item.label}
              </a>
            ))}
          </div>

          <Button variant="hero" size="sm" className="hover-glow">
            Get Early Access
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;