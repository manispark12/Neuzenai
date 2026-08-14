import React, { useState } from 'react';
import { ArrowRight, Sparkles, Zap, ShieldCheck, Activity, Cpu, Layers, Globe } from 'lucide-react';

export default function Hero({ onStartJourney }) {
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    setMouseOffset({
      x: ((clientX - centerX) / centerX) * 12,
      y: ((clientY - centerY) / centerY) * 12,
    });
  };

  return (
    <section 
      id="about" 
      onMouseMove={handleMouseMove}
      className="relative min-h-[92vh] pt-36 pb-20 flex flex-col justify-between items-center overflow-hidden bg-white text-gray-950"
    >
      
      {/* 1. BRIGHT High-Definition Tech Video Stream (Blended for Bright White Theme) */}
      <div 
        className="absolute inset-0 z-0 transition-transform duration-700 ease-out pointer-events-none scale-105"
        style={{
          transform: `translate(${mouseOffset.x}px, ${mouseOffset.y}px) scale(1.06)`,
        }}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=2400&q=95"
          className="w-full h-full object-cover object-center opacity-45 mix-blend-multiply filter contrast-125"
        >
          <source 
            src="https://assets.mixkit.co/videos/preview/mixkit-abstract-technology-network-lines-connecting-nodes-42931-large.mp4" 
            type="video/mp4" 
          />
          <source 
            src="https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-screens-and-data-41549-large.mp4" 
            type="video/mp4" 
          />
        </video>
      </div>

      {/* 2. Soft Bright Radial Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[750px] bg-gradient-to-tr from-orange-300/30 via-emerald-200/20 to-transparent rounded-full blur-[120px] pointer-events-none" />

      {/* 3. Subtle Cybernetic Grid Overlay */}
      <div className="absolute inset-0 z-0 opacity-15 pointer-events-none bg-[radial-gradient(#FF4500_1px,transparent_1px)] [background-size:24px_24px]" />

      {/* Main Hero Content Block */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center flex flex-col items-center my-auto">
        
        {/* Top Tag Pill: White Frosted Glass with Orange Accent */}
        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/95 border border-orange-300/90 text-orange-600 text-xs font-black tracking-widest uppercase mb-8 shadow-xl shadow-orange-500/10 backdrop-blur-md">
          <Sparkles className="w-3.5 h-3.5 text-[#FF4500]" />
          <span>CYBERNETIC ENTERPRISE NEURAL CORE</span>
          <span className="w-2 h-2 rounded-full bg-[#00C853] animate-ping" />
        </div>

        {/* High-Impact Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-gray-950 font-['Outfit'] leading-[1.05] max-w-5xl drop-shadow-[0_4px_25px_rgba(255,255,255,0.95)]">
          Architecting Autonomous <br />
          <span className="bg-gradient-to-r from-[#FF4500] via-[#FF3D00] to-[#00C853] bg-clip-text text-transparent drop-shadow-[0_2px_15px_rgba(255,69,0,0.3)]">
            Enterprise Intelligence
          </span>
        </h1>

        <div className="flex items-center justify-center gap-3 my-4">
          <span className="text-2xl sm:text-4xl md:text-5xl font-black text-gray-950 font-['Outfit']">
            build <span className="text-[#FF4500] underline decoration-orange-500/60 underline-offset-4">smarter</span>, scale <span className="text-[#00C853] underline decoration-emerald-500/60 underline-offset-4">faster</span>
          </span>
        </div>

        {/* Subtitle Card with Frosted White Backing for 100% Readability */}
        <div className="mt-2 mb-10 p-4 sm:p-5 rounded-3xl bg-white/90 backdrop-blur-2xl border border-white/90 shadow-xl max-w-3xl">
          <p className="text-base sm:text-xl md:text-2xl text-gray-950 font-bold leading-relaxed">
            Deploy custom <span className="text-[#00C853] font-black">neural engines</span>, real-time <span className="text-[#FF4500] font-black">forecast pipelines</span>, and multi-agent systems with sub-millisecond latency and verified SLAs.
          </p>
        </div>

        {/* Action CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-5 z-20">
          <button
            onClick={onStartJourney}
            className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-[#FF5500] via-[#FF3D00] to-amber-500 text-white font-black text-base sm:text-lg shadow-[0_10px_35px_rgba(255,69,0,0.45)] hover:shadow-[0_15px_45px_rgba(255,69,0,0.7)] hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
          >
            <span>START YOUR AI JOURNEY</span>
            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-1 transition-transform">
              <ArrowRight className="w-4 h-4 text-white" />
            </div>
          </button>

          <button
            onClick={() => {
              const el = document.getElementById('expertise');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-8 py-4 rounded-full bg-white/95 hover:bg-white text-gray-950 font-extrabold text-base border border-gray-300 hover:border-emerald-500 shadow-xl backdrop-blur-md transition-all duration-300 cursor-pointer flex items-center gap-2"
          >
            <Cpu className="w-4 h-4 text-[#FF4500]" />
            <span>EXPLORE BLUEPRINTS</span>
          </button>
        </div>

        {/* Floating Side HUD Badges (Desktop) */}
        <div className="hidden lg:flex absolute -left-14 top-1/2 -translate-y-1/2 p-4 rounded-3xl bg-white/95 border border-orange-200 backdrop-blur-2xl shadow-2xl text-left gap-3.5 items-center animate-bounce duration-1000">
          <div className="p-2.5 rounded-2xl bg-orange-500 text-white shadow-md shadow-orange-500/40">
            <Zap className="w-5 h-5" />
          </div>
          <div>
            <div className="text-[10px] uppercase font-black text-gray-500 tracking-wider">Inference SLA</div>
            <div className="text-sm font-extrabold text-gray-950 font-mono">&lt; 8ms Latency</div>
          </div>
        </div>

        <div className="hidden lg:flex absolute -right-14 top-1/2 -translate-y-1/2 p-4 rounded-3xl bg-white/95 border border-emerald-200 backdrop-blur-2xl shadow-2xl text-left gap-3.5 items-center animate-bounce duration-1000 delay-500">
          <div className="p-2.5 rounded-2xl bg-emerald-500 text-white shadow-md shadow-emerald-500/40">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div>
            <div className="text-[10px] uppercase font-black text-gray-500 tracking-wider">Security Standard</div>
            <div className="text-sm font-extrabold text-gray-950 font-mono">SOC2 & HIPAA</div>
          </div>
        </div>

      </div>

      {/* Bottom Live SLA Stat Counter Bar */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 mt-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 rounded-3xl bg-white/95 border border-gray-200/90 backdrop-blur-2xl shadow-2xl">
          
          <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80">
            <div className="p-2.5 rounded-xl bg-orange-500 text-white shadow-sm">
              <Activity className="w-5 h-5" />
            </div>
            <div className="text-left">
              <div className="text-xl font-extrabold text-gray-950 font-['Outfit']">99.9%</div>
              <div className="text-[10px] font-extrabold text-gray-600 uppercase">Uptime SLA</div>
            </div>
          </div>

          <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80">
            <div className="p-2.5 rounded-xl bg-emerald-500 text-white shadow-sm">
              <Zap className="w-5 h-5" />
            </div>
            <div className="text-left">
              <div className="text-xl font-extrabold text-gray-950 font-['Outfit']">&lt; 8ms</div>
              <div className="text-[10px] font-extrabold text-gray-600 uppercase">Inference Latency</div>
            </div>
          </div>

          <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80">
            <div className="p-2.5 rounded-xl bg-indigo-500 text-white shadow-sm">
              <Layers className="w-5 h-5" />
            </div>
            <div className="text-left">
              <div className="text-xl font-extrabold text-gray-950 font-['Outfit']">1B+</div>
              <div className="text-[10px] font-extrabold text-gray-600 uppercase">Daily Operations</div>
            </div>
          </div>

          <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80">
            <div className="p-2.5 rounded-xl bg-amber-500 text-white shadow-sm">
              <Globe className="w-5 h-5" />
            </div>
            <div className="text-left">
              <div className="text-xl font-extrabold text-gray-950 font-['Outfit']">SOC2 / ISO</div>
              <div className="text-[10px] font-extrabold text-gray-600 uppercase">Global Compliance</div>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}
