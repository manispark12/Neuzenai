import React, { useEffect, useRef } from 'react';
import { ArrowRight, Sparkles, Zap, Shield, TrendingUp } from 'lucide-react';

export default function Hero({ onStartJourney }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let animationFrameId;
    let width = (canvas.width = canvas.parentElement.offsetWidth);
    let height = (canvas.height = canvas.parentElement.offsetHeight);

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.offsetWidth;
      height = canvas.height = canvas.parentElement.offsetHeight;
    };
    window.addEventListener('resize', handleResize);

    // Particle pool setup (orange and mint dots matching Image 1)
    const particleCount = 85;
    const particles = [];

    const colors = [
      'rgba(255, 85, 0, ',   // Vibrant Orange
      'rgba(255, 107, 0, ',  // Bright Orange-Yellow
      'rgba(16, 185, 129, ', // Mint Green
      'rgba(5, 150, 105, ',  // Emerald Green
      'rgba(249, 115, 22, ',  // Coral Orange
    ];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 3.5 + 1.5,
        colorBase: colors[Math.floor(Math.random() * colors.length)],
        opacity: Math.random() * 0.6 + 0.3,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4 - 0.1,
        pulseSpeed: Math.random() * 0.02 + 0.005,
        pulseVal: Math.random() * Math.PI,
      });
    }

    let mouse = { x: -1000, y: -1000 };
    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    canvas.parentElement.addEventListener('mousemove', handleMouseMove);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw subtle background glowing radial spots
      const grad1 = ctx.createRadialGradient(width * 0.5, height * 0.4, 50, width * 0.5, height * 0.4, 350);
      grad1.addColorStop(0, 'rgba(255, 85, 0, 0.08)');
      grad1.addColorStop(0.5, 'rgba(16, 185, 129, 0.04)');
      grad1.addColorStop(1, 'rgba(255, 255, 255, 0)');
      ctx.fillStyle = grad1;
      ctx.fillRect(0, 0, width, height);

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        // Wrap edges
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;
        if (p.y < -10) p.y = height + 10;
        if (p.y > height + 10) p.y = -10;

        // Pulse size & opacity
        p.pulseVal += p.pulseSpeed;
        const currentOpacity = p.opacity + Math.sin(p.pulseVal) * 0.2;

        // Mouse repelling / attraction effect
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120) {
          const force = (120 - dist) / 120;
          p.x -= (dx / dist) * force * 1.5;
          p.y -= (dy / dist) * force * 1.5;
        }

        // Draw particle dot with soft glow
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${p.colorBase}${Math.max(0.1, Math.min(1, currentOpacity))})`;
        ctx.shadowBlur = 8;
        ctx.shadowColor = p.colorBase + '0.5)';
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section id="about" className="relative min-h-[90vh] pt-32 pb-20 flex items-center justify-center overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white">
      {/* Background Interactive Particle Canvas */}
      <div className="absolute inset-0 z-0 pointer-events-auto">
        <canvas ref={canvasRef} className="w-full h-full block" />
      </div>

      {/* Decorative Gradient Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-to-tr from-orange-400/15 via-emerald-300/10 to-transparent rounded-full blur-3xl pointer-events-none" />

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center flex flex-col items-center">
        
        {/* Floating Top Pill Tag */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-50 border border-orange-200/80 text-orange-600 text-xs font-bold tracking-wide uppercase mb-6 shadow-sm animate-bounce duration-1000">
          <Sparkles className="w-3.5 h-3.5 text-orange-500" />
          <span>Next-Gen Enterprise Artificial Intelligence</span>
        </div>

        {/* Main Headline matching user screenshots */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-gray-950 font-['Outfit'] leading-[1.1] max-w-4xl">
          Where <span className="text-[#FF4500] drop-shadow-sm">AI</span> meets{' '}
          <span className="text-[#00C853] drop-shadow-sm">ambition</span>
        </h1>

        <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900 font-['Outfit'] mt-3 mb-6">
          build <span className="text-[#FF4500]">smarter</span>,{' '}
          <span className="text-[#00C853]">scale</span> faster
        </h2>

        {/* Subtitle matching user screenshot */}
        <p className="text-lg sm:text-xl md:text-2xl text-gray-700 font-medium max-w-3xl leading-relaxed mt-2 mb-10">
          Custom <span className="text-[#00C853] font-bold">ML</span> models,{' '}
          <span className="text-[#FF4500] font-bold">intelligent</span> platforms, and end-to-end{' '}
          <span className="text-[#FF4500] font-bold">product engineering</span> — from concept to{' '}
          <span className="text-[#00C853] font-bold">scale</span>.
        </p>

        {/* Primary CTA Button matching Image 1 */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <button
            onClick={onStartJourney}
            className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-[#FF5500] to-[#FF3D00] text-white font-extrabold text-base sm:text-lg shadow-xl shadow-orange-500/35 hover:shadow-2xl hover:shadow-orange-500/50 hover:scale-105 active:scale-95 transition-all duration-300"
          >
            <span>START YOUR AI JOURNEY</span>
            <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-1 transition-transform">
              <ArrowRight className="w-4 h-4 text-white" />
            </div>
          </button>
        </div>

        {/* Trust Badges */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-gray-200/80 w-full max-w-4xl">
          <div className="flex items-center justify-center gap-2 text-gray-600 font-semibold text-xs sm:text-sm">
            <Zap className="w-4 h-4 text-orange-500" />
            <span>99.9% Uptime SLA</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-gray-600 font-semibold text-xs sm:text-sm">
            <Shield className="w-4 h-4 text-emerald-500" />
            <span>Enterprise Security</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-gray-600 font-semibold text-xs sm:text-sm">
            <TrendingUp className="w-4 h-4 text-orange-500" />
            <span>10x Deployment Speed</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-gray-600 font-semibold text-xs sm:text-sm">
            <Sparkles className="w-4 h-4 text-emerald-500" />
            <span>SOC2 & ISO Compliant</span>
          </div>
        </div>

      </div>
    </section>
  );
}
