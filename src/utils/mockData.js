/*
 * Flyanytrip
 * Authors: Gaurav Thakur, Milan Pandavadara
 *
 * This file contains centralized mock data for the application.
 * It includes lists of airports, destinations, activities, and testimonials
 * used for development and demonstration purposes.
 */

/**
 * List of international and domestic airports with IATA codes.
 */
export const airports = [
  // India
  { iata: 'DEL', name: 'Indira Gandhi International', city: 'New Delhi', country: 'India' },
  { iata: 'BOM', name: 'Chhatrapati Shivaji Maharaj International', city: 'Mumbai', country: 'India' },
  { iata: 'BLR', name: 'Kempegowda International', city: 'Bengaluru', country: 'India' },
  { iata: 'MAA', name: 'Chennai International', city: 'Chennai', country: 'India' },
  { iata: 'HYD', name: 'Rajiv Gandhi International', city: 'Hyderabad', country: 'India' },
  { iata: 'CCU', name: 'Netaji Subhas Chandra Bose International', city: 'Kolkata', country: 'India' },
  { iata: 'COK', name: 'Cochin International', city: 'Kochi', country: 'India' },
  { iata: 'PNQ', name: 'Pune Airport', city: 'Pune', country: 'India' },
  { iata: 'AMD', name: 'Sardar Vallabhbhai Patel International', city: 'Ahmedabad', country: 'India' },
  { iata: 'GOI', name: 'Dabolim Airport', city: 'Goa', country: 'India' },
  { iata: 'JAI', name: 'Jaipur International', city: 'Jaipur', country: 'India' },
  { iata: 'LKO', name: 'Chaudhary Charan Singh International', city: 'Lucknow', country: 'India' },
  { iata: 'VNS', name: 'Lal Bahadur Shastri International', city: 'Varanasi', country: 'India' },
  { iata: 'BDQ', name: 'Vadodara Airport', city: 'Vadodara', country: 'India' },
  { iata: 'STV', name: 'Surat Airport', city: 'Surat', country: 'India' },
  // UK & Europe
  { iata: 'LHR', name: 'Heathrow', city: 'London', country: 'UK' },
  { iata: 'LGW', name: 'Gatwick', city: 'London', country: 'UK' },
  { iata: 'CDG', name: 'Charles de Gaulle', city: 'Paris', country: 'France' },
  { iata: 'AMS', name: 'Amsterdam Schiphol', city: 'Amsterdam', country: 'Netherlands' },
  { iata: 'FRA', name: 'Frankfurt am Main', city: 'Frankfurt', country: 'Germany' },
  { iata: 'MUC', name: 'Munich International', city: 'Munich', country: 'Germany' },
  { iata: 'ZUR', name: 'Zurich Airport', city: 'Zurich', country: 'Switzerland' },
  { iata: 'FCO', name: 'Leonardo da Vinci–Fiumicino', city: 'Rome', country: 'Italy' },
  { iata: 'BCN', name: 'Josep Tarradellas Barcelona–El Prat', city: 'Barcelona', country: 'Spain' },
  { iata: 'MAD', name: 'Adolfo Suárez Madrid–Barajas', city: 'Madrid', country: 'Spain' },
  // Middle East
  { iata: 'DXB', name: 'Dubai International', city: 'Dubai', country: 'UAE' },
  { iata: 'AUH', name: 'Abu Dhabi International', city: 'Abu Dhabi', country: 'UAE' },
  { iata: 'DOH', name: 'Hamad International', city: 'Doha', country: 'Qatar' },
  { iata: 'RUH', name: 'King Khalid International', city: 'Riyadh', country: 'Saudi Arabia' },
  { iata: 'MCT', name: 'Muscat International', city: 'Muscat', country: 'Oman' },
  // Asia Pacific
  { iata: 'SIN', name: 'Singapore Changi', city: 'Singapore', country: 'Singapore' },
  { iata: 'BKK', name: 'Suvarnabhumi', city: 'Bangkok', country: 'Thailand' },
  { iata: 'HKG', name: 'Hong Kong International', city: 'Hong Kong', country: 'China' },
  { iata: 'NRT', name: 'Narita International', city: 'Tokyo', country: 'Japan' },
  { iata: 'HND', name: 'Haneda Airport', city: 'Tokyo', country: 'Japan' },
  { iata: 'ICN', name: 'Incheon International', city: 'Seoul', country: 'South Korea' },
  { iata: 'KUL', name: 'Kuala Lumpur International', city: 'Kuala Lumpur', country: 'Malaysia' },
  { iata: 'CGK', name: 'Soekarno–Hatta International', city: 'Jakarta', country: 'Indonesia' },
  { iata: 'DPS', name: 'Ngurah Rai International', city: 'Bali', country: 'Indonesia' },
  { iata: 'HAN', name: 'Noi Bai International', city: 'Hanoi', country: 'Vietnam' },
  { iata: 'SGN', name: 'Tan Son Nhat International', city: 'Ho Chi Minh City', country: 'Vietnam' },
  { iata: 'PEK', name: 'Beijing Capital International', city: 'Beijing', country: 'China' },
  { iata: 'PVG', name: 'Shanghai Pudong International', city: 'Shanghai', country: 'China' },
  // USA & Canada
  { iata: 'JFK', name: 'John F. Kennedy International', city: 'New York', country: 'USA' },
  { iata: 'LAX', name: 'Los Angeles International', city: 'Los Angeles', country: 'USA' },
  { iata: 'ORD', name: "O'Hare International", city: 'Chicago', country: 'USA' },
  { iata: 'SFO', name: 'San Francisco International', city: 'San Francisco', country: 'USA' },
  { iata: 'MIA', name: 'Miami International', city: 'Miami', country: 'USA' },
  { iata: 'YYZ', name: 'Toronto Pearson International', city: 'Toronto', country: 'Canada' },
  { iata: 'YVR', name: 'Vancouver International', city: 'Vancouver', country: 'Canada' },
  // Australia
  { iata: 'SYD', name: 'Sydney Kingsford Smith', city: 'Sydney', country: 'Australia' },
  { iata: 'MEL', name: 'Melbourne Airport', city: 'Melbourne', country: 'Australia' },
  // Africa
  { iata: 'JNB', name: 'O.R. Tambo International', city: 'Johannesburg', country: 'South Africa' },
  { iata: 'CAI', name: 'Cairo International', city: 'Cairo', country: 'Egypt' },
];

export const tourDestinations = ['Thailand', 'Vietnam', 'Dubai', 'Singapore', 'India', 'Oman', 'Bali'];
export const visaDestinations = ['Thailand', 'Vietnam', 'Dubai', 'Singapore', 'Oman', 'Bali'];
export const activityDestinations = ['Thailand', 'Vietnam', 'Dubai', 'Singapore', 'Vadodara', 'Oman', 'Bali'];

export const allActivities = [
  // Thailand
  {
    id: 1, type: 'activity', name: 'Floating Market & Railway Track Tour', city: 'Thailand', price: '3,800', rating: 4.8, tag: 'Cultural Experience',
    desc: 'Visit the famous Maeklong Railway Market and Damnoen Saduak Floating Market.',
    longDesc: 'Experience the vibrant colors and daily life of Thailand with this immersive tour. Start at the Maeklong Railway Market, where vendors incredibly pull back their stalls as trains pass through. Then, navigate the maze-like canals of Damnoen Saduak Floating Market on a traditional longtail boat, sampling local fruits and street food right from the water.',
    img: '/assets/activities/floating market.jpg',
    gallery: ['/assets/activities/floating market.jpg', 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a', 'https://images.unsplash.com/photo-1540333674149-6234f9640822']
  },
  {
    id: 8, type: 'activity', name: 'Phi Phi Islands Speedboat Tour', city: 'Thailand', price: '4,500', rating: 4.9, tag: 'Nature & Adventure',
    desc: 'Explore the stunning Maya Bay, Monkey Beach, and snorkel in crystal-clear waters.',
    longDesc: 'Discover the natural paradise of the Phi Phi Islands. This speedboat tour takes you to the iconic Maya Bay (made famous by "The Beach"), the playful Monkey Beach, and turquoise lagoons perfect for snorkeling. Witness dramatic limestone cliffs rising from the sea and enjoy a premium lunch on the sand.',
    img: '/assets/activities/phi phi islands.jpg',
    gallery: ['/assets/activities/phi phi islands.jpg', 'https://images.unsplash.com/photo-1528181304800-259b08bb73d5', 'https://images.unsplash.com/photo-1537996194471-e657df975ab4']
  },
  // Vietnam
  {
    id: 2, type: 'activity', name: 'Ha Long Bay Luxury Day Cruise', city: 'Vietnam', price: '5,500', rating: 4.9, tag: 'Nature & Adventure',
    desc: 'Sail through the iconic limestone karsts of Ha Long Bay with a seafood lunch included.',
    longDesc: 'A UNESCO World Heritage site, Ha Long Bay is a must-see. This luxury day cruise features a journey through thousands of emerald-green islands and towering limestone pillars. Explore hidden caves, enjoy a multi-course seafood lunch on deck, and kayak through the serene waters of this geological marvel.',
    img: 'https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=1000&auto=format&fit=crop',
    gallery: ['https://images.unsplash.com/photo-1528127269322-539801943592', 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a', 'https://images.unsplash.com/photo-1506744038136-46273834b3fb']
  },
  {
    id: 9, type: 'activity', name: 'Cu Chi Tunnels Half-Day Tour', city: 'Vietnam', price: '1,800', rating: 4.7, tag: 'History',
    desc: 'Discover the vast underground network used during the Vietnam War.',
    longDesc: 'Step into history at the Cu Chi Tunnels. Explore the 250km network of narrow underground passageways that played a strategic role during the Vietnam War. Learn about the ingenuity and resilience of the people who lived and fought here, and see the various traps and hidden doors used for survival.',
    img: '/assets/activities/Cu Chi Tunnels.jpg',
    gallery: ['/assets/activities/Cu Chi Tunnels.jpg', 'https://images.unsplash.com/photo-1559592413-7a912e75e9f1', 'https://images.unsplash.com/photo-1528127269322-539801943592']
  },
  // Dubai
  {
    id: 3, type: 'activity', name: 'Burj Khalifa At The Top (Levels 124 & 125)', city: 'Dubai', price: '3,200', rating: 4.7, tag: 'Must Visit',
    desc: 'Witness breathtaking views of Dubai from the world\'s tallest building.',
    longDesc: 'Soar to the heights of modern engineering. "At The Top" Burj Khalifa offers panoramic views of the Dubai skyline, desert, and ocean from levels 124 and 125. Use the high-powered telescopes to see distant landmarks and learn more about the construction of this world-record-breaking skyscraper.',
    img: 'https://images.unsplash.com/photo-1582672060674-bc2bd808a8b5?q=80&w=1000&auto=format&fit=crop',
    gallery: ['https://images.unsplash.com/photo-1582672060674-bc2bd808a8b5', '/assets/activities/dubai.png', 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c']
  },
  {
    id: 10, type: 'activity', name: 'Premium Red Dunes Camel Safari', city: 'Dubai', price: '4,500', rating: 4.8, tag: 'Adventure',
    desc: 'Experience dune bashing, camel riding, and a traditional BBQ dinner in the desert.',
    longDesc: 'Embark on a quintessentially Arabian adventure. This premium safari includes thrilling dune bashing in a 4x4, peaceful camel treks across the red sands, and sunset photo opportunities. The evening concludes at a traditional Bedouin camp with live performances and a gourmet BBQ dinner under the stars.',
    img: '/assets/activities/Premium Red Dunes Camel Safari.jpg',
    gallery: ['/assets/activities/Premium Red Dunes Camel Safari.jpg', '/assets/activities/dubai.png', 'https://images.unsplash.com/photo-1451337516015-6b6e9a44a8a3']
  },
  // Vadodara
  {
    id: 4, type: 'activity', name: 'Laxmi Vilas Palace Heritage Tour', city: 'Vadodara', price: '1,200', rating: 4.9, tag: 'History',
    desc: 'Explore the grand architecture and royal history of the world\'s largest private residence.',
    longDesc: 'Discover the opulence of the Gaekwad dynasty. The Laxmi Vilas Palace, still the residence of the royal family, is four times the size of Buckingham Palace. Marvel at the Indo-Saracenic architecture, the intricate mosaic floors, the collection of armor and sculptures, and the lush gardens surrounding the estate.',
    img: '/assets/activities/Laxmi Vilas Palace.jpg',
    gallery: ['/assets/activities/Laxmi Vilas Palace.jpg', '/assets/activities/vadodara.png', 'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0']
  },
  {
    id: 11, type: 'activity', name: 'Statue of Unity Day Trip', city: 'Vadodara', price: '2,500', rating: 4.9, tag: 'Culture & Sightseeing',
    desc: 'Visit the world\'s tallest statue dedicated to the Iron Man of India, Sardar Vallabhbhai Patel.',
    longDesc: 'A tribute to the unifier of India. Standing at 182 meters, the Statue of Unity is a marvel of engineering. This day trip includes access to the viewing gallery at the statue\'s chest, a visit to the Valley of Flowers, the Sardar Sarovar Dam, and a spectacular laser light and sound show in the evening.',
    img: '/assets/activities/SOUT.jpg',
    gallery: ['/assets/activities/SOUT.jpg', '/assets/activities/vadodara.png', 'https://images.unsplash.com/photo-1621217646197-29007c08bca0']
  },
  // Singapore
  {
    id: 5, type: 'activity', name: 'Gardens by the Bay Entry Ticket', city: 'Singapore', price: '2,100', rating: 4.8, tag: 'Nature',
    desc: 'Wander through the futuristic Supertrees and the stunning Cloud Forest conservatory.',
    longDesc: 'Step into a world of botanical wonder. Gardens by the Bay combines state-of-the-art technology with lush greenery. Your ticket includes access to the Flower Dome, the Cloud Forest with its indoor waterfall, and the iconic Supertree Grove. It\'s a futuristic oasis in the heart of the city.',
    img: '/assets/activities/Gardens by the Bay.jpg',
    gallery: ['/assets/activities/Gardens by the Bay.jpg', '/assets/activities/skydeck.png', 'https://images.unsplash.com/photo-1525625293386-3fb0ad7c1fe6']
  },
  {
    id: 12, type: 'activity', name: 'Universal Studios Singapore', city: 'Singapore', price: '5,800', rating: 4.8, tag: 'Theme Park',
    desc: 'Experience cutting-edge rides, shows, and attractions based on your favorite blockbuster films.',
    longDesc: 'Jump into the action at Universal Studios Singapore. With seven themed zones based on Hollywood favorites like Transformers, Jurassic Park, and Shrek, it offers thrills for all ages. Enjoy spectacular shows, meet your favorite characters, and experience world-class roller coasters and immersive digital rides.',
    img: '/assets/activities/Universal Studios Singapore.jpg',
    gallery: ['/assets/activities/Universal Studios Singapore.jpg', '/assets/activities/skydeck.png', 'https://images.unsplash.com/photo-1554284126-aa88f22d8b74']
  },
  // Oman
  {
    id: 6, type: 'activity', name: 'Wadi Shab & Bimmah Sinkhole Tour', city: 'Oman', price: '6,200', rating: 4.8, tag: 'Adventure',
    desc: 'Hike through breathtaking wadis and swim in the emerald waters of Bimmah Sinkhole.',
    longDesc: 'Explore the natural wonders of Oman. Hike through the stunning Wadi Shab with its emerald pools and hidden waterfalls. Then, visit the Bimmah Sinkhole, a crystal-clear turquoise pool formed by geological subsidence, perfect for a refreshing swim in a unique setting.',
    img: '/assets/activities/Wadi Shab & Bimmah Sinkhole Tour.jpg',
    gallery: ['/assets/activities/Wadi Shab & Bimmah Sinkhole Tour.jpg', 'https://images.unsplash.com/photo-1552554650-dc20ce13b632', 'https://images.unsplash.com/photo-1616035287790-255d644781bb']
  },
  {
    id: 13, type: 'activity', name: 'Wahiba Sands Desert Safari', city: 'Oman', price: '7,500', rating: 4.9, tag: 'Adventure',
    desc: 'Explore the rolling sand dunes of Wahiba Sands followed by a dip in Wadi Bani Khalid.',
    longDesc: 'Experience the raw beauty of the Omani desert. Journey deep into the Wahiba Sands to witness the shifting patterns of the dunes. Meet a local Bedouin family and learn about their traditional way of life. Complement the desert heat with a dip in the pristine Wadi Bani Khalid, a natural oasis with flowing water year-round.',
    img: '/assets/activities/Wahiba Sands Desert Safari.jpg',
    gallery: ['/assets/activities/Wahiba Sands Desert Safari.jpg', 'https://images.unsplash.com/photo-1551043047-1d2adf00f3fe', 'https://images.unsplash.com/photo-1616035287790-255d644781bb']
  },
  // Bali
  {
    id: 7, type: 'activity', name: 'Ubud Monkey Forest & Swing', city: 'Bali', price: '2,800', rating: 4.7, tag: 'Culture & Nature',
    desc: 'Interact with macaques in lush forests and experience the iconic Bali jungle swing.',
    longDesc: 'Immerse yourself in the spiritual heart of Bali. Explore the sacred Ubud Monkey Forest, home to hundreds of long-tailed macaques and ancient temple ruins. Then, feel the adrenaline as you swing over the lush Tegalalang rice terraces, capturing that perfect iconic Bali photo.',
    img: '/assets/activities/Ubud Monkey Forest & Swing.jpg',
    gallery: ['/assets/activities/Ubud Monkey Forest & Swing.jpg', 'https://images.unsplash.com/photo-1537996194471-e657df975ab4', 'https://images.unsplash.com/photo-1506744038136-46273834b3fb']
  },
  {
    id: 14, type: 'activity', name: 'Mount Batur Sunrise Trek', city: 'Bali', price: '3,500', rating: 4.8, tag: 'Adventure',
    desc: 'Hike an active volcano under the stars and witness a breathtaking sunrise from the summit.',
    longDesc: 'A truly rewarding physical and visual experience. Hike the active Mount Batur volcano under the starlight to reach the summit just before dawn. As the sun rises over the horizon, you\'ll be treated to spectacular views of Lake Batur and the surrounding volcanic landscapes, all while enjoying a light breakfast cooked with volcanic steam.',
    img: '/assets/activities/Mount Batur Sunrise Trek.jpg',
    gallery: ['/assets/activities/Mount Batur Sunrise Trek.jpg', 'https://images.unsplash.com/photo-1512100256448-a550d1736000', 'https://images.unsplash.com/photo-1537996194471-e657df975ab4']
  }
];

export const trendingDestinations = [
  { name: 'Vietnam', price: '48,000', img: 'https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=1000&auto=format&fit=crop' },
  { name: 'Bali', price: '42,500', img: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1000&auto=format&fit=crop' },
  { name: 'Oman', price: '85,000', img: 'https://images.unsplash.com/photo-1616035287790-255d644781bb?q=80&w=1000&auto=format&fit=crop' },
  { name: 'Thailand', price: '38,900', img: 'https://images.unsplash.com/photo-1523730205978-59fd1b2965e3?q=80&w=1000&auto=format&fit=crop' },
  { name: 'Singapore', price: '52,000', img: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=1000&auto=format&fit=crop' }
];

export const popularActivities = [
  { name: 'Heritage Walk', city: 'Vadodara', price: '1,200', tag: 'Cultural', img: '/assets/activities/vadodara.png' },
  { name: 'Desert Safari', city: 'Dubai', price: '4,500', tag: 'Adventure', img: '/assets/activities/dubai.png' },
  { name: 'Island Hopping', city: 'Thailand', price: '3,800', tag: 'Leisure', img: '/assets/activities/island_hopping.png' },
  { name: 'Skydeck Views', city: 'Singapore', price: '2,900', tag: 'Must Visit', img: '/assets/activities/skydeck.png' }
];

export const testimonials = [
  { name: "Ananya Sharma", role: "Software Engineer, Google", text: "FlyAnyTrip made my international work trip completely seamless. From visas to flights, they handled everything with absolute professional precision.", rating: 5 },
  { name: "Rahul Malhotra", role: "CEO, TechSphere", text: "The corporate travel services are unmatched. They understand the value of time and provide a level of service that is truly premium.", rating: 5 },
  { name: "Priya Patel", role: "Travel Enthusiast", text: "I've used many platforms, but the curated tours here are something else. They find those hidden gems that make every trip truly unforgettable.", rating: 4.9 }
];

export const partners = [
  { name: "AIR INDIA", logo: "https://www.logo.wine/a/logo/Air_India/Air_India-Logo.wine.svg" },
  { name: "LUFTHANSA", logo: "https://www.logo.wine/a/logo/Lufthansa/Lufthansa-Logo.wine.svg" },
  { name: "SINGAPORE AIRLINES", logo: "https://www.logo.wine/a/logo/Singapore_Airlines/Singapore_Airlines-Logo.wine.svg" },
  { name: "UNITED", logo: "https://www.logo.wine/a/logo/United_Airlines/United_Airlines-Logo.wine.svg" },
  { name: "EMIRATES", logo: "https://www.logo.wine/a/logo/Emirates_(airline)/Emirates_(airline)-Logo.wine.svg" },
  { name: "VISTARA", logo: "https://www.logo.wine/a/logo/Vistara/Vistara-Logo.wine.svg" },
  { name: "SWISS", logo: "https://www.logo.wine/a/logo/Swiss_International_Air_Lines/Swiss_International_Air_Lines-Logo.wine.svg" },
  { name: "THAI AIRWAYS", logo: "https://www.logo.wine/a/logo/Thai_Airways_International/Thai_Airways_International-Logo.wine.svg" },
  { name: "TURKISH", logo: "https://www.logo.wine/a/logo/Turkish_Airlines/Turkish_Airlines-Logo.wine.svg" },
  { name: "AIR CANADA", logo: "https://www.logo.wine/a/logo/Air_Canada/Air_Canada-Logo.wine.svg" },
  { name: "ANA", logo: "https://www.logo.wine/a/logo/All_Nippon_Airways/All_Nippon_Airways-Logo.wine.svg" },
  { name: "STAR ALLIANCE", logo: "https://www.logo.wine/a/logo/Star_Alliance/Star_Alliance-Logo.wine.svg" }
];
