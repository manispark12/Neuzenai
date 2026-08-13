import React, { useState } from 'react';
import { Award, ArrowUpRight, TrendingUp, ShieldCheck, Clock, CheckCircle2 } from 'lucide-react';

export default function SuccessStories({ onOpenContact }) {
  const [filter, setFilter] = useState('All');

  const caseStudies = [
    {
      category: 'Fintech',
      client: 'Global Banking Corp',
      title: 'Real-Time Fraud Prevention Engine',
      metric: '99.8%',
      metricLabel: 'Accuracy in Fraud Detection',
      desc: 'Engineered a sub-10ms inference pipeline processing 1.4 Billion daily micro-transactions with zero false locks.',
      tags: ['Neural Networks', 'Kafka Stream', 'Low Latency ML'],
      accentColor: 'border-orange-500'
    },
    {
      category: 'HealthTech',
      client: 'Apex Health Systems',
      title: 'Automated Diagnostic & Claims Processing',
      metric: '60%',
      metricLabel: 'Reduction in Claims Latency',
      desc: 'Deployed HIPAA-compliant OCR and NLP models to automatically validate and process complex medical policy claims.',
      tags: ['Document AI', 'HIPAA Compliant', 'NLP Transformer'],
      accentColor: 'border-emerald-500'
    },
    {
      category: 'Retail',
      client: 'OmniMarket Global',
      title: 'Hyper-Personalized Recommendation AI',
      metric: '+35%',
      metricLabel: 'E-commerce Revenue Growth',
      desc: 'Built a real-time behavioral recommendation model that adapts shopper feeds dynamically based on micro-interactions.',
      tags: ['Collaborative Filtering', 'Vector Search', 'Dynamic Pricing'],
      accentColor: 'border-indigo-500'
    },
    {
      category: 'Energy',
      client: 'EcoGrid National',
      title: 'Predictive Power Grid Maintenance',
      metric: '25%',
      metricLabel: 'Operational Energy Savings',
      desc: 'Implemented IoT sensor time-series forecasting to predict transformer anomalies 72 hours before critical outages.',
      tags: ['Time-Series Forecasting', 'IoT Telemetry', 'Predictive AI'],
      accentColor: 'border-amber-500'
    }
  ];

  const filteredStudies = filter === 'All' 
    ? caseStudies 
    : caseStudies.filter(c => c.category === filter);

  return (
    <section id="success-stories" className="py-24 bg-gradient-to-b from-slate-900 via-gray-900 to-black text-white relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-bold uppercase tracking-wider mb-4">
            <Award className="w-4 h-4 text-orange-400" />
            <span>PROVEN RESULTS</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight font-['Outfit'] mb-4">
            Enterprise <span className="text-[#FF4500]">Success Stories</span>
          </h2>

          <p className="text-gray-400 text-base sm:text-lg max-w-2xl font-normal">
            Discover how top global organizations accelerate digital transformation and achieve measurable competitive advantage with NeuzenAI.
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mt-8 p-1.5 rounded-full bg-white/5 border border-white/10">
            {['All', 'Fintech', 'HealthTech', 'Retail', 'Energy'].map((tab) => (
              <button
                key={tab}
                onClick={() => setFilter(tab)}
                className={`px-5 py-2 rounded-full text-xs font-bold transition-all duration-200 ${
                  filter === tab
                    ? 'bg-gradient-to-r from-orange-600 to-orange-500 text-white shadow-lg shadow-orange-500/30'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Case Studies Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredStudies.map((item, idx) => (
            <div
              key={idx}
              className={`rounded-3xl bg-white/5 backdrop-blur-md p-8 border border-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between group`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold text-orange-400 uppercase tracking-widest">{item.client} • {item.category}</span>
                  <div className="w-8 h-8 rounded-full bg-white/5 group-hover:bg-orange-500 text-gray-400 group-hover:text-white flex items-center justify-center transition-colors">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors font-['Outfit']">
                  {item.title}
                </h3>

                <p className="text-gray-300 text-sm leading-relaxed mb-6">
                  {item.desc}
                </p>

                {/* Big Metric Box */}
                <div className="p-4 rounded-2xl bg-gradient-to-r from-orange-500/10 to-emerald-500/10 border border-white/10 mb-6 flex items-center gap-4">
                  <span className="text-4xl font-extrabold text-white font-['Outfit']">{item.metric}</span>
                  <span className="text-xs font-semibold text-gray-300">{item.metricLabel}</span>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tg, tIdx) => (
                    <span key={tIdx} className="text-xs font-medium px-2.5 py-1 rounded-full bg-white/5 text-gray-400 border border-white/10">
                      #{tg}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="mt-16 rounded-3xl bg-gradient-to-r from-orange-600 to-orange-500 p-8 sm:p-12 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
          <div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-['Outfit']">
              Ready to create your own AI success story?
            </h3>
            <p className="text-orange-100 text-sm sm:text-base mt-2 font-medium">
              Schedule a technical discovery session with our lead AI architects today.
            </p>
          </div>
          <button
            onClick={onOpenContact}
            className="shrink-0 px-8 py-4 rounded-full bg-black text-white font-extrabold text-sm sm:text-base shadow-xl hover:bg-gray-900 hover:scale-105 active:scale-95 transition-all"
          >
            Schedule Discovery Call →
          </button>
        </div>

      </div>
    </section>
  );
}
