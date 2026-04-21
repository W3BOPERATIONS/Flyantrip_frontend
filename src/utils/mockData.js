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
    id: 1, type: 'activity', name: 'Floating Market & Railway Track Tour', city: 'Bangkok', country: 'Thailand', price: '3,800', rating: 4.8, tag: 'Cultural Experience',
    desc: 'Visit the famous Maeklong Railway Market and Damnoen Saduak Floating Market.',
    longDesc: 'Experience the vibrant colors and daily life of Thailand with this immersive tour. Start at the Maeklong Railway Market, where vendors incredibly pull back their stalls as trains pass through. Then, navigate the maze-like canals of Damnoen Saduak Floating Market on a traditional longtail boat, sampling local fruits and street food right from the water.',
    img: '/assets/activities/floating market.jpg',
    gallery: ['/assets/activities/floating market.jpg', 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a', 'https://images.unsplash.com/photo-1540333674149-6234f9640822']
  },
  {
    id: 8, type: 'activity', name: 'Phi Phi Islands Speedboat Tour', city: 'Phuket', country: 'Thailand', price: '4,500', rating: 4.9, tag: 'Nature & Adventure',
    desc: 'Explore the stunning Maya Bay, Monkey Beach, and snorkel in crystal-clear waters.',
    longDesc: 'Discover the natural paradise of the Phi Phi Islands. This speedboat tour takes you to the iconic Maya Bay (made famous by "The Beach"), the playful Monkey Beach, and turquoise lagoons perfect for snorkeling. Witness dramatic limestone cliffs rising from the sea and enjoy a premium lunch on the sand.',
    img: '/assets/activities/phi phi islands.jpg',
    gallery: ['/assets/activities/phi phi islands.jpg', 'https://images.unsplash.com/photo-1528181304800-259b08bb73d5', 'https://images.unsplash.com/photo-1537996194471-e657df975ab4']
  },
  // Vietnam
  {
    id: 2, type: 'activity', name: 'Ha Long Bay Luxury Day Cruise', city: 'Vietnam', country: 'Vietnam', price: '5,500', rating: 4.9, tag: 'Nature & Adventure',
    desc: 'Sail through the iconic limestone karsts of Ha Long Bay with a seafood lunch included.',
    longDesc: 'A UNESCO World Heritage site, Ha Long Bay is a must-see. This luxury day cruise features a journey through thousands of emerald-green islands and towering limestone pillars. Explore hidden caves, enjoy a multi-course seafood lunch on deck, and kayak through the serene waters of this geological marvel.',
    img: '/assets/destinations/Vietnam/marina-lobato-kG7pOXbBfNs-unsplash.jpg',
    gallery: ['/assets/destinations/Vietnam/marina-lobato-kG7pOXbBfNs-unsplash.jpg', '/assets/destinations/Vietnam/georgios-domouchtsidis-CIMx-ymiuiI-unsplash.jpg']
  },
  {
    id: 9, type: 'activity', name: 'Cu Chi Tunnels Half-Day Tour', city: 'Vietnam', country: 'Vietnam', price: '1,800', rating: 4.7, tag: 'History',
    desc: 'Discover the vast underground network used during the Vietnam War.',
    longDesc: 'Step into history at the Cu Chi Tunnels. Explore the 250km network of narrow underground passageways that played a strategic role during the Vietnam War. Learn about the ingenuity and resilience of the people who lived and fought here, and see the various traps and hidden doors used for survival.',
    img: '/assets/activities/Cu Chi Tunnels.jpg',
    gallery: ['/assets/activities/Cu Chi Tunnels.jpg', '/assets/destinations/Vietnam/simon-van-rompaey-WRvasYD88eM-unsplash.jpg']
  },
  // Dubai
  {
    id: 3, type: 'activity', name: 'Burj Khalifa At The Top (Levels 124 & 125)', city: 'Dubai', country: 'United Arab Emirates', price: '3,200', rating: 4.7, tag: 'Must Visit',
    desc: 'Witness breathtaking views of Dubai from the world\'s tallest building.',
    longDesc: 'Soar to the heights of modern engineering. "At The Top" Burj Khalifa offers panoramic views of the Dubai skyline, desert, and ocean from levels 124 and 125. Use the high-powered telescopes to see distant landmarks and learn more about the construction of this world-record-breaking skyscraper.',
    img: 'https://images.unsplash.com/photo-1582672060674-bc2bd808a8b5?q=80&w=1000&auto=format&fit=crop',
    gallery: ['https://images.unsplash.com/photo-1582672060674-bc2bd808a8b5', '/assets/activities/dubai.png', 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c']
  },
  {
    id: 10, type: 'activity', name: 'Premium Red Dunes Camel Safari', city: 'Dubai', country: 'United Arab Emirates', price: '4,500', rating: 4.8, tag: 'Adventure',
    desc: 'Experience dune bashing, camel riding, and a traditional BBQ dinner in the desert.',
    longDesc: 'Embark on a quintessentially Arabian adventure. This premium safari includes thrilling dune bashing in a 4x4, peaceful camel treks across the red sands, and sunset photo opportunities. The evening concludes at a traditional Bedouin camp with live performances and a gourmet BBQ dinner under the stars.',
    img: '/assets/activities/Premium Red Dunes Camel Safari.jpg',
    gallery: ['/assets/activities/Premium Red Dunes Camel Safari.jpg', '/assets/activities/dubai.png', 'https://images.unsplash.com/photo-1451337516015-6b6e9a44a8a3']
  },
  // Vadodara
  {
    id: 4, type: 'activity', name: 'Laxmi Vilas Palace', city: 'Vadodara', country: 'India', price: '1,200', rating: 4.9, tag: 'Historic landmark',
    desc: 'Explore the grand architecture and royal history of the world\'s largest private residence.',
    longDesc: 'Discover the opulence of the Gaekwad dynasty. The Laxmi Vilas Palace, still the residence of the royal family, is four times the size of Buckingham Palace. Marvel at the Indo-Saracenic architecture, the intricate mosaic floors, the collection of armor and sculptures, and the lush gardens surrounding the estate.',
    img: '/assets/activities/Laxmi Vilas Palace.jpg',
    gallery: [
      '/assets/activities/Laxmi Vilas Palace.jpg',
      '/assets/activities/vadodara.png',
      'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0',
      'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0'
    ],
    hours: '09:30–17:00',
    sightseeingTime: '1–3 hours',
    address: 'J N Marg, Moti Baug, Vadodara, Gujarat 390001, India',
    phone: '+91-7227939902',
    detailedRatings: [
      { score: '3.9', type: 'points', count: '2 Review' },
      { score: '1.5/5', type: 'points', icon: 'info' },
      { score: '5/5', type: 'tripadvisor', count: '1,343 review' }
    ]
  },
  {
    id: 11, type: 'activity', name: 'Statue of Unity Day Trip', city: 'Vadodara', country: 'India', price: '2,500', rating: 4.9, tag: 'Culture & Sightseeing',
    desc: 'Visit the world\'s tallest statue dedicated to the Iron Man of India, Sardar Vallabhbhai Patel.',
    longDesc: 'A tribute to the unifier of India. Standing at 182 meters, the Statue of Unity is a marvel of engineering. This day trip includes access to the viewing gallery at the statue\'s chest, a visit to the Valley of Flowers, the Sardar Sarovar Dam, and a spectacular laser light and sound show in the evening.',
    img: '/assets/activities/SOUT.jpg',
    gallery: [
      '/assets/activities/SOUT.jpg',
      '/assets/activities/vadodara.png',
      'https://images.unsplash.com/photo-1621217646197-29007c08bca0'
    ],
    hours: '08:00–18:00 (Closed on Mondays)',
    sightseeingTime: '4–6 hours',
    address: 'Sardar Sarovar Dam, Kevadia, Gujarat 393151, India',
    phone: '+91-18002336600'
  },
  // Singapore
  {
    id: 5, type: 'activity', name: 'Gardens by the Bay Entry Ticket', city: 'Singapore', country: 'Singapore', price: '2,100', rating: 4.8, tag: 'Nature',
    desc: 'Wander through the futuristic Supertrees and the stunning Cloud Forest conservatory.',
    longDesc: 'Step into a world of botanical wonder. Gardens by the Bay combines state-of-the-art technology with lush greenery. Your ticket includes access to the Flower Dome, the Cloud Forest with its indoor waterfall, and the iconic Supertree Grove. It\'s a futuristic oasis in the heart of the city.',
    img: '/assets/activities/Gardens by the Bay.jpg',
    gallery: ['/assets/activities/Gardens by the Bay.jpg', '/assets/activities/skydeck.png', 'https://images.unsplash.com/photo-1525625293386-3fb0ad7c1fe6']
  },
  {
    id: 12, type: 'activity', name: 'Universal Studios Singapore', city: 'Singapore', country: 'Singapore', price: '5,800', rating: 4.8, tag: 'Theme Park',
    desc: 'Experience cutting-edge rides, shows, and attractions based on your favorite blockbuster films.',
    longDesc: 'Jump into the action at Universal Studios Singapore. With seven themed zones based on Hollywood favorites like Transformers, Jurassic Park, and Shrek, it offers thrills for all ages. Enjoy spectacular shows, meet your favorite characters, and experience world-class roller coasters and immersive digital rides.',
    img: '/assets/activities/Universal Studios Singapore.jpg',
    gallery: ['/assets/activities/Universal Studios Singapore.jpg', '/assets/activities/skydeck.png', 'https://images.unsplash.com/photo-1554284126-aa88f22d8b74']
  },
  // Oman
  {
    id: 6, type: 'activity', name: 'Wadi Shab & Bimmah Sinkhole Tour', city: 'Oman', country: 'Oman', price: '6,200', rating: 4.8, tag: 'Adventure',
    desc: 'Hike through breathtaking wadis and swim in the emerald waters of Bimmah Sinkhole.',
    longDesc: 'Explore the natural wonders of Oman. Hike through the stunning Wadi Shab with its emerald pools and hidden waterfalls. Then, visit the Bimmah Sinkhole, a crystal-clear turquoise pool formed by geological subsidence, perfect for a refreshing swim in a unique setting.',
    img: '/assets/activities/Wadi Shab & Bimmah Sinkhole Tour.jpg',
    gallery: ['/assets/activities/Wadi Shab & Bimmah Sinkhole Tour.jpg', 'https://images.unsplash.com/photo-1552554650-dc20ce13b632', 'https://images.unsplash.com/photo-1616035287790-255d644781bb']
  },
  {
    id: 13, type: 'activity', name: 'Wahiba Sands Desert Safari', city: 'Oman', country: 'Oman', price: '7,500', rating: 4.9, tag: 'Adventure',
    desc: 'Explore the rolling sand dunes of Wahiba Sands followed by a dip in Wadi Bani Khalid.',
    longDesc: 'Experience the raw beauty of the Omani desert. Journey deep into the Wahiba Sands to witness the shifting patterns of the dunes. Meet a local Bedouin family and learn about their traditional way of life. Complement the desert heat with a dip in the pristine Wadi Bani Khalid, a natural oasis with flowing water year-round.',
    img: '/assets/activities/Wahiba Sands Desert Safari.jpg',
    gallery: ['/assets/activities/Wahiba Sands Desert Safari.jpg', 'https://images.unsplash.com/photo-1551043047-1d2adf00f3fe', 'https://images.unsplash.com/photo-1616035287790-255d644781bb']
  },
  // Bali
  {
    id: 7, type: 'activity', name: 'Ubud Monkey Forest & Swing', city: 'Bali', country: 'Indonesia', price: '2,800', rating: 4.7, tag: 'Culture & Nature',
    desc: 'Interact with macaques in lush forests and experience the iconic Bali jungle swing.',
    longDesc: 'Immerse yourself in the spiritual heart of Bali. Explore the sacred Ubud Monkey Forest, home to hundreds of long-tailed macaques and ancient temple ruins. Then, feel the adrenaline as you swing over the lush Tegalalang rice terraces, capturing that perfect iconic Bali photo.',
    img: '/assets/activities/Ubud Monkey Forest & Swing.jpg',
    gallery: ['/assets/activities/Ubud Monkey Forest & Swing.jpg', 'https://images.unsplash.com/photo-1537996194471-e657df975ab4', 'https://images.unsplash.com/photo-1506744038136-46273834b3fb']
  },
  {
    id: 14, type: 'activity', name: 'Mount Batur Sunrise Trek', city: 'Bali', country: 'Indonesia', price: '3,500', rating: 4.8, tag: 'Adventure',
    desc: 'Hike an active volcano under the stars and witness a breathtaking sunrise from the summit.',
    longDesc: 'A truly rewarding physical and visual experience. Hike the active Mount Batur volcano under the starlight to reach the summit just before dawn. As the sun rises over the horizon, you\'ll be treated to spectacular views of Lake Batur and the surrounding volcanic landscapes, all while enjoying a light breakfast cooked with volcanic steam.',
    img: '/assets/activities/Mount Batur Sunrise Trek.jpg',
    gallery: ['/assets/activities/Mount Batur Sunrise Trek.jpg', 'https://images.unsplash.com/photo-1512100256448-a550d1736000', 'https://images.unsplash.com/photo-1537996194471-e657df975ab4']
  }
];

export const tours = [
  {
    id: 1,
    type: 'tour',
    name: 'Thailand Quick Getaway',
    country: 'Thailand',
    duration: '3 Days / 2 Nights',
    idealFor: 'Couples, friends, short international trip',
    bestDestinations: 'Phuket or Bangkok',
    rating: 4.8,
    reviews: '1,240',
    price: '28,000',
    priceEstimate: '₹28,000 – ₹35,000',
    tag: 'Trending',
    img: '/assets/destinations/Thailand/Thailand 1.jpg',
    gallery: [
      '/assets/destinations/Thailand/Thailand 1.jpg',
      '/assets/destinations/Thailand/Thailand 2.jpg',
      '/assets/destinations/Thailand/Thailand 3.jpg'
    ],
    includes: [
      '2 Nights hotel stay',
      'Daily breakfast',
      'Airport transfers',
      '1 full-day tour',
      'Visa assistance'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival + Leisure',
        activities: [
          'Arrival at Phuket/Bangkok Airport',
          'Hotel transfer (private/shared)',
          'Check-in at 3★ / 4★ hotel',
          'Evening free for Beach walk (Phuket) or Shopping at MBK Center (Bangkok)'
        ],
        optional: [
          'Thai massage',
          'Dinner cruise'
        ]
      },
      {
        day: 2,
        title: 'Full Day Tour',
        options: [
          {
            title: 'Option 1 (Phuket)',
            items: [
              'Phi Phi Islands tour',
              'Speedboat transfer',
              'Snorkeling',
              'Lunch included'
            ]
          },
          {
            title: 'Option 2 (Bangkok)',
            items: [
              'City + Temple tour: Grand Palace, Wat Pho',
              'Evening: Chao Phraya River dinner cruise'
            ]
          }
        ]
      },
      {
        day: 3,
        title: 'Departure',
        activities: [
          'Breakfast at hotel',
          'Free time / last-minute shopping',
          'Transfer to airport',
          'Return flight'
        ]
      }
    ]
  },
  {
    id: 2,
    type: 'tour',
    name: 'Thailand Starter Package',
    country: 'Thailand',
    duration: '5 Days / 4 Nights',
    idealFor: 'First-time travelers, couples, balanced sightseeing + leisure',
    bestDestinations: 'Bangkok + Pattaya',
    rating: 4.7,
    reviews: '980',
    price: '38,000',
    priceEstimate: '₹38,000 – ₹48,000',
    tag: 'Best Seller',
    img: '/assets/destinations/Thailand/Thailand 4.jpg',
    gallery: [
      '/assets/destinations/Thailand/Thailand 4.jpg',
      '/assets/destinations/Thailand/Thailand 5.jpg',
      '/assets/destinations/Thailand/Thailand 6.jpg'
    ],
    includes: [
      '4 Nights stay',
      'Breakfast + 2 lunches',
      'Transfers',
      'Coral Island tour',
      'Safari World tickets'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Bangkok → Pattaya',
        activities: [
          'Arrival at Bangkok Airport',
          'Transfer to Pattaya (2–3 hrs)',
          'Hotel check-in',
          'Evening free'
        ],
        optional: ['Alcazar Cabaret Show']
      },
      {
        day: 2,
        title: 'Coral Island Tour',
        activities: [
          'Visit Coral Island',
          'Snorkeling',
          'Beach relaxation',
          'Indian lunch included'
        ],
        optional: ['Parasailing']
      },
      {
        day: 3,
        title: 'Pattaya → Bangkok + City Tour',
        activities: [
          'Transfer back to Bangkok',
          'City tour: Golden Buddha Temple',
          'Wat Benchamabophit',
          'Check-in hotel',
          'Evening free for shopping at Indra Square'
        ]
      },
      {
        day: 4,
        title: 'Safari World & Marine Park',
        activities: [
          'Full-day visit to Safari World',
          'Highlights: Dolphin show, Orangutan show',
          'Safari drive',
          'Lunch included'
        ]
      },
      {
        day: 5,
        title: 'Departure',
        activities: [
          'Breakfast',
          'Airport transfer',
          'Return flight'
        ]
      }
    ]
  },
  {
    id: 3,
    type: 'tour',
    name: 'Complete Thailand',
    country: 'Thailand',
    duration: '8 Days / 7 Nights',
    idealFor: 'Premium travelers, honeymooners, full Thailand experience',
    bestDestinations: 'Phuket + Krabi + Bangkok',
    rating: 4.9,
    reviews: '640',
    price: '65,000',
    priceEstimate: '₹65,000 – ₹80,000',
    tag: 'Premium',
    img: '/assets/destinations/Thailand/Thailand 7.jpg',
    gallery: [
      '/assets/destinations/Thailand/Thailand 7.jpg',
      '/assets/destinations/Thailand/Thailand 8.jpg',
      '/assets/destinations/Thailand/Thailand 9.jpg'
    ],
    includes: [
      '7 Nights stay',
      'Breakfast + 3–4 lunches',
      'Domestic flight (Krabi → Bangkok)',
      'All transfers',
      'Phi Phi + 4 Island tours',
      'City tours'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Phuket',
        activities: [
          'Arrival at Phuket',
          'Hotel check-in',
          'Evening leisure at Patong Beach'
        ]
      },
      {
        day: 2,
        title: 'Phi Phi Islands Tour',
        activities: [
          'Visit Phi Phi Islands',
          'Speedboat tour',
          'Snorkeling + lunch'
        ]
      },
      {
        day: 3,
        title: 'Phuket → Krabi',
        activities: [
          'Transfer to Krabi (ferry/road)',
          'Hotel check-in',
          'Evening free at Ao Nang Beach'
        ]
      },
      {
        day: 4,
        title: '4 Island Tour (Krabi)',
        activities: [
          'Visit Chicken Island & Poda Island',
          'Island hopping + snorkeling',
          'Lunch included'
        ]
      },
      {
        day: 5,
        title: 'Krabi → Bangkok',
        activities: [
          'Flight to Bangkok',
          'Hotel check-in',
          'Evening at Asiatique The Riverfront'
        ]
      },
      {
        day: 6,
        title: 'Bangkok City Tour',
        activities: [
          'Visit Grand Palace & Wat Pho',
          'Evening: Chao Phraya River dinner cruise'
        ]
      },
      {
        day: 7,
        title: 'Experience Day',
        options: [
          {
            title: 'Option 1: Safari World',
            items: ['Full day at Safari World & Marine Park']
          },
          {
            title: 'Option 2: Free Day',
            items: [
              'Floating Market tour',
              'Shopping at Platinum Fashion Mall'
            ]
          }
        ]
      },
      {
        day: 8,
        title: 'Departure',
        activities: [
          'Breakfast',
          'Airport transfer',
          'Return flight'
        ]
      }
    ]
  },
  {
    id: 4,
    type: 'tour',
    name: 'Vietnam Quick Getaway',
    country: 'Vietnam',
    duration: '3 Days / 2 Nights',
    idealFor: 'Short international trip, budget travelers',
    bestDestinations: 'Hanoi OR Ho Chi Minh City',
    rating: 4.6,
    reviews: '850',
    price: '25,000',
    priceEstimate: '₹25,000 – ₹35,000',
    tag: 'Budget Friendly',
    img: '/assets/destinations/Vietnam/andreea-popa-PknaOrb1lVo-unsplash.jpg',
    gallery: [
      '/assets/destinations/Vietnam/andreea-popa-PknaOrb1lVo-unsplash.jpg',
      '/assets/destinations/Vietnam/jakob-owens-5F_c9i3JP0I-unsplash.jpg',
      '/assets/destinations/Vietnam/pexels-vietnamhiddenlight-32874870.jpg'
    ],
    includes: [
      '2 Nights stay',
      'Daily breakfast',
      'Airport transfers',
      '1 full-day tour'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival + Leisure',
        activities: [
          'Arrival at Hanoi / Ho Chi Minh City',
          'Hotel transfer & check-in',
          'Evening free: Explore Old Quarter (Hanoi) OR Ben Thanh Market (HCMC)'
        ]
      },
      {
        day: 2,
        title: 'Full Day Tour',
        options: [
          {
            title: 'Option 1 (Hanoi)',
            items: [
              'Visit Ha Long Bay',
              'Cruise experience',
              'Kayaking / Caves visit',
              'Lunch included'
            ]
          },
          {
            title: 'Option 2 (Ho Chi Minh)',
            items: [
              'Visit Cu Chi Tunnels',
              'City tour: War Remnants Museum, Notre Dame Cathedral',
              'Local lunch'
            ]
          }
        ]
      },
      {
        day: 3,
        title: 'Departure',
        activities: [
          'Breakfast at hotel',
          'Free time for souvenir shopping',
          'Transfer to airport',
          'Return flight'
        ]
      }
    ]
  },
  {
    id: 5,
    type: 'tour',
    name: 'Classic Vietnam Experience',
    country: 'Vietnam',
    duration: '5 Days / 4 Nights',
    idealFor: 'First-time travelers, balanced itinerary',
    bestDestinations: 'Hanoi + Da Nang',
    rating: 4.8,
    reviews: '1,120',
    price: '40,000',
    priceEstimate: '₹40,000 – ₹55,000',
    tag: 'Most Popular',
    img: '/assets/destinations/Vietnam/nag-LX1L-byTpTA-unsplash.jpg',
    gallery: [
      '/assets/destinations/Vietnam/nag-LX1L-byTpTA-unsplash.jpg',
      '/assets/destinations/Vietnam/pexels-triduhi-youtuber-27418881.jpg',
      '/assets/destinations/Vietnam/degaharu--nosLdNjHY0-unsplash.jpg'
    ],
    includes: [
      '4 Nights stay',
      'Breakfast + 1–2 lunches',
      'Domestic flight (Hanoi → Da Nang)',
      'Ha Long Bay tour',
      'Ba Na Hills tour'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Hanoi',
        activities: [
          'Hotel check-in',
          'Explore Old Quarter Hanoi',
          'Street food experience'
        ]
      },
      {
        day: 2,
        title: 'Ha Long Bay Cruise',
        activities: [
          'Full day visit to Ha Long Bay',
          'Cruise + Caves + Kayaking',
          'Lunch included'
        ]
      },
      {
        day: 3,
        title: 'Hanoi → Da Nang',
        activities: [
          'Flight to Da Nang',
          'Check-in at Da Nang hotel',
          'Visit My Khe Beach & evening leisure'
        ]
      },
      {
        day: 4,
        title: 'Ba Na Hills & Golden Bridge',
        activities: [
          'Visit Ba Na Hills',
          'Walk on the world-famous Golden Bridge',
          'Cable car ride experience'
        ]
      },
      {
        day: 5,
        title: 'Departure',
        activities: [
          'Breakfast',
          'Airport transfer',
          'Return flight'
        ]
      }
    ]
  },
  {
    id: 6,
    type: 'tour',
    name: 'Ultimate Vietnam Explorer',
    country: 'Vietnam',
    duration: '8 Days / 7 Nights',
    idealFor: 'Full Vietnam experience (North + Central + South)',
    bestDestinations: 'Hanoi + Da Nang + Ho Chi Minh City',
    rating: 4.9,
    reviews: '560',
    price: '70,000',
    priceEstimate: '₹70,000 – ₹90,000',
    tag: 'All-Inclusive',
    img: '/assets/destinations/Vietnam/pexels-zaonar-saizainalin-547935324-29860635.jpg',
    gallery: [
      '/assets/destinations/Vietnam/pexels-zaonar-saizainalin-547935324-29860635.jpg',
      '/assets/destinations/Vietnam/pexels-vo-van-ti-n-2037497312-29585528.jpg',
      '/assets/destinations/Vietnam/pexels-ella-ragasa-1098642056-28731911.jpg'
    ],
    includes: [
      '7 Nights stay',
      'Breakfast + 3–4 lunches',
      '2 Domestic flights',
      'All tours & transfers'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Hanoi',
        activities: [
          'Airport transfer',
          'Hotel check-in',
          'Explore Hanoi Old Quarter'
        ]
      },
      {
        day: 2,
        title: 'Ha Long Bay Cruise',
        activities: [
          'Full-day explore Ha Long Bay',
          'Cruise + activities (kayaking, caves)',
          'Lunch on board'
        ]
      },
      {
        day: 3,
        title: 'Hanoi → Da Nang',
        activities: [
          'Fly to Da Nang',
          'Transfer to hotel',
          'Relax at My Khe Beach'
        ]
      },
      {
        day: 4,
        title: 'Ba Na Hills & Golden Bridge',
        activities: [
          'Full day at Ba Na Hills',
          'Walk on the Golden Bridge',
          'Cable car tour'
        ]
      },
      {
        day: 5,
        title: 'Hoi An Excursion',
        activities: [
          'Visit Hoi An Ancient Town',
          'Explore lantern streets & Night Market'
        ]
      },
      {
        day: 6,
        title: 'Da Nang → Ho Chi Minh City',
        activities: [
          'Fly to Ho Chi Minh City (Saigon)',
          'Hotel check-in & evening leisure'
        ]
      },
      {
        day: 7,
        title: 'Cu Chi Tunnels + City Tour',
        activities: [
          'Visit Cu Chi Tunnels',
          'Saigon City tour attractions',
          'Last group dinner'
        ]
      },
      {
        day: 8,
        title: 'Departure',
        activities: [
          'Breakfast',
          'Airport transfer',
          'Return flight to India'
        ]
      }
    ]
  }
];

export const trendingDestinations = [
  { name: 'Vietnam', price: '48,000', img: '/assets/destinations/Vietnam/marina-lobato-kG7pOXbBfNs-unsplash.jpg' },
  { name: 'Bali', price: '42,500', img: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1000&auto=format&fit=crop' },
  { name: 'Oman', price: '85,000', img: 'https://images.unsplash.com/photo-1616035287790-255d644781bb?q=80&w=1000&auto=format&fit=crop' },
  { name: 'Thailand', price: '38,900', img: '/assets/destinations/Thailand/Thailand 1.jpg' },
  { name: 'Singapore', price: '52,000', img: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=1000&auto=format&fit=crop' }
];

export const popularActivities = [
  { name: 'Heritage Walk', city: 'Vadodara', price: '1,200', tag: 'Cultural', img: '/assets/activities/vadodara.png' },
  { name: 'Desert Safari', city: 'Dubai', price: '4,500', tag: 'Adventure', img: '/assets/activities/dubai.png' },
  { name: 'Island Hopping', city: 'Thailand', price: '3,800', tag: 'Leisure', img: '/assets/destinations/Thailand/Thailand 14.jpg' },
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
