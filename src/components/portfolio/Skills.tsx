
import { useState, useEffect } from 'react';

const skillCategories = [
  {
    name: "Data Science & ML",
    skills: [
      { name: "Python", level: 95, color: "from-yellow-400 to-yellow-600" },
      { name: "XGBoost", level: 90, color: "from-blue-400 to-blue-600" },
      { name: "Scikit-learn", level: 90, color: "from-orange-400 to-orange-600" },
      { name: "Pandas/NumPy", level: 95, color: "from-purple-400 to-purple-600" },
      { name: "NLP", level: 85, color: "from-green-400 to-green-600" }
    ]
  },
  {
    name: "Generative AI",
    skills: [
      { name: "LLMs", level: 90, color: "from-purple-400 to-pink-600" },
      { name: "RAG & Graph RAG", level: 88, color: "from-blue-400 to-indigo-600" },
      { name: "LangChain", level: 90, color: "from-green-400 to-emerald-600" },
      { name: "Prompt Engineering", level: 92, color: "from-yellow-400 to-orange-600" },
      { name: "Vector DBs", level: 85, color: "from-red-400 to-red-600" }
    ]
  },
  {
    name: "DevOps & MLOps",
    skills: [
      { name: "Docker", level: 85, color: "from-blue-400 to-cyan-600" },
      { name: "GCP", level: 80, color: "from-yellow-400 to-yellow-600" },
      { name: "FastAPI / Flask", level: 90, color: "from-green-400 to-emerald-600" },
      { name: "Git / GitHub", level: 92, color: "from-gray-400 to-gray-600" },
      { name: "Streamlit", level: 88, color: "from-red-400 to-orange-600" }
    ]
  },
  {
    name: "Databases & BI",
    skills: [
      { name: "SQL (Server/MySQL)", level: 88, color: "from-blue-400 to-blue-600" },
      { name: "ChromaDB", level: 85, color: "from-purple-400 to-purple-600" },
      { name: "Redis", level: 80, color: "from-red-400 to-red-600" },
      { name: "Power BI (DAX)", level: 85, color: "from-yellow-400 to-orange-600" },
      { name: "Data Modeling", level: 85, color: "from-indigo-400 to-indigo-600" }
    ]
  }
];

export const Skills = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [animatedLevels, setAnimatedLevels] = useState<number[]>([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedLevels(skillCategories[activeCategory].skills.map(skill => skill.level));
    }, 300);

    return () => clearTimeout(timer);
  }, [activeCategory]);

  return (
    <section id="skills" className="relative py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Technical Arsenal
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A comprehensive set of tools and technologies I use to build intelligent systems.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Category Selector */}
          <div className="lg:col-span-1">
            <div className="space-y-3">
              {skillCategories.map((category, index) => (
                <button
                  key={category.name}
                  onClick={() => setActiveCategory(index)}
                  className={`w-full text-left p-4 rounded-2xl transition-all duration-300 ${activeCategory === index
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                      : 'bg-slate-800/30 text-gray-300 hover:bg-slate-700/50'
                    }`}
                >
                  <h3 className="font-semibold text-lg">{category.name}</h3>
                  <p className="text-sm opacity-75 mt-1">
                    {category.skills.length} skills
                  </p>
                </button>
              ))}
            </div>
          </div>

          {/* Skills Display */}
          <div className="lg:col-span-2">
            <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-8">
              <h3 className="text-2xl font-bold mb-8 text-white">
                {skillCategories[activeCategory].name}
              </h3>

              <div className="space-y-6">
                {skillCategories[activeCategory].skills.map((skill, index) => (
                  <div key={skill.name} className="group">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-blue-400 font-semibold">{skill.level}%</span>
                    </div>

                    <div className="relative h-3 bg-slate-700 rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                        style={{
                          width: `${animatedLevels[index] || 0}%`,
                          transitionDelay: `${index * 0.1}s`
                        }}
                      >
                        <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
