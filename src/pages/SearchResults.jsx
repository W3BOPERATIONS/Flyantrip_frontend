import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSearchContext } from '../context/SearchContext';
import ResultsSection from '../components/features/common/ResultsSection';
import FlightSearch from '../components/features/flights/FlightSearch';
import TourSearch from '../components/features/tours/TourSearch';
import VisaSearch from '../components/features/visa/VisaSearch';
import ActivitySearch from '../components/features/activity/ActivitySearch';
import TrainSearch from '../components/features/train/TrainSearch';
import PnrSearch from '../components/features/pnr/PnrSearch';
import { ArrowLeft } from 'lucide-react';

const SearchComponents = {
  flights: FlightSearch,
  tours: TourSearch,
  visa: VisaSearch,
  activity: ActivitySearch,
  train: TrainSearch,
  pnr: PnrSearch
};

const SearchResults = () => {
  const searchState = useSearchContext();
  const { results, activeTab, searchError } = searchState;
  const navigate = useNavigate();
  
  const ActiveSearch = SearchComponents[activeTab];

  return (
    <div className="min-h-screen bg-black/[0.02] pb-20">
      {/* Search Bar Condensed View */}
      <div className="bg-white border-b border-black/5 pt-6 pb-6 shadow-sm mb-8">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-extrabold text-brand-black tracking-tight">Modify Search</h1>
            {/* Back Button */}
            <button
              id="back-to-home-btn"
              onClick={() => navigate('/')}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '7px 16px',
                fontSize: '14px',
                fontWeight: '500',
                color: '#e63946',
                background: 'transparent',
                border: '1.5px solid #e63946',
                borderRadius: '8px',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = '#e63946';
                e.currentTarget.style.color = '#fff';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.color = '#e63946';
              }}
            >
              <ArrowLeft size={16} />
              Back to Home
            </button>
          </div>
          {searchError && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 text-[#ce3131] font-bold rounded-xl flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
              {searchError}
            </div>
          )}
          {ActiveSearch && <ActiveSearch {...searchState} />}
        </div>
      </div>
      
      {/* Search Results */}
      <div className="max-w-[1200px] mx-auto px-6">
        <ResultsSection results={results} activeTab={activeTab} />
      </div>
    </div>
  );
};

export default SearchResults;
