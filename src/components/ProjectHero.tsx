
import React from 'react';
import { ArrowDown } from 'lucide-react';

interface ProjectHeroProps {
  title: string;
  subtitle: string;
  description: string;
}

const ProjectHero: React.FC<ProjectHeroProps> = ({ title, subtitle, description }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full blur-3xl animate-spin-slow"></div>
      </div>
      
      <div className="relative z-10 text-center max-w-6xl mx-auto px-4">
        <div 
          data-aos="fade-up" 
          data-aos-delay="200"
          className="mb-6"
        >
          <span className="inline-block px-6 py-2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 backdrop-blur-sm border border-purple-500/30 rounded-full text-purple-300 text-sm font-medium mb-6">
            {subtitle}
          </span>
        </div>
        
        <h1 
          data-aos="fade-up" 
          data-aos-delay="400"
          className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent mb-8 leading-tight"
        >
          {title}
        </h1>
        
        <p 
          data-aos="fade-up" 
          data-aos-delay="600"
          className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12"
        >
          {description}
        </p>
        
        <div 
          data-aos="fade-up" 
          data-aos-delay="800"
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <button className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-semibold hover:from-purple-700 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple-500/25">
            View Live Demo
          </button>
          <button className="px-8 py-4 border border-purple-500/50 text-purple-300 rounded-full font-semibold hover:bg-purple-500/10 transform hover:scale-105 transition-all duration-300">
            View Source Code
          </button>
        </div>
      </div>
      
      <div 
        data-aos="fade-up" 
        data-aos-delay="1000"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <ArrowDown className="w-6 h-6 text-purple-400" />
      </div>
    </section>
  );
};

export default ProjectHero;
