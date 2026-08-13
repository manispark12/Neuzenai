import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import AIWidget from './components/AIWidget';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import IndustriesPage from './pages/IndustriesPage';

export default function App() {
  const [contactSubject, setContactSubject] = useState('');

  const scrollToContact = (subject = '') => {
    if (subject) setContactSubject(subject);
    const el = document.getElementById('careers');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleNavigate = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
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
            />
          } 
        />
        <Route 
          path="/industries" 
          element={
            <IndustriesPage 
              scrollToContact={scrollToContact} 
            />
          } 
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
