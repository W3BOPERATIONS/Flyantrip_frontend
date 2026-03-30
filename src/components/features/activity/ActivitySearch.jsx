import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, MapPin, X, Clock } from 'lucide-react';

const DEST_IMAGES = {
  Thailand:    'https://images.unsplash.com/photo-1528181304800-259b08bb73d5?q=80&w=600&auto=format&fit=crop',
  Vietnam:     'https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=600&auto=format&fit=crop',
  Dubai:       'https://images.unsplash.com/photo-1582672060674-bc2bd808a8b5?q=80&w=600&auto=format&fit=crop',
  Singapore:   'https://images.unsplash.com/photo-1525625293386-3fb0ad7c1fe6?q=80&w=600&auto=format&fit=crop',
  Vadodara:    'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?q=80&w=600&auto=format&fit=crop',
  Oman:        'https://images.unsplash.com/photo-1552554650-dc20ce13b632?q=80&w=600&auto=format&fit=crop',
  Bali:        'https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=600&auto=format&fit=crop',
};

const ActivitySearch = ({
  activityCity, setActivityCity, activityDestinations,
  showActivityMenu, setShowActivityMenu,
  handleSearch,
  setShowVisaMenu, setShowTourMenu, setShowFromMenu, setShowToMenu
}) => {
  const [query, setQuery] = useState(activityCity || '');
  const [history, setHistory] = useState(['Thailand', 'Bali']);
  const inputRef = useRef(null);
  const panelRef = useRef(null);

  const filtered = query.trim()
    ? activityDestinations.filter(d => d.toLowerCase().includes(query.toLowerCase()))
    : activityDestinations;

  // Close on outside click
  useEffect(() => {
    const handler = (e) => {
      if (
        panelRef.current && !panelRef.current.contains(e.target) &&
        inputRef.current && !inputRef.current.contains(e.target)
      ) {
        setShowActivityMenu(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [setShowActivityMenu]);

  const selectDest = (dest) => {
    setActivityCity(dest);
    setQuery(dest);
    setShowActivityMenu(false);
    if (!history.includes(dest)) setHistory(prev => [dest, ...prev].slice(0, 5));
  };

  const removeHistory = (dest, e) => {
    e.stopPropagation();
    setHistory(prev => prev.filter(h => h !== dest));
  };

  const openMenu = () => {
    setShowActivityMenu(true);
    setShowVisaMenu(false);
    setShowTourMenu(false);
    setShowFromMenu(false);
    setShowToMenu(false);
  };

  return (
    <div className="flex gap-4 items-end">
      {/* Search Input */}
      <div className="relative flex-1">
        <div
          ref={inputRef}
          className="flex items-center gap-3 bg-white border-2 rounded-xl px-4 py-3 transition-all"
          style={{ borderColor: showActivityMenu ? '#e63946' : 'rgba(0,0,0,0.1)' }}
        >
          <Search size={18} style={{ color: '#e63946', flexShrink: 0 }} />
          <input
            type="text"
            value={query}
            onChange={e => { setQuery(e.target.value); openMenu(); }}
            onFocus={openMenu}
            placeholder="Search activities or local attractions & tours"
            style={{
              width: '100%',
              border: 'none',
              outline: 'none',
              fontSize: '15px',
              fontWeight: 500,
              background: 'transparent',
              color: '#1a1a2e',
            }}
          />
          {query && (
            <button onClick={() => { setQuery(''); inputRef.current?.querySelector('input')?.focus(); }}>
              <X size={16} style={{ color: '#aaa' }} />
            </button>
          )}
        </div>

        {/* Dropdown Panel */}
        <AnimatePresence>
          {showActivityMenu && (
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
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(4, 1fr)',
                  gap: '10px',
                  marginTop: '12px',
                }}>
                  {filtered.map(dest => (
                    <div
                      key={dest}
                      onClick={() => selectDest(dest)}
                      style={{
                        position: 'relative', borderRadius: '12px', overflow: 'hidden',
                        aspectRatio: '4/3', cursor: 'pointer',
                        boxShadow: '0 2px 10px rgba(0,0,0,0.12)',
                        transition: 'transform 0.2s, box-shadow 0.2s',
                      }}
                      onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.04)'; e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,0,0,0.22)'; }}
                      onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = '0 2px 10px rgba(0,0,0,0.12)'; }}
                    >
                      <img
                        src={DEST_IMAGES[dest]}
                        alt={dest}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                      <div style={{
                        position: 'absolute', inset: 0,
                        background: 'linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 50%)',
                      }} />
                      <span style={{
                        position: 'absolute', bottom: '8px', left: '10px',
                        color: '#fff', fontSize: '13px', fontWeight: 700,
                        textShadow: '0 1px 4px rgba(0,0,0,0.5)',
                      }}>
                        {dest}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Search Button */}
      <button
        onClick={handleSearch}
        style={{
          display: 'flex', alignItems: 'center', gap: '10px',
          background: '#1a1a2e', color: '#fff',
          height: '54px', padding: '0 28px',
          borderRadius: '12px', border: 'none',
          fontSize: '15px', fontWeight: 700, cursor: 'pointer',
          transition: 'background 0.2s, transform 0.1s',
          whiteSpace: 'nowrap',
        }}
        onMouseEnter={e => e.currentTarget.style.background = '#e63946'}
        onMouseLeave={e => e.currentTarget.style.background = '#1a1a2e'}
        onMouseDown={e => e.currentTarget.style.transform = 'scale(0.96)'}
        onMouseUp={e => e.currentTarget.style.transform = 'scale(1)'}
      >
        <Search size={18} /> Find Activities
      </button>
    </div>
  );
};

export default ActivitySearch;
