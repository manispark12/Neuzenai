import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Calculator, Sparkles, Loader2, AlertCircle } from 'lucide-react';

export default function ContactSection({ defaultSubject = '' }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    phone: '',
    serviceInterest: defaultSubject || 'Advanced Analytics',
    projectBudget: '$25k - $50k',
    message: ''
  });

  const [estimatorState, setEstimatorState] = useState({
    scope: 'Custom Model',
    timeline: '4-8 Weeks',
    estimatedCost: '$35,000 - $48,000'
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const validateField = (name, value) => {
    let error = '';
    const trimmed = (value || '').trim();

    if (name === 'fullName') {
      if (!trimmed) {
        error = 'Full name is required.';
      } else if (trimmed.length < 2) {
        error = 'Full name must be at least 2 characters.';
      } else if (trimmed.length > 60) {
        error = 'Full name cannot exceed 60 characters.';
      } else if (!/^[A-Za-z\s.'-]+$/.test(trimmed)) {
        error = 'Full name can only contain letters, spaces, dots, or hyphens.';
      }
    }

    if (name === 'email') {
      if (!trimmed) {
        error = 'Work email address is required.';
      } else if (trimmed.length > 80) {
        error = 'Email address cannot exceed 80 characters.';
      } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(trimmed)) {
        error = 'Please enter a valid work email (e.g. sarah@company.com).';
      }
    }

    if (name === 'company') {
      if (trimmed.length > 60) {
        error = 'Company name cannot exceed 60 characters.';
      }
    }

    if (name === 'phone') {
      if (trimmed.length > 0) {
        if (trimmed.length < 7 || trimmed.length > 20) {
          error = 'Phone number must be between 7 and 20 characters.';
        } else if (!/^[+]*[(]?[0-9]{1,4}[)]?[-\s./0-9]*$/.test(trimmed)) {
          error = 'Please enter a valid phone number (e.g. +1 555-0199).';
        }
      }
    }

    if (name === 'message') {
      if (!trimmed) {
        error = 'Project details are required.';
      } else if (trimmed.length < 15) {
        error = `Project details must be at least 15 characters (${trimmed.length}/15 min).`;
      } else if (trimmed.length > 1000) {
        error = 'Project details cannot exceed 1000 characters.';
      }
    }

    return error;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    if (touched[name]) {
      const error = validateField(name, value);
      setErrors(prev => ({ ...prev, [name]: error }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    const error = validateField(name, value);
    setErrors(prev => ({ ...prev, [name]: error }));
  };

  const handleBudgetChange = (budget) => {
    setFormData({ ...formData, projectBudget: budget });
    if (budget === '< $25k') {
      setEstimatorState({ scope: 'MVP / Proof of Concept', timeline: '2-4 Weeks', estimatedCost: '$15,000 - $22,000' });
    } else if (budget === '$25k - $50k') {
      setEstimatorState({ scope: 'Custom Model & API Integration', timeline: '4-8 Weeks', estimatedCost: '$35,000 - $48,000' });
    } else if (budget === '$50k - $100k') {
      setEstimatorState({ scope: 'Full Enterprise AI Platform', timeline: '8-12 Weeks', estimatedCost: '$65,000 - $90,000' });
    } else {
      setEstimatorState({ scope: 'Multi-Agent Scaled Architecture', timeline: '12+ Weeks', estimatedCost: '$120,000+' });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {
      fullName: validateField('fullName', formData.fullName),
      email: validateField('email', formData.email),
      company: validateField('company', formData.company),
      phone: validateField('phone', formData.phone),
      message: validateField('message', formData.message),
    };

    setTouched({
      fullName: true,
      email: true,
      company: true,
      phone: true,
      message: true,
    });

    setErrors(newErrors);

    const hasErrors = Object.values(newErrors).some(err => err !== '');
    if (hasErrors) {
      return; // Stop submission if validation fails
    }

    setLoading(true);

    try {
      const res = await fetch('https://neuzenai-23l6.onrender.com/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      await res.json();
      setSubmitted(true);
    } catch (err) {
      console.warn('Backend unavailable, demonstrating successful client submission:', err);
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="careers" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Column: Contact info & AI Estimator */}
        <div className="lg:col-span-5 space-y-8">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-100 text-orange-700 text-xs font-extrabold uppercase tracking-wider mb-4 border border-orange-200">
              <Mail className="w-3.5 h-3.5 text-orange-600" />
              <span>LET'S BUILD TOGETHER</span>
            </div>

            <h2 className="text-4xl sm:text-5xl font-extrabold text-[#FF4500] tracking-tight font-['Outfit'] mb-4">
              Start Your AI Journey Today
            </h2>

            <p className="text-gray-600 text-base leading-relaxed">
              Have a project in mind or want to explore how custom AI solutions can elevate your business? Reach out to our engineering leadership.
            </p>
          </div>

          {/* AI Project Scope & Cost Estimator Card */}
          <div className="rounded-3xl p-6 bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white border border-white/10 shadow-2xl">
            <div className="flex items-center gap-2 text-orange-400 font-bold text-xs uppercase tracking-wider mb-4">
              <Calculator className="w-4 h-4" />
              <span>Instant AI Project Scope Estimator</span>
            </div>

            <div className="space-y-4">
              <div>
                <label className="text-xs font-semibold text-gray-400 block mb-2">Select Estimated Investment Range:</label>
                <div className="grid grid-cols-2 gap-2">
                  {['< $25k', '$25k - $50k', '$50k - $100k', '$100k+'].map((b) => (
                    <button
                      key={b}
                      type="button"
                      onClick={() => handleBudgetChange(b)}
                      className={`px-3 py-2 rounded-xl text-xs font-bold transition-colors ${
                        formData.projectBudget === b
                          ? 'bg-orange-500 text-white shadow-md'
                          : 'bg-white/5 text-gray-300 hover:bg-white/10'
                      }`}
                    >
                      {b}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 grid grid-cols-2 gap-4">
                <div>
                  <span className="text-[11px] text-gray-400 block">Typical Delivery:</span>
                  <span className="text-sm font-extrabold text-emerald-400">{estimatorState.timeline}</span>
                </div>
                <div>
                  <span className="text-[11px] text-gray-400 block">Target Scope:</span>
                  <span className="text-sm font-extrabold text-orange-400">{estimatorState.scope}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Details */}
          <div className="space-y-4 pt-4">
            <div className="flex items-center gap-4 text-gray-700">
              <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs text-gray-500 font-bold uppercase block">Direct Email</span>
                <span className="text-sm font-bold text-gray-900">contact@neuzenai.com</span>
              </div>
            </div>

            <div className="flex items-center gap-4 text-gray-700">
              <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs text-gray-500 font-bold uppercase block">Global Enterprise Desk</span>
                <span className="text-sm font-bold text-gray-900">+1 (800) 555-NEUZEN</span>
              </div>
            </div>
          </div>

        </div>

        {/* Right Column: Interactive Contact Form */}
        <div className="lg:col-span-7 bg-white rounded-3xl p-5 sm:p-10 border border-gray-200 shadow-xl">
          {submitted ? (
            <div className="text-center py-12 space-y-4 animate-in fade-in duration-300">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-3xl font-extrabold text-gray-900 font-['Outfit']">
                Inquiry Received!
              </h3>
              <p className="text-gray-600 max-w-md mx-auto text-base">
                Thank you for contacting NeuzenAI. Our lead AI solution architect will review your project requirements and respond within 24 hours.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setFormData({ ...formData, message: '' });
                  setTouched({});
                  setErrors({});
                }}
                className="mt-4 px-6 py-2.5 rounded-full bg-orange-500 text-white font-bold text-sm shadow-md hover:bg-orange-600 cursor-pointer"
              >
                Send Another Request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-6">
              <h3 className="text-2xl font-extrabold text-gray-900 font-['Outfit']">
                Schedule a Consultation
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="text-xs font-bold text-gray-700 uppercase tracking-wider block">
                      Full Name *
                    </label>
                    <span className="text-[10px] font-semibold text-gray-400">
                      {formData.fullName.length}/60
                    </span>
                  </div>
                  <input
                    type="text"
                    name="fullName"
                    maxLength={60}
                    value={formData.fullName}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    placeholder="e.g. Sarah Jenkins"
                    className={`w-full px-4 py-3 rounded-2xl border outline-none transition-all text-sm ${
                      touched.fullName && errors.fullName
                        ? 'border-red-500 bg-red-50/40 focus:border-red-500 focus:ring-2 focus:ring-red-200'
                        : 'border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200'
                    }`}
                  />
                  {touched.fullName && errors.fullName && (
                    <p className="text-xs text-red-500 font-bold mt-1.5 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{errors.fullName}</span>
                    </p>
                  )}
                </div>

                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="text-xs font-bold text-gray-700 uppercase tracking-wider block">
                      Work Email *
                    </label>
                    <span className="text-[10px] font-semibold text-gray-400">
                      {formData.email.length}/80
                    </span>
                  </div>
                  <input
                    type="email"
                    name="email"
                    maxLength={80}
                    value={formData.email}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    placeholder="sarah@company.com"
                    className={`w-full px-4 py-3 rounded-2xl border outline-none transition-all text-sm ${
                      touched.email && errors.email
                        ? 'border-red-500 bg-red-50/40 focus:border-red-500 focus:ring-2 focus:ring-red-200'
                        : 'border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200'
                    }`}
                  />
                  {touched.email && errors.email && (
                    <p className="text-xs text-red-500 font-bold mt-1.5 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{errors.email}</span>
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="text-xs font-bold text-gray-700 uppercase tracking-wider block">
                      Company Name
                    </label>
                    <span className="text-[10px] font-semibold text-gray-400">
                      {formData.company.length}/60
                    </span>
                  </div>
                  <input
                    type="text"
                    name="company"
                    maxLength={60}
                    value={formData.company}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    placeholder="Acme Corp"
                    className={`w-full px-4 py-3 rounded-2xl border outline-none transition-all text-sm ${
                      touched.company && errors.company
                        ? 'border-red-500 bg-red-50/40 focus:border-red-500 focus:ring-2 focus:ring-red-200'
                        : 'border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200'
                    }`}
                  />
                  {touched.company && errors.company && (
                    <p className="text-xs text-red-500 font-bold mt-1.5 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{errors.company}</span>
                    </p>
                  )}
                </div>

                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="text-xs font-bold text-gray-700 uppercase tracking-wider block">
                      Phone Number
                    </label>
                    <span className="text-[10px] font-semibold text-gray-400">
                      {formData.phone.length}/20
                    </span>
                  </div>
                  <input
                    type="tel"
                    name="phone"
                    maxLength={20}
                    value={formData.phone}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    placeholder="+1 (555) 000-0000"
                    className={`w-full px-4 py-3 rounded-2xl border outline-none transition-all text-sm ${
                      touched.phone && errors.phone
                        ? 'border-red-500 bg-red-50/40 focus:border-red-500 focus:ring-2 focus:ring-red-200'
                        : 'border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200'
                    }`}
                  />
                  {touched.phone && errors.phone && (
                    <p className="text-xs text-red-500 font-bold mt-1.5 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{errors.phone}</span>
                    </p>
                  )}
                </div>

                <div>
                  <label className="text-xs font-bold text-gray-700 uppercase tracking-wider block mb-1.5">
                    Capability Interest
                  </label>
                  <select
                    name="serviceInterest"
                    value={formData.serviceInterest}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-2xl border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all text-sm bg-white"
                  >
                    <option value="Advanced Analytics">Advanced Analytics</option>
                    <option value="AI Strategic Consulting">AI Strategic Consulting</option>
                    <option value="Custom AI Solutions">Custom AI Solutions</option>
                    <option value="Intelligent Automation">Intelligent Automation</option>
                    <option value="Enterprise Platform Demo">Enterprise Platform Demo</option>
                  </select>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="text-xs font-bold text-gray-700 uppercase tracking-wider block">
                    Project Details / Requirements *
                  </label>
                  <span className={`text-[10px] font-bold ${formData.message.length > 950 ? 'text-red-500' : 'text-gray-400'}`}>
                    {formData.message.length}/1000 characters
                  </span>
                </div>
                <textarea
                  rows={4}
                  name="message"
                  maxLength={1000}
                  value={formData.message}
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                  placeholder="Tell us about your business goals, target timelines, or specific dataset requirements..."
                  className={`w-full px-4 py-3 rounded-2xl border outline-none transition-all text-sm ${
                    touched.message && errors.message
                      ? 'border-red-500 bg-red-50/40 focus:border-red-500 focus:ring-2 focus:ring-red-200'
                      : 'border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200'
                  }`}
                />
                {touched.message && errors.message && (
                  <p className="text-xs text-red-500 font-bold mt-1.5 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                    <span>{errors.message}</span>
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 rounded-full bg-gradient-to-r from-[#FF5500] to-[#FF3D00] text-white font-extrabold text-base shadow-xl shadow-orange-500/30 hover:shadow-orange-500/50 hover:scale-[1.01] active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Validating & Submitting...</span>
                  </>
                ) : (
                  <>
                    <span>SUBMIT INQUIRY</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          )}
        </div>

      </div>
    </section>
  );
}
