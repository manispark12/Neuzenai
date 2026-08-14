import React, { useEffect } from 'react';
import { Sparkles, Calendar, Users, Globe, Layers, Award, Target, Eye, ShieldCheck, Zap, ArrowRight, CheckCircle2 } from 'lucide-react';
import Partners from '../components/Partners';
import ContactSection from '../components/ContactSection';

export default function AboutPage({ scrollToContact }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const milestoneStats = [
    { num: '2023', label: 'Founded in', desc: 'Pioneering next-gen enterprise AI' },
    { num: '10+', label: 'Expert Team', desc: 'AI PhDs, Senior ML Engineers & Architects' },
    { num: '3+', label: 'Global Offices', desc: 'Dallas USA, Coppell & Hyderabad India' },
    { num: '6+', label: 'AI Solutions', desc: 'ArQPulse, Lens AI, Nvision AI, Pipelyt, Spenzo, Swass AI' },
    { num: '6+', label: 'Happy Enterprise Clients', desc: 'Proven impact across major global sectors' },
  ];

  const whyChooseUsPillars = [
    {
      title: 'Guaranteed SLA Precision (99.8%)',
      desc: 'Models built and validated against rigorous benchmark datasets with real-time drift observability.',
      icon: ShieldCheck,
      color: 'text-[#FF4500]',
      bg: 'bg-orange-50'
    },
    {
      title: 'Sub-10ms Inference Speed',
      desc: 'High-throughput, low-latency API infrastructure engineered specifically for mission-critical enterprise workloads.',
      icon: Zap,
      color: 'text-emerald-600',
      bg: 'bg-emerald-50'
    },
    {
      title: 'Custom Domain Fine-Tuning',
      desc: 'We go beyond basic API wrappers—training bespoke neural architectures tailored to your unique data assets.',
      icon: Layers,
      color: 'text-indigo-600',
      bg: 'bg-indigo-50'
    },
    {
      title: 'SOC2 & HIPAA Compliance',
      desc: 'Bank-grade encryption, zero-data retention privacy policies, and full regulatory audit trails.',
      icon: Award,
      color: 'text-amber-600',
      bg: 'bg-amber-50'
    }
  ];

  return (
    <main className="pt-24 bg-white min-h-screen">
      
      {/* 1. HERO & OVERVIEW SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16">
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-100 text-[#FF4500] text-xs font-extrabold uppercase tracking-wider mb-4 border border-orange-200 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#FF4500]" />
            <span>PIONEERING ENTERPRISE INTELLIGENCE</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#FF4500] tracking-tight font-['Outfit'] mb-4">
            About NeuZenAI
          </h1>

          <p className="text-base sm:text-lg text-gray-600 font-medium max-w-2xl leading-relaxed">
            Building the intelligent neural infrastructure that powers modern enterprise scale, innovation, and growth.
          </p>
        </div>

        {/* Overview Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center rounded-3xl bg-slate-50 p-8 sm:p-12 border border-gray-200/80 shadow-lg">
          
          {/* Left Column: Overview Details */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 font-['Outfit'] leading-tight">
              Transforming Complex Operational Data Into <span className="text-[#FF4500]">Intelligent Systems</span>
            </h2>

            <p className="text-base text-gray-700 leading-relaxed font-normal">
              Founded in <strong>2023</strong>, <strong>NeuZenAI</strong> is a premier artificial intelligence and machine learning solutions company. We bridge the gap between cutting-edge AI research and production-grade enterprise deployment.
            </p>

            <p className="text-base text-gray-700 leading-relaxed font-normal">
              Our team of senior ML engineers, data scientists, and solution architects partner with forward-thinking organizations across Financial Services, Healthcare, Retail, and Energy to design custom neural models, proprietary SaaS platforms, and automated workflow pipelines.
            </p>

            <div className="pt-4 flex flex-wrap gap-4">
              <button
                onClick={() => {
                  if (scrollToContact) scrollToContact('General Inquiry');
                }}
                className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#FF5500] to-[#FF3D00] text-white font-extrabold text-sm shadow-xl shadow-orange-500/30 hover:scale-105 transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>GET IN TOUCH WITH OUR TEAM</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column: High Quality Corporate Photo */}
          <div className="lg:col-span-6 rounded-3xl overflow-hidden shadow-2xl border border-gray-200 h-[360px] sm:h-[440px] relative group">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80" 
              alt="NeuZenAI Team Collaborating" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-6">
              <div className="text-white text-left">
                <div className="text-xs font-extrabold uppercase tracking-wider text-orange-400">Headquarters</div>
                <div className="text-lg font-extrabold font-['Outfit']">Dallas, Texas & Hyderabad, India</div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. KEY METRICS & MILESTONES BAR (TOPIC 5) */}
      <section className="py-16 bg-gradient-to-r from-[#0D0D10] via-slate-900 to-[#0D0D10] text-white border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-orange-400">COMPANY SCALE & MILESTONES</span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-['Outfit'] mt-1">
              Proven Track Record of Excellence
            </h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {milestoneStats.map((st, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white/5 border border-white/10 text-center hover:border-orange-500/50 transition-colors group">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#FF4500] font-['Outfit'] mb-1 group-hover:scale-105 transition-transform">
                  {st.num}
                </div>
                <div className="text-sm font-extrabold text-white font-['Outfit'] mb-1">
                  {st.label}
                </div>
                <div className="text-xs text-gray-400 font-medium leading-tight">
                  {st.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. NEUZEN'S AI INNOVATION FOR AI (TOPIC 2) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Visual: AI Innovation Abstract Photo */}
          <div className="lg:col-span-6 rounded-3xl overflow-hidden shadow-2xl border border-gray-200 h-[380px] sm:h-[460px] relative group">
            <img 
              src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80" 
              alt="NeuZen AI Innovation" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent p-8 flex flex-col justify-end text-left">
              <span className="px-3 py-1 rounded-full bg-orange-500 text-white font-bold text-xs w-max mb-2">
                PROPRIETARY R&D
              </span>
              <h3 className="text-2xl font-extrabold text-white font-['Outfit']">
                Next-Gen Agentic & Neural Architectures
              </h3>
            </div>
          </div>

          {/* Right Text & Innovation Features */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider border border-emerald-200">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              <span>INNOVATION ENGINE</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 font-['Outfit'] leading-tight">
              NeuZen's <span className="text-[#FF4500]">AI Innovation</span> for AI
            </h2>

            <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-normal">
              At NeuZenAI, innovation isn't just about building models—it's about developing <strong>AI systems that optimize and manage other AI systems</strong>. We invest heavily in proprietary R&D to deliver high-throughput, low-latency intelligence.
            </p>

            <div className="space-y-4 pt-2">
              <div className="p-4 rounded-2xl bg-slate-50 border border-gray-200/80 flex items-start gap-4">
                <div className="p-2.5 rounded-xl bg-orange-100 text-[#FF4500] shrink-0 mt-1">
                  <Layers className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-extrabold text-gray-900 font-['Outfit']">Agentic Autonomous Frameworks</h4>
                  <p className="text-xs sm:text-sm text-gray-600 mt-1">Multi-agent orchestrations that self-correct, execute complex tasks, and streamline enterprise operations.</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-gray-200/80 flex items-start gap-4">
                <div className="p-2.5 rounded-xl bg-emerald-100 text-emerald-700 shrink-0 mt-1">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-extrabold text-gray-900 font-['Outfit']">Domain Fine-Tuned Neural Weights</h4>
                  <p className="text-xs sm:text-sm text-gray-600 mt-1">Custom LLMs and vector embeddings trained directly on specialized domain data with zero data leaks.</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-gray-200/80 flex items-start gap-4">
                <div className="p-2.5 rounded-xl bg-indigo-100 text-indigo-700 shrink-0 mt-1">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-extrabold text-gray-900 font-['Outfit']">Automated Model Observability</h4>
                  <p className="text-xs sm:text-sm text-gray-600 mt-1">Continuous real-time drift detection and automated re-training triggers for 99.99% model health.</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 4. OUR VISION & OUR MISSION (TOPIC 3) */}
      <section className="bg-slate-50 py-24 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-[#FF4500]">GUIDED BY PURPOSE</span>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-[#FF4500] font-['Outfit'] mt-2">
              Our Vision & Our Mission
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            
            {/* Card 1: Our Vision */}
            <div className="rounded-3xl bg-[#0D0D10] text-white p-8 sm:p-12 shadow-2xl border border-white/15 flex flex-col justify-between text-left relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF4500]/10 rounded-full blur-3xl group-hover:bg-[#FF4500]/20 transition-colors" />

              <div>
                <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center mb-6 text-orange-400">
                  <Eye className="w-7 h-7" />
                </div>

                <span className="text-xs font-bold uppercase tracking-wider text-orange-400 block mb-2">THE FUTURE WE ARE BUILDING</span>
                <h3 className="text-3xl font-extrabold text-white font-['Outfit'] mb-4">Our Vision</h3>

                <p className="text-gray-300 text-base sm:text-lg leading-relaxed font-normal mb-8">
                  To become the world's most trusted enterprise AI partner—shaping a future where organizations operate with infinite cognitive scale, verified precision, and high-impact ethical intelligence.
                </p>
              </div>

              <div className="space-y-3 pt-6 border-t border-white/15 text-sm text-slate-300">
                <div className="flex items-center gap-2 font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-orange-400" />
                  <span>Global Autonomous Leadership</span>
                </div>
                <div className="flex items-center gap-2 font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-orange-400" />
                  <span>Ethical & Transparent AI Frameworks</span>
                </div>
                <div className="flex items-center gap-2 font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-orange-400" />
                  <span>Sub-Millisecond Inference Universality</span>
                </div>
              </div>
            </div>

            {/* Card 2: Our Mission */}
            <div className="rounded-3xl bg-gradient-to-br from-[#FF5500] to-[#FF3D00] text-white p-8 sm:p-12 shadow-2xl flex flex-col justify-between text-left relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl group-hover:bg-white/20 transition-colors" />

              <div>
                <div className="w-14 h-14 rounded-2xl bg-white/20 border border-white/30 flex items-center justify-center mb-6 text-white">
                  <Target className="w-7 h-7" />
                </div>

                <span className="text-xs font-bold uppercase tracking-wider text-orange-100 block mb-2">WHAT DRIVES US DAILY</span>
                <h3 className="text-3xl font-extrabold text-white font-['Outfit'] mb-4">Our Mission</h3>

                <p className="text-orange-50 text-base sm:text-lg leading-relaxed font-normal mb-8">
                  To empower enterprises with custom machine learning models, proprietary SaaS platforms, and end-to-end data engineering that turn complex operational challenges into decisive competitive advantages.
                </p>
              </div>

              <div className="space-y-3 pt-6 border-t border-white/20 text-sm text-orange-100">
                <div className="flex items-center gap-2 font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-white" />
                  <span>Custom ML Models Trained on Client Data</span>
                </div>
                <div className="flex items-center gap-2 font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-white" />
                  <span>Verified ROI & Guaranteed SLA Precision</span>
                </div>
                <div className="flex items-center gap-2 font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-white" />
                  <span>End-to-End Enterprise Data Transformation</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. WHY CHOOSE US (TOPIC 4) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-[#FF4500]">ENTERPRISE ADVANTAGE</span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#FF4500] font-['Outfit'] mt-2">
            Why Choose NeuZenAI
          </h2>
          <p className="text-base sm:text-lg text-gray-600 font-medium max-w-2xl mx-auto mt-3">
            Engineered specifically for enterprise scale, security, and proven operational results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {whyChooseUsPillars.map((pil, pIdx) => {
            const Icon = pil.icon;
            return (
              <div 
                key={pIdx}
                className="rounded-3xl p-8 bg-white border border-gray-200/80 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all text-left flex flex-col justify-between"
              >
                <div>
                  <div className={`w-12 h-12 rounded-2xl ${pil.bg} flex items-center justify-center mb-6`}>
                    <Icon className={`w-6 h-6 ${pil.color}`} />
                  </div>

                  <h3 className="text-xl font-extrabold text-gray-900 font-['Outfit'] mb-3">
                    {pil.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed font-normal">
                    {pil.desc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-gray-100 flex items-center gap-2 text-xs font-bold text-[#FF4500]">
                  <span>VERIFIED SLA</span>
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Stock Image Showcase */}
        <div className="mt-16 rounded-3xl overflow-hidden shadow-2xl border border-gray-200 h-[280px] sm:h-[360px] relative group">
          <img 
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80" 
            alt="NeuZenAI Enterprise Center" 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-8 flex flex-col justify-end text-left">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-['Outfit']">
              Ready to Accelerate Your Enterprise AI Scale?
            </h3>
            <p className="text-sm sm:text-base text-gray-200 font-medium max-w-xl mt-1">
              Connect directly with our senior AI architects to schedule a custom strategy blueprint session.
            </p>
          </div>
        </div>
      </section>

      {/* 6. STRATEGIC PARTNERS & TRUSTED ALLIANCES ECOSYSTEM */}
      <Partners />

      {/* 7. CONTACT FORM INTEGRATION */}
      <ContactSection defaultSubject="About Us Consultation" />

    </main>
  );
}
