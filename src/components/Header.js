import React from 'react';
import { Mail, ExternalLink } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 text-center">
      <h1 className="text-5xl font-bold mb-4">Dawit Tegegnwork Wubale</h1>
      <p className="text-2xl mb-4">Healthcare Systems Architecture | Data Science | AI Solutions</p>
      <div className="flex justify-center gap-4">
        <a href="mailto:your-email@example.com" className="bg-white text-blue-600 px-6 py-2 rounded-lg font-medium hover:bg-blue-50 transition-colors flex items-center gap-2">
          <Mail size={20} /> Contact Me
        </a>
        <a href="your-resume-link" className="border border-white px-6 py-2 rounded-lg font-medium hover:bg-white/10 transition-colors flex items-center gap-2">
          <ExternalLink size={20} /> View Resume
        </a>
      </div>
    </header>
  );
};

export default Header;
