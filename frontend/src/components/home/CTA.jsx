import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
// UPDATED: Imported a new icon for WhatsApp
import { MessageCircle, Download } from 'lucide-react';

const CTA = () => {
  return (
    <section className="bg-white text-zinc-800">
      <div className="container mx-auto px-6 py-20 text-center">
        <motion.h2 
          className="text-4xl sm:text-5xl font-bold"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Ready to Transform
        </motion.h2>

        <motion.p 
          className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Let's discuss how our innovative automation solutions can revolutionize your operations and drive your business forward.
        </motion.p>

        <motion.div 
          className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-6"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {/* --- UPDATED: This is now a motion.a tag with the WhatsApp link --- */}
          <motion.a
            href="https://api.whatsapp.com/send/?phone=917666308198&text&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ 
              scale: 1.05, 
              y: -3, 
              boxShadow: "0 15px 30px -5px rgba(249, 115, 22, 0.4)",
              filter: "brightness(1.1)"
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="flex items-center justify-center gap-2 px-8 py-3 font-semibold text-white bg-gradient-to-r from-amber-500 to-orange-600 rounded-full shadow-lg"
          >
            Contact on WhatsApp
            <MessageCircle className="w-5 h-5" />
          </motion.a>

          {/* Secondary Button */}
          <motion.button
            whileHover={{ 
              scale: 1.05, 
              y: -3, 
              backgroundColor: "#334155",
              color: "#ffffff",
              borderColor: "#334155"
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="flex items-center justify-center gap-2 px-8 py-3 font-semibold text-slate-700 bg-transparent border-2 border-slate-400 rounded-full"
          >
            <Download className="w-5 h-5" />
            Download Brochure
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;