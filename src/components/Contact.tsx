// React aur useState hook ko import kar rahe hain
// useState ka use data store karne ke liye hota hai jo component ke andar change ho sakta hai
import React, { useState } from 'react';

// 'lucide-react' se icons import kar rahe hain jo UI me dikhane ke liye use honge
import { Mail, Phone, MapPin, Send } from 'lucide-react';

// Contact naam ka ek functional component banaya
const Contact = () => {
  // formData ek state hai jisme form ke saare fields ka data rakha jaata hai
  const [formData, setFormData] = useState({
    name: '',     // user ka naam
    email: '',    // user ka email
    subject: '',  // message ka subject
    message: ''   // main message
  });

  // handleChange function har input ke change par call hota hai
  // Ye state ko update karta hai, taki har input ka latest value formData me store rahe
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,              // purana data rakho
      [e.target.name]: e.target.value // jis field me type hua hai, uska value update karo
    });
  };

  // handleSubmit form submit hone par call hota hai
const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
  e.preventDefault();

  try {
    const res = await fetch("http://localhost:4000/send-mail", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (!res.ok) {
      const errText = await res.text();
      throw new Error(`HTTP error ${res.status}: ${errText}`);
    }

    const data: { success: boolean; message?: string } = await res.json();

    if (data.success) {
      alert("✅ Email sent successfully!");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } else {
      throw new Error(data.message || "Unknown error while sending email");
    }
  } catch (error) {
    console.error("Error sending email:", error);
    alert("❌ Failed to send email: " + (error as Error).message);
  }

  // 
};

  return (
    // Section: pura Contact form ka main wrapper
    <section id="contact" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        
        {/* Heading and small description */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Let's collaborate on your next project or discuss opportunities
          </p>
        </div>

        {/* 2 column layout - Left side: contact info, Right side: form */}
        <div className="grid md:grid-cols-2 gap-12">

          {/* LEFT SIDE - Contact info and description */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Let's Connect</h3>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                I'm always excited to work on new projects and collaborate with fellow developers and creators. 
                Whether you need help with web development, video editing, or content creation, let's discuss how we can work together.
              </p>
            </div>

            {/* Contact info list with icons */}
            <div className="space-y-6">

              {/* Email block */}
              <div className="flex items-center space-x-4 group">
                <div className="bg-blue-500/20 p-3 rounded-lg group-hover:bg-blue-500/30 transition-colors">
                  <Mail className="text-blue-400" size={24} /> {/* Email icon */}
                </div>
                <div>
                  <h4 className="text-white font-medium">Email</h4>
                  <p className="text-gray-400">newwayyaaro@gmail.com</p>
                </div>
              </div>

              {/* Phone block */}
              <div className="flex items-center space-x-4 group">
                <div className="bg-green-500/20 p-3 rounded-lg group-hover:bg-green-500/30 transition-colors">
                  <Phone className="text-green-400" size={24} /> {/* Phone icon */}
                </div>
                <div>
                  <h4 className="text-white font-medium">Phone</h4>
                  <p className="text-gray-400">+91 9559735829</p>
                </div>
              </div>

              {/* Location block */}
              <div className="flex items-center space-x-4 group">
                <div className="bg-purple-500/20 p-3 rounded-lg group-hover:bg-purple-500/30 transition-colors">
                  <MapPin className="text-purple-400" size={24} /> {/* Location icon */}
                </div>
                <div>
                  <h4 className="text-white font-medium">Location</h4>
                  <p className="text-gray-400">India</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE - Contact form */}
          <div className="bg-gray-900 p-8 rounded-xl border border-gray-700">
            {/* Form start */}
            <form onSubmit={handleSubmit} className="space-y-6">

              {/* Name and Email inputs side-by-side on large screen */}
              <div className="grid md:grid-cols-2 gap-6">
                {/* Name input */}
                <div>
                  <label htmlFor="name" className="block text-white font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="Your name"
                  />
                </div>

                {/* Email input */}
                <div>
                  <label htmlFor="email" className="block text-white font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              {/* Subject input */}
              <div>
                <label htmlFor="subject" className="block text-white font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="Project discussion"
                />
              </div>

              {/* Message textarea */}
              <div>
                <label htmlFor="message" className="block text-white font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              {/* Submit button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-lg font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2 group"
              >
                {/* Send icon */}
                <Send className="group-hover:translate-x-1 transition-transform" size={20} />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

// Component ko export kar rahe hain taki dusri files me use ho sake
export default Contact;
