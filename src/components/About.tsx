import React from 'react';
import { BookOpen, Award, Calendar, GraduationCap, Briefcase } from 'lucide-react';

interface TimelineItem {
  id: number;
  title: string;
  company: string;
  date: string;
  description: string;
  icon: React.ReactNode;
  type: 'education' | 'experience'| 'internship';
}

const About: React.FC = () => {
  const timelineItems: TimelineItem[] = [
    {
      id: 1,
      title: "Associate Developer",
      company: "Mark Pyro Prime.",
      date: "Mar 2025 - Present",
      description: "Lead developer for client projects using React, TypeScript, and modern frontend technologies. Optimized application performance and implemented CI/CD workflows.",
      icon: <Briefcase size={20} />,
      type: "internship"
    },
    {
      id: 2,
      title: "Cognify Technologies",
      company: "Data Analyst Intern",
      date: "Dec 2024 - Jan 2025",
      description: "Analyzed data trends and patterns using Power BI. Collaborated with cross-functional teams to deliver actionable insights.",
      icon: <Briefcase size={20} />,
      type: "experience"
    },
    {
      id: 3,
      title: "Bachelor's in Computer Science and Engineering",
      company: "SSM INSTITUTE OF ENGINEERING AND TECHNOLOGY",
      date: "2022 - 2026",
      description: "Studied core computer science subjects including algorithms, data structures, and software engineering principles. Participated in various coding competitions and hackathons.",
      icon: <GraduationCap size={20} />,
      type: "education"
    }
  ];
  
  return (
    <section id="about" className="section bg-slate-50 dark:bg-slate-800/50">
      <div className="container-custom">
        <h2 className="section-title animate-on-scroll">About Me</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="animate-on-scroll">
            <div className="relative">
              <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://images.pexels.com/photos/3861959/pexels-photo-3861959.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="About John Doe" 
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-primary-400 dark:bg-primary-700 rounded-lg -z-10"></div>
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-secondary-400 dark:bg-secondary-700 rounded-lg -z-10"></div>
            </div>
            
            <div className="mt-12 space-y-6">
              <div className="flex items-start">
                <div className="p-2 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 mr-4">
                  <Award size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1">Professional Skills</h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    Specialized in creating responsive, user-friendly interfaces with React and modern frontend technologies . Then i have done powerbi in deep analytics.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="p-2 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 mr-4">
                  <BookOpen size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1">Continuous Learner</h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    Constantly exploring new technologies and methodologies to stay at the forefront of web development.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="animate-on-scroll">
            <div className="relative pl-8 border-l-2 border-primary-200 dark:border-primary-800 space-y-10">
              {timelineItems.map((item) => (
                <div key={item.id} className="relative">
                  {/* Timeline dot */}
                  <div className="absolute -left-[25px] p-2 rounded-full bg-white dark:bg-slate-900 border-2 border-primary-500 dark:border-primary-400">
                    {item.icon}
                  </div>
                  
                  <div className="card p-5 ml-4">
                    <span className={`text-sm font-medium px-2.5 py-0.5 rounded-full ${
                      item.type === 'education' 
                        ? 'bg-secondary-100 dark:bg-secondary-900/30 text-secondary-800 dark:text-secondary-300' 
                        : 'bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-300'
                    }`}>
                      {item.date}
                    </span>
                    <h3 className="text-lg font-bold mt-2">{item.title}</h3>
                    <p className="text-primary-600 dark:text-primary-400 font-medium mb-2">{item.company}</p>
                    <p className="text-slate-600 dark:text-slate-400">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;