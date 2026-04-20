/*
 * Flyanytrip
 * Authors: Gaurav Thakur, Milan Pandavadara
 *
 * Root component of the app. Sets up the router, global search state,
 * and the main page layout (Navbar, page content, Footer).
 */

import React from 'react';
import { motion } from 'framer-motion';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
 * Inner layout component. Reads the active search tab from context
 * and renders the Navbar, the correct page, and the Footer.
 */
const AppContent = () => {
  const { activeTab, setActiveTab } = useSearchContext();

  return (
    <div className="min-h-screen bg-white">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      <main>
        {/* Define all page routes here */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/results" element={<SearchResults />} />
          <Route path="/tours/:id" element={<TourDetails />} />
          <Route path="/activities/:id" element={<ActivityDetails />} />
        </Routes>
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
