/*
 * Flyanytrip
 * Authors: Gaurav Thakur, Milan Pandavadara
 *
 * Hero section displayed at the top of the home page.
 * Shows a full-width background image with a dark overlay,
 * an animated headline, and accepts children (the search card)
 * rendered directly on top of the background.
 */

import React from 'react';
import { motion } from 'framer-motion';

/**
 * Full-width hero banner with a background photo and animated text.
 * Any children passed in are rendered inside the hero background,
 * which is how the flight search card is placed on the image.
 *
 * @param children - Content rendered inside the hero (e.g. the search card)
 */
const Hero = ({ children }) => (
  <section
    className="relative flex flex-col items-center px-6 bg-cover bg-center pb-16 pt-10"
    style={{ backgroundImage: "linear-gradient(160deg, rgba(5,10,30,0.72) 0%, rgba(10,20,60,0.45) 50%, rgba(0,80,120,0.2) 100%), url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2000&auto=format&fit=crop')" }}
  >
    {/* Hero Text */}
    <div className="max-w-[1200px] w-full flex flex-col items-center mb-8">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="mb-4 bg-white/10 backdrop-blur-md px-5 py-1.5 rounded-full border border-white/20"
      >
        <span className="text-white/90 text-xs font-bold uppercase tracking-[0.25em]">✦ Your World Awaits ✦</span>
      </motion.div>
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="font-fun text-white text-center mb-4 drop-shadow-2xl leading-[1.15]"
        style={{ fontSize: 'clamp(40px, 5.5vw, 72px)' }}
      >
        Your Dream,{' '}
        <span className="text-brand-red italic drop-shadow-none">AnyTrip</span> Away.
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
        className="text-white/80 text-base font-medium text-center max-w-[560px] drop-shadow-lg tracking-wide leading-relaxed"
      >
        From weekend escapes to world tours — we handle every detail, so you just <span className="text-white font-semibold">show up and explore.</span>
      </motion.p>
    </div>

    {/* Search Card rendered inside hero background */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.8 }}
      className="w-full flex justify-center"
    >
      {children}
    </motion.div>
  </section>
);

export default Hero;
