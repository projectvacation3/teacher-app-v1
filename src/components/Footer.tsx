
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    {
      title: 'For Parents',
      links: [
        { name: 'How It Works', href: '/how-it-works' },
        { name: 'Pricing', href: '/pricing' },
        { name: 'Gift Options', href: '/gift-options' },
        { name: 'Premium Benefits', href: '/premium' },
      ],
    },
    {
      title: 'For Teachers',
      links: [
        { name: 'Join as a Teacher', href: '/register?role=teacher' },
        { name: 'Benefits', href: '/teacher-benefits' },
        { name: 'How to Redeem', href: '/how-to-redeem' },
        { name: 'Teacher FAQs', href: '/teacher-faqs' },
      ],
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about' },
        { name: 'Testimonials', href: '/testimonials' },
        { name: 'FAQs', href: '/faqs' },
        { name: 'Contact Us', href: '/contact' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { name: 'Privacy Policy', href: '/privacy' },
        { name: 'Terms of Service', href: '/terms' },
        { name: 'Cookie Policy', href: '/cookies' },
      ],
    },
  ];

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: 'https://facebook.com' },
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com' },
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com' },
    { name: 'Email', icon: Mail, href: 'mailto:info@giftbridge.com' },
  ];

  return (
    <footer className="bg-gray-50 border-t border-gray-200 pt-12 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        {/* Logo and description */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-12">
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-4">
              <span className="text-2xl font-display font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-700">
                GiftBridge
              </span>
            </Link>
            <p className="text-gray-600 max-w-md">
              Connecting parents and teachers through meaningful appreciation. Send gift cards that 
              make a difference in educators' lives, all while building stronger 
              parent-teacher relationships.
            </p>
            <div className="flex space-x-4 mt-6">
              {socialLinks.map((social) => (
                <a 
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover-lift text-gray-600 hover:text-primary"
                  aria-label={social.name}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Footer links */}
          <div className="lg:col-span-3 grid grid-cols-2 md:grid-cols-4 gap-8">
            {footerLinks.map((group) => (
              <div key={group.title}>
                <h3 className="font-medium text-gray-900 mb-4">{group.title}</h3>
                <ul className="space-y-3">
                  {group.links.map((link) => (
                    <li key={link.name}>
                      <Link 
                        to={link.href} 
                        className="text-gray-600 hover:text-primary transition-colors"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom divider and copyright */}
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm mb-4 md:mb-0">
            &copy; {currentYear} GiftBridge. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link to="/privacy" className="text-gray-600 hover:text-primary text-sm transition-colors">
              Privacy
            </Link>
            <Link to="/terms" className="text-gray-600 hover:text-primary text-sm transition-colors">
              Terms
            </Link>
            <Link to="/cookies" className="text-gray-600 hover:text-primary text-sm transition-colors">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
