import React from 'react';
import { motion } from 'framer-motion';
import { 
  Plane, Compass, FileText, Activity, Train, ClipboardCheck,
  ShieldCheck, Headphones, Globe2
} from 'lucide-react';
import { useSearchContext } from '../context/SearchContext';
import Hero from '../components/layout/Hero';
import FlightSearch from '../components/features/flights/FlightSearch';
import TourSearch from '../components/features/tours/TourSearch';
import VisaSearch from '../components/features/visa/VisaSearch';
import ActivitySearch from '../components/features/activity/ActivitySearch';
import TrainSearch from '../components/features/train/TrainSearch';
import PnrSearch from '../components/features/pnr/PnrSearch';
import HomeContent from '../components/features/common/HomeContent';

const tabs = [
  { id: 'flights', label: 'Flights', icon: Plane, Component: FlightSearch },
  { id: 'tours', label: 'Tours', icon: Compass, Component: TourSearch },
  { id: 'visa', label: 'Visa', icon: FileText, Component: VisaSearch },
  { id: 'activity', label: 'Activity', icon: Activity, Component: ActivitySearch },
  { id: 'train', label: 'Train Status', icon: Train, Component: TrainSearch },
  { id: 'pnr', label: 'PNR Status', icon: ClipboardCheck, Component: PnrSearch },
];

const features = [
  { icon: ShieldCheck, title: 'Transparent Pricing', text: 'No hidden fees or charges' },
  { icon: Headphones, title: '24/7 Expert Support', text: 'Always here for you' },
  { icon: Globe2, title: 'Global Network', text: 'Partners in 150+ countries' }
];

const Home = () => {
  const searchState = useSearchContext();
  const { activeTab, setActiveTab, results, searching } = searchState;
  
  const ActiveComponent = tabs.find(t => t.id === activeTab)?.Component;

  return (
    <>
      <Hero>
        <section className="w-full max-w-[1200px] mx-auto z-50">
          <div className="glass-card rounded-3xl">
            <div id="search-tabs" className="flex bg-white/50 border-b border-black/5 rounded-t-3xl overflow-hidden">
              {tabs.map((item) => (
                <button
                  key={item.id}
                  className={`flex items-center gap-3 px-8 py-5 text-sm font-bold transition-all duration-300 border-r border-black/5 relative hover:bg-white/40 ${activeTab === item.id ? 'text-brand-red' : 'text-brand-black/60'}`}
                  onClick={() => setActiveTab(item.id)}
                >
                  <item.icon size={18} />
                  {item.label}
                  {activeTab === item.id && (
                    <motion.div
                      layoutId="active-pill"
                      className="absolute inset-0 bg-white border-b-2 border-brand-red z-[-1]"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </button>
              ))}
            </div>

            <div className="p-8">
              {ActiveComponent && <ActiveComponent {...searchState} />}
            </div>
          </div>
        </section>
      </Hero>

      <section className="py-12 bg-black/[0.02] border-y border-black/5 mt-16">
        <div className="max-w-[1200px] mx-auto px-6 flex justify-between gap-12">
          {features.map((feature, i) => (
            <div key={i} className="flex items-center gap-5 flex-1 p-6 rounded-2xl transition-all hover:bg-white hover:shadow-xl group">
              <feature.icon className="text-brand-red w-10 h-10 transition-transform group-hover:scale-110" />
              <div>
                <h4 className="font-bold text-brand-black text-lg">{feature.title}</h4>
                <p className="text-brand-black/60 text-sm">{feature.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <HomeContent results={results} searching={searching} />
    </>
  );
};

export default Home;
