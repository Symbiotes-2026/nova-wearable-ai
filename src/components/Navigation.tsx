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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isVisible ? 'bg-background/80 backdrop-blur-xl border-b border-border' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-8 py-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-7 h-7 rounded-full bg-foreground"></div>
            <span className="text-xl font-medium text-foreground">Nova</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-12">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-muted-foreground hover:text-foreground transition-all duration-300 text-sm font-medium"
              >
                {item.label}
              </a>
            ))}
          </div>

          <Button variant="default" size="sm" className="rounded-full px-6">
            Get Early Access
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;