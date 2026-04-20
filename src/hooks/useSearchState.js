/*
 * Flyanytrip
 * Authors: Gaurav Thakur, Milan Pandavadara
 *
 * Custom hook that manages all shared search state for the app.
 * This includes flight, tour, visa, activity, train, and PNR searches.
 * It also handles fetching airport data and running mock searches.
 */

import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { 
  airports as mockAirports,
  tourDestinations, 
  visaDestinations, 
  activityDestinations, 
  allActivities,
  tours
} from '../utils/mockData';

/**
 * Custom hook that holds all search-related state and actions.
 * Used by SearchContext to share this data across the entire app.
 *
 * @returns An object with all state values, setters, and handler functions
 */
export const useSearchState = () => {
  const navigate = useNavigate();

  // --- Flight search state ---
  const [activeTab, setActiveTab] = useState('flights');
  const [from, setFrom] = useState({ iata: 'DEL', name: 'Indira Gandhi International', city: 'New Delhi', country: 'India' });
  const [to, setTo] = useState({ iata: 'LHR', name: 'Heathrow', city: 'London', country: 'UK' });
  const [searching, setSearching] = useState(false);
  const [results, setResults] = useState([]);
  const [airports, setAirports] = useState(mockAirports);
  const [filteredAirports, setFilteredAirports] = useState(mockAirports);
  const [showFromMenu, setShowFromMenu] = useState(false);
  const [showToMenu, setShowToMenu] = useState(false);
  const [departureDate, setDepartureDate] = useState(new Date());
  const [dateRange, setDateRange] = useState([null, null]);
  const [tripType, setTripType] = useState('round');
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);
  const [travelClass, setTravelClass] = useState('Economy');
  const [showTravelersMenu, setShowTravelersMenu] = useState(false);

  // --- Other tab states (tours, visa, activity, train, pnr) ---
  const [tourDest, setTourDest] = useState('');
  const [showTourMenu, setShowTourMenu] = useState(false);
  const [visaCountry, setVisaCountry] = useState('Thailand');
  const [visaType, setVisaType] = useState('Digital Arrival Card');
  const [showVisaMenu, setShowVisaMenu] = useState(false);
  const [activityCity, setActivityCity] = useState('');
  const [showActivityMenu, setShowActivityMenu] = useState(false);
  const [trainNumber, setTrainNumber] = useState('');
  const [pnrNumber, setPnrNumber] = useState('');

  // Holds any validation error message shown to the user
  const [searchError, setSearchError] = useState('');

  // Fetch live airports from the backend when the app first loads
  useEffect(() => {
    fetchAirports();
  }, []);

  /**
   * Tries to load airport data from the backend API.
   * If the backend is offline, the mock data loaded above is used instead.
   */
  const fetchAirports = async () => {
    try {
      const res = await axios.get('http://localhost:5001/api/airports');
      if (res.data && res.data.length > 0) {
        setAirports(res.data);
        setFilteredAirports(res.data);
      }
    } catch (err) {
      // Backend not available — mock data already loaded as default
    }
  };

  /**
   * Filters the airports list based on the user's typed query.
   * Matches against IATA code, airport name, city, and country.
   *
   * @param query - The text the user typed in the airport search box
   */
  const handleAirportSearch = (query) => {
    const q = query.toLowerCase();
    const filtered = airports.filter(a =>
      a.iata.toLowerCase().includes(q) ||
      a.name.toLowerCase().includes(q) ||
      a.city.toLowerCase().includes(q) ||
      a.country.toLowerCase().includes(q)
    );
    setFilteredAirports(filtered);
  };

  /**
   * Sets the selected airport for either the "from" or "to" field
   * and closes the corresponding dropdown menu.
   *
   * @param type    - Either 'from' or 'to'
   * @param airport - The airport object the user clicked on
   */
  const selectAirport = (type, airport) => {
    if (type === 'from') { 
      setFrom(airport); 
      setShowFromMenu(false); 
    } else { 
      setTo(airport); 
      setShowToMenu(false); 
    }
  };

  /**
   * Swaps the "from" and "to" airports with each other.
   * Uses a temporary variable to avoid overwriting one before the other is saved.
   */
  const swapAirports = () => {
    const temp = from;
    setFrom(to);
    setTo(temp);
  };

  /**
   * Validates the search inputs for the currently active tab,
   * then simulates a search with mock data after a short delay.
   * Navigates to the results page when complete.
   */
  const handleSearch = () => {
    setSearchError('');
    let isValid = true;

    // Validate required fields depending on which tab is active
    if (activeTab === 'flights') {
      if (!from || !to) isValid = false;
      if (tripType === 'round' && (!dateRange[0] || !dateRange[1])) isValid = false;
      if (tripType === 'one' && !departureDate) isValid = false;
    } else if (activeTab === 'tours') {
      if (!tourDest) isValid = false;
    } else if (activeTab === 'visa') {
      if (!visaCountry || !visaType) isValid = false;
    } else if (activeTab === 'activity') {
      if (!activityCity) isValid = false;
    } else if (activeTab === 'train') {
      if (!trainNumber || trainNumber.trim() === '') isValid = false;
    } else if (activeTab === 'pnr') {
      if (!pnrNumber || pnrNumber.trim() === '') isValid = false;
    }

    // Show an error and stop if any required field is missing
    if (!isValid) {
      setSearchError("Fill all the details first");
      return;
    }

    setSearching(true);
    setResults([]);

    // Simulate a network delay of 1.2 seconds before showing mock results
    setTimeout(() => {
      let mockResults = [];
      if (activeTab === 'flights') {
        mockResults = [
          { id: 1, type: 'flight', airline: 'IndiGo', flight: '6E-102', from: from.iata, to: to.iata, time: '10:00 AM', arrival: '07:15 PM', dur: '9h 15m', price: '42,500', class: 'Economy' },
          { id: 2, type: 'flight', airline: 'Air India', flight: 'AI-405', from: from.iata, to: to.iata, time: '02:30 PM', arrival: '11:15 PM', dur: '8h 45m', price: '51,200', class: 'Business Class', promo: 'Corporate Discount' },
          { id: 3, type: 'flight', airline: 'Virgin Atlantic', flight: 'VS-889', from: from.iata, to: to.iata, time: '08:15 PM', arrival: '04:45 AM', dur: '8h 30m', price: '68,900', class: 'Business Class' }
        ];
      } else if (activeTab === 'tours') {
        const query = tourDest.toLowerCase();
        mockResults = tours.filter(t => 
          t.name.toLowerCase().includes(query) || 
          t.country.toLowerCase().includes(query)
        );
        
        // Fallback if no specific tour found
        if (mockResults.length === 0) {
          mockResults = [
            { id: 1, type: 'tour', name: `${tourDest} Quick Getaway`, duration: '3 Days / 2 Nights', price: '28,000', rating: 4.6, img: 'https://images.unsplash.com/photo-1590454316824-006f238290ab?q=80&w=1000&auto=format&fit=crop' }
          ];
        }
      } else if (activeTab === 'visa') {
        mockResults = [{ id: 1, type: 'info', title: 'Visa Assistance Started', desc: `Our experts will contact you for ${visaCountry} ${visaType} Visa shortly.` }];
      } else if (activeTab === 'train') {
        mockResults = [{ id: 1, type: 'status', title: 'Train Status: On Time', desc: `Train ${trainNumber} is currently at Kanpur Central. Expected arrival: 04:30 PM.` }];
      } else if (activeTab === 'pnr') {
        mockResults = [{ id: 1, type: 'status', title: 'PNR Status: Confirmed', desc: `PNR ${pnrNumber} - Seat S4, 22. Passenger: Gaurav Thakur.` }];
      } else if (activeTab === 'activity') {
        // Filter real activity data by the chosen city OR country
        mockResults = allActivities.filter(activity => 
          activity.city === activityCity || 
          activity.country === activityCity
        );
      }
      setResults(mockResults);
      setSearching(false);
      navigate('/results');
    }, 1200);
  };

  // Return all state values and handler functions for use throughout the app
  return {
    activeTab, setActiveTab,
    from, setFrom,
    to, setTo,
    searching,
    results,
    airports,
    filteredAirports,
    showFromMenu, setShowFromMenu,
    showToMenu, setShowToMenu,
    departureDate, setDepartureDate,
    dateRange, setDateRange,
    tripType, setTripType,
    adults, setAdults,
    children, setChildren,
    infants, setInfants,
    travelClass, setTravelClass,
    showTravelersMenu, setShowTravelersMenu,
    tourDest, setTourDest,
    showTourMenu, setShowTourMenu,
    tourDestinations,
    visaCountry, setVisaCountry,
    visaType, setVisaType,
    showVisaMenu, setShowVisaMenu,
    visaDestinations,
    activityCity, setActivityCity,
    showActivityMenu, setShowActivityMenu,
    activityDestinations,
    trainNumber, setTrainNumber,
    pnrNumber, setPnrNumber,
    searchError, setSearchError,
    handleAirportSearch, selectAirport, swapAirports, handleSearch
  };
};
