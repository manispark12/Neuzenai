import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mysql from 'mysql2/promise';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// In-memory data store fallback (used if MySQL is connecting or offline)
const inMemorySubmissions = [];

// MySQL Database Connection Pool Setup
let dbPool = null;
let isMySqlConnected = false;

async function initMySQL() {
  const dbConfig = {
    host: process.env.DB_HOST || 'localhost',
    port: parseInt(process.env.DB_PORT || '3306'),
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
  };

  try {
    // 1. Connect without database to ensure database exists
    const tempConn = await mysql.createConnection(dbConfig);
    const dbName = process.env.DB_NAME || 'neuzenai';
    
    await tempConn.query(`CREATE DATABASE IF NOT EXISTS \`${dbName}\`;`);
    await tempConn.end();

    // 2. Create pool connected to the target database
    dbPool = mysql.createPool({
      ...dbConfig,
      database: dbName,
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0,
    });

    // 3. Auto-create contact_submissions table if not existing
    const createTableQuery = `
      CREATE TABLE IF NOT EXISTS contact_submissions (
        id INT AUTO_INCREMENT PRIMARY KEY,
        full_name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        company VARCHAR(255) DEFAULT 'N/A',
        phone VARCHAR(100) DEFAULT 'N/A',
        service_interest VARCHAR(255) DEFAULT 'General Inquiry',
        project_budget VARCHAR(100) DEFAULT 'Unspecified',
        message TEXT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `;

    await dbPool.query(createTableQuery);
    isMySqlConnected = true;
    console.log(`✅ Connected to MySQL Database '${dbName}' at ${dbConfig.host}:${dbConfig.port}`);
    console.log(`📋 Table 'contact_submissions' verified and ready.`);
  } catch (err) {
    isMySqlConnected = false;
    console.warn(`⚠️ MySQL Connection Notice: Could not connect to MySQL server (${err.message}).`);
    console.warn(`💡 Submissions will be stored in-memory and logged until MySQL service is running.`);
  }
}

// Initialize MySQL pool on startup
initMySQL();

// Health Check Endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'OK',
    service: 'NeuzenAI Enterprise API Server',
    mysqlConnected: isMySqlConnected,
    database: process.env.DB_NAME || 'neuzenai',
    timestamp: new Date()
  });
});

// Contact Submission API Endpoint (MySQL + In-Memory Fallback)
app.post('/api/contact', async (req, res) => {
  const { fullName, email, company, phone, serviceInterest, projectBudget, message } = req.body;

  if (!fullName || !email || !message) {
    return res.status(400).json({ error: 'Full name, email, and message are required.' });
  }

  const cleanData = {
    fullName: fullName.trim(),
    email: email.trim(),
    company: (company || 'N/A').trim(),
    phone: (phone || 'N/A').trim(),
    serviceInterest: (serviceInterest || 'General Inquiry').trim(),
    projectBudget: (projectBudget || 'Unspecified').trim(),
    message: message.trim(),
    submittedAt: new Date()
  };

  // If MySQL is active, insert into MySQL table
  if (isMySqlConnected && dbPool) {
    try {
      const insertSql = `
        INSERT INTO contact_submissions 
        (full_name, email, company, phone, service_interest, project_budget, message) 
        VALUES (?, ?, ?, ?, ?, ?, ?)
      `;
      const [result] = await dbPool.query(insertSql, [
        cleanData.fullName,
        cleanData.email,
        cleanData.company,
        cleanData.phone,
        cleanData.serviceInterest,
        cleanData.projectBudget,
        cleanData.message
      ]);

      console.log(`📥 New Contact Form Submission saved to MySQL (ID: ${result.insertId}):`, cleanData.fullName, cleanData.email);

      return res.status(201).json({
        success: true,
        storage: 'MySQL Database',
        message: 'Inquiry received successfully and stored in database. Our AI architect will contact you within 24 hours.',
        submissionId: result.insertId
      });
    } catch (dbErr) {
      console.error('❌ MySQL Insert Error:', dbErr.message);
      // Fallback to in-memory store if DB query fails
    }
  }

  // In-memory fallback
  const submissionId = Date.now();
  inMemorySubmissions.push({ id: submissionId, ...cleanData });
  console.log(`📥 New Contact Form Submission saved (In-Memory ID: ${submissionId}):`, cleanData.fullName, cleanData.email);

  return res.status(201).json({
    success: true,
    storage: 'In-Memory Store',
    message: 'Inquiry received successfully. Our senior AI architect will contact you within 24 hours.',
    submissionId
  });
});

// Get Submissions Endpoint (Admin / Internal Dashboard)
app.get('/api/contact', async (req, res) => {
  if (isMySqlConnected && dbPool) {
    try {
      const [rows] = await dbPool.query('SELECT * FROM contact_submissions ORDER BY created_at DESC');
      return res.json({ success: true, source: 'MySQL Database', count: rows.length, submissions: rows });
    } catch (err) {
      console.error('MySQL Query Error:', err.message);
    }
  }

  res.json({ success: true, source: 'In-Memory Store', count: inMemorySubmissions.length, submissions: inMemorySubmissions });
});

// AI Scope & Cost Estimator API Endpoint
app.post('/api/estimate', (req, res) => {
  const { capability, budget } = req.body;

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
  console.log(`🚀 NeuzenAI Express Server running on http://localhost:${PORT}`);
  console.log(`💾 MySQL Configured Database: ${process.env.DB_NAME || 'neuzenai'}`);
});
