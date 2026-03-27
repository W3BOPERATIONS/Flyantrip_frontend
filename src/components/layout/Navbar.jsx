import React from 'react';
import { motion } from 'framer-motion';
import { CreditCard, UserCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = ({ activeTab, setActiveTab }) => (
  <nav className="sticky top-0 z-[1000] h-[64px] flex items-stretch bg-white/80 backdrop-blur-xl border-b border-black/5 shadow-sm">
    <div className="max-w-[1200px] w-full mx-auto px-6 flex justify-between items-stretch h-full">
      <div className="flex items-stretch gap-8">
        <div className="flex items-center">
          <Link to="/">
            <img src="/logos/logo.png" alt="FlyAnyTrip" className="h-10 w-auto cursor-pointer" />
          </Link>
        </div>
        <div className="flex gap-8">
          {['flights', 'tours', 'visa', 'activity', 'train', 'pnr'].map((tab) => (
            <a
              key={tab}
              href="#"
              className={`relative h-full flex items-center text-sm font-semibold transition-all duration-300 ${activeTab === tab ? 'text-brand-red opacity-100' : 'text-brand-black opacity-60 hover:opacity-100 hover:text-brand-red'}`}
              onClick={(e) => { e.preventDefault(); setActiveTab(tab); }}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1).replace('pnr', 'PNR').replace('train', 'Train Status')}
              {activeTab === tab && (
                <motion.div
                  layoutId="nav-underline"
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-brand-red"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </a>
          ))}
        </div>
      </div>
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

export default Navbar;
