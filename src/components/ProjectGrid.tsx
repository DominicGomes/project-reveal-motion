
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

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

interface ProjectGridProps {
  projects: Project[];
  onProjectClick: (project: Project) => void;
}

const ProjectGrid: React.FC<ProjectGridProps> = ({ projects, onProjectClick }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project, index) => (
        <Card
          key={project.id}
          className="group cursor-pointer bg-white/5 backdrop-blur-lg border border-white/10 hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl"
          onClick={() => onProjectClick(project)}
          data-aos="fade-up"
          data-aos-delay={index * 100}
        >
          <CardContent className="p-0">
            <div className="relative overflow-hidden rounded-t-lg">
              <img
                src={project.thumbnail}
                alt={project.title}
                className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="flex flex-wrap gap-1">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-white/20 backdrop-blur-sm rounded text-xs text-white"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-white/20 backdrop-blur-sm rounded text-xs text-white">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-300 text-sm line-clamp-2">
                {project.description}
              </p>
              
              <div className="mt-4 flex items-center justify-between">
                <span className="text-purple-400 text-sm font-medium">
                  {project.category === 'web' ? 'Web App' : 'Android App'}
                </span>
                <span className="text-gray-400 text-sm">
                  Click to view details
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ProjectGrid;
