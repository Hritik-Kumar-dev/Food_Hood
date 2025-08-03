import React from 'react';
import { Search, Grid3X3, Navigation, Zap, Users, Heart, Clock, Shield } from 'lucide-react';

import Footer from './components/Footer.jsx';
const About = () => {
  const features = [
    {
      icon: <Search className="w-8 h-8 text-green-600" />,
      title: "Smart Browsing",
      description: "Easily browse through thousands of restaurants and dishes with our intelligent search system."
    },
    {
      icon: <Grid3X3 className="w-8 h-8 text-green-600" />,
      title: "Category Wise Filtering",
      description: "Find exactly what you're craving with our organized category filters - from appetizers to desserts."
    },
    {
      icon: <Navigation className="w-8 h-8 text-green-600" />,
      title: "Easy Navigation",
      description: "Intuitive interface designed for seamless user experience across all devices."
    },
    {
      icon: <Zap className="w-8 h-8 text-green-600" />,
      title: "Quick Response",
      description: "Lightning-fast loading times and instant search results to save your precious time."
    },
    {
      icon: <Clock className="w-8 h-8 text-green-600" />,
      title: "Real-time Tracking",
      description: "Track your order in real-time from preparation to delivery at your doorstep."
    },
    {
      icon: <Shield className="w-8 h-8 text-green-600" />,
      title: "Secure Payments",
      description: "Multiple secure payment options including COD, UPI, and card payments."
    },
    {
      icon: <Users className="w-8 h-8 text-green-600" />,
      title: "Community Driven",
      description: "Ratings and reviews from real customers to help you make the best food choices."
    },
    {
      icon: <Heart className="w-8 h-8 text-green-600" />,
      title: "Personalized Experience",
      description: "Get personalized recommendations based on your preferences and order history."
    }
  ];

  const stats = [
    { number: "10,000+", label: "Happy Customers" },
    { number: "500+", label: "Restaurant Partners" },
    { number: "50,000+", label: "Orders Delivered" },
    { number: "25+", label: "Cities Served" }
  ];

  return (
    <>
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-orange-50">
      {/* Hero Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-16">
          {/* Logo and Name */}
          <div className="flex justify-center items-center mb-8">
            <div className="relative">
              <div className="w-32 h-32 bg-gradient-to-r from-green-600 to-orange-500 rounded-full flex items-center justify-center shadow-2xl">
                <span className="text-4xl">🍽️</span>
              </div>
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">F</span>
              </div>
            </div>
          </div>
          
          <h1 className="text-6xl font-bold bg-gradient-to-r from-green-600 to-orange-500 bg-clip-text text-transparent mb-4">
            FoOD_HoOD
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Welcome to your neighborhood's favorite food delivery platform. We connect you with the best local restaurants 
            and deliver delicious meals right to your doorstep with love and care.
          </p>
        </div>

        {/* Mission Statement */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-16 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Our Mission</h2>
          <p className="text-lg text-gray-600 text-center leading-relaxed">
            At FOODHOOD, we believe that great food brings people together. Our mission is to make delicious, 
            quality food accessible to everyone while supporting local restaurants and creating a thriving food community. 
            We're not just delivering food – we're delivering happiness, one meal at a time.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="text-3xl font-bold text-green-600 mb-2">{stat.number}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Features Section */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">Why Choose FOODHOOD?</h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            We've built our platform with you in mind. Here's what makes us different:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-center mb-3 text-gray-800">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-center text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* How It Works */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔍</span>
              </div>
              <h3 ClassName="text-xl font-semibold mb-2">1. Browse & Search</h3>
              <p className="text-gray-600">Explore restaurants and dishes in your area using our smart search and filters.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🛒</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">2. Order & Pay</h3>
              <p className="text-gray-600">Add items to cart, customize your order, and choose from multiple payment options.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚚</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">3. Track & Enjoy</h3>
              <p className="text-gray-600">Track your order in real-time and enjoy fresh, hot food delivered to you.</p>
            </div>
          </div>
        </div>

        {/* Team/Values Section */}
        <div className="bg-gradient-to-r from-green-600 to-orange-500 rounded-2xl shadow-xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-6">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl mb-4">🌟</div>
              <h3 className="text-xl font-semibold mb-2">Quality First</h3>
              <p className="opacity-90">We partner only with restaurants that maintain the highest food quality standards.</p>
            </div>
            <div>
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold mb-2">Speed & Reliability</h3>
              <p className="opacity-90">Fast delivery times and consistent service you can count on.</p>
            </div>
            <div>
              <div className="text-4xl mb-4">💚</div>
              <h3 className="text-xl font-semibold mb-2">Community Support</h3>
              <p className="opacity-90">Supporting local businesses and building stronger communities through food.</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Ready to Experience FOODHOOD?</h2>
          <p className="text-xl text-gray-600 mb-8">Join thousands of happy customers and discover your new favorite meals today!</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold text-lg">
              Start Ordering Now
            </button>
            <button className="border-2 border-green-600 text-green-600 px-8 py-3 rounded-lg hover:bg-green-600 hover:text-white transition-colors font-semibold text-lg">
              Download App
            </button>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default About;