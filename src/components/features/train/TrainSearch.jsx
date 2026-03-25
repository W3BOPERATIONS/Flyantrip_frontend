import React from 'react';
import { Train, Activity } from 'lucide-react';

const TrainSearch = ({ trainNumber, setTrainNumber, handleSearch }) => (
  <div className="grid grid-cols-[3fr_1fr] gap-4 items-end">
    <div className="relative">
      <label className="block text-[11px] font-extrabold uppercase tracking-wider text-brand-black/40 mb-2 ml-1">Train Number/Name</label>
      <div className="bg-white border border-black/10 p-4 rounded-xl font-semibold text-brand-black flex items-center gap-3 transition-all hover:border-brand-red hover:shadow-md">
        <Train size={16} className="text-brand-red" />
        <input
          type="text"
          placeholder="Enter Train Number"
          className="w-full outline-none bg-transparent"
          value={trainNumber}
          onChange={(e) => setTrainNumber(e.target.value)}
        />
      </div>
    </div>
    <button className="bg-brand-black text-white h-[58px] px-10 rounded-xl font-bold flex items-center gap-3 transition-all active:scale-95 hover:bg-brand-red hover:shadow-lg" onClick={handleSearch}>
      <Activity size={22} /> Check Status
    </button>
  </div>
);

export default TrainSearch;
