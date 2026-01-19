
import { useEffect, useState } from 'react';
import { ChevronDown, Linkedin, Github, MessageCircle } from 'lucide-react';

export const Hero = () => {
  const [text, setText] = useState('');
  const fullText = "Ingénieur en fin de formation à l’EMI | Python & IA Générative";

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
    "Backend Developer",
    "MLOps Engineer",
    "Generative AI Specialist"
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

          {/* 3D Rotating Text Animation - repositioned and resized */}
          <div className="relative h-14 mb-12 perspective-1000">
            <div className="rotating-text-container">
              {roles.map((role, index) => {
                const totalItems = roles.length;
                const angle = (index * 360) / totalItems;

                return (
                  <div
                    key={index}
                    className="rotating-text-item text-xs md:text-sm"
                    style={{
                      '--rotation': `${angle}deg`,
                      animationDelay: `${index * -8}s`
                    } as React.CSSProperties}
                  >
                    {role}
                  </div>
                );
              })}
            </div>
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

      {/* Social Media Bubbles */}
      <div className="absolute bottom-8 right-8 flex flex-col gap-4 z-20">
        <a
          href="https://linkedin.com/in/bziz-imad"
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
          href="https://github.com/bziz-imad"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative w-12 h-12 bg-gradient-to-r from-slate-700 to-slate-800 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-slate-500/25"
        >
          <Github className="w-6 h-6 text-white" />
          <div className="absolute right-14 top-1/2 -translate-y-1/2 bg-slate-800 text-white px-3 py-1 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            GitHub
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
