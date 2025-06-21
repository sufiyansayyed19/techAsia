import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';
import logo from '../../assets/general/logo.png'; // Assuming your logo is in the assets/general folder

// Data for links to keep the component clean
const quickLinks = [
  { name: 'About Us', href: '#' },
  { name: 'Services', href: '#' },
  { name: 'Industries', href: '#' },
  { name: 'Career', href: '#' },
];

const socialLinks = [
  { name: 'Facebook', icon: Facebook, href: '#' },
  { name: 'Instagram', icon: Instagram, href: '#' },
  { name: 'LinkedIn', icon: Linkedin, href: '#' },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-900 text-slate-300">
      <div className="container mx-auto px-6 py-16">
        <div className="grid gap-12 text-center sm:grid-cols-2 sm:text-left lg:grid-cols-4">
          
          {/* Column 1: Company & Address */}
          <div className="space-y-4">
            <a href="#" className="inline-block">
              <img src={logo} alt="TechAsia Logo" className="h-12 mx-auto sm:mx-0" />
            </a>
            <div className="flex items-start justify-center sm:justify-start gap-3">
              <MapPin className="h-5 w-5 mt-1 text-amber-500 flex-shrink-0" />
              <p className="leading-relaxed">
                302, Pandurang Smruti C.H.S.,<br />
                Dawadi Road, Dombivli East<br />
                421203
              </p>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg text-white">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map(link => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-amber-500 transition-colors duration-200">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg text-white">Contact Info</h3>
            <div className="space-y-2">
              <p>
                <a href="mailto:info@techasia-mechatronics.com" className="hover:text-amber-500 transition-colors duration-200">
                  info@techasia-mechatronics.com
                </a>
              </p>
              <p>
                <a href="tel:+919999999999" className="hover:text-amber-500 transition-colors duration-200">
                  +91 XXX XXX XXXX
                </a>
              </p>
            </div>
          </div>

          {/* Column 4: Social Media */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg text-white">Follow Us</h3>
            <div className="flex justify-center sm:justify-start gap-4">
              {socialLinks.map(social => (
                <a 
                  key={social.name} 
                  href={social.href}
                  aria-label={social.name}
                  className="bg-zinc-800 p-2 rounded-full text-amber-500 hover:bg-amber-500 hover:text-white transition-all duration-300"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-slate-800">
        <div className="container mx-auto px-6 py-6 text-center text-sm text-slate-500">
          © {currentYear} TechAsia Mechatronics Pvt. Ltd. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;