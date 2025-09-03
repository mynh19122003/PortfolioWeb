"use client";

import Image from "next/image";
import { useState } from "react";
import TypewriterEffect from "@/components/TypewriterEffect";
import AnimatedCounter from "@/components/AnimatedCounter";
import MobileMenu from "@/components/MobileMenu";
import PageLoader from "@/components/PageLoader";

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const projects = [
    {
      title: "E-Commerce Website",
      description: "Modern e-commerce platform built with Next.js, featuring user authentication, shopping cart, and payment integration.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe"],
      github: "https://github.com/tranhoangphuc3101",
      demo: "#"
    },
    {
      title: "Task Management App",
      description: "Collaborative task management application with real-time updates and team collaboration features.",
      technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
      github: "https://github.com/tranhoangphuc3101",
      demo: "#"
    },
    {
      title: "Weather Dashboard",
      description: "Beautiful weather dashboard with location-based forecasts and interactive charts.",
      technologies: ["Vue.js", "Chart.js", "OpenWeather API"],
      github: "https://github.com/tranhoangphuc3101",
      demo: "#"
    }
  ];

  const skills = [
    { name: "JavaScript", level: 90 },
    { name: "TypeScript", level: 85 },
    { name: "React", level: 88 },
    { name: "Next.js", level: 82 },
    { name: "Node.js", level: 80 },
    { name: "MongoDB", level: 75 },
    { name: "PostgreSQL", level: 70 },
    { name: "Tailwind CSS", level: 85 }
  ];

  const stats = [
    { number: 50, suffix: "+", label: "Projects Completed" },
    { number: 3, suffix: "+", label: "Years Experience" },
    { number: 15, suffix: "+", label: "Happy Clients" },
    { number: 99, suffix: "%", label: "Success Rate" }
  ];

  return (
    <>
      <PageLoader />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-md z-50 border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <h1 className="text-2xl font-bold text-white">Portfolio</h1>
            <div className="hidden md:flex space-x-8">
              {["home", "about", "skills", "projects", "contact"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-colors ${
                    activeSection === section
                      ? "text-purple-400"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>
            <div className="md:hidden">
              <MobileMenu 
                sections={["home", "about", "skills", "projects", "contact"]}
                activeSection={activeSection}
                onSectionClick={scrollToSection}
              />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 min-h-screen flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <div className="relative">
              <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-purple-400 to-pink-400 p-1 pulse-glow">
                <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center">
                  <span className="text-4xl font-bold text-white">TP</span>
                </div>
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 gradient-text">
              Tran Hoang Phuc
            </h1>
            <div className="text-xl md:text-2xl text-gray-300 mb-8 h-8">
              <TypewriterEffect 
                texts={[
                  "Fullstack Developer",
                  "React Specialist", 
                  "UI/UX Designer",
                  "Problem Solver"
                ]} 
              />
            </div>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-12">
              Passionate about creating beautiful, functional web applications with modern technologies.
              I love turning complex problems into simple, beautiful solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => scrollToSection("projects")}
                className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
              >
                View My Work
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="border border-purple-600 text-purple-400 hover:bg-purple-600 hover:text-white px-8 py-3 rounded-lg font-medium transition-colors"
              >
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="space-y-2">
                <div className="text-4xl md:text-5xl font-bold text-white">
                  <AnimatedCounter end={stat.number} suffix={stat.suffix} />
                </div>
                <p className="text-gray-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
            <div className="w-20 h-1 bg-purple-600 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-gray-300 text-lg">
                I'm a passionate fullstack developer with over 3 years of experience in creating
                web applications. I enjoy working with modern JavaScript frameworks and am always
                eager to learn new technologies.
              </p>
              <p className="text-gray-300 text-lg">
                When I'm not coding, you can find me exploring new technologies, contributing to
                open-source projects, or sharing knowledge with the developer community.
              </p>
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div>
                  <h4 className="text-purple-400 font-semibold mb-2">Frontend</h4>
                  <p className="text-gray-300">React, Next.js, Vue.js, TypeScript</p>
                </div>
                <div>
                  <h4 className="text-purple-400 font-semibold mb-2">Backend</h4>
                  <p className="text-gray-300">Node.js, Express, Python, PostgreSQL</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg p-8 text-center">
                <h3 className="text-2xl font-bold text-white mb-4">Let's Build Something Amazing Together</h3>
                <p className="text-purple-100">
                  I'm always excited to work on new projects and collaborate with amazing people.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Skills & Technologies</h2>
            <div className="w-20 h-1 bg-purple-600 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill) => (
              <div key={skill.name} className="bg-slate-800/50 rounded-lg p-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-white font-medium">{skill.name}</span>
                  <span className="text-purple-400">{skill.level}%</span>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-purple-600 to-pink-600 h-2 rounded-full transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Featured Projects</h2>
            <div className="w-20 h-1 bg-purple-600 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-slate-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300 group">
                <div className="h-48 bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center relative overflow-hidden">
                  <span className="text-white text-xl font-bold">{project.title}</span>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="bg-purple-600/20 text-purple-400 px-3 py-1 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      className="text-purple-400 hover:text-purple-300 transition-colors flex items-center gap-1"
                    >
                      <span>📁</span> GitHub
                    </a>
                    <a
                      href={project.demo}
                      className="text-purple-400 hover:text-purple-300 transition-colors flex items-center gap-1"
                    >
                      <span>🚀</span> Live Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
            <div className="w-20 h-1 bg-purple-600 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Let's talk about your project</h3>
                <p className="text-gray-300 text-lg mb-8">
                  I'm always interested in new opportunities and interesting projects.
                  Whether you have a question or just want to say hi, feel free to reach out!
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center">
                    <span className="text-white">📧</span>
                  </div>
                  <div>
                    <p className="text-gray-400">Email</p>
                    <p className="text-white">tranhoangphuc3101@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center">
                    <span className="text-white">📱</span>
                  </div>
                  <div>
                    <p className="text-gray-400">Phone</p>
                    <p className="text-white">+84 123 456 789</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center">
                    <span className="text-white">📍</span>
                  </div>
                  <div>
                    <p className="text-gray-400">Location</p>
                    <p className="text-white">Ho Chi Minh City, Vietnam</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-slate-800/50 rounded-lg p-8">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-gray-300 mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Message</label>
                  <textarea
                    rows={5}
                    className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors resize-none"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-medium transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-8 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-center md:text-left">
              © 2025 Tran Hoang Phuc. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="https://github.com/tranhoangphuc3101" className="text-gray-400 hover:text-white transition-colors">
                GitHub
              </a>
              <a href="https://linkedin.com/in/tranhoangphuc3101" className="text-gray-400 hover:text-white transition-colors">
                LinkedIn
              </a>
              <a href="https://twitter.com/tranhoangphuc3101" className="text-gray-400 hover:text-white transition-colors">
                Twitter
              </a>
            </div>
          </div>
        </div>
      </footer>
      </div>
    </>
  );
}
