/*
 * Flyanytrip
 * Authors: Gaurav Thakur, Milan Pandavadara
 *
 * Visa assistance search form. Lets the user select a destination
 * country and visa type, then submit for expert help.
 * The country list is shown in a custom animated dropdown,
 * while visa type uses a native <select> element.
 */

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Globe2, ChevronDown } from 'lucide-react';

/**
 * Visa search form component.
 *
 * @param visaCountry      - Currently selected destination country
 * @param setVisaCountry   - Updates the selected country
 * @param visaDestinations - List of available visa destinations
 * @param visaType         - Currently selected visa type
 * @param setVisaType      - Updates the selected visa type
 * @param showVisaMenu     - Whether the country dropdown is open
 * @param setShowVisaMenu  - Opens/closes the country dropdown
 * @param handleSearch     - Submits the visa assistance request
 */

const VisaSearch = ({ 
  visaCountry, setVisaCountry, visaDestinations, 
  visaType, setVisaType,
  showVisaMenu, setShowVisaMenu, 
  handleSearch,
  setShowTourMenu, setShowFromMenu, setShowToMenu
}) => (
  <div className="grid grid-cols-[2fr_1.5fr_1fr] gap-4 items-end">
    <div className="relative">
      <label className="block text-[11px] font-extrabold uppercase tracking-wider text-brand-black/40 mb-2 ml-1">Country</label>
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="bg-white border border-black/10 p-4 rounded-xl font-semibold text-brand-black flex items-center gap-3 cursor-pointer transition-all hover:border-brand-red hover:shadow-lg focus-within:border-brand-red"
        onClick={() => {
          setShowVisaMenu(!showVisaMenu);
          setShowTourMenu(false);
          setShowFromMenu(false);
          setShowToMenu(false);
        }}
      >
        <Globe2 size={16} className="text-brand-red" /> {visaCountry || 'Select Country'}
      </motion.div>
      <AnimatePresence>
        {showVisaMenu && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-2xl border border-black/5 z-[100] overflow-hidden"
          >
            <div className="max-h-72 overflow-y-auto">
              {visaDestinations.map((dest, i) => (
                <motion.div
                  key={dest}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.03 }}
                  className="p-4 flex items-center gap-3 hover:bg-brand-red/[0.04] cursor-pointer transition-colors group"
                  onClick={() => {
                    setVisaCountry(dest);
                    setShowVisaMenu(false);
                  }}
                >
                  <Globe2 size={14} className="text-brand-black/20 group-hover:text-brand-red transition-colors" />
                  <span className="text-sm font-bold text-brand-black group-hover:text-brand-red transition-colors">{dest}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
    <div className="relative">
      <label className="block text-[11px] font-extrabold uppercase tracking-wider text-brand-black/40 mb-2 ml-1">Visa Type</label>
      <motion.select
        whileHover={{ scale: 1.02 }}
        className="w-full bg-white border border-black/10 p-4 rounded-xl font-semibold text-brand-black outline-none appearance-none cursor-pointer transition-all hover:border-brand-red hover:shadow-lg focus:border-brand-red"
        value={visaType}
        onChange={(e) => setVisaType(e.target.value)}
      >
        <option>Digital Arrival Card</option>
      </motion.select>
      <ChevronDown size={14} className="absolute right-4 bottom-[22px] text-brand-black/40 pointer-events-none" />
    </div>
    <motion.button 
      whileHover={{ scale: 1.05, backgroundColor: '#ce3131' }}
      whileTap={{ scale: 0.95 }}
      className="bg-brand-black text-white h-[58px] px-10 rounded-xl font-bold flex items-center gap-3 transition-all hover:shadow-lg" 
      onClick={handleSearch}
    >
      <Search size={22} /> Check Visa
    </motion.button>
  </div>
);

export default VisaSearch;
