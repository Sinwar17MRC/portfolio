
import { useState, useEffect } from 'react';
import { ChevronDown, FileText, Linkedin, Mail, MessageCircle } from 'lucide-react';
import { ParticleField } from './ParticleField';

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
      {/* Consistent Animated Background */}
      <ParticleField />

      {/* Background Gradients */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-600/10 via-orange-600/5 to-slate-900"></div>
      </div>

      {/* Content Container - Stretched Vertically */}
      <div className="relative z-10 w-full max-w-[100vw] flex flex-col items-center justify-between h-full py-28 md:py-30 px-4 text-center">

        <div className="flex flex-col items-center justify-center flex-1 w-full space-y-16 md:space-y-12">
          {/* Name - Larger & Spaced */}
          <div className="space-y-8 w-full">
            <h1 className="text-[2.8rem] sm:text-7xl md:text-9xl font-black bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500 bg-clip-text text-transparent leading-none tracking-tighter uppercase w-full">
              BZIZ IMAD
            </h1>

            {/* Tagline - Better mobile wrapping */}
            <p className="text-sm sm:text-xl md:text-2xl text-slate-300 font-medium max-w-[95%] sm:max-w-5xl mx-auto min-h-[3rem] leading-relaxed">
              {text}<span className="inline-block w-0.5 h-6 md:h-10 bg-amber-400 ml-1 animate-pulse align-middle"></span>
            </p>
          </div>

          {/* Location & School - Premium Spacing */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-10 w-full">
            <div className="bg-slate-800/80 px-6 py-2 rounded-full border border-amber-500/20 text-xs sm:text-base text-slate-400 flex items-center shadow-2xl backdrop-blur-md">
              <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3 animate-pulse"></div>
              Rabat, Maroc
            </div>
            <div className="hidden sm:block w-2 h-2 bg-slate-700 rounded-full"></div>
            <div className="bg-slate-800/80 px-6 py-2 rounded-full border border-amber-500/20 text-xs sm:text-base text-slate-300 font-bold shadow-2xl backdrop-blur-md">
              École Mohammadia des Ingénieurs
            </div>
          </div>

          {/* Ticker - Strictly clipped with more visual weight */}
          <div className="w-full max-w-4xl mx-auto overflow-hidden h-10 sm:h-16 ribbon-wrap">
            <div className="flex animate-scroll-reel whitespace-nowrap items-center h-full gap-12 sm:gap-24">
              {[...roles, ...roles, ...roles].map((role, index) => (
                <div key={index} className="flex items-center gap-4 text-[10px] sm:text-sm font-bold uppercase tracking-[0.3em] text-amber-500/80">
                  <div className="w-2 h-2 rounded-full bg-amber-500 shadow-[0_0_10px_rgba(245,158,11,0.5)]"></div>
                  {role}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Journey Link - Pushed Lower */}
        <div className="pt-20 pb-28 sm:pb-0">
          <a
            href="#about"
            className="group bg-gradient-to-r from-amber-600 to-orange-600 px-6 py-3 sm:px-15 sm:py-4 rounded-full text-[10px] sm:text-lg font-black text-white flex items-center gap-3 hover:scale-105 transition-all shadow-[0_0_40px_rgba(245,158,11,0.2)]"
          >
            EXPLORE MY JOURNEY
            <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 animate-bounce group-hover:text-amber-200" />
          </a>
        </div>
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
