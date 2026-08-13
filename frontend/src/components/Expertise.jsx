import React, { useState } from 'react';
import { Sparkles, BarChart3, Users, Brain, Settings, ArrowRight, CheckCircle2, X } from 'lucide-react';

export default function Expertise({ onSelectService }) {
  const [selectedModal, setSelectedModal] = useState(null);

  const services = [
    {
      id: 'analytics',
      title: 'Advanced Analytics',
      icon: BarChart3,
      iconColor: 'text-[#FF4500]',
      iconBg: 'bg-orange-50',
      borderStyle: 'border-2 border-[#FF4500]/60 shadow-lg shadow-orange-500/10',
      bgStyle: 'bg-white',
      description: 'Transform raw data into actionable insights with sophisticated statistical models and predictive analytics solutions that drive business growth.',
      points: ['Predictive Modeling', 'Statistical Analysis', 'Real-time Analytics', 'Behavioral Clustering'],
      arrowBg: 'bg-orange-100 hover:bg-orange-500 hover:text-white text-orange-600',
      detailModal: {
        tagline: 'Empower Your Executive Decisions with Data Intelligence',
        deliverables: [
          'End-to-End ETL & Data Pipeline Automation',
          'Automated Forecast & Trend Engine',
          'Executive KPI Dashboards with Real-time Alerts',
          'Anomaly Detection in Transaction Stream'
        ],
        impact: '3.4x average ROI within first 90 days of deployment'
      }
    },
    {
      id: 'consulting',
      title: 'AI Strategic Consulting',
      icon: Users,
      iconColor: 'text-[#10B981]',
      iconBg: 'bg-emerald-50',
      borderStyle: 'border border-emerald-200/80 shadow-md',
      bgStyle: 'bg-[#F0FDF4]',
      description: 'Expert guidance on AI adoption, implementation strategies, and digital transformation roadmaps for sustainable competitive advantage.',
      points: ['Strategy Development', 'AI Road Mapping', 'Tech Architecture Design', 'Governance & Ethics'],
      arrowBg: 'bg-emerald-100 hover:bg-emerald-500 hover:text-white text-emerald-600',
      detailModal: {
        tagline: 'De-risk Your Enterprise AI Journey from Day One',
        deliverables: [
          'Enterprise Infrastructure & Readiness Assessment',
          'Multi-Year AI Capability Roadmap',
          'Vendor vs In-House Build Evaluation Matrix',
          'Regulatory & Ethics Compliance Framework'
        ],
        impact: '40% reduction in AI project implementation costs'
      }
    },
    {
      id: 'custom-solutions',
      title: 'Custom AI Solutions',
      icon: Brain,
      iconColor: 'text-indigo-600',
      iconBg: 'bg-indigo-50',
      borderStyle: 'border border-indigo-200/80 shadow-md',
      bgStyle: 'bg-[#F5F3FF]',
      description: 'Tailored artificial intelligence systems designed specifically for your business needs and industry requirements with proven ROI.',
      points: ['Custom ML Models', 'Neural Networks', 'Computer Vision', 'NLP Solutions'],
      arrowBg: 'bg-indigo-100 hover:bg-indigo-600 hover:text-white text-indigo-600',
      detailModal: {
        tagline: 'Proprietary Deep Learning Models Custom-Trained on Your Data',
        deliverables: [
          'Domain-Specific Fine-Tuned LLMs & Embeddings',
          'Real-time Video & Document OCR Recognition',
          'Automated Voice & Multimodal Interaction Models',
          'High-Throughput ML Inference Endpoints'
        ],
        impact: '99.4% precision on specialized classification tasks'
      }
    },
    {
      id: 'automation',
      title: 'Intelligent Automation',
      icon: Settings,
      iconColor: 'text-[#FF4500]',
      iconBg: 'bg-orange-50',
      borderStyle: 'border-2 border-[#FF4500]/60 shadow-lg shadow-orange-500/10',
      bgStyle: 'bg-white',
      description: 'Streamline operations with smart automation solutions that learn and adapt to optimize business processes and reduce costs.',
      points: ['Process Automation', 'RPA Implementation', 'Workflow Optimization', 'Smart Scheduling'],
      arrowBg: 'bg-orange-100 hover:bg-orange-500 hover:text-white text-orange-600',
      detailModal: {
        tagline: 'Autonomous AI Agents Executing Complex Repetitive Workflows',
        deliverables: [
          'Cognitive Document Processing (Invoice/Claims)',
          'Autonomous Agentic Workflow Orchestration',
          'ERP & CRM Automated Data Synchronization',
          'Intelligent SLA Exception Management'
        ],
        impact: '75% reduction in manual operational cycle time'
      }
    }
  ];

  return (
    <section id="expertise" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Top Section Tag matching Image 2 */}
      <div className="flex flex-col items-center text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D1FAE5] text-[#047857] text-xs font-extrabold uppercase tracking-wider mb-4 border border-emerald-300/60 shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-[#047857]" />
          <span>OUR EXPERTISE</span>
        </div>

        {/* Section Heading matching Image 2 */}
        <h2 className="text-4xl sm:text-5xl font-extrabold text-[#FF4500] tracking-tight font-['Outfit'] mb-4">
          What We Do
        </h2>

        <p className="text-base sm:text-lg text-gray-600 font-medium max-w-2xl leading-relaxed">
          We deliver cutting-edge AI solutions that transform businesses and drive innovation across industries with measurable results.
        </p>
      </div>

      {/* Grid of 4 Cards matching Images 2 & 3 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.id}
              onClick={() => setSelectedModal(item)}
              className={`rounded-3xl p-8 transition-all duration-300 hover:-translate-y-1.5 cursor-pointer flex flex-col justify-between ${item.bgStyle} ${item.borderStyle}`}
            >
              <div>
                {/* Header Icon */}
                <div className={`w-12 h-12 rounded-2xl ${item.iconBg} flex items-center justify-center mb-6`}>
                  <Icon className={`w-6 h-6 ${item.iconColor}`} />
                </div>

                {/* Card Title in Orange matching screenshots */}
                <h3 className="text-2xl font-extrabold text-[#FF4500] font-['Outfit'] mb-3">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
                  {item.description}
                </p>

                {/* Key Points / List Items */}
                <div className="space-y-2.5 mb-8">
                  {item.points.map((pt, pIdx) => (
                    <div key={pIdx} className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Action Arrow matching screenshots */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Explore Capability</span>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 ${item.arrowBg}`}>
                  <ArrowRight className="w-5 h-5" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Interactive Service Detail Modal */}
      {selectedModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-8 shadow-2xl relative border border-gray-100 max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedModal(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className={`w-12 h-12 rounded-2xl ${selectedModal.iconBg} flex items-center justify-center`}>
                <selectedModal.icon className={`w-6 h-6 ${selectedModal.iconColor}`} />
              </div>
              <div>
                <span className="text-xs font-bold text-orange-600 uppercase">NEUZENAI Capability</span>
                <h3 className="text-2xl font-extrabold text-gray-900 font-['Outfit']">{selectedModal.title}</h3>
              </div>
            </div>

            <p className="text-base text-gray-600 mb-6 font-medium">
              {selectedModal.detailModal.tagline}
            </p>

            <div className="bg-orange-50/80 rounded-2xl p-4 border border-orange-200/60 mb-6">
              <span className="text-xs font-bold uppercase tracking-wider text-orange-700">Proven Business Impact</span>
              <p className="text-lg font-bold text-orange-950 mt-1">{selectedModal.detailModal.impact}</p>
            </div>

            <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-3">Key Deliverables & Architecture:</h4>
            <div className="space-y-3 mb-8">
              {selectedModal.detailModal.deliverables.map((del, i) => (
                <div key={i} className="flex items-start gap-3 text-sm text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <span className="font-semibold">{del}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-end gap-3 pt-4 border-t border-gray-100">
              <button
                onClick={() => setSelectedModal(null)}
                className="px-5 py-2.5 rounded-full border border-gray-300 text-gray-700 font-bold text-sm hover:bg-gray-50"
              >
                Close
              </button>
              <button
                onClick={() => {
                  setSelectedModal(null);
                  if (onSelectService) onSelectService(selectedModal.title);
                }}
                className="px-6 py-2.5 rounded-full bg-gradient-to-r from-orange-600 to-orange-500 text-white font-bold text-sm shadow-lg hover:shadow-orange-500/30 hover:scale-105 transition-all"
              >
                Request Solution Proposal →
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
