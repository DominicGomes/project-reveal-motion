
import React from 'react';
import { Code, Database, Cloud, Smartphone, Shield, Zap } from 'lucide-react';

interface ProjectTechProps {
  technologies: string[];
}

const ProjectTech: React.FC<ProjectTechProps> = ({ technologies }) => {
  const techCategories = [
    { name: "Frontend", icon: Code, techs: ["React", "TypeScript", "Redux"] },
    { name: "Backend", icon: Database, techs: ["Node.js", "MongoDB"] },
    { name: "Services", icon: Cloud, techs: ["AWS", "Docker"] },
    { name: "Payment", icon: Shield, techs: ["Stripe"] }
  ];

  return (
    <section data-aos="fade-up" className="relative">
      <h2 className="text-4xl font-bold text-center text-white mb-16">
        Technologies Used
      </h2>
      
      {/* Technology categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        {techCategories.map((category, index) => (
          <div
            key={index}
            data-aos="flip-up"
            data-aos-delay={index * 100}
            className="group relative"
          >
            <div className="p-6 bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-500 hover:scale-105">
              <div className="text-center">
                <div className="inline-flex p-4 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-4">
                  {category.name}
                </h3>
                
                <div className="space-y-2">
                  {category.techs.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="inline-block px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm font-medium mr-2 mb-2"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* All technologies floating animation */}
      <div data-aos="fade-up" data-aos-delay="400" className="text-center">
        <h3 className="text-2xl font-semibold text-white mb-8">Full Technology Stack</h3>
        <div className="flex flex-wrap justify-center gap-4">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="group px-6 py-3 bg-gradient-to-r from-purple-500/20 to-blue-500/20 backdrop-blur-sm border border-purple-500/30 rounded-full text-white font-medium hover:from-purple-500/30 hover:to-blue-500/30 transform hover:scale-110 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25"
              style={{
                animation: `float ${3 + index * 0.5}s ease-in-out infinite`,
                animationDelay: `${index * 0.2}s`
              }}
            >
              {tech}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectTech;
