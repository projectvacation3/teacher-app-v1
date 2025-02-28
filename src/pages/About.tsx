
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const About = () => {
  useEffect(() => {
    document.title = "About Us - GiftBridge";
  }, []);

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="h2 mb-6 text-center">About GiftBridge</h1>
            
            <div className="mb-12 bg-white p-8 rounded-xl shadow-md">
              <h2 className="h3 mb-4 text-primary">Our Mission</h2>
              <p className="text-gray-700 mb-6 text-lg">
                At GiftBridge, we believe in strengthening the connection between parents and teachers through meaningful appreciation. 
                Our platform makes it easy to show consistent gratitude to the educators who make a difference in your child's life.
              </p>
              
              <h2 className="h3 mb-4 text-primary">Our Story</h2>
              <p className="text-gray-700 mb-6 text-lg">
                GiftBridge was founded by a group of parents and educators who recognized the challenge of consistently showing appreciation 
                to teachers throughout the school year. We wanted to create a solution that would make it effortless for parents to send 
                meaningful gifts to teachers, while also ensuring teachers receive gifts they truly value.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mt-10">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-3">For Parents</h3>
                  <p className="text-gray-700">
                    We simplify the process of showing appreciation to your child's teachers through automated, 
                    thoughtful gift-giving that strengthens these important relationships.
                  </p>
                </div>
                
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-3">For Teachers</h3>
                  <p className="text-gray-700">
                    We ensure educators receive meaningful gifts they actually want, making them feel truly 
                    valued for their dedication and hard work.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mb-12 bg-white p-8 rounded-xl shadow-md">
              <h2 className="h3 mb-4 text-primary">Our Values</h2>
              
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                <div className="border border-gray-200 p-6 rounded-lg hover-lift">
                  <h3 className="text-xl font-bold mb-3">Appreciation</h3>
                  <p className="text-gray-700">
                    We believe in the power of consistent appreciation to strengthen relationships and build community.
                  </p>
                </div>
                
                <div className="border border-gray-200 p-6 rounded-lg hover-lift">
                  <h3 className="text-xl font-bold mb-3">Simplicity</h3>
                  <p className="text-gray-700">
                    We strive to make appreciation effortless through thoughtful design and automation.
                  </p>
                </div>
                
                <div className="border border-gray-200 p-6 rounded-lg hover-lift">
                  <h3 className="text-xl font-bold mb-3">Thoughtfulness</h3>
                  <p className="text-gray-700">
                    We ensure gifts are meaningful by empowering teachers to share their preferences.
                  </p>
                </div>
                
                <div className="border border-gray-200 p-6 rounded-lg hover-lift">
                  <h3 className="text-xl font-bold mb-3">Connection</h3>
                  <p className="text-gray-700">
                    We foster stronger parent-teacher relationships through regular positive interactions.
                  </p>
                </div>
                
                <div className="border border-gray-200 p-6 rounded-lg hover-lift">
                  <h3 className="text-xl font-bold mb-3">Reliability</h3>
                  <p className="text-gray-700">
                    We ensure consistency in gift-giving, so appreciation happens throughout the year.
                  </p>
                </div>
                
                <div className="border border-gray-200 p-6 rounded-lg hover-lift">
                  <h3 className="text-xl font-bold mb-3">Impact</h3>
                  <p className="text-gray-700">
                    We believe small acts of appreciation can make a big difference in school communities.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-12 mb-8">
              <h2 className="h3 mb-6">Join Us in Appreciating Educators</h2>
              <p className="text-gray-700 mb-8 text-lg">
                Ready to start showing consistent appreciation to your child's teachers?
              </p>
              <div className="flex justify-center gap-4">
                <a href="/register" className="btn-primary">Sign Up Today</a>
                <a href="/contact" className="btn-secondary">Contact Us</a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default About;
