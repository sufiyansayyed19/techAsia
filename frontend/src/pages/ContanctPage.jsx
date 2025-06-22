import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

const ContactPage = () => {
  return (
    // UPDATED: The red banner has been removed. The page starts with a white background.
    <div className="bg-white">
      {/* Main Content Area */}
      <div className="container mx-auto px-6 pt-12 pb-16 sm:pt-16 sm:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Left Column: Info & Map */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="space-y-8">
              {/* About Us Section */}
              <div>
                <h2 className="text-3xl font-bold text-zinc-800 mb-4">About TechAsia</h2>
                <p className="text-slate-600 leading-relaxed">
                  TechAsia Mechatronics Pvt. Ltd. is a trusted name in electronics manufacturing and industrial automation. Since 2016, we have delivered cutting-edge solutions across various industries, specializing in the design, development, and production of electronic systems that increase productivity and reduce operational costs.
                </p>
              </div>

              {/* --- NEW: Mission & Vision Section --- */}
              <div>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-2xl font-semibold text-zinc-800 mb-2">Our Vision</h3>
                    <p className="text-slate-600 leading-relaxed border-l-4 border-orange-400 pl-4">
                      To be a leading force in smart manufacturing and automation, shaping the future of industrial efficiency and innovation.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-zinc-800 mb-2">Our Mission</h3>
                    <p className="text-slate-600 leading-relaxed border-l-4 border-orange-400 pl-4">
                      To provide reliable, scalable, and innovative electronic and automation solutions that empower industries to perform at their best.
                    </p>
                  </div>
                </div>
              </div>
              {/* --- END of Mission & Vision Section --- */}

              {/* Office Details */}
              <div>
                <h3 className="text-2xl font-semibold text-zinc-800 mb-4">Our Office</h3>
                <div className="space-y-4 text-slate-600">
                  <div className="flex items-start gap-4">
                    <MapPin className="h-5 w-5 mt-1 text-orange-500 flex-shrink-0" />
                    <span>302, Pandurang Smruti C, H.S, Dawadi Gaon Rd, near Regency Estate, Shivshakti Nagar, Sonar Pada, Dombivli East, Dombivli, Maharashtra 421203</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <Mail className="h-5 w-5 text-orange-500 flex-shrink-0" />
                    <a href="mailto:info@techasiamechatronics.com" className="hover:text-orange-600 transition-colors">info@techasiamechatronics.com</a>
                  </div>
                  <div className="flex items-center gap-4">
                    <Phone className="h-5 w-5 text-orange-500 flex-shrink-0" />
                    <a href="tel:+917666308198" className="hover:text-orange-600 transition-colors">+91 7666308198</a>
                  </div>
                </div>
              </div>

              {/* Google Map Embed */}
              <div className="w-full h-80 rounded-lg overflow-hidden shadow-lg border">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.9067518068514!2d73.11199317466813!3d19.199274748092016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7bf878e333687%3A0xe888f9ff8893f96e!2stechAsia%20Mechatronics%20Private%20Limited!5e0!3m2!1sen!2sin!4v1750608668517!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="bg-slate-50 p-8 rounded-lg shadow-lg h-full">
              <h2 className="text-3xl font-bold text-zinc-800 mb-6">Get in Touch</h2>
              <form action="#" method="POST" className="space-y-6">
                <div>
                  <label htmlFor="name" className="sr-only">Name</label>
                  <input type="text" name="name" id="name" required className="w-full p-3 bg-white border border-slate-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition" placeholder="*Name" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="mobile" className="sr-only">Mobile No.</label>
                    <input type="tel" name="mobile" id="mobile" required className="w-full p-3 bg-white border border-slate-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition" placeholder="*Mobile No." />
                  </div>
                  <div>
                    <label htmlFor="email" className="sr-only">Email</label>
                    <input type="email" name="email" id="email" required className="w-full p-3 bg-white border border-slate-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition" placeholder="*Email" />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="sr-only">Message</label>
                  <textarea name="message" id="message" rows="8" required className="w-full p-3 bg-white border border-slate-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition" placeholder="Message"></textarea>
                </div>
                <div>
                  <button type="submit" className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3 font-semibold text-white bg-gradient-to-r from-amber-500 to-orange-600 rounded-full shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300">
                    Send Message
                    <Send className="w-5 h-5" />
                  </button>
                </div>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default ContactPage;