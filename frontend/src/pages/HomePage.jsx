import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Globe } from 'lucide-react';
import Hero from '../components/Hero';
import Expertise from '../components/Expertise';
import Partners from '../components/Partners';
import SuccessStories from '../components/SuccessStories';
import Products from '../components/Products';
import ContactSection from '../components/ContactSection';

export default function HomePage({ scrollToContact, handleNavigate, contactSubject, selectedCapability, selectedIndustry, selectedProduct }) {
  return (
    <main>
      {/* Hero Section */}
      <Hero onStartJourney={() => scrollToContact()} />

      {/* Expertise Section */}
      <Expertise 
        selectedCapability={selectedCapability}
        onSelectService={(title) => scrollToContact(title)} 
      />

      {/* Strategic Partners & Trusted Ecosystem Showcase */}
      <Partners />

      {/* Lightweight Industry Solutions Banner Linking to /industries */}
      <section className="py-14 bg-gradient-to-r from-orange-500/10 via-emerald-500/5 to-orange-500/10 border-y border-orange-500/20 my-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-left">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-bold uppercase tracking-wider mb-2 border border-orange-200">
              <Globe className="w-3.5 h-3.5 text-orange-600" />
              <span>INDUSTRY BLUEPRINTS</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 font-['Outfit']">
              Tailored AI Architectures for Energy, Banking, Healthcare & Retail
            </h3>
            <p className="text-sm sm:text-base text-gray-600 font-medium mt-1">
              Explore dedicated case benchmarks, HIPAA/SOC2 compliance stacks, and custom domain models.
            </p>
          </div>

          <Link 
            to="/industries"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="px-8 py-4 rounded-full bg-gradient-to-r from-[#FF5500] to-[#FF3D00] hover:scale-105 active:scale-95 text-white font-extrabold text-sm shadow-xl shadow-orange-500/30 flex items-center gap-2 shrink-0 transition-all cursor-pointer"
          >
            <span>EXPLORE DEDICATED INDUSTRIES</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Success Stories Section */}
      <SuccessStories onOpenContact={() => scrollToContact()} />

      {/* Products Showcase Section */}
      <Products 
        selectedProduct={selectedProduct}
        onSelectProduct={(title) => scrollToContact(title)} 
      />

      {/* Contact Section */}
      <ContactSection defaultSubject={contactSubject} />
    </main>
  );
}
