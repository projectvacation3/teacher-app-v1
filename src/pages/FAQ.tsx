
import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  useEffect(() => {
    document.title = "FAQ - GiftBridge";
  }, []);

  const faqs = {
    general: [
      {
        question: "What is GiftBridge?",
        answer: "GiftBridge is a platform that connects parents and teachers through consistent, meaningful appreciation. Parents can set up automatic monthly gift cards for teachers, and teachers can specify which gift cards they prefer to receive."
      },
      {
        question: "How does GiftBridge work?",
        answer: "Parents create an account, add their child's teacher, select a monthly gift amount, and choose which gift cards to send. GiftBridge automatically sends the gift cards on the 1st of each month. Teachers can create accounts to specify their gift preferences and redeem their gifts when they want."
      },
      {
        question: "Is my payment information secure?",
        answer: "Yes, GiftBridge uses industry-standard encryption and secure payment processing. We never store your full credit card information on our servers."
      },
      {
        question: "Can I cancel at any time?",
        answer: "Yes, you can cancel your gift plans at any time from your dashboard. If you've paid annually, you may be eligible for a prorated refund for unused months."
      }
    ],
    parents: [
      {
        question: "What's the difference between Standard and Premium plans?",
        answer: "The Standard plan is free and allows you to set up monthly gifts for one teacher with access to three gift card options. The Premium plan ($25/year) offers reduced service fees, additional gift card options, special occasion reminders, up to 4 teachers, and the ability to customize your messages."
      },
      {
        question: "How much should I give each month?",
        answer: "You can choose gift amounts of $5, $10, $20, or $50 per month. Many parents find that a small monthly amount like $5 or $10 is a meaningful way to show consistent appreciation without a large financial burden."
      },
      {
        question: "What if my child's teacher doesn't have a GiftBridge account?",
        answer: "Teachers don't need a GiftBridge account to receive gifts, but having one allows them to specify their gift preferences and easily redeem their gifts. When you add a teacher who doesn't have an account, they'll receive an email invitation to create one."
      },
      {
        question: "Can I send to multiple teachers?",
        answer: "Standard accounts can send to 1 teacher, while Premium accounts can send to up to 4 teachers. This is perfect for families with multiple children or students with several subject teachers."
      },
      {
        question: "What service fees are charged?",
        answer: "Standard accounts have a $2.99 service fee per charge (monthly or annually). Premium accounts get 50% off service fees ($1.50 per charge)."
      }
    ],
    teachers: [
      {
        question: "How do I receive my gift cards?",
        answer: "Gift cards accumulate in your teacher dashboard. When you're ready to redeem them, simply click 'Cash Out' and you'll receive your gift card via email within 24 hours."
      },
      {
        question: "Do I have to create an account to receive gifts?",
        answer: "No, you can receive gifts without an account, but creating an account allows you to specify your gift preferences and easily redeem your gifts all in one place."
      },
      {
        question: "How many gift card preferences can I select?",
        answer: "You can select up to 5 favorite gift card options from our collection. At least one must be from our Standard options (Starbucks, Walmart, or Uber Eats)."
      },
      {
        question: "Is there a minimum amount before I can cash out?",
        answer: "No, you can cash out any amount at any time. Some teachers prefer to let their gifts accumulate for a larger purchase, while others cash out monthly."
      },
      {
        question: "What information of mine is shared with parents?",
        answer: "Parents can see your name, school, grade/subject taught, and gift preferences. Your contact information is never shared, and all communication happens through the GiftBridge platform."
      }
    ],
    technical: [
      {
        question: "What payment methods do you accept?",
        answer: "We accept all major credit and debit cards through our secure payment processor."
      },
      {
        question: "How do I update my payment method?",
        answer: "You can update your payment method at any time in your account settings under the Billing section."
      },
      {
        question: "Is my data private and secure?",
        answer: "Yes, GiftBridge takes privacy and security seriously. We use industry-standard encryption and never share your personal information with third parties except as required to fulfill our service. Please see our Privacy Policy for more details."
      },
      {
        question: "What if I have a problem with my account?",
        answer: "Our support team is available to help with any issues. Please contact us through our Contact page or email support@giftbridge.com."
      }
    ]
  };

  const [category, setCategory] = useState("general");

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="h2 mb-4 text-center">Frequently Asked Questions</h1>
            <p className="text-xl text-gray-700 text-center mb-12">
              Find answers to common questions about GiftBridge
            </p>
            
            <div className="flex justify-center mb-8 overflow-x-auto whitespace-nowrap space-x-2 p-1">
              <button
                className={`px-4 py-2 rounded-full ${category === 'general' ? 'bg-primary text-white' : 'bg-gray-100 hover:bg-gray-200'}`}
                onClick={() => setCategory('general')}
              >
                General
              </button>
              <button
                className={`px-4 py-2 rounded-full ${category === 'parents' ? 'bg-primary text-white' : 'bg-gray-100 hover:bg-gray-200'}`}
                onClick={() => setCategory('parents')}
              >
                For Parents
              </button>
              <button
                className={`px-4 py-2 rounded-full ${category === 'teachers' ? 'bg-primary text-white' : 'bg-gray-100 hover:bg-gray-200'}`}
                onClick={() => setCategory('teachers')}
              >
                For Teachers
              </button>
              <button
                className={`px-4 py-2 rounded-full ${category === 'technical' ? 'bg-primary text-white' : 'bg-gray-100 hover:bg-gray-200'}`}
                onClick={() => setCategory('technical')}
              >
                Technical
              </button>
            </div>
            
            <div className="bg-white rounded-xl shadow-md p-6">
              <Accordion type="single" collapsible className="w-full">
                {faqs[category].map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left font-medium">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-700">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
            
            <div className="mt-12 text-center p-8 bg-gray-50 rounded-xl">
              <h2 className="text-2xl font-bold mb-4">Still have questions?</h2>
              <p className="text-gray-700 mb-6">
                We're here to help! Reach out to our support team and we'll get back to you as soon as possible.
              </p>
              <a href="/contact" className="btn-primary">
                Contact Support
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default FAQ;
