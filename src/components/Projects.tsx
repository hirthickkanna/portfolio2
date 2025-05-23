import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  github?: string;
  demo?: string;
}

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  
  const projects: Project[] = [
    {
      id: 1,
      title: "Ocean Bounty",
      description: "A comprehensive website  for fresh fish selling shop.",
      image: "https://images.unsplash.com/photo-1536264203436-5919023592e9?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmlzaCUyMHNob3B8ZW58MHx8MHx8fDA%3D",
      tags: ["react", "typescript", "tailwind"],
      github: "https://github.com/hirthickkanna",
      demo: "https://example.com"
    },
    {
      id: 2,
      title: "QR code for bus transport",
      description: "Developed the QR code for college bus transportation.",
      image: "https://buscdn.cardekho.com/in/eicher/1075-e-starline-college-bus/eicher-1075-e-starline-college-bus.jpg?imwidth=480&impolicy=resize",
      tags: ["html", "css", "monkey QR"],
      github: "https://github.com/hirthickkanna",
      demo: "https://example.com"
    },
    {
      id: 3,
      title: "Blush haven",
      description: "A website for beautyful clothing and accessories in latest trending.",
      image: "https://sepiastories.in/wp-content/uploads/2022/11/women-clothing-store-3.webp",
      tags: ["react-native", "graphql", "typescript"],
      github: "https://github.com/hirthickkanna",
      demo: "https://blush-haven.vercel.app/"
    },
    {
      id: 4,
      title: "Timeless  elegance",
      description: "A website for elegant and beautiful watches.",
      image: "https://media.istockphoto.com/id/980259592/photo/showcase-with-wrist-watches.jpg?s=612x612&w=0&k=20&c=h4tcd59B9N6a529YlFWe7FtKxsHVSXrgRfw5nc3Ycv0=",
      tags: ["react js", "mongodb", "tailwind"],
      github: "https://github.com/hirthickkanna",
      demo: "https://timeless-elegance.vercel.app/"
    },
    
    {
      id: 5,
      title: "Portfolio Website",
      description: "A customizable portfolio template for developers and designers with dark mode and animations.",
      image: "https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tags: ["nextjs", "tailwind", "framer-motion"],
      github: "https://github.com/hirthickkanna",
      demo: "#"
    }
  ];
  
  const filters = [
    { label: 'All', value: 'all' },
    { label: 'React', value: 'react' },
    { label: 'TypeScript', value: 'typescript' },
    { label: 'Tailwind', value: 'tailwind' },
  ];
  
  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.tags.includes(activeFilter));
  
  return (
    <section id="projects" className="section bg-slate-50 dark:bg-slate-800/50">
      <div className="container-custom">
        <h2 className="section-title animate-on-scroll">My Projects</h2>
        <p className="text-center text-slate-600 dark:text-slate-400 mb-12 max-w-3xl mx-auto animate-on-scroll">
          A selection of my recent work, spanning web applications, mobile interfaces, and design systems.
          Each project represents unique challenges and solutions.
        </p>
        
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 animate-on-scroll">
          {filters.map(filter => (
            <button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              className={`px-4 py-2 rounded-full text-sm transition-all ${
                activeFilter === filter.value
                  ? 'bg-primary-600 text-white shadow-md'
                  : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-primary-50 dark:hover:bg-slate-700'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <div key={project.id} className="card overflow-hidden animate-on-scroll">
              <div className="relative overflow-hidden h-48 group">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-4">
                  <div className="flex space-x-3">
                    {project.github && (
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-2 bg-white/20 backdrop-blur-md rounded-full hover:bg-white/30 transition-colors"
                        aria-label={`GitHub repository for ${project.title}`}
                      >
                        <Github size={18} className="text-white" />
                      </a>
                    )}
                    {project.demo && (
                      <a 
                        href={project.demo} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-2 bg-white/20 backdrop-blur-md rounded-full hover:bg-white/30 transition-colors"
                        aria-label={`Live demo for ${project.title}`}
                      >
                        <ExternalLink size={18} className="text-white" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span 
                      key={tag} 
                      className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;