// Import React library for building the UI
import React from 'react';
// Importing icon components from lucide-react library
import { ExternalLink, Github, Play } from 'lucide-react';

const Projects = () => {
  // An array containing all project details like title, description, image, etc.
  const projects = [
    {
      title: 'Learning Portfolio Website', // Project name
      description: 'A responsive portfolio website built with React and Tailwind CSS showcasing my journey in web development.', // Small intro about project
      image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg', // Image link
      technologies: ['React', 'Tailwind CSS', 'TypeScript'], // Tools/Tech used
      github: '#', // GitHub link
      live: '#', // Live demo link
      category: 'Web Development' // Project category
    },
    {
      title: 'Flutter Mobile App',
      description: 'A mobile application built with Flutter as part of my learning journey in mobile development.',
      image: 'https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg',
      technologies: ['Flutter', 'Dart'],
      github: '#',
      live: '#',
      category: 'Mobile Development'
    },
    {
      title: 'YouTube Channel',
      description: 'Managing and creating content for YouTube channel, focusing on educational and creative content.',
      image: 'https://images.pexels.com/photos/4491461/pexels-photo-4491461.jpeg',
      technologies: ['Content Strategy', 'SEO', 'Analytics'],
      youtube: '#', // This project has a YouTube link instead of GitHub/Live
      category: 'Content Creation'
    },
    {
      title: 'Video Editing Showcase',
      description: 'Professional video editing projects using Adobe Creative Suite and modern editing techniques.',
      image: 'https://images.pexels.com/photos/3945313/pexels-photo-3945313.jpeg',
      technologies: ['After Effects', 'Premiere Pro', 'CapCut'],
      youtube: '#',
      category: 'Video Editing'
    },
  ];

  return (
    // Section for Projects (id is used for navigation scrolling)
    <section id="projects" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        
        {/* Heading and Intro text */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A collection of my work across web development, mobile apps, and creative content
          </p>
        </div>

        {/* Grid layout to display all project cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Looping through each project and displaying it */}
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="group bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-105"
            >
              {/* Project Image with hover effect */}
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                {/* Dark gradient overlay when hovered */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                {/* Category label shown on top right of the image */}
                <div className="absolute top-4 right-4">
                  <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm backdrop-blur-sm">
                    {project.category}
                  </span>
                </div>
              </div>
              
              {/* Project Details */}
              <div className="p-6">
                {/* Project Title */}
                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                {/* Project Description */}
                <p className="text-gray-400 mb-4 leading-relaxed">{project.description}</p>
                
                {/* Technologies used in the project */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Links to GitHub, Live site or YouTube */}
                <div className="flex space-x-4">
                  {/* Show GitHub link if available */}
                  {project.github && (
                    <a 
                      href={project.github} 
                      className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
                    >
                      <Github size={18} />
                      <span>Code</span>
                    </a>
                  )}
                  {/* Show Live site link if available */}
                  {project.live && (
                    <a 
                      href={project.live} 
                      className="flex items-center space-x-2 text-gray-400 hover:text-blue-400 transition-colors"
                    >
                      <ExternalLink size={18} />
                      <span>Live</span>
                    </a>
                  )}
                  {/* Show YouTube link if available */}
                  {project.youtube && (
                    <a 
                      href={project.youtube} 
                      className="flex items-center space-x-2 text-gray-400 hover:text-red-400 transition-colors"
                    >
                      <Play size={18} />
                      <span>Watch</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Exporting the Projects component so it can be used in other files
export default Projects;
