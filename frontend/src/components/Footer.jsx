import React from 'react';
import { FaTwitter, FaLinkedinIn, FaFacebookF, FaInstagram } from 'react-icons/fa6';
import { FiMail, FiPhone } from 'react-icons/fi';

export default function Footer({ onNavigate, onOpenContact }) {
  const handleLinkClick = (e, id) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(id);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-white text-gray-800 border-t border-gray-200 pt-16 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      
      {/* 1. Giant NeuZenAI 3D Gradient Title matching user screenshot */}
      <div className="flex justify-center mb-16 select-none">
        <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black font-['Outfit'] tracking-tight bg-gradient-to-b from-[#FF5500] via-[#D94600] to-[#802000] text-transparent bg-clip-text text-center drop-shadow-md">
          NeuZenAI
        </h1>
      </div>

      {/* 2. Main Footer Content Columns matching user screenshot */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 items-start mb-16">
        
        {/* Left Column: Summary Card & Social Buttons (Span 4) */}
        <div className="lg:col-span-4 space-y-6">
          {/* Soft rounded highlight summary box */}
          <div className="rounded-3xl border border-orange-200/80 bg-orange-50/20 p-6 shadow-sm text-sm text-gray-700 leading-relaxed font-medium">
            Accelerate your <span className="text-[#FF4500] font-bold">digital</span> transformation with NeuZenAI's custom <span className="text-[#FF4500] font-bold">machine learning</span> models, proprietary <span className="text-[#FF4500] font-bold">AI</span> platforms, and <span className="text-[#FF4500] font-bold">data-driven</span> product engineering. From concept to scale, we <span className="text-[#FF4500] font-bold">build</span> the <span className="text-[#FF4500] font-bold">intelligent systems</span> that power your future.
          </div>

          {/* Social Media Buttons (4 Circular Badges using react-icons) */}
          <div className="flex items-center gap-3">
            <a 
              href="#twitter" 
              aria-label="Twitter"
              className="w-10 h-10 rounded-full bg-orange-50/80 hover:bg-[#FF4500] text-[#FF4500] hover:text-white border border-orange-100 flex items-center justify-center transition-all duration-200 shadow-sm"
            >
              <FaTwitter className="w-4 h-4" />
            </a>
            <a 
              href="#linkedin" 
              aria-label="LinkedIn"
              className="w-10 h-10 rounded-full bg-orange-50/80 hover:bg-[#FF4500] text-[#FF4500] hover:text-white border border-orange-100 flex items-center justify-center transition-all duration-200 shadow-sm"
            >
              <FaLinkedinIn className="w-4 h-4" />
            </a>
            <a 
              href="#facebook" 
              aria-label="Facebook"
              className="w-10 h-10 rounded-full bg-orange-50/80 hover:bg-[#FF4500] text-[#FF4500] hover:text-white border border-orange-100 flex items-center justify-center transition-all duration-200 shadow-sm"
            >
              <FaFacebookF className="w-4 h-4" />
            </a>
            <a 
              href="#instagram" 
              aria-label="Instagram"
              className="w-10 h-10 rounded-full bg-orange-50/80 hover:bg-[#FF4500] text-[#FF4500] hover:text-white border border-orange-100 flex items-center justify-center transition-all duration-200 shadow-sm"
            >
              <FaInstagram className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Company Column (Span 2) */}
        <div className="lg:col-span-2">
          <h4 className="text-base font-bold text-gray-900 mb-4 font-['Outfit']">
            Company
          </h4>
          <ul className="space-y-3 text-sm font-semibold text-gray-700">
            <li>
              <a href="#about" onClick={(e) => handleLinkClick(e, 'about')} className="hover:text-[#FF4500] transition-colors flex items-center gap-1.5 group">
                <span className="text-[#FF4500] group-hover:translate-x-1 transition-transform">→</span>
                <span>About Us</span>
              </a>
            </li>
            <li>
              <a href="#expertise" onClick={(e) => handleLinkClick(e, 'expertise')} className="hover:text-[#FF4500] transition-colors flex items-center gap-1.5 group">
                <span className="text-[#FF4500] group-hover:translate-x-1 transition-transform">→</span>
                <span>Capabilities</span>
              </a>
            </li>
            <li>
              <a href="#industries" onClick={(e) => handleLinkClick(e, 'industries')} className="hover:text-[#FF4500] transition-colors flex items-center gap-1.5 group">
                <span className="text-[#FF4500] group-hover:translate-x-1 transition-transform">→</span>
                <span>Industries</span>
              </a>
            </li>
            <li>
              <a href="#success-stories" onClick={(e) => handleLinkClick(e, 'success-stories')} className="hover:text-[#FF4500] transition-colors flex items-center gap-1.5 group">
                <span className="text-[#FF4500] group-hover:translate-x-1 transition-transform">→</span>
                <span>Success Stories</span>
              </a>
            </li>
            <li>
              <a href="#careers" onClick={(e) => handleLinkClick(e, 'careers')} className="hover:text-[#FF4500] transition-colors flex items-center gap-1.5 group">
                <span className="text-[#FF4500] group-hover:translate-x-1 transition-transform">→</span>
                <span>Careers</span>
              </a>
            </li>
          </ul>
        </div>

        {/* Products Column (Span 2) */}
        <div className="lg:col-span-2">
          <h4 className="text-base font-bold text-gray-900 mb-4 font-['Outfit']">
            Products
          </h4>
          <ul className="space-y-3 text-sm font-semibold text-gray-700">
            <li>
              <a href="#products" onClick={(e) => handleLinkClick(e, 'products')} className="hover:text-[#FF4500] transition-colors flex items-center gap-1.5 group">
                <span className="text-[#FF4500] group-hover:translate-x-1 transition-transform">→</span>
                <span>ArQ<span className="text-[#FF4500]">Pulse</span></span>
              </a>
            </li>
            <li>
              <a href="#products" onClick={(e) => handleLinkClick(e, 'products')} className="hover:text-[#FF4500] transition-colors flex items-center gap-1.5 group">
                <span className="text-[#FF4500] group-hover:translate-x-1 transition-transform">→</span>
                <span>Lens <span className="text-[#FF4500]">AI</span></span>
              </a>
            </li>
            <li>
              <a href="#products" onClick={(e) => handleLinkClick(e, 'products')} className="hover:text-[#FF4500] transition-colors flex items-center gap-1.5 group">
                <span className="text-[#FF4500] group-hover:translate-x-1 transition-transform">→</span>
                <span>Nvision <span className="text-[#FF4500]">AI</span></span>
              </a>
            </li>
            <li>
              <a href="#products" onClick={(e) => handleLinkClick(e, 'products')} className="hover:text-[#FF4500] transition-colors flex items-center gap-1.5 group">
                <span className="text-[#FF4500] group-hover:translate-x-1 transition-transform">→</span>
                <span>Pipelyt</span>
              </a>
            </li>
            <li>
              <a href="#products" onClick={(e) => handleLinkClick(e, 'products')} className="hover:text-[#FF4500] transition-colors flex items-center gap-1.5 group">
                <span className="text-[#FF4500] group-hover:translate-x-1 transition-transform">→</span>
                <span>Spenzo</span>
              </a>
            </li>
            <li>
              <a href="#products" onClick={(e) => handleLinkClick(e, 'products')} className="hover:text-[#FF4500] transition-colors flex items-center gap-1.5 group">
                <span className="text-[#FF4500] group-hover:translate-x-1 transition-transform">→</span>
                <span>Swass <span className="text-[#FF4500]">AI</span></span>
              </a>
            </li>
          </ul>
        </div>

        {/* Certifications & Contact Column (Span 4) */}
        <div className="lg:col-span-4 space-y-6">
          {/* Certifications Section matching screenshot */}
          <div>
            <h4 className="text-base font-bold text-gray-900 mb-3 font-['Outfit']">
              Certifications
            </h4>
            <div className="space-y-2 text-xs font-bold text-gray-800">
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-full bg-cyan-100 text-cyan-700 flex items-center justify-center font-bold text-[10px] border border-cyan-300">
                  ISO
                </div>
                <span>ISO/IEC 27001:2022</span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-full bg-[#D1FAE5] text-[#047857] flex items-center justify-center font-bold text-[10px] border border-emerald-300">
                  ISO
                </div>
                <span>ISO/IEC 42001:2023</span>
              </div>
            </div>
          </div>

          {/* Contact Details matching screenshot */}
          <div>
            <h4 className="text-base font-bold text-gray-900 mb-3 font-['Outfit']">
              Contact
            </h4>
            <div className="space-y-2 text-sm text-gray-700">
              <div className="flex items-center gap-2.5">
                <FiMail className="w-4 h-4 text-gray-900 shrink-0" />
                <a href="mailto:contact@neuzenai.com" className="font-semibold hover:text-[#FF4500]">
                  contact@neuzenai.com
                </a>
              </div>
              <div className="flex items-start gap-2.5">
                <FiPhone className="w-4 h-4 text-gray-900 shrink-0 mt-1" />
                <div className="text-xs font-bold leading-relaxed">
                  <div>USA: +1 (972) 992-5082</div>
                  <div>India: +91 88852 57422</div>
                </div>
              </div>
            </div>
          </div>

          {/* Our Locations Card matching screenshot */}
          <div>
            <h4 className="text-base font-bold text-gray-900 mb-3 font-['Outfit']">
              Our Locations
            </h4>
            <div className="rounded-3xl bg-slate-50 border border-gray-200/80 p-4 shadow-sm">
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-center text-xs">
                {/* World Map Thumbnail */}
                <div className="sm:col-span-5 rounded-2xl overflow-hidden border border-gray-300 shadow-sm h-24 bg-gray-900">
                  <img 
                    src="/world_map.jpg" 
                    alt="NeuzenAI Global Locations" 
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Locations Text */}
                <div className="sm:col-span-7 space-y-2">
                  <div>
                    <span className="text-[#FF4500] font-extrabold block">Headquarters</span>
                    <div className="font-bold text-gray-900">Dallas, U.S.A</div>
                    <div className="text-[11px] text-gray-600 leading-tight">
                      702 S Denton Tap Rd, Suite # 110, Coppell, 75019
                    </div>
                  </div>
                  <div className="pt-1 border-t border-gray-200">
                    <div className="font-bold text-gray-900">Hyderabad, India</div>
                    <div className="text-[11px] text-gray-600 leading-tight">
                      T Hub Phase 2, Inorbit Mall Rd, Madhapur, 500081
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* Bottom Copyright Bar */}
      <div className="pt-8 border-t border-gray-200 text-center text-xs text-gray-500 font-semibold">
        © {new Date().getFullYear()} NeuZenAI Inc. All rights reserved. Built with precision for enterprise AI scale.
      </div>
    </footer>
  );
}
