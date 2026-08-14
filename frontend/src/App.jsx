import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import AIWidget from './components/AIWidget';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import IndustriesPage from './pages/IndustriesPage';
import AboutPage from './pages/AboutPage';
import CareersPage from './pages/CareersPage';

export default function App() {
  const [contactSubject, setContactSubject] = useState('');
  const [selectedCapability, setSelectedCapability] = useState('analytics');
  const [selectedIndustry, setSelectedIndustry] = useState('energy');
  const [selectedProduct, setSelectedProduct] = useState(null);

  const scrollToContact = (subject = '') => {
    if (subject) setContactSubject(subject);
    const el = document.getElementById('careers');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleNavigate = (id, subId = null) => {
    if (id === 'expertise' && subId) {
      setSelectedCapability(subId);
    } else if (id === 'industries' && subId) {
      setSelectedIndustry(subId);
    } else if (id === 'products' && subId) {
      setSelectedProduct(subId);
    }

    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 50);
  };

  return (
    <div className="min-h-screen bg-[#FAFAFB] text-gray-900 font-sans selection:bg-orange-500 selection:text-white relative">
      {/* Floating Pill Header Navbar */}
      <Navbar 
        onOpenContact={() => scrollToContact()} 
        onNavigate={handleNavigate}
      />

      {/* Page Routing */}
      <Routes>
        <Route 
          path="/" 
          element={
            <HomePage 
              scrollToContact={scrollToContact} 
              handleNavigate={handleNavigate} 
              contactSubject={contactSubject} 
              selectedCapability={selectedCapability}
              selectedIndustry={selectedIndustry}
              selectedProduct={selectedProduct}
            />
          } 
        />
        <Route 
          path="/about" 
          element={
            <AboutPage 
              scrollToContact={scrollToContact} 
            />
          } 
        />
        <Route 
          path="/industries" 
          element={
            <IndustriesPage 
              scrollToContact={scrollToContact} 
              selectedIndustry={selectedIndustry}
            />
          } 
        />
        <Route 
          path="/careers" 
          element={<CareersPage />} 
        />
      </Routes>

      {/* Footer */}
      <Footer 
        onNavigate={handleNavigate} 
        onOpenContact={() => scrollToContact()} 
      />

      {/* Floating "NAI" AI Assistant Widget */}
      <AIWidget 
        onOpenContact={() => scrollToContact()} 
        onNavigate={handleNavigate} 
      />
    </div>
  );
}
