-- NeuzenAI Enterprise MySQL Database & Table Schema Setup Script
-- Execute this script in MySQL Workbench, phpMyAdmin, or MySQL CLI

-- 1. Create Database
CREATE DATABASE IF NOT EXISTS neuzenai;
USE neuzenai;

-- 2. Create Submissions Table
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

-- 3. Verify Table Creation
DESCRIBE contact_submissions;
