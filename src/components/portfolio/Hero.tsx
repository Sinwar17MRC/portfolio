
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
    <section id="home" className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-slate-900">
      {/* Background stays strictly behind */}
      <div className="absolute inset-0 bg-slate-900 pointer-events-none z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-600/10 via-orange-600/5 to-slate-900 opacity-50"></div>
        <svg className="w-full h-full object-cover opacity-10" viewBox="0 0 1200 800" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
          <g className="animate-pulse">
            {Array.from({ length: 30 }).map((_, i) => (
              <circle key={i} cx={Math.random() * 1200} cy={Math.random() * 800} r="1" fill="#fbbf24" />
            ))}
          </g>
        </svg>
      </div>

      {/* Content Container - Centered Stack */}
      <div className="relative z-10 w-full max-w-[100vw] flex flex-col items-center justify-center px-4 text-center">

        {/* Name - Scaled for mobile */}
        <h1 className="text-[2.5rem] sm:text-6xl md:text-8xl font-black mb-4 bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500 bg-clip-text text-transparent leading-none tracking-tighter uppercase w-full">
          BZIZ IMAD
        </h1>

        {/* Tagline - Better mobile wrapping */}
        <p className="text-xs sm:text-lg md:text-xl text-slate-300 font-medium max-w-[85%] sm:max-w-2xl mx-auto mb-8 min-h-[2.5rem] leading-relaxed">
          {text}<span className="inline-block w-0.5 h-4 md:h-6 bg-amber-400 ml-0.5 animate-pulse"></span>
        </p>

        {/* Location & School - Stacked on tiny screens */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 mb-8 w-full">
          <div className="bg-slate-800/80 px-3 py-1 rounded-full border border-amber-500/20 text-[9px] sm:text-sm text-slate-400 flex items-center">
            <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mr-2"></div>
            Rabat, Maroc
          </div>
          <div className="bg-slate-800/80 px-3 py-1 rounded-full border border-amber-500/20 text-[9px] sm:text-sm text-slate-300 font-bold">
            École Mohammadia des Ingénieurs
          </div>
        </div>

        {/* Ticker - Strictly clipped */}
        <div className="w-full max-w-lg mx-auto overflow-hidden h-8 sm:h-12 ribbon-wrap mb-10">
          <div className="flex animate-scroll-reel whitespace-nowrap items-center h-full gap-8 sm:gap-16">
            {[...roles, ...roles].map((role, index) => (
              <div key={index} className="flex items-center gap-2 text-[8px] sm:text-xs font-bold uppercase tracking-widest text-amber-500/80">
                <div className="w-1 h-1 rounded-full bg-amber-500"></div>
                {role}
              </div>
            ))}
          </div>
        </div>

        {/* Journey Link */}
        <a
          href="#about"
          className="bg-gradient-to-r from-amber-600 to-orange-600 px-6 sm:px-10 py-3 sm:py-4 rounded-full text-[10px] sm:text-base font-black text-white flex items-center gap-2 hover:scale-105 transition-all shadow-xl"
        >
          EXPLORE JOURNEY
          <ChevronDown size={16} className="animate-bounce" />
        </a>
      </div>

      {/* Functional Social Icons - Compact for Mobile */}
      <div className="absolute bottom-6 left-4 z-20">
        <a href="/assets/docs/Imad_CV.pdf" target="_blank" className="w-9 h-9 sm:w-12 sm:h-12 bg-amber-600 rounded-full flex items-center justify-center shadow-lg">
          <FileText className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
        </a>
      </div>

      <div className="absolute bottom-6 right-4 flex flex-col gap-3 z-20">
        <a href="https://www.linkedin.com/in/imad-bziz-97aa80285/" target="_blank" className="w-9 h-9 sm:w-12 sm:h-12 bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
          <Linkedin className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
        </a>
        <a href="mailto:imad37.bziz@gmail.com" className="w-9 h-9 sm:w-12 sm:h-12 bg-red-600 rounded-full flex items-center justify-center shadow-lg">
          <Mail className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
        </a>
        <a href="https://wa.me/+212624957250" target="_blank" className="w-9 h-9 sm:w-12 sm:h-12 bg-green-600 rounded-full flex items-center justify-center shadow-lg">
          <MessageCircle className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
        </a>
      </div>
    </section>
  );
};
