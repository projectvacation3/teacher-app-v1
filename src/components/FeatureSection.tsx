
import React, { useEffect, useRef } from 'react';
import { Gift, CreditCard, CalendarClock, Heart, Zap, UserCheck } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay?: number;
}

const FeatureCard = ({ title, description, icon, delay = 0 }: FeatureCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              card.classList.add('opacity-100', 'translate-y-0');
            }, delay);
            observer.unobserve(card);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(card);

    return () => {
      if (card) observer.unobserve(card);
    };
  }, [delay]);

  return (
    <div 
      ref={cardRef} 
      className="glass-card p-6 opacity-0 translate-y-4 transition-all duration-700 hover-lift"
    >
      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-5">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const FeatureSection = () => {
  const features = [
    {
      icon: <Gift size={24} />,
      title: 'Thoughtful Teacher Gifts',
      description: 'Send meaningful digital gift cards to teachers monthly, showing ongoing appreciation for their dedication.'
    },
    {
      icon: <CreditCard size={24} />,
      title: 'Hassle-Free Payments',
      description: 'Set up once and forget. Automated monthly payments ensure teachers receive gifts without you having to remember.'
    },
    {
      icon: <CalendarClock size={24} />,
      title: 'Special Occasion Reminders',
      description: 'Never miss teacher appreciation day or other important events with Premium plan reminders.'
    },
    {
      icon: <Heart size={24} />,
      title: 'Teacher Preferences',
      description: 'Teachers can share their gift preferences, ensuring they receive gifts they truly love and will use.'
    },
    {
      icon: <Zap size={24} />,
      title: 'Easy Redemption',
      description: 'Teachers can easily redeem their accumulated gift cards whenever they want with just a few clicks.'
    },
    {
      icon: <UserCheck size={24} />,
      title: 'Build Better Relationships',
      description: 'Strengthen parent-teacher relationships through regular appreciation, creating a positive school community.'
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50 -z-10"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="h2 mb-4">Appreciation Made Simple</h2>
          <p className="text-gray-600 text-lg">
            Our platform makes it easy to show consistent appreciation to the educators 
            who make a difference in your child's life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
