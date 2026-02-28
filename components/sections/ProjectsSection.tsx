import { forwardRef, useState } from 'react';
import { Github, ExternalLink, ChevronRight, Filter, X } from 'lucide-react';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card';
import { Particles } from '../ui/particles';
import Shuffle from '../ui/shuffle';

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
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 13,
      title: 'Restaurant Management System',
      description: 'Full-stack system with real-time order tracking for restaurants.',
      longDescription: 'Developed during internship at NEXOVA. Features WebSocket-based real-time order synchronization between cashier, kitchen, and tables. Implemented Role-Based Access Control (RBAC) for different user roles.',
      image: '/images/no-image.png',
      tags: ['React', 'TypeScript', 'Spring Boot', 'WebSocket', 'MySQL', 'RBAC', 'Tailwind CSS'],
      category: 'fullstack',
      featured: true
    },
    {
      id: 2,
      title: 'Clothify Store – POS System',
      description: 'Desktop-based Point of Sale system for clothing store management.',
      longDescription: 'Developed a comprehensive POS system using JavaFX with Hibernate ORM. Implemented Factory Design Pattern and Layered Architecture for modularity. Features include inventory management, sales tracking, and reporting.',
      image: '/images/clothify.png',
      tags: ['JavaFX', 'Hibernate', 'MySQL', 'Lombok', 'ModelMapper'],
      category: 'fullstack',
      github: 'https://github.com/ni-th/clothify-store-java-fx',
      featured: true
    },
    {
      id: 3,
      title: 'Past Paper Website',
      description: 'Dynamic web platform for uploading and downloading university past papers.',
      longDescription: 'Built a full-featured platform with admin panel for paper management, user authentication, and real-time updates using AJAX. Features include paper categorization, uploading, search functionality, downloading, and user management.',
      image: '/images/no-image.png',
      tags: ['PHP', 'MySQL', 'AJAX', 'Bootstrap', 'Semantic UI'],
      category: 'fullstack',
      featured: false
    },
    {
      id: 4,
      title: 'Sinhala Unicode to FM Text Converter',
      description: 'Real-time desktop app for converting Sinhala Unicode to FM font encodings.',
      longDescription: 'Built with Python and Tkinter featuring live text conversion. Implements custom mapping algorithm for accurate Unicode-to-FM character translation. Tested with various Sinhala fonts for compatibility.',
      image: '/images/rtu.png',
      tags: ['Python', 'Tkinter', 'Unicode', 'Font Processing'],
      category: 'frontend',
      github: 'https://ni-th.github.io/rtu/',
      live: 'https://ni-th.github.io/rtu/',
      featured: false
    },
    {
      id: 5,
      title: 'Student Management System',
      description: 'Web-based system for student registration and grade tracking.',
      longDescription: 'Final year project for CS 3101 course. Features include student registration, class assignments, grade tracking, and user authentication. Built with modular PHP architecture for maintainability.',
      image: '/images/no-image.png',
      tags: ['PHP', 'MySQL', 'JavaScript', 'HTML/CSS', 'Bootstrap'],
      category: 'fullstack',
      github: 'https://github.com/ni-th/student-management-system',
      featured: false
    },
    {
      id: 6,
      title: 'Codeverse - Coding tutorial website',
      description: 'A web platform for coding tutorials and practice problems.',
      image: '/images/no-image.png',
      tags: ['PHP', 'MySQL', 'Bootstrap'],
      category: 'fullstack',
      featured: false
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'fullstack', label: 'Full Stack' },
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
      className="relative min-h-screen py-20 overflow-hidden"
    >
      {/* Particles Background - Full section */}
      <div className="absolute inset-0 w-full h-full">
        <Particles 
          className="absolute inset-0 w-full h-full"
          quantity={150}
          staticity={30}
          ease={70}
          color="#3b82f6"
          size={0.6}
          vx={0.1}
          vy={0.1}
          refresh={false}
        />
      </div>

      {/* Content with relative z-index to appear above particles */}
      <div className="relative z-10 container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Shuffle
                text="Projects"
                tag="h2"
                className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-linear-to-r from-blue-600 to-purple-600"
            />
          <p className="text-muted-foreground max-w-3xl mx-auto">
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
              className={`px-6 py-2 rounded-full transition-all backdrop-blur-sm ${
                filter === cat.id
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'bg-primary/10 text-muted-foreground hover:bg-primary/20 border border-primary/20'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project) => (
            <Card 
              key={project.id}
              className="group border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 bg-gray-900/50 backdrop-blur-sm overflow-hidden"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden h-48">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {project.featured && (
                  <Badge 
                    className="absolute top-4 right-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0"
                  >
                    Featured
                  </Badge>
                )}
                {/* Overlay with links */}
                <div className="absolute inset-0 bg-gray-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  {project.github && (
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-primary/10 rounded-full hover:bg-primary/20 transition-colors border border-primary/20"
                      aria-label="View GitHub repository"
                    >
                      <Github className="w-5 h-5 text-primary" />
                    </a>
                  )}
                  {project.live && (
                    <a 
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-primary/10 rounded-full hover:bg-primary/20 transition-colors border border-primary/20"
                      aria-label="View live demo"
                    >
                      <ExternalLink className="w-5 h-5 text-primary" />
                    </a>
                  )}
                </div>
              </div>

              {/* Project Info */}
              <CardHeader>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.slice(0, 4).map((tag, idx) => (
                    <Badge 
                      key={idx}
                      variant="outline"
                      className="border-primary/20 bg-primary/5 text-muted-foreground"
                    >
                      {tag}
                    </Badge>
                  ))}
                  {project.tags.length > 4 && (
                    <Badge 
                      variant="outline"
                      className="border-primary/20 bg-primary/5 text-muted-foreground"
                    >
                      +{project.tags.length - 4}
                    </Badge>
                  )}
                </div>
              </CardContent>

              <CardFooter>
                <Button 
                  variant="ghost" 
                  className="text-primary hover:text-primary hover:bg-primary/10 hover:cursor-pointer p-0 h-auto"
                  onClick={() => setSelectedProject(project)}
                >
                  View Details <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Load More Button */}
        {visibleProjects < filteredProjects.length && (
          <div className="text-center mt-12">
            <Button 
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:opacity-90 transition-opacity px-8"
              onClick={loadMore}
            >
              Load More Projects
            </Button>
          </div>
        )}
      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <div 
          className="fixed inset-0 bg-gray-900/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
        >
          <Card 
            className="max-w-2xl w-full max-h-[90vh] overflow-y-auto bg-gray-900 border border-primary/20"
            onClick={(e) => e.stopPropagation()}
          >
            <CardHeader>
              <div className="flex justify-between items-start">
                <CardTitle className="text-2xl text-primary">{selectedProject.title}</CardTitle>
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="p-1 hover:bg-primary/10 rounded-full transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <CardDescription className="text-muted-foreground">
                {selectedProject.category.charAt(0).toUpperCase() + selectedProject.category.slice(1)} Project
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <img 
                src={selectedProject.image} 
                alt={selectedProject.title}
                className="w-full h-64 object-cover rounded-lg border border-primary/10"
              />
              <div>
                <h4 className="font-semibold mb-2">Description</h4>
                <p className="text-muted-foreground">
                  {selectedProject.longDescription || selectedProject.description}
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag, idx) => (
                    <Badge 
                      key={idx}
                      variant="outline"
                      className="border-primary/20 bg-primary/5"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex gap-4">
              {selectedProject.github && (
                <Button 
                  className="bg-primary/10 hover:bg-primary/20 text-primary border border-primary/20"
                  asChild
                >
                  <a href={selectedProject.github} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2" />
                    View Code
                  </a>
                </Button>
              )}
              {selectedProject.live && (
                <Button 
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                  asChild
                >
                  <a href={selectedProject.live} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </a>
                </Button>
              )}
            </CardFooter>
          </Card>
        </div>
      )}
    </section>
  );
});

ProjectsSection.displayName = 'ProjectsSection';
export default ProjectsSection;