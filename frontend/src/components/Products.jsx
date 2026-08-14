import React, { useState, useEffect } from 'react';
import { Layers, Cpu, Database, ChevronRight, Sparkles, Check } from 'lucide-react';

export default function Products({ onSelectProduct, selectedProduct }) {
  const [highlightedId, setHighlightedId] = useState(null);

  useEffect(() => {
    if (selectedProduct) {
      setHighlightedId(selectedProduct);
      const timer = setTimeout(() => {
        setHighlightedId(null);
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [selectedProduct]);

  const products = [
    {
      id: 'mlops',
      title: 'Neuzen MLOps Engine',
      badge: 'MLOps v3.0',
      icon: Cpu,
      iconBg: 'bg-orange-500/20 text-orange-400',
      subtitle: 'End-to-end Automated ML Lifecycle & Observability',
      description: 'Streamline model training, experiment tracking, continuous monitoring, and automated rollback for mission-critical production deployments.',
      features: [
        'Automated Drift Detection & Retraining Triggers',
        'Sub-Millisecond Inference Optimization',
        'Model Governance & Version Control Audit Logs'
      ]
    },
    {
      id: 'agentic',
      title: 'Agentic Workflow Studio',
      badge: 'Multi-Agent Suite',
      icon: Layers,
      iconBg: 'bg-emerald-500/20 text-emerald-400',
      subtitle: 'Autonomous Multi-Agent Systems & Tool Orchestration',
      description: 'Build, simulate, and deploy collaborative AI agent teams that autonomously solve complex enterprise tasks with human-in-the-loop safeguards.',
      features: [
        'Visual No-Code / Low-Code Agent Graph Builder',
        'Strict Tool Permissions & Memory Scoping',
        'Enterprise ERP & SaaS Connector Suite'
      ]
    },
    {
      id: 'vector',
      title: 'Enterprise Vector Search Engine',
      badge: 'Semantic DB',
      icon: Database,
      iconBg: 'bg-indigo-500/20 text-indigo-400',
      subtitle: 'High-Scale Hybrid Semantic Vector Storage',
      description: 'Lightning-fast vector similarity search indexing billions of unstructured documents, images, and audio embeddings for enterprise RAG.',
      features: [
        'Distributed HNSW & Hybrid Keyword Indexing',
        'Role-Based Access Control (RBAC) at Vector Level',
        'Direct Cloud Sync with Snowflake & S3'
      ]
    }
  ];

  return (
    <section id="products" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="flex flex-col items-center text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-100 text-orange-800 text-xs font-extrabold uppercase tracking-wider mb-4 border border-orange-200">
          <Sparkles className="w-3.5 h-3.5 text-orange-600" />
          <span>PROPRIETARY PLATFORMS</span>
        </div>

        <h2 className="text-4xl sm:text-5xl font-extrabold text-[#FF4500] tracking-tight font-['Outfit'] mb-4">
          Platforms & Products
        </h2>

        <p className="text-base sm:text-lg text-gray-600 font-medium max-w-3xl leading-relaxed">
          Accelerate your AI architecture with NeuzenAI's pre-built enterprise platform components.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {products.map((prod) => {
          const Icon = prod.icon;
          const isHighlighted = prod.id === highlightedId;

          return (
            <div
              key={prod.id}
              className={`rounded-3xl bg-white border p-8 shadow-sm transition-all duration-500 flex flex-col justify-between group ${
                isHighlighted
                  ? 'border-[#FF4500] ring-4 ring-orange-500/30 shadow-2xl scale-[1.03] bg-gradient-to-b from-orange-500/5 via-white to-white'
                  : 'border-gray-200 hover:border-orange-400 hover:shadow-xl'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className={`w-12 h-12 rounded-2xl ${prod.iconBg} flex items-center justify-center`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className={`text-xs font-bold px-3 py-1 rounded-full ${isHighlighted ? 'bg-[#FF4500] text-white shadow-md' : 'bg-gray-100 text-gray-700'}`}>
                    {prod.badge}
                  </span>
                </div>

                <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-[#FF4500] transition-colors font-['Outfit'] mb-2">
                  {prod.title}
                </h3>

                <p className="text-xs font-bold text-orange-600 uppercase tracking-wider mb-4">
                  {prod.subtitle}
                </p>

                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {prod.description}
                </p>

                <div className="space-y-3 mb-8">
                  {prod.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm font-semibold text-gray-700">
                      <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => {
                  if (onSelectProduct) onSelectProduct(prod.title);
                }}
                className={`w-full py-3 rounded-2xl font-bold text-sm flex items-center justify-center gap-2 transition-all duration-200 ${
                  isHighlighted 
                    ? 'bg-[#FF4500] text-white shadow-lg shadow-orange-500/40' 
                    : 'bg-gray-50 group-hover:bg-[#FF4500] text-gray-800 group-hover:text-white'
                }`}
              >
                <span>Request Platform Demo</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
}
