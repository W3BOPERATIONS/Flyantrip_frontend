import React from 'react';
import { Globe2 } from 'lucide-react';

const Footer = () => (
  <footer className="bg-brand-black pt-12 pb-8">
    <div className="max-w-[1200px] mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_1fr] gap-x-12 gap-y-10 mb-12 border-b border-white/5 pb-12">
        <div className="flex flex-col gap-6 items-start">
          <img src="logos/logo.png" alt="FlyAnyTrip" className="h-8 w-auto object-contain max-w-[160px]" />
          <p className="text-white/40 text-sm max-w-xs leading-relaxed">Elevating global travel through professional precision and uncompromising luxury.</p>
          <div className="flex gap-3">
            <div className="w-8 h-8 bg-white/5 rounded-full flex items-center justify-center text-white/40 hover:bg-brand-red/20 hover:text-brand-red transition-all cursor-pointer">
              <Globe2 size={16} />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-1">Company</h4>
          <a href="#" className="text-white/30 text-sm hover:text-white transition-colors">About Us</a>
          <a href="#" className="text-white/30 text-sm hover:text-white transition-colors">Careers</a>
          <a href="#" className="text-white/30 text-sm hover:text-white transition-colors">Press</a>
          <a href="#" className="text-white/30 text-sm hover:text-white transition-colors">Trust & Safety</a>
        </div>
        <div className="flex flex-col gap-3">
          <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-1">Services</h4>
          <a href="#" className="text-white/30 text-sm hover:text-white transition-colors">Flight Booking</a>
          <a href="#" className="text-white/30 text-sm hover:text-white transition-colors">Curated Tours</a>
          <a href="#" className="text-white/30 text-sm hover:text-white transition-colors">Visa Services</a>
          <a href="#" className="text-white/30 text-sm hover:text-white transition-colors">Corporate Travel</a>
        </div>
        <div className="flex flex-col gap-3">
          <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-1">Support</h4>
          <a href="#" className="text-white/30 text-sm hover:text-white transition-colors">Help Center</a>
          <a href="#" className="text-white/30 text-sm hover:text-white transition-colors">Terms of Service</a>
          <a href="#" className="text-white/30 text-sm hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="text-white/30 text-sm hover:text-white transition-colors">Cookie Policy</a>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-white/20 text-xs font-bold uppercase tracking-wider">
        <p>&copy; 2026 FlyAnyTrip. All rights reserved.</p>
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-2 cursor-pointer hover:text-white transition-colors"><Globe2 size={14} /> English (US)</span>
          <span className="flex items-center gap-2 cursor-pointer hover:text-white transition-colors">₹ INR</span>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
