
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Check, X, ArrowRight, CreditCard } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

interface PricingFeature {
  title: string;
  standard: boolean | string;
  premium: boolean | string;
}

const PricingCard = ({ 
  title, 
  description, 
  price, 
  isPremium = false,
  features 
}: { 
  title: string; 
  description: string; 
  price: React.ReactNode; 
  isPremium?: boolean;
  features: string[] 
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`rounded-2xl p-8 transition-all duration-300 h-full flex flex-col ${
        isPremium 
          ? 'premium-card gold-shimmer shadow-xl' 
          : 'border-2 border-gray-200'
      } ${isHovered ? 'transform -translate-y-2' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isPremium && (
        <div className="absolute top-0 right-0 bg-gold text-white text-xs uppercase font-bold py-1 px-3 transform translate-x-2 -translate-y-2 rounded-bl-lg rounded-tr-lg z-20">
          Popular
        </div>
      )}
      
      <div className="mb-6">
        <h3 className={`text-2xl font-bold ${isPremium ? 'text-gold-dark' : ''}`}>
          {title}
        </h3>
        <p className="text-gray-600 mt-2">{description}</p>
      </div>
      
      <div className="mb-8">
        {price}
      </div>
      
      <ul className="space-y-3 mb-8 flex-grow">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <div className={`mt-1 mr-3 ${isPremium ? 'text-gold-dark' : 'text-primary'}`}>
              <Check size={18} />
            </div>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      
      <Link to="/register" className="mt-auto">
        <Button 
          className={`w-full ${isPremium ? 'btn-gold' : 'btn-primary'}`}
        >
          Get Started
          <ArrowRight className="ml-2" size={16} />
        </Button>
      </Link>
    </div>
  );
};

const ComparisonTable = ({ features }: { features: PricingFeature[] }) => (
  <div className="overflow-x-auto mt-16">
    <table className="w-full border-collapse">
      <thead>
        <tr className="text-left">
          <th className="py-4 px-6 font-medium text-lg">Feature</th>
          <th className="py-4 px-6 font-medium text-lg">Standard</th>
          <th className="py-4 px-6 font-medium text-lg text-gold-dark">Premium</th>
        </tr>
      </thead>
      <tbody>
        {features.map((feature, index) => (
          <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
            <td className="py-4 px-6 border-t border-gray-200">{feature.title}</td>
            <td className="py-4 px-6 border-t border-gray-200">
              {typeof feature.standard === 'boolean' ? (
                feature.standard ? (
                  <Check className="text-green-500" size={20} />
                ) : (
                  <X className="text-red-500" size={20} />
                )
              ) : (
                feature.standard
              )}
            </td>
            <td className="py-4 px-6 border-t border-gray-200">
              {typeof feature.premium === 'boolean' ? (
                feature.premium ? (
                  <Check className="text-gold-dark" size={20} />
                ) : (
                  <X className="text-red-500" size={20} />
                )
              ) : (
                <span className="font-medium text-gold-dark">{feature.premium}</span>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const Pricing = () => {
  // Set page title
  useEffect(() => {
    document.title = "Pricing - GiftBridge";
  }, []);

  const standardFeatures = [
    "Gift sent on 1st of month",
    "1 teacher max",
    "Ability to adjust gift amount",
    "Select from 3 gift options",
    "Both specific and random gift option",
    "Pre-written email templates",
    "Pre-written subject line templates",
    "Service fee per charge ($2.99)",
  ];

  const premiumFeatures = [
    "Everything in Standard",
    "Fee: $25/year for premium access",
    "Never miss a holiday with reminders",
    "Ability to edit gift options",
    "Both specific and rotating gift options",
    "50% off service fees",
    "Add up to 4 teachers",
    "Custom emails and subject lines",
    "First access to new gift releases",
    "Access to 10+ premium gift options",
  ];

  const comparisonFeatures: PricingFeature[] = [
    { title: "Monthly gift sending", standard: true, premium: true },
    { title: "Maximum teachers", standard: "1", premium: "4" },
    { title: "Gift options", standard: "3 options", premium: "10+ options" },
    { title: "Service fee", standard: "$2.99 per gift", premium: "$1.50 per gift (50% off)" },
    { title: "Holiday reminders", standard: false, premium: true },
    { title: "Custom messages", standard: false, premium: true },
    { title: "Rotating gift options", standard: true, premium: true },
    { title: "Email templates", standard: "Basic", premium: "Premium + Custom" },
    { title: "First access to new gifts", standard: false, premium: true },
    { title: "Premium gift brands", standard: false, premium: true },
  ];

  return (
    <>
      <Navbar />
      <main className="pt-24 pb-16">
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h1 className="h1 mb-4">Simple, Transparent Pricing</h1>
              <p className="text-xl text-gray-600">
                Choose the plan that fits your needs. No hidden fees, cancel anytime.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <PricingCard
                title="Standard (Free)"
                description="Perfect for parents with one teacher to appreciate"
                price={
                  <div>
                    <div className="flex items-baseline">
                      <span className="text-4xl font-bold">$0</span>
                      <span className="text-gray-600 ml-2">/month</span>
                    </div>
                    <p className="text-sm text-gray-500 mt-2">
                      + $2.99 service fee per gift
                    </p>
                  </div>
                }
                features={standardFeatures}
              />

              <PricingCard
                title="Premium"
                description="For parents who want to show extra appreciation"
                price={
                  <div>
                    <div className="flex items-baseline">
                      <span className="text-4xl font-bold">$25</span>
                      <span className="text-gray-600 ml-2">/year</span>
                    </div>
                    <p className="text-sm text-gray-500 mt-2">
                      + $1.50 service fee per gift (50% off)
                    </p>
                  </div>
                }
                isPremium={true}
                features={premiumFeatures}
              />
            </div>

            <ComparisonTable features={comparisonFeatures} />

            <div className="mt-16 text-center">
              <h2 className="text-2xl font-bold mb-4">Common Questions About Pricing</h2>

              <div className="max-w-3xl mx-auto mt-8 grid gap-6">
                <div className="text-left bg-white p-6 rounded-lg border border-gray-200">
                  <h3 className="font-bold text-lg mb-2">Are there any hidden fees?</h3>
                  <p className="text-gray-600">
                    No hidden fees. Standard accounts pay only the per-gift service fee. Premium accounts pay the annual fee plus the discounted service fee per gift.
                  </p>
                </div>

                <div className="text-left bg-white p-6 rounded-lg border border-gray-200">
                  <h3 className="font-bold text-lg mb-2">Can I cancel at any time?</h3>
                  <p className="text-gray-600">
                    Yes, you can cancel your gift schedules or premium subscription at any time. There are no long-term commitments.
                  </p>
                </div>

                <div className="text-left bg-white p-6 rounded-lg border border-gray-200">
                  <h3 className="font-bold text-lg mb-2">How do the service fees work?</h3>
                  <p className="text-gray-600">
                    Service fees are applied per gift sent and help cover transaction costs. Standard users pay $2.99 per gift, while Premium users enjoy a 50% discount at $1.50 per gift.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Appreciating Teachers?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Join thousands of parents who are building stronger connections with their children's teachers.
            </p>
            
            <Link to="/register">
              <Button 
                size="lg" 
                variant="secondary" 
                className="text-primary font-medium hover:brightness-105 group"
              >
                Sign Up Now
                <CreditCard className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Pricing;
