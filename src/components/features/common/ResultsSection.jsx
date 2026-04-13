/*
 * Flyanytrip
 * Authors: Gaurav Thakur, Milan Pandavadara
 *
 * Renders the list of search result cards on the results page.
 * Handles four different card layouts depending on the result type:
 * - 'flight'       → Flight card with airline, times, price
 * - 'tour'         → Tour package card with image and rating
 * - 'activity'     → Activity card with image, city, and price
 * - 'status/info'  → Simple status card (used for train, PNR, visa)
 */

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Plane, Compass, Globe2, MapPin, ShieldCheck, ArrowRightLeft, Search } from 'lucide-react';

/**
 * Displays all search results as an animated, scrollable list.
 * Each result is rendered with a different card layout based on its type.
 *
 * @param results   - Array of result objects returned from the search
 * @param activeTab - The current search tab (e.g. 'flights', 'tours')
 */
const ResultsSection = ({ results, activeTab }) => {
  const navigate = useNavigate();
  return (
    <AnimatePresence>
      {results.length > 0 && (
        <motion.section id="search-results-section" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-black/[0.02]">
          <div className="max-w-[1200px] mx-auto py-16 px-6">
            <div className="flex justify-between items-end mb-10 border-b border-black/5 pb-6">
              <div>
                <h2 className="text-3xl font-extrabold text-brand-black mb-2">{
                  { flights: 'Flights', tours: 'Tours', visa: 'Visa', activity: 'Activity', train: 'Train Status', pnr: 'PNR Status' }[activeTab]
                } Results</h2>
                <p className="text-brand-black/50 font-medium italic">Showing {results.length} professional results</p>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              {results.map(r => (
                <div key={r.id} className="bg-white rounded-3xl border border-black/5 shadow-sm overflow-hidden transition-all hover:shadow-xl group hover:border-brand-red/20">
                  {r.type === 'flight' && (
                    <div className="flex flex-col md:flex-row">
                      <div className="p-8 flex-1">
                        <div className="flex items-center justify-between mb-8">
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-brand-red/5 text-brand-red rounded-2xl flex items-center justify-center">
                              <Plane size={24} />
                            </div>
                            <div>
                              <div className="text-lg font-bold text-brand-black">{r.airline}</div>
                              <div className="text-sm font-semibold text-brand-black/40 uppercase tracking-widest">{r.flight}</div>
                            </div>
                          </div>
                          <div className="flex gap-3">
                            <span className="bg-black/5 text-brand-black/60 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">{r.class}</span>
                            {r.promo && <span className="bg-brand-red/10 text-brand-red px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">{r.promo}</span>}
                          </div>
                        </div>

                        <div className="flex items-center justify-between gap-12">
                          <div className="text-center">
                            <div className="text-2xl font-black text-brand-black mb-1">{r.time}</div>
                            <div className="text-sm font-bold text-brand-black/40 uppercase tracking-widest">{r.from}</div>
                          </div>

                          <div className="flex-1 flex flex-col items-center gap-2">
                            <div className="text-[11px] font-extrabold uppercase tracking-widest text-brand-black/30 bg-white px-3 relative z-10">{r.dur}</div>
                            <div className="w-full h-[2px] bg-black/5 relative after:content-[''] after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:w-2 after:h-2 after:bg-brand-red after:rounded-full" />
                            <div className="text-[10px] font-bold uppercase tracking-widest text-brand-red">Non-stop</div>
                          </div>

                          <div className="text-center">
                            <div className="text-2xl font-black text-brand-black mb-1">{r.arrival}</div>
                            <div className="text-sm font-bold text-brand-black/40 uppercase tracking-widest">{r.to}</div>
                          </div>
                        </div>
                      </div>

                      <div className="bg-black/[0.02] border-l border-black/5 p-8 w-full md:w-72 flex flex-col justify-center items-center text-center group-hover:bg-brand-red/[0.02] transition-colors">
                        <div className="text-[11px] font-bold text-brand-black/40 uppercase tracking-wider mb-1">Per person</div>
                        <div className="text-3xl font-black text-brand-black mb-6">₹{r.price}</div>
                        <button className="w-full bg-brand-black text-white py-4 rounded-xl font-bold transition-all hover:bg-brand-red hover:shadow-lg active:scale-95">Select Flight</button>
                      </div>
                    </div>
                  )}

                  {(r.type === 'tour' || r.type === 'tour_custom') && (
                    <div className={`flex flex-col md:flex-row h-full md:h-64 bg-white rounded-3xl overflow-hidden border transition-all ${r.type === 'tour_custom' ? 'border-brand-red/30 shadow-lg relative' : 'border-black/5 shadow-sm hover:shadow-xl group hover:border-brand-red/20'}`}>
                      {r.type === 'tour_custom' && (
                        <div className="absolute top-4 -right-12 bg-white text-brand-red text-[10px] font-black uppercase shadow-xl tracking-widest py-1.5 px-12 rotate-45 z-20 pointer-events-none">
                          Top Pick
                        </div>
                      )}
                      <div 
                        onClick={() => navigate(`/tours/${r.id}`)}
                        className="w-full md:w-80 h-48 md:h-auto overflow-hidden relative cursor-pointer"
                      >
                        <img src={r.img} alt={r.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/600x400/f8f9fa/a8a29e?text=Image+Unavailable'; }} />
                        {r.type === 'tour_custom' && <div className="absolute inset-0 bg-gradient-to-t from-brand-red/60 via-transparent to-transparent mix-blend-multiply" />}
                      </div>
                      <div className="p-8 flex-1 flex flex-col relative z-10 bg-white">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h3 
                              onClick={() => navigate(`/tours/${r.id}`)}
                              className={`text-2xl font-extrabold mb-2 cursor-pointer hover:underline ${r.type === 'tour_custom' ? 'text-brand-red' : 'text-brand-black'}`}
                            >
                              {r.name}
                            </h3>
                            <div className="flex items-center gap-4 text-brand-black/40 font-bold text-sm">
                              <span className="flex items-center gap-1.5"><Compass size={16} /> {r.duration}</span>
                              <span className="flex items-center gap-1.5 font-bold"><Globe2 size={16} /> ⭐ {r.rating}</span>
                            </div>
                          </div>
                        </div>
                        {r.desc && <p className="text-brand-black/60 font-medium text-sm leading-relaxed mb-4">{r.desc}</p>}
                        <div className="mt-auto flex items-center justify-between pt-6 border-t border-black/5">
                          <div>
                            <div className="text-[11px] font-bold text-brand-black/40 uppercase tracking-wider mb-1">Package Price</div>
                            <div className={`font-black ${r.type === 'tour_custom' ? 'text-brand-red text-2xl tracking-tight' : 'text-brand-black text-3xl'}`}>{r.type === 'tour_custom' ? r.price : `₹${r.price}`}</div>
                          </div>
                          <button 
                            onClick={() => navigate(`/tours/${r.id}`)}
                            className={`px-8 h-14 rounded-xl font-bold transition-all hover:bg-brand-black active:scale-95 flex items-center gap-2 border ${r.type === 'tour_custom' ? 'bg-brand-red text-white hover:text-white border-transparent shadow-md' : 'bg-transparent border-brand-black/20 text-brand-black hover:border-brand-black'}`}
                          >
                            {r.type === 'tour_custom' ? 'Start Customizing' : 'Book Tour Now'}
                          </button>
                        </div>
                      </div>
                    </div>
                  )}

                  {r.type === 'activity' && (
                    <div className="flex bg-white rounded-3xl border border-black/5 overflow-hidden shadow-sm hover:shadow-xl transition-all h-[280px]">
                      <div className="w-1/3 h-full relative overflow-hidden group">
                        <img src={r.img} alt={r.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/600x400/f8f9fa/a8a29e?text=Image+Unavailable'; }} />
                        <div className="absolute top-4 left-4">
                          <span className="bg-brand-red text-white text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1.5 rounded-full shadow-lg">
                            {r.tag}
                          </span>
                        </div>
                      </div>
                      <div className="flex-1 p-8 flex flex-col">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h3 className="text-2xl font-black text-brand-black mb-2 tracking-tight">{r.name}</h3>
                            <div className="flex items-center gap-4 text-brand-black/40 font-bold text-sm">
                              <span className="flex items-center gap-1.5"><MapPin size={16} className="text-brand-red" /> {r.city}</span>
                              <span className="flex items-center gap-1.5 text-brand-black">⭐ <span className="text-brand-black/60">{r.rating}</span></span>
                            </div>
                          </div>
                        </div>
                        <p className="text-brand-black/60 font-medium text-sm leading-relaxed mb-6 line-clamp-2">{r.desc}</p>
                        <div className="mt-auto flex items-center justify-between pt-6 border-t border-black/5">
                          <div>
                            <div className="text-[10px] font-black text-brand-black/40 uppercase tracking-widest mb-1">Price per person</div>
                            <div className="text-3xl font-black text-brand-black">₹{r.price}</div>
                          </div>
                          <button className="bg-brand-black text-white px-8 h-12 rounded-xl font-bold transition-all hover:bg-brand-red hover:shadow-lg active:scale-95 flex items-center gap-2">
                            Book Now <ArrowRightLeft size={16} />
                          </button>
                        </div>
                      </div>
                    </div>
                  )}

                  {(r.type === 'status' || r.type === 'info') && (
                    <div className="p-8 flex items-center gap-8 border-l-8 border-brand-red h-full">
                      <div className="w-16 h-16 bg-brand-red/5 text-brand-red rounded-full flex items-center justify-center">
                        <ShieldCheck size={32} />
                      </div>
                      <div>
                        <h3 className="text-2xl font-black text-brand-black mb-2 tracking-tight">{r.title}</h3>
                        <p className="text-brand-black/60 font-medium text-lg leading-relaxed">{r.desc}</p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </motion.section>
      )}
    </AnimatePresence>
  );
};

export default ResultsSection;
