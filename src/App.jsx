/*
 * Flyanytrip
 * Authors: Gaurav Thakur, Milan Pandavadara
 *
 * Root component of the app. Sets up the router, global search state,
 * and the main page layout (Navbar, page content, Footer).
 */

import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import SearchResults from './pages/SearchResults';
import TourDetails from './pages/TourDetails';
import ActivityDetails from './pages/ActivityDetails';
import { SearchProvider, useSearchContext } from './context/SearchContext';
import { 
  Plane, Compass, FileText, Activity, Train, ClipboardCheck,
  ShieldCheck, Headphones, Globe2
} from 'lucide-react';

/**
 * Animated route wrapper to handle page transitions
 */
const PageTransition = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
};

/**
 * Inner layout component. Reads the active search tab from context
 * and renders the Navbar, the correct page, and the Footer.
 */
const AppContent = () => {
  const { activeTab, setActiveTab } = useSearchContext();
  const location = useLocation();

  return (
    <div className="min-h-screen bg-white">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      <main>
        {/* Define all page routes with transitions */}
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<PageTransition><Home /></PageTransition>} />
            <Route path="/results" element={<PageTransition><SearchResults /></PageTransition>} />
            <Route path="/tours/:id" element={<PageTransition><TourDetails /></PageTransition>} />
            <Route path="/activities/:id" element={<PageTransition><ActivityDetails /></PageTransition>} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
};

/**
 * Top-level App component.
 * Wraps everything in the Router (for navigation) and SearchProvider
 * (so all child components can access shared search state).
 */
function App() {
  return (
    <Router>
      <SearchProvider>
        <AppContent />
      </SearchProvider>
    </Router>
  );
}


export default App;
