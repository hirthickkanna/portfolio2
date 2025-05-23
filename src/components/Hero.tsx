import React from 'react';
import { ChevronDown, Github as GitHub, Linkedin, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16">
      {/* Background pattern */}
      <div className="absolute inset-0 z-0 opacity-20 dark:opacity-10">
        <div className="absolute right-0 top-1/4 w-1/3 h-1/3 bg-primary-200 dark:bg-primary-900 rounded-full blur-3xl"></div>
        <div className="absolute left-0 bottom-1/4 w-1/2 h-1/2 bg-secondary-200 dark:bg-secondary-900 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-3/5 animate-fade-in">
            <span className="inline-block text-primary-600 dark:text-primary-400 font-medium mb-4">
              Hello, my name is
            </span>
            <h1 className="mb-4">
              <span className="block text-slate-900 dark:text-white">Hirthick kanna</span>
              <span className="block text-primary-600 dark:text-primary-400 mt-2">
                Creative Developer
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-700 dark:text-slate-300 mb-8 max-w-2xl">
              I craft digital experiences with clean code and creative design.
              Specializing in front-end development and Data analytics, I bring ideas to life with
              React, TypeScript, and modern web technologies and powerbi.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <a href="#contact" className="btn btn-primary">
                Get in Touch
              </a>
              <a href="#projects" className="btn btn-outline">
                View My Work
              </a>
            </div>
            
            <div className="flex space-x-4 mb-8">
              <a 
                href="https://github.com/hirthickkanna" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 text-slate-700 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                aria-label="GitHub"
              >
                <GitHub size={24} />
              </a>
              <a 
                href="https://www.linkedin.com/in/hirthick-kanna-bb31b9317/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 text-slate-700 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="hirthickkanna2005@gmail.com" 
                className="p-2 text-slate-700 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
          
          <div className="w-full md:w-2/5 mt-8 md:mt-0 animate-fade-in">
            <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto rounded-full overflow-hidden border-4 border-white dark:border-slate-800 shadow-xl">
              <img 
                src="src\image\WhatsApp Image 2025-05-23 at 21.17.12_b2a2b0d7.jpg" 
                alt="hirthick kanna - Portfolio" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-pulse-slow">
          <a 
            href="#projects" 
            aria-label="Scroll to Projects"
            className="p-2 rounded-full bg-white dark:bg-slate-800 shadow-md hover:shadow-lg transition-all"
          >
            <ChevronDown size={24} className="text-primary-600 dark:text-primary-400" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;