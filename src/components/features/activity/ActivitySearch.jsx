import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, MapPin, Globe2 } from 'lucide-react';
import DatePicker from 'react-datepicker';

const ActivitySearch = ({ 
  activityCity, setActivityCity, activityDestinations, 
  showActivityMenu, setShowActivityMenu, 
  departureDate, setDepartureDate, 
  handleSearch,
  setShowVisaMenu, setShowTourMenu, setShowFromMenu, setShowToMenu
}) => (
  <div className="grid grid-cols-[2fr_1fr_1fr] gap-4 items-end">
    <div className="relative">
      <label className="block text-[11px] font-extrabold uppercase tracking-wider text-brand-black/40 mb-2 ml-1">City/Country</label>
      <div
        className="bg-white border border-black/10 p-4 rounded-xl font-semibold text-brand-black flex items-center gap-3 cursor-pointer transition-all hover:border-brand-red hover:shadow-md"
        onClick={() => {
          setShowActivityMenu(!showActivityMenu);
          setShowVisaMenu(false);
          setShowTourMenu(false);
          setShowFromMenu(false);
          setShowToMenu(false);
        }}
      >
        <MapPin size={16} className="text-brand-red" /> {activityCity || 'Select City/Country'}
      </div>
      <AnimatePresence>
        {showActivityMenu && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-2xl border border-black/5 z-[100] overflow-hidden"
          >
            <div className="max-h-72 overflow-y-auto">
              {activityDestinations.map(dest => (
                <div
                  key={dest}
                  className="p-4 flex items-center gap-3 hover:bg-brand-red/[0.04] cursor-pointer transition-colors group"
                  onClick={() => {
                    setActivityCity(dest);
                    setShowActivityMenu(false);
                  }}
                >
                  <Globe2 size={14} className="text-brand-black/20 group-hover:text-brand-red transition-colors" />
                  <span className="text-sm font-bold text-brand-black group-hover:text-brand-red transition-colors">{dest}</span>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
    <div className="relative">
      <label className="block text-[11px] font-extrabold uppercase tracking-wider text-brand-black/40 mb-2 ml-1">Date</label>
      <div className="bg-white border border-black/10 p-4 rounded-xl font-semibold text-brand-black flex items-center gap-3 transition-all hover:border-brand-red hover:shadow-md">
        <DatePicker
          selected={departureDate}
          onChange={(date) => setDepartureDate(date)}
          className="w-full outline-none bg-transparent cursor-pointer"
          dateFormat="dd MMM, yyyy"
        />
      </div>
    </div>
    <button className="bg-brand-black text-white h-[58px] px-10 rounded-xl font-bold flex items-center gap-3 transition-all active:scale-95 hover:bg-brand-red hover:shadow-lg" onClick={handleSearch}>
      <Search size={22} /> Find Activities
    </button>
  </div>
);

export default ActivitySearch;
