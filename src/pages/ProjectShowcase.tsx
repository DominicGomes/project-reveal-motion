
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ProjectHero from '../components/ProjectHero';
import ProjectImageSlider from '../components/ProjectImageSlider';
import ProjectDetails from '../components/ProjectDetails';
import ProjectFeatures from '../components/ProjectFeatures';
import ProjectTech from '../components/ProjectTech';

const ProjectShowcase = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-cubic',
    });
  }, []);

  const projectData = {
    title: "Modern E-Commerce Platform",
    subtitle: "Full-Stack Web Application",
    description: "A cutting-edge e-commerce platform built with React, Node.js, and modern web technologies. Features real-time inventory management, secure payment processing, and an intuitive admin dashboard.",
    images: [
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?auto=format&fit=crop&w=800&q=80"
    ],
    technologies: ["React", "TypeScript", "Node.js", "MongoDB", "Stripe", "AWS", "Docker", "Redux"],
    features: [
      "Real-time inventory management",
      "Secure payment processing",
      "Advanced search & filtering",
      "Admin dashboard",
      "Mobile-responsive design",
      "Performance optimization"
    ],
    metrics: {
      performance: "98%",
      uptime: "99.9%",
      users: "10K+",
      transactions: "$2M+"
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <ProjectHero 
        title={projectData.title}
        subtitle={projectData.subtitle}
        description={projectData.description}
      />
      
      <div className="container mx-auto px-4 py-16 space-y-24">
        <ProjectImageSlider images={projectData.images} />
        <ProjectDetails metrics={projectData.metrics} />
        <ProjectFeatures features={projectData.features} />
        <ProjectTech technologies={projectData.technologies} />
      </div>
    </div>
  );
};

export default ProjectShowcase;
