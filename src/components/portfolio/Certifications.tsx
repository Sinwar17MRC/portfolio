
import { Award, ExternalLink, Calendar } from 'lucide-react';

export const Certifications = () => {
  const certifications = [
    {
      title: "Oracle Cloud Infrastructure (OCI) AI Foundations Associate",
      issuer: "Oracle",
      date: "2025",
      status: "Completed",
      description: "Certification in AI foundations on OCI cloud infrastructure.",
      skills: ["AI Foundations", "Oracle Cloud", "Machine Learning", "Cloud Computing"]
    },
    {
      title: "IBM Data Engineering Professional Certificate",
      issuer: "IBM",
      date: "En cours",
      status: "In Progress",
      description: "Professional certification covering the complete data engineering lifecycle.",
      skills: ["Data Engineering", "ETL", "Big Data", "Databases", "Python", "SQL"]
    }
  ];

  return (
    <section id="certifications" className="relative py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
            Certifications
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Certifications professionnelles en IA et Data Engineering
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="relative bg-slate-800/30 backdrop-blur-sm rounded-2xl border border-slate-700/30 p-6 group hover:border-amber-400/30 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-amber-600/5 to-orange-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="relative">
                <div className="flex items-start justify-between mb-4">
                  <Award className={`w-8 h-8 ${cert.status === 'Completed' ? 'text-emerald-400' : 'text-amber-400'}`} />
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${cert.status === 'Completed'
                      ? 'bg-emerald-600/20 text-emerald-300 border border-emerald-400/30'
                      : 'bg-amber-600/20 text-amber-300 border border-amber-400/30'
                    }`}>
                    {cert.status}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2">{cert.title}</h3>
                <p className="text-amber-300 font-medium mb-2">{cert.issuer}</p>

                <div className="flex items-center gap-2 text-sm text-slate-400 mb-4">
                  <Calendar className="w-4 h-4" />
                  {cert.date}
                </div>

                <p className="text-slate-300 text-sm leading-relaxed mb-4">
                  {cert.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-2 py-1 bg-slate-700/50 text-slate-300 rounded text-xs border border-slate-600/30"
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
