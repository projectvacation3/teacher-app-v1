
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Star } from 'lucide-react';

const TestimonialCard = ({ name, role, quote, stars = 5, image = "" }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md hover-lift">
      <div className="flex items-center mb-4">
        {[...Array(stars)].map((_, i) => (
          <Star key={i} size={18} className="text-gold fill-gold" />
        ))}
      </div>
      <p className="text-gray-700 mb-6 italic">"{quote}"</p>
      <div className="flex items-center">
        <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden mr-4">
          {image ? (
            <img src={image} alt={name} className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-primary/10 text-primary font-bold text-xl">
              {name.charAt(0)}
            </div>
          )}
        </div>
        <div>
          <h3 className="font-bold">{name}</h3>
          <p className="text-sm text-gray-600">{role}</p>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  useEffect(() => {
    document.title = "Testimonials - GiftBridge";
  }, []);

  const teacherTestimonials = [
    {
      name: "Sarah Johnson",
      role: "3rd Grade Teacher, Lincoln Elementary",
      quote: "GiftBridge has been a game-changer for me. I love that I can specify which gift cards I prefer, and parents can easily send them throughout the year. It's so thoughtful and practical!",
      stars: 5
    },
    {
      name: "Michael Rodriguez",
      role: "High School Math Teacher",
      quote: "As a high school teacher, I rarely received gifts from students. With GiftBridge, I now get small tokens of appreciation that really brighten my day. The ability to cash out when I want is fantastic.",
      stars: 5
    },
    {
      name: "Emily Chen",
      role: "Kindergarten Teacher",
      quote: "I used to get lots of mugs and candles that I honestly didn't need. GiftBridge lets me receive gift cards to places I actually shop at. It's so much more useful!",
      stars: 5
    },
    {
      name: "James Wilson",
      role: "Middle School Science Teacher",
      quote: "The consistent appreciation through GiftBridge has really strengthened my relationships with parents. It's not about the money - it's about feeling valued throughout the year.",
      stars: 4
    }
  ];

  const parentTestimonials = [
    {
      name: "Jennifer Smith",
      role: "Parent of two elementary students",
      quote: "I always wanted to show appreciation to my kids' teachers but would forget or run out of time. GiftBridge makes it automatic so I never miss a month. The teachers love it!",
      stars: 5
    },
    {
      name: "David Chang",
      role: "Parent of a high school student",
      quote: "As my son got to high school, I wasn't sure how to continue showing appreciation to his multiple teachers. The Premium plan lets me add all his core teachers easily.",
      stars: 5
    },
    {
      name: "Maria Garcia",
      role: "Single parent of three",
      quote: "Between work and taking care of three kids, I never had time to shop for teacher gifts. GiftBridge lets me set up everything once, and the teachers get gifts every month without me having to remember.",
      stars: 5
    },
    {
      name: "Robert Johnson",
      role: "Parent of a first grader",
      quote: "My daughter's teacher mentioned how much she appreciated the consistent gift cards through GiftBridge. It's created a much more positive relationship between us.",
      stars: 4
    }
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="h2 mb-4">What Our Users Say</h1>
            <p className="text-xl text-gray-700">
              Hear from the teachers and parents who are strengthening school connections through GiftBridge.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="h3 text-primary mb-8 text-center">Teachers Love GiftBridge</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {teacherTestimonials.map((testimonial, index) => (
                <TestimonialCard key={index} {...testimonial} />
              ))}
            </div>
          </div>

          <div className="mb-16">
            <h2 className="h3 text-primary mb-8 text-center">Parents Love GiftBridge</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {parentTestimonials.map((testimonial, index) => (
                <TestimonialCard key={index} {...testimonial} />
              ))}
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-xl max-w-3xl mx-auto my-16">
            <h2 className="text-2xl font-bold text-center mb-6">The Numbers Speak for Themselves</h2>
            <div className="grid sm:grid-cols-3 gap-8 text-center">
              <div>
                <p className="text-4xl font-bold text-primary mb-2">94%</p>
                <p className="text-gray-700">of teachers report feeling more appreciated</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-primary mb-2">5,000+</p>
                <p className="text-gray-700">teachers receiving monthly gifts</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-primary mb-2">$500K+</p>
                <p className="text-gray-700">in gift cards delivered to teachers</p>
              </div>
            </div>
          </div>

          <div className="text-center max-w-2xl mx-auto">
            <h2 className="h3 mb-4">Join Our Growing Community</h2>
            <p className="text-lg text-gray-700 mb-8">
              Experience the difference consistent appreciation can make in your school relationships.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <a href="/register?role=parent" className="btn-primary">
                I'm a Parent
              </a>
              <a href="/register?role=teacher" className="btn-primary">
                I'm a Teacher
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Testimonials;
