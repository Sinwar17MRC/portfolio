const academicMilestones = [
  {
    year: "Sept 2023 – Juin 2026",
    title: "Ingénierie : Modélisation et Informatique Scientifique",
    institution: "École Mohammadia des Ingénieurs (EMI)",
    description: "Formation d'ingénieur d'état avec spécialisation en Data Science et Intelligence Artificielle.",
    highlight: true,
    skills: ["Data Science", "Machine Learning", "Intelligence Artificielle", "Calcul Scientifique"]
  },
  {
    year: "Sept 2021 – Juin 2023",
    title: "Classes Préparatoires (MPSI/MP)",
    institution: "Centre Omar Ibn Al Khattab, Casablanca",
    description: "CPGE aux grandes écoles d'ingénieurs, filière Mathématiques et Physique.",
    highlight: false,
    skills: ["Mathématiques", "Physique", "Informatique", "Sciences de l'Ingénieur"]
  }
];

const keyCoursework = [
  { name: "Machine Learning Algorithms", subgroup: "Intelligence Artificielle" },
  { name: "Deep Neural Networks", subgroup: "Intelligence Artificielle" },
  { name: "Optimization Theory", subgroup: "Mathématiques" },
  { name: "Statistical Analysis", subgroup: "Mathématiques" },
  { name: "Database Management", subgroup: "Informatique" },
  { name: "Software Engineering", subgroup: "Informatique" }
];

export const Academic = () => {
  return (
    <section id="academic" className="relative py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Parcours Académique
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Une formation d'excellence en ingénierie et mathématiques appliquées.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Timeline */}
          <div className="lg:col-span-2">
            <div className="relative">
              {/* Vertical Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 to-purple-400"></div>

              <div className="space-y-8">
                {academicMilestones.map((milestone, index) => (
                  <div key={index} className="relative flex items-start">
                    {/* Timeline Dot */}
                    <div className={`absolute left-6 w-4 h-4 rounded-full border-2 ${milestone.highlight
                      ? 'bg-gradient-to-r from-blue-400 to-purple-400 border-white'
                      : 'bg-slate-800 border-gray-400'
                      }`}></div>

                    {/* Content */}
                    <div className="ml-16 bg-slate-800/30 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-6 hover:transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-blue-500/10">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                        <h3 className={`text-xl font-bold ${milestone.highlight ? 'text-blue-400' : 'text-white'
                          }`}>
                          {milestone.title}
                        </h3>
                        <span className="text-purple-400 font-medium text-sm">
                          {milestone.year}
                        </span>
                      </div>

                      <h4 className="text-gray-300 font-medium mb-3">
                        {milestone.institution}
                      </h4>

                      <p className="text-gray-400 mb-4 leading-relaxed">
                        {milestone.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {milestone.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-3 py-1 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full text-sm text-blue-300 border border-blue-400/30"
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
          </div>

          {/* Key Coursework - Redesigned without Progress Bars */}
          <div className="lg:col-span-1">
            <div className="bg-slate-800/20 backdrop-blur-md rounded-[2rem] border border-slate-700/40 p-8 sticky top-24">
              <h3 className="text-2xl font-black text-white mb-8 flex items-center gap-3">
                <div className="w-2 h-8 bg-blue-500 rounded-full"></div>
                Matières Clés
              </h3>

              <div className="grid gap-4">
                {keyCoursework.map((course) => (
                  <div
                    key={course.name}
                    className="group relative p-4 rounded-xl bg-slate-900/40 border border-slate-700/30 hover:border-blue-500/30 hover:bg-slate-900/60 transition-all duration-300"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-slate-200 font-bold group-hover:text-blue-300 transition-colors">
                        {course.name}
                      </span>
                    </div>
                    <div className="text-[10px] text-slate-500 uppercase tracking-widest font-black">
                      {course.subgroup}
                    </div>
                  </div>
                ))}
              </div>

              {/* Current Status */}
              <div className="mt-10 p-5 bg-gradient-to-br from-blue-600/10 to-indigo-600/10 rounded-2xl border border-blue-400/20 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
                <h4 className="text-lg font-bold text-blue-400 mb-2 relative z-10">Statut Actuel</h4>
                <p className="text-gray-300 text-sm leading-relaxed relative z-10">
                  <span className="font-bold text-white">3ème année d'ingénierie</span>. Spécialisation <span className="text-blue-300">AI & Business Intelligence</span>. Recherche active de stage PFE (Février 2026).
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
