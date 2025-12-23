import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logo from '@/assets/LoGo.png';

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'SwiftPay', href: 'https://www.swiftpayfinancial.com/', external: true },
  { label: 'Features', href: '#features' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Contact', href: '#contact' },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-strong py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <img 
            src={logo} 
            alt="Summit Edge Logo" 
            className="w-16 h-16 rounded-lg shadow-glow-sm group-hover:shadow-glow transition-shadow"
          />
          <span className="text-foreground font-bold text-xl">
            Summit<span className="text-primary">Edge</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium relative group"
              {...(link.external && { target: '_blank', rel: 'noopener noreferrer' })}
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:flex items-center gap-4">
          <Button variant="ghost" size="sm">
            Sign In
          </Button>
          <a href="https://www.swiftpayfinancial.com/" target="_blank" rel="noopener noreferrer">
            <Button variant="hero" size="sm">
              Get Started
            </Button>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass-strong mt-2 mx-4 rounded-xl p-4 animate-fade-in">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-muted-foreground hover:text-foreground transition-colors py-2 border-b border-border/50 last:border-0"
                onClick={() => !link.external && setIsMobileMenuOpen(false)}
                {...(link.external && { target: '_blank', rel: 'noopener noreferrer' })}
              >
                {link.label}
              </a>
            ))}
            <div className="flex flex-col gap-2 pt-2">
              <Button variant="ghost" className="w-full">
                Sign In
              </Button>
              <a href="https://www.swiftpayfinancial.com/" target="_blank" rel="noopener noreferrer">
                <Button variant="hero" className="w-full">
                  Get Started
                </Button>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
