import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { FaTwitter, FaLinkedinIn, FaFacebookF, FaInstagram } from 'react-icons/fa6';
import { FiMail, FiPhone, FiArrowRight, FiShield, FiCheckCircle } from 'react-icons/fi';
import { Sparkles, Globe, ShieldCheck, Zap } from 'lucide-react';

export default function Footer({ onNavigate, onOpenContact }) {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLinkClick = (e, id) => {
    e.preventDefault();
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

  const handleContactClick = () => {
    if (onOpenContact) {
      onOpenContact();
    } else {
      const el = document.getElementById('careers');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="w-full bg-[#07080C] text-slate-300 relative overflow-hidden border-t border-slate-800/80 pt-16 pb-12">
      
      {/* Ambient Neon Background Glow Effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#FF4500]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* 1. HIGH-IMPACT PRE-FOOTER LAUNCH BANNER */}
        <div className="rounded-3xl bg-gradient-to-r from-slate-900 via-[#0E1017] to-slate-900 p-8 sm:p-12 md:p-14 border border-white/15 shadow-2xl mb-16 relative overflow-hidden group">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center text-left">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/20 text-orange-400 border border-orange-500/30 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-orange-400" />
                <span>READY FOR ENTERPRISE AI SCALE?</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-['Outfit'] leading-tight">
                Ready to Build the <span className="bg-gradient-to-r from-[#FF5500] via-[#FF6B00] to-amber-400 text-transparent bg-clip-text">Intelligent Infrastructure</span> of Tomorrow?
              </h2>

              <p className="text-gray-300 text-sm sm:text-base leading-relaxed font-medium max-w-2xl">
                Accelerate your digital transformation with NeuZenAI's custom machine learning models, proprietary SaaS platforms, and verified performance SLAs.
              </p>

              {/* Trust Badges Bar */}
              <div className="flex flex-wrap items-center gap-6 pt-2 text-xs font-bold text-slate-300">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>99.8% Precision SLA</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <FiShield className="w-4 h-4 text-orange-400" />
                  <span>ISO/IEC 27001 & 42001 Certified</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Zap className="w-4 h-4 text-amber-400" />
                  <span>24/7 Global Architect Support</span>
                </div>
              </div>
            </div>

            {/* CTA Buttons Right */}
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-4">
              <button
                onClick={handleContactClick}
                className="w-full py-4 px-6 rounded-full bg-gradient-to-r from-[#FF5500] to-[#FF3D00] hover:from-[#FF4500] hover:to-[#E63900] font-extrabold text-sm text-white shadow-xl shadow-orange-500/30 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>START YOUR AI JOURNEY</span>
                <FiArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={(e) => handleLinkClick(e, 'success-stories')}
                className="w-full py-4 px-6 rounded-full bg-white/10 hover:bg-white/20 text-white font-extrabold text-sm border border-white/20 hover:scale-[1.02] transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>EXPLORE CASE STUDIES</span>
              </button>
            </div>
          </div>

        </div>

        {/* 2. GIANT NEUZENAI 3D GRADIENT SIGNATURE TITLE */}
        <div className="flex justify-center mb-16 select-none group">
          <h1 className="text-6xl sm:text-8xl md:text-9xl lg:text-[10rem] font-black font-['Outfit'] tracking-tight bg-gradient-to-b from-[#FF6A00] via-[#FF4500] to-[#802000] text-transparent bg-clip-text text-center drop-shadow-[0_0_40px_rgba(255,85,0,0.3)] group-hover:scale-105 transition-transform duration-700">
            NeuZenAI
          </h1>
        </div>

        {/* 3. MAIN FOOTER CONTENT COLUMNS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 items-start mb-16 text-left">
          
          {/* Column 1: Summary Card & Social Buttons (Span 4) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="rounded-3xl border border-slate-800 bg-slate-900/90 p-6 shadow-xl text-xs sm:text-sm text-slate-300 leading-relaxed font-medium backdrop-blur-xl">
              Accelerate your <span className="text-[#FF5500] font-bold">digital</span> transformation with NeuZenAI's custom <span className="text-[#FF5500] font-bold">machine learning</span> models, proprietary <span className="text-[#FF5500] font-bold">AI</span> platforms, and <span className="text-[#FF5500] font-bold">data-driven</span> product engineering. From concept to scale, we <span className="text-[#FF5500] font-bold">build</span> the <span className="text-[#FF5500] font-bold">intelligent systems</span> that power your future.
            </div>

            {/* Metallic Social Media Buttons */}
            <div className="flex items-center gap-3">
              <a 
                href="#twitter" 
                aria-label="Twitter"
                className="w-11 h-11 rounded-2xl bg-slate-900 hover:bg-[#FF4500] text-orange-400 hover:text-white border border-slate-800 flex items-center justify-center transition-all duration-300 shadow-md hover:scale-110 cursor-pointer"
              >
                <FaTwitter className="w-4 h-4" />
              </a>
              <a 
                href="#linkedin" 
                aria-label="LinkedIn"
                className="w-11 h-11 rounded-2xl bg-slate-900 hover:bg-[#FF4500] text-orange-400 hover:text-white border border-slate-800 flex items-center justify-center transition-all duration-300 shadow-md hover:scale-110 cursor-pointer"
              >
                <FaLinkedinIn className="w-4 h-4" />
              </a>
              <a 
                href="#facebook" 
                aria-label="Facebook"
                className="w-11 h-11 rounded-2xl bg-slate-900 hover:bg-[#FF4500] text-orange-400 hover:text-white border border-slate-800 flex items-center justify-center transition-all duration-300 shadow-md hover:scale-110 cursor-pointer"
              >
                <FaFacebookF className="w-4 h-4" />
              </a>
              <a 
                href="#instagram" 
                aria-label="Instagram"
                className="w-11 h-11 rounded-2xl bg-slate-900 hover:bg-[#FF4500] text-orange-400 hover:text-white border border-slate-800 flex items-center justify-center transition-all duration-300 shadow-md hover:scale-110 cursor-pointer"
              >
                <FaInstagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Company Navigation (Span 2) */}
          <div className="lg:col-span-2">
            <h4 className="text-base font-bold text-white mb-4 font-['Outfit'] tracking-wider uppercase">
              Company
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm font-semibold text-slate-400">
              <li>
                <a href="#about" onClick={(e) => handleLinkClick(e, 'about')} className="hover:text-[#FF4500] transition-colors flex items-center gap-1.5 group cursor-pointer">
                  <span className="text-[#FF4500] group-hover:translate-x-1 transition-transform">→</span>
                  <span>About Us</span>
                </a>
              </li>
              <li>
                <a href="#expertise" onClick={(e) => handleLinkClick(e, 'expertise')} className="hover:text-[#FF4500] transition-colors flex items-center gap-1.5 group cursor-pointer">
                  <span className="text-[#FF4500] group-hover:translate-x-1 transition-transform">→</span>
                  <span>Capabilities</span>
                </a>
              </li>
              <li>
                <a href="#industries" onClick={(e) => handleLinkClick(e, 'industries')} className="hover:text-[#FF4500] transition-colors flex items-center gap-1.5 group cursor-pointer">
                  <span className="text-[#FF4500] group-hover:translate-x-1 transition-transform">→</span>
                  <span>Industries</span>
                </a>
              </li>
              <li>
                <a href="#success-stories" onClick={(e) => handleLinkClick(e, 'success-stories')} className="hover:text-[#FF4500] transition-colors flex items-center gap-1.5 group cursor-pointer">
                  <span className="text-[#FF4500] group-hover:translate-x-1 transition-transform">→</span>
                  <span>Success Stories</span>
                </a>
              </li>
              <li>
                <a href="#careers" onClick={(e) => handleLinkClick(e, 'careers')} className="hover:text-[#FF4500] transition-colors flex items-center gap-1.5 group cursor-pointer">
                  <span className="text-[#FF4500] group-hover:translate-x-1 transition-transform">→</span>
                  <span>Careers</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Enterprise Products Suite (Span 2) */}
          <div className="lg:col-span-2">
            <h4 className="text-base font-bold text-white mb-4 font-['Outfit'] tracking-wider uppercase">
              Products
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm font-semibold text-slate-400">
              <li>
                <a href="#products" onClick={(e) => handleLinkClick(e, 'products')} className="hover:text-[#FF4500] transition-colors flex items-center gap-1.5 group cursor-pointer">
                  <span className="text-[#FF4500] group-hover:translate-x-1 transition-transform">→</span>
                  <span>ArQ<span className="text-[#FF4500]">Pulse</span></span>
                </a>
              </li>
              <li>
                <a href="#products" onClick={(e) => handleLinkClick(e, 'products')} className="hover:text-[#FF4500] transition-colors flex items-center gap-1.5 group cursor-pointer">
                  <span className="text-[#FF4500] group-hover:translate-x-1 transition-transform">→</span>
                  <span>Lens <span className="text-[#FF4500]">AI</span></span>
                </a>
              </li>
              <li>
                <a href="#products" onClick={(e) => handleLinkClick(e, 'products')} className="hover:text-[#FF4500] transition-colors flex items-center gap-1.5 group cursor-pointer">
                  <span className="text-[#FF4500] group-hover:translate-x-1 transition-transform">→</span>
                  <span>Nvision <span className="text-[#FF4500]">AI</span></span>
                </a>
              </li>
              <li>
                <a href="#products" onClick={(e) => handleLinkClick(e, 'products')} className="hover:text-[#FF4500] transition-colors flex items-center gap-1.5 group cursor-pointer">
                  <span className="text-[#FF4500] group-hover:translate-x-1 transition-transform">→</span>
                  <span>Pipelyt</span>
                </a>
              </li>
              <li>
                <a href="#products" onClick={(e) => handleLinkClick(e, 'products')} className="hover:text-[#FF4500] transition-colors flex items-center gap-1.5 group cursor-pointer">
                  <span className="text-[#FF4500] group-hover:translate-x-1 transition-transform">→</span>
                  <span>Spenzo</span>
                </a>
              </li>
              <li>
                <a href="#products" onClick={(e) => handleLinkClick(e, 'products')} className="hover:text-[#FF4500] transition-colors flex items-center gap-1.5 group cursor-pointer">
                  <span className="text-[#FF4500] group-hover:translate-x-1 transition-transform">→</span>
                  <span>Swass <span className="text-[#FF4500]">AI</span></span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Certifications & Global HQ (Span 4) */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* ISO Certifications Badges */}
            <div>
              <h4 className="text-base font-bold text-white mb-3 font-['Outfit'] tracking-wider uppercase">
                Certifications & Compliance
              </h4>
              <div className="space-y-2 text-xs font-bold text-slate-300">
                <div className="flex items-center gap-2.5 p-2 rounded-xl bg-slate-900 border border-slate-800">
                  <div className="w-7 h-7 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-bold text-[10px] border border-cyan-500/30">
                    ISO
                  </div>
                  <span>ISO/IEC 27001:2022 Security Standard</span>
                </div>
                <div className="flex items-center gap-2.5 p-2 rounded-xl bg-slate-900 border border-slate-800">
                  <div className="w-7 h-7 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-[10px] border border-emerald-500/30">
                    ISO
                  </div>
                  <span>ISO/IEC 42001:2023 AI Management</span>
                </div>
              </div>
            </div>

            {/* Direct Contact Links */}
            <div>
              <h4 className="text-base font-bold text-white mb-3 font-['Outfit'] tracking-wider uppercase">
                Direct Hotline
              </h4>
              <div className="space-y-2 text-xs sm:text-sm text-slate-300">
                <div className="flex items-center gap-2.5">
                  <FiMail className="w-4 h-4 text-orange-400 shrink-0" />
                  <a href="mailto:contact@neuzenai.com" className="font-semibold hover:text-[#FF4500] transition-colors cursor-pointer">
                    contact@neuzenai.com
                  </a>
                </div>
                <div className="flex items-start gap-2.5">
                  <FiPhone className="w-4 h-4 text-orange-400 shrink-0 mt-1" />
                  <div className="text-xs font-bold leading-relaxed">
                    <div>USA: +1 (972) 992-5082</div>
                    <div>India: +91 88852 57422</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Global Offices Card */}
            <div>
              <h4 className="text-base font-bold text-white mb-3 font-['Outfit'] tracking-wider uppercase">
                Global Headquarters
              </h4>
              <div className="rounded-2xl bg-slate-900/90 border border-slate-800 p-4 shadow-xl text-xs">
                <div className="space-y-2">
                  <div>
                    <span className="text-[#FF4500] font-extrabold block">Headquarters (USA)</span>
                    <div className="font-bold text-white">Dallas, U.S.A</div>
                    <div className="text-[11px] text-slate-400 leading-tight">
                      702 S Denton Tap Rd, Suite # 110, Coppell, 75019
                    </div>
                  </div>
                  <div className="pt-2 border-t border-slate-800">
                    <span className="text-emerald-400 font-extrabold block">Development Center (India)</span>
                    <div className="font-bold text-white">Hyderabad, India</div>
                    <div className="text-[11px] text-slate-400 leading-tight">
                      T Hub Phase 2, Inorbit Mall Rd, Madhapur, 500081
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* 4. BOTTOM COPYRIGHT & LIVE SYSTEM HEALTH BAR */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 font-semibold">
          <div>
            © {new Date().getFullYear()} NeuZenAI Inc. All rights reserved. Built for enterprise AI scale.
          </div>

          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[11px]">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>All AI Production Engines Operational</span>
          </div>
        </div>

      </div>

    </footer>
  );
}
