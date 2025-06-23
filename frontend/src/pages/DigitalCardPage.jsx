import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence  } from 'framer-motion';
import { Share2, Edit3,  Sparkles, ArrowRight, XCircle, CheckCircle2, Phone, Mail, MessageSquare, MapPin, Linkedin, Twitter, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';
import cardOnPhoneImg from '../assets/digital-card.png';
import { useState } from 'react';


// eslint-disable-next-line no-unused-vars
const InteractiveButton = ({ icon: Icon, tooltipText }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative flex flex-col items-center gap-2"
    >
      {/* The button itself */}
      <motion.div
        className="w-14 h-14 bg-zinc-700 rounded-full flex items-center justify-center cursor-pointer"
        whileHover={{ scale: 1.1, backgroundColor: '#ea580c' }} // orange-600
      >
        <Icon className="w-6 h-6 text-white" />
      </motion.div>

      {/* The animated tooltip */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="absolute -top-10 px-3 py-1 bg-zinc-900 text-white text-xs rounded-md shadow-lg whitespace-nowrap"
          >
            {tooltipText}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const DigitalCardPage = () => {
  return (
    <div className="bg-white text-zinc-800">
      {/* 1. Hero Section */}
      <section className="bg-zinc-800 text-white relative overflow-hidden">
        {/* Background decorative blobs */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-orange-500/10 to-transparent rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-red-500/10 to-transparent rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
        
        <div className="container mx-auto px-6 pt-24 pb-16 lg:py-13">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Column: Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h1 className="text-4xl md:text-5xl font-extrabold leading-tigh">
                The Last Business Card You'll Ever Need.
              </h1>
              <p className="mt-6 text-slate-300 text-lg">
                Forget about old-fashioned printed cards. With our Digital Business Card, you can instantly create, customize, and share your professional identity with a single tap.
              </p>
              
              {/* Key Benefits */}
              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-3">
                  <Share2 className="w-6 h-6 text-orange-400" />
                  <span className="font-semibold">Share Instantly, Anywhere</span>
                </div>
                <div className="flex items-center gap-3">
                  <Edit3 className="w-6 h-6 text-orange-400" />
                  <span className="font-semibold">Update in Real-Time</span>
                </div>
                <div className="flex items-center gap-3">
                  <Sparkles className="w-6 h-6 text-orange-400" />
                  <span className="font-semibold">Impress with Every Interaction</span>
                </div>
              </div>

              {/* Call to Action Button */}
              <motion.div whileHover={{ scale: 1.05 }} className="mt-10">
                <Link to="#pricing" className="inline-flex items-center gap-2 px-8 py-4 font-bold text-white bg-gradient-to-r from-amber-500 to-orange-600 rounded-full shadow-lg">
                  Get Your Card Now
                  <ArrowRight />
                </Link>
              </motion.div>
            </motion.div>

            {/* Right Column: Phone Image/Animation */}
            <motion.div 
              className="relative hidden lg:flex justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2, type: "spring" }}
            >
              {/* Placeholder for 3D animation. For now, we use a stylish image frame. */}
              <motion.div 
                className="w-72 h-[34rem]  p-4 bg-zinc-900/50 backdrop-blur-sm rounded-[40px] shadow-2xl border border-white/10"
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <img src={cardOnPhoneImg} alt="Digital Business Card on a Phone" className="w-full h-full object-cover rounded-[28px]" />
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* --- The other sections will be added here --- */}
       {/* 2. Problem & Solution Features Section */}
      <section className="bg-slate-50 py-20 sm:py-24">
        <div className="container mx-auto px-6">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zinc-800">Stop Sharing Paper. Start Connecting.</h2>
            <p className="mt-3 text-slate-600 max-w-2xl mx-auto">
              Traditional business cards get lost, outdated, and thrown away. A digital card is a living, interactive profile that creates lasting connections.
            </p>
            <div className="w-20 h-1.5 bg-orange-500 mx-auto rounded-full mt-4"></div>
          </div>
          
          {/* Grid Container */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Left Column: The Problem */}
            <motion.div 
              className="bg-white p-8 rounded-2xl border border-slate-200"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <h3 className="text-2xl font-bold text-slate-500 mb-6">The Old Way (Paper Cards)</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <XCircle className="w-6 h-6 text-red-400 mt-0.5 flex-shrink-0" />
                  <span>
                    <span className="font-semibold">Easily Lost & Damaged:</span> 88% of paper cards are thrown out in less than a week.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="w-6 h-6 text-red-400 mt-0.5 flex-shrink-0" />
                  <span>
                    <span className="font-semibold">Static & Outdated:</span> Changed your number? You need to print a new batch.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="w-6 h-6 text-red-400 mt-0.5 flex-shrink-0" />
                  <span>
                    <span className="font-semibold">No Analytics:</span> You never know if someone actually used your card.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="w-6 h-6 text-red-400 mt-0.5 flex-shrink-0" />
                  <span>
                    <span className="font-semibold">Environmentally Wasteful:</span> Over 7 million trees are cut down for business cards each year.
                  </span>
                </li>
              </ul>
            </motion.div>

            {/* Right Column: The Solution */}
            <motion.div 
              className="bg-white p-8 rounded-2xl border-2 border-orange-400 shadow-xl"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            >
              <h3 className="text-2xl font-bold text-zinc-800 mb-6">The New Way (Digital Card)</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>
                    <span className="font-semibold">One-Click Actions:</span> Clients can call, email, or navigate to your office instantly.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>
                    <span className="font-semibold">Always Up-to-Date:</span> Update your details anytime, and everyone with your card sees the changes.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>
                    <span className="font-semibold">Trackable & Insightful:</span> See how many people view and interact with your card.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>
                    <span className="font-semibold">Eco-Friendly & Sustainable:</span> Save trees and reduce your carbon footprint.
                  </span>
                </li>
              </ul>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 3. Live Demo Section */}
      <section className="bg-white py-20 sm:py-24">
        <div className="container mx-auto px-6">

          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zinc-800">Experience It Live</h2>
            <p className="mt-3 text-slate-600 max-w-2xl mx-auto">
              Hover over the interactive elements below to see how your clients will connect with you.
            </p>
            <div className="w-20 h-1.5 bg-orange-500 mx-auto rounded-full mt-4"></div>
          </div>

          {/* Demo Card Container */}
          <motion.div 
            className="max-w-sm mx-auto bg-zinc-800 text-white rounded-3xl shadow-2xl p-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {/* Card Header */}
            <div className="text-center">
              <img 
                src="https://i.imgur.com/4DD2z1i.png" // Placeholder profile picture
                alt="Profile"
                className="w-28 h-28 rounded-full mx-auto border-4 border-zinc-700"
              />
              <h3 className="mt-4 text-2xl font-bold">John Doe</h3>
              <p className="text-orange-400">CEO & Founder</p>
            </div>

            {/* Action Buttons with Interactive Tooltips */}
            <div className="mt-8 grid grid-cols-4 gap-4">
              <InteractiveButton icon={Phone} tooltipText="One tap to call" />
              <InteractiveButton icon={Mail} tooltipText="Opens email client" />
              <InteractiveButton icon={MessageSquare} tooltipText="Start a WhatsApp chat" />
              <InteractiveButton icon={MapPin} tooltipText="Navigate to office" />
            </div>

            {/* Social Links Section (Example) */}
            <div className="mt-8 pt-6 border-t border-zinc-700 text-center space-y-4">
              <h4 className="font-semibold text-slate-300">Connect on Social Media</h4>
              <div className="flex justify-center gap-4">
                <Linkedin className="w-6 h-6 text-slate-400 hover:text-white cursor-pointer" />
                <Twitter className="w-6 h-6 text-slate-400 hover:text-white cursor-pointer" />
                <Instagram className="w-6 h-6 text-slate-400 hover:text-white cursor-pointer" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default DigitalCardPage;


