
import { useEffect, useState } from 'react';
import { ChevronDown, Linkedin, Mail, MessageCircle, FileText } from 'lucide-react';

export const Hero = () => {
  const [text, setText] = useState('');
  const fullText = "Ingénieur en fin de formation à l'EMI | AI Data & Business Intelligence";

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 50);

    return () => clearInterval(timer);
  }, []);

  const roles = [
    "Data Scientist",
    "AI Engineer",
    "Data Analytics",
    "MLOps Enthusiast",
    "Data Engineering Enthusiast",
    "Machine Learning"
  ];

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* AI-themed background */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-600/10 via-orange-600/5 to-slate-600/10 backdrop-blur-3xl"></div>

      {/* Enhanced AI Neural Network Background */}
      <div className="absolute inset-0 opacity-15">
        <svg className="w-full h-full" viewBox="0 0 1200 800" xmlns="http://www.w3.org/2000/svg">
          {/* Neural network nodes */}
          <g className="animate-pulse">
            {Array.from({ length: 80 }).map((_, i) => (
              <circle
                key={i}
                cx={Math.random() * 1200}
                cy={Math.random() * 800}
                r={Math.random() * 3 + 1}
                fill="rgba(251, 191, 36, 0.4)"
                className="animate-pulse"
                style={{ animationDelay: `${Math.random() * 3}s` }}
              />
            ))}
          </g>
          {/* Neural network connections - more structured */}
          <g className="opacity-30">
            {Array.from({ length: 50 }).map((_, i) => (
              <line
                key={i}
                x1={Math.random() * 1200}
                y1={Math.random() * 800}
                x2={Math.random() * 1200}
                y2={Math.random() * 800}
                stroke="rgba(251, 191, 36, 0.3)"
                strokeWidth="1"
                className="animate-pulse"
                style={{ animationDelay: `${Math.random() * 2}s` }}
              />
            ))}
          </g>
          {/* Brain-like neural clusters */}
          <g className="opacity-20">
            {Array.from({ length: 8 }).map((_, i) => {
              const centerX = 200 + (i * 150);
              const centerY = 200 + Math.sin(i) * 100;
              return (
                <g key={i}>
                  {Array.from({ length: 12 }).map((_, j) => {
                    const angle = (j * 2 * Math.PI) / 12;
                    const radius = 30 + Math.random() * 20;
                    const x = centerX + Math.cos(angle) * radius;
                    const y = centerY + Math.sin(angle) * radius;
                    return (
                      <circle
                        key={j}
                        cx={x}
                        cy={y}
                        r="2"
                        fill="rgba(251, 191, 36, 0.5)"
                        className="animate-pulse"
                        style={{ animationDelay: `${i * 0.5 + j * 0.1}s` }}
                      />
                    );
                  })}
                </g>
              );
            })}
          </g>
        </svg>
      </div>

      {/* Neural network animation overlay */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-full h-full">
          {/* Neural network nodes and connections */}
          {Array.from({ length: 25 }).map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-amber-500/30"
              style={{
                width: `${Math.random() * 6 + 2}px`,
                height: `${Math.random() * 6 + 2}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                boxShadow: '0 0 15px rgba(251, 191, 36, 0.6)',
                animation: `pulse ${Math.random() * 4 + 3}s infinite alternate ease-in-out`
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 flex flex-col justify-center min-h-screen pt-20">
        {/* Main content - better vertical centering */}
        <div className="flex flex-col items-center justify-center flex-1 space-y-8">
          {/* Title section */}
          <div className="animate-fade-in">
            <h1 className="text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500 bg-clip-text text-transparent leading-tight">
              BZIZ IMAD
            </h1>

            <div className="text-lg md:text-xl text-slate-300 mb-6 leading-relaxed">
              {text}<span className="animate-pulse">|</span>
            </div>
          </div>

          {/* Location and school info - moved closer to description */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8">
            <div className="flex items-center text-slate-400">
              <div className="w-2 h-2 bg-emerald-400 rounded-full mr-2 animate-pulse"></div>
              Rabat, Maroc
            </div>
            <div className="hidden md:block w-1 h-1 bg-slate-600 rounded-full"></div>
            <div className="text-slate-400">
              <span className="font-bold">École Mohammadia des Ingénieurs (EMI)</span>
            </div>
          </div>

          {/* Horizontal Reel - Seamless Ribbon */}
          <div className="relative w-full h-14 mb-8 mt-4 ribbon-wrap">
            {/* The Infinite Ribbon */}
            <div className="flex animate-scroll-reel whitespace-nowrap gap-16 items-center h-full">
              {[...roles, ...roles].map((role, index) => (
                <div
                  key={index}
                  className="ticker-item flex items-center gap-3 text-[10px] md:text-[11px] font-bold uppercase tracking-[0.25em] text-amber-400/90 bg-slate-800/60 px-5 py-2 rounded-full border border-amber-500/20 backdrop-blur-md transition-all hover:border-amber-400/50 hover:bg-slate-700/60"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shadow-[0_0_10px_rgba(245,158,11,0.8)] animate-pulse"></span>
                  {role}
                </div>
              ))}
            </div>

            {/* Interior Curve Vignette Masks */}
            <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-slate-900 via-slate-900/40 to-transparent z-10 pointer-events-none"></div>
            <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-slate-900 via-slate-900/40 to-transparent z-10 pointer-events-none"></div>
          </div>

          {/* Call to action button */}
          <div className="flex justify-center items-center gap-6">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-orange-600 rounded-full blur-lg opacity-30"></div>
              <a
                href="#about"
                className="relative bg-gradient-to-r from-amber-600 to-orange-600 px-8 py-4 rounded-full text-white font-semibold hover:scale-105 transition-all duration-300 flex items-center gap-2"
              >
                Explore My Journey
                <ChevronDown size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Resume Bubble - Left Side */}
      <div className="absolute bottom-8 left-8 z-20">
        <a
          href="/assets/docs/cv__imad.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-amber-500/25"
        >
          <FileText className="w-6 h-6 text-white" />
          <div className="absolute left-14 top-1/2 -translate-y-1/2 bg-slate-800 text-white px-3 py-1 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            View Resume
          </div>
        </a>
      </div>

      {/* Social Media Bubbles - Right Side */}
      <div className="absolute bottom-8 right-8 flex flex-col gap-4 z-20">
        <a
          href="https://www.linkedin.com/in/imad-bziz-97aa80285/"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
        >
          <Linkedin className="w-6 h-6 text-white" />
          <div className="absolute right-14 top-1/2 -translate-y-1/2 bg-slate-800 text-white px-3 py-1 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            LinkedIn
          </div>
        </a>

        <a
          href="mailto:imad37.bziz@gmail.com"
          className="group relative w-12 h-12 bg-gradient-to-r from-red-600 to-red-700 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-red-500/25"
        >
          <Mail className="w-6 h-6 text-white" />
          <div className="absolute right-14 top-1/2 -translate-y-1/2 bg-slate-800 text-white px-3 py-1 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            Email Me
          </div>
        </a>

        <a
          href="https://wa.me/+212624957250"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative w-12 h-12 bg-gradient-to-r from-green-600 to-green-700 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-green-500/25"
        >
          <MessageCircle className="w-6 h-6 text-white" />
          <div className="absolute right-14 top-1/2 -translate-y-1/2 bg-slate-800 text-white px-3 py-1 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            WhatsApp
          </div>
        </a>
      </div>
    </section>
  );
};


