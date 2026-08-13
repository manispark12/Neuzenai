import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// In-memory data store for contact submissions
const contactSubmissions = [];

// Health Check Endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', service: 'NeuzenAI Enterprise API Server', timestamp: new Date() });
});

// Contact Submission API Endpoint
app.post('/api/contact', (req, res) => {
  const { fullName, email, company, phone, serviceInterest, projectBudget, message } = req.body;

  if (!fullName || !email || !message) {
    return res.status(400).json({ error: 'Full name, email, and message are required.' });
  }

  const submission = {
    id: Date.now(),
    fullName,
    email,
    company: company || 'N/A',
    phone: phone || 'N/A',
    serviceInterest: serviceInterest || 'General Inquiry',
    projectBudget: projectBudget || 'Unspecified',
    message,
    submittedAt: new Date()
  };

  contactSubmissions.push(submission);
  console.log('New Contact Submission Received:', submission);

  return res.status(201).json({
    success: true,
    message: 'Inquiry received successfully. Our senior AI architect will contact you within 24 hours.',
    submissionId: submission.id
  });
});

// Get Submissions Endpoint (Admin / Internal)
app.get('/api/contact', (req, res) => {
  res.json({ success: true, count: contactSubmissions.length, submissions: contactSubmissions });
});

// AI Scope & Cost Estimator API Endpoint
app.post('/api/estimate', (req, res) => {
  const { capability, budget, timelineWeeks } = req.body;

  let estimatedTimeline = '4-8 Weeks';
  let estimatedCost = '$35,000 - $48,000';
  let scopeSummary = 'Custom ML model & API endpoint integration';

  if (budget === '< $25k') {
    estimatedTimeline = '2-4 Weeks';
    estimatedCost = '$15,000 - $22,000';
    scopeSummary = 'Proof of Concept / Prototype Model';
  } else if (budget === '$50k - $100k') {
    estimatedTimeline = '8-12 Weeks';
    estimatedCost = '$65,000 - $90,000';
    scopeSummary = 'Enterprise Full-Stack AI Platform';
  } else if (budget === '$100k+') {
    estimatedTimeline = '12+ Weeks';
    estimatedCost = '$120,000+';
    scopeSummary = 'Scaled Multi-Agent Infrastructure with SLA Support';
  }

  res.json({
    success: true,
    capability: capability || 'Advanced Analytics',
    estimatedTimeline,
    estimatedCost,
    scopeSummary
  });
});

// NAI Virtual Assistant Quick Chat API Endpoint
app.post('/api/chat', (req, res) => {
  const { message } = req.body;
  if (!message) return res.status(400).json({ error: 'Message text required' });

  const query = message.toLowerCase();
  let reply = 'NeuzenAI specializes in end-to-end custom Machine Learning models, Advanced Analytics, Intelligent Process Automation, and Enterprise AI Strategy.';

  if (query.includes('capability') || query.includes('service') || query.includes('what we do')) {
    reply = 'Our 4 flagship capabilities are:\n1. Advanced Analytics (Predictive Modeling)\n2. AI Strategic Consulting (Roadmapping)\n3. Custom AI Solutions (Neural Networks & NLP)\n4. Intelligent Automation (RPA & Agents)';
  } else if (query.includes('fintech') || query.includes('financial') || query.includes('bank')) {
    reply = 'For Financial Services, we process 1B+ daily transactions with 99.8% fraud detection accuracy and sub-10ms latency.';
  } else if (query.includes('fast') || query.includes('deploy') || query.includes('timeline')) {
    reply = 'Most enterprise proof-of-concepts deploy within 2-4 weeks, with full production platforms rolling out in 8-12 weeks.';
  } else if (query.includes('schedule') || query.includes('contact') || query.includes('call') || query.includes('cost')) {
    reply = 'I can connect you directly with our senior AI solution architects right now!';
  }

  res.json({ success: true, reply });
});

app.listen(PORT, () => {
  console.log(`🚀 NeuzenAI Express Backend Server running on http://localhost:${PORT}`);
});
