// React ko import kar rahe hain kyunki ye component banane ke liye zaroori hai
import React from 'react'; 

// Skills naam ka ek functional component banaya ja raha hai
const Skills = () => {

  // skills naam ka ek array banaya hai jisme har skill ka naam (name), percentage level (level) 
  // aur gradient color (color) rakha gaya hai
  // Ye data hum niche UI me display karenge
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

  // Ye return part decide karta hai ki UI (screen) par kya dikhana hai
  return (
    // Section tag ka use page ke ek specific section banane ke liye hota hai
    // id="skills" ka matlab ye hai ki hum anchor link se is section tak jump kar sakte hain
    <section id="skills" className="py-20 bg-gray-800">
      {/* Container jo content ko center aur margin/padding ke sath rakhta hai */}
      <div className="container mx-auto px-6">
        
        {/* Section ka heading part */}
        <div className="text-center mb-16">
          {/* Title/heading */}
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          {/* Subtitle/description */}
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Technologies and tools I work with and continuously improve upon
          </p>
        </div>

        {/* Skills ka list part (progress bars) */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* skills array ke har element ko map() se loop karke display kar rahe hain */}
          {skills.map((skill, index) => (
            // group class hover effects ke liye hai
            <div key={index} className="group">
              
              {/* Skill name aur percentage side-by-side */}
              <div className="flex justify-between mb-2">
                <span className="text-white font-medium">{skill.name}</span>
                <span className="text-gray-400">{skill.level}%</span>
              </div>

              {/* Background bar (gray) */}
              <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                {/* Filled bar jo skill level ke hisaab se width rakhta hai */}
                <div 
                  className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out group-hover:scale-105`}
                  style={{ width: `${skill.level}%` }} // width percentage skill level ke equal
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Niche extra 3 category boxes */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          
          {/* Development box */}
          <div className="text-center p-6 bg-gradient-to-br from-blue-900/30 to-purple-900/30 rounded-xl border border-gray-700">
            <h3 className="text-2xl font-bold text-blue-400 mb-2">Development</h3>
            <p className="text-gray-400">Building modern web applications and learning mobile development with Flutter</p>
          </div>
          
          {/* Content Creation box */}
          <div className="text-center p-6 bg-gradient-to-br from-red-900/30 to-pink-900/30 rounded-xl border border-gray-700">
            <h3 className="text-2xl font-bold text-red-400 mb-2">Content Creation</h3>
            <p className="text-gray-400">Managing YouTube channel and creating engaging video content for audience</p>
          </div>
          
          {/* Video Editing box */}
          <div className="text-center p-6 bg-gradient-to-br from-purple-900/30 to-indigo-900/30 rounded-xl border border-gray-700">
            <h3 className="text-2xl font-bold text-purple-400 mb-2">Video Editing</h3>
            <p className="text-gray-400">Professional video editing using Adobe Creative Suite and modern tools</p>
          </div>
        </div>
      </div>
    </section>
  );
};

// Component ko export kar rahe hain taki dusre file me use ho sake
export default Skills;
