import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Includes Popper (for tooltips, dropdowns, etc.)

import './App.css';

// Lazy load layout and pages
const Layout = lazy(() => import('./components/Layout/Layout'));
const Home = lazy(() => import('./pages/Home/Home'));
const Services = lazy(() => import('./pages/Services/Services'));
const About = lazy(() => import('./pages/About/About'));
const Regulatory_Blueprint = lazy(() => import('./pages/Regulatory-Blueprint/Regulatory_Blueprint'));
const Catalyst = lazy(() => import('./pages/Catalyst/Catalyst'));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about-us" element={<About />} />
            <Route path="services/regulatory-blueprint" element={<Regulatory_Blueprint />} />
            <Route path="services/catalyst" element={<Catalyst />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
