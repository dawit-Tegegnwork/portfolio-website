import React from 'react';
import { Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto text-center">
        <h3 className="text-2xl font-bold mb-4">Let's Connect</h3>
        <div className="flex justify-center gap-6 mb-4">
          <a href="mailto:dawittegegnwork@gmail.com" className="hover:text-blue-400 transition-colors flex items-center gap-2">
            <Mail size={24} /> dawittegegnwork@gmail.com
          </a>
          <a href="tel:+251939378664" className="hover:text-blue-400 transition-colors flex items-center gap-2">
            <Phone size={24} /> +251939378664
          </a>
        </div>
        <p>© 2024 Dawit Tegegnwork</p>
      </div>
    </footer>
  );
};

export default Footer;
