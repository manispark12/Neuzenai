import React from 'react';
import { Sparkles, Globe, ShieldCheck, CheckCircle2, Zap, ExternalLink } from 'lucide-react';

export default function Partners() {
  const strategicAlliances = [
    {
      id: 'google-cloud',
      name: 'Google Cloud Partner',
      tier: 'Premier Cloud Alliance',
      desc: 'Vertex AI pipeline orchestration, AutoML & BigQuery enterprise ML data scaling.',
      glowClass: 'hover:border-[#4285F4] hover:shadow-[0_0_35px_rgba(66,133,244,0.35)]',
      badgeColor: 'bg-blue-500/20 text-blue-400 border-blue-500/40',
      logoRender: () => (
        <div className="bg-white px-5 py-3 rounded-2xl border border-gray-200 flex items-center justify-center gap-3 shadow-md">
          <svg className="w-8 h-8 shrink-0" viewBox="0 0 48 48">
            <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
            <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
            <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.28-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24s.92 7.54 2.56 10.78l7.97-6.19z" />
            <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
          </svg>
          <div className="text-left leading-tight">
            <div className="text-xs font-black text-gray-900 font-['Outfit']">Google Cloud</div>
            <div className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Partner</div>
          </div>
        </div>
      )
    },
    {
      id: 'salesforce',
      name: 'Salesforce Partner',
      tier: 'AppExchange Alliance',
      desc: 'Einstein 1 AI platform sync, Sales Cloud automation & Data Cloud vector search.',
      glowClass: 'hover:border-[#00A1E0] hover:shadow-[0_0_35px_rgba(0,161,224,0.35)]',
      badgeColor: 'bg-sky-500/20 text-sky-400 border-sky-500/40',
      logoRender: () => (
        <div className="bg-[#00A1E0] px-5 py-3 rounded-2xl text-white flex items-center justify-center gap-2 shadow-md">
          <svg className="w-8 h-6 fill-current shrink-0" viewBox="0 0 24 24">
            <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"/>
          </svg>
          <div className="text-left font-['Outfit'] leading-none">
            <div className="text-xs font-black tracking-tight">salesforce</div>
            <div className="text-[9px] font-extrabold tracking-widest text-sky-100 uppercase">PARTNER</div>
          </div>
        </div>
      )
    },
    {
      id: 'claude-network',
      name: 'Claude Partner Network',
      tier: 'Preferred Services Partner',
      desc: 'Anthropic Claude 3.5 Sonnet agentic workflow integration & RAG fine-tuning.',
      glowClass: 'hover:border-[#D97706] hover:shadow-[0_0_35px_rgba(217,119,6,0.35)]',
      badgeColor: 'bg-orange-500/20 text-orange-400 border-orange-500/40',
      logoRender: () => (
        <div className="bg-[#F5F2EC] px-5 py-3 rounded-2xl text-gray-900 border border-amber-200 flex items-center justify-center gap-2.5 shadow-md">
          <div className="w-6 h-6 rounded-lg bg-[#D97706] text-white flex items-center justify-center font-black text-xs">
            ✳
          </div>
          <div className="text-left leading-tight">
            <div className="text-[10px] font-extrabold text-[#D97706] uppercase tracking-wider">Preferred Services Partner</div>
            <div className="text-xs font-black text-gray-900 font-['Outfit']">Claude Partner Network</div>
          </div>
        </div>
      )
    },
    {
      id: 'microsoft-ai',
      name: 'Microsoft AI Cloud',
      tier: 'Certified AI Platform',
      desc: 'Azure OpenAI Service, Copilot Studio extension & AKS cloud infrastructure.',
      glowClass: 'hover:border-[#00A4EF] hover:shadow-[0_0_35px_rgba(0,164,239,0.35)]',
      badgeColor: 'bg-cyan-500/20 text-cyan-400 border-cyan-500/40',
      logoRender: () => (
        <div className="bg-white px-5 py-3 rounded-2xl border border-gray-200 flex items-center justify-center gap-3 shadow-md">
          <div className="grid grid-cols-2 gap-0.5 w-6 h-6 shrink-0">
            <div className="bg-[#F25022] w-2.5 h-2.5 rounded-sm" />
            <div className="bg-[#7FBA00] w-2.5 h-2.5 rounded-sm" />
            <div className="bg-[#00A4EF] w-2.5 h-2.5 rounded-sm" />
            <div className="bg-[#FFB900] w-2.5 h-2.5 rounded-sm" />
          </div>
          <div className="text-left leading-tight">
            <div className="text-xs font-black text-gray-900 font-['Outfit']">Microsoft</div>
            <div className="text-[10px] font-bold text-gray-600">AI Cloud Partner</div>
          </div>
        </div>
      )
    },
    {
      id: 'aws-network',
      name: 'AWS Partner Network',
      tier: 'Advanced Tech Partner',
      desc: 'SageMaker model training, Amazon Bedrock LLMs & Serverless Lambda inference.',
      glowClass: 'hover:border-[#FF9900] hover:shadow-[0_0_35px_rgba(255,153,0,0.35)]',
      badgeColor: 'bg-amber-500/20 text-amber-400 border-amber-500/40',
      logoRender: () => (
        <div className="bg-[#232F3E] px-5 py-3 rounded-2xl text-white border border-amber-500/30 flex items-center justify-center gap-2 shadow-md">
          <div className="font-black text-lg tracking-tighter text-amber-400 font-mono">
            aws
          </div>
          <div className="text-left leading-tight border-l border-gray-600 pl-2">
            <div className="text-xs font-extrabold text-white">Partner Network</div>
            <div className="text-[9px] font-bold text-amber-400 uppercase">Advanced Tech</div>
          </div>
        </div>
      )
    },
    {
      id: 'sap-ecosystem',
      name: 'SAP Partner Ecosystem',
      tier: 'Enterprise ERP Partner',
      desc: 'S/4HANA intelligent RPA sync, automated supply chain & financial ERP models.',
      glowClass: 'hover:border-[#0F62FE] hover:shadow-[0_0_35px_rgba(15,98,254,0.35)]',
      badgeColor: 'bg-indigo-500/20 text-indigo-400 border-indigo-500/40',
      logoRender: () => (
        <div className="bg-[#0F62FE] px-6 py-3 rounded-2xl text-white flex items-center justify-center gap-2 shadow-md">
          <span className="font-black text-xl font-sans tracking-tighter italic">SAP</span>
          <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-200 border-l border-indigo-300/40 pl-2">Partner</span>
        </div>
      )
    }
  ];

  const trustedOrganizations = [
    {
      id: 'itconnectus',
      name: 'ITConnectUS',
      category: 'IT Solutions & Staffing',
      solution: 'Enterprise AI Talent & Automation',
      sla: '99.9% Operational Uptime',
      logoRender: () => (
        <div className="bg-white p-3 rounded-2xl border border-gray-200 flex items-center justify-center gap-2 shadow-sm h-14">
          <div className="w-5 h-5 rounded-full bg-gradient-to-br from-red-500 to-red-700 flex items-center justify-center text-white text-[10px] font-black">
            IT
          </div>
          <div className="text-left leading-none">
            <div className="text-sm font-black text-gray-900 font-['Outfit']">ITConnect<span className="text-red-600">US</span></div>
            <div className="text-[8px] font-bold text-gray-500 tracking-tighter">Innovation | Discovery | Passion</div>
          </div>
        </div>
      )
    },
    {
      id: 'csx',
      name: 'CSX Transportation',
      category: 'Logistics & Freight',
      solution: 'Predictive Rail Asset Maintenance',
      sla: '99.99% Operational Uptime',
      logoRender: () => (
        <div className="bg-white p-3 rounded-2xl border border-gray-200 flex items-center justify-center shadow-sm h-14">
          <div className="text-xl font-black text-[#003366] font-mono tracking-wider border-x-4 border-[#003366] px-3">
            CSX
          </div>
        </div>
      )
    },
    {
      id: 'telecom-gateway',
      name: 'Telecom Gateway',
      category: 'Telecommunications',
      solution: 'Sub-10ms Call Anomaly Detection',
      sla: '99.99% Operational Uptime',
      logoRender: () => (
        <div className="bg-white p-3 rounded-2xl border border-gray-200 flex items-center justify-center gap-2 shadow-sm h-14">
          <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xs">
            TG
          </div>
          <div className="text-left leading-tight">
            <div className="text-xs font-black text-gray-900 font-['Outfit']">Telecom Gateway</div>
            <div className="text-[8px] text-gray-500 font-medium">Your Gateway To Telecom</div>
          </div>
        </div>
      )
    },
    {
      id: 'erpa',
      name: 'ERPA Services',
      category: 'Enterprise ERP',
      solution: 'Cognitive Financial Document OCR',
      sla: '99.95% Operational Uptime',
      logoRender: () => (
        <div className="bg-white p-3 rounded-2xl border border-gray-200 flex items-center justify-center shadow-sm h-14">
          <div className="relative">
            <div className="text-2xl font-black tracking-widest text-[#0088CC] font-['Outfit']">ERPA</div>
            <div className="w-full h-1 bg-gradient-to-r from-emerald-400 to-cyan-500 rounded-full mt-0.5" />
          </div>
        </div>
      )
    }
  ];

  return (
    <section className="w-full bg-[#07080C] text-white py-24 border-t border-slate-800/80 overflow-hidden relative">
      
      {/* Ambient Neon Background Glow Effects */}
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-[#FF4500]/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-emerald-500/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* 1. HEADER SECTION */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#FF5500]/10 to-emerald-500/10 border border-[#FF5500]/30 text-[#FF4500] font-extrabold text-xs tracking-wider uppercase mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#FF4500]" />
            <span>STRATEGIC ALLIANCES & ENTERPRISE TRUST</span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight font-['Outfit'] mb-4">
            Powered by Cloud Leaders & <span className="text-[#FF4500]">Trusted by Industry Titans</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 font-medium max-w-2xl leading-relaxed">
            Co-innovating with premier cloud ecosystems and delivering high-precision AI for fortune-tier organizations.
          </p>
        </div>

        {/* 2. INFINITE LOGO MARQUEE TICKER (TOP SHOWCASE WITH BRAND LOGO IMAGES) */}
        <div className="w-full overflow-hidden mb-20 rounded-3xl bg-white/5 border border-white/10 p-6 backdrop-blur-md">
          <div className="animate-marquee gap-8 items-center">
            {/* Duplicated list for seamless infinite loop */}
            {[...strategicAlliances, ...strategicAlliances].map((partner, idx) => (
              <div key={idx} className="shrink-0 hover:scale-105 transition-transform">
                {partner.logoRender()}
              </div>
            ))}
          </div>
        </div>

        {/* 3. STRATEGIC CLOUD & AI ALLIANCES GRID (BRAND LOGO CARDS) */}
        <div className="mb-24">
          <div className="text-left mb-8 flex items-center justify-between border-b border-white/10 pb-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-orange-400">CLOUD & AI ECOSYSTEM</span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-['Outfit'] mt-0.5">
                Strategic Alliance Partners
              </h3>
            </div>
            <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 text-orange-400 border border-orange-500/30 text-xs font-bold">
              <Zap className="w-3.5 h-3.5" />
              <span>Multi-Cloud Verified Integration</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {strategicAlliances.map((partner, pIdx) => (
              <div
                key={pIdx}
                className={`rounded-3xl bg-[#0D0D12] p-8 border border-white/15 transition-all duration-500 hover:-translate-y-2 cursor-pointer flex flex-col justify-between text-left group ${partner.glowClass}`}
              >
                <div>
                  {/* Brand Logo Container */}
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-6">
                    <div className="shrink-0 max-w-full overflow-hidden">
                      {partner.logoRender()}
                    </div>
                    <div className={`px-3 py-1 rounded-full ${partner.badgeColor} font-extrabold text-[10px] border shrink-0`}>
                      {partner.tier}
                    </div>
                  </div>

                  <p className="text-slate-300 text-sm leading-relaxed font-normal mb-6">
                    {partner.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-bold text-slate-400">
                  <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Deployed Architecture
                  </span>
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4. "TRUSTED BY LEADING ORGANIZATIONS" CLIENT LOGO GRID */}
        <div>
          <div className="text-left mb-8 flex items-center justify-between border-b border-white/10 pb-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">ENTERPRISE CLIENT ECOSYSTEM</span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-['Outfit'] mt-0.5">
                Trusted by Leading Organizations
              </h3>
            </div>
            <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-xs font-bold">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Production Scale Proven</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {trustedOrganizations.map((client, cIdx) => (
              <div
                key={cIdx}
                className="rounded-3xl bg-slate-900/80 p-6 border border-slate-800 hover:border-emerald-500/50 hover:bg-slate-900 transition-all text-left shadow-lg hover:shadow-emerald-500/10 group flex flex-col justify-between"
              >
                <div>
                  {/* Client Brand Logo Box */}
                  <div className="mb-4">
                    {client.logoRender()}
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="text-[11px] font-extrabold text-orange-400 font-['Outfit'] uppercase tracking-wider">
                      {client.category}
                    </span>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 shrink-0">
                      {client.sla}
                    </span>
                  </div>

                  <h4 className="text-lg font-extrabold text-white font-['Outfit'] mb-1 group-hover:text-emerald-400 transition-colors">
                    {client.name}
                  </h4>
                </div>

                <div className="pt-3 border-t border-slate-800/80 text-xs text-slate-300 font-medium mt-4">
                  Solution: <span className="text-slate-100 font-bold">{client.solution}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
