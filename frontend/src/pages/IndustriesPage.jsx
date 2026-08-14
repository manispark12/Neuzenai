import React, { useEffect } from 'react';
import Industries from '../components/Industries';
import ContactSection from '../components/ContactSection';

export default function IndustriesPage({ scrollToContact, selectedIndustry }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="pt-24 bg-white min-h-screen">
      {/* Full Dedicated Industries Content */}
      <Industries 
        selectedIndustry={selectedIndustry}
        onSelectIndustry={(title) => scrollToContact(title)} 
        onOpenContact={() => scrollToContact()}
      />

      {/* Dedicated Contact Form on Industries Page */}
      <ContactSection defaultSubject="Industry AI Solutions" />
    </main>
  );
}
