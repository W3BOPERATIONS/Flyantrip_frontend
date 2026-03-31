import React from 'react';
import { motion } from 'framer-motion';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import SearchResults from './pages/SearchResults';
import TourDetails from './pages/TourDetails';
import { SearchProvider, useSearchContext } from './context/SearchContext';
import { 
  Plane, Compass, FileText, Activity, Train, ClipboardCheck,
  ShieldCheck, Headphones, Globe2
} from 'lucide-react';

const AppContent = () => {
  const { activeTab, setActiveTab } = useSearchContext();

  return (
    <div className="min-h-screen bg-white">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/results" element={<SearchResults />} />
          <Route path="/tours/:id" element={<TourDetails />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

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
