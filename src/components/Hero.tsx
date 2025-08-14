// React se required features import kar rahe hain
import React, { useEffect, useRef } from 'react';
// Lucide-react se social media icons import kar rahe hain
import { Github, Linkedin, Youtube, Mail } from 'lucide-react';

const Hero = () => {
  // particlesRef ek reference banata hai jisse hum HTML element ko directly access kar sakte hain
  const particlesRef = useRef<HTMLDivElement>(null);

  // useEffect ka matlab hai: component load hone ke baad yeh code run hoga
  useEffect(() => {
    const particlesContainer = particlesRef.current;
    if (!particlesContainer) return; // agar container nahi mila to kuch mat karo

    const particleCount = 40; // total kitne particle banane hain
    const particles: HTMLDivElement[] = [];

    // Particle create karna
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div'); // ek div bana rahe hain particle ke liye
      particle.className = 'particle'; // CSS class set ki
      particle.style.left = `${Math.random() * 100}%`; // random X position
      particle.style.top = `${Math.random() * 100}%`; // random Y position
      particle.style.animationDuration = `${5 + Math.random() * 10}s`; // har particle ki animation speed alag
      particle.style.animationDelay = `${Math.random() * 10}s`; // har particle ki start timing alag
      particlesContainer.appendChild(particle); // particle ko page me add kiya
      particles.push(particle); // list me save kiya taki baad me remove kar sake
    }

    // Cleanup function — jab component remove hoga tab particles hata dega
    return () => {
      particles.forEach(p => particlesContainer.removeChild(p));
    };
  }, []);

  return (
    // Section ka main container — puri screen cover karega
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden"
    >
      {/* Background me color changing blobs */}
      <div className="absolute -top-48 -left-48 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute top-20 right-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob animation-delay-4000"></div>
      <div className="absolute bottom-20 left-24 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>

      {/* Yeh particles wale div ka reference particlesRef me store hai */}
      <div ref={particlesRef} className="particles absolute inset-0 pointer-events-none"></div>

      {/* Main text content */}
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fadeInUp">
          {/* Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="font-serif bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent bg-[length:200%_200%] animate-gradient-blink">
              Creative Developer
            </span>
          </h1>

          {/* Short intro */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Web Developer | Flutter Enthusiast | YouTube Creator | Video Editor
          </p>

          {/* Description about yourself */}
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
            Passionate about creating amazing digital experiences through code and visual storytelling. Currently learning modern web
            technologies and mobile development.
          </p>

          {/* Buttons */}
          <div className="flex justify-center space-x-6 mb-12">
            <a
              href="#contact"
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-full font-medium hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Get In Touch
            </a>
            <a
              href="#projects"
              className="border-2 border-blue-500 text-blue-400 px-8 py-3 rounded-full font-medium hover:bg-blue-500 hover:text-white transition-all duration-300"
            >
              View Work
            </a>
          </div>

          {/* Social media icons */}
          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/NewWayYaaro"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transform hover:scale-110 transition-all duration-300"
            >
              <Github size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-400 transform hover:scale-110 transition-all duration-300">
              <Linkedin size={24} />
            </a>
            <a
              href="https://www.youtube.com/@bekskitchenhub"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-red-400 transform hover:scale-110 transition-all duration-300"
            >
              <Youtube size={24} />
            </a>
            <a
              href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=newwayyaaro@gmail.com&su=Portfolio%20Inquiry&body=Hi%20Anuj,%0AI%20visited%20your%20portfolio%20and%20wanted%20to%20connect."
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-green-400 transform hover:scale-110 transition-all duration-300"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* CSS animations and styles */}
      <style>{`
  /* Blob animation (shape change hota rahega) */
  .animate-blob {
    animation: blob 7s infinite;
  }
  .animation-delay-2000 {
    animation-delay: 2s;
  }
  .animation-delay-4000 {
    animation-delay: 4s;
  }
  @keyframes blob {
    0%,
    100% {
      border-radius: 40% 60% 60% 40% / 60% 40% 60% 40%;
      transform: translate(0px, 0px) scale(1);
    }
    33% {
      border-radius: 60% 40% 40% 60% / 50% 60% 40% 60%;
      transform: translate(30px, -20px) scale(1.1);
    }
    66% {
      border-radius: 50% 50% 70% 30% / 60% 50% 60% 50%;
      transform: translate(-20px, 20px) scale(0.9);
    }
  }

  /* Particles ka style (chhote dots) */
  .particles div.particle {
    position: absolute;
    width: 6px;
    height: 6px;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 50%;
    animation-name: float;
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
    animation-direction: alternate;
  }

  /* Particle floating animation */
  @keyframes float {
    0% {
      transform: translateY(0) translateX(0);
    }
    100% {
      transform: translateY(-15px) translateX(10px);
    }
  }
`}</style>

    </section>
  );
};

export default Hero;
