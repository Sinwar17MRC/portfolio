import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { ExternalLink, CheckCircle, Settings } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

export const Projects = () => {
  const [activeConstruction, setActiveConstruction] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Close construction message when clicking elsewhere
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (activeConstruction !== null && containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setActiveConstruction(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [activeConstruction]);

  const projects = [
    {
      title: "FPL Intelligence Hub",
      challenge: "FPL managers lack a centralized, interactive interface to visualize player KPIs and struggle to extract quick insights from complex, multi-layered game statistics.",
      solution: [
        "Designed a paged, web-app style interactive dashboard in Power BI for deep-dive performance analysis.",
        "Engineered custom DAX measures and KPIs to track player value-for-money and fixture difficulty.",
        "Integrated an Intelligent AI Assistant chat directly into the dashboard for natural language data querying.",
        "Published the entire ecosystem to Microsoft Fabric to enable real-time online consultation and insights."
      ],
      tags: ["Power BI", "Microsoft Fabric", "DAX", "AI Integration"],
      status: "Completed",
      color: "from-blue-500/20 to-cyan-500/20",
      borderColor: "group-hover:border-cyan-400/50"
    },
    {
      title: "Cognitive Industrial Operator",
      challenge: "Industrial downtime is extremely costly, and human diagnostic time (MTTR) is often delayed by the complexity of sensor logs and technical manuals.",
      solution: [
        "Implementing a 'Reasoning + Acting' (ReAct) AI agent to simulate a senior diagnostic expert.",
        "Autonomous analysis of sensor logs cross-referenced with technical documentation for root-cause identification.",
        "Drastically reduced MTTR by providing engineers with instant, actionable repair steps."
      ],
      tags: ["ReAct Agent", "Industrial AI", "RAG", "Python"],
      status: "In Progress",
      color: "from-purple-500/20 to-pink-500/20",
      borderColor: "group-hover:border-purple-400/50"
    },
    {
      title: "Precision Diamond Valuation Model",
      challenge: "Manual diamond appraisal is subjective and inconsistent, creating a need for an objective, data-driven method to predict market prices based on the 4Cs (Carat, Cut, Color, Clarity).",
      solution: [
        "Performed rigorous data cleaning and feature engineering on diamond datasets using Pandas and Scikit-learn.",
        "Developed and optimized high-performance regression models (XGBoost, Random Forest) to achieve high valuation accuracy.",
        "Wrapped the model in a RESTful Flask API to provide instant price predictions.",
        "Deployed the solution on Google Cloud Platform (GCP) for scalable, real-time access."
      ],
      tags: ["XGBoost", "Flask", "GCP", "Regression"],
      status: "Deployed",
      color: "from-emerald-500/20 to-green-500/20",
      borderColor: "group-hover:border-emerald-400/50"
    },
    {
      title: "AFCON 2025 Strategic ROI Command Center",
      challenge: "The Organizing Committee (COCAN) and 19 official sponsors lack real-time visibility into the media impact of $126M in investments. Fragmented data across 52 matches and 8 global broadcasters makes it impossible to quantify actual ROI per activation during the live tournament.",
      solution: [
        "Automated Data Ingestion: Engineered a robust ETL pipeline using Python web scraping and Azure Automation.",
        "Scalable Cloud Architecture: Architected a high-performance 'Star Schema' on Azure SQL Database.",
        "Augmented BI & Prediction: Developed a predictive 'Match Attractiveness Score' integrating team 'Star Power'.",
        "Live Decision Cockpit: Launched a DirectQuery-powered Power BI dashboard for real-time ROI tracking."
      ],
      tags: ["Python", "Azure SQL", "Power BI", "Data Engineering"],
      status: "Deployed",
      color: "from-amber-500/20 to-orange-500/20",
      borderColor: "group-hover:border-orange-400/50"
    },
    {
      title: "CHAQS: Adaptive LLM Decoding",
      challenge: "Educational Q&A systems powered by LLMs often suffer from erratic response variability and repetitive content because they rely on static decoding parameters. Fixed values for Temperature and Top-p fail to adapt to the diverse complexity of pedagogical inquiries.",
      solution: [
        "Dynamic Inference Control: Developed CHAQS, an inference-time regulation architecture that dynamically pilots LLM behavior.",
        "Chaotic Signal Processing: Implemented a Lee Chaotic Oscillator to transform input signals into non-linear signatures.",
        "Fuzzy Logic Integration: Coupled a Fuzzy Inference System to map chaotic signatures to optimal decoding configurations.",
        "Performance Optimization: Achieved a +54% relative gain in BLEU scores compared to static baselines."
      ],
      tags: ["NLP", "BERT", "Fuzzy Logic", "Chaos Theory"],
      status: "Completed",
      color: "from-indigo-500/20 to-violet-500/20",
      borderColor: "group-hover:border-violet-400/50"
    },
    {
      title: "Spectral Pool Detection & Mapping Engine",
      challenge: "Detecting aquatic structures in high-resolution aerial imagery is often compromised by spectral similarities to gray rooftops, dense shadow occlusion, and tree canopy obstructions that truncate object boundaries.",
      solution: [
        "Engineered a lightweight computer vision pipeline using OpenCV to perform precise pool segmentation.",
        "Implemented dual-band HSV spectral masking and elliptical morphological filtering.",
        "Developed an automated reporting utility that ranks detections by pixel area and exports coordinates."
      ],
      tags: ["Python", "OpenCV", "NumPy", "Computer Vision"],
      status: "Completed",
      color: "from-cyan-500/20 to-teal-500/20",
      borderColor: "group-hover:border-teal-400/50"
    }
  ];

  return (
    <section id="projects" className="relative py-24 px-4 bg-slate-900/50">
      <div className="max-w-[90rem] mx-auto">
        <div className="text-center mb-16 relative">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A showcase of technical challenges solved with AI and Data Engineering.
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
            dragFree: true,
          }}
          className="w-full max-w-7xl mx-auto relative"
        >
          <CarouselContent className="-ml-2 md:-ml-4 pb-12">
            {projects.map((project, index) => (
              <CarouselItem key={index} className={`pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3 transition-[z-index] duration-300 ${activeConstruction === index ? 'z-50 relative' : 'z-0'}`}>
                <div className="p-1 h-full" ref={activeConstruction === index ? containerRef : null}>
                  <div className={`group relative h-full bg-slate-800/40 backdrop-blur-md rounded-2xl border border-slate-700/50 transition-all duration-300 ${project.borderColor}`}>

                    {/* Glow Effect */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl`}></div>

                    {/* Content */}
                    <div className="relative p-6 flex flex-col h-full z-10">
                      <div className="flex justify-between items-start mb-4">
                        <span className={`text-xs font-bold px-3 py-1 rounded-full bg-slate-700/50 border border-slate-600 ${project.status === 'Completed' ? 'text-green-400' :
                          project.status === 'In Progress' ? 'text-amber-400' : 'text-blue-400'
                          }`}>
                          {project.status}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-white mb-4 leading-tight min-h-[56px] flex items-center shadow-black drop-shadow-md">
                        {project.title}
                      </h3>

                      <div className="mb-4">
                        <span className="inline-block px-3 py-1 mb-2 text-xs font-bold text-red-300 bg-red-900/30 rounded-full border border-red-500/30">
                          The Challenge
                        </span>
                        <p className="text-slate-300 text-sm leading-snug line-clamp-3">
                          {project.challenge}
                        </p>
                      </div>

                      <div className="flex-1 mb-6">
                        <span className="inline-block px-3 py-1 mb-2 text-xs font-bold text-emerald-300 bg-emerald-900/30 rounded-full border border-emerald-500/30">
                          The Solution
                        </span>
                        <ul className="space-y-2">
                          {project.solution.slice(0, 3).map((point, i) => (
                            <li key={i} className="flex items-start gap-2 text-xs text-slate-300">
                              <CheckCircle className="w-3 h-3 text-emerald-500 mt-0.5 shrink-0" />
                              <span className="line-clamp-2">{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mt-auto pt-4 border-t border-slate-700/50">
                        <div className="flex flex-wrap gap-1.5 mb-4 max-h-[60px] overflow-hidden">
                          {project.tags.map((tag, i) => (
                            <span key={i} className="text-[10px] text-slate-300 bg-slate-700/30 px-2 py-0.5 rounded border border-slate-600/30">
                              {tag}
                            </span>
                          ))}
                        </div>

                        <div className="relative">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setActiveConstruction(activeConstruction === index ? null : index);
                            }}
                            className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-slate-700/50 hover:bg-slate-700 rounded-xl text-sm font-medium text-white transition-all group-hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]"
                          >
                            <span>Explore Solution</span>
                            <ExternalLink size={16} />
                          </button>

                          {/* Construction Message */}
                          {activeConstruction === index && (
                            <div className="absolute top-full left-0 right-0 mt-3 z-50 animate-in fade-in slide-in-from-top-2 duration-300">
                              <div className="bg-gradient-to-r from-amber-500/10 to-orange-500/10 backdrop-blur-md border border-amber-400/30 rounded-xl p-4 shadow-lg">
                                <div className="flex items-center gap-3">
                                  <Settings className="w-5 h-5 text-amber-400 animate-spin" style={{ animationDuration: '3s' }} />
                                  <div>
                                    <p className="text-sm font-semibold text-amber-300">Page is still under construction</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-12 bg-slate-800/50 border-slate-700 text-white hover:bg-slate-700 hover:text-blue-400 transition-all duration-300" />
          <CarouselNext className="hidden md:flex -right-12 bg-slate-800/50 border-slate-700 text-white hover:bg-slate-700 hover:text-blue-400 transition-all duration-300" />
        </Carousel>

        {/* Compact Functional Scrollbar & Legend */}
        <div className="mt-4 flex flex-col items-center gap-4">
          {/* Legend / Hint Animation */}
          <div className="flex items-center justify-center gap-3 text-slate-400 text-sm">
            <div className="flex gap-1">
              <div className="w-1 h-1 rounded-full bg-blue-500 animate-pulse"></div>
              <div className="w-1 h-1 rounded-full bg-blue-500 animate-pulse" style={{ animationDelay: '0.2s' }}></div>
              <div className="w-1 h-1 rounded-full bg-blue-500 animate-pulse" style={{ animationDelay: '0.4s' }}></div>
            </div>
            <span className="font-bold uppercase tracking-[0.2em] text-[9px] text-slate-500">
              Interactive navigation
            </span>
            <div className="flex gap-1">
              <div className="w-1 h-1 rounded-full bg-blue-500 animate-pulse" style={{ animationDelay: '0.6s' }}></div>
              <div className="w-1 h-1 rounded-full bg-blue-500 animate-pulse" style={{ animationDelay: '0.8s' }}></div>
              <div className="w-1 h-1 rounded-full bg-blue-500 animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>

          {/* Functional Scroll Progress Bar */}
          <div className="w-full max-w-xs px-4">
            <div className="h-0.5 w-full bg-slate-800/50 rounded-full relative overflow-hidden">
              <div
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-500 via-purple-500 to-amber-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.5)]"
                style={{
                  width: '30%',
                  animation: 'scrollProgress 8s ease-in-out infinite'
                }}
              />
            </div>
          </div>
        </div>

        <style dangerouslySetInnerHTML={{
          __html: `
          @keyframes scrollProgress {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(330%); }
          }
          #projects .embla__viewport {
            overflow-x: auto !important;
            scrollbar-width: thin;
            scrollbar-color: rgba(59, 130, 246, 0.5) transparent;
          }
          #projects .embla__viewport::-webkit-scrollbar {
            height: 4px;
            display: block !important;
          }
          #projects .embla__viewport::-webkit-scrollbar-track {
            background: rgba(15, 23, 42, 0.2);
            border-radius: 10px;
            margin: 0 40px;
          }
          #projects .embla__viewport::-webkit-scrollbar-thumb {
            background: linear-gradient(to right, #3b82f644, #8b5cf644);
            border-radius: 10px;
          }
          #projects .embla__viewport::-webkit-scrollbar-thumb:hover {
            background: linear-gradient(to right, #3b82f6aa, #8b5cf6aa);
          }
        `}} />
      </div>
    </section>
  );
};

