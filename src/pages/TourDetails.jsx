import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Heart, Star, Info, MapPin, Phone, Clock, FileText, ChevronRight,
  TrendingUp, Users, Calendar, CheckCircle2, ArrowRight,
  ShieldCheck, Bed, Coffee, Car, Plane, Utensils, Camera, Map,
  Plus, Minus, ChevronLeft
} from 'lucide-react';
import { tours } from '../utils/mockData';

/**
 * Helper to match inclusion text to a relevant icon
 */
const getInclusionIcon = (text) => {
  const t = text.toLowerCase();
  if (t.includes('hotel') || t.includes('stay') || t.includes('night')) return <Bed size={18} />;
  if (t.includes('breakfast') || t.includes('coffee')) return <Coffee size={18} />;
  if (t.includes('lunch') || t.includes('dinner') || t.includes('meal')) return <Utensils size={18} />;
  if (t.includes('transfer') || t.includes('airport') || t.includes('car')) return <Car size={18} />;
  if (t.includes('flight')) return <Plane size={18} />;
  if (t.includes('tour') || t.includes('sightseeing')) return <Map size={18} />;
  if (t.includes('visa') || t.includes('assistance')) return <ShieldCheck size={18} />;
  return <CheckCircle2 size={18} />;
};

/**
 * Displays the full detail view for a single tour.
 * Features an auto-moving carousel and a dynamic booking logic.
 */
const TourDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const [currentImg, setCurrentImg] = useState(0);
  const [guests, setGuests] = useState(2);

  // Always scroll to the top when this page first loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Fetch tour data from our centralized mock store
  const tourData = tours.find(t => t.id === parseInt(id)) || tours[0];
  
  // Destructure for easier access
  const { 
    name, country, duration, idealFor, rating, reviews, 
    priceEstimate, itinerary, gallery, bestDestinations, includes, price
  } = tourData;

  // Carousel Auto-Play Logic
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImg(prev => (prev + 1) % gallery.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [gallery.length]);

  // Pricing Logic
  const unitPrice = parseInt(price.replace(/,/g, ''));
  const totalPrice = unitPrice * guests;

  return (
    <div className="min-h-screen bg-[#f5f7fa] pb-24 font-sans overflow-x-hidden">
      {/* Top Background Banner */}
      <div className="bg-brand-red h-12 w-full absolute top-16 left-0 right-0 z-0"></div>

      <div className="max-w-[1240px] mx-auto pt-6 px-6 relative z-10">
        
        {/* Breadcrumbs - Premium Lowercase Minimalist Style */}
        <div className="flex items-center gap-3 text-[13px] font-medium opacity-50 mb-6 uppercase tracking-widest text-brand-black">
          <span className="cursor-pointer hover:text-brand-red transition-colors" onClick={() => navigate('/')}>home</span>
          <span className="opacity-30">/</span>
          <span className="cursor-pointer hover:text-brand-red transition-colors" onClick={() => navigate('/results')}>tour</span>
          <span className="opacity-30">/</span>
          <span className="cursor-pointer hover:text-brand-red transition-colors" onClick={() => navigate('/results')}>{country?.toLowerCase()}</span>
          <span className="opacity-30">/</span>
          <span className="text-brand-black font-black italic">{name?.toLowerCase()}</span>
        </div>
        
        {/* Auto-Moving Image Carousel - Immersive Experience */}
        <div className="relative w-full h-[460px] mb-12 rounded-[40px] overflow-hidden shadow-2xl bg-black group border-4 border-white">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentImg}
              src={gallery[currentImg]}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="absolute inset-0 w-full h-full object-cover object-center"
              onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/1600x1200/f8f9fa/a8a29e?text=Image+Unavailable'; }}
            />
          </AnimatePresence>
          
          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 pointer-events-none"></div>

          {/* Navigation Controls */}
          <button 
             onClick={() => setCurrentImg(prev => (prev - 1 + gallery.length) % gallery.length)}
             className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white hover:text-brand-red transition-all opacity-0 group-hover:opacity-100 z-30"
          >
             <ChevronLeft size={24} />
          </button>
          <button 
             onClick={() => setCurrentImg(prev => (prev + 1) % gallery.length)}
             className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white hover:text-brand-red transition-all opacity-0 group-hover:opacity-100 z-30"
          >
             <ChevronRight size={24} />
          </button>

          {/* Carousel Indicators & Tag - Centered Layout */}
          <div className="absolute bottom-10 left-0 right-0 flex flex-col items-center gap-4 z-20">
            <span className="bg-brand-red text-white text-[10px] font-black uppercase tracking-[0.2em] px-4 py-1.5 rounded-full shadow-lg">Explore Gallery</span>
            <div className="flex items-center gap-2">
              {gallery.map((_, idx) => (
                <button 
                  key={idx}
                  onClick={() => setCurrentImg(idx)}
                  className={`h-1.5 rounded-full transition-all duration-500 ${currentImg === idx ? 'w-8 bg-brand-red' : 'w-2 bg-white/40'}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Main Content Split */}
        <div className="flex flex-col lg:flex-row gap-10">
          
          {/* Core Details (Left Column) */}
          <div className="flex-1 space-y-10">
            
            {/* Main Info Card */}
            <div className="bg-white rounded-[40px] shadow-sm border border-black/5 p-10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-brand-red/5 rounded-bl-[100px] -mr-20 -mt-20 pointer-events-none"></div>
              
              <button className="absolute top-8 right-8 w-14 h-14 rounded-full border border-black/10 flex items-center justify-center text-brand-black hover:bg-brand-red hover:text-white hover:border-brand-red transition-all shadow-xl bg-white">
                <Heart size={24} />
              </button>

              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                   <div className="flex items-center gap-1 text-brand-red font-black text-base bg-brand-red/5 px-3 py-1 rounded-lg">
                     <Star size={16} className="fill-current" /> {rating}
                   </div>
                   <span className="text-brand-black/30 font-bold text-sm">| &nbsp; {reviews} traveler reviews</span>
                </div>
                <h1 className="text-[56px] font-black text-brand-black leading-[0.95] tracking-tighter mb-6 capitalize">
                  {name}
                </h1>
                <div className="flex flex-wrap items-center gap-4">
                   <div className="flex items-center gap-2 bg-black/5 px-5 py-3 rounded-2xl">
                     <Calendar size={20} className="text-brand-red" /> 
                     <span className="text-sm font-black text-brand-black/70">{duration}</span>
                   </div>
                   <div className="flex items-center gap-2 bg-black/5 px-5 py-3 rounded-2xl">
                     <Users size={20} className="text-brand-red" /> 
                     <span className="text-sm font-black text-brand-black/70">Ideal for {idealFor.split(',')[0]}</span>
                   </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-black/5">
                 <div className="flex items-start gap-5">
                    <div className="w-14 h-14 bg-brand-red/10 rounded-2xl flex items-center justify-center text-brand-red shrink-0 shadow-inner">
                       <MapPin size={28} />
                    </div>
                    <div>
                       <h4 className="text-[12px] font-black text-brand-black/20 uppercase tracking-[0.3em] mb-1">Destinations</h4>
                       <p className="text-lg font-black text-brand-black italic tracking-tight">{bestDestinations}</p>
                    </div>
                 </div>
                 <div className="flex items-start gap-5">
                    <div className="w-14 h-14 bg-brand-red/10 rounded-2xl flex items-center justify-center text-brand-red shrink-0 shadow-inner">
                       <TrendingUp size={28} />
                    </div>
                    <div>
                       <h4 className="text-[12px] font-black text-brand-black/20 uppercase tracking-[0.3em] mb-1">Price Guide</h4>
                       <p className="text-lg font-black text-brand-black italic tracking-tight">{priceEstimate}</p>
                    </div>
                 </div>
              </div>
            </div>

            {/* Package Includes Section */}
            {includes && (
              <div className="bg-white rounded-[40px] shadow-sm border border-black/5 p-12">
                <h2 className="text-[32px] font-black text-brand-black mb-10 flex items-center gap-6">
                   Trip Inclusions <div className="h-0.5 bg-brand-red flex-1 opacity-20"></div>
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-8 gap-x-10">
                   {includes.map((incl, idx) => (
                     <div key={idx} className="flex items-center gap-5 group">
                        <div className="w-12 h-12 rounded-2xl bg-black/5 flex items-center justify-center text-brand-red group-hover:bg-brand-red group-hover:text-white group-hover:rotate-6 transition-all duration-500 shadow-sm">
                           {getInclusionIcon(incl)}
                        </div>
                        <span className="text-[15px] font-black text-brand-black/50 capitalize leading-relaxed group-hover:text-brand-red transition-colors">{incl}</span>
                     </div>
                   ))}
                </div>
              </div>
            )}

            {/* Itinerary Timeline */}
            <div className="bg-white rounded-[40px] shadow-sm border border-black/5 p-12">
               <h2 className="text-[32px] font-black text-brand-black mb-12 flex items-center gap-6">
                 Daily Itinerary <div className="h-0.5 bg-brand-red flex-1 opacity-20"></div>
               </h2>

               <div className="space-y-16 relative before:absolute before:left-7 before:top-4 before:bottom-4 before:w-[3px] before:bg-brand-red/10">
                 {itinerary.map((day, idx) => (
                   <div key={idx} className="relative pl-24 group">
                     {/* Day Marker */}
                     <div className="absolute left-0 top-0 w-16 h-16 bg-white border-4 border-brand-red/10 rounded-[28px] flex items-center justify-center shadow-xl z-20 group-hover:border-brand-red transition-all duration-500">
                        <span className="text-lg font-black italic text-brand-red">D0{day.day}</span>
                     </div>
                     
                     <div className="space-y-6">
                        <h3 className="text-2xl font-black text-brand-black tracking-tighter uppercase italic">{day.title}</h3>
                        
                        {/* Standard Activities */}
                        {day.activities && (
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {day.activities.map((item, i) => (
                              <div key={i} className="flex items-start gap-4 bg-black/[0.02] p-5 rounded-3xl border border-black/5 hover:border-brand-red/30 transition-all hover:bg-white hover:shadow-xl">
                                <CheckCircle2 size={20} className="text-brand-red mt-0.5 shrink-0" />
                                <span className="text-[15px] font-bold text-brand-black/60 leading-relaxed italic">{item}</span>
                              </div>
                            ))}
                          </div>
                        )}

                        {/* Optional Activities */}
                        {day.optional && (
                          <div className="mt-6 bg-brand-red/[0.04] p-8 rounded-[36px] border border-brand-red/10 relative overflow-hidden">
                             <div className="absolute top-0 right-0 w-32 h-32 bg-brand-red/5 rounded-full -mr-16 -mt-16"></div>
                             <h4 className="text-[11px] font-black text-brand-red uppercase tracking-[0.3em] mb-5">Premium Add-ons</h4>
                             <div className="flex flex-wrap gap-4">
                                {day.optional.map((opt, i) => (
                                  <span key={i} className="text-xs font-black bg-white text-brand-red border border-brand-red/20 px-6 py-3 rounded-2xl shadow-sm hover:bg-brand-red hover:text-white transition-all cursor-default">
                                    + {opt}
                                  </span>
                                ))}
                             </div>
                          </div>
                        )}

                        {/* Choice Options (Special Rendering) */}
                        {day.options && (
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                            {day.options.map((opt, i) => (
                              <div key={i} className="bg-white border-4 border-dashed border-black/[0.03] p-8 rounded-[40px] hover:border-brand-red/20 transition-all group/opt relative">
                                 <h4 className="text-lg font-black text-brand-black mb-6 flex items-center gap-3">
                                   <div className="w-3 h-3 rounded-full bg-brand-red shadow-lg shadow-brand-red/40"></div>
                                   {opt.title}
                                 </h4>
                                 <ul className="space-y-4">
                                   {opt.items.map((item, j) => (
                                     <li key={j} className="text-[15px] font-bold text-brand-black/40 flex items-start gap-3 italic">
                                       <ArrowRight size={16} className="text-brand-red mt-1 shrink-0 transform group-hover/opt:translate-x-1 transition-transform" /> {item}
                                     </li>
                                   ))}
                                 </ul>
                              </div>
                            ))}
                          </div>
                        )}
                     </div>
                   </div>
                 ))}
               </div>
            </div>
          </div>

          {/* Sticky Booking Card (Right Column) */}
          <div className="w-full lg:w-[380px] shrink-0">
            <div className="bg-brand-black rounded-[48px] shadow-[0_40px_100px_rgba(0,0,0,0.3)] overflow-hidden sticky top-24 border border-white/5">
                <div className="bg-brand-red p-10 text-center relative overflow-hidden">
                   {/* Decorative elements */}
                   <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
                   <div className="absolute bottom-0 left-0 w-24 h-24 bg-black/10 rounded-full -ml-12 -mb-12"></div>
                   
                   <div className="text-[11px] font-black text-white/50 uppercase tracking-[0.4em] mb-4">Total Package Price</div>
                   <div className="text-5xl font-black text-white italic tracking-tighter mb-2">₹{totalPrice.toLocaleString()}</div>
                   <div className="text-white/40 text-[12px] font-bold">Inclusive of all taxes & fees</div>
                </div>
                
                <div className="p-10 pb-12 space-y-10">
                  {/* Guest Selector */}
                  <div className="bg-white/5 rounded-[32px] p-6 border border-white/5">
                    <div className="flex items-center justify-between mb-2 px-2">
                       <span className="text-white/40 text-[11px] font-black uppercase tracking-widest">Number of Guests</span>
                       <span className="text-brand-red text-xs font-black italic">Best Price For {guests}</span>
                    </div>
                    <div className="flex items-center justify-between bg-black/40 rounded-2xl p-2 border border-white/10">
                       <button 
                         onClick={() => setGuests(Math.max(1, guests - 1))}
                         className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-white hover:bg-brand-red transition-all"
                       >
                         <Minus size={20} />
                       </button>
                       <div className="text-2xl font-black text-white tabular-nums">{guests.toString().padStart(2, '0')}</div>
                       <button 
                         onClick={() => setGuests(guests + 1)}
                         className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-white hover:bg-brand-red transition-all"
                       >
                         <Plus size={20} />
                       </button>
                    </div>
                  </div>

                  {/* Summary Details */}
                  <div className="space-y-5 px-4">
                     <div className="flex items-center justify-between text-sm">
                        <span className="text-white/30 font-bold">Base Price</span>
                        <span className="text-white/90 font-black italic">₹{price} / guest</span>
                     </div>
                     <div className="flex items-center justify-between text-sm">
                        <span className="text-white/30 font-bold">Duration</span>
                        <span className="text-white/90 font-black italic">{duration}</span>
                     </div>
                     <div className="flex items-center justify-between text-sm">
                        <span className="text-white/30 font-bold">Standard</span>
                        <span className="text-white/90 font-black italic">3★ / 4★ Stays</span>
                     </div>
                  </div>
                  
                  <div className="pt-4">
                    <button className="w-full bg-white text-brand-black font-black text-[15px] uppercase tracking-[0.2em] py-6 rounded-3xl transition-all active:scale-[0.96] hover:bg-brand-red hover:text-white shadow-2xl flex items-center justify-center gap-3">
                      Secure My Trip <ArrowRight size={20} />
                    </button>
                    <p className="text-[10px] text-white/20 text-center mt-6 font-bold uppercase tracking-[0.2em]">24/7 Expert Support & Real-time Updates</p>
                  </div>
                </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default TourDetails;
