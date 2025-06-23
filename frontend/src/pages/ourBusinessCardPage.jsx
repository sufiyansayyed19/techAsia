// src/pages/LiveCardDemoPage.jsx
import React from 'react';
import { Phone, Globe, MapPin, MessageCircle, Twitter, Mail, Linkedin, Facebook, Youtube, QrCode, Share2, Save, HelpCircle } from 'lucide-react';
import profilePic from '../assets/digital-card/profile-pic.png'; // Replace with the actual profile picture
import techAsiaLogo from '../assets/general/logo.png';

const OurBusinessCardPage = () => {
  return (
    <div className="bg-slate-200 min-h-screen py-10 px-4">
      <div className="max-w-sm mx-auto bg-zinc-800 text-white rounded-3xl shadow-2xl overflow-hidden">
        {/* Main Content */}
        <div className="p-6 space-y-6">
          {/* Header */}
          <div className="text-center">
            <img src={profilePic} alt="Priyesh Ramesh Chiplunkar" className="w-32 h-32 rounded-full mx-auto border-4 border-zinc-700 ring-2 ring-orange-500" />
            <h1 className="mt-4 text-2xl font-bold text-orange-400">Priyesh Ramesh Chiplunkar</h1>
            <p className="text-slate-400">Director, BE. Electronics</p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <ContactItem icon={Phone} text="+91 7666308198" href="tel:+917666308198" />
            <ContactItem icon={Globe} text="www.techasiamechatronics.com" href="https://www.techasiamechatronics.com" />
            <ContactItem icon={MapPin} text="302- Pandurang Smruti C.H.S., Dawadi, Dombivli(E)-421203" />
          </div>

          {/* Social Links */}
          <div className="flex justify-around items-center pt-4 border-t border-zinc-700">
            <SocialLink icon={MessageCircle} href="#" />
            <SocialLink icon={Twitter} href="#" />
            <SocialLink icon={Mail} href="#" />
            <SocialLink icon={Linkedin} href="#" />
            <SocialLink icon={Facebook} href="#" />
            <SocialLink icon={Youtube} href="#" />
          </div>

          {/* Company Logo & Services */}
          <div className="text-center space-y-3">
            <img src={techAsiaLogo} alt="TechAsia Logo" className="h-14 mx-auto" />
            <p className="text-slate-400 text-sm leading-relaxed">
              Electronic Controllers, PLC Automation, APFC Panels, LED Lights & Digital vCards
            </p>
          </div>
        </div>

        {/* Footer Action Bar */}
        <div className="bg-orange-500 grid grid-cols-4">
          <FooterAction icon={QrCode} text="QR" />
          <FooterAction icon={Share2} text="Share" />
          <FooterAction icon={Save} text="Save" />
          <FooterAction icon={HelpCircle} text="Help" />
        </div>
      </div>
    </div>
  );
};

// --- Helper components to keep the main component clean ---

const ContactItem = ({ icon: Icon, text, href }) => (
  <div className="flex items-center gap-4">
    <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
      <Icon className="w-5 h-5 text-white" />
    </div>
    {href ? (
      <a href={href} target="_blank" rel="noopener noreferrer" className="text-slate-200 hover:underline">{text}</a>
    ) : (
      <p className="text-slate-200">{text}</p>
    )}
  </div>
);

const SocialLink = ({ icon: Icon, href }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white">
    <Icon className="w-6 h-6" />
  </a>
);

const FooterAction = ({ icon: Icon, text }) => (
  <button className="flex flex-col items-center justify-center py-3 text-white hover:bg-orange-600 transition-colors duration-200">
    <Icon className="w-6 h-6" />
    <span className="text-xs mt-1">{text}</span>
  </button>
);

export default OurBusinessCardPage;