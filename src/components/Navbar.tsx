
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'How It Works', href: '/how-it-works' },
    { name: 'Testimonials', href: '/testimonials' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'FAQs', href: '/faqs' },
    { name: 'Contact Us', href: '/contact' },
  ];

  // Check if current route is active
  const isActive = (path: string) => location.pathname === path;

  // Handle scroll event to change navbar styling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when changing routes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 backdrop-blur-md shadow-sm py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <Link 
          to="/" 
          className="flex items-center space-x-2"
          aria-label="GiftBridge Home"
        >
          <span className="text-2xl font-display font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-700">
            GiftBridge
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={`nav-link ${isActive(link.href) ? 'font-medium text-primary after:scale-x-100' : ''}`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Auth Buttons - Desktop */}
        <div className="hidden md:flex items-center space-x-4">
          <Link to="/login" className="text-gray-700 hover:text-primary transition-colors">
            Login
          </Link>
          <Link to="/register">
            <Button size="sm" className="animate-fade-in">
              Sign Up
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 hover:text-primary"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 right-0 shadow-lg animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col">
            <nav className="flex flex-col space-y-3 mb-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`px-3 py-2 text-gray-700 hover:text-primary transition-colors ${
                    isActive(link.href) ? 'font-medium text-primary' : ''
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
            <div className="flex flex-col space-y-3">
              <Link to="/login" className="px-3 py-2 text-gray-700 hover:text-primary transition-colors">
                Login
              </Link>
              <Link to="/register" className="px-3 py-2">
                <Button className="w-full">Sign Up</Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
