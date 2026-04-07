/*
 * Flyanytrip
 * Authors: Gaurav Thakur, Milan Pandavadara
 *
 * The "below the fold" content shown on the home page.
 * Contains informational sections:
 * 1. Trending Destinations — visual grid of popular countries
 * 2. Popular Activities    — curated activity cards with photographs
 * 3. Testimonials          — customer review cards
 * 4. Stats Bar              — key performance metrics (Happy Customers, etc.)
 * 5. Happy Customers       — detailed company features with images
 * 6. Partners Slider       — infinite auto-scrolling airline logo strip
 */

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRightLeft, Search } from 'lucide-react';
import HappyCustomers from './HappyCustomers';

/**
 * Renders all home page content sections below the hero search card.
 * Orchestrates the informational sections and the partnership slider.
 *
 * @param results   - search results from the last query
 * @param searching - whether a search is currently in progress
 * @returns {JSX.Element} The rendered content blocks.
 */
const HomeContent = ({ results, searching }) => {

  return (
    <>
      <section className="py-20 max-w-[1200px] mx-auto px-6">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-extrabold text-brand-black mb-4">Trending Destinations</h2>
          <p className="text-brand-black/50 text-lg">Top picks for your next professional escape</p>
        </div>
        <div className="grid grid-cols-5 gap-6">
          {[
            { name: 'Vietnam', price: '48,000', img: 'https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=1000&auto=format&fit=crop' },
            { name: 'Bali', price: '42,500', img: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1000&auto=format&fit=crop' },
            { name: 'Oman', price: '85,000', img: 'https://images.unsplash.com/photo-1616035287790-255d644781bb?q=80&w=1000&auto=format&fit=crop' },
            { name: 'Thailand', price: '38,900', img: 'https://images.unsplash.com/photo-1523730205978-59fd1b2965e3?q=80&w=1000&auto=format&fit=crop' },
            { name: 'Singapore', price: '52,000', img: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=1000&auto=format&fit=crop' }
          ].map((dest) => (
            <div key={dest.name} className="relative h-[400px] rounded-3xl overflow-hidden group cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500">
              <img src={dest.img} alt={dest.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8 w-full transition-transform duration-500 group-hover:-translate-y-2">
                <h3 className="text-2xl font-bold text-white mb-2">{dest.name}</h3>
                <div className="flex justify-between items-center">
                  <span className="text-white/70 text-sm font-medium">Starting from ₹{dest.price}</span>
                  <ArrowRightLeft className="text-brand-red opacity-0 group-hover:opacity-100 transition-opacity" size={20} />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-32 mb-12 text-center">
          <h2 className="text-4xl font-extrabold text-brand-black mb-4">Popular Activities</h2>
          <p className="text-brand-black/50 text-lg">Curated experiences for every global professional</p>
        </div>
        <div className="grid grid-cols-4 gap-6">
          {[
            { name: 'Heritage Walk', city: 'Vadodara', price: '1,200', tag: 'Cultural', img: 'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?q=80&w=1000&auto=format&fit=crop' },
            { name: 'Desert Safari', city: 'Dubai', price: '4,500', tag: 'Adventure', img: 'https://images.unsplash.com/photo-1451337516015-6b6e9a44a8a3?q=80&w=1000&auto=format&fit=crop' },
            { name: 'Island Hopping', city: 'Thailand', price: '3,800', tag: 'Leisure', img: 'https://images.unsplash.com/photo-1528181304800-259b08bb73d5?q=80&w=1000&auto=format&fit=crop' },
            { name: 'Skydeck Views', city: 'Singapore', price: '2,900', tag: 'Must Visit', img: 'https://images.unsplash.com/photo-1525625293386-3fb0ad7c1fe6?q=80&w=1000&auto=format&fit=crop' }
          ].map((act) => (
            <div key={act.name} className="relative h-[300px] rounded-[32px] overflow-hidden group cursor-pointer shadow-md hover:shadow-xl transition-all duration-500 bg-white">
              <img src={act.img} alt={act.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute top-4 left-4">
                <span className="bg-white/90 backdrop-blur-md text-brand-black text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">{act.tag}</span>
              </div>
              <div className="absolute bottom-0 left-0 p-6 w-full">
                <h3 className="text-xl font-bold text-white mb-1">{act.name}</h3>
                <div className="flex justify-between items-center">
                  <span className="text-white/70 text-xs font-medium">{act.city} • From ₹{act.price}</span>
                  <Search size={16} className="text-brand-red opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-brand-black relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-red rounded-full blur-[120px]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-brand-red rounded-full blur-[120px]" />
        </div>
        <div className="max-w-[1200px] mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-white mb-4">What Our Travelers Say</h2>
            <p className="text-white/40 text-lg uppercase tracking-widest font-bold">Real experiences from global explorers</p>
          </div>
          <div className="grid grid-cols-3 gap-8">
            {[
              { name: "Ananya Sharma", role: "Software Engineer, Google", text: "FlyAnyTrip made my international work trip completely seamless. From visas to flights, they handled everything with absolute professional precision.", rating: 5 },
              { name: "Rahul Malhotra", role: "CEO, TechSphere", text: "The corporate travel services are unmatched. They understand the value of time and provide a level of service that is truly premium.", rating: 5 },
              { name: "Priya Patel", role: "Travel Enthusiast", text: "I've used many platforms, but the curated tours here are something else. They find those hidden gems that make every trip truly unforgettable.", rating: 4.9 }
            ].map((t, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-[32px] hover:bg-white/10 transition-all duration-500 group">
                <div className="text-brand-red mb-6 flex gap-1">
                  {[...Array(5)].map((_, i) => <span key={i} className={i < Math.floor(t.rating) ? "opacity-100" : "opacity-30"}>★</span>)}
                </div>
                <p className="text-white/80 text-lg leading-relaxed mb-8 italic">"{t.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white font-black text-xl">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="text-white font-bold">{t.name}</div>
                    <div className="text-white/40 text-sm font-medium">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Bar — shown between testimonials and the partners slider */}
      <section className="py-12 bg-brand-black">
        <div className="max-w-[1200px] mx-auto px-6">
          <div
            className="flex items-center justify-around rounded-3xl py-10 px-8"
            style={{
              background: 'linear-gradient(135deg, rgba(255,220,220,0.12) 0%, rgba(200,200,255,0.10) 50%, rgba(180,180,255,0.08) 100%)',
              border: '1px solid rgba(255,255,255,0.08)',
              backdropFilter: 'blur(12px)',
            }}
          >
            {[
              { value: '2.5K+', label: 'Happy Customers' },
              { value: '350+',  label: 'Airlines' },
              { value: '4.5K+', label: 'Destinations' },
              { value: '24/7',  label: 'Support' },
            ].map((stat, i) => (
              <div
                key={i}
                className="flex flex-col items-center gap-2 flex-1"
                style={{
                  borderLeft: i !== 0 ? '1px solid rgba(255,255,255,0.1)' : 'none',
                }}
              >
                <span
                  className="text-4xl font-black tracking-tight"
                  style={{ color: '#f0f0f0', letterSpacing: '-0.02em' }}
                >
                  {stat.value}
                </span>
                <span className="text-[12px] font-bold uppercase tracking-widest text-white/40">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Happy Customers Section — converted from HTML to React */}
      <HappyCustomers />

      {/* Partners Section — Infinite Scrolling Airline Logos */}

      <section className="py-24 bg-[#FBFBFB] border-y border-black/5 overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-6 mb-12">
          <div className="flex flex-col items-center text-center gap-3">
            <div className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-black/30">Alliance Network</div>
            <div className="text-3xl font-black text-brand-black tracking-tighter">PROUD MEMBER OF STAR ALLIANCE</div>
            <p className="text-brand-black/40 text-xs font-bold leading-relaxed uppercase tracking-widest max-w-lg">Connecting you to the world with 25+ premium carriers across the globe.</p>
          </div>
        </div>

        {/* Infinite Scroll Container omitted for brevity, but should be here */}
        <div className="relative w-full">
          <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-[#FBFBFB] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-[#FBFBFB] to-transparent z-10 pointer-events-none" />
          <div className="flex overflow-hidden">
            <motion.div 
              className="flex gap-12 py-4 whitespace-nowrap"
              animate={{ x: [0, -2800] }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear", repeatType: "loop" }}
            >
              {[
                { name: "AIR INDIA", logo: "https://www.logo.wine/a/logo/Air_India/Air_India-Logo.wine.svg" },
                { name: "LUFTHANSA", logo: "https://www.logo.wine/a/logo/Lufthansa/Lufthansa-Logo.wine.svg" },
                { name: "SINGAPORE AIRLINES", logo: "https://www.logo.wine/a/logo/Singapore_Airlines/Singapore_Airlines-Logo.wine.svg" },
                { name: "UNITED", logo: "https://www.logo.wine/a/logo/United_Airlines/United_Airlines-Logo.wine.svg" },
                { name: "EMIRATES", logo: "https://www.logo.wine/a/logo/Emirates_(airline)/Emirates_(airline)-Logo.wine.svg" },
                { name: "VISTARA", logo: "https://www.logo.wine/a/logo/Vistara/Vistara-Logo.wine.svg" },
                { name: "SWISS", logo: "https://www.logo.wine/a/logo/Swiss_International_Air_Lines/Swiss_International_Air_Lines-Logo.wine.svg" },
                { name: "THAI AIRWAYS", logo: "https://www.logo.wine/a/logo/Thai_Airways_International/Thai_Airways_International-Logo.wine.svg" },
                { name: "TURKISH", logo: "https://www.logo.wine/a/logo/Turkish_Airlines/Turkish_Airlines-Logo.wine.svg" },
                { name: "AIR CANADA", logo: "https://www.logo.wine/a/logo/Air_Canada/Air_Canada-Logo.wine.svg" },
                { name: "ANA", logo: "https://www.logo.wine/a/logo/All_Nippon_Airways/All_Nippon_Airways-Logo.wine.svg" },
                { name: "STAR ALLIANCE", logo: "https://www.logo.wine/a/logo/Star_Alliance/Star_Alliance-Logo.wine.svg" }
              ].concat([
                { name: "AIR INDIA", logo: "https://www.logo.wine/a/logo/Air_India/Air_India-Logo.wine.svg" },
                { name: "LUFTHANSA", logo: "https://www.logo.wine/a/logo/Lufthansa/Lufthansa-Logo.wine.svg" },
                { name: "SINGAPORE AIRLINES", logo: "https://www.logo.wine/a/logo/Singapore_Airlines/Singapore_Airlines-Logo.wine.svg" },
                { name: "UNITED", logo: "https://www.logo.wine/a/logo/United_Airlines/United_Airlines-Logo.wine.svg" },
                { name: "EMIRATES", logo: "https://www.logo.wine/a/logo/Emirates_(airline)/Emirates_(airline)-Logo.wine.svg" },
                { name: "VISTARA", logo: "https://www.logo.wine/a/logo/Vistara/Vistara-Logo.wine.svg" },
                { name: "SWISS", logo: "https://www.logo.wine/a/logo/Swiss_International_Air_Lines/Swiss_International_Air_Lines-Logo.wine.svg" },
                { name: "THAI AIRWAYS", logo: "https://www.logo.wine/a/logo/Thai_Airways_International/Thai_Airways_International-Logo.wine.svg" },
                { name: "TURKISH", logo: "https://www.logo.wine/a/logo/Turkish_Airlines/Turkish_Airlines-Logo.wine.svg" },
                { name: "AIR CANADA", logo: "https://www.logo.wine/a/logo/Air_Canada/Air_Canada-Logo.wine.svg" },
                { name: "ANA", logo: "https://www.logo.wine/a/logo/All_Nippon_Airways/All_Nippon_Airways-Logo.wine.svg" },
                { name: "STAR ALLIANCE", logo: "https://www.logo.wine/a/logo/Star_Alliance/Star_Alliance-Logo.wine.svg" }
              ]).map((airline, i) => (
                <div key={i} className="flex items-center gap-4 px-8 py-5 rounded-[24px] border border-black/5 bg-white shadow-sm hover:shadow-2xl hover:border-brand-red/20 transition-all cursor-crosshair group grayscale opacity-40 hover:grayscale-0 hover:opacity-100 min-w-[300px]">
                  <img src={airline.logo} alt={airline.name} className="h-10 w-auto object-contain" onError={(e) => { e.target.style.display = 'none'; }} />
                  <span className="text-sm font-black text-brand-black group-hover:text-brand-red transition-colors tracking-tight uppercase">{airline.name}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeContent;
