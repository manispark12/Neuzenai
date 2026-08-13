import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X, ArrowRight, Sparkles, Cpu, Layers, ShieldCheck, Zap, Globe, Award, Briefcase, PhoneCall } from 'lucide-react';

export default function Navbar({ onOpenContact, onNavigate }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const capabilitiesMenu = [
    { title: 'Advanced Analytics', desc: 'Predictive modeling & statistical insights', icon: Zap, color: 'text-orange-500', bg: 'bg-orange-500/10' },
    { title: 'AI Strategic Consulting', desc: 'Adoption roadmaps & enterprise strategy', icon: Cpu, color: 'text-emerald-400', bg: 'bg-emerald-500/10' },
    { title: 'Custom AI Solutions', desc: 'Tailored neural networks & NLP models', icon: Layers, color: 'text-indigo-400', bg: 'bg-indigo-500/10' },
    { title: 'Intelligent Automation', desc: 'RPA & smart workflow optimization', icon: Sparkles, color: 'text-amber-400', bg: 'bg-amber-500/10' },
  ];

  const industriesMenu = [
    { title: 'Financial Services', badge: '1B+ Txns', desc: 'Fraud detection & algorithmic trading' },
    { title: 'Healthcare & Insurance', badge: '500K+ Policies', desc: 'Claims automation & HIPAA compliant AI' },
    { title: 'E-commerce & Retail', badge: '2M+ Users', desc: 'Dynamic pricing & shopper personalization' },
    { title: 'Energy & Utilities', badge: '500+ Grids', desc: 'Grid optimization & predictive maintenance' },
  ];

  const productsMenu = [
    { title: 'Neuzen MLOps Engine', desc: 'Automated model training & observability' },
    { title: 'Agentic Workflow Studio', desc: 'Multi-agent autonomous systems' },
    { title: 'Enterprise Vector DB', desc: 'Sub-millisecond semantic search engine' },
  ];

  const handleNavClick = (id) => {
    setActiveDropdown(null);
    setMobileMenuOpen(false);
    if (id === 'industries') {
      navigate('/industries');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        if (onNavigate) onNavigate(id);
      }, 100);
    } else if (onNavigate) {
      onNavigate(id);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-5 left-0 right-0 z-50 px-4 md:px-8 flex justify-center transition-all duration-300">
      <nav className={`w-full max-w-6xl rounded-full px-6 py-3 transition-all duration-300 flex items-center justify-between  bg-[#0A0A0C] text-white shadow-[0_20px_50px_rgba(0,0,0,0.6)] border ${
        isScrolled 
          ? 'border-orange-500/40 shadow-orange-500/10 backdrop-blur-xl py-2.5' 
          : 'border-white/15 hover:border-white/25'
      }`}>
        
        {/* Brand Logo matching user screenshot */}
        <div 
          onClick={() => {
            if (location.pathname !== '/') {
              navigate('/');
            } else {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }
          }}
          className="flex items-center gap-3 cursor-pointer group"
        >
          {/* Orange square icon box matching logo in screenshot */}
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#FF5500] to-[#FF3D00] p-1 flex items-center justify-center shadow-lg shadow-orange-500/30 group-hover:scale-105 transition-transform">
            <div className="relative w-full h-full border border-white/40 rounded flex items-center justify-center">
              <span className="w-2.5 h-2.5 rounded-full bg-white animate-pulse" />
              <span className="absolute w-4 h-4 border border-white/60 rounded-full rotate-45" />
            </div>
          </div>
          <span className="font-black text-lg sm:text-xl tracking-tight text-white font-['Outfit'] flex items-center">
            NEUZEN<span className="text-[#FF4500]">AI</span>
          </span>
        </div>

        {/* Center Desktop Links matching screenshot */}
        <div className="hidden lg:flex items-center gap-7 text-sm font-semibold text-gray-200">
          <button 
            onClick={() => handleNavClick('about')}
            className="hover:text-[#FF4500] transition-colors py-1 relative group/link cursor-pointer"
          >
            About Us
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FF4500] transition-all duration-300 group-hover/link:w-full" />
          </button>

          {/* Capabilities Dropdown */}
          <div 
            className="relative cursor-pointer"
            onMouseEnter={() => setActiveDropdown('capabilities')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button 
              onClick={() => handleNavClick('expertise')}
              className={`flex items-center gap-1.5 hover:text-[#FF4500] transition-colors py-1 cursor-pointer ${activeDropdown === 'capabilities' ? 'text-[#FF4500]' : ''}`}
            >
              Capabilities <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === 'capabilities' ? 'rotate-180 text-[#FF4500]' : 'text-gray-400'}`} />
            </button>

            {activeDropdown === 'capabilities' && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-80 rounded-3xl bg-[#0D0D10] p-3 shadow-2xl border border-white/15 text-left animate-in fade-in slide-in-from-top-2 duration-200">
                <div className="text-[11px] uppercase font-bold text-gray-400 px-3 py-1.5 tracking-wider mb-1 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-500" /> Key Capabilities
                </div>
                {capabilitiesMenu.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div 
                      key={idx}
                      onClick={() => handleNavClick('expertise')}
                      className="flex items-start gap-3 p-3 rounded-2xl hover:bg-white/10 transition-colors cursor-pointer group/item"
                    >
                      <div className={`p-2 rounded-xl ${item.bg} ${item.color} group-hover/item:scale-110 transition-transform`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-white group-hover/item:text-[#FF4500] transition-colors">{item.title}</div>
                        <div className="text-xs text-gray-400 leading-tight mt-0.5">{item.desc}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* Industries Dropdown */}
          <div 
            className="relative cursor-pointer"
            onMouseEnter={() => setActiveDropdown('industries')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button 
              onClick={() => handleNavClick('industries')}
              className={`flex items-center gap-1.5 hover:text-[#FF4500] transition-colors py-1 cursor-pointer ${activeDropdown === 'industries' ? 'text-[#FF4500]' : ''}`}
            >
              Industries <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === 'industries' ? 'rotate-180 text-[#FF4500]' : 'text-gray-400'}`} />
            </button>

            {activeDropdown === 'industries' && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-80 rounded-3xl bg-[#0D0D10] p-3 shadow-2xl border border-white/15 text-left animate-in fade-in slide-in-from-top-2 duration-200">
                <div className="text-[11px] uppercase font-bold text-gray-400 px-3 py-1.5 tracking-wider mb-1 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> Industry Solutions
                </div>
                {industriesMenu.map((item, idx) => (
                  <div 
                    key={idx}
                    onClick={() => handleNavClick('industries')}
                    className="p-3 rounded-2xl hover:bg-white/10 transition-colors cursor-pointer group/ind"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-bold text-white group-hover/ind:text-emerald-400 transition-colors">{item.title}</span>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">{item.badge}</span>
                    </div>
                    <div className="text-xs text-gray-400 mt-1">{item.desc}</div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <button 
            onClick={() => handleNavClick('success-stories')}
            className="hover:text-[#FF4500] transition-colors py-1 relative group/link cursor-pointer"
          >
            Success Stories
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FF4500] transition-all duration-300 group-hover/link:w-full" />
          </button>

          {/* Products Dropdown */}
          <div 
            className="relative cursor-pointer"
            onMouseEnter={() => setActiveDropdown('products')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button 
              onClick={() => handleNavClick('products')}
              className={`flex items-center gap-1.5 hover:text-[#FF4500] transition-colors py-1 cursor-pointer ${activeDropdown === 'products' ? 'text-[#FF4500]' : ''}`}
            >
              Products <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === 'products' ? 'rotate-180 text-[#FF4500]' : 'text-gray-400'}`} />
            </button>

            {activeDropdown === 'products' && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-72 rounded-3xl bg-[#0D0D10] p-3 shadow-2xl border border-white/15 text-left animate-in fade-in slide-in-from-top-2 duration-200">
                <div className="text-[11px] uppercase font-bold text-gray-400 px-3 py-1.5 tracking-wider mb-1 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" /> Platform Suite
                </div>
                {productsMenu.map((item, idx) => (
                  <div 
                    key={idx}
                    onClick={() => handleNavClick('products')}
                    className="p-3 rounded-2xl hover:bg-white/10 transition-colors cursor-pointer group/prod"
                  >
                    <div className="text-sm font-bold text-white group-hover/prod:text-indigo-400 transition-colors">{item.title}</div>
                    <div className="text-xs text-gray-400 mt-0.5">{item.desc}</div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <button 
            onClick={() => handleNavClick('careers')}
            className="hover:text-[#FF4500] transition-colors py-1 relative group/link cursor-pointer"
          >
            Careers
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FF4500] transition-all duration-300 group-hover/link:w-full" />
          </button>
        </div>

        {/* Right CTA Button matching screenshot (Solid Orange Pill Button "Contact Us") */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={onOpenContact}
            className="relative group px-6 py-2.5 rounded-full bg-gradient-to-r from-[#FF5500] to-[#FF3D00] font-bold text-sm text-white shadow-[0_4px_20px_rgba(255,69,0,0.4)] hover:shadow-[0_6px_25px_rgba(255,69,0,0.6)] hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
          >
            <span className="flex items-center gap-1.5">
              Contact Us
            </span>
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-full hover:bg-white/10 text-white transition-colors cursor-pointer"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-4 top-20 rounded-3xl bg-[#0D0D10] border border-white/20 p-6 shadow-2xl flex flex-col gap-4 z-50 text-white animate-in fade-in slide-in-from-top-4">
          <button 
            onClick={() => handleNavClick('about')} 
            className="text-left text-base font-bold py-2 border-b border-white/10 hover:text-[#FF4500] cursor-pointer"
          >
            About Us
          </button>
          <button 
            onClick={() => handleNavClick('expertise')} 
            className="text-left text-base font-bold py-2 border-b border-white/10 hover:text-[#FF4500] flex items-center justify-between cursor-pointer"
          >
            Capabilities <span className="text-xs text-orange-400 font-normal">4 Core Services</span>
          </button>
          <button 
            onClick={() => handleNavClick('industries')} 
            className="text-left text-base font-bold py-2 border-b border-white/10 hover:text-[#FF4500] flex items-center justify-between cursor-pointer"
          >
            Industries <span className="text-xs text-emerald-400 font-normal">4 Major Sectors</span>
          </button>
          <button 
            onClick={() => handleNavClick('success-stories')} 
            className="text-left text-base font-bold py-2 border-b border-white/10 hover:text-[#FF4500] cursor-pointer"
          >
            Success Stories
          </button>
          <button 
            onClick={() => handleNavClick('products')} 
            className="text-left text-base font-bold py-2 border-b border-white/10 hover:text-[#FF4500] cursor-pointer"
          >
            Products & Platforms
          </button>
          <button 
            onClick={() => handleNavClick('careers')} 
            className="text-left text-base font-bold py-2 border-b border-white/10 hover:text-[#FF4500] cursor-pointer"
          >
            Careers
          </button>

          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenContact();
            }}
            className="mt-2 w-full py-3.5 rounded-full bg-gradient-to-r from-[#FF5500] to-[#FF3D00] font-extrabold text-white shadow-lg text-center flex items-center justify-center gap-2 cursor-pointer"
          >
            Contact Us <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </header>
  );
}
