
import React from 'react';
import { Check, Zap, Shield, Smartphone, BarChart3, Search, Settings } from 'lucide-react';

interface ProjectFeaturesProps {
  features: string[];
}

const ProjectFeatures: React.FC<ProjectFeaturesProps> = ({ features }) => {
  const featureIcons = [Zap, Shield, Search, Settings, Smartphone, BarChart3];

  return (
    <section data-aos="fade-up" className="relative">
      <h2 className="text-4xl font-bold text-center text-white mb-16">
        Key Features
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => {
          const IconComponent = featureIcons[index % featureIcons.length];
          
          return (
            <div
              key={index}
              data-aos="zoom-in"
              data-aos-delay={index * 150}
              className="group relative"
            >
              <div className="relative p-8 bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-500 hover:scale-105">
                {/* Animated border gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-purple-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="flex-shrink-0 p-3 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-shrink-0 p-2 bg-green-500/20 rounded-full">
                      <Check className="w-4 h-4 text-green-400" />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-300 transition-colors duration-300">
                    {feature}
                  </h3>
                  
                  <div className="w-full h-1 bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full transform -translate-x-full group-hover:translate-x-0 transition-transform duration-1000"></div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectFeatures;
