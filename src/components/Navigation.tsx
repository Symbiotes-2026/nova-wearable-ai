import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown, Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#why', label: 'Why Nova' },
    { href: '#what', label: 'Features' },
    { href: '#how', label: 'How it Works' },
    { href: '#forms', label: 'Wearables', hasDropdown: true },
    { href: '#design', label: 'Design' },
    { href: '#variations', label: 'Styles' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isVisible ? 'bg-background/95 backdrop-blur-xl border-b border-border shadow-sm' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-lg bg-foreground flex items-center justify-center">
              <div className="w-3 h-3 rounded-full bg-background"></div>
            </div>
            <span className="text-xl font-semibold text-foreground tracking-tight">Nova</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <div key={item.href} className="relative group">
                <a
                  href={item.href}
                  className="flex items-center px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-all duration-300 rounded-lg hover:bg-secondary/50 group"
                >
                  {item.label}
                  {item.hasDropdown && (
                    <ChevronDown className="ml-1 h-3 w-3 transition-transform group-hover:rotate-180" />
                  )}
                </a>
                
                {/* Dropdown for Wearables */}
                {item.hasDropdown && (
                  <div className="absolute top-full left-0 mt-2 w-56 bg-background border border-border rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <div className="p-2">
                      <a href="#forms" className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary/50 rounded-lg transition-colors">
                        Smart Glasses
                      </a>
                      <a href="#forms" className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary/50 rounded-lg transition-colors">
                        AI Pendant
                      </a>
                      <a href="#forms" className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary/50 rounded-lg transition-colors">
                        Smart Bracelet
                      </a>
                      <a href="#forms" className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary/50 rounded-lg transition-colors">
                        AI Hat/Cap
                      </a>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <Button 
              size="sm" 
              className="hidden sm:flex rounded-full px-6 py-2 text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              Get Early Access
            </Button>
            
            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-secondary/50 transition-colors"
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden transition-all duration-300 ${
        isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      } overflow-hidden bg-background/95 backdrop-blur-xl border-t border-border`}>
        <div className="px-6 py-4 space-y-2">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="block px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary/50 rounded-lg transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <div className="pt-4">
            <Button size="sm" className="w-full rounded-full">
              Get Early Access
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
