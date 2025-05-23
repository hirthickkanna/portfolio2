import React, { useState } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface NavbarProps {
  scrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ scrolled }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };
  
  const navLinks = [
    { title: 'Home', href: '#home' },
    { title: 'Projects', href: '#projects' },
    { title: 'Skills', href: '#skills' },
    { title: 'About', href: '#about' },
    { title: 'Contact', href: '#contact' },
  ];
  
  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-md py-4' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <a 
          href="#home" 
          className="text-2xl font-bold text-primary-600 dark:text-primary-400 flex items-center"
        >
          Portfolio<span className="text-accent-500">.</span>
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navLinks.map((link) => (
            <a
              key={link.title}
              href={link.href}
              className="nav-link"
              onClick={closeMobileMenu}
            >
              {link.title}
            </a>
          ))}
          
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="ml-4 p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            {theme === 'light' ? (
              <Moon size={20} className="text-slate-700" />
            ) : (
              <Sun size={20} className="text-slate-300" />
            )}
          </button>
        </nav>
        
        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden">
          <button
            onClick={toggleTheme}
            className="p-2 mr-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            {theme === 'light' ? (
              <Moon size={20} className="text-slate-700" />
            ) : (
              <Sun size={20} className="text-slate-300" />
            )}
          </button>
          
          <button
            onClick={toggleMobileMenu}
            className="p-2 rounded-md text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <nav className="md:hidden bg-white dark:bg-slate-900 shadow-lg animate-slide-down">
          <div className="container-custom py-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.title}
                href={link.href}
                className="nav-link block py-2"
                onClick={closeMobileMenu}
              >
                {link.title}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;