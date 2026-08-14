import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X, ArrowRight, Sparkles, Cpu, Layers, ShieldCheck, Zap, Globe, Award, Activity } from 'lucide-react';

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
    { id: 'analytics', title: 'Advanced Analytics', desc: 'Predictive modeling & statistical insights', icon: Zap, color: 'text-orange-400', bg: 'bg-orange-500/20' },
    { id: 'consulting', title: 'AI Strategic Consulting', desc: 'Adoption roadmaps & enterprise strategy', icon: Cpu, color: 'text-emerald-400', bg: 'bg-emerald-500/20' },
    { id: 'custom-solutions', title: 'Custom AI Solutions', desc: 'Tailored neural networks & NLP models', icon: Layers, color: 'text-indigo-400', bg: 'bg-indigo-500/20' },
    { id: 'automation', title: 'Intelligent Automation', desc: 'RPA & smart workflow optimization', icon: Sparkles, color: 'text-amber-400', bg: 'bg-amber-500/20' },
  ];

  const industriesMenu = [
    { id: 'finance', title: 'Financial Services', badge: '1B+ Txns', desc: 'Fraud detection & algorithmic trading' },
    { id: 'healthcare', title: 'Healthcare & Insurance', badge: '500K+ Policies', desc: 'Claims automation & HIPAA compliant AI' },
    { id: 'retail', title: 'E-commerce & Retail', badge: '2M+ Users', desc: 'Dynamic pricing & shopper personalization' },
    { id: 'energy', title: 'Energy & Utilities', badge: '500+ Grids', desc: 'Grid optimization & predictive maintenance' },
  ];

  const productsMenu = [
    { id: 'mlops', title: 'Neuzen MLOps Engine', desc: 'Automated model training & observability' },
    { id: 'agentic', title: 'Agentic Workflow Studio', desc: 'Multi-agent autonomous systems' },
    { id: 'vector', title: 'Enterprise Vector DB', desc: 'Sub-millisecond semantic search engine' },
  ];

  const handleNavClick = (id, subId = null) => {
    setActiveDropdown(null);
    setMobileMenuOpen(false);
    if (id === 'about') {
      navigate('/about');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    if (id === 'careers') {
      navigate('/careers');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    if (id === 'industries') {
      if (location.pathname !== '/industries') {
        navigate('/industries');
      }
      setTimeout(() => {
        if (onNavigate) onNavigate('industries', subId);
      }, 50);
      return;
    }
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        if (onNavigate) onNavigate(id, subId);
      }, 100);
    } else if (onNavigate) {
      onNavigate(id, subId);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-4 left-0 right-0 z-50 px-4 md:px-8 flex justify-center transition-all duration-300">
      
      {/* 1. Holographic Glass Dock Frame */}
      <nav className={`w-full max-w-6xl rounded-full px-6 py-3 transition-all duration-300 flex items-center justify-between bg-[#08090D]/90 backdrop-blur-2xl text-white shadow-[0_20px_60px_rgba(0,0,0,0.8)] border ${
        isScrolled 
          ? 'border-[#FF4500]/60 shadow-[0_0_35px_rgba(255,69,0,0.25)] py-2.5' 
          : 'border-white/20 hover:border-[#FF4500]/40'
      }`}>
        
        {/* Brand Holographic Logo & System Status Pill */}
        <div className="flex items-center gap-4">
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
            {/* Holographic Glowing Icon */}
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#FF5500] via-[#FF3D00] to-amber-500 p-0.5 flex items-center justify-center shadow-lg shadow-orange-500/40 group-hover:scale-105 transition-transform duration-300">
              <div className="w-full h-full bg-[#08090D] rounded-[10px] flex items-center justify-center relative overflow-hidden">
                <span className="w-2.5 h-2.5 rounded-full bg-[#FF4500] animate-ping" />
                <span className="absolute w-4 h-4 border border-orange-400/80 rounded-full rotate-45" />
              </div>
            </div>
            <span className="font-black text-lg sm:text-xl tracking-tight text-white font-['Outfit'] flex items-center">
              NEUZEN<span className="text-[#FF4500] drop-shadow-[0_0_12px_rgba(255,69,0,0.6)]">AI</span>
            </span>
          </div>

          {/* Live System Status Pill */}
          <div className="hidden xl:flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[11px] font-bold text-emerald-400">
            <Activity className="w-3.5 h-3.5 animate-pulse" />
            <span>AI Uptime 99.9%</span>
          </div>
        </div>

        {/* Center Desktop Navigation Links & Mega Dropdowns */}
        <div className="hidden lg:flex items-center gap-7 text-sm font-bold text-gray-200">
          
          <button 
            onClick={() => handleNavClick('about')}
            className={`hover:text-[#FF4500] transition-all py-1 relative group/link cursor-pointer ${location.pathname === '/about' ? 'text-[#FF4500]' : ''}`}
          >
            About Us
            <span className={`absolute bottom-0 left-0 h-0.5 bg-[#FF4500] transition-all duration-300 ${location.pathname === '/about' ? 'w-full shadow-[0_0_8px_#FF4500]' : 'w-0 group-hover/link:w-full'}`} />
          </button>

          {/* Capabilities Mega Menu */}
          <div 
            className="relative cursor-pointer py-1"
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
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-88 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                <div className="rounded-3xl bg-[#0D0D12]/95 backdrop-blur-2xl p-4 shadow-[0_20px_50px_rgba(0,0,0,0.9)] border border-white/20 text-left">
                  <div 
                    onClick={() => handleNavClick('expertise')}
                    className="text-[11px] uppercase font-extrabold text-orange-400 px-3 py-1.5 tracking-wider mb-2 flex items-center justify-between border-b border-white/10 pb-2 hover:bg-white/5 rounded-xl cursor-pointer transition-colors group/hdr"
                  >
                    <span className="flex items-center gap-1.5 group-hover/hdr:text-white transition-colors">
                      <Sparkles className="w-3.5 h-3.5 text-orange-400 group-hover/hdr:scale-110 transition-transform" /> 
                      Key Capabilities
                    </span>
                    <span className="text-[10px] text-gray-400 font-normal group-hover/hdr:text-orange-300">4 SLA Modules →</span>
                  </div>
                  {capabilitiesMenu.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div 
                        key={item.id}
                        onClick={(e) => {
                          e.stopPropagation();
                          handleNavClick('expertise', item.id);
                        }}
                        className="flex items-center justify-between p-3 rounded-2xl hover:bg-white/10 transition-all cursor-pointer group/item border border-transparent hover:border-orange-500/30"
                      >
                        <div className="flex items-start gap-3.5">
                          <div className={`p-2.5 rounded-xl ${item.bg} ${item.color} group-hover/item:scale-110 group-hover/item:bg-orange-500/30 transition-all shadow-sm`}>
                            <Icon className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-sm font-bold text-white group-hover/item:text-[#FF4500] transition-colors flex items-center gap-1.5">
                              {item.title}
                            </div>
                            <div className="text-xs text-gray-400 leading-tight mt-0.5 group-hover/item:text-gray-300">{item.desc}</div>
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-orange-400 opacity-0 group-hover/item:opacity-100 group-hover/item:translate-x-1 transition-all shrink-0 ml-2" />
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* Industries Mega Menu */}
          <div 
            className="relative cursor-pointer py-1"
            onMouseEnter={() => setActiveDropdown('industries')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button 
              onClick={() => handleNavClick('industries')}
              className={`flex items-center gap-1.5 hover:text-[#FF4500] transition-colors py-1 cursor-pointer ${activeDropdown === 'industries' || location.pathname === '/industries' ? 'text-[#FF4500]' : ''}`}
            >
              Industries <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === 'industries' ? 'rotate-180 text-[#FF4500]' : 'text-gray-400'}`} />
            </button>

            {activeDropdown === 'industries' && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-88 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                <div className="rounded-3xl bg-[#0D0D12]/95 backdrop-blur-2xl p-4 shadow-[0_20px_50px_rgba(0,0,0,0.9)] border border-white/20 text-left">
                  <div 
                    onClick={() => handleNavClick('industries')}
                    className="text-[11px] uppercase font-extrabold text-emerald-400 px-3 py-1.5 tracking-wider mb-2 flex items-center justify-between border-b border-white/10 pb-2 hover:bg-white/5 rounded-xl cursor-pointer transition-colors group/hdr"
                  >
                    <span className="flex items-center gap-1.5 group-hover/hdr:text-white transition-colors">
                      <Globe className="w-3.5 h-3.5 text-emerald-400 group-hover/hdr:scale-110 transition-transform" /> 
                      Industry Solutions
                    </span>
                    <span className="text-[10px] text-gray-400 font-normal group-hover/hdr:text-emerald-300">Dedicated Page →</span>
                  </div>
                  {industriesMenu.map((item) => (
                    <div 
                      key={item.id}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleNavClick('industries', item.id);
                      }}
                      className="p-3 rounded-2xl hover:bg-white/10 transition-all cursor-pointer group/ind border border-transparent hover:border-emerald-500/30"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-bold text-white group-hover/ind:text-emerald-400 transition-colors flex items-center gap-1">
                          {item.title}
                        </span>
                        <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 group-hover/ind:bg-emerald-500/30">{item.badge}</span>
                      </div>
                      <div className="text-xs text-gray-400 mt-1 group-hover/ind:text-gray-300 flex items-center justify-between">
                        <span>{item.desc}</span>
                        <ArrowRight className="w-3.5 h-3.5 text-emerald-400 opacity-0 group-hover/ind:opacity-100 group-hover/ind:translate-x-1 transition-all shrink-0 ml-1" />
                      </div>
                    </div>
                  ))}
                </div>
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
            className="relative cursor-pointer py-1"
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
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-84 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                <div className="rounded-3xl bg-[#0D0D12]/95 backdrop-blur-2xl p-4 shadow-[0_20px_50px_rgba(0,0,0,0.9)] border border-white/20 text-left">
                  <div 
                    onClick={() => handleNavClick('products')}
                    className="text-[11px] uppercase font-extrabold text-indigo-400 px-3 py-1.5 tracking-wider mb-2 flex items-center justify-between border-b border-white/10 pb-2 hover:bg-white/5 rounded-xl cursor-pointer transition-colors group/hdr"
                  >
                    <span className="flex items-center gap-1.5 group-hover/hdr:text-white transition-colors">
                      <Layers className="w-3.5 h-3.5 text-indigo-400 group-hover/hdr:scale-110 transition-transform" /> 
                      Proprietary SaaS Platforms
                    </span>
                    <span className="text-[10px] text-gray-400 font-normal group-hover/hdr:text-indigo-300">View All →</span>
                  </div>
                  {productsMenu.map((item) => (
                    <div 
                      key={item.id}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleNavClick('products', item.id);
                      }}
                      className="flex items-center justify-between p-3 rounded-2xl hover:bg-white/10 transition-all cursor-pointer group/prod border border-transparent hover:border-indigo-500/30"
                    >
                      <div>
                        <div className="text-sm font-bold text-white group-hover/prod:text-indigo-400 transition-colors flex items-center gap-1.5">
                          {item.title}
                        </div>
                        <div className="text-xs text-gray-400 mt-0.5 group-hover/prod:text-gray-300">{item.desc}</div>
                      </div>
                      <ArrowRight className="w-3.5 h-3.5 text-indigo-400 opacity-0 group-hover/prod:opacity-100 group-hover/prod:translate-x-1 transition-all shrink-0 ml-2" />
                    </div>
                  ))}
                </div>
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

        {/* Right Metallic Gradient CTA Button */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={onOpenContact}
            className="relative group px-6 py-2.5 rounded-full bg-gradient-to-r from-[#FF5500] via-[#FF3D00] to-amber-500 font-extrabold text-sm text-white shadow-[0_4px_25px_rgba(255,69,0,0.5)] hover:shadow-[0_6px_35px_rgba(255,69,0,0.8)] hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
          >
            <span className="flex items-center gap-1.5">
              Contact Us
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
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
        <div className="lg:hidden fixed inset-x-4 top-20 rounded-3xl bg-[#0D0D12]/95 backdrop-blur-2xl border border-white/20 p-6 shadow-2xl flex flex-col gap-4 z-50 text-white animate-in fade-in slide-in-from-top-4 max-h-[85vh] overflow-y-auto">
          <button 
            onClick={() => handleNavClick('about')} 
            className="text-left text-base font-bold py-2 border-b border-white/10 hover:text-[#FF4500] cursor-pointer flex items-center justify-between"
          >
            About Us <span className="text-xs text-orange-400 font-normal">Company Scale & Team</span>
          </button>
          
          <div className="py-2 border-b border-white/10">
            <button 
              onClick={() => handleNavClick('expertise')} 
              className="w-full text-left text-base font-bold hover:text-[#FF4500] flex items-center justify-between cursor-pointer mb-2"
            >
              Capabilities <span className="text-xs text-orange-400 font-normal">4 Core Services</span>
            </button>
            <div className="pl-3 space-y-1.5">
              {capabilitiesMenu.map((c) => (
                <div 
                  key={c.id}
                  onClick={() => handleNavClick('expertise', c.id)}
                  className="text-xs text-gray-300 hover:text-[#FF4500] py-1 flex items-center justify-between cursor-pointer"
                >
                  <span>{c.title}</span>
                  <ArrowRight className="w-3 h-3 text-orange-400" />
                </div>
              ))}
            </div>
          </div>

          <div className="py-2 border-b border-white/10">
            <button 
              onClick={() => handleNavClick('industries')} 
              className="w-full text-left text-base font-bold hover:text-[#FF4500] flex items-center justify-between cursor-pointer mb-2"
            >
              Industries <span className="text-xs text-emerald-400 font-normal">Dedicated Page</span>
            </button>
            <div className="pl-3 space-y-1.5">
              {industriesMenu.map((ind) => (
                <div 
                  key={ind.id}
                  onClick={() => handleNavClick('industries', ind.id)}
                  className="text-xs text-gray-300 hover:text-emerald-400 py-1 flex items-center justify-between cursor-pointer"
                >
                  <span>{ind.title}</span>
                  <span className="text-[9px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400">{ind.badge}</span>
                </div>
              ))}
            </div>
          </div>

          <button 
            onClick={() => handleNavClick('success-stories')} 
            className="text-left text-base font-bold py-2 border-b border-white/10 hover:text-[#FF4500] cursor-pointer"
          >
            Success Stories
          </button>
          
          <div className="py-2 border-b border-white/10">
            <button 
              onClick={() => handleNavClick('products')} 
              className="w-full text-left text-base font-bold hover:text-[#FF4500] flex items-center justify-between cursor-pointer mb-2"
            >
              Products & Platforms
            </button>
            <div className="pl-3 space-y-1.5">
              {productsMenu.map((prod) => (
                <div 
                  key={prod.id}
                  onClick={() => handleNavClick('products', prod.id)}
                  className="text-xs text-gray-300 hover:text-indigo-400 py-1 flex items-center justify-between cursor-pointer"
                >
                  <span>{prod.title}</span>
                  <ArrowRight className="w-3 h-3 text-indigo-400" />
                </div>
              ))}
            </div>
          </div>

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
