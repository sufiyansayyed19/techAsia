// src/pages/DigitalCardPage.jsx

import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { 
  Share2, Edit3, Sparkles, ArrowRight, XCircle, CheckCircle2, Link as LinkIcon 
} from 'lucide-react';
import { Link as ScrollLink } from 'react-scroll'; // Use react-scroll for smooth scrolling
import { Link as RouterLink } from 'react-router-dom';
import cardOnPhoneImg from '../assets/digital-card/mobilePic.png';

const DigitalCardPage = () => {
  return (
    <div className="bg-white">
      {/* 1. Hero Section (Dark) */}
      <section className="bg-zinc-800 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-orange-500/10 to-transparent rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-red-500/10 to-transparent rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
        <div className="container mx-auto px-6 pt-20 pb-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}>
              <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">The Last Business Card You'll Ever Need.</h1>
              <p className="mt-6 text-slate-300 text-lg">Forget about old-fashioned printed cards. With our Digital Business Card, you can instantly create, customize, and share your professional identity with a single tap.</p>
              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-3"><Share2 className="w-6 h-6 text-orange-400" /><span className="font-semibold">Share Instantly, Anywhere</span></div>
                <div className="flex items-center gap-3"><Edit3 className="w-6 h-6 text-orange-400" /><span className="font-semibold">Update in Real-Time</span></div>
                <div className="flex items-center gap-3"><Sparkles className="w-6 h-6 text-orange-400" /><span className="font-semibold">Impress with Every Interaction</span></div>
              </div>
              <motion.div whileHover={{ scale: 1.05 }} className="mt-10">
                <ScrollLink to="pricing" smooth={true} duration={500} offset={-50} className="inline-flex items-center gap-2 px-8 py-4 font-bold text-white bg-gradient-to-r from-amber-500 to-orange-600 rounded-full shadow-lg cursor-pointer">
                  Get Your Card Now <ArrowRight />
                </ScrollLink>
              </motion.div>
            </motion.div>
            <motion.div className="relative hidden lg:flex justify-center" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.2, type: "spring" }}>
              <motion.div className="w-72 h-[34rem] p-4 bg-zinc-900/50 backdrop-blur-sm rounded-[40px] shadow-2xl border border-white/10" animate={{ y: [0, -15, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}>
                <img src={cardOnPhoneImg} alt="Digital Business Card on a Phone" className="w-full h-full object-cover rounded-[28px]" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Features Section (Light) */}
      <section className="bg-white py-20 sm:py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zinc-800">Stop Sharing Paper. Start Connecting.</h2>
            <p className="mt-3 text-slate-600 max-w-2xl mx-auto">Traditional business cards get lost, outdated, and thrown away. A digital card is a living, interactive profile that creates lasting connections.</p>
            <div className="w-20 h-1.5 bg-orange-500 mx-auto rounded-full mt-4"></div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div className="bg-slate-50 p-8 rounded-2xl border border-slate-200" initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease: "easeOut" }}>
              <h3 className="text-2xl font-bold text-slate-600 mb-6">The Old Way (Paper Cards)</h3>
              <ul className="space-y-4">
                <FeatureListItem isProblem>Easily Lost & Damaged: 88% of paper cards are thrown out in less than a week.</FeatureListItem>
                <FeatureListItem isProblem>Static & Outdated: Changed your number? You need to print a new batch.</FeatureListItem>
                <FeatureListItem isProblem>No Analytics: You never know if someone actually used your card.</FeatureListItem>
                <FeatureListItem isProblem>Environmentally Wasteful: Over 7 million trees are cut down for business cards each year.</FeatureListItem>
              </ul>
            </motion.div>
            <motion.div className="bg-white p-8 rounded-2xl border-2 border-orange-400 shadow-xl" initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}>
              <h3 className="text-2xl font-bold text-zinc-800 mb-6">The New Way (Digital Card)</h3>
              <ul className="space-y-4">
                <FeatureListItem>One-Click Actions: Clients can call, email, or navigate to your office instantly.</FeatureListItem>
                <FeatureListItem>Always Up-to-Date: Update your details anytime, and everyone with your card sees the changes.</FeatureListItem>
                <FeatureListItem>Trackable & Insightful: See how many people view and interact with your card.</FeatureListItem>
                <FeatureListItem>Eco-Friendly & Sustainable: Save trees and reduce your carbon footprint.</FeatureListItem>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Live Demo Section (Dark) */}
      <section className="bg-zinc-800 py-20 sm:py-24">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-white">Experience It Live</h2>
            <p className="mt-3 text-slate-400 max-w-2xl mx-auto">See a full-scale interactive version of our Digital Business Card in action.</p>
            <div className="w-20 h-1.5 bg-orange-500 mx-auto rounded-full mt-4"></div>
            <motion.div className="mt-10 inline-block" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <RouterLink to="/vCard" className="px-10 py-4 font-bold text-lg text-zinc-800 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full shadow-lg">
                View Live Demo
              </RouterLink>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. Pricing Section (Light) */}
      <section id="pricing" className="bg-white py-20 sm:py-24">
        <div className="container mx-auto px-6">
          <motion.div className="max-w-md mx-auto bg-white rounded-2xl shadow-xl border border-slate-200 p-8 text-center" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease: "easeOut" }}>
            <h3 className="text-2xl font-bold text-zinc-800">Yearly Plan</h3>
            <p className="mt-4 text-5xl font-extrabold text-zinc-900">₹999<span className="text-lg font-medium text-slate-500">/12 Months</span></p>
            <ul className="mt-8 space-y-4 text-left">
              <FeatureListItem>Access to all features</FeatureListItem>
              <FeatureListItem>No Hidden Charges</FeatureListItem>
              <FeatureListItem>Unlimited Page Views</FeatureListItem>
              <FeatureListItem>Dedicated URL</FeatureListItem>
            </ul>
            <motion.div whileHover={{ scale: 1.05 }} className="mt-8">
              <ScrollLink to="order-form" smooth={true} duration={500} offset={-50} className="inline-block w-full px-8 py-4 font-bold text-lg text-white bg-gradient-to-r from-amber-500 to-orange-600 rounded-full shadow-lg cursor-pointer">
                Create My Digital Card
              </ScrollLink>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 5. Order Form Section (Dark) */}
      <section id="order-form" className="bg-zinc-800 py-20 sm:py-24">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white">Get Your Interactive Digital Card</h2>
            <p className="mt-3 text-slate-400">Submit your details below, and our team will get in touch to finalize your premium digital card.</p>
            <div className="w-20 h-1.5 bg-orange-500 mx-auto rounded-full mt-4"></div>
          </div>
          <form action="#" method="POST" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <InputField label="*Full Name" name="fullName" type="text" isDark />
              <InputField label="*Contact No" name="contactNo" type="tel" isDark />
            </div>
            <InputField label="*Email" name="email" type="email" isDark />
            <InputField label="Website" name="website" type="url" isDark />
            <InputField label="Address" name="address" type="text" isDark />
            <TextareaField label="Tagline/Products/Services" name="services" isDark />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-slate-700">
              <FileInput label="Your Image (JPG/PNG)" name="profileImage" isDark />
              <FileInput label="Company Logo (PNG)" name="companyLogo" isDark />
              <FileInput label="Background Image (Optional)" name="backgroundImage" isDark />
            </div>
            <div className="text-center pt-6">
              <button type="submit" className="px-10 py-4 font-bold text-lg text-zinc-800 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full shadow-lg hover:scale-105 transition-transform">
                Send Details
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

// --- Helper Components with Dark Mode Awareness ---

const FeatureListItem = ({ children, isProblem }) => (
  <li className="flex items-start gap-3">
    {isProblem ? <XCircle className="w-6 h-6 text-red-400 flex-shrink-0" /> : <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0" />}
    <span className="text-slate-700">{children}</span>
  </li>
);

const InputField = ({ label, name, type, isDark = false }) => (
  <div>
    <label htmlFor={name} className="sr-only">{label}</label>
    <input type={type} name={name} id={name} required={label.includes('*')}
      className={`w-full p-4 border rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition ${isDark ? 'bg-zinc-700 border-zinc-600 text-white placeholder:text-slate-400' : 'bg-slate-100 border-slate-200 text-zinc-800'}`} 
      placeholder={label} 
    />
  </div>
);

const TextareaField = ({ label, name, isDark = false }) => (
  <div>
    <label htmlFor={name} className="sr-only">{label}</label>
    <textarea name={name} id={name} rows="4"
      className={`w-full p-4 border rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition ${isDark ? 'bg-zinc-700 border-zinc-600 text-white placeholder:text-slate-400' : 'bg-slate-100 border-slate-200 text-zinc-800'}`} 
      placeholder={label}
    ></textarea>
  </div>
);

const FileInput = ({ label, name, isDark = false }) => (
  <div className={`p-4 border rounded-md ${isDark ? 'bg-zinc-700 border-zinc-600' : 'bg-slate-100 border-slate-200'}`}>
    <label htmlFor={name} className={`text-sm mb-2 block ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>{label}</label>
    <input type="file" name={name} id={name}
      className={`w-full text-sm ${isDark ? 'text-slate-400' : 'text-slate-500'} file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold ${isDark ? 'file:bg-orange-900/50 file:text-orange-300 hover:file:bg-orange-800/50' : 'file:bg-orange-100 file:text-orange-700 hover:file:bg-orange-200'}`}
    />
  </div>
);

export default DigitalCardPage;