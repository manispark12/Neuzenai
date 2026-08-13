import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Sparkles, Bot, User, ArrowRight } from 'lucide-react';

export default function AIWidget({ onOpenContact, onNavigate }) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: 'Hello! I am NAI, your virtual NeuzenAI Assistant. How can I help you explore our enterprise AI capabilities today?'
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isTyping]);

  const quickPrompts = [
    'What are your core AI capabilities?',
    'Financial Services case study',
    'How fast can we deploy a custom ML model?',
    'Schedule a discovery call'
  ];

  const handleSend = async (textToSend) => {
    const query = textToSend || input;
    if (!query.trim()) return;

    const userMsg = { sender: 'user', text: query };
    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInput('');
    setIsTyping(true);

    try {
      // Try fetching from Express backend
      const res = await fetch('http://localhost:5000/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: query })
      });

      if (res.ok) {
        const data = await res.json();
        setMessages((prev) => [...prev, { sender: 'bot', text: data.reply }]);
        setIsTyping(false);
        return;
      }
    } catch (e) {
      // Intelligent fallback logic
    }

    // Local Intelligent Response Engine
    setTimeout(() => {
      let botReply = 'NeuzenAI specializes in end-to-end custom Machine Learning models, Advanced Analytics, Intelligent Process Automation, and Enterprise AI Strategy.';
      const lower = query.toLowerCase();

      if (lower.includes('capability') || lower.includes('service') || lower.includes('what we do')) {
        botReply = 'Our 4 flagship capabilities are:\n1. Advanced Analytics (Predictive Modeling)\n2. AI Strategic Consulting (Roadmapping)\n3. Custom AI Solutions (Neural Networks & NLP)\n4. Intelligent Automation (RPA & Agents)';
      } else if (lower.includes('fintech') || lower.includes('financial') || lower.includes('bank')) {
        botReply = 'For Financial Services, we process 1B+ daily transactions with 99.8% fraud detection accuracy and sub-10ms latency.';
      } else if (lower.includes('fast') || lower.includes('deploy') || lower.includes('timeline')) {
        botReply = 'Most enterprise proof-of-concepts deploy within 2-4 weeks, with full production platforms rolling out in 8-12 weeks.';
      } else if (lower.includes('schedule') || lower.includes('contact') || lower.includes('call') || lower.includes('cost')) {
        botReply = 'I can connect you directly with our senior AI solution architects right now!';
      }

      setMessages((prev) => [...prev, { sender: 'bot', text: botReply }]);
      setIsTyping(false);
    }, 600);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Drawer Window */}
      {isOpen ? (
        <div className="w-80 sm:w-96 rounded-3xl glass-panel-dark border border-white/20 shadow-2xl overflow-hidden flex flex-col h-[500px] animate-in fade-in slide-in-from-bottom-4 duration-300">
          {/* Header */}
          <div className="p-4 bg-gradient-to-r from-orange-600 to-orange-500 text-white flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center font-black text-xs">
                NAI
              </div>
              <div>
                <h4 className="font-bold text-sm leading-none font-['Outfit']">Neuzen AI Assistant</h4>
                <span className="text-[10px] text-orange-100 flex items-center gap-1 mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> Online • 24/7 Enterprise Support
                </span>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-full hover:bg-white/20 transition-colors"
            >
              <X className="w-5 h-5 text-white" />
            </button>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3 text-xs sm:text-sm">
            {messages.map((m, idx) => (
              <div
                key={idx}
                className={`flex gap-2 ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {m.sender === 'bot' && (
                  <div className="w-6 h-6 rounded-full bg-orange-500 text-white flex items-center justify-center text-[10px] font-extrabold shrink-0 mt-1">
                    NAI
                  </div>
                )}
                <div
                  className={`p-3 rounded-2xl max-w-[80%] whitespace-pre-line leading-relaxed ${
                    m.sender === 'user'
                      ? 'bg-orange-600 text-white font-medium rounded-br-none shadow-md'
                      : 'bg-white/10 text-gray-200 border border-white/10 rounded-bl-none'
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex items-center gap-2 text-xs text-gray-400">
                <Bot className="w-4 h-4 text-orange-400 animate-bounce" />
                <span>NAI is thinking...</span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Prompts */}
          <div className="px-3 py-2 bg-white/5 border-t border-white/10 flex flex-wrap gap-1.5">
            {quickPrompts.map((p, idx) => (
              <button
                key={idx}
                onClick={() => {
                  if (p === 'Schedule a discovery call') {
                    setIsOpen(false);
                    onOpenContact();
                  } else {
                    handleSend(p);
                  }
                }}
                className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-white/10 hover:bg-orange-500 hover:text-white text-gray-300 transition-colors border border-white/10"
              >
                {p}
              </button>
            ))}
          </div>

          {/* Input Box */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="p-3 bg-black/60 border-t border-white/10 flex items-center gap-2"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask NAI anything..."
              className="flex-1 bg-white/10 text-white text-xs px-3 py-2.5 rounded-full outline-none focus:ring-1 focus:ring-orange-500 border border-white/10 placeholder-gray-400"
            />
            <button
              type="submit"
              className="w-8 h-8 rounded-full bg-orange-500 hover:bg-orange-600 text-white flex items-center justify-center shrink-0 transition-colors"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      ) : (
        /* Floating Button matching user screenshots (Orange pill labeled NAI) */
        <button
          onClick={() => setIsOpen(true)}
          className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-r from-[#FF5500] to-[#FF3D00] text-white font-black text-base shadow-2xl shadow-orange-500/50 hover:scale-110 active:scale-95 transition-all duration-300 animate-pulse-glow"
        >
          <span className="font-['Outfit'] tracking-wider">NAI</span>
          {/* Unread badge */}
          <span className="absolute top-0 right-0 w-3.5 h-3.5 rounded-full bg-emerald-400 border-2 border-black" />
        </button>
      )}
    </div>
  );
}
