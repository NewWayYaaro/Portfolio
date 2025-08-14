// React ko import kar rahe hain, kyunki yeh React component banane ke liye zaroori hai
import React from 'react';
// 'lucide-react' se icons import kar rahe hain jo footer me use honge
import { Github, Linkedin, Youtube, Mail, Heart } from 'lucide-react';

// Footer component ka start
const Footer = () => {
  return (
    // footer HTML tag ka use karke niche ka section banate hain
    // isme Tailwind CSS classes lagai gayi hain styling ke liye
    <footer className="bg-gray-900 border-t border-gray-800 py-12">
      <div className="container mx-auto px-6">
        
        {/* Footer ke upar ka section - 3 column layout */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          
          {/* First Column - Portfolio ka naam aur short description */}
          <div>
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-4">
              Portfolio
            </div>
            <p className="text-gray-400 leading-relaxed">
              Passionate developer and content creator on a journey of continuous learning and growth.
            </p>
          </div>

          {/* Second Column - Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              {/* Yahan pe website ke alag-alag sections ke links diye gaye hain */}
              <a href="#home" className="block text-gray-400 hover:text-white transition-colors">Home</a>
              <a href="#about" className="block text-gray-400 hover:text-white transition-colors">About</a>
              <a href="#skills" className="block text-gray-400 hover:text-white transition-colors">Skills</a>
              <a href="#projects" className="block text-gray-400 hover:text-white transition-colors">Projects</a>
            </div>
          </div>

          {/* Third Column - Social Media Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Connect</h3>
            {/* Social icons row */}
            <div className="flex space-x-4">
              {/* Github Link */}
              <a href="#" className="text-gray-400 hover:text-blue-400 transform hover:scale-110 transition-all duration-300">
                <Github size={24} />
              </a>
              {/* Linkedin Link */}
              <a href="#" className="text-gray-400 hover:text-blue-400 transform hover:scale-110 transition-all duration-300">
                <Linkedin size={24} />
              </a>
              {/* Youtube Link */}
              <a href="#" className="text-gray-400 hover:text-red-400 transform hover:scale-110 transition-all duration-300">
                <Youtube size={24} />
              </a>
              {/* Email/Contact Link */}
              <a href="#contact" className="text-gray-400 hover:text-green-400 transform hover:scale-110 transition-all duration-300">
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Footer ke niche ka section - copyright text */}
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center space-x-1">
            <span>Made with</span>
            {/* Heart icon red color me */}
            <Heart className="text-red-500" size={16} fill="currentColor" />
            <span>using React & Tailwind CSS</span>
          </p>
          {/* Current year automatic show hoga using JavaScript Date */}
          <p className="text-gray-500 text-sm mt-2">
            © {new Date().getFullYear()} Portfolio. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

// Component ko export kar rahe hain taki dusre files me use ho sake
export default Footer;
