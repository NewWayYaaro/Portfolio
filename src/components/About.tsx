// React library ko import kar rahe hain jo UI banane ke liye use hoti hai
import React from 'react';

// 'lucide-react' se kuch icons import kar rahe hain jo design ko sundar banate hain
import { Code, Smartphone, Youtube, Video } from 'lucide-react';

// About naam ka ek React functional component bana rahe hain
const About = () => {
  return (
    // <section> ek HTML tag hai jo ek section define karta hai.
    // 'id="about"' ka matlab hai ki hum is section ko website me scroll/link ke liye target kar sakte hain.
    // className me Tailwind CSS classes di hui hain styling ke liye.
    <section id="about" className="py-20 bg-gray-900">
      {/* Container div jo content ko center me rakhta hai aur padding deta hai */}
      <div className="container mx-auto px-6">
        
        {/* Top heading and description */}
        <div className="text-center mb-16">
          {/* Heading 'About Me' jo gradient text effect ke saath styled hai */}
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            About Me
          </h2>
          {/* Short description jo heading ke niche hoti hai */}
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A passionate learner exploring the world of technology and creativity
          </p>
        </div>

        {/* Main content area jo 2 columns me divide hai - 
            Left side me text, Right side me skill cards */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Left column - personal info and journey */}
          <div className="space-y-6">
            {/* Paragraph 1 - Learning journey */}
            <p className="text-gray-300 text-lg leading-relaxed">
              I'm currently on an exciting journey learning web development and mobile app development. 
              With a strong foundation in HTML, CSS, and JavaScript, I'm expanding my skills into modern 
              frameworks and technologies.
            </p>
            
            {/* Paragraph 2 - YouTube and video editing experience */}
            <p className="text-gray-300 text-lg leading-relaxed">
              Beyond coding, I manage a YouTube channel where I share knowledge and creativity. 
              My experience in video editing with professional tools like Adobe Premier Pro, After Effects, 
              and CapCut allows me to create engaging visual content.
            </p>

            {/* Paragraph 3 - Belief in learning and creativity */}
            <p className="text-gray-300 text-lg leading-relaxed">
              I believe in continuous learning and combining technical skills with creative expression 
              to build meaningful digital experiences.
            </p>
          </div>

          {/* Right column - Skill cards in 2x2 grid */}
          <div className="grid lg:grid-cols-2 gap-6">
            
            {/* Skill Card 1 - Web Development */}
            <div className="bg-gradient-to-br from-blue-900/50 to-purple-900/50 p-6 rounded-xl border border-gray-700 hover:border-blue-500 transition-all duration-300 group">
              {/* Icon */}
              <Code className="text-blue-400 mb-4 group-hover:scale-110 transition-transform" size={40} />
              {/* Title */}
              <h3 className="text-white font-semibold mb-2">Web Development</h3>
              {/* Skill details */}
              <p className="text-gray-400 text-sm">HTML, CSS, JavaScript, React</p>
            </div>

            {/* Skill Card 2 - Mobile Development */}
            <div className="bg-gradient-to-br from-green-900/50 to-teal-900/50 p-6 rounded-xl border border-gray-700 hover:border-green-500 transition-all duration-300 group">
              <Smartphone className="text-green-400 mb-4 group-hover:scale-110 transition-transform" size={40} />
              <h3 className="text-white font-semibold mb-2">Mobile Development</h3>
              <p className="text-gray-400 text-sm">Flutter (Learning)</p>
            </div>

            {/* Skill Card 3 - Content Creation */}
            <div className="bg-gradient-to-br from-red-900/50 to-pink-900/50 p-6 rounded-xl border border-gray-700 hover:border-red-500 transition-all duration-300 group">
              <Youtube className="text-red-400 mb-4 group-hover:scale-110 transition-transform" size={40} />
              <h3 className="text-white font-semibold mb-2">Content Creation</h3>
              <p className="text-gray-400 text-sm">YouTube Channel Management</p>
            </div>

            {/* Skill Card 4 - Video Editing */}
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

// Component ko export kar rahe hain taki isse dusre files me use kiya ja sake
export default About;
