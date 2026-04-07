/*
 * Flyanytrip
 * Authors: Gaurav Thakur, Milan Pandavadara
 *
 * Flight search form component. Lets the user pick:
 * - Trip type (one-way or round trip)
 * - Departure and destination airports (with live search dropdown)
 * - Travel date(s) using a date picker
 * - Number of travelers and cabin class
 * All state is managed externally and passed in as props.
 */

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plane, Search, ArrowRightLeft, ChevronDown } from 'lucide-react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

/**
 * Full flight search form.
 * Renders the FROM/TO airport pickers, date picker, traveler selector,
 * and the main Search button.
 *
 * @param tripType           - 'round' or 'one' (trip mode)
 * @param setTripType        - Updates the trip type
 * @param from               - Selected departure airport object
 * @param to                 - Selected destination airport object
 * @param departureDate      - Selected date for one-way trips
 * @param setDepartureDate   - Updates the departure date
 * @param dateRange          - [startDate, endDate] for round trips
 * @param setDateRange       - Updates the date range
 * @param adults             - Number of adult travelers
 * @param children           - Number of child travelers
 * @param infants            - Number of infant travelers
 * @param travelClass        - Selected cabin class (e.g. 'Economy')
 * @param searching          - True while a search is in progress
 * @param handleSearch       - Runs the search when the button is clicked
 * @param showFromMenu       - Whether the FROM airport dropdown is open
 * @param setShowFromMenu    - Opens/closes the FROM dropdown
 * @param showToMenu         - Whether the TO airport dropdown is open
 * @param setShowToMenu      - Opens/closes the TO dropdown
 * @param showTravelersMenu  - Whether the traveler picker panel is open
 * @param setShowTravelersMenu - Opens/closes the traveler panel
 * @param filteredAirports   - List of airports matching the user's search query
 * @param handleAirportSearch - Filters airports as the user types
 * @param selectAirport      - Sets the chosen airport for FROM or TO
 * @param swapAirports       - Swaps the FROM and TO airports
 */

const FlightSearch = ({ 
  tripType, setTripType, from, setFrom, to, setTo, 
  departureDate, setDepartureDate, dateRange, setDateRange, 
  adults, setAdults, children, setChildren, infants, setInfants, 
  travelClass, setTravelClass, searching, handleSearch,
  showFromMenu, setShowFromMenu, showToMenu, setShowToMenu, 
  showTravelersMenu, setShowTravelersMenu, filteredAirports, 
  handleAirportSearch, selectAirport, swapAirports 
}) => {
  // Destructure the date range array into named start and end dates
  const [startDate, endDate] = dateRange;

  return (
    <>
      <div className="flex gap-6 mb-8">
        <label className="flex items-center gap-2 text-sm font-bold cursor-pointer text-brand-black">
          <input type="radio" name="trip" checked={tripType === 'round'} onChange={() => setTripType('round')} className="w-5 h-5 accent-brand-red" /> Round Trip
        </label>
        <label className="flex items-center gap-2 text-sm font-bold cursor-pointer text-brand-black/60">
          <input type="radio" name="trip" checked={tripType === 'one'} onChange={() => setTripType('one')} className="w-5 h-5 accent-brand-red" /> One Way
        </label>
      </div>

      <div className="grid grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)_minmax(0,0.6fr)_auto] gap-4 items-end">
        <div className="relative flex items-center bg-white border border-black/10 rounded-2xl transition-all hover:shadow-md hover:border-brand-red focus-within:border-brand-red focus-within:shadow-md h-[100px] group/container">
          {/* From Section */}
          <div 
            className="flex-1 min-w-0 h-full pl-8 pr-10 cursor-pointer hover:bg-black/[0.02] flex flex-col justify-center transition-colors relative"
            onClick={() => {
              setShowFromMenu(!showFromMenu);
              setShowToMenu(false);
              setShowTravelersMenu(false);
            }}
          >
            <div className="flex items-center gap-2 mb-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-brand-red" />
              <span className="text-[11px] font-black uppercase tracking-[0.2em] text-brand-black/30">FROM</span>
            </div>
            <div className="text-2xl font-black text-brand-black leading-tight mb-1 truncate">{from.city}</div>
            <div className="text-[12px] font-bold text-brand-black/40 truncate">[{from.iata}] {from.name}</div>
            
            <AnimatePresence>
              {showFromMenu && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.97 }}
                  className="absolute top-[calc(100%+12px)] left-0 w-[420px] bg-white rounded-2xl shadow-2xl border border-black/8 z-[200] overflow-hidden"
                >
                  <div className="p-3 border-b border-black/5">
                    <div className="flex items-center gap-2 bg-black/[0.03] rounded-xl px-3 py-2">
                      <Search size={15} className="text-brand-black/30 shrink-0" />
                      <input
                        type="text"
                        placeholder="Search city or airport..."
                        autoFocus
                        className="w-full bg-transparent text-sm font-semibold outline-none placeholder:text-brand-black/30 text-brand-black"
                        onChange={(e) => handleAirportSearch(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="px-3 pt-2 pb-1">
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-brand-black/30">
                      {filteredAirports.length} airports found
                    </span>
                  </div>
                  <div className="max-h-80 overflow-y-auto pb-2">
                    {filteredAirports.map(a => (
                      <div
                        key={a.iata}
                        className="mx-2 mb-0.5 p-3 flex items-center gap-3 hover:bg-brand-red/[0.05] cursor-pointer transition-all rounded-xl group"
                        onClick={() => selectAirport('from', a)}
                      >
                        <div className="w-12 h-10 bg-black/[0.04] group-hover:bg-brand-red/10 rounded-lg flex items-center justify-center shrink-0 transition-colors">
                          <span className="text-[11px] font-black text-brand-black/60 group-hover:text-brand-red tracking-wider transition-colors">{a.iata}</span>
                        </div>
                        <div className="flex flex-col min-w-0">
                          <span className="text-sm font-bold text-brand-black group-hover:text-brand-red transition-colors truncate">{a.name}</span>
                          <span className="text-[11px] font-semibold text-brand-black/40 group-hover:text-brand-red/60 transition-colors">{a.city} &bull; {a.country}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Swap Button */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
            <button 
              onClick={(e) => { e.stopPropagation(); swapAirports(); }}
              className="w-10 h-10 bg-white border border-black/5 rounded-full shadow-xl flex items-center justify-center text-brand-red transition-all hover:scale-110 active:scale-95 hover:shadow-2xl group/swap"
            >
              <ArrowRightLeft size={18} className="transition-transform group-hover/swap:rotate-180 duration-500" />
            </button>
          </div>

          <div className="w-[1px] h-12 bg-black/5 shrink-0" />

          {/* To Section */}
          <div 
            className="flex-1 min-w-0 h-full pr-8 pl-10 cursor-pointer hover:bg-black/[0.02] flex flex-col justify-center transition-colors relative"
            onClick={() => {
              setShowToMenu(!showToMenu);
              setShowFromMenu(false);
              setShowTravelersMenu(false);
            }}
          >
            <div className="flex items-center gap-2 mb-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-brand-red opacity-40" />
              <span className="text-[11px] font-black uppercase tracking-[0.2em] text-brand-black/30">TO</span>
            </div>
            <div className="text-2xl font-black text-brand-black leading-tight mb-1 truncate">{to.city}</div>
            <div className="text-[12px] font-bold text-brand-black/40 truncate">[{to.iata}] {to.name}</div>

            <AnimatePresence>
              {showToMenu && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.97 }}
                  className="absolute top-[calc(100%+12px)] right-0 w-[420px] bg-white rounded-2xl shadow-2xl border border-black/8 z-[200] overflow-hidden"
                >
                  <div className="p-3 border-b border-black/5">
                    <div className="flex items-center gap-2 bg-black/[0.03] rounded-xl px-3 py-2">
                      <Search size={15} className="text-brand-black/30 shrink-0" />
                      <input
                        type="text"
                        placeholder="Search city or airport..."
                        autoFocus
                        className="w-full bg-transparent text-sm font-semibold outline-none placeholder:text-brand-black/30 text-brand-black"
                        onChange={(e) => handleAirportSearch(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="px-3 pt-2 pb-1">
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-brand-black/30">
                      {filteredAirports.length} airports found
                    </span>
                  </div>
                  <div className="max-h-80 overflow-y-auto pb-2">
                    {filteredAirports.map(a => (
                      <div
                        key={a.iata}
                        className="mx-2 mb-0.5 p-3 flex items-center gap-3 hover:bg-brand-red/[0.05] cursor-pointer transition-all rounded-xl group"
                        onClick={() => selectAirport('to', a)}
                      >
                        <div className="w-12 h-10 bg-black/[0.04] group-hover:bg-brand-red/10 rounded-lg flex items-center justify-center shrink-0 transition-colors">
                          <span className="text-[11px] font-black text-brand-black/60 group-hover:text-brand-red tracking-wider transition-colors">{a.iata}</span>
                        </div>
                        <div className="flex flex-col min-w-0">
                          <span className="text-sm font-bold text-brand-black group-hover:text-brand-red transition-colors truncate">{a.name}</span>
                          <span className="text-[11px] font-semibold text-brand-black/40 group-hover:text-brand-red/60 transition-colors">{a.city} &bull; {a.country}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        <div>
          <label className="block text-[11px] font-extrabold uppercase tracking-wider text-brand-black/40 mb-2 ml-1">{tripType === 'round' ? 'Departure - Return' : 'Departure'}</label>
          <div className="bg-white border border-black/10 p-4 rounded-xl font-semibold text-brand-black flex items-center gap-3 transition-all hover:border-brand-red hover:shadow-md">
            {tripType === 'round' ? (
              <DatePicker
                selectsRange={true}
                startDate={startDate}
                endDate={endDate}
                minDate={new Date()}
                onChange={(update) => setDateRange(update)}
                className="w-full outline-none bg-transparent cursor-pointer"
                dateFormat="dd MMM"
                placeholderText="Select range"
              />
            ) : (
              <DatePicker
                selected={departureDate}
                minDate={new Date()}
                onChange={(date) => setDepartureDate(date)}
                className="w-full outline-none bg-transparent cursor-pointer"
                dateFormat="dd MMM, yyyy"
              />
            )}
          </div>
        </div>

        <div className="relative">
          <label className="block text-[11px] font-extrabold uppercase tracking-wider text-brand-black/40 mb-2 ml-1">Travelers</label>
          <div
            className="bg-white border border-black/10 p-4 rounded-xl font-semibold text-brand-black flex items-center justify-between gap-2 cursor-pointer transition-all hover:border-brand-red hover:shadow-md"
            onClick={() => {
              setShowTravelersMenu(!showTravelersMenu);
              setShowFromMenu(false);
              setShowToMenu(false);
            }}
          >
            <span className="truncate">
              {adults + children + infants} Traveler{adults + children + infants > 1 ? 's' : ''}, {travelClass}
            </span>
            <ChevronDown size={14} className="text-brand-black/40" />
          </div>
          <AnimatePresence>
            {showTravelersMenu && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                className="absolute top-full right-0 mt-2 w-80 bg-white rounded-xl shadow-2xl border border-black/5 z-[100] p-6"
              >
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm font-bold text-brand-black">Adults</div>
                      <div className="text-[11px] font-semibold text-brand-black/50">Aged 12+ yrs</div>
                    </div>
                    <div className="flex items-center gap-3">
                      <button
                        className="w-8 h-8 rounded-full border border-black/10 flex items-center justify-center font-bold text-brand-black hover:bg-black/5 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                        onClick={() => setAdults(Math.max(1, adults - 1))}
                        disabled={adults <= 1}
                      >-</button>
                      <span className="w-4 text-center font-bold text-sm">{adults}</span>
                      <button
                        className="w-8 h-8 rounded-full border border-black/10 flex items-center justify-center font-bold text-brand-black hover:bg-black/5 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                        onClick={() => setAdults(adults + 1)}
                        disabled={adults + children + infants >= 9}
                      >+</button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm font-bold text-brand-black">Children</div>
                      <div className="text-[11px] font-semibold text-brand-black/50">Aged 2-12 yrs</div>
                    </div>
                    <div className="flex items-center gap-3">
                      <button
                        className="w-8 h-8 rounded-full border border-black/10 flex items-center justify-center font-bold text-brand-black hover:bg-black/5 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                        onClick={() => setChildren(Math.max(0, children - 1))}
                        disabled={children <= 0}
                      >-</button>
                      <span className="w-4 text-center font-bold text-sm">{children}</span>
                      <button
                        className="w-8 h-8 rounded-full border border-black/10 flex items-center justify-center font-bold text-brand-black hover:bg-black/5 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                        onClick={() => setChildren(children + 1)}
                        disabled={adults + children + infants >= 9}
                      >+</button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm font-bold text-brand-black">Infants</div>
                      <div className="text-[11px] font-semibold text-brand-black/50">Below 2 yrs</div>
                    </div>
                    <div className="flex items-center gap-3">
                      <button
                        className="w-8 h-8 rounded-full border border-black/10 flex items-center justify-center font-bold text-brand-black hover:bg-black/5 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                        onClick={() => setInfants(Math.max(0, infants - 1))}
                        disabled={infants <= 0}
                      >-</button>
                      <span className="w-4 text-center font-bold text-sm">{infants}</span>
                      {/* Infants cannot exceed the number of adults (1 adult per infant) */}
                      <button
                        className="w-8 h-8 rounded-full border border-black/10 flex items-center justify-center font-bold text-brand-black hover:bg-black/5 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                        onClick={() => setInfants(infants + 1)}
                        disabled={infants >= adults || adults + children + infants >= 9}
                      >+</button>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-black/5">
                    <div className="text-[13px] font-bold text-black mb-3 uppercase tracking-wider">Travel Class</div>
                    <div className="grid grid-cols-2 gap-3">
                      {['Economy', 'Premium Economy', 'Business', 'First Class'].map(cls => (
                        <button
                          key={cls}
                          className={`py-2 px-3 rounded-xl text-[14px] font-semibold transition-all flex flex-col items-center justify-center leading-[1.2] min-h-[64px] ${travelClass === cls ? 'bg-[#ce3131] text-white shadow-sm' : 'bg-[#f4f4f4] text-[#333333] hover:bg-[#ebebeb]'}`}
                          onClick={() => setTravelClass(cls)}
                        >
                          {cls === 'Premium Economy' ? (
                            <>
                              <span>Premium</span>
                              <span>Economy</span>
                            </>
                          ) : (
                            cls
                          )}
                        </button>
                      ))}
                    </div>
                  </div>

                  <button
                    className="w-full mt-2 bg-brand-black text-white py-3 rounded-xl text-sm font-bold transition-all hover:bg-brand-red hover:shadow-lg active:scale-95"
                    onClick={() => setShowTravelersMenu(false)}
                  >
                    Apply
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <button
          className="bg-brand-black text-white h-[58px] min-w-[160px] px-8 rounded-xl font-bold flex items-center justify-center gap-3 transition-all active:scale-95 hover:bg-brand-red hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={handleSearch}
          disabled={searching}
        >
          {/* Show a spinning indicator while searching, otherwise the Search icon + label */}
        {searching ? <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1 }}>...</motion.div> : <><Search size={22} /> Search</>}
        </button>
      </div>
    </>
  );
};

export default FlightSearch;
