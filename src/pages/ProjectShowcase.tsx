
import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ProjectGrid from '../components/ProjectGrid';
import ProjectModal from '../components/ProjectModal';

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

const ProjectShowcase = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-cubic',
    });
  }, []);

  const projects: Project[] = [
    {
      id: '1',
      title: 'Modern E-Commerce Platform',
      description: 'A cutting-edge e-commerce platform built with React, Node.js, and modern web technologies.',
      thumbnail: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80',
      category: 'web',
      technologies: ['React', 'TypeScript', 'Node.js', 'MongoDB', 'Stripe'],
      features: ['Real-time inventory', 'Secure payments', 'Admin dashboard'],
      images: [
        'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80'
      ],
      metrics: {
        performance: '98%',
        uptime: '99.9%',
        users: '10K+',
      }
    },
    {
      id: '2',
      title: 'Fitness Tracker App',
      description: 'A comprehensive fitness tracking application with workout plans and progress monitoring.',
      thumbnail: 'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?auto=format&fit=crop&w=800&q=80',
      category: 'android',
      technologies: ['Kotlin', 'Room Database', 'Material Design', 'Firebase'],
      features: ['Workout tracking', 'Progress analytics', 'Social sharing'],
      images: [
        'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&q=80'
      ],
      metrics: {
        downloads: '50K+',
        users: '25K+',
      }
    },
    {
      id: '3',
      title: 'Weather App',
      description: 'Real-time weather forecasting app with location-based alerts.',
      thumbnail: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=800&q=80',
      category: 'android',
      technologies: ['Java', 'REST APIs', 'GPS', 'Material UI'],
      features: ['Weather alerts', 'Location tracking', 'Forecast data'],
      images: [
        'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=800&q=80'
      ],
      metrics: {
        downloads: '100K+',
        users: '80K+',
      }
    },
    {
      id: '4',
      title: 'Task Manager',
      description: 'Productivity app for managing daily tasks and team collaboration.',
      thumbnail: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80',
      category: 'android',
      technologies: ['Flutter', 'SQLite', 'Push Notifications'],
      features: ['Task scheduling', 'Team collaboration', 'Reminders'],
      images: [
        'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80'
      ],
      metrics: {
        downloads: '30K+',
        users: '20K+',
      }
    },
    {
      id: '5',
      title: 'Music Player',
      description: 'Advanced music player with custom equalizer and playlist management.',
      thumbnail: 'https://images.unsplash.com/photo-1487887235947-a955ef187fcc?auto=format&fit=crop&w=800&q=80',
      category: 'android',
      technologies: ['Kotlin', 'MediaPlayer', 'Material Design'],
      features: ['Custom equalizer', 'Playlist management', 'Sleep timer'],
      images: [
        'https://images.unsplash.com/photo-1487887235947-a955ef187fcc?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1527576539890-dfa815648363?auto=format&fit=crop&w=800&q=80'
      ],
      metrics: {
        downloads: '75K+',
        users: '60K+',
      }
    }
  ];

  const webProjects = projects.filter(project => project.category === 'web');
  const androidProjects = projects.filter(project => project.category === 'android');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16" data-aos="fade-up">
          <h1 className="text-5xl font-bold text-white mb-6">
            My Projects
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore my portfolio of web applications and mobile apps, showcasing modern development practices and innovative solutions.
          </p>
        </div>

        <Tabs defaultValue="web" className="w-full" data-aos="fade-up" data-aos-delay="200">
          <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto mb-12 bg-white/10 backdrop-blur-lg border border-white/20">
            <TabsTrigger value="web" className="text-white data-[state=active]:bg-white/20 data-[state=active]:text-white">
              Web Projects ({webProjects.length})
            </TabsTrigger>
            <TabsTrigger value="android" className="text-white data-[state=active]:bg-white/20 data-[state=active]:text-white">
              Android Apps ({androidProjects.length})
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="web">
            <ProjectGrid 
              projects={webProjects} 
              onProjectClick={setSelectedProject}
            />
          </TabsContent>
          
          <TabsContent value="android">
            <ProjectGrid 
              projects={androidProjects} 
              onProjectClick={setSelectedProject}
            />
          </TabsContent>
        </Tabs>
      </div>

      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </div>
  );
};

export default ProjectShowcase;
