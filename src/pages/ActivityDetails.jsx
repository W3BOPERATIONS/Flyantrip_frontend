import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MapPin, X, ChevronLeft, ChevronRight, Star, Clock, Info,
  Heart, Share2, Facebook, Twitter, Link, Phone, ArrowLeft
} from 'lucide-react';
import { allActivities } from '../utils/mockData';

/**
 * ActivityDetails Page
 * Renders a full detailed view of an activity.
 * Based on the premium design for Flyanytrip.
 */
const ActivityDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activity, setActivity] = useState(null);
  const [activeImageIdx, setActiveImageIdx] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
    // Find the activity from mock data
    const foundActivity = allActivities.find(a => a.id === parseInt(id));
    if (foundActivity) {
      setActivity(foundActivity);
    }
  }, [id]);

  if (!activity) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-brand-white">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-brand-black mb-4">Activity not found</h2>
          <button
            onClick={() => navigate('/results')}
            className="text-brand-red font-bold hover:underline flex items-center gap-2 mx-auto"
          >
            <ArrowLeft size={20} /> Back to results
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f5f7fa] pb-24">
      {/* Immersive Header / Banner Area */}
      <div className="bg-brand-red text-white pt-24 pb-12 px-6 md:px-12 relative overflow-hidden">
        {/* Abstract Background pattern */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/5 to-transparent pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              {/* Breadcrumbs */}
              <div className="flex items-center gap-3 text-[13px] font-medium opacity-70 mb-6 uppercase tracking-widest">
                <span className="cursor-pointer hover:text-brand-red transition-colors" onClick={() => navigate('/')}>home</span>
                <span className="opacity-30">/</span>
                <span className="cursor-pointer hover:text-brand-red transition-colors" onClick={() => navigate('/results')}>activity</span>
                <span className="opacity-30">/</span>
                <span className="cursor-pointer hover:text-brand-red transition-colors" onClick={() => navigate('/results')}>{activity.country?.toLowerCase()}</span>
                <span className="opacity-30">/</span>
                <span className="text-white font-black italic">{activity.name?.toLowerCase()}</span>
              </div>

              <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-2 uppercase italic">{activity.name}</h1>
            </div>

            {/* Share Tools */}
            <div className="flex items-center gap-1 bg-white/5 rounded-full px-5 py-2 border border-white/5 backdrop-blur-sm">
              <span className="text-xs font-bold mr-2 opacity-80">Share to</span>
              <button className="p-1.5 hover:text-brand-black transition-colors"><Facebook size={18} fill="currentColor" /></button>
              <button className="p-1.5 hover:text-brand-black transition-colors"><Twitter size={18} fill="currentColor" /></button>
              <button className="p-1.5 hover:text-brand-black transition-colors"><Link size={18} /></button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto -mt-6 px-6 relative z-20">
        <div className="flex flex-col lg:flex-row gap-8">

          {/* Main Content (Left) */}
          <div className="flex-1 space-y-8">

            {/* Gallery Section */}
            <div className="relative h-[400px] md:h-[550px] bg-black rounded-3xl overflow-hidden shadow-2xl group">
              <div className="flex h-full transition-transform duration-700 ease-out" style={{ transform: `translateX(-${activeImageIdx * 100}%)` }}>
                {(activity.gallery || [activity.img]).map((img, idx) => (
                  <div key={idx} className="w-full h-full shrink-0 flex items-center justify-center bg-[#f8f9fa]">
                    <img
                      src={img}
                      alt={`${activity.name} ${idx + 1}`}
                      className="w-full h-full object-cover"
                      onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/1200x800/f1f5f9/64748b?text=Image+Unavailable'; }}
                    />
                  </div>
                ))}
              </div>

              {/* Navigation Overlay */}
              <div className="absolute inset-0 flex items-center justify-between px-6 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
                <button
                  onClick={(e) => { e.stopPropagation(); setActiveImageIdx(prev => (prev === 0 ? (activity.gallery?.length || 1) - 1 : prev - 1)); }}
                  className="w-12 h-12 bg-black/40 backdrop-blur-md text-white rounded-full flex items-center justify-center hover:bg-black/60 transition-all pointer-events-auto shadow-xl"
                >
                  <ChevronLeft size={28} />
                </button>
                <button
                  onClick={(e) => { e.stopPropagation(); setActiveImageIdx(prev => (prev === ((activity.gallery?.length || 1) - 1) ? 0 : prev + 1)); }}
                  className="w-12 h-12 bg-black/40 backdrop-blur-md text-white rounded-full flex items-center justify-center hover:bg-black/60 transition-all pointer-events-auto shadow-xl"
                >
                  <ChevronRight size={28} />
                </button>
              </div>

              {/* Indicators */}
              <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-20">
                {(activity.gallery || [activity.img]).map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIdx(idx)}
                    className={`h-2.5 rounded-full transition-all duration-300 ${idx === activeImageIdx ? 'bg-white w-12' : 'bg-white/40 w-2.5 hover:bg-white/60'}`}
                  />
                ))}
              </div>

              {/* See More Button */}
              <button className="absolute bottom-10 right-10 bg-black/60 backdrop-blur-md text-white text-xs font-black uppercase tracking-widest px-6 py-3 rounded-xl border border-white/20 hover:bg-black/80 transition-all shadow-2xl">
                See more <ChevronRight size={14} className="inline ml-1" />
              </button>
            </div>

            {/* Info Section */}
            <div className="bg-white rounded-[2.5rem] shadow-xl border border-black/5 overflow-hidden">
              <div className="p-8 md:p-12">
                <div className="flex justify-between items-start mb-10">
                  <div>
                    <div className="flex items-center gap-4 mb-4">
                      <h2 className="text-3xl md:text-5xl font-black text-brand-black tracking-tighter italic">{activity.name}</h2>
                      <button className="p-3 bg-brand-red/5 text-brand-red rounded-full hover:bg-brand-red hover:text-white transition-all shadow-sm">
                        <Heart size={24} />
                      </button>
                    </div>

                    {/* Multi-source Ratings */}
                    <div className="flex flex-wrap items-center gap-4">
                      {activity.detailedRatings ? activity.detailedRatings.map((r, i) => (
                        <div key={i} className="flex items-center bg-[#f8f9fa] border border-black/5 rounded-xl px-4 py-2.5 shadow-sm hover:shadow-md transition-shadow">
                          {r.type === 'points' && (
                            <div className="flex items-center gap-2">
                              {r.icon === 'info' ? <Info size={16} className="text-brand-red" /> : <span className="text-brand-red font-black text-lg italic">⚡{r.score}</span>}
                              {r.count && <span className="text-[13px] font-bold text-brand-black/40 uppercase tracking-wider">{r.count}</span>}
                              {r.score.includes('/') && <span className="bg-brand-black text-white text-xs font-black px-2 py-0.5 rounded ml-2">{r.score}</span>}
                            </div>
                          )}
                          {r.type === 'tripadvisor' && (
                            <div className="flex items-center gap-3">
                              <div className="flex gap-1">
                                {[1, 2, 3, 4, 5].map(d => (
                                  <div key={d} className={`w-3.5 h-3.5 rounded-full ${d <= parseInt(r.score) ? 'bg-[#34e0a1]' : 'bg-[#34e0a1]/20'}`} />
                                ))}
                              </div>
                              <span className="text-xs font-bold text-brand-red hover:underline cursor-pointer uppercase tracking-widest">based on {r.count}</span>
                            </div>
                          )}
                        </div>
                      )) : (
                        <div className="flex items-center gap-2 bg-yellow-400 text-white px-5 py-2 rounded-xl shadow-lg shadow-yellow-400/20">
                          <Star size={18} fill="currentColor" />
                          <span className="font-black text-base">{activity.rating}</span>
                        </div>
                      )}

                      {/* Tag */}
                      <span className="bg-brand-red/5 text-brand-red text-[12px] font-black px-5 py-2.5 rounded-xl border border-brand-red/10 uppercase tracking-[0.2em]">
                        {activity.tag}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Details Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-10 border-t border-black/5">
                  <div className="space-y-8">
                    {/* Hours */}
                    <div className="flex items-start gap-5">
                      <div className="w-14 h-14 bg-brand-red/5 text-brand-red rounded-2xl flex items-center justify-center shrink-0 shadow-inner">
                        <Clock size={28} />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                          <span className="text-[12px] font-black text-brand-red uppercase tracking-[0.15em]">Status: Open Now</span>
                        </div>
                        <p className="text-lg font-black text-brand-black">{activity.hours || '09:30–17:00'}</p>
                        <button className="text-[11px] font-bold text-brand-red flex items-center gap-1 mt-1 hover:underline uppercase tracking-widest">See all timings <ChevronRight size={12} /></button>
                      </div>
                    </div>

                    {/* Sightseeing Time */}
                    <div className="flex items-start gap-5">
                      <div className="w-14 h-14 bg-brand-red/5 text-brand-red rounded-2xl flex items-center justify-center shrink-0 shadow-inner">
                        <Info size={28} />
                      </div>
                      <div>
                        <p className="text-[11px] font-black text-brand-black/40 uppercase tracking-[0.2em] mb-1">Recommended duration</p>
                        <p className="text-lg font-black text-brand-black">{activity.sightseeingTime || '1–3 hours'}</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-8">
                    {/* Address */}
                    <div className="flex items-start gap-5">
                      <div className="w-14 h-14 bg-green-50 text-green-600 rounded-2xl flex items-center justify-center shrink-0 shadow-inner">
                        <MapPin size={28} />
                      </div>
                      <div className="flex-1">
                        <p className="text-[11px] font-black text-brand-black/40 uppercase tracking-[0.2em] mb-1">Address</p>
                        <p className="text-base font-bold text-brand-black leading-relaxed">{activity.address || 'Address information unavailable'}</p>
                        <button className="text-[12px] font-black text-brand-red uppercase tracking-widest mt-2 hover:underline border-b-2 border-brand-red/10">View on Maps</button>
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="flex items-start gap-5">
                      <div className="w-14 h-14 bg-orange-50 text-orange-600 rounded-2xl flex items-center justify-center shrink-0 shadow-inner">
                        <Phone size={28} />
                      </div>
                      <div>
                        <p className="text-[11px] font-black text-brand-black/40 uppercase tracking-[0.2em] mb-1">Contact Inquiry</p>
                        <p className="text-lg font-black text-brand-black">{activity.phone || 'N/A'}</p>
                        <p className="text-[11px] font-medium text-brand-black/40 mt-1 italic leading-none">English & Hindi support available</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* About Section */}
                <div className="mt-10 pt-10 border-t border-black/5">
                  <h3 className="text-2xl font-black text-brand-black mb-6 uppercase tracking-tight italic">Experience Overview</h3>
                  <div className="space-y-6">
                    <p className="text-brand-black/70 font-medium leading-[1.8] text-lg max-w-4xl italic">
                      {activity.longDesc || activity.desc}
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {['Professional Guide Included', 'Skip-the-line Tickets', 'Inclusive of all taxes', 'Luxury Transportation Option'].map((item, i) => (
                        <div key={i} className="flex items-center gap-3 bg-brand-white p-4 rounded-xl border border-black/[0.03]">
                          <div className="w-6 h-6 bg-brand-red text-white rounded-full flex items-center justify-center shrink-0">
                            <span className="text-[10px]">✓</span>
                          </div>
                          <span className="text-sm font-bold text-brand-black/80">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar Booking Card (Right) */}
          <div className="w-full lg:w-[400px] shrink-0">
            <div className="sticky top-32 space-y-6">
              <div className="bg-white rounded-[2rem] shadow-2xl border border-black/5 overflow-hidden">
                <div className="bg-brand-black px-8 py-10 text-white">
                  <p className="text-[11px] font-black text-white/40 uppercase tracking-[0.3em] mb-2">Package Starts From</p>
                  <div className="flex items-end gap-2">
                    <span className="text-5xl font-black italic">₹{activity.price}</span>
                    <span className="text-sm font-bold text-white/40 mb-2 uppercase tracking-widest">/ Per Adult</span>
                  </div>
                </div>

                <div className="p-8 space-y-6">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center text-sm">
                      <span className="font-bold text-brand-black/40 uppercase tracking-widest">Base Fare</span>
                      <span className="font-black text-brand-black">₹{activity.price}</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="font-bold text-brand-black/40 uppercase tracking-widest">Convenience Fee</span>
                      <span className="font-black text-green-600 italic">FREE</span>
                    </div>
                    <div className="h-[1px] bg-black/5" />
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-black text-brand-black uppercase italic">Total</span>
                      <span className="text-2xl font-black text-brand-black italic">₹{activity.price}</span>
                    </div>
                  </div>

                  <button
                    className="w-full h-16 bg-brand-red text-white rounded-2xl font-black text-lg uppercase tracking-widest shadow-xl shadow-brand-red/30 hover:bg-brand-red/90 active:scale-95 transition-all flex items-center justify-center gap-3"
                    onClick={() => alert(`Booking flow for ${activity.name} starting...`)}
                  >
                    Confirm Booking
                  </button>

                  <div className="flex items-center justify-center gap-4 text-[11px] font-black text-brand-black/30 uppercase tracking-[0.2em]">
                    <span>🔒 Secured Payment</span>
                    <div className="w-1 h-1 rounded-full bg-brand-black/10" />
                    <span>⚡ Instant Voucher</span>
                  </div>
                </div>
              </div>

              {/* Support Card */}
              <div className="bg-brand-red/5 border border-brand-red/10 rounded-2xl p-6 flex items-center gap-5">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-brand-red">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-[10px] font-black text-brand-red/50 uppercase tracking-widest leading-none mb-1">Need help?</p>
                  <p className="text-sm font-black text-brand-black leading-none italic">Call our expert guide</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ActivityDetails;
