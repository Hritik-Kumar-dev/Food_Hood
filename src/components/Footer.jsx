import React from 'react';
import { Facebook, Twitter, Instagram, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="mt-8 bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
          
          {/* Logo & Description */}
          <div>
            <div className="flex items-center justify-center md:justify-start mb-3">
              <span className="text-2xl mr-2">🍽️</span>
              <h3 className="text-xl font-bold text-green-400">FOODHOOD</h3>
            </div>
            <p className="text-gray-300 text-sm">
              Your favorite food delivery platform
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-3">Quick Links</h4>
            <div className="space-y-2 text-sm">
              <a href="/about" className="block text-gray-300 hover:text-green-400">About Us</a>
              <a href="/contact" className="block text-gray-300 hover:text-green-400">Contact</a>
              <a href="/privacy" className="block text-gray-300 hover:text-green-400">Privacy Policy</a>
            </div>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="font-semibold mb-3">Connect With Us</h4>
            <p className="text-gray-300 text-sm mb-3">📞 +91 98765 43210</p>
            <div className="flex justify-center md:justify-start space-x-3">
              <a href="#" className="text-gray-300 hover:text-blue-400">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-blue-400">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-pink-400">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="border-t border-gray-700 mt-6 pt-4 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 FOODHOOD. Made with <Heart className="w-4 h-4 text-red-500 inline" /> for food lovers.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;