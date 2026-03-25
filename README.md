<p align="center">
  <img src="public/logos/logo.png" alt="FlyAnyTrip Logo" height="80" />
</p>

# ✈️ FlyAnyTrip — Frontend

A premium travel booking web application built with **React + Vite**, featuring a modern glassmorphism UI, smooth animations, and a comprehensive set of travel services.

---

## 🚀 Features

- **Flights** — Search one-way and round-trip flights with a smart date range calendar
- **Tours** — Browse curated tour packages
- **Visa** — Visa information and assistance
- **Activities** — Discover local activities by destination
- **Live Train Status** — Real-time train tracking
- **PNR Status** — PNR enquiry for Indian Railways
- **Partner Airlines Slider** — Infinite scrolling Star Alliance airline showcase
- **Testimonials Section** — Customer reviews with localized Indian profiles
- **Responsive Design** — Optimized for desktop and mobile

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 18 |
| Build Tool | Vite 6 |
| Styling | Tailwind CSS 3 + Vanilla CSS |
| Animations | Framer Motion |
| Icons | Lucide React |
| Date Picker | React Datepicker |
| HTTP Client | Axios |

---

## 📁 Project Structure

```
frontend/
├── public/               # Static assets (images, logos)
├── src/
│   ├── components/
│   │   ├── layout/       # Navbar, Hero, Footer
│   │   └── features/     # Feature modules
│   │       ├── flights/  # Flight search components
│   │       ├── tours/    # Tours components
│   │       ├── visa/     # Visa components
│   │       ├── activity/ # Activity search components
│   │       ├── train/    # Live train status
│   │       ├── pnr/      # PNR status checker
│   │       └── common/   # Shared/reusable components
│   ├── hooks/            # Custom React hooks
│   ├── utils/            # Utility functions & mock data
│   ├── App.jsx           # Root application component
│   ├── App.css           # App-level styles
│   ├── index.css         # Global design system & CSS tokens
│   └── main.jsx          # React entry point
├── index.html
├── vite.config.js
├── tailwind.config.js
└── package.json
```

---

## ⚙️ Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher
- npm v9 or higher

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd "Flyanytrip 2.0/frontend"

# Install dependencies
npm install
```

### Development

```bash
npm run dev
```

The app will be available at `http://localhost:5173`.

### Build for Production

```bash
npm run build
```

The output will be in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

---

## 🎨 Design System

The UI uses a curated dark-mode-first design with:

- **Glassmorphism cards** with backdrop blur and subtle borders
- **Gradient accents** (indigo → purple → rose)
- **Framer Motion** micro-animations on all interactive elements
- **Google Fonts** typography (Inter / Outfit)
- **Infinite scroll** partner airline carousel

---

## 📦 Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint |

---

## 📄 License

This project is private and proprietary. All rights reserved.
