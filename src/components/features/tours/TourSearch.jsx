/*
 * Flyanytrip
 * Authors: Gaurav Thakur, Milan Pandavadara
 *
 * Tour destination search component.
 * Features a text input with a dropdown panel that shows:
 * - Recent search history (as removable pill tags)
 * - A photo grid of recommended destinations
 * Closes automatically when the user clicks outside the dropdown.
 */

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, MapPin, X, Clock } from 'lucide-react';

// Maps destination names to their preview images shown in the dropdown grid
const DEST_IMAGES = {
  Thailand:  '/assets/destinations/thailand.png',
  Vietnam:   '/assets/destinations/vietnam.png',
  Dubai:     '/assets/activities/dubai.png',
  Singapore: '/assets/destinations/singapore.png',
  India:     '/assets/destinations/india.png',
  Oman:      '/assets/destinations/oman.png',
  Bali:      '/assets/destinations/bali.png',
};

/**
 * Tour destination search component.
 *
 * @param tourDest            - The currently selected destination name
 * @param setTourDest         - Updates the selected destination
 * @param tourDestinations    - Full list of available tour destinations
 * @param showTourMenu        - Whether the destination dropdown is open
 * @param setShowTourMenu     - Opens/closes the dropdown
 * @param handleSearch        - Runs the search when the button is clicked
 */
const TourSearch = ({
  tourDest, setTourDest, tourDestinations,
  showTourMenu, setShowTourMenu,
  handleSearch,
  setShowFromMenu, setShowToMenu,
  setShowVisaMenu, setShowActivityMenu,
}) => {
  const [query, setQuery] = useState(tourDest || '');
  const [history, setHistory] = useState(['Thailand', 'Bali']);
  const inputRef = useRef(null);
  const panelRef = useRef(null);

  const filtered = query.trim()
    ? tourDestinations.filter(d => d.toLowerCase().includes(query.toLowerCase()))
    : tourDestinations;

  // Close on outside click
  useEffect(() => {
    const handler = (e) => {
      if (
        panelRef.current && !panelRef.current.contains(e.target) &&
        inputRef.current && !inputRef.current.contains(e.target)
      ) {
        setShowTourMenu(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [setShowTourMenu]);

  /**
   * Selects a destination and updates both the state and the input text.
   * Also adds the choice to the search history (up to 5 recent items).
   *
   * @param dest - The destination name the user clicked on
   */
  const selectDest = (dest) => {
    setTourDest(dest);
    setQuery(dest);
    setShowTourMenu(false);
    if (!history.includes(dest)) setHistory(prev => [dest, ...prev].slice(0, 5));
  };

  /**
   * Removes a specific destination from the recent search history.
   * Stops event propagation so the dropdown doesn't accidentally select it.
   *
   * @param dest - The destination to remove from history
   * @param e    - The click event (used to stop bubbling)
   */
  const removeHistory = (dest, e) => {
    e.stopPropagation();
    setHistory(prev => prev.filter(h => h !== dest));
  };

  /**
   * Opens the tour destination dropdown and closes all other open dropdowns.
   * Guards with && checks because not all menus are always provided as props.
   */
  const openMenu = () => {
    setShowTourMenu(true);
    setShowFromMenu && setShowFromMenu(false);
    setShowToMenu && setShowToMenu(false);
    setShowVisaMenu && setShowVisaMenu(false);
    setShowActivityMenu && setShowActivityMenu(false);
  };

  return (
    <div className="flex gap-4 items-end">
      {/* Search Input */}
      <div className="relative flex-1">
        <motion.div
          ref={inputRef}
          whileHover={{ scale: 1.01 }}
          className="flex items-center gap-3 bg-white border-2 rounded-xl px-4 py-3 transition-all cursor-text focus-within:shadow-lg"
          style={{ borderColor: showTourMenu ? '#ce3131' : 'rgba(0,0,0,0.1)' }}
        >
          <Search size={18} className="text-brand-red shrink-0" />
          <input
            type="text"
            value={query}
            onChange={e => { setQuery(e.target.value); openMenu(); }}
            onFocus={openMenu}
            placeholder="Search tour destinations & packages"
            className="w-full border-none outline-none text-[15px] font-semibold bg-transparent text-brand-black placeholder:text-brand-black/30"
          />
          {query && (
            <motion.button 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setQuery('')}
            >
              <X size={16} className="text-brand-black/30" />
            </motion.button>
          )}
        </motion.div>

        {/* Dropdown Panel */}
        <AnimatePresence>
          {showTourMenu && (
            <motion.div
              ref={panelRef}
              initial={{ opacity: 0, y: 8, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 8, scale: 0.97 }}
              transition={{ duration: 0.18 }}
              style={{
                position: 'absolute',
                top: 'calc(100% + 8px)',
                left: 0,
                right: 0,
                background: '#fff',
                borderRadius: '16px',
                boxShadow: '0 20px 60px rgba(0,0,0,0.14)',
                border: '1px solid rgba(0,0,0,0.06)',
                zIndex: 200,
                padding: '20px',
                minWidth: '520px',
              }}
            >
              {/* Search History */}
              {history.length > 0 && !query.trim() && (
                <div style={{ marginBottom: '20px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '10px' }}>
                    <Clock size={13} style={{ color: '#888' }} />
                    <span style={{ fontSize: '12px', fontWeight: 700, color: '#888', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                      Search history
                    </span>
                  </div>
                  <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                    {history.map(h => (
                      <div
                        key={h}
                        onClick={() => selectDest(h)}
                        style={{
                          display: 'inline-flex', alignItems: 'center', gap: '6px',
                          padding: '5px 12px', borderRadius: '20px',
                          background: '#f4f4f6', border: '1px solid #e8e8ec',
                          fontSize: '13px', fontWeight: 600, color: '#333',
                          cursor: 'pointer', transition: 'all 0.15s',
                        }}
                        onMouseEnter={e => e.currentTarget.style.borderColor = '#e63946'}
                        onMouseLeave={e => e.currentTarget.style.borderColor = '#e8e8ec'}
                      >
                        <MapPin size={12} style={{ color: '#e63946' }} />
                        {h}
                        <button
                          onClick={(e) => removeHistory(h, e)}
                          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, display: 'flex', alignItems: 'center' }}
                        >
                          <X size={11} style={{ color: '#aaa' }} />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Recommended Destinations Grid */}
              <div>
                <span style={{ fontSize: '12px', fontWeight: 700, color: '#888', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                  {query.trim() ? 'Results' : 'Recommended destinations'}
                </span>
                <div className="grid grid-cols-4 gap-3 mt-3">
                  {filtered.map((dest, i) => (
                    <motion.div
                      key={dest}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.05 }}
                      whileHover={{ scale: 1.04, y: -4 }}
                      onClick={() => selectDest(dest)}
                      className="relative rounded-xl overflow-hidden aspect-square cursor-pointer shadow-md hover:shadow-xl transition-all"
                    >
                      <img
                        src={DEST_IMAGES[dest] || `https://source.unsplash.com/400x300/?${dest},travel`}
                        alt={dest}
                        className="w-full h-full object-cover"
                        onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/600x400/f8f9fa/a8a29e?text=' + encodeURIComponent(dest); }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                      <span className="absolute bottom-3 left-3 text-white text-xs font-bold drop-shadow-md">
                        {dest}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Search Button */}
      <motion.button
        whileHover={{ scale: 1.05, backgroundColor: '#ce3131' }}
        whileTap={{ scale: 0.95 }}
        onClick={handleSearch}
        className="flex items-center gap-3 bg-brand-black text-white h-[54px] px-8 rounded-xl text-sm font-bold transition-all hover:shadow-lg whitespace-nowrap"
      >
        <Search size={18} /> Find Tours
      </motion.button>
    </div>
  );
};

export default TourSearch;
