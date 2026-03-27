import React from 'react';
import { useSearchContext } from '../context/SearchContext';
import ResultsSection from '../components/features/common/ResultsSection';
import FlightSearch from '../components/features/flights/FlightSearch';
import TourSearch from '../components/features/tours/TourSearch';
import VisaSearch from '../components/features/visa/VisaSearch';
import ActivitySearch from '../components/features/activity/ActivitySearch';
import TrainSearch from '../components/features/train/TrainSearch';
import PnrSearch from '../components/features/pnr/PnrSearch';

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
  const { results, activeTab } = searchState;
  
  const ActiveSearch = SearchComponents[activeTab];

  return (
    <div className="min-h-screen bg-black/[0.02] pb-20">
      {/* Search Bar Condensed View */}
      <div className="bg-white border-b border-black/5 pt-6 pb-6 shadow-sm mb-8">
        <div className="max-w-[1200px] mx-auto px-6">
          <h1 className="text-2xl font-extrabold text-brand-black tracking-tight mb-6">Modify Search</h1>
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
