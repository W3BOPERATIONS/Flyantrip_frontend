import { useState, useEffect } from 'react';
import axios from 'axios';
import { 
  tourDestinations, 
  visaDestinations, 
  activityDestinations, 
  allActivities 
} from '../utils/mockData';

export const useSearchState = () => {
  const [activeTab, setActiveTab] = useState('flights');
  const [from, setFrom] = useState({ iata: 'DEL', name: 'Indira Gandhi International', city: 'New Delhi', country: 'India' });
  const [to, setTo] = useState({ iata: 'LHR', name: 'Heathrow', city: 'London', country: 'UK' });
  const [searching, setSearching] = useState(false);
  const [results, setResults] = useState([]);
  const [airports, setAirports] = useState([]);
  const [filteredAirports, setFilteredAirports] = useState([]);
  const [showFromMenu, setShowFromMenu] = useState(false);
  const [showToMenu, setShowToMenu] = useState(false);
  const [departureDate, setDepartureDate] = useState(new Date());
  const [dateRange, setDateRange] = useState([new Date(), null]);
  const [tripType, setTripType] = useState('round');
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);
  const [travelClass, setTravelClass] = useState('Economy');
  const [showTravelersMenu, setShowTravelersMenu] = useState(false);

  // New States for other tabs
  const [tourDest, setTourDest] = useState('Thailand');
  const [showTourMenu, setShowTourMenu] = useState(false);
  const [visaCountry, setVisaCountry] = useState('Thailand');
  const [visaType, setVisaType] = useState('Digital Arrival Card');
  const [showVisaMenu, setShowVisaMenu] = useState(false);
  const [activityCity, setActivityCity] = useState('Thailand');
  const [showActivityMenu, setShowActivityMenu] = useState(false);
  const [trainNumber, setTrainNumber] = useState('');
  const [pnrNumber, setPnrNumber] = useState('');

  useEffect(() => {
    fetchAirports();
  }, []);

  const fetchAirports = async () => {
    try {
      const res = await axios.get('http://localhost:5001/api/airports');
      setAirports(res.data);
      setFilteredAirports(res.data);
    } catch (err) {
      console.error('API Error:', err);
    }
  };

  const handleAirportSearch = (query) => {
    const filtered = airports.filter(a =>
      a.iata.toLowerCase().includes(query.toLowerCase()) ||
      a.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredAirports(filtered);
  };

  const selectAirport = (type, airport) => {
    if (type === 'from') { 
      setFrom(airport); 
      setShowFromMenu(false); 
    } else { 
      setTo(airport); 
      setShowToMenu(false); 
    }
  };

  const swapAirports = () => {
    const temp = from;
    setFrom(to);
    setTo(temp);
  };

  const handleSearch = () => {
    setSearching(true);
    setResults([]);

    setTimeout(() => {
      let mockResults = [];
      if (activeTab === 'flights') {
        mockResults = [
          { id: 1, type: 'flight', airline: 'IndiGo', flight: '6E-102', from: from.iata, to: to.iata, time: '10:00 AM', arrival: '07:15 PM', dur: '9h 15m', price: '42,500', class: 'Economy' },
          { id: 2, type: 'flight', airline: 'Air India', flight: 'AI-405', from: from.iata, to: to.iata, time: '02:30 PM', arrival: '11:15 PM', dur: '8h 45m', price: '51,200', class: 'Business Class', promo: 'Corporate Discount' },
          { id: 3, type: 'flight', airline: 'Virgin Atlantic', flight: 'VS-889', from: from.iata, to: to.iata, time: '08:15 PM', arrival: '04:45 AM', dur: '8h 30m', price: '68,900', class: 'Business Class' }
        ];
      } else if (activeTab === 'tours') {
        const dest = tourDest || 'Thailand';
        mockResults = [
          { id: 1, type: 'tour', name: `${dest} Quick Getaway`, duration: '3 Days / 2 Nights', price: '25,000', rating: 4.6, img: 'https://images.unsplash.com/photo-1590454316824-006f238290ab?q=80&w=1000&auto=format&fit=crop' },
          { id: 2, type: 'tour', name: `Classic ${dest} Experience`, duration: '5 Days / 4 Nights', price: '42,500', rating: 4.8, img: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=1000&auto=format&fit=crop' },
          { id: 3, type: 'tour', name: `Ultimate ${dest} Explorer`, duration: '8 Days / 7 Nights', price: '68,000', rating: 4.9, img: 'https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=1000&auto=format&fit=crop' }
        ];
      } else if (activeTab === 'visa') {
        mockResults = [{ id: 1, type: 'info', title: 'Visa Assistance Started', desc: `Our experts will contact you for ${visaCountry} ${visaType} Visa shortly.` }];
      } else if (activeTab === 'train') {
        mockResults = [{ id: 1, type: 'status', title: 'Train Status: On Time', desc: `Train ${trainNumber} is currently at Kanpur Central. Expected arrival: 04:30 PM.` }];
      } else if (activeTab === 'pnr') {
        mockResults = [{ id: 1, type: 'status', title: 'PNR Status: Confirmed', desc: `PNR ${pnrNumber} - Seat S4, 22. Passenger: Gaurav Thakur.` }];
      } else if (activeTab === 'activity') {
        mockResults = allActivities.filter(activity => activity.city === activityCity);
      }
      setResults(mockResults);
      setSearching(false);
      setTimeout(() => {
        document.getElementById('search-results-section')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }, 1200);
  };

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
    handleAirportSearch, selectAirport, swapAirports, handleSearch
  };
};
