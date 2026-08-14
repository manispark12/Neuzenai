import React, { useState, useEffect } from 'react';
import { Sparkles, BarChart3, Users, Brain, Settings, ArrowRight, CheckCircle2, X, Cpu, Zap, Activity, ShieldCheck } from 'lucide-react';

export default function Expertise({ onSelectService, selectedCapability }) {
  const [activeId, setActiveId] = useState('analytics');
  const [selectedModal, setSelectedModal] = useState(null);

  useEffect(() => {
    if (selectedCapability) {
      setActiveId(selectedCapability);
    }
  }, [selectedCapability]);

  const capabilities = [
    {
      id: 'analytics',
      num: '01',
      title: 'Advanced Analytics',
      badge: '+42% Forecast Precision',
      icon: BarChart3,
      themeColor: 'from-[#FF5500] to-[#FF3D00]',
      neonBorder: 'border-2 border-[#FF4500]',
      neonGlow: 'shadow-[0_0_30px_rgba(255,69,0,0.35)]',
      activeBg: 'bg-gradient-to-r from-orange-500/15 via-orange-500/5 to-white',
      badgeStyle: 'bg-[#FF4500] text-white shadow-[0_0_12px_rgba(255,69,0,0.5)]',
      iconStyle: 'bg-[#FF4500] text-white shadow-md shadow-orange-500/40',
      numColor: 'text-[#FF4500]',
      description: 'Transform raw enterprise data streams into actionable predictive models, automated forecast pipelines, and real-time behavioral insights.',
      features: [
        'Time-Series Predictive Forecasting',
        'End-to-End ETL Data Pipelines',
        'Real-time Anomaly Detection',
        'Customer Behavioral Clustering'
      ],
      pipeline: {
        step1: 'Enterprise Data Lake',
        step2: 'Neural Statistical Engine',
        step3: 'Automated Business Action'
      },
      metrics: [
        { label: 'Inference Speed', value: '< 10ms' },
        { label: 'Model Precision', value: '99.4%' },
        { label: 'Average 90-Day ROI', value: '3.4x' }
      ]
    },
    {
      id: 'consulting',
      num: '02',
      title: 'AI Strategic Consulting',
      badge: 'De-Risk Enterprise Adoption',
      icon: Users,
      themeColor: 'from-[#10B981] to-[#059669]',
      neonBorder: 'border-2 border-[#10B981]',
      neonGlow: 'shadow-[0_0_30px_rgba(16,185,129,0.35)]',
      activeBg: 'bg-gradient-to-r from-emerald-500/15 via-emerald-500/5 to-white',
      badgeStyle: 'bg-[#10B981] text-white shadow-[0_0_12px_rgba(16,185,129,0.5)]',
      iconStyle: 'bg-[#10B981] text-white shadow-md shadow-emerald-500/40',
      numColor: 'text-[#10B981]',
      description: 'Expert guidance on AI maturity roadmaps, technical architecture design, governance frameworks, and build-vs-buy economic evaluations.',
      features: [
        'Multi-Year AI Adoption Roadmap',
        'Infrastructure & Data Readiness Audit',
        'Build vs. Buy ROI Evaluation',
        'AI Ethics & Governance Framework'
      ],
      pipeline: {
        step1: 'Maturity Audit',
        step2: 'Architectural Blueprint',
        step3: 'Enterprise Scaling'
      },
      metrics: [
        { label: 'Implementation Savings', value: '40%' },
        { label: 'Audit Delivery', value: '2 Weeks' },
        { label: 'Compliance Standard', value: 'SOC2 & HIPAA' }
      ]
    },
    {
      id: 'custom-solutions',
      num: '03',
      title: 'Custom AI Solutions',
      badge: 'Proprietary Neural Models',
      icon: Brain,
      themeColor: 'from-[#6366F1] to-purple-600',
      neonBorder: 'border-2 border-[#6366F1]',
      neonGlow: 'shadow-[0_0_30px_rgba(99,102,241,0.35)]',
      activeBg: 'bg-gradient-to-r from-indigo-500/15 via-indigo-500/5 to-white',
      badgeStyle: 'bg-[#6366F1] text-white shadow-[0_0_12px_rgba(99,102,241,0.5)]',
      iconStyle: 'bg-[#6366F1] text-white shadow-md shadow-indigo-500/40',
      numColor: 'text-[#6366F1]',
      description: 'Custom neural networks fine-tuned on your proprietary dataset, multimodal computer vision systems, and high-throughput LLM inference APIs.',
      features: [
        'Domain Fine-Tuned Enterprise LLMs',
        'Multimodal Vision & Document OCR',
        'Autonomous Agentic Workflow Bots',
        'Sub-Millisecond Inference APIs'
      ],
      pipeline: {
        step1: 'Proprietary Fine-Tuning',
        step2: 'Quantized Neural Weights',
        step3: 'High-Speed API Serving'
      },
      metrics: [
        { label: 'Custom Task Accuracy', value: '99.8%' },
        { label: 'Generation Speed', value: '120 tok/s' },
        { label: 'Production Uptime SLA', value: '99.99%' }
      ]
    },
    {
      id: 'automation',
      num: '04',
      title: 'Intelligent Automation',
      badge: '75% Cycle Time Reduction',
      icon: Settings,
      themeColor: 'from-[#F59E0B] to-[#FF4500]',
      neonBorder: 'border-2 border-[#F59E0B]',
      neonGlow: 'shadow-[0_0_30px_rgba(245,158,11,0.35)]',
      activeBg: 'bg-gradient-to-r from-amber-500/15 via-amber-500/5 to-white',
      badgeStyle: 'bg-[#F59E0B] text-white shadow-[0_0_12px_rgba(245,158,11,0.5)]',
      iconStyle: 'bg-[#F59E0B] text-white shadow-md shadow-amber-500/40',
      numColor: 'text-[#F59E0B]',
      description: 'Streamline high-volume operational workflows with self-learning RPA agents, cognitive document processing, and automated ERP/CRM data synchronization.',
      features: [
        'Cognitive Invoice & Claim Processing',
        'Autonomous Workflow Bots',
        'ERP & CRM Real-time Sync',
        'Automated Exception SLA Handling'
      ],
      pipeline: {
        step1: 'Unstructured Document',
        step2: 'Cognitive Parsing Bot',
        step3: 'Instant ERP Record Sync'
      },
      metrics: [
        { label: 'Operational Cycle Time', value: '- 75%' },
        { label: 'Automated Accuracy', value: '99.9%' },
        { label: 'Processing Scale', value: '100K docs/hr' }
      ]
    }
  ];

  const activeCap = capabilities.find((c) => c.id === activeId) || capabilities[0];
  const ActiveIcon = activeCap.icon;

  return (
    <section id="expertise" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      
      {/* 1. HEADER SECTION */}
      <div className="flex flex-col items-center text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-orange-500/10 to-emerald-500/10 border border-orange-500/30 text-[#FF4500] font-extrabold text-xs tracking-wider uppercase mb-4 shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-[#FF4500]" />
          <span>OUR CORE CAPABILITIES</span>
        </div>

        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#FF4500] tracking-tight font-['Outfit'] mb-4">
          What We Do
        </h2>

        <p className="text-base sm:text-lg text-gray-600 font-medium max-w-2xl leading-relaxed">
          Transforming enterprise data into autonomous AI platforms with sub-millisecond latency, verified SLAs, and measurable ROI.
        </p>
      </div>

      {/* 2. INTERACTIVE AI COMMAND CENTER (SPLIT STAGE) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Left Column (High-Impact Neon Border Selector Cards) */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
          {capabilities.map((item) => {
            const isSelected = item.id === activeId;
            const ItemIcon = item.icon;

            return (
              <div
                key={item.id}
                onClick={() => setActiveId(item.id)}
                className={`p-6 rounded-3xl transition-all duration-300 cursor-pointer ${
                  isSelected 
                    ? `${item.activeBg} ${item.neonBorder} ${item.neonGlow} scale-[1.02]` 
                    : 'bg-white border-2 border-gray-200/90 hover:border-[#FF4500]/60 shadow-sm hover:shadow-lg'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3.5">
                    <span className={`text-base font-black font-mono ${isSelected ? item.numColor : 'text-gray-400'}`}>
                      {item.num}
                    </span>
                    <div className={`p-2.5 rounded-2xl ${isSelected ? item.iconStyle : 'bg-slate-100 text-gray-700'}`}>
                      <ItemIcon className="w-5 h-5" />
                    </div>
                    <h3 className={`text-lg font-extrabold font-['Outfit'] ${isSelected ? 'text-gray-950' : 'text-gray-800'}`}>
                      {item.title}
                    </h3>
                  </div>

                  <span className={`text-[11px] font-extrabold px-3 py-1 rounded-full ${
                    isSelected ? item.badgeStyle : 'bg-slate-100 text-gray-700 border border-slate-200'
                  }`}>
                    {item.badge}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right Column (Dynamic Live Architecture Stage) */}
        <div className="lg:col-span-7 rounded-3xl bg-[#0D0D10] text-white p-8 sm:p-10 shadow-2xl border border-white/15 flex flex-col justify-between relative overflow-hidden group">
          
          {/* Ambient Glowing Background Effect */}
          <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-[#FF4500]/15 blur-3xl pointer-events-none group-hover:bg-[#FF4500]/25 transition-all duration-700" />
          
          {/* Stage Header */}
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#FF5500] to-[#FF3D00] p-0.5 flex items-center justify-center shadow-lg shadow-orange-500/30">
                  <div className="w-full h-full bg-[#0D0D10] rounded-[14px] flex items-center justify-center text-[#FF4500]">
                    <ActiveIcon className="w-6 h-6" />
                  </div>
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-orange-400 block">
                    ACTIVE ARCHITECTURE STAGE
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-['Outfit']">
                    {activeCap.title}
                  </h3>
                </div>
              </div>

              <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs font-bold">
                <Activity className="w-3.5 h-3.5 animate-pulse" />
                <span>Live Sandbox Stage</span>
              </div>
            </div>

            <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-8 font-medium">
              {activeCap.description}
            </p>

            {/* 3-Step Live Pipeline Visualizer */}
            <div className="mb-8 p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
              <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400 block mb-3">
                Live Data Pipeline Flow
              </span>
              <div className="grid grid-cols-3 gap-2 text-center text-xs">
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 font-semibold text-gray-200 flex flex-col items-center justify-center gap-1">
                  <Cpu className="w-4 h-4 text-orange-400" />
                  <span className="truncate">{activeCap.pipeline.step1}</span>
                </div>
                <div className="p-3 rounded-xl bg-orange-500/20 border border-orange-500/40 font-bold text-orange-300 flex flex-col items-center justify-center gap-1">
                  <Zap className="w-4 h-4 text-orange-400 animate-bounce" />
                  <span className="truncate">{activeCap.pipeline.step2}</span>
                </div>
                <div className="p-3 rounded-xl bg-emerald-500/20 border border-emerald-500/40 font-bold text-emerald-300 flex flex-col items-center justify-center gap-1">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span className="truncate">{activeCap.pipeline.step3}</span>
                </div>
              </div>
            </div>

            {/* Key Capability Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {activeCap.features.map((feat, i) => (
                <div key={i} className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-[#FF4500] shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Benchmark Metrics & CTA Button */}
          <div className="relative z-10 pt-6 border-t border-white/15">
            <div className="grid grid-cols-3 gap-4 mb-6 text-center">
              {activeCap.metrics.map((m, mIdx) => (
                <div key={mIdx} className="p-3 rounded-xl bg-white/5 border border-white/10">
                  <div className="text-xs text-gray-400 font-medium mb-0.5">{m.label}</div>
                  <div className="text-lg sm:text-xl font-extrabold text-white font-['Outfit']">{m.value}</div>
                </div>
              ))}
            </div>

            <button
              onClick={() => {
                if (onSelectService) {
                  onSelectService(activeCap.title);
                } else {
                  const el = document.getElementById('careers');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="w-full py-4 rounded-2xl bg-gradient-to-r from-[#FF5500] to-[#FF3D00] hover:from-[#FF4500] hover:to-[#E63900] text-white font-extrabold text-sm shadow-xl shadow-orange-500/30 hover:scale-[1.01] active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>LAUNCH CAPABILITY BLUEPRINT</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>

      {/* 3. BOTTOM ENTERPRISE SLA STAT COUNTER BAR */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
        <div className="rounded-3xl bg-white p-6 border-2 border-orange-200/80 shadow-md text-center hover:shadow-xl hover:border-[#FF4500] transition-all">
          <div className="text-3xl sm:text-4xl font-extrabold text-[#FF4500] font-['Outfit'] mb-1">
            99.8%
          </div>
          <div className="text-xs font-bold text-gray-700 uppercase tracking-wider">
            Prediction Accuracy SLA
          </div>
        </div>

        <div className="rounded-3xl bg-white p-6 border-2 border-emerald-200/80 shadow-md text-center hover:shadow-xl hover:border-emerald-500 transition-all">
          <div className="text-3xl sm:text-4xl font-extrabold text-emerald-600 font-['Outfit'] mb-1">
            &lt; 15ms
          </div>
          <div className="text-xs font-bold text-gray-700 uppercase tracking-wider">
            API Inference Latency
          </div>
        </div>

        <div className="rounded-3xl bg-white p-6 border-2 border-indigo-200/80 shadow-md text-center hover:shadow-xl hover:border-indigo-500 transition-all">
          <div className="text-3xl sm:text-4xl font-extrabold text-indigo-600 font-['Outfit'] mb-1">
            4-8 Wks
          </div>
          <div className="text-xs font-bold text-gray-700 uppercase tracking-wider">
            Production Delivery
          </div>
        </div>

        <div className="rounded-3xl bg-white p-6 border-2 border-amber-200/80 shadow-md text-center hover:shadow-xl hover:border-amber-500 transition-all">
          <div className="text-3xl sm:text-4xl font-extrabold text-amber-500 font-['Outfit'] mb-1">
            24/7
          </div>
          <div className="text-xs font-bold text-gray-700 uppercase tracking-wider">
            Enterprise Architecture Support
          </div>
        </div>
      </div>

    </section>
  );
}
