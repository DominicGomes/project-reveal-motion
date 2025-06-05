
import React, { useState, useEffect } from 'react';
import { X, ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ProjectImageSlider from './ProjectImageSlider';

interface Project {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  category: 'web' | 'android';
  technologies: string[];
  features: string[];
  images: string[];
  metrics?: {
    performance?: string;
    uptime?: string;
    users?: string;
    downloads?: string;
  };
}

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    document.body.style.overflow = 'hidden';
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(onClose, 300);
  };

  const metricsArray = project.metrics ? Object.entries(project.metrics).map(([key, value]) => ({
    label: key.charAt(0).toUpperCase() + key.slice(1),
    value
  })) : [];

  return (
    <div 
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      onClick={handleClose}
    >
      <div 
        className={`relative w-full max-w-4xl max-h-[90vh] bg-slate-900/95 backdrop-blur-lg border border-white/10 rounded-2xl overflow-hidden transition-all duration-300 ${
          isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/10">
          <div>
            <h2 className="text-2xl font-bold text-white">{project.title}</h2>
            <span className="text-purple-400 text-sm">
              {project.category === 'web' ? 'Web Application' : 'Android Application'}
            </span>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={handleClose}
            className="text-gray-400 hover:text-white hover:bg-white/10"
          >
            <X className="w-6 h-6" />
          </Button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto max-h-[calc(90vh-120px)]">
          <div className="p-6 space-y-8">
            {/* Project Images */}
            <div>
              <ProjectImageSlider images={project.images} />
            </div>

            {/* Description */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-3">About This Project</h3>
              <p className="text-gray-300 leading-relaxed">{project.description}</p>
            </div>

            {/* Technologies */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-3">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-purple-600/20 border border-purple-500/30 rounded-full text-purple-300 text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Features */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-3">Key Features</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {project.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Metrics */}
            {metricsArray.length > 0 && (
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Project Metrics</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {metricsArray.map((metric, index) => (
                    <div key={index} className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-white mb-1">{metric.value}</div>
                      <div className="text-gray-400 text-sm">{metric.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex gap-4 pt-4">
              <Button className="flex-1 bg-purple-600 hover:bg-purple-700 text-white">
                <ExternalLink className="w-4 h-4 mr-2" />
                View Live Demo
              </Button>
              <Button variant="outline" className="flex-1 border-white/20 text-white hover:bg-white/10">
                <Github className="w-4 h-4 mr-2" />
                View Source Code
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
