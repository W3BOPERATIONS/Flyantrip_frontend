/*
 * Flyanytrip
 * Authors: Gaurav Thakur, Milan Pandavadara
 *
 * Train status search form. Accepts a train number or name from the user
 * and triggers a live status check when the button is clicked.
 */

import React from 'react';
import { motion } from 'framer-motion';
import { Train, Activity } from 'lucide-react';

/**
 * Simple train status form with a text input and submit button.
 *
 * @param trainNumber    - The current value of the train number input
 * @param setTrainNumber - Updates the train number as the user types
 * @param handleSearch   - Runs the status lookup when the button is clicked
 */

const TrainSearch = ({ trainNumber, setTrainNumber, handleSearch }) => (
  <div className="grid grid-cols-[3fr_1fr] gap-4 items-end">
    <div className="relative">
      <label className="block text-[11px] font-extrabold uppercase tracking-wider text-brand-black/40 mb-2 ml-1">Train Number/Name</label>
      <motion.div 
        whileHover={{ scale: 1.01 }}
        className="bg-white border border-black/10 p-4 rounded-xl font-semibold text-brand-black flex items-center gap-3 transition-all hover:border-brand-red hover:shadow-lg focus-within:border-brand-red focus-within:shadow-lg"
      >
        <Train size={16} className="text-brand-red" />
        <input
          type="text"
          placeholder="Enter Train Number"
          className="w-full outline-none bg-transparent"
          value={trainNumber}
          onChange={(e) => setTrainNumber(e.target.value)}
        />
      </motion.div>
    </div>
    <motion.button 
      whileHover={{ scale: 1.05, backgroundColor: '#ce3131' }}
      whileTap={{ scale: 0.95 }}
      className="bg-brand-black text-white h-[58px] px-10 rounded-xl font-bold flex items-center gap-3 transition-all hover:shadow-lg" 
      onClick={handleSearch}
    >
      <Activity size={22} /> Check Status
    </motion.button>
  </div>
);

export default TrainSearch;
