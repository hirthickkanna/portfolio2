import React from 'react';
import { ChevronRight, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    {
      title: "Quick Links",
      links: [
        { label: "Home", href: "#home" },
        { label: "Projects", href: "#projects" },
        { label: "About", href: "#about" },
        { label: "Contact", href: "#contact" }
      ]
    },
    {
      title: "Resources",
      links: [
        { label: "Blog", href: "#" },
        { label: "GitHub", href: "https://github.com/hirthickkanna" },
        { label: "LinkedIn", href: "https://www.linkedin.com/in/hirthick-kanna-bb31b9317" },
        { label: "Resume", href: "file:///C:/Users/HIRTHICK%20KANNA/Downloads/hirthick%20kanna%20m%20resume1.pdf" }
      ]
    },
    {
      title: "Legal",
      links: [
        { label: "Privacy Policy", href: "#" },
        { label: "Terms of Service", href: "#" },
        { label: "Cookie Policy", href: "#" }
      ]
    }
  ];
  
  return (
    <footer className="bg-slate-900 text-slate-200 pt-12 pb-6">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About */}
          <div>
            <a href="#home" className="text-2xl font-bold text-white flex items-center mb-4">
              Portfolio<span className="text-primary-400">.</span>
            </a>
            <p className="text-slate-400 mb-6">
              Creating beautiful, functional web experiences with clean code and thoughtful design.
            </p>
            
            <div className="flex space-x-4">
              <a 
                href="https://github.com/hirthickkanna" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
              
              <a 
                href="https://www.linkedin.com/in/hirthick-kanna-bb31b9317/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
              
              <a 
                href="https://dribbble.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                aria-label="Dribbble"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32"></path>
                </svg>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h3 className="text-lg font-bold text-white mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href={link.href} 
                      className="text-slate-400 hover:text-primary-400 transition-colors flex items-center"
                    >
                      <ChevronRight size={16} className="mr-1" /> {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-t border-slate-800 pt-6 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm mb-4 sm:mb-0">
            &copy; {currentYear} hirthick kanna. All rights reserved.
          </p>
          <p className="text-slate-400 text-sm flex items-center">
            Made with <Heart size={16} className="mx-1 text-red-500" /> using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;