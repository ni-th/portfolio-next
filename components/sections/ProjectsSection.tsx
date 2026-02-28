
import { forwardRef, useState } from 'react';
import { Button } from "@heroui/react";
import { Github, ExternalLink, ChevronRight, Filter } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  tags: string[];
  category: 'frontend' | 'backend' | 'fullstack' | 'mobile';
  github?: string;
  live?: string;
  featured: boolean;
}

const ProjectsSection = forwardRef<HTMLElement>((props, ref) => {
  const [filter, setFilter] = useState<string>('all');
  const [visibleProjects, setVisibleProjects] = useState<number>(6);

  const projects: Project[] = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce platform with real-time inventory and payment processing.',
      image: '/api/placeholder/600/400',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      category: 'fullstack',
      github: 'https://github.com',
      live: 'https://example.com',
      featured: true
    },
    {
      id: 2,
      title: 'AI Task Manager',
      description: 'Smart task management app with AI-powered prioritization and scheduling.',
      image: '/api/placeholder/600/400',
      tags: ['Next.js', 'TypeScript', 'OpenAI', 'Prisma'],
      category: 'fullstack',
      github: 'https://github.com',
      live: 'https://example.com',
      featured: true
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'Real-time weather tracking with interactive maps and forecasts.',
      image: '/api/placeholder/600/400',
      tags: ['React', 'D3.js', 'Weather API', 'Tailwind'],
      category: 'frontend',
      github: 'https://github.com',
      live: 'https://example.com',
      featured: false
    },
    {
      id: 4,
      title: 'Social Media API',
      description: 'RESTful API for social media platform with authentication and real-time features.',
      image: '/api/placeholder/600/400',
      tags: ['Node.js', 'Express', 'Socket.io', 'JWT'],
      category: 'backend',
      github: 'https://github.com',
      live: 'https://example.com',
      featured: false
    },
    {
      id: 5,
      title: 'Fitness Tracker Mobile App',
      description: 'Cross-platform mobile app for tracking workouts and nutrition.',
      image: '/api/placeholder/600/400',
      tags: ['React Native', 'Redux', 'Firebase'],
      category: 'mobile',
      github: 'https://github.com',
      live: 'https://example.com',
      featured: true
    },
    {
      id: 6,
      title: 'Analytics Dashboard',
      description: 'Interactive dashboard for visualizing business metrics and KPIs.',
      image: '/api/placeholder/600/400',
      tags: ['Vue.js', 'Chart.js', 'Django'],
      category: 'frontend',
      github: 'https://github.com',
      live: 'https://example.com',
      featured: false
    },
    {
      id: 7,
      title: 'Chat Application',
      description: 'Real-time chat app with rooms, direct messages, and file sharing.',
      image: '/api/placeholder/600/400',
      tags: ['React', 'Socket.io', 'MongoDB'],
      category: 'fullstack',
      github: 'https://github.com',
      live: 'https://example.com',
      featured: false
    },
    {
      id: 8,
      title: 'Portfolio Template',
      description: 'Modern portfolio template for developers with smooth animations.',
      image: '/api/placeholder/600/400',
      tags: ['Next.js', 'Framer Motion', 'Tailwind'],
      category: 'frontend',
      github: 'https://github.com',
      live: 'https://example.com',
      featured: false
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'fullstack', label: 'Full Stack' },
    { id: 'mobile', label: 'Mobile' },
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  const displayedProjects = filteredProjects.slice(0, visibleProjects);

  const loadMore = () => {
    setVisibleProjects(prev => prev + 3);
  };

  return (
    <section 
      ref={ref} 
      id="projects"
      className="min-h-screen py-20 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold text-lg">My Work</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Here are some of my recent projects. Each project represents unique challenges 
            and solutions I've implemented.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setFilter(cat.id);
                setVisibleProjects(6);
              }}
              className={`px-6 py-2 rounded-full transition-all ${
                filter === cat.id
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project) => (
            <div 
              key={project.id}
              className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden h-48">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {project.featured && (
                  <span className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Featured
                  </span>
                )}
                {/* Overlay with links */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  {project.github && (
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white rounded-full hover:bg-gray-100 transition-colors"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  )}
                  {project.live && (
                    <a 
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white rounded-full hover:bg-gray-100 transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm">
                  {project.description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* View Details Button */}
                <button className="text-blue-600 font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all">
                  View Details <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {visibleProjects < filteredProjects.length && (
          <div className="text-center mt-12">
            <Button 
              color="primary"
              size="lg"
              variant="bordered"
              onClick={loadMore}
              className="px-8"
            >
              Load More Projects
            </Button>
          </div>
        )}
      </div>
    </section>
  );
});

ProjectsSection.displayName = 'ProjectsSection';
export default ProjectsSection;