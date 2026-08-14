import React, { useState, useEffect } from 'react';
import { Sparkles, ArrowRight, CheckCircle2, X, ShieldCheck, Zap, Cpu, Activity, Globe, Award, Layers } from 'lucide-react';

export default function Industries({ onSelectIndustry, onOpenContact, selectedIndustry }) {
  const [activeTab, setActiveTab] = useState('energy');
  const [selectedModal, setSelectedModal] = useState(null);

  useEffect(() => {
    if (selectedIndustry) {
      setActiveTab(selectedIndustry);
    }
  }, [selectedIndustry]);

  const industriesData = {
    energy: {
      id: 'energy',
      title: 'Energy & Utilities',
      badge: '500+ Smart Grids Managed',
      color: 'bg-[#10B981]',
      textColor: 'text-[#10B981]',
      borderColor: 'border-emerald-500',
      image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1200&q=80',
      tagline: 'Smart grid optimization, predictive maintenance, and renewable energy forecasting.',
      description: 'Our tech solutions for energy sector focus on efficient management, predictive maintenance, and optimization of renewable sources. We aim to optimize energy consumption and enable smart grid management.',
      solutions: [
        'Grid Optimization & Load Balancing',
        'Time-Series Energy Demand Forecasting',
        'Predictive Transformer Asset Maintenance',
        'Renewable Solar/Wind Integration AI'
      ],
      impact: '25% average operational energy savings with 99.9% uptime SLA',
      compliance: 'ISO 5001, NERC CIP & SOC2',
      latency: '< 12ms Inference'
    },
    finance: {
      id: 'finance',
      title: 'Financial Services',
      badge: '1B+ Daily Transactions',
      color: 'bg-[#FF4500]',
      textColor: 'text-[#FF4500]',
      borderColor: 'border-[#FF4500]',
      image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1200&q=80',
      tagline: 'High-speed fraud detection, credit scoring, and algorithmic risk mitigation.',
      description: 'Implementing AI solutions for risk analysis, fraud detection, customer service automation, and financial data management, we enhance fraud detection and automate risk management for a more secure financial environment.',
      solutions: [
        'Real-Time Fraud Detection (<10ms)',
        'Automated Credit Risk & Scoring Models',
        'Algorithmic Trading & Liquidity Insights',
        'Regulatory Compliance & Anti-Money Laundering'
      ],
      impact: 'Analyzed $12B+ transactional flow with 99.8% detection precision',
      compliance: 'PCI-DSS Level 1, ISO 27001 & SOC2',
      latency: '< 8ms Inference'
    },
    healthcare: {
      id: 'healthcare',
      title: 'Healthcare & Insurance',
      badge: '500K+ Policies Processed',
      color: 'bg-[#059669]',
      textColor: 'text-[#059669]',
      borderColor: 'border-[#059669]',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80',
      tagline: 'HIPAA-compliant document AI, automated claims adjudication, and health analytics.',
      description: 'Risk assessment, claims processing automation, and predictive health analytics for better coverage decisions, regulatory compliance, and improved patient care.',
      solutions: [
        'Cognitive Claims Adjudication Automation',
        'HIPAA-Compliant Document & Medical OCR',
        'Predictive Patient Risk Stratification',
        'Medical Policy Fraud & Abuse Anomaly AI'
      ],
      impact: 'Reduced claims adjudication latency from 14 days down to 4 minutes',
      compliance: 'HIPAA Compliant, ISO 42001 & SOC2',
      latency: '< 15ms Inference'
    },
    retail: {
      id: 'retail',
      title: 'E-Commerce & Retail',
      badge: '2M+ Shoppers Served',
      color: 'bg-[#8B5CF6]',
      textColor: 'text-[#8B5CF6]',
      borderColor: 'border-purple-500',
      image: 'https://images.unsplash.com/photo-1556742049-0a67dd35817d?auto=format&fit=crop&w=1200&q=80',
      tagline: 'Real-time hyper-personalization, dynamic pricing, and AI inventory optimization.',
      description: 'Personalized shopping experiences, inventory optimization, and customer behavior analysis for increased sales, shopper retention, and dynamic margin pricing.',
      solutions: [
        'Real-Time Behavioral Recommendation Engine',
        'Dynamic Margin & Competitive Pricing AI',
        'Predictive Stock & Supply Chain Forecasting',
        'Omnichannel Customer Sentiment & Clustering'
      ],
      impact: '+35% conversion lift and +28% average order value (AOV)',
      compliance: 'GDPR, CCPA & PCI-DSS',
      latency: '< 10ms Inference'
    }
  };

  const activeInd = industriesData[activeTab] || industriesData.energy;

  const handleContactClick = (sectorTitle) => {
    if (onSelectIndustry) {
      onSelectIndustry(sectorTitle);
    } else if (onOpenContact) {
      onOpenContact();
    } else {
      const el = document.getElementById('careers');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="industries" className="w-full bg-white overflow-hidden py-16">
      
      {/* 1. HEADER SECTION */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#FF5500]/10 to-emerald-500/10 border border-[#FF5500]/30 text-[#FF4500] font-extrabold text-xs tracking-wider uppercase mb-4 shadow-sm">
          <Globe className="w-3.5 h-3.5 text-[#FF4500]" />
          <span>ENTERPRISE SECTOR BLUEPRINTS</span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#FF4500] tracking-tight font-['Outfit'] mb-4">
          Tailored AI for Global Industries
        </h1>

        <p className="text-base sm:text-lg text-gray-600 font-medium max-w-2xl leading-relaxed">
          Deploying domain-trained neural models, sub-millisecond inference engines, and compliant automation across high-impact enterprise sectors.
        </p>
      </div>

      {/* 2. INTERACTIVE SECTOR WORKBENCH STAGE (NEW LAYOUT) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        
        {/* Top Sector Selector Tabs Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {Object.values(industriesData).map((ind) => {
            const isSelected = ind.id === activeTab;
            return (
              <div
                key={ind.id}
                onClick={() => setActiveTab(ind.id)}
                className={`p-5 rounded-2xl transition-all duration-300 cursor-pointer text-left ${
                  isSelected 
                    ? `bg-[#0D0D10] text-white shadow-xl ring-2 ring-[#FF4500] scale-[1.02]` 
                    : 'bg-slate-50 hover:bg-slate-100 text-gray-700 border border-gray-200/80'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${isSelected ? 'bg-[#FF4500] text-white' : 'bg-gray-200 text-gray-600'}`}>
                    {ind.badge}
                  </span>
                </div>
                <div className={`text-lg font-extrabold font-['Outfit'] ${isSelected ? 'text-white' : 'text-gray-900'}`}>
                  {ind.title}
                </div>
              </div>
            );
          })}
        </div>

        {/* Main Highlight Stage */}
        <div className="rounded-3xl bg-[#0D0D10] text-white p-8 sm:p-12 shadow-2xl border border-white/15 border-t-4 border-t-[#FF4500] relative overflow-hidden group">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            
            {/* Left Column: HD Cover Image */}
            <div className="lg:col-span-6 rounded-2xl overflow-hidden shadow-2xl h-[320px] sm:h-[400px] relative border border-white/10 group-hover:scale-[1.01] transition-transform duration-500">
              <img 
                src={activeInd.image} 
                alt={activeInd.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-6 flex flex-col justify-end text-left">
                <div className="flex items-center gap-2 mb-1">
                  <Activity className="w-4 h-4 text-emerald-400 animate-pulse" />
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">Deployed Production Architecture</span>
                </div>
                <div className="text-xl font-extrabold text-white font-['Outfit']">{activeInd.title}</div>
              </div>
            </div>

            {/* Right Column: Sector Details & Blueprint Actions */}
            <div className="lg:col-span-6 text-left space-y-6">
              <div className="flex items-center gap-3">
                <span className={`px-3 py-1 rounded-full ${activeInd.color} text-white font-extrabold text-xs tracking-wider uppercase shadow-sm`}>
                  {activeInd.badge}
                </span>
                <span className="text-xs font-bold text-gray-400">{activeInd.latency}</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-['Outfit']">
                {activeInd.title}
              </h2>

              <p className="text-gray-300 text-sm sm:text-base leading-relaxed font-medium">
                {activeInd.description}
              </p>

              {/* Core Solutions Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {activeInd.solutions.map((sol, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-[#FF4500] shrink-0" />
                    <span>{sol}</span>
                  </div>
                ))}
              </div>

              {/* Impact Box */}
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-orange-400 block">Verified Sector Impact</span>
                  <div className="text-sm font-extrabold text-white mt-0.5">{activeInd.impact}</div>
                </div>
                <ShieldCheck className="w-6 h-6 text-emerald-400 shrink-0" />
              </div>

              {/* Action Button */}
              <button
                onClick={() => setSelectedModal(activeInd)}
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-[#FF5500] to-[#FF3D00] hover:from-[#FF4500] hover:to-[#E63900] text-white font-extrabold text-sm shadow-xl shadow-orange-500/30 hover:scale-[1.01] active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>LAUNCH SECTOR BLUEPRINT</span>
                <ArrowRight className="w-4 h-4" />
              </button>

            </div>

          </div>

        </div>

      </div>

      {/* 3. SECTOR SOLUTIONS MATRIX GRID (PART 2) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-gray-200">
        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-[#FF4500]">COMPLETE PORTFOLIO</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#FF4500] font-['Outfit'] mt-2">
            Explore Industry Solutions
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.values(industriesData).map((ind) => (
            <div 
              key={ind.id}
              onClick={() => setSelectedModal(ind)}
              className="rounded-3xl bg-white border border-gray-200/80 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all overflow-hidden flex flex-col justify-between cursor-pointer group"
            >
              <div>
                <div className="h-44 overflow-hidden relative">
                  <img 
                    src={ind.image} 
                    alt={ind.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-white font-bold text-[10px]">
                    {ind.badge}
                  </div>
                </div>

                <div className="p-6 text-left">
                  <h3 className="text-xl font-extrabold text-gray-900 font-['Outfit'] mb-2">
                    {ind.title}
                  </h3>
                  <p className="text-gray-600 text-xs leading-relaxed font-normal mb-4 line-clamp-3">
                    {ind.tagline}
                  </p>

                  <div className="space-y-2 mb-6">
                    {ind.solutions.slice(0, 3).map((s, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs font-semibold text-gray-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#FF4500]" />
                        <span className="truncate">{s}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0 text-left">
                <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-[#FF4500]">
                  <span>View Architecture</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 4. ENTERPRISE COMPLIANCE & SLA BENCHMARK MATRIX (PART 3) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-gray-200">
        <div className="text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-[#FF4500]">VERIFIED BENCHMARKS</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 font-['Outfit'] mt-2">
            Enterprise Compliance & SLA Matrix
          </h2>
        </div>

        <div className="overflow-x-auto rounded-3xl border border-gray-200 shadow-md">
          <table className="w-full text-left border-collapse bg-white">
            <thead>
              <tr className="bg-slate-900 text-white text-xs uppercase tracking-wider font-extrabold">
                <th className="p-4 sm:p-5">Industry Sector</th>
                <th className="p-4 sm:p-5">Inference SLA</th>
                <th className="p-4 sm:p-5">Compliance Standard</th>
                <th className="p-4 sm:p-5">Verified Business Impact</th>
                <th className="p-4 sm:p-5 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-sm font-semibold text-gray-800">
              {Object.values(industriesData).map((ind) => (
                <tr key={ind.id} className="hover:bg-slate-50/80 transition-colors">
                  <td className="p-4 sm:p-5 font-extrabold text-gray-950 font-['Outfit']">
                    {ind.title}
                  </td>
                  <td className="p-4 sm:p-5 text-emerald-600 font-bold">
                    {ind.latency}
                  </td>
                  <td className="p-4 sm:p-5">
                    <span className="px-2.5 py-1 rounded-full bg-gray-100 text-gray-700 text-xs font-bold border border-gray-200">
                      {ind.compliance}
                    </span>
                  </td>
                  <td className="p-4 sm:p-5 text-gray-700 font-normal">
                    {ind.impact}
                  </td>
                  <td className="p-4 sm:p-5 text-right">
                    <button
                      onClick={() => handleContactClick(ind.title)}
                      className="px-4 py-2 rounded-full bg-[#FF4500] hover:bg-orange-600 text-white font-bold text-xs transition-all cursor-pointer"
                    >
                      Consult Blueprint →
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 5. INTERACTIVE INDUSTRY DEEP-DIVE MODAL */}
      {selectedModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-8 shadow-2xl relative border border-gray-100 max-h-[90vh] overflow-y-auto">
            
            <button
              onClick={() => setSelectedModal(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className={`px-3 py-1 rounded-full ${selectedModal.color} text-white font-bold text-xs`}>
                {selectedModal.badge}
              </div>
              <span className="text-xs font-bold text-gray-400">{selectedModal.latency}</span>
            </div>

            <h3 className="text-3xl font-extrabold text-gray-900 font-['Outfit'] mb-2">
              {selectedModal.title}
            </h3>

            <p className="text-sm font-bold text-gray-600 mb-6">
              {selectedModal.tagline}
            </p>

            <div className="p-4 rounded-2xl bg-gray-50 border border-gray-200/80 mb-6 flex items-center justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-gray-500">Benchmark Impact</span>
                <p className="text-base font-extrabold text-gray-900 mt-1">{selectedModal.impact}</p>
              </div>
              <div className="text-right">
                <span className="text-xs font-bold uppercase tracking-wider text-gray-500">Compliance</span>
                <p className="text-xs font-bold text-emerald-600 mt-1">{selectedModal.compliance}</p>
              </div>
            </div>

            <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-3">Enterprise Solutions Implemented:</h4>
            <div className="space-y-3 mb-8">
              {selectedModal.solutions.map((sol, i) => (
                <div key={i} className="flex items-start gap-3 text-sm text-gray-800">
                  <CheckCircle2 className="w-5 h-5 text-[#FF4500] shrink-0 mt-0.5" />
                  <span className="font-semibold">{sol}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-end gap-3 pt-4 border-t border-gray-100">
              <button
                onClick={() => setSelectedModal(null)}
                className="px-5 py-2.5 rounded-full border border-gray-300 text-gray-700 font-bold text-sm hover:bg-gray-50 cursor-pointer"
              >
                Close
              </button>
              <button
                onClick={() => {
                  setSelectedModal(null);
                  handleContactClick(selectedModal.title);
                }}
                className="px-6 py-2.5 rounded-full bg-gradient-to-r from-[#FF5500] to-[#FF3D00] text-white font-bold text-sm shadow-lg hover:shadow-orange-500/40 hover:scale-105 transition-all cursor-pointer"
              >
                Discuss Industry Blueprint →
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
