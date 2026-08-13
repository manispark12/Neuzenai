import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, X, Sparkles, ShieldCheck } from 'lucide-react';

export default function Industries({ onSelectIndustry, onOpenContact }) {
  const [selectedModal, setSelectedModal] = useState(null);

  const industryDetails = {
    energy: {
      title: 'Energy & Utilities',
      badge: '500+ Smart Grids Managed',
      color: 'bg-[#10B981]',
      textColor: 'text-[#10B981]',
      image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1200&q=80',
      tagline: 'Smart grid optimization, predictive maintenance, and renewable energy forecasting.',
      description: 'Our tech solutions for energy sector focus on efficient management, predictive maintenance, and optimization of renewable sources. We aim to optimize energy consumption and enable smart grid management.',
      solutions: [
        'Grid Optimization & Load Balancing',
        'Time-Series Energy Demand Forecasting',
        'Predictive Asset & Transformer Maintenance',
        'Renewable Solar/Wind Integration AI'
      ],
      impact: '25% average operational energy savings with 99.9% uptime SLA'
    },
    finance: {
      title: 'Financial Services',
      badge: '1B+ Transactions Analyzed',
      color: 'bg-[#FF4500]',
      textColor: 'text-[#FF4500]',
      image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1200&q=80',
      tagline: 'High-speed fraud detection, credit scoring, and algorithmic risk mitigation.',
      description: 'Implementing AI solutions for risk analysis, fraud detection, customer service automation, and financial data management, we enhance fraud detection and automate risk management for a more secure financial environment.',
      solutions: [
        'Real-Time Fraud Detection (<10ms Inference)',
        'Automated Credit Risk & Scoring Models',
        'Algorithmic Trading & Liquidity Insights',
        'Regulatory Compliance & Anti-Money Laundering'
      ],
      impact: 'Analyzed over $12B+ transactional flow with 99.8% detection precision'
    },
    healthcare: {
      title: 'Healthcare & Insurance',
      badge: '500K+ Policies Processed',
      color: 'bg-[#059669]',
      textColor: 'text-[#059669]',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80',
      tagline: 'HIPAA-compliant document AI, automated claims adjudication, and health analytics.',
      description: 'Risk assessment, claims processing automation, and predictive health analytics for better coverage decisions, regulatory compliance, and improved patient care.',
      solutions: [
        'Cognitive Claims Adjudication Automation',
        'HIPAA-Compliant Document & Medical OCR',
        'Predictive Patient Risk Stratification',
        'Medical Policy Fraud & Abuse Anomaly AI'
      ],
      impact: 'Reduced claims adjudication latency from 14 days down to 4 minutes'
    },
    retail: {
      title: 'E-Commerce & Retail',
      badge: '2M+ Shoppers Served',
      color: 'bg-[#8B5CF6]',
      textColor: 'text-[#8B5CF6]',
      image: 'https://images.unsplash.com/photo-1556742049-0a67dd35817d?auto=format&fit=crop&w=1200&q=80',
      tagline: 'Real-time hyper-personalization, dynamic pricing, and AI inventory optimization.',
      description: 'Personalized shopping experiences, inventory optimization, and customer behavior analysis for increased sales, shopper retention, and dynamic margin pricing.',
      solutions: [
        'Real-Time Behavioral Recommendation Engine',
        'Dynamic Margin & Competitive Pricing AI',
        'Predictive Stock & Supply Chain Forecasting',
        'Omnichannel Customer Sentiment & Clustering'
      ],
      impact: '+35% conversion lift and +28% average order value (AOV)'
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
    <section id="industries" className="w-full bg-white overflow-hidden">
      
      {/* 1. TOP SPLIT HERO BANNER matching user screenshots */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[480px] rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
          
          {/* Left Column: White Crisp Container with "Let's innovate something New" */}
          <div className="lg:col-span-5 bg-white p-8 sm:p-12 md:p-16 flex flex-col justify-center items-start text-left z-10 border-b lg:border-b-0 lg:border-r border-gray-100">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-normal text-gray-900 font-serif leading-[1.15] tracking-tight">
              Let's innovate <br />
              something <br />
              <span className="italic font-serif font-bold text-gray-950">New</span>
            </h1>
            <div className="w-20 h-1.5 bg-[#FF4500] mt-6 rounded-full" />
          </div>

          {/* Right Column: Hero Photo Overlay with "Industries" Title */}
          <div 
            className="lg:col-span-7 relative min-h-[380px] sm:min-h-[450px] p-8 sm:p-12 md:p-16 flex flex-col justify-center items-start text-left bg-cover bg-center"
            style={{
              backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.45)), url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80')`
            }}
          >
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-[#FF4500] font-['Outfit'] tracking-tight mb-6 drop-shadow-md">
              Industries
            </h2>

            <p className="text-lg sm:text-xl text-white font-medium max-w-xl leading-relaxed mb-8 text-slate-100">
              Strengthen your digital capabilities to overcome new challenges and stay nimble, competitive and adaptable.
            </p>

            <button
              onClick={handleContactClick}
              className="px-8 py-3 rounded-full bg-gradient-to-r from-white/30 to-white/10 backdrop-blur-md hover:bg-white/40 text-white font-bold text-base border border-white/50 shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
            >
              Contact Us
            </button>
          </div>

        </div>
      </div>

      {/* 2. OVERVIEW SECTION matching user screenshots */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-b border-gray-200">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Left Label */}
          <div className="md:col-span-3 text-left">
            <h3 className="text-2xl font-extrabold text-[#FF4500] tracking-tight font-['Outfit']">
              Overview
            </h3>
          </div>

          {/* Right Detailed Paragraphs */}
          <div className="md:col-span-9 text-left space-y-4 text-gray-800 text-base sm:text-lg leading-relaxed font-normal">
            <p>
              Businesses today require scalable, secure, and efficient <strong className="font-bold text-gray-950">digital solutions</strong> to stay competitive. Organizations across industries are <strong className="font-bold text-gray-950">adopting AI</strong>, automation, and cloud technologies to improve performance and <strong className="font-bold text-gray-950">accelerate growth</strong>.
            </p>
            <p>
              At NeuZenAI, we provide <strong className="font-bold text-gray-950">AI</strong>-driven solutions and technology services tailored to industry needs. We support Banking & Insurance, Retail, Prisma platforms, and Technology sectors with <strong className="font-bold text-gray-950">intelligent automation</strong>, data analytics, and secure digital transformation services.
            </p>
          </div>

        </div>
      </div>

      {/* 3. "INDUSTRIES WE SERVE" TITLE */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12 text-center">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#FF4500] tracking-tight font-['Outfit']">
          Industries We Serve
        </h2>
      </div>

      {/* 4. ALTERNATING OVERLAPPING CARDS STACK matching user screenshots */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 pb-28">

        {/* CARD 1: Energy & Utilities (Green Card Left Overlapping Image Right) */}
        <div className="relative grid grid-cols-1 lg:grid-cols-12 items-center group">
          {/* Photo Backdrop Right */}
          <div className="lg:col-span-8 lg:col-start-5 rounded-3xl overflow-hidden shadow-2xl h-[340px] sm:h-[420px] w-full">
            <img 
              src={industryDetails.energy.image} 
              alt="Energy & Utilities" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>

          {/* Overlapping Green Floating Card Left */}
          <div className="lg:col-span-6 lg:col-start-1 relative lg:-mr-16 mt-6 lg:mt-0 z-20 rounded-3xl bg-[#10B981] p-8 sm:p-12 text-white shadow-2xl transition-all duration-300 hover:-translate-y-2">
            <h3 className="text-3xl sm:text-4xl font-extrabold font-['Outfit'] mb-4">
              Energy & Utilities
            </h3>
            <p className="text-base sm:text-lg leading-relaxed text-emerald-50 mb-6 font-normal">
              {industryDetails.energy.description}
            </p>

            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/20">
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-white/20 text-white border border-white/30">
                {industryDetails.energy.badge}
              </span>

              <button
                onClick={() => setSelectedModal(industryDetails.energy)}
                className="inline-flex items-center gap-2 text-sm font-extrabold text-white hover:text-emerald-100 transition-colors cursor-pointer"
              >
                <span>View Architecture</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* CARD 2: Financial Services (Image Left Overlapping Orange Card Right) */}
        <div className="relative grid grid-cols-1 lg:grid-cols-12 items-center group">
          {/* Photo Backdrop Left */}
          <div className="lg:col-span-8 lg:col-start-1 rounded-3xl overflow-hidden shadow-2xl h-[340px] sm:h-[420px] w-full">
            <img 
              src={industryDetails.finance.image} 
              alt="Financial Services" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>

          {/* Overlapping Orange Floating Card Right */}
          <div className="lg:col-span-6 lg:col-start-7 relative lg:-ml-16 mt-6 lg:mt-0 z-20 rounded-3xl bg-[#FF4500] p-8 sm:p-12 text-white shadow-2xl transition-all duration-300 hover:-translate-y-2">
            <h3 className="text-3xl sm:text-4xl font-extrabold font-['Outfit'] mb-4">
              Financial Services
            </h3>
            <p className="text-base sm:text-lg leading-relaxed text-orange-50 mb-6 font-normal">
              {industryDetails.finance.description}
            </p>

            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/20">
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-white/20 text-white border border-white/30">
                {industryDetails.finance.badge}
              </span>

              <button
                onClick={() => setSelectedModal(industryDetails.finance)}
                className="inline-flex items-center gap-2 text-sm font-extrabold text-white hover:text-orange-100 transition-colors cursor-pointer"
              >
                <span>View Architecture</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* CARD 3: Healthcare & Insurance (Emerald Blue Card Left Overlapping Image Right) */}
        <div className="relative grid grid-cols-1 lg:grid-cols-12 items-center group">
          {/* Photo Backdrop Right */}
          <div className="lg:col-span-8 lg:col-start-5 rounded-3xl overflow-hidden shadow-2xl h-[340px] sm:h-[420px] w-full">
            <img 
              src={industryDetails.healthcare.image} 
              alt="Healthcare & Insurance" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>

          {/* Overlapping Deep Green Floating Card Left */}
          <div className="lg:col-span-6 lg:col-start-1 relative lg:-mr-16 mt-6 lg:mt-0 z-20 rounded-3xl bg-[#059669] p-8 sm:p-12 text-white shadow-2xl transition-all duration-300 hover:-translate-y-2">
            <h3 className="text-3xl sm:text-4xl font-extrabold font-['Outfit'] mb-4">
              Healthcare & Insurance
            </h3>
            <p className="text-base sm:text-lg leading-relaxed text-emerald-50 mb-6 font-normal">
              {industryDetails.healthcare.description}
            </p>

            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/20">
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-white/20 text-white border border-white/30">
                {industryDetails.healthcare.badge}
              </span>

              <button
                onClick={() => setSelectedModal(industryDetails.healthcare)}
                className="inline-flex items-center gap-2 text-sm font-extrabold text-white hover:text-emerald-100 transition-colors cursor-pointer"
              >
                <span>View Architecture</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* CARD 4: E-Commerce & Retail (Image Left Overlapping Purple Card Right) */}
        <div className="relative grid grid-cols-1 lg:grid-cols-12 items-center group">
          {/* Photo Backdrop Left */}
          <div className="lg:col-span-8 lg:col-start-1 rounded-3xl overflow-hidden shadow-2xl h-[340px] sm:h-[420px] w-full">
            <img 
              src={industryDetails.retail.image} 
              alt="E-Commerce & Retail" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>

          {/* Overlapping Purple Floating Card Right */}
          <div className="lg:col-span-6 lg:col-start-7 relative lg:-ml-16 mt-6 lg:mt-0 z-20 rounded-3xl bg-[#8B5CF6] p-8 sm:p-12 text-white shadow-2xl transition-all duration-300 hover:-translate-y-2">
            <h3 className="text-3xl sm:text-4xl font-extrabold font-['Outfit'] mb-4">
              E-Commerce & Retail
            </h3>
            <p className="text-base sm:text-lg leading-relaxed text-purple-50 mb-6 font-normal">
              {industryDetails.retail.description}
            </p>

            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/20">
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-white/20 text-white border border-white/30">
                {industryDetails.retail.badge}
              </span>

              <button
                onClick={() => setSelectedModal(industryDetails.retail)}
                className="inline-flex items-center gap-2 text-sm font-extrabold text-white hover:text-purple-100 transition-colors cursor-pointer"
              >
                <span>View Architecture</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

      </div>

      {/* 5. INTERACTIVE INDUSTRY DEEP-DIVE MODAL */}
      {selectedModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-in fade-in duration-200">
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
            </div>

            <h3 className="text-3xl font-extrabold text-gray-900 font-['Outfit'] mb-2">
              {selectedModal.title}
            </h3>

            <p className="text-sm font-bold text-gray-600 mb-6">
              {selectedModal.tagline}
            </p>

            <div className="p-4 rounded-2xl bg-gray-50 border border-gray-200/80 mb-6">
              <span className="text-xs font-bold uppercase tracking-wider text-gray-500">Benchmark Impact</span>
              <p className="text-base font-extrabold text-gray-900 mt-1">{selectedModal.impact}</p>
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
                  if (onSelectIndustry) onSelectIndustry(selectedModal.title);
                  handleContactClick();
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
