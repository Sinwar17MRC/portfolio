
import { Briefcase, Calendar, MapPin } from 'lucide-react';

export const Experience = () => {
  const experiences = [
    {
      title: "AI Engineer Intern",
      company: "KSoft SARL",
      location: "Casablanca",
      period: "Juillet 2025 – Septembre 2025",
      type: "Internship",
      description: "Conception et développement d’un pipeline NL2SQL complet : Mise en place d’une architecture Graph RAG orchestrée via LangChain. Ingénierie de données et bases vectorielles (ChromaDB) pour l'enrichissement sémantique.",
      skills: ["Graph RAG", "LangChain", "LLMs", "ChromaDB", "Python"],
      status: "previous"
    },
    {
      title: "Stagiaire Data & ML Engineer",
      company: "DRH du Ministère de l’Éducation Nationale (MEN)",
      location: "Rabat",
      period: "Juin 2024 – Juillet 2024",
      type: "Internship",
      description: "Développement d’un module de Machine Learning (XGBoost) pour anticiper les départs des employés. Participation à la migration de bases de données (SQL Server vers Oracle) pour la plateforme MASIRH.",
      skills: ["XGBoost", "Pandas", "Oracle", "SQL Server", "Machine Learning"],
      status: "previous"
    }
  ];

  return (
    <section id="experience" className="relative py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
            Experience
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Mon parcours professionnel et expériences académiques
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative bg-slate-800/30 backdrop-blur-sm rounded-2xl border border-slate-700/30 overflow-hidden group hover:border-amber-400/30 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-amber-600/5 to-orange-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="relative p-8">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <Briefcase className={`w-5 h-5 ${exp.status === 'previous' ? 'text-amber-400' : 'text-orange-400'}`} />
                      <h3 className="text-2xl font-bold text-white">{exp.title}</h3>
                      <span className="px-3 py-1 rounded-full text-xs font-medium bg-emerald-600/20 text-emerald-300 border border-emerald-400/30">
                        {exp.status === 'upcoming' ? 'Upcoming' : 'Completed'}
                      </span>
                    </div>
                    <h4 className="text-xl text-slate-300 mb-2">{exp.company}</h4>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400 mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </div>
                      <span className="px-2 py-1 bg-slate-700/50 rounded text-xs">
                        {exp.type}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-slate-300 leading-relaxed mb-6">
                  {exp.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-gradient-to-r from-slate-700/50 to-slate-600/50 text-slate-300 rounded-full text-sm border border-slate-600/30"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
