
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Gift, ArrowRight, Star, Check, Users, School } from 'lucide-react';
import { Button } from '@/components/ui/button';
import HeroSection from '@/components/HeroSection';
import FeatureSection from '@/components/FeatureSection';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const TestimonialCard = ({ text, author, role }: { text: string; author: string; role: string }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 hover-lift">
      <div className="flex text-yellow-400 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={18} fill="currentColor" />
        ))}
      </div>
      <blockquote className="mb-4 text-gray-700">"{text}"</blockquote>
      <footer>
        <p className="font-medium">{author}</p>
        <p className="text-sm text-gray-500">{role}</p>
      </footer>
    </div>
  );
};

const HowItWorkStep = ({ number, title, description }: { number: number; title: string; description: string }) => {
  return (
    <div className="flex">
      <div className="mr-6">
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white font-bold text-xl">
          {number}
        </div>
      </div>
      <div className="flex-1">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  )
};

const FaqItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="border-b border-gray-200 py-4">
      <button 
        className="flex justify-between items-center w-full text-left font-medium text-gray-900 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span>{question}</span>
        <span className={`ml-6 flex-shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>
      <div className={`mt-2 pr-12 transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <p className="text-gray-600">{answer}</p>
      </div>
    </div>
  );
};

const Index = () => {
  // Set page title on component mount
  useEffect(() => {
    document.title = "GiftBridge - Connect with Teachers Through Meaningful Appreciation";
  }, []);

  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const parentTestimonials = [
    {
      text: "GiftBridge has completely changed how I appreciate my child's teachers. The monthly gifts are so easy to set up, and the teachers love receiving them!",
      author: "Sarah Johnson",
      role: "Parent of two"
    },
    {
      text: "As a busy working parent, I always struggled to remember teacher appreciation days. With GiftBridge, I never miss an opportunity to say thanks.",
      author: "Michael Rodriguez",
      role: "Parent"
    },
  ];

  const teacherTestimonials = [
    {
      text: "Receiving monthly appreciation through GiftBridge makes me feel truly valued. I love how I can select my favorite gift cards and redeem them when I want.",
      author: "Ms. Rebecca Adams",
      role: "2nd Grade Teacher"
    },
    {
      text: "The consistent appreciation I receive through GiftBridge has made a real difference in my teaching career. I feel recognized for my hard work every month.",
      author: "Mr. David Stevens",
      role: "High School Math Teacher"
    }
  ];

  const faqs = [
    {
      question: "How does GiftBridge work?",
      answer: "GiftBridge lets parents set up recurring monthly appreciation gifts for teachers. Parents select a gift amount, preferred gift cards, and payment schedule. Teachers receive digital gift cards they can easily redeem when they want."
    },
    {
      question: "What if my child's teacher isn't registered?",
      answer: "You can still send gifts to teachers who aren't registered. We'll invite them to create an account to customize their preferences and redeem gifts."
    },
    {
      question: "How much does it cost to use GiftBridge?",
      answer: "GiftBridge offers a free Standard plan with a small service fee per transaction. Our Premium plan costs $25/year and includes reduced service fees, ability to add more teachers, custom messaging, and special occasion reminders."
    },
    {
      question: "How do teachers redeem their gift cards?",
      answer: "Teachers can log into their GiftBridge account, view their gift balance, and cash out their accumulated gifts at any time. Digital gift cards are sent directly to their email."
    },
    {
      question: "Can I send one-time gifts instead of monthly recurring gifts?",
      answer: "Currently, GiftBridge focuses on recurring monthly appreciation. However, Premium members can send additional gifts for special occasions like Teacher Appreciation Day."
    }
  ];

  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <HeroSection />

        {/* Feature Section */}
        <FeatureSection />

        {/* How It Works Section */}
        <section id="how-it-works" className="py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="h2 mb-4">How It Works</h2>
              <p className="text-gray-600 text-lg">
                Three simple steps to start showing appreciation to your child's teachers
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="space-y-12">
                <HowItWorkStep 
                  number={1}
                  title="Sign up and add teachers"
                  description="Create your account and add your child's teachers. If they're already registered, you'll see their gift preferences."
                />
                <HowItWorkStep 
                  number={2}
                  title="Select gift amount and schedule"
                  description="Choose how much to send monthly and select from gift card options. Decide if you want to upgrade to Premium for additional features."
                />
                <HowItWorkStep 
                  number={3}
                  title="Set and forget"
                  description="Once set up, gifts will be sent automatically on your schedule. Teachers receive notification emails and can redeem gifts when they want."
                />

                <div className="pt-4">
                  <Link to="/how-it-works">
                    <Button variant="outline" className="group">
                      Learn more about how it works
                      <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1581078426770-6d336e5de7bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" 
                  alt="Teacher in classroom" 
                  className="rounded-lg shadow-xl"
                />
                
                {/* Decorative elements */}
                <div className="absolute -top-8 -right-8 bg-white rounded-lg shadow-lg p-4 animate-float" style={{ animationDelay: "1s" }}>
                  <div className="flex items-center gap-3">
                    <Gift className="text-primary" size={24} />
                    <div>
                      <p className="font-medium">Monthly Giving</p>
                      <p className="text-sm text-gray-500">Automatic appreciation</p>
                    </div>
                  </div>
                </div>
                
                <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-lg p-4 animate-float" style={{ animationDelay: "2.5s" }}>
                  <div className="flex items-center gap-3">
                    <School className="text-green-600" size={24} />
                    <div>
                      <p className="font-medium">Teacher Happiness</p>
                      <p className="text-sm text-gray-500">Increased by 94%</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing CTA */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="h2 mb-4">Ready to show your appreciation?</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-8">
              Choose a plan that fits your needs and start building stronger connections with your child's teachers through regular appreciation.
            </p>
            
            <Link to="/pricing">
              <Button size="lg" className="animate-pulse">
                View Pricing Options
              </Button>
            </Link>
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="h2 mb-4">What Our Users Say</h2>
              <p className="text-gray-600 text-lg">
                GiftBridge is loved by parents and teachers alike
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="space-y-8">
                <h3 className="text-xl font-bold flex items-center">
                  <Users className="mr-2" size={20} /> Parents
                </h3>
                {parentTestimonials.map((testimonial, index) => (
                  <TestimonialCard 
                    key={`parent-${index}`}
                    text={testimonial.text}
                    author={testimonial.author}
                    role={testimonial.role}
                  />
                ))}
              </div>
              
              <div className="space-y-8">
                <h3 className="text-xl font-bold flex items-center">
                  <School className="mr-2" size={20} /> Teachers
                </h3>
                {teacherTestimonials.map((testimonial, index) => (
                  <TestimonialCard 
                    key={`teacher-${index}`}
                    text={testimonial.text}
                    author={testimonial.author}
                    role={testimonial.role}
                  />
                ))}
              </div>
            </div>

            <div className="text-center">
              <Link to="/testimonials">
                <Button variant="outline" className="group">
                  Read more testimonials
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="h2 mb-4">Frequently Asked Questions</h2>
              <p className="text-gray-600 text-lg">
                Get answers to common questions about GiftBridge
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              {faqs.map((faq, index) => (
                <FaqItem 
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                />
              ))}
              
              <div className="text-center mt-12">
                <Link to="/faqs">
                  <Button variant="outline" className="group">
                    View all FAQs
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-primary text-white">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-4xl font-bold mb-6">Start Appreciating Teachers Today</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Join GiftBridge and transform how you connect with your child's teachers through regular, meaningful appreciation.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/register?role=parent">
                <Button size="lg" variant="secondary" className="text-primary font-medium hover:brightness-105">
                  Join as a Parent
                </Button>
              </Link>
              <Link to="/register?role=teacher">
                <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
                  Join as a Teacher
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Index;
