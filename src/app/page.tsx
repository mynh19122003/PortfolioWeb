"use client";

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

  const sections = ["home", "about", "skills", "experience", "projects", "contact"];

  const projects = [
    {
      title: "Project Zomboid Server & Mod Manager",
      description:
        "A management dashboard for Project Zomboid dedicated servers, including configuration editing, Steam Workshop mod management, and RCON server control.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "SQLite", "RCON", "Steam Workshop API"],
      github: "https://github.com/mynh19122003/project-zomboid-panel",
    },
    {
      title: "AppXemPhim — Movie Streaming App",
      description:
        "A React Native movie application with category browsing, search, movie details, video playback, navigation, and REST API integration.",
      technologies: ["React Native", "TypeScript", "React Navigation", "React Native Video", "REST API"],
      github: "https://github.com/mynh19122003/AppXemPhim",
    },
    {
      title: "Photo Sharing App",
      description:
        "A full-stack photo sharing application with authentication, photo uploads, comments, user profiles, and persistent MongoDB storage.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Mongoose", "Multer"],
      github: "https://github.com/mynh19122003/photo-sharing-v1",
    },
    {
      title: "Weather App Flutter",
      description:
        "A mobile weather application inspired by Apple Weather, featuring live forecasts, dynamic weather backgrounds, saved locations, and an interactive radar map.",
      technologies: ["Flutter", "Dart", "Riverpod", "Dio", "Flutter Map", "Open-Meteo API"],
      github: "https://github.com/mynh19122003/Weather-App-Flutter",
    },
    {
      title: "TheMode Frontend",
      description:
        "A React-based frontend project featuring routing, API integration, authentication support, map integration, and a reusable component-driven interface.",
      technologies: ["React", "Ant Design", "Axios", "React Router", "Google Maps API", "Tailwind CSS"],
      github: "https://github.com/mynh19122003/DATN_TheMode-main",
    },
    {
      title: "Korean Restaurant Web Game",
      description:
        "An interactive restaurant game prototype built for the web with animated UI, sound effects, client-side state management, and responsive gameplay screens.",
      technologies: ["Next.js", "TypeScript", "Framer Motion", "Zustand", "Howler", "Tailwind CSS"],
      github: "https://github.com/mynh19122003/goc-bep-han",
    },
  ];

  const skillGroups = [
    {
      title: "Frontend",
      skills: ["React", "Next.js", "TypeScript", "JavaScript", "HTML", "CSS", "Tailwind CSS"],
    },
    {
      title: "Mobile",
      skills: ["React Native", "Flutter", "Dart", "Android", "iOS", "Firebase"],
    },
    {
      title: "Backend & Data",
      skills: ["Node.js", "Express", "PHP", "Laravel", "MySQL", "MongoDB", "REST APIs"],
    },
    {
      title: "Tools & Integration",
      skills: ["Git", "GitHub", "Vercel", "Axios", "RCON", "Google Maps API", "Steam Workshop API"],
    },
  ];

  const experience = [
    {
      role: "React Native & ReactJS Developer",
      company: "EnglishWing",
      period: "May 2022 — Dec 2023",
      highlights: [
        "Developed and maintained mobile applications for iOS and Android using React Native.",
        "Built and maintained web interfaces with ReactJS, HTML, and CSS.",
        "Integrated APIs, implemented new features, and improved application performance and user experience.",
        "Collaborated with design and product teams to deliver consistent application experiences.",
      ],
    },
    {
      role: "React Native & PHP Developer",
      company: "Hydra Cyborg",
      period: "Dec 2020 — Mar 2022",
      highlights: [
        "Developed React Native mobile applications and integrated APIs for application data.",
        "Built and maintained PHP and MySQL web applications and database-driven features.",
        "Created REST-style API endpoints for mobile and web clients.",
        "Optimized application code, SQL queries, website performance, and database operations.",
      ],
    },
  ];

  const stats = [
    { number: 3, suffix: "+", label: "Years of Professional Experience" },
    { number: 6, suffix: "", label: "Featured Projects" },
    { number: 2, suffix: "", label: "Web & Mobile Platforms" },
    { number: 4, suffix: "", label: "Core Development Areas" },
  ];

  return (
    <>
      <PageLoader />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Navigation */}
        <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-md z-50 border-b border-slate-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <h1 className="text-2xl font-bold text-white">Minh Dat</h1>
              <div className="hidden md:flex space-x-7">
                {sections.map((section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className={\`capitalize transition-colors \${
                      activeSection === section
                        ? "text-purple-400"
                        : "text-gray-300 hover:text-white"
                    }\`}
                  >
                    {section}
                  </button>
                ))}
              </div>
              <div className="md:hidden">
                <MobileMenu
                  sections={sections}
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
                    <span className="text-4xl font-bold text-white">MD</span>
                  </div>
                </div>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 gradient-text">
                Pham Ngo Minh Dat
              </h1>
              <div className="text-xl md:text-2xl text-gray-300 mb-8 h-8">
                <TypewriterEffect
                  texts={[
                    "Full-Stack Developer",
                    "React & Next.js Developer",
                    "React Native Developer",
                    "Flutter Developer",
                  ]}
                />
              </div>
              <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-12">
                Full-stack and mobile developer with professional experience building React Native,
                ReactJS, PHP, and MySQL applications. I also build modern projects with Next.js,
                TypeScript, Node.js, MongoDB, and Flutter, with a strong focus on maintainable code,
                API integration, and practical user experiences.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => scrollToSection("projects")}
                  className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
                >
                  View My Projects
                </button>
                <a
                  href="mailto:phamngominhdat1@gmail.com"
                  className="border border-purple-600 text-purple-400 hover:bg-purple-600 hover:text-white px-8 py-3 rounded-lg font-medium transition-colors"
                >
                  Contact Me
                </a>
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
                  I am a developer based in Ho Chi Minh City, Vietnam, with experience across mobile,
                  frontend, backend, and database development. My professional background includes
                  React Native, ReactJS, PHP, MySQL, API integration, and performance optimization.
                </p>
                <p className="text-gray-300 text-lg">
                  I enjoy turning product requirements into working software and continuously
                  expanding my stack through hands-on projects in Next.js, TypeScript, Node.js,
                  MongoDB, Flutter, and third-party API integrations.
                </p>
                <div className="grid grid-cols-2 gap-6 mt-8">
                  <div>
                    <h4 className="text-purple-400 font-semibold mb-2">Education</h4>
                    <p className="text-gray-300">
                      Ly Tu Trong College
                      <br />
                      Website Programming & Design
                      <br />
                      2020 — 2022
                    </p>
                  </div>
                  <div>
                    <h4 className="text-purple-400 font-semibold mb-2">Earlier Education</h4>
                    <p className="text-gray-300">
                      Bach Nghe Intermediate School
                      <br />
                      Computer Studies
                      <br />
                      2017 — 2020
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg p-8 text-center">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Open to Full-Stack, Frontend & Mobile Opportunities
                  </h3>
                  <p className="text-purple-100">
                    I am interested in teams where I can contribute to real products, strengthen my
                    engineering skills, and continue learning from experienced developers.
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
              {skillGroups.map((group) => (
                <div key={group.title} className="bg-slate-800/50 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-white mb-4">{group.title}</h3>
                  <div className="flex flex-wrap gap-3">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="bg-purple-600/20 text-purple-300 border border-purple-500/20 px-3 py-2 rounded-lg text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20 bg-slate-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Professional Experience</h2>
              <div className="w-20 h-1 bg-purple-600 mx-auto"></div>
            </div>
            <div className="space-y-8 max-w-4xl mx-auto">
              {experience.map((item) => (
                <div key={item.company} className="bg-slate-800 rounded-lg p-7 border border-slate-700">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-5">
                    <div>
                      <h3 className="text-xl font-bold text-white">{item.role}</h3>
                      <p className="text-purple-400 font-medium">{item.company}</p>
                    </div>
                    <p className="text-gray-400">{item.period}</p>
                  </div>
                  <ul className="space-y-3 text-gray-300">
                    {item.highlights.map((highlight) => (
                      <li key={highlight} className="flex gap-3">
                        <span className="text-purple-400">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Featured Projects</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Selected projects from my GitHub that demonstrate web, mobile, full-stack, and API
                integration experience.
              </p>
              <div className="w-20 h-1 bg-purple-600 mx-auto mt-4"></div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <div
                  key={project.title}
                  className="bg-slate-800 rounded-lg overflow-hidden hover:transform hover:scale-[1.02] transition-all duration-300 group border border-slate-700"
                >
                  <div className="h-40 bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center relative overflow-hidden px-6 text-center">
                    <span className="text-white text-xl font-bold relative z-10">{project.title}</span>
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all duration-300"></div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-300 mb-5">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-5">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="bg-purple-600/20 text-purple-300 px-3 py-1 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="text-purple-400 hover:text-purple-300 transition-colors inline-flex items-center gap-2"
                    >
                      <span>↗</span> View on GitHub
                    </a>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-10">
              <a
                href="https://github.com/mynh19122003"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 border border-purple-500 text-purple-300 hover:bg-purple-600 hover:text-white px-6 py-3 rounded-lg transition-colors"
              >
                View More Projects on GitHub
              </a>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-slate-800/50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
              <div className="w-20 h-1 bg-purple-600 mx-auto"></div>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-slate-800 rounded-lg p-8 border border-slate-700">
                <h3 className="text-2xl font-bold text-white mb-4">Recruitment & Collaboration</h3>
                <p className="text-gray-300 text-lg mb-6">
                  I am open to full-stack, frontend, React Native, and mobile development
                  opportunities. Feel free to contact me about a role, project, or technical
                  collaboration.
                </p>
                <a
                  href="mailto:phamngominhdat1@gmail.com"
                  className="inline-flex bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  Send Me an Email
                </a>
              </div>
              <div className="bg-slate-800 rounded-lg p-8 border border-slate-700 space-y-6">
                <div>
                  <p className="text-gray-400 mb-1">Email</p>
                  <a
                    href="mailto:phamngominhdat1@gmail.com"
                    className="text-white hover:text-purple-300 transition-colors"
                  >
                    phamngominhdat1@gmail.com
                  </a>
                </div>
                <div>
                  <p className="text-gray-400 mb-1">Phone</p>
                  <a
                    href="tel:+84775984939"
                    className="text-white hover:text-purple-300 transition-colors"
                  >
                    +84 77 598 4939
                  </a>
                </div>
                <div>
                  <p className="text-gray-400 mb-1">Location</p>
                  <p className="text-white">Ho Chi Minh City, Vietnam</p>
                </div>
                <div>
                  <p className="text-gray-400 mb-1">GitHub</p>
                  <a
                    href="https://github.com/mynh19122003"
                    target="_blank"
                    rel="noreferrer"
                    className="text-white hover:text-purple-300 transition-colors"
                  >
                    github.com/mynh19122003
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-slate-900 py-8 border-t border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-400 text-center md:text-left">
                © 2026 Pham Ngo Minh Dat. All rights reserved.
              </p>
              <div className="flex space-x-6">
                <a
                  href="https://github.com/mynh19122003"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  GitHub
                </a>
                <a
                  href="mailto:phamngominhdat1@gmail.com"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Email
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
