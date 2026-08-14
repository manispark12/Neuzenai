import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Briefcase, 
  Sparkles, 
  CheckCircle2, 
  Send, 
  Upload, 
  MapPin, 
  Clock, 
  ArrowRight, 
  Zap, 
  Globe, 
  AlertCircle, 
  Loader2,
  BookOpen,
  HeartHandshake
} from 'lucide-react';

export default function CareersPage() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    position: 'AI Engineer',
    linkedin: '',
    coverNote: '',
    fileName: ''
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Exact 3 jobs requested by user
  const openPositions = [
    {
      id: 'ai-engineer',
      title: 'AI Engineer',
      department: 'Engineering',
      exp: '2-3 Years Experience',
      type: 'Full Time',
      location: 'Hyderabad',
      desc: 'Build and deploy production-grade machine learning models, custom neural networks, and scalable AI inference APIs.'
    },
    {
      id: 'ai-intern',
      title: 'AI Engineer Intern',
      department: 'Internship',
      exp: 'Freshers / Students',
      type: 'Internship',
      location: 'Hyderabad',
      desc: 'Gain hands-on experience training neural networks, working with LLMs, and building real-world AI applications.'
    },
    {
      id: 'bde',
      title: 'Business Development Executive',
      department: 'Growth & Sales',
      exp: '1-2 Years Experience',
      type: 'Full Time',
      location: 'Hyderabad',
      desc: 'Drive enterprise AI client partnerships, generate qualified leads, and collaborate with technical leadership on solution pitches.'
    }
  ];

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
        error = 'Letters, spaces, dots, or hyphens only.';
      }
    }

    if (name === 'email') {
      if (!trimmed) {
        error = 'Email address is required.';
      } else if (trimmed.length > 80) {
        error = 'Email address cannot exceed 80 characters.';
      } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(trimmed)) {
        error = 'Please enter a valid email address.';
      }
    }

    if (name === 'phone') {
      if (trimmed.length > 0) {
        if (trimmed.length < 7 || trimmed.length > 20) {
          error = 'Phone number must be between 7 and 20 characters.';
        } else if (!/^[+]*[(]?[0-9]{1,4}[)]?[-\s./0-9]*$/.test(trimmed)) {
          error = 'Please enter a valid phone number.';
        }
      }
    }

    if (name === 'linkedin') {
      if (trimmed.length > 0 && trimmed.length > 100) {
        error = 'URL cannot exceed 100 characters.';
      }
    }

    if (name === 'coverNote') {
      if (!trimmed) {
        error = 'Cover note / introduction is required.';
      } else if (trimmed.length < 15) {
        error = `Cover note must be at least 15 characters (${trimmed.length}/15 min).`;
      } else if (trimmed.length > 500) {
        error = 'Cover note cannot exceed 500 characters.';
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

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData(prev => ({ ...prev, fileName: file.name }));
    }
  };

  const handleApplyClick = (posTitle) => {
    setFormData(prev => ({ ...prev, position: posTitle }));
    const formEl = document.getElementById('careers-form-section');
    if (formEl) {
      formEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Pure Client-Side Submission (Bypasses Backend)
  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {
      fullName: validateField('fullName', formData.fullName),
      email: validateField('email', formData.email),
      phone: validateField('phone', formData.phone),
      linkedin: validateField('linkedin', formData.linkedin),
      coverNote: validateField('coverNote', formData.coverNote)
    };

    setTouched({
      fullName: true,
      email: true,
      phone: true,
      linkedin: true,
      coverNote: true
    });

    setErrors(newErrors);

    const hasErrors = Object.values(newErrors).some(err => err !== '');
    if (hasErrors) {
      return; // Stop if validation fails
    }

    setLoading(true);

    // Simulate client processing
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <div className="min-h-screen bg-[#07080C] text-white pt-32 pb-24 relative overflow-hidden">
      
      {/* Background Cyber Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[750px] h-[750px] bg-gradient-to-tr from-[#FF4500]/20 via-emerald-500/10 to-transparent rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#FF4500_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* 1. HERO HEADER */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0D0E15]/90 border border-orange-500/40 text-orange-400 text-xs font-black tracking-widest uppercase mb-6 shadow-lg shadow-orange-500/20 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-[#FF4500]" />
            <span>JOIN THE NEUZENAI TEAM</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-white font-['Outfit'] tracking-tight leading-[1.1] mb-6">
            Build the Next Generation of <br />
            <span className="bg-gradient-to-r from-[#FF5500] via-[#FF3D00] to-emerald-400 bg-clip-text text-transparent">
              Enterprise Intelligence
            </span>
          </h1>

          <p className="text-gray-300 text-lg sm:text-xl font-medium leading-relaxed max-w-2xl mx-auto">
            We are looking for bold engineers, researchers, and AI innovators who want to push the boundaries of autonomous multi-agent systems and real-time machine learning.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10">
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
              <div className="text-2xl font-black text-[#FF4500] font-['Outfit']">100%</div>
              <div className="text-xs font-extrabold text-gray-400 uppercase">Remote & Hybrid</div>
            </div>
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
              <div className="text-2xl font-black text-emerald-400 font-['Outfit']">$3,000</div>
              <div className="text-xs font-extrabold text-gray-400 uppercase">Learning Stipend</div>
            </div>
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
              <div className="text-2xl font-black text-indigo-400 font-['Outfit']">Top 1%</div>
              <div className="text-xs font-extrabold text-gray-400 uppercase">Equity Packages</div>
            </div>
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
              <div className="text-2xl font-black text-amber-400 font-['Outfit']">4.9 / 5</div>
              <div className="text-xs font-extrabold text-gray-400 uppercase">Employee Rating</div>
            </div>
          </div>
        </div>

        {/* 2. WHY WORK WITH US PERKS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="p-8 rounded-3xl bg-[#0D0E15]/90 border border-white/10 shadow-xl backdrop-blur-md text-left">
            <div className="w-12 h-12 rounded-2xl bg-orange-500/20 text-[#FF4500] flex items-center justify-center mb-6">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-extrabold text-white mb-3 font-['Outfit']">
              Autonomous Work Culture
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              We empower team members to own their projects end-to-end with async workflows, flexible hours, and minimum bureaucracy.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-[#0D0E15]/90 border border-white/10 shadow-xl backdrop-blur-md text-left">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-6">
              <BookOpen className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-extrabold text-white mb-3 font-['Outfit']">
              Cutting-Edge AI Tech Stack
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Work with PyTorch, CUDA, LLM fine-tuning, Vector DBs, and agentic execution frameworks at production scale.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-[#0D0E15]/90 border border-white/10 shadow-xl backdrop-blur-md text-left">
            <div className="w-12 h-12 rounded-2xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center mb-6">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-extrabold text-white mb-3 font-['Outfit']">
              Comprehensive Benefits
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Enjoy 100% health coverage, generous PTO, competitive salaries, performance bonuses, and global team retreats.
            </p>
          </div>
        </div>

        {/* 3. PREVIOUS FULL-WIDTH ROW JOB LISTING STYLING */}
        <div className="mb-24">
          <div className="flex items-center justify-between mb-8 text-left">
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-['Outfit']">
                Featured Open Positions
              </h2>
              <p className="text-gray-400 text-sm mt-1">Explore current career opportunities across engineering & sales in Hyderabad.</p>
            </div>
          </div>

          <div className="space-y-6">
            {openPositions.map((pos) => (
              <div 
                key={pos.id} 
                className="p-6 sm:p-8 rounded-3xl bg-[#0D0E15]/90 border border-white/15 hover:border-orange-500/60 shadow-2xl transition-all duration-300 flex flex-col md:flex-row md:items-center justify-between gap-6 group text-left"
              >
                <div className="space-y-2 max-w-2xl">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="px-3 py-1 rounded-full bg-orange-500/20 text-orange-400 text-xs font-black uppercase border border-orange-500/30">
                      {pos.type}
                    </span>
                    <span className="text-xs font-bold text-gray-300 flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-emerald-400" /> {pos.location}
                    </span>
                    <span className="text-xs font-bold text-gray-300 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-indigo-400" /> {pos.exp}
                    </span>
                  </div>

                  <h3 className="text-2xl font-extrabold text-white group-hover:text-[#FF4500] transition-colors font-['Outfit']">
                    {pos.title}
                  </h3>

                  <p className="text-gray-300 text-sm leading-relaxed">
                    {pos.desc}
                  </p>
                </div>

                <button
                  onClick={() => handleApplyClick(pos.title)}
                  className="px-6 py-3 rounded-full bg-gradient-to-r from-[#FF5500] to-[#FF3D00] hover:from-[#FF4500] hover:to-[#E63900] text-white font-extrabold text-sm shadow-xl shadow-orange-500/30 hover:scale-105 active:scale-95 transition-all duration-300 w-full sm:w-auto shrink-0 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Apply Now</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* 4. CAREERS APPLICATION FORM SECTION (BYPASSES BACKEND) */}
        <div id="careers-form-section" className="max-w-4xl mx-auto rounded-3xl bg-white text-gray-900 p-5 sm:p-12 border border-gray-200 shadow-2xl">
          {submitted ? (
            /* SUCCESS MESSAGE DISPLAY */
            <div className="text-center py-12 space-y-6 animate-in fade-in duration-500">
              <div className="w-20 h-20 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-xl shadow-emerald-500/20">
                <CheckCircle2 className="w-12 h-12" />
              </div>

              <div className="space-y-2 max-w-lg mx-auto">
                <h3 className="text-3xl sm:text-4xl font-black text-gray-950 font-['Outfit']">
                  Application Submitted Successfully!
                </h3>
                <p className="text-gray-600 text-base leading-relaxed">
                  Thank you for applying to <span className="text-[#FF4500] font-bold">NeuZenAI</span> for the <span className="font-extrabold text-gray-900">{formData.position}</span> position. Our team will review your application and reach out shortly.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 max-w-md mx-auto text-xs text-left space-y-1 text-gray-600 font-medium">
                <div><strong className="text-gray-900">Applicant:</strong> {formData.fullName} ({formData.email})</div>
                <div><strong className="text-gray-900">Position:</strong> {formData.position}</div>
                {formData.fileName && <div><strong className="text-gray-900">Resume Attached:</strong> {formData.fileName}</div>}
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      fullName: '',
                      email: '',
                      phone: '',
                      position: 'AI Engineer',
                      linkedin: '',
                      coverNote: '',
                      fileName: ''
                    });
                    setTouched({});
                    setErrors({});
                  }}
                  className="px-6 py-3 rounded-full bg-[#FF4500] text-white font-extrabold text-sm shadow-md hover:bg-orange-600 cursor-pointer"
                >
                  Submit Another Application
                </button>

                <button
                  onClick={() => navigate('/')}
                  className="px-6 py-3 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-800 font-extrabold text-sm cursor-pointer"
                >
                  Return to Home
                </button>
              </div>
            </div>
          ) : (
            /* APPLICATION FORM */
            <form onSubmit={handleSubmit} noValidate className="space-y-6 text-left">
              <div className="flex items-center gap-3 border-b border-gray-200 pb-4">
                <div className="p-2.5 rounded-2xl bg-[#FF4500] text-white shadow-md shadow-orange-500/30">
                  <Briefcase className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-2xl font-extrabold text-gray-950 font-['Outfit']">
                    Submit Your Application
                  </h3>
                  <p className="text-xs text-gray-500 font-medium">Direct client submission (Instant confirmation).</p>
                </div>
              </div>

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
                    placeholder="e.g. Alex Rivera"
                    className={`w-full px-4 py-3 rounded-2xl border outline-none transition-all text-sm ${
                      touched.fullName && errors.fullName
                        ? 'border-red-500 bg-red-50/40 focus:border-red-500'
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
                      Email Address *
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
                    placeholder="alex@example.com"
                    className={`w-full px-4 py-3 rounded-2xl border outline-none transition-all text-sm ${
                      touched.email && errors.email
                        ? 'border-red-500 bg-red-50/40 focus:border-red-500'
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
                    placeholder="+91 98765 43210"
                    className={`w-full px-4 py-3 rounded-2xl border outline-none transition-all text-sm ${
                      touched.phone && errors.phone
                        ? 'border-red-500 bg-red-50/40 focus:border-red-500'
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
                    Position Applied For
                  </label>
                  <select
                    name="position"
                    value={formData.position}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-2xl border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all text-sm bg-white font-medium"
                  >
                    <option value="AI Engineer">AI Engineer</option>
                    <option value="AI Engineer Intern">AI Engineer Intern</option>
                    <option value="Business Development Executive">Business Development Executive</option>
                    <option value="General Application">General Application</option>
                  </select>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="text-xs font-bold text-gray-700 uppercase tracking-wider block">
                      LinkedIn Profile
                    </label>
                    <span className="text-[10px] font-semibold text-gray-400">
                      {formData.linkedin.length}/100
                    </span>
                  </div>
                  <input
                    type="url"
                    name="linkedin"
                    maxLength={100}
                    value={formData.linkedin}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    placeholder="https://linkedin.com/in/alex"
                    className={`w-full px-4 py-3 rounded-2xl border outline-none transition-all text-sm ${
                      touched.linkedin && errors.linkedin
                        ? 'border-red-500 bg-red-50/40 focus:border-red-500'
                        : 'border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200'
                    }`}
                  />
                  {touched.linkedin && errors.linkedin && (
                    <p className="text-xs text-red-500 font-bold mt-1.5 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{errors.linkedin}</span>
                    </p>
                  )}
                </div>
              </div>

              {/* Resume Upload */}
              <div>
                <label className="text-xs font-bold text-gray-700 uppercase tracking-wider block mb-1.5">
                  Attach Resume (PDF or DOCX)
                </label>
                <div className="relative border-2 border-dashed border-gray-300 hover:border-orange-500 rounded-2xl p-4 text-center cursor-pointer transition-colors bg-slate-50">
                  <input
                    type="file"
                    accept=".pdf,.docx,.doc"
                    onChange={handleFileChange}
                    className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                  />
                  <div className="flex items-center justify-center gap-2 text-gray-600 text-sm font-semibold">
                    <Upload className="w-4 h-4 text-[#FF4500]" />
                    <span>{formData.fileName ? `Selected: ${formData.fileName}` : 'Click or Drag & Drop Resume File'}</span>
                  </div>
                </div>
              </div>

              {/* Cover Note */}
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="text-xs font-bold text-gray-700 uppercase tracking-wider block">
                    Brief Cover Note / Introduction *
                  </label>
                  <span className={`text-[10px] font-bold ${formData.coverNote.length > 450 ? 'text-red-500' : 'text-gray-400'}`}>
                    {formData.coverNote.length}/500 characters
                  </span>
                </div>
                <textarea
                  rows={4}
                  name="coverNote"
                  maxLength={500}
                  value={formData.coverNote}
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                  placeholder="Briefly describe your relevant technical background and why you want to join NeuZenAI..."
                  className={`w-full px-4 py-3 rounded-2xl border outline-none transition-all text-sm ${
                    touched.coverNote && errors.coverNote
                      ? 'border-red-500 bg-red-50/40 focus:border-red-500'
                      : 'border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200'
                  }`}
                />
                {touched.coverNote && errors.coverNote && (
                  <p className="text-xs text-red-500 font-bold mt-1.5 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                    <span>{errors.coverNote}</span>
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 rounded-full bg-gradient-to-r from-[#FF5500] to-[#FF3D00] text-white font-black text-base shadow-xl shadow-orange-500/30 hover:shadow-orange-500/50 hover:scale-[1.01] active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Submitting Application...</span>
                  </>
                ) : (
                  <>
                    <span>SUBMIT CAREERS APPLICATION</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          )}
        </div>

      </div>
    </div>
  );
}
