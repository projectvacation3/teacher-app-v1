
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowRight, Gift, CreditCard, Mail, User, School, Check } from 'lucide-react';

const HowItWorks = () => {
  useEffect(() => {
    document.title = "How It Works - GiftBridge";
  }, []);

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="h2 mb-6 text-center">How GiftBridge Works</h1>
          
          <div className="max-w-4xl mx-auto mb-16">
            <p className="text-xl text-gray-700 text-center mb-12">
              GiftBridge makes it easy to show consistent appreciation to your child's teachers
              through automated gift card delivery.
            </p>
            
            {/* For Parents */}
            <div className="mb-16">
              <h2 className="h3 text-primary mb-8 text-center">For Parents</h2>
              
              <div className="space-y-12">
                <div className="flex flex-col md:flex-row gap-6 items-center">
                  <div className="bg-blue-100 p-5 rounded-full flex items-center justify-center md:w-20 md:h-20 w-16 h-16 flex-shrink-0">
                    <User size={32} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">1. Create an Account</h3>
                    <p className="text-gray-700">
                      Sign up for a free GiftBridge account. Choose between our Standard (free) 
                      or Premium plan based on your needs.
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row gap-6 items-center">
                  <div className="bg-blue-100 p-5 rounded-full flex items-center justify-center md:w-20 md:h-20 w-16 h-16 flex-shrink-0">
                    <School size={32} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">2. Add Your Child's Teacher</h3>
                    <p className="text-gray-700">
                      Enter your teacher's information, select your monthly gift amount, and choose 
                      which gift cards you'd like to send. Teachers with GiftBridge accounts can specify 
                      their preferences.
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row gap-6 items-center">
                  <div className="bg-blue-100 p-5 rounded-full flex items-center justify-center md:w-20 md:h-20 w-16 h-16 flex-shrink-0">
                    <CreditCard size={32} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">3. Set Up Payment</h3>
                    <p className="text-gray-700">
                      Choose between monthly or annual billing. Enter your payment information securely 
                      through our payment processor. Premium users receive 50% off service fees.
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row gap-6 items-center">
                  <div className="bg-blue-100 p-5 rounded-full flex items-center justify-center md:w-20 md:h-20 w-16 h-16 flex-shrink-0">
                    <Gift size={32} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">4. Gifts Are Sent Automatically</h3>
                    <p className="text-gray-700">
                      On the 1st of each month, GiftBridge automatically sends the gift card to your 
                      teacher with a personalized message from you and your child.
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row gap-6 items-center">
                  <div className="bg-blue-100 p-5 rounded-full flex items-center justify-center md:w-20 md:h-20 w-16 h-16 flex-shrink-0">
                    <Check size={32} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">5. Track Your Gifts</h3>
                    <p className="text-gray-700">
                      View your gift history dashboard to see all the gifts you've sent and when 
                      teachers have redeemed them.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* For Teachers */}
            <div>
              <h2 className="h3 text-primary mb-8 text-center">For Teachers</h2>
              
              <div className="space-y-12">
                <div className="flex flex-col md:flex-row gap-6 items-center">
                  <div className="bg-blue-100 p-5 rounded-full flex items-center justify-center md:w-20 md:h-20 w-16 h-16 flex-shrink-0">
                    <User size={32} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">1. Create a Teacher Account</h3>
                    <p className="text-gray-700">
                      Sign up with your school email. Add information about yourself including your 
                      birthday, grade level, and school.
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row gap-6 items-center">
                  <div className="bg-blue-100 p-5 rounded-full flex items-center justify-center md:w-20 md:h-20 w-16 h-16 flex-shrink-0">
                    <Gift size={32} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">2. Set Your Gift Preferences</h3>
                    <p className="text-gray-700">
                      Select up to 5 favorite gift card options from our collection. Parents who add you 
                      will be able to see your preferences.
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row gap-6 items-center">
                  <div className="bg-blue-100 p-5 rounded-full flex items-center justify-center md:w-20 md:h-20 w-16 h-16 flex-shrink-0">
                    <Mail size={32} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">3. Receive Gift Notifications</h3>
                    <p className="text-gray-700">
                      Get email notifications when parents send you gift cards. View all your gifts in your 
                      teacher dashboard.
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row gap-6 items-center">
                  <div className="bg-blue-100 p-5 rounded-full flex items-center justify-center md:w-20 md:h-20 w-16 h-16 flex-shrink-0">
                    <CreditCard size={32} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">4. Redeem Your Gifts</h3>
                    <p className="text-gray-700">
                      Cash out your gift cards whenever you'd like. Gift cards are delivered to your email 
                      within 24 hours of cashing out.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-16 text-center">
              <h2 className="h3 mb-4">Ready to Get Started?</h2>
              <p className="text-lg text-gray-700 mb-6">
                Join thousands of parents and teachers using GiftBridge to strengthen school connections.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="/register" className="btn-primary">
                  Create Account <ArrowRight className="ml-2" size={18} />
                </a>
                <a href="/pricing" className="btn-secondary">
                  View Pricing
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default HowItWorks;
