import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CreditCard, UserCircle2 } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const TABS = ['flights', 'tours', 'visa', 'activity', 'train', 'pnr'];

const tabLabel = (tab) =>
  tab === 'pnr' ? 'Pnr' : tab.charAt(0).toUpperCase() + tab.slice(1);

const Navbar = ({ activeTab, setActiveTab }) => {
  // true  → tabs are visible in navbar
  // false → tabs are hidden (search card tabs are visible on screen)
  const [showNavTabs, setShowNavTabs] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    // On results page always show nav tabs
    if (!isHome) {
      setShowNavTabs(true);
      return;
    }

    // On home page, watch the search-card tabs sentinel
    const sentinel = document.getElementById('search-tabs');
    if (!sentinel) {
      setShowNavTabs(false);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        // When sentinel is NOT intersecting → it has scrolled out of view → show nav tabs
        setShowNavTabs(!entry.isIntersecting);
      },
      {
        root: null,
        // Fire as soon as even 1px of the element is hidden
        threshold: 0,
        // Account for the 64px sticky navbar itself
        rootMargin: '-64px 0px 0px 0px',
      }
    );

    observer.observe(sentinel);
    return () => observer.disconnect();
  }, [isHome, location.pathname]);

  return (
    <nav className="sticky top-0 z-[1000] h-[64px] flex items-stretch bg-white/80 backdrop-blur-xl border-b border-black/5 shadow-sm">
      <div className="max-w-[1200px] w-full mx-auto px-6 flex justify-between items-stretch h-full">
        <div className="flex items-stretch gap-8">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/">
              <img src="/logos/logo.png" alt="FlyAnyTrip" className="h-10 w-auto cursor-pointer" />
            </Link>
          </div>

          {/* Nav Tabs — animated in/out */}
          <AnimatePresence>
            {showNavTabs && (
              <motion.div
                className="flex gap-8"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
              >
                {TABS.map((tab) => (
                  <a
                    key={tab}
                    href="#"
                    className={`relative h-full flex items-center text-sm font-semibold transition-all duration-300 ${
                      activeTab === tab
                        ? 'text-brand-red opacity-100'
                        : 'text-brand-black opacity-60 hover:opacity-100 hover:text-brand-red'
                    }`}
                    onClick={(e) => { e.preventDefault(); setActiveTab(tab); }}
                  >
                    {tabLabel(tab)}
                    {activeTab === tab && (
                      <motion.div
                        layoutId="nav-underline"
                        className="absolute bottom-0 left-0 right-0 h-[2px] bg-brand-red"
                        transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                  </a>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Right side actions */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 text-sm font-semibold cursor-pointer text-brand-black opacity-70 hover:opacity-100">
            <CreditCard size={18} /> My Bookings
          </div>
          <div className="flex items-center gap-2 px-4 py-2 text-sm font-semibold bg-black/5 rounded-full cursor-pointer text-brand-black hover:bg-black/10 transition-colors">
            <UserCircle2 size={24} /> Account
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
