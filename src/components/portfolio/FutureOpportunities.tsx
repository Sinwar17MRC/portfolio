
import { Rocket, Target, Users, Mail, ArrowRight } from 'lucide-react';

export const FutureOpportunities = () => {
  const nextSteps = [
    {
      title: "Final Year Project (PFE)",
      timeline: "2025-2026",
      focus: "AI & Machine Learning Research",
      description: "Seeking challenging final year project opportunities in artificial intelligence, focusing on practical applications of ML algorithms in real-world scenarios.",
      interests: ["Computer Vision", "Natural Language Processing", "Optimization Algorithms", "Data Mining"]
    }
  ];

  const collaborationAreas = [
    {
      icon: Target,
      title: "Research Collaboration",
      description: "Interested in collaborative research projects in AI, machine learning, and mathematical modeling"
    },
    {
      icon: Users,
      title: "Industry Partnership",
      description: "Open to industry partnerships for final year project and future career opportunities"
    },
    {
      icon: Rocket,
      title: "Innovation Projects",
      description: "Passionate about innovative projects that combine theoretical knowledge with practical applications"
    }
  ];

  return (
    <section id="opportunities" className="relative py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
            Future Opportunities
          </h2>
          <p className="text-slate-400 text-lg max-w-3xl mx-auto">
            Looking ahead: My next academic milestones and professional aspirations. 
            Let's build something intelligent together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Next Steps */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <Rocket className="w-6 h-6 text-amber-400" />
              Next Academic Milestone
            </h3>
            
            {nextSteps.map((step, index) => (
              <div
                key={index}
                className="relative bg-slate-800/30 backdrop-blur-sm rounded-2xl border border-slate-700/30 p-8 group hover:border-amber-400/30 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-amber-600/5 to-orange-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-xl font-bold text-white">{step.title}</h4>
                    <span className="px-3 py-1 bg-amber-600/20 text-amber-300 rounded-full text-sm border border-amber-400/30">
                      {step.timeline}
                    </span>
                  </div>
                  
                  <p className="text-amber-300 font-medium mb-3">{step.focus}</p>
                  <p className="text-slate-300 leading-relaxed mb-6">{step.description}</p>
                  
                  <div className="space-y-3">
                    <h5 className="text-sm font-semibold text-slate-400 uppercase tracking-wider">Areas of Interest:</h5>
                    <div className="flex flex-wrap gap-2">
                      {step.interests.map((interest, interestIndex) => (
                        <span
                          key={interestIndex}
                          className="px-3 py-1 bg-gradient-to-r from-slate-700/50 to-slate-600/50 text-slate-300 rounded-full text-sm border border-slate-600/30"
                        >
                          {interest}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Collaboration Areas */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <Users className="w-6 h-6 text-orange-400" />
              Collaboration Opportunities
            </h3>
            
            <div className="space-y-6">
              {collaborationAreas.map((area, index) => (
                <div
                  key={index}
                  className="bg-slate-800/30 backdrop-blur-sm rounded-xl border border-slate-700/30 p-6 hover:border-orange-400/30 transition-all duration-300 group"
                >
                  <div className="flex items-start gap-4">
                    <area.icon className="w-6 h-6 text-orange-400 mt-1" />
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">{area.title}</h4>
                      <p className="text-slate-300 text-sm leading-relaxed">{area.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-sm rounded-3xl border border-slate-600/30 p-12">
          <h3 className="text-3xl font-bold text-white mb-4">Ready to Collaborate?</h3>
          <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
            I'm actively seeking opportunities for my final year project (PFE) and future collaborations. 
            Let's discuss how we can create something innovative together.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#contact"
              className="group bg-gradient-to-r from-amber-600 to-orange-600 px-8 py-4 rounded-xl text-white font-semibold hover:scale-105 transition-all duration-300 flex items-center gap-2"
            >
              <Mail className="w-5 h-5" />
              Contact Me
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
            
            <div className="text-slate-400 text-sm">
              Available for PFE projects starting 2025
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
