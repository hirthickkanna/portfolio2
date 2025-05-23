import React, { useState } from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error for this field if it exists
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };
  
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Reset status after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    }, 1500);
  };
  
  return (
    <section id="contact" className="section">
      <div className="container-custom">
        <h2 className="section-title animate-on-scroll">Get In Touch</h2>
        <p className="text-center text-slate-600 dark:text-slate-400 mb-12 max-w-3xl mx-auto animate-on-scroll">
          Have a project in mind or want to collaborate? Feel free to reach out through the form below or contact me directly.
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact information */}
          <div className="lg:col-span-1 animate-on-scroll">
            <div className="card p-6 h-full">
              <h3 className="text-xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="p-3 rounded-lg bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 mr-4">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-slate-500 dark:text-slate-400">Email</h4>
                    <a href="mailto:hello@example.com" className="text-lg font-medium hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                      hirthickkanna@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="p-3 rounded-lg bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 mr-4">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-slate-500 dark:text-slate-400">Phone</h4>
                    <a href="tel:+11234567890" className="text-lg font-medium hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                      +91 8072679496
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="p-3 rounded-lg bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 mr-4">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-slate-500 dark:text-slate-400">Location</h4>
                    <p className="text-lg font-medium">
                      Dindigul, Tamil Nadu, India
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <h4 className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-4">Follow Me</h4>
                <div className="flex space-x-4">
                  <a 
                    href="https://github.com/hirthickkanna" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-primary-100 dark:hover:bg-primary-900/30 text-slate-700 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 transition-all"
                    aria-label="GitHub"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                  </a>
                  
                  <a 
                    href="https://www.linkedin.com/in/hirthick-kanna-bb31b9317" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-primary-100 dark:hover:bg-primary-900/30 text-slate-700 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 transition-all"
                    aria-label="LinkedIn"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </a>
                  
                  <a 
                    href="https://dribbble.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-primary-100 dark:hover:bg-primary-900/30 text-slate-700 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 transition-all"
                    aria-label="Dribbble"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact form */}
          <div className="lg:col-span-2 animate-on-scroll">
            <div className="card p-6">
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border ${
                        errors.name 
                          ? 'border-red-500 dark:border-red-500' 
                          : 'border-slate-300 dark:border-slate-700'
                      } bg-white dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-primary-500`}
                      placeholder="hirthick kanna"
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border ${
                        errors.email 
                          ? 'border-red-500 dark:border-red-500' 
                          : 'border-slate-300 dark:border-slate-700'
                      } bg-white dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-primary-500`}
                      placeholder="hirthick@example.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                    )}
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="subject" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors.subject 
                        ? 'border-red-500 dark:border-red-500' 
                        : 'border-slate-300 dark:border-slate-700'
                    } bg-white dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-primary-500`}
                    placeholder="Project Inquiry"
                  />
                  {errors.subject && (
                    <p className="mt-1 text-sm text-red-500">{errors.subject}</p>
                  )}
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors.message 
                        ? 'border-red-500 dark:border-red-500' 
                        : 'border-slate-300 dark:border-slate-700'
                    } bg-white dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-primary-500`}
                    placeholder="Tell me about your project..."
                  ></textarea>
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-500">{errors.message}</p>
                  )}
                </div>
                
                <div>
                  <button
                    type="submit"
                    className="btn btn-primary w-full md:w-auto flex items-center justify-center"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={18} className="mr-2" />
                        Send Message
                      </>
                    )}
                  </button>
                  
                  {submitStatus === 'success' && (
                    <p className="mt-4 text-sm text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-900/30 p-3 rounded-lg">
                      Your message has been sent successfully! I'll get back to you soon.
                    </p>
                  )}
                  
                  {submitStatus === 'error' && (
                    <p className="mt-4 text-sm text-red-600 dark:text-red-400 bg-red-100 dark:bg-red-900/30 p-3 rounded-lg">
                      There was an error sending your message. Please try again later.
                    </p>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;