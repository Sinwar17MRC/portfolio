
const academicMilestones = [
  {
    year: "Sept 2023 – Juin 2026",
    title: "Ingénierie : Modélisation et Informatique Scientifique",
    institution: "École Mohammadia des Ingénieurs (EMI)",
    description: "Formation d'ingénieur d'état avec spécialisation en Data Science et Intelligence Artificielle.",
    highlight: true,
    skills: ["Data Science", "Machine Learning", "Scientific Computing", "Mathematics"]
  }
];

const keyCoursework = [
  { name: "Machine Learning Algorithms", progress: 90 },
  { name: "Deep Neural Networks", progress: 85 },
  { name: "Optimization Theory", progress: 88 },
  { name: "Statistical Analysis", progress: 92 },
  { name: "Database Management", progress: 95 },
  { name: "Software Engineering", progress: 90 }
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
                    <div className="ml-16 bg-slate-800/30 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-6 hover:transform hover:scale-105 transition-all duration-300">
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

          {/* Key Coursework */}
          <div className="lg:col-span-1">
            <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-6 sticky top-24">
              <h3 className="text-2xl font-bold text-white mb-6">Matières Clés</h3>

              <div className="space-y-4">
                {keyCoursework.map((course) => (
                  <div key={course.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300 font-medium text-sm">
                        {course.name}
                      </span>
                      <span className="text-blue-400 font-semibold text-sm">
                        {course.progress}%
                      </span>
                    </div>

                    <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-blue-400 to-purple-400 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${course.progress}%` }}
                      >
                        <div className="h-full bg-white/20 animate-pulse"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Current Status */}
              <div className="mt-8 p-4 bg-gradient-to-r from-green-600/10 to-emerald-600/10 rounded-xl border border-green-400/20">
                <h4 className="text-lg font-semibold text-green-400 mb-2">Statut Actuel</h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Fin de 2ème année - Spécialisation en Data Science & IA.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
