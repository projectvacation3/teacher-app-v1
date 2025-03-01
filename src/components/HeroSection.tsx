
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const imageRef = useRef<HTMLImageElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Add animation classes once component is mounted
    const addAnimation = () => {
      if (contentRef.current) {
        contentRef.current.classList.add('animate-fade-in');
      }
      if (imageRef.current) {
        imageRef.current.classList.add('animate-fade-in');
        imageRef.current.style.animationDelay = '0.3s';
      }
    };

    addAnimation();

    // Lazy load image with blur effect
    if (imageRef.current) {
      const img = imageRef.current;
      const handleLoad = () => {
        img.classList.remove('image-loading');
        img.classList.add('image-loaded');
      };

      if (img.complete) {
        handleLoad();
      } else {
        img.addEventListener('load', handleLoad);
        return () => {
          img.removeEventListener('load', handleLoad);
        };
      }
    }
  }, []);

  return (
    <section className="relative pt-32 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-40 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-20 w-72 h-72 bg-blue-100 rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div ref={contentRef} className="opacity-0">
            <h1 className="h1 mb-6">
              Strengthen School Connections with
              <span className="text-primary block">Meaningful Appreciation</span>
            </h1>
            <p className="text-gray-600 text-lg mb-8 max-w-lg">
              Monthly gift cards that show teachers your appreciation, 
              all managed seamlessly. Build lasting relationships and make a teacher's day.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-10">
              <Link to="/register">
                <Button className="btn-primary group">
                  Sign Up <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                </Button>
              </Link>
              <div className="inline-flex space-x-3">
                <Link to="/register?role=teacher">
                  <Button variant="secondary" className="btn-secondary">
                    I'm a Teacher
                  </Button>
                </Link>
                <Link to="/register?role=parent">
                  <Button variant="secondary" className="btn-secondary">
                    I'm a Parent
                  </Button>
                </Link>
              </div>
            </div>

            {/* Trust badges */}
            <div className="flex flex-col space-y-2">
              <p className="text-sm text-gray-500">Trusted payment processing</p>
              <div className="flex space-x-4">
                <div className="opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg" alt="Stripe" className="h-7" />
                </div>
                <div className="opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/PayPal_logo.svg/2560px-PayPal_logo.svg.png" alt="PayPal" className="h-6" />
                </div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <img
              ref={imageRef}
              src="https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80"
              alt="Teacher with student"
              className="rounded-lg shadow-2xl object-cover object-center w-full h-auto max-h-[600px] image-loading"
            />

            {/* Decorative floating cards */}
            <div className="absolute -top-10 -right-8 glass-card p-4 rounded-lg shadow-lg flex items-center space-x-3 animate-float bg-white bg-opacity-95">
              <div className="bg-green-100 w-10 h-10 rounded-full flex items-center justify-center text-green-600">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              </div>
              <div>
                <p className="text-sm font-medium">Gift Delivered!</p>
                <p className="text-xs text-gray-500">Mr. Johnson received your gift</p>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -left-6 glass-card p-4 rounded-lg shadow-lg max-w-[220px] animate-float bg-white bg-opacity-95" style={{ animationDelay: "2s" }}>
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 12V8H6a2 2 0 0 1-2-2c0-1.1.9-2 2-2h12v4"></path><path d="M20 12v4H6a2 2 0 0 0-2 2c0 1.1.9 2 2 2h12v-4"></path></svg>
                </div>
                <p className="text-xs font-semibold">Starbucks Gift Card</p>
              </div>
              <p className="text-xs text-gray-600">
                "Thank you so much for your dedication to our kids! Enjoy a coffee on us."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
