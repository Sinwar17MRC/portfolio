
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Briefcase, Target, Rocket, Telescope } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="relative py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-amber-600/10 to-orange-600/10 blur-3xl rounded-3xl"></div>
            <div className="relative bg-slate-800/40 backdrop-blur-sm p-8 rounded-3xl border border-slate-700/30">
              <div className="flex items-center gap-6 mb-6">
                <Avatar className="w-24 h-24 border-2 border-amber-400/30">
                  <AvatarImage src="/assets/images/prof.jpeg" alt="BZIZ Imad" className="object-cover" />
                  <AvatarFallback className="bg-gradient-to-r from-amber-600 to-orange-600 text-white text-xl font-bold">
                    BI
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h2 className="text-4xl font-bold bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                    About Me
                  </h2>
                  <p className="text-slate-400 text-sm mt-1">Ingénieur en fin de formation à l’EMI</p>
                </div>
              </div>

              <div className="space-y-4 text-slate-300 leading-relaxed">
                <p className="text-lg">
                  Ingénieur à l'EMI, je me spécialise à l'intersection de la Business Intelligence, de la Data Engineering et de l'Intelligence Artificielle.
                </p>
                <p>
                  Ma force réside dans ma capacité à transformer des données brutes en insights stratégiques, en maîtrisant toute la chaîne : de la conception de pipelines de données robustes au déploiement d'agents IA avancés et de tableaux de bord décisionnels.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                {['AI Engineering', 'Business Intelligence', 'Data Engineering', 'Machine Learning'].map((trait) => (
                  <span
                    key={trait}
                    className="px-4 py-2 bg-gradient-to-r from-amber-600/20 to-orange-600/20 rounded-full text-sm border border-amber-400/20"
                  >
                    {trait}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-slate-800/30 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/30 transform hover:scale-105 transition-all duration-300 hover:border-amber-500/30 group">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-amber-500/10 rounded-lg group-hover:bg-amber-500/20 transition-colors">
                    <Briefcase className="w-6 h-6 text-amber-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-200">Expériences Terrain</h3>
                </div>
                <p className="text-slate-400 text-sm">
                  2 Stages majeurs en Ingénierie IA et Business Intelligence (KSoft & Ministère de l'Éducation).
                </p>
              </div>

              <div className="bg-slate-800/30 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/30 transform hover:scale-105 transition-all duration-300 hover:border-orange-500/30 group">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-orange-500/10 rounded-lg group-hover:bg-orange-500/20 transition-colors">
                    <Target className="w-6 h-6 text-orange-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-200">Cœur d'Expertise</h3>
                </div>
                <p className="text-slate-400 text-sm">
                  Architecture RAG, Modélisation prédictive (ML), et Analytics Avancé (Power BI/DAX).
                </p>
              </div>

              <div className="bg-slate-800/30 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/30 transform hover:scale-105 transition-all duration-300 hover:border-emerald-500/30 group">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-emerald-500/10 rounded-lg group-hover:bg-emerald-500/20 transition-colors">
                    <Rocket className="w-6 h-6 text-emerald-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-200">Réalisations</h3>
                </div>
                <p className="text-slate-400 text-sm">
                  Développement d'assistants analytiques intelligents et de solutions de diagnostic industriel automatisé.
                </p>
              </div>

              <div className="bg-slate-800/30 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/30 transform hover:scale-105 transition-all duration-300 hover:border-blue-500/30 group">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-blue-500/10 rounded-lg group-hover:bg-blue-500/20 transition-colors">
                    <Telescope className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-200">Aspirations</h3>
                </div>
                <p className="text-slate-400 text-sm">
                  Concevoir des produits data 'End-to-End' alliant rigueur technique et valeur métier concrète.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
