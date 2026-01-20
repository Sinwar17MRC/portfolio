
import { useState } from 'react';
import {
  Brain,
  Database,
  Settings,
  Layout,
  Code2,
  Cpu,
  BarChart3,
  Layers,
  Terminal,
  Zap
} from 'lucide-react';

const skillCategories = [
  {
    name: "AI & Machine Learning",
    icon: Brain,
    color: "from-blue-400 to-indigo-600",
    skills: [
      "Python", "Scikit-learn", "XGBoost", "PyTorch", "TensorFlow",
      "Computer Vision", "NLP", "Time Series (ARIMA, GARCH)",
      "RStudio", "Deep Learning"
    ]
  },
  {
    name: "Generative AI & LLMs",
    icon: Cpu,
    color: "from-purple-400 to-pink-600",
    skills: [
      "LLMs (GPT-4, Gemini)", "RAG & Graph RAG", "LangChain",
      "Transformer Architecture", "Encoder-Decoder", "Vector DBs",
      "Pinecone", "Fine-tuning", "Semantic Search"
    ]
  },
  {
    name: "Data Engineering & BI",
    icon: Database,
    color: "from-amber-400 to-orange-600",
    skills: [
      "SQL Server", "Azure SQL", "ETL Pipelines", "Airflow",
      "Power BI (DAX)", "Tableau", "DBeaver", "Data Modeling",
      "BigQuery"
    ]
  },
  {
    name: "Tools, Web & MLOps",
    icon: Settings,
    color: "from-emerald-400 to-teal-600",
    skills: [
      "Git / GitHub", "Docker", "GCP", "FastAPI", "Flask",
      "Streamlit", "MLflow", "Linux (Bash)", "CI/CD", "React (Basic)"
    ]
  }
];

export const Skills = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section id="skills" className="relative py-24 px-4 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-[90rem] mx-auto relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-black mb-6 tracking-tight">
            Technical <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent">Arsenal</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed font-medium">
            A curated ecosystem of technologies I leverage to transform raw data into
            <span className="text-blue-400"> scalable intelligence</span>.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Category Tabs */}
          <div className="lg:col-span-1 space-y-4">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              const isActive = activeCategory === index;

              return (
                <button
                  key={category.name}
                  onClick={() => setActiveCategory(index)}
                  className={`group relative w-full flex items-center gap-4 p-5 rounded-2xl transition-all duration-500 border overflow-hidden ${isActive
                    ? 'bg-slate-800/80 border-blue-500/50 shadow-[0_0_30px_rgba(59,130,246,0.15)]'
                    : 'bg-slate-900/40 border-slate-800 hover:border-slate-700 text-slate-400'
                    }`}
                >
                  {/* Active Indicator Glow */}
                  {isActive && (
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5 animate-pulse"></div>
                  )}

                  <div className={`p-3 rounded-xl transition-all duration-500 ${isActive ? `bg-gradient-to-br ${category.color} text-white scale-110` : 'bg-slate-800 text-slate-500 group-hover:text-slate-300'
                    }`}>
                    <Icon size={22} strokeWidth={isActive ? 2.5 : 2} />
                  </div>

                  <div className="text-left">
                    <h3 className={`font-bold transition-colors duration-300 ${isActive ? 'text-white' : 'group-hover:text-slate-200'}`}>
                      {category.name}
                    </h3>
                    <p className="text-[10px] uppercase tracking-widest font-bold opacity-50 mt-1">
                      {category.skills.length} specialized skills
                    </p>
                  </div>

                  {isActive && (
                    <div className="ml-auto">
                      <Zap size={14} className="text-blue-400 animate-pulse fill-blue-400" />
                    </div>
                  )}
                </button>
              );
            })}
          </div>

          {/* Skills Grid */}
          <div className="lg:col-span-3">
            <div className="relative bg-slate-800/20 backdrop-blur-xl rounded-[2.5rem] border border-slate-700/50 p-10 min-h-[500px] flex flex-col items-center justify-center">
              {/* Dynamic Background Pattern */}
              <div className="absolute inset-0 overflow-hidden rounded-[2.5rem] opacity-20 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.1),transparent_40%)]"></div>
              </div>

              <div className="relative z-10 w-full max-w-5xl">
                <div className="flex items-center gap-4 mb-12">
                  <div className={`h-10 w-1 bg-gradient-to-b ${skillCategories[activeCategory].color} rounded-full`}></div>
                  <div>
                    <h4 className="text-3xl font-black text-white">
                      {skillCategories[activeCategory].name}
                    </h4>
                    <p className="text-slate-500 text-sm mt-1 uppercase tracking-[0.2em] font-bold">
                      Technical Specializations
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-3 gap-5">
                  {skillCategories[activeCategory].skills.map((skill, index) => (
                    <div
                      key={skill}
                      className="group/skill relative animate-fade-in"
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      <div className="relative py-4 px-6 rounded-2xl bg-slate-900/60 border border-slate-800/50 transition-all duration-300 group-hover/skill:border-blue-500/30 group-hover/skill:bg-slate-900 group-hover/skill:-translate-y-1">
                        {/* Hover Glow */}
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-600/0 to-purple-600/0 group-hover/skill:from-blue-600/5 group-hover/skill:to-purple-600/5 transition-all duration-500"></div>

                        <div className="flex items-center gap-3">
                          <Terminal size={14} className={`transition-colors duration-300 ${activeCategory === 0 ? 'text-blue-400' : activeCategory === 1 ? 'text-purple-400' : activeCategory === 2 ? 'text-amber-400' : 'text-emerald-400'}`} />
                          <span className="text-slate-300 font-bold tracking-wide transition-colors duration-300 group-hover/skill:text-white">
                            {skill}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Hint */}
              <div className="mt-16 pt-8 border-t border-slate-700/30 w-full max-w-5xl flex justify-between items-center text-slate-500 text-xs font-bold uppercase tracking-widest">
                <div className="flex items-center gap-2">
                  <Layers size={14} />
                  Continuous Learning Ecosystem
                </div>
                <div className="flex items-center gap-2">
                  <BarChart3 size={14} />
                  Advanced Architecture
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
