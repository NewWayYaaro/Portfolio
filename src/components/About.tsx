import React from 'react';
import { Code, Smartphone, Youtube, Video } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A passionate learner exploring the world of technology and creativity
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-gray-300 text-lg leading-relaxed">
              I'm currently on an exciting journey learning web development and mobile app development. 
              With a strong foundation in HTML, CSS, and JavaScript, I'm expanding my skills into modern 
              frameworks and technologies.
            </p>
            
            <p className="text-gray-300 text-lg leading-relaxed">
              Beyond coding, I manage a YouTube channel where I share knowledge and creativity. 
              My experience in video editing with professional tools like Adobe Premier Pro, After Effects, 
              and CapCut allows me to create engaging visual content.
            </p>

            <p className="text-gray-300 text-lg leading-relaxed">
              I believe in continuous learning and combining technical skills with creative expression 
              to build meaningful digital experiences.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-blue-900/50 to-purple-900/50 p-6 rounded-xl border border-gray-700 hover:border-blue-500 transition-all duration-300 group">
              <Code className="text-blue-400 mb-4 group-hover:scale-110 transition-transform" size={40} />
              <h3 className="text-white font-semibold mb-2">Web Development</h3>
              <p className="text-gray-400 text-sm">HTML, CSS, JavaScript, React</p>
            </div>

            <div className="bg-gradient-to-br from-green-900/50 to-teal-900/50 p-6 rounded-xl border border-gray-700 hover:border-green-500 transition-all duration-300 group">
              <Smartphone className="text-green-400 mb-4 group-hover:scale-110 transition-transform" size={40} />
              <h3 className="text-white font-semibold mb-2">Mobile Development</h3>
              <p className="text-gray-400 text-sm">Flutter (Learning)</p>
            </div>

            <div className="bg-gradient-to-br from-red-900/50 to-pink-900/50 p-6 rounded-xl border border-gray-700 hover:border-red-500 transition-all duration-300 group">
              <Youtube className="text-red-400 mb-4 group-hover:scale-110 transition-transform" size={40} />
              <h3 className="text-white font-semibold mb-2">Content Creation</h3>
              <p className="text-gray-400 text-sm">YouTube Channel Management</p>
            </div>

            <div className="bg-gradient-to-br from-purple-900/50 to-indigo-900/50 p-6 rounded-xl border border-gray-700 hover:border-purple-500 transition-all duration-300 group">
              <Video className="text-purple-400 mb-4 group-hover:scale-110 transition-transform" size={40} />
              <h3 className="text-white font-semibold mb-2">Video Editing</h3>
              <p className="text-gray-400 text-sm">Adobe Suite, CapCut</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;