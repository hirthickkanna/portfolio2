import React from 'react';
import { Code, Database, Figma, Monitor, Server, Smartphone } from 'lucide-react';

interface Skill {
  name: string;
  level: number;
  category: string;
}

interface SkillCategory {
  name: string;
  icon: React.ReactNode;
  skills: Skill[];
}

const Skills: React.FC = () => {
  const skillCategories: SkillCategory[] = [
    {
      name: "Frontend Development",
      icon: <Monitor size={24} />,
      skills: [
        { name: "HTML/CSS", level: 90, category: "frontend" },
        { name: "JavaScript", level: 70, category: "frontend" },
        { name: "React", level: 75, category: "frontend" },
        { name: "Tailwind CSS", level: 65, category: "frontend" },
      ]
    },

    {
      name: "Database",
      icon: <Database size={24} />,
      skills: [
        { name: "MongoDB", level: 75, category: "database" },
        { name: "MySQL", level: 80, category: "database" },
      ]
    },
    {
      name: "UI/UX Design",
      icon: <Figma size={24} />,
      skills: [
        { name: "Figma", level: 85, category: "design" },
        { name: "Responsive Design", level: 90, category: "design" },
        { name: "User Testing", level: 75, category: "design" },
      ]
    },
    {
      name: "Other",
      icon: <Code size={24} />,
      skills: [
        { name: "Git/GitHub", level: 90, category: "other" },
        { name: "CI/CD", level: 70, category: "other" },
        { name: "Docker", level: 65, category: "other" },
      ]
    }
  ];
  
  return (
    <section id="skills" className="section">
      <div className="container-custom">
        <h2 className="section-title animate-on-scroll">My Skills</h2>
        <p className="text-center text-slate-600 dark:text-slate-400 mb-12 max-w-3xl mx-auto animate-on-scroll">
          I've developed expertise across multiple technologies and disciplines,
          allowing me to build complete, polished applications from concept to deployment.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="card p-6 animate-on-scroll">
              <div className="flex items-center mb-4">
                <div className="p-3 rounded-lg bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 mr-4">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold">{category.name}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                        {skill.name}
                      </span>
                      <span className="text-sm font-medium text-slate-500 dark:text-slate-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-primary-600 dark:bg-primary-500 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;