import React from 'react';
import { Heart, Mail, MessageCircle, Shield } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">
              h!<span className="text-pink-400">anime</span>
            </h3>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Your ultimate destination for watching anime online for free. Enjoy thousands of anime episodes 
              and movies in HD quality with subtitles.
            </p>
            <div className="flex items-center text-sm text-gray-500">
              <span>Made with</span>
              <Heart className="h-4 w-4 mx-1 text-pink-400" />
              <span>for anime fans worldwide</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-pink-400 transition-colors duration-200">Home</a></li>
              <li><a href="#" className="hover:text-pink-400 transition-colors duration-200">Movies</a></li>
              <li><a href="#" className="hover:text-pink-400 transition-colors duration-200">TV Series</a></li>
              <li><a href="#" className="hover:text-pink-400 transition-colors duration-200">Most Popular</a></li>
              <li><a href="#" className="hover:text-pink-400 transition-colors duration-200">Top Airing</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-pink-400 transition-colors duration-200 flex items-center">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-400 transition-colors duration-200 flex items-center">
                  <Shield className="h-4 w-4 mr-2" />
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-400 transition-colors duration-200 flex items-center">
                  <Mail className="h-4 w-4 mr-2" />
                  Report Issue
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row items-center justify-between">
          <div className="text-gray-500 text-sm mb-4 md:mb-0">
            © 2025 HiAnime.to. All rights reserved.
          </div>
          <div className="text-gray-500 text-sm">
            <span className="text-pink-400">Note:</span> This is a demo website with mock data for educational purposes.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;