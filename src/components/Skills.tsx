import React from 'react';

const Skills = () => {
  const skills = [
    { name: 'HTML', level: 75, color: 'from-orange-500 to-red-500' },
    { name: 'CSS', level: 70, color: 'from-blue-500 to-indigo-500' },
    { name: 'JavaScript', level: 65, color: 'from-yellow-500 to-orange-500' },
    { name: 'React', level: 60, color: 'from-blue-400 to-cyan-500' },
    { name: 'Flutter', level: 40, color: 'from-blue-400 to-blue-600' },
    { name: 'Adobe Premiere Pro', level: 85, color: 'from-purple-500 to-pink-500' },
    { name: 'Adobe After Effects', level: 80, color: 'from-purple-600 to-blue-600' },
    { name: 'Adobe Animate', level: 75, color: 'from-red-500 to-pink-500' },
    { name: 'CapCut', level: 90, color: 'from-green-500 to-teal-500' },
    { name: 'YouTube Management', level: 95, color: 'from-red-500 to-red-600' },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Technologies and tools I work with and continuously improve upon
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="group">
              <div className="flex justify-between mb-2">
                <span className="text-white font-medium">{skill.name}</span>
                <span className="text-gray-400">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                <div 
                  className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out group-hover:scale-105`}
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-gradient-to-br from-blue-900/30 to-purple-900/30 rounded-xl border border-gray-700">
            <h3 className="text-2xl font-bold text-blue-400 mb-2">Development</h3>
            <p className="text-gray-400">Building modern web applications and learning mobile development with Flutter</p>
          </div>
          
          <div className="text-center p-6 bg-gradient-to-br from-red-900/30 to-pink-900/30 rounded-xl border border-gray-700">
            <h3 className="text-2xl font-bold text-red-400 mb-2">Content Creation</h3>
            <p className="text-gray-400">Managing YouTube channel and creating engaging video content for audience</p>
          </div>
          
          <div className="text-center p-6 bg-gradient-to-br from-purple-900/30 to-indigo-900/30 rounded-xl border border-gray-700">
            <h3 className="text-2xl font-bold text-purple-400 mb-2">Video Editing</h3>
            <p className="text-gray-400">Professional video editing using Adobe Creative Suite and modern tools</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;