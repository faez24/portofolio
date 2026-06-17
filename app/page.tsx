"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import ImageSlider from "./components/ImageSlider";
import Typewriter from "./components/Typewriter";
import AnimateOnScroll from "./components/AnimateOnScroll";

export default function Home() {
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-30% 0px -70% 0px" }
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0a0a] text-zinc-900 dark:text-zinc-50 font-sans selection:bg-teal-500 selection:text-white relative">
      
      {/* Dynamic Ambient Background */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden flex justify-center">
        {/* Subtle Tech Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        
        {/* Ambient Glowing Orbs */}
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-teal-500/10 dark:bg-teal-500/5 blur-[100px] rounded-full animate-pulse" style={{ animationDuration: '7s' }}></div>
        <div className="absolute top-[20%] -left-40 w-[500px] h-[500px] bg-blue-500/10 dark:bg-blue-500/5 blur-[120px] rounded-full animate-pulse" style={{ animationDuration: '10s' }}></div>
        <div className="absolute bottom-10 -right-40 w-[600px] h-[600px] bg-emerald-500/10 dark:bg-emerald-500/5 blur-[120px] rounded-full animate-pulse" style={{ animationDuration: '8s' }}></div>
      </div>

      {/* Main Content Wrapper */}
      <div className="relative z-10">
        {/* Navigation */}
        <nav className="fixed w-full z-50 bg-white/80 dark:bg-[#0a0a0a]/80 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800/50">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="text-xl font-bold tracking-tighter">Faizrashid.</span>
          <div className="hidden md:flex gap-8 text-sm font-medium text-zinc-600 dark:text-zinc-400">
            {["about", "skills", "credentials", "projects", "contact"].map((section) => (
              <a
                key={section}
                href={`#${section}`}
                className={`relative group capitalize transition-colors ${
                  activeSection === section
                    ? "text-teal-600 dark:text-teal-400 font-bold"
                    : "hover:text-zinc-900 dark:hover:text-white"
                }`}
              >
                {section}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-teal-500 transition-all ${
                    activeSection === section ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </a>
            ))}
          </div>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-6 pt-32 pb-24">
        {/* Hero Section */}
        <section id="hero" className="py-20 flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          <div className="flex-1 flex flex-col items-start text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 dark:bg-teal-500/10 text-teal-600 dark:text-teal-400 text-sm font-medium mb-6 border border-teal-100 dark:border-teal-500/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
              </span>
              Available for work (Surabaya Area)
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight mb-2">
              Hi, I'm <span className="text-teal-600 dark:text-teal-400">Faizrashid Daffa.</span>
            </h1>
            <div className="h-10 md:h-14 mb-6 flex items-center md:items-start justify-center md:justify-start text-2xl md:text-4xl font-bold text-zinc-700 dark:text-zinc-300">
              <span className="mr-3">A</span>
              <Typewriter words={['Software Engineer', 'Full Stack Developer', 'IoT Developer', 'Networking Admin']} typingSpeed={100} deletingSpeed={50} delayBeforeDelete={2000} />
            </div>
            <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mb-10 leading-relaxed">
              Passionate about building robust web applications, exploring Artificial Intelligence, and developing hardware-connected IoT solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <a href="#projects" className="px-6 py-3 rounded-lg bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-medium hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors text-center">
                View My Work
              </a>
              <a href="#contact" className="px-6 py-3 rounded-lg border border-zinc-200 dark:border-zinc-800 font-medium hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors text-center">
                Contact Me
              </a>
            </div>
          </div>
          
          <div className="w-56 h-56 md:w-72 md:h-72 relative rounded-full overflow-hidden border-4 border-zinc-100 dark:border-zinc-800 shadow-2xl flex-shrink-0">
            <Image 
              src="/images/PASFOTO.jpg" 
              alt="Faizrashid Daffa Suwarno Putra" 
              fill 
              className="object-cover object-top"
              priority 
            />
          </div>
        </section>

        {/* Experience & Education Section */}
        <section id="about" className="py-20 border-t border-zinc-200 dark:border-zinc-800/50">
          <AnimateOnScroll animation="fade-up">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Work Experience */}
            <div>
              <h2 className="text-2xl font-bold tracking-tight mb-8 flex items-center gap-3">
                <div className="p-2 bg-teal-50 dark:bg-teal-500/10 text-teal-600 dark:text-teal-400 rounded-lg">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                Work Experience
              </h2>
              <div className="relative pl-8 border-l-2 border-zinc-200 dark:border-zinc-800 pb-8">
                <span className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-teal-500 ring-4 ring-white dark:ring-[#0a0a0a]"></span>
                <h3 className="text-xl font-bold">Software Engineer</h3>
                <p className="text-teal-600 dark:text-teal-400 font-medium mb-1">Telkomsel</p>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-4">Currently working</p>
                <ul className="list-disc list-outside ml-4 space-y-2 text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  <li>Built and maintained Blanjapoin.id, Tokodigi.id, admin.tokodigi.id, and rafi.tokodigi.id</li>
                  <li>Developed an AI-powered customer verification system utilizing FastAPI, InsightFace, OpenAI API, and Docker</li>
                  <li>Managed production Linux VPS infrastructure, Nginx configuration, SSL, and Docker deployments</li>
                </ul>
              </div>

              <div className="relative pl-8 border-l-2 border-zinc-200 dark:border-zinc-800 pb-8">
                <span className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-zinc-300 dark:bg-zinc-700 ring-4 ring-white dark:ring-[#0a0a0a]"></span>
                <h3 className="text-xl font-bold">Internship IT App Developer</h3>
                <p className="text-zinc-900 dark:text-zinc-200 font-medium mb-1">CV. DBKlik</p>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-4">Past Experience</p>
                <ul className="list-disc list-outside ml-4 space-y-2 text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  <li>Served as a Full Stack Developer on the Internal Product Portal</li>
                  <li>Served as a Front End Developer for the DBDev platform</li>
                </ul>
              </div>

              <div className="relative pl-8 border-l-2 border-zinc-200 dark:border-zinc-800">
                <span className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-zinc-300 dark:bg-zinc-700 ring-4 ring-white dark:ring-[#0a0a0a]"></span>
                <h3 className="text-xl font-bold">Internship Website Developer</h3>
                <p className="text-zinc-900 dark:text-zinc-200 font-medium mb-1">Telkomsel</p>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-4">Past Experience</p>
                <ul className="list-disc list-outside ml-4 space-y-2 text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  <li>Worked as a Full Stack Developer for the Blanjapoin system</li>
                  <li>Worked as a Front End Developer for the .travelling portal</li>
                </ul>
              </div>
            </div>

            {/* Education */}
            <div>
              <h2 className="text-2xl font-bold tracking-tight mb-8 flex items-center gap-3">
                <div className="p-2 bg-teal-50 dark:bg-teal-500/10 text-teal-600 dark:text-teal-400 rounded-lg">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14v6" /></svg>
                </div>
                Education
              </h2>
              <div className="relative pl-8 border-l-2 border-zinc-200 dark:border-zinc-800">
                <span className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-zinc-300 dark:bg-zinc-700 ring-4 ring-white dark:ring-[#0a0a0a]"></span>
                <h3 className="text-xl font-bold">Undergraduate Student</h3>
                <p className="text-zinc-900 dark:text-zinc-200 font-medium mb-1">Electronic Engineering Polytechnic Institute of Surabaya (PENS)</p>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-4">2022 - 2026</p>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  Currently pursuing my degree, building a strong foundation in computer science, software engineering, and Internet of Things (IoT).
                </p>
              </div>
            </div>
            </div>
          </AnimateOnScroll>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 border-t border-zinc-200 dark:border-zinc-800/50">
          <AnimateOnScroll animation="fade-up">
            <div className="bg-zinc-50 dark:bg-[#111] rounded-3xl p-8 md:p-12 border border-zinc-200 dark:border-zinc-800/50">
            <h2 className="text-3xl font-bold tracking-tight mb-8">Skills & Technologies</h2>
            
            <div className="space-y-8">
              {/* Languages */}
              <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4 md:gap-8 items-start">
                <h3 className="text-sm font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider pt-2">Languages</h3>
                <div className="flex flex-wrap gap-3">
                  {['PHP', 'Python', 'JavaScript', 'TypeScript'].map(skill => (
                    <span key={skill} className="px-4 py-2 rounded-lg text-sm font-medium bg-white dark:bg-[#1a1a1a] border border-zinc-200 dark:border-zinc-800 text-zinc-800 dark:text-zinc-300 shadow-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Frameworks */}
              <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4 md:gap-8 items-start">
                <h3 className="text-sm font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider pt-2">Frameworks</h3>
                <div className="flex flex-wrap gap-3">
                  {['Laravel', 'Slim PHP', 'FastAPI', 'Bootstrap', 'Tailwind CSS', 'Alpine JS', 'Next JS', 'React JS'].map(skill => (
                    <span key={skill} className="px-4 py-2 rounded-lg text-sm font-medium bg-white dark:bg-[#1a1a1a] border border-zinc-200 dark:border-zinc-800 text-zinc-800 dark:text-zinc-300 shadow-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Infrastructure */}
              <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4 md:gap-8 items-start">
                <h3 className="text-sm font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider pt-2">Infrastructure</h3>
                <div className="flex flex-wrap gap-3">
                  {['Docker', 'Git', 'Linux', 'Nginx', 'VPS', 'SSL', 'AWS'].map(skill => (
                    <span key={skill} className="px-4 py-2 rounded-lg text-sm font-medium bg-white dark:bg-[#1a1a1a] border border-zinc-200 dark:border-zinc-800 text-zinc-800 dark:text-zinc-300 shadow-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Databases */}
              <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4 md:gap-8 items-start">
                <h3 className="text-sm font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider pt-2">Databases</h3>
                <div className="flex flex-wrap gap-3">
                  {['MySQL', 'Firebase'].map(skill => (
                    <span key={skill} className="px-4 py-2 rounded-lg text-sm font-medium bg-white dark:bg-[#1a1a1a] border border-zinc-200 dark:border-zinc-800 text-zinc-800 dark:text-zinc-300 shadow-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* AI & IOT */}
              <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4 md:gap-8 items-start">
                <h3 className="text-sm font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider pt-2">AI & IOT</h3>
                <div className="flex flex-wrap gap-3">
                  {['OpenAI API', 'InsightFace', 'Machine Learning', 'Deep Learning', 'LoRa', 'ESP32', 'Raspberry Pi', 'Firebase'].map(skill => (
                    <span key={skill} className="px-4 py-2 rounded-lg text-sm font-medium bg-white dark:bg-[#1a1a1a] border border-zinc-200 dark:border-zinc-800 text-zinc-800 dark:text-zinc-300 shadow-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Design */}
              <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4 md:gap-8 items-start">
                <h3 className="text-sm font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider pt-2">Design</h3>
                <div className="flex flex-wrap gap-3">
                  {['Figma', 'UI/UX'].map(skill => (
                    <span key={skill} className="px-4 py-2 rounded-lg text-sm font-medium bg-white dark:bg-[#1a1a1a] border border-zinc-200 dark:border-zinc-800 text-zinc-800 dark:text-zinc-300 shadow-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            </div>
          </AnimateOnScroll>
        </section>

        {/* Credentials & Certifications Section */}
        <section id="credentials" className="py-20 border-t border-zinc-200 dark:border-zinc-800/50">
          <AnimateOnScroll animation="fade-up">
          <h2 className="text-3xl font-bold tracking-tight mb-10">Credentials & Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            
            {/* Cert 1: Telkomsel */}
            <div className="flex items-center gap-4 p-4 rounded-2xl bg-zinc-50 dark:bg-[#111] border border-zinc-200 dark:border-zinc-800/80 hover:border-teal-500/50 transition-colors">
              <div className="w-12 h-12 flex-shrink-0 bg-white rounded-xl flex items-center justify-center shadow-sm border border-zinc-100 dark:border-zinc-800 relative overflow-hidden p-1.5">
                <div className="relative w-full h-full">
                  <Image src="/images/telkomsel.jpg" alt="Telkomsel" fill className="object-contain" />
                </div>
              </div>
              <div>
                <h3 className="font-bold text-sm text-zinc-900 dark:text-zinc-100 leading-tight mb-1">Internship Certificate</h3>
                <p className="text-xs text-zinc-500 dark:text-zinc-400">PT Telekomunikasi Selular (Telkomsel)</p>
              </div>
            </div>

            {/* Cert 2: DBKlik */}
            <div className="flex items-center gap-4 p-4 rounded-2xl bg-zinc-50 dark:bg-[#111] border border-zinc-200 dark:border-zinc-800/80 hover:border-teal-500/50 transition-colors">
              <div className="w-12 h-12 flex-shrink-0 bg-white rounded-xl flex items-center justify-center shadow-sm border border-zinc-100 dark:border-zinc-800 relative overflow-hidden p-1.5">
                <div className="relative w-full h-full">
                  <Image src="/images/dbklik.jpg" alt="DBKlik" fill className="object-contain" />
                </div>
              </div>
              <div>
                <h3 className="font-bold text-sm text-zinc-900 dark:text-zinc-100 leading-tight mb-1">Internship Certificate</h3>
                <p className="text-xs text-zinc-500 dark:text-zinc-400">CV. DBKlik</p>
              </div>
            </div>

            {/* Cert 3: PEPT PENS */}
            <div className="flex items-center gap-4 p-4 rounded-2xl bg-zinc-50 dark:bg-[#111] border border-zinc-200 dark:border-zinc-800/80 hover:border-teal-500/50 transition-colors">
              <div className="w-12 h-12 flex-shrink-0 bg-white rounded-xl flex items-center justify-center shadow-sm border border-zinc-100 dark:border-zinc-800 relative overflow-hidden p-1.5">
                <div className="relative w-full h-full">
                  <Image src="/images/pens.jpg" alt="PENS" fill className="object-contain" />
                </div>
              </div>
              <div>
                <h3 className="font-bold text-sm text-zinc-900 dark:text-zinc-100 leading-tight mb-1">PENS English Proficiency Test (PEPT)</h3>
                <p className="text-xs text-zinc-500 dark:text-zinc-400">PENS — Score 479</p>
              </div>
            </div>

            {/* Cert 4: Digital Talent */}
            <div className="flex items-center gap-4 p-4 rounded-2xl bg-zinc-50 dark:bg-[#111] border border-zinc-200 dark:border-zinc-800/80 hover:border-teal-500/50 transition-colors">
              <div className="w-12 h-12 flex-shrink-0 bg-white rounded-xl flex items-center justify-center shadow-sm border border-zinc-100 dark:border-zinc-800 relative overflow-hidden p-1.5">
                <div className="relative w-full h-full">
                  <Image src="/images/digital talent.png" alt="Digital Talent" fill className="object-contain" />
                </div>
              </div>
              <div>
                <h3 className="font-bold text-sm text-zinc-900 dark:text-zinc-100 leading-tight mb-1">VSGA Junior Networking Admin</h3>
                <p className="text-xs text-zinc-500 dark:text-zinc-400">Digital Talent Scholarship</p>
              </div>
            </div>

          </div>
          </AnimateOnScroll>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 border-t border-zinc-200 dark:border-zinc-800/50">
          <AnimateOnScroll animation="fade-up">
          <h2 className="text-3xl font-bold tracking-tight mb-10">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Project Card 1: Blanjapoin */}
            <div className="group rounded-2xl border border-zinc-200 dark:border-zinc-800 overflow-hidden bg-zinc-50 dark:bg-[#111] hover:border-teal-500/50 transition-colors">
              <div className="aspect-video bg-zinc-200 dark:bg-[#1a1a1a] relative overflow-hidden">
                <ImageSlider 
                  images={[
                    "/images/blanjapoin1.png",
                    "/images/blanjapoin2.png"
                  ]}
                  altPrefix="Blanjapoin"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Blanjapoin</h3>
                <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-4 leading-relaxed">
                  An official Telkomsel platform for redeeming loyalty points for available rewards. This website is fully integrated with the MyTelkomsel ecosystem.
                </p>
                <div className="flex gap-2 flex-wrap">
                  <span className="px-2 py-1 text-xs font-medium bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-md">Laravel</span>
                  <span className="px-2 py-1 text-xs font-medium bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-md">PHP</span>
                  <span className="px-2 py-1 text-xs font-medium bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-md">MySQL</span>
                  <span className="px-2 py-1 text-xs font-medium bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-md">Tailwind CSS</span>
                </div>
              </div>
            </div>

            {/* Project Card 2: Online Travel */}
            <div className="group rounded-2xl border border-zinc-200 dark:border-zinc-800 overflow-hidden bg-zinc-50 dark:bg-[#111] hover:border-teal-500/50 transition-colors">
              <div className="aspect-video bg-zinc-200 dark:bg-[#1a1a1a] relative overflow-hidden">
                <ImageSlider 
                  images={[
                    "/images/travel1.png",
                    "/images/travel2.png",
                    "/images/travel3.png",
                    "/images/travel4.png"
                  ]}
                  altPrefix="Online Travel"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">.travelling</h3>
                <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-4 leading-relaxed">
                  A dedicated portal named <strong className="text-zinc-900 dark:text-zinc-200">.travelling</strong>, designed specifically for Telkomsel employees to facilitate and manage official business trips and out-of-town work assignments.
                </p>
                <div className="flex gap-2 flex-wrap">
                  <span className="px-2 py-1 text-xs font-medium bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-md">Laravel</span>
                  <span className="px-2 py-1 text-xs font-medium bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-md">PHP</span>
                  <span className="px-2 py-1 text-xs font-medium bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-md">MySQL</span>
                  <span className="px-2 py-1 text-xs font-medium bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-md">Tailwind CSS</span>
                </div>
              </div>
            </div>

            {/* Project Card 3: DBDev */}
            <div className="group rounded-2xl border border-zinc-200 dark:border-zinc-800 overflow-hidden bg-zinc-50 dark:bg-[#111] hover:border-teal-500/50 transition-colors">
              <div className="aspect-video bg-zinc-200 dark:bg-[#1a1a1a] relative overflow-hidden">
                <ImageSlider 
                  images={[
                    "/images/dbdev_1.png",
                    "/images/dbdev_2.png",
                    "/images/dbdev_3.png"
                  ]}
                  altPrefix="DBDev"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">DBDev Agency</h3>
                <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-4 leading-relaxed">
                  A web development agency platform under DBKlik, offering professional website creation and software development services to clients.
                </p>
                <div className="flex gap-2 flex-wrap">
                  <span className="px-2 py-1 text-xs font-medium bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-md">Laravel</span>
                  <span className="px-2 py-1 text-xs font-medium bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-md">PHP</span>
                  <span className="px-2 py-1 text-xs font-medium bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-md">MySQL</span>
                  <span className="px-2 py-1 text-xs font-medium bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-md">Tailwind CSS</span>
                </div>
              </div>
            </div>

            {/* Project Card 4: Product Portal */}
            <div className="group rounded-2xl border border-zinc-200 dark:border-zinc-800 overflow-hidden bg-zinc-50 dark:bg-[#111] hover:border-teal-500/50 transition-colors">
              <div className="aspect-video bg-zinc-200 dark:bg-[#1a1a1a] relative overflow-hidden">
                <ImageSlider 
                  images={[
                    "/images/portal1.png",
                    "/images/portal2.png"
                  ]}
                  altPrefix="Product Portal"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Internal Product Portal</h3>
                <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-4 leading-relaxed">
                  An internal portal for DBKlik serving as the central pipeline for all products. It handles comprehensive product management including discounts, distribution, promo settings, and stock tracking. Developed in close collaboration with the accounting and warehouse teams to ensure seamless distribution to customers.
                </p>
                <div className="flex gap-2 flex-wrap">
                  <span className="px-2 py-1 text-xs font-medium bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-md">Laravel</span>
                  <span className="px-2 py-1 text-xs font-medium bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-md">PHP</span>
                  <span className="px-2 py-1 text-xs font-medium bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-md">MySQL</span>
                  <span className="px-2 py-1 text-xs font-medium bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-md">Tailwind CSS</span>
                </div>
              </div>
            </div>

            <div 
              className={`col-span-1 md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8 overflow-hidden transition-all duration-1000 ease-in-out ${
                showAllProjects ? "max-h-[5000px] opacity-100 mt-0" : "max-h-0 opacity-0 -mt-8 pointer-events-none"
              }`}
            >
                {/* Project Card 5: TokoDigi */}
            <div className="group rounded-2xl border border-zinc-200 dark:border-zinc-800 overflow-hidden bg-zinc-50 dark:bg-[#111] hover:border-teal-500/50 transition-colors">
              <div className="aspect-video bg-zinc-200 dark:bg-[#1a1a1a] relative overflow-hidden">
                <ImageSlider 
                  images={[
                    "/images/tokodigi1.png",
                    "/images/tokodigi2.png"
                  ]}
                  altPrefix="TokoDigi"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">TokoDigi</h3>
                <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-4 leading-relaxed">
                  An official Telkomsel digital marketplace consisting of both a public storefront (tokodigi.id) and a comprehensive internal admin panel. It handles product listings, user orders, and a complete administrative dashboard for operations.
                </p>
                <div className="flex gap-2 flex-wrap">
                  <span className="px-2 py-1 text-xs font-medium bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-md">Laravel</span>
                  <span className="px-2 py-1 text-xs font-medium bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-md">PHP</span>
                  <span className="px-2 py-1 text-xs font-medium bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-md">MySQL</span>
                  <span className="px-2 py-1 text-xs font-medium bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-md">Tailwind CSS</span>
                </div>
              </div>
            </div>

            {/* Project Card 6: RAFI */}
            <div className="group rounded-2xl border border-zinc-200 dark:border-zinc-800 overflow-hidden bg-zinc-50 dark:bg-[#111] hover:border-teal-500/50 transition-colors">
              <div className="aspect-video bg-zinc-200 dark:bg-[#1a1a1a] relative overflow-hidden">
                <ImageSlider 
                  images={[
                    "/images/rafi.png"
                  ]}
                  altPrefix="RAFI Souvenir"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">RAFI Souvenir Redemption</h3>
                <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-4 leading-relaxed">
                  A dedicated redemption platform (rafi.tokodigi.id) created specifically for Telkomsel customers to easily claim and redeem exclusive souvenirs during the Ramadan 2026 period.
                </p>
                <div className="flex gap-2 flex-wrap">
                  <span className="px-2 py-1 text-xs font-medium bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-md">Laravel</span>
                  <span className="px-2 py-1 text-xs font-medium bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-md">PHP</span>
                  <span className="px-2 py-1 text-xs font-medium bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-md">MySQL</span>
                  <span className="px-2 py-1 text-xs font-medium bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-md">Tailwind CSS</span>
                </div>
              </div>
            </div>

            {/* Project Card 7: KuotaUmroh */}
            <div className="group rounded-2xl border border-zinc-200 dark:border-zinc-800 overflow-hidden bg-zinc-50 dark:bg-[#111] hover:border-teal-500/50 transition-colors">
              <div className="aspect-video bg-zinc-200 dark:bg-[#1a1a1a] relative overflow-hidden">
                <ImageSlider 
                  images={[
                    "/images/kuotaumroh1.png",
                    "/images/kuotaumroh2.png"
                  ]}
                  altPrefix="KuotaUmroh"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">KuotaUmroh</h3>
                <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-4 leading-relaxed">
                  An online platform dedicated to selling roaming data packages for Hajj and Umrah pilgrims. It fully supports transactions and network integration for 6 major SIM card providers in Indonesia.
                </p>
                <div className="flex gap-2 flex-wrap">
                  <span className="px-2 py-1 text-xs font-medium bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-md">Laravel</span>
                  <span className="px-2 py-1 text-xs font-medium bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-md">PHP</span>
                  <span className="px-2 py-1 text-xs font-medium bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-md">MySQL</span>
                  <span className="px-2 py-1 text-xs font-medium bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-md">Tailwind CSS</span>
                </div>
              </div>
            </div>

            {/* Project Card 8: Water Quality */}
            <div className="group rounded-2xl border border-zinc-200 dark:border-zinc-800 overflow-hidden bg-zinc-50 dark:bg-[#111] hover:border-teal-500/50 transition-colors">
              <div className="aspect-video bg-zinc-200 dark:bg-[#1a1a1a] relative overflow-hidden">
                <ImageSlider 
                  images={[
                    "/images/water.png"
                  ]}
                  altPrefix="Water Quality"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Water Quality Monitoring</h3>
                <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-4 leading-relaxed">
                  My university final project focused on agricultural technology. It is a real-time water quality monitoring system for irrigation that connects directly to a custom IoT device built with Raspberry Pi Zero and Arduino Pro Mini, utilizing Firebase for real-time data sync.
                </p>
                <div className="flex gap-2 flex-wrap">
                  <span className="px-2 py-1 text-xs font-medium bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-md">Laravel</span>
                  <span className="px-2 py-1 text-xs font-medium bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-md">PHP</span>
                  <span className="px-2 py-1 text-xs font-medium bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-md">Firebase</span>
                  <span className="px-2 py-1 text-xs font-medium bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-md">IoT (Arduino/RasPi)</span>
                  <span className="px-2 py-1 text-xs font-medium bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-md">Python</span>
                </div>
              </div>
            </div>

            {/* Project Card 9: ScanIMEI */}
            <div className="group rounded-2xl border border-zinc-200 dark:border-zinc-800 overflow-hidden bg-zinc-50 dark:bg-[#111] hover:border-teal-500/50 transition-colors">
              <div className="aspect-video bg-zinc-200 dark:bg-[#1a1a1a] relative overflow-hidden">
                <ImageSlider 
                  images={[
                    "/images/scanimei1.png"
                  ]}
                  altPrefix="ScanIMEI AI"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">AI Scan Validation</h3>
                <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-4 leading-relaxed">
                  An AI-powered system validation feature built for the tokodigi.id platform. It utilizes the OpenAI API to automatically verify and validate customer data during the souvenir redemption process.
                </p>
                <div className="flex gap-2 flex-wrap">
                  <span className="px-2 py-1 text-xs font-medium bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-md">OpenAI API</span>
                  <span className="px-2 py-1 text-xs font-medium bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-md">Laravel</span>
                  <span className="px-2 py-1 text-xs font-medium bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-md">Python</span>
                  <span className="px-2 py-1 text-xs font-medium bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-md">Tailwind CSS</span>
                </div>
              </div>
            </div>
            </div>
          </div>

          <div className="mt-12 flex justify-center">
            <button 
              onClick={() => setShowAllProjects(!showAllProjects)}
              className="px-8 py-3 rounded-full border border-zinc-200 dark:border-zinc-800 hover:border-teal-500 dark:hover:border-teal-500/50 text-zinc-900 dark:text-zinc-100 hover:text-teal-600 dark:hover:text-teal-400 font-medium transition-colors bg-white dark:bg-[#111] flex items-center gap-2 group"
            >
              {showAllProjects ? (
                <>View Less Projects <svg className="w-4 h-4 group-hover:-translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" /></svg></>
              ) : (
                <>View More Projects <svg className="w-4 h-4 group-hover:translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg></>
              )}
            </button>
          </div>
          </AnimateOnScroll>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 mt-10 border-t border-zinc-200 dark:border-zinc-800/50 pt-20">
          <AnimateOnScroll animation="fade-up">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tight mb-4">Get in Touch</h2>
                <p className="text-zinc-600 dark:text-zinc-400 max-w-xl mx-auto">
                  I'm currently available for work. Whether you have a project to discuss or just want to say hi, my inbox is open!
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Email */}
                <a href="mailto:faizdaffanaut@gmail.com" className="flex items-center gap-4 p-6 rounded-2xl bg-zinc-50 dark:bg-[#111] border border-zinc-200 dark:border-zinc-800/80 hover:border-teal-500/50 hover:shadow-md transition-all group">
                  <div className="w-12 h-12 rounded-full bg-teal-100 dark:bg-teal-500/10 text-teal-600 dark:text-teal-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider mb-1">Email</h3>
                    <p className="text-sm md:text-base font-medium text-zinc-900 dark:text-zinc-100 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">faizdaffanaut@gmail.com</p>
                  </div>
                </a>

                {/* WhatsApp */}
                <a href="https://wa.me/6281331513846" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-6 rounded-2xl bg-zinc-50 dark:bg-[#111] border border-zinc-200 dark:border-zinc-800/80 hover:border-teal-500/50 hover:shadow-md transition-all group">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider mb-1">WhatsApp</h3>
                    <p className="text-sm md:text-base font-medium text-zinc-900 dark:text-zinc-100 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">+62 813-3151-3846</p>
                  </div>
                </a>

                {/* GitHub */}
                <a href="https://github.com/faez24" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-6 rounded-2xl bg-zinc-50 dark:bg-[#111] border border-zinc-200 dark:border-zinc-800/80 hover:border-teal-500/50 hover:shadow-md transition-all group">
                  <div className="w-12 h-12 rounded-full bg-zinc-200 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider mb-1">GitHub</h3>
                    <p className="text-sm md:text-base font-medium text-zinc-900 dark:text-zinc-100 group-hover:text-zinc-600 dark:group-hover:text-zinc-400 transition-colors">github.com/faez24</p>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-center gap-4 p-6 rounded-2xl bg-zinc-50 dark:bg-[#111] border border-zinc-200 dark:border-zinc-800/80 hover:border-teal-500/50 hover:shadow-md transition-all group cursor-default">
                  <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider mb-1">Location</h3>
                    <p className="text-sm md:text-base font-medium text-zinc-900 dark:text-zinc-100 transition-colors">Surabaya, Indonesia</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-200 dark:border-zinc-800/50 py-8 mt-10">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            &copy; {new Date().getFullYear()} Faizrashid. All rights reserved.
          </p>
          <div className="flex gap-4 text-sm font-medium text-zinc-600 dark:text-zinc-400">
            <a href="https://github.com/faez24" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-900 dark:hover:text-white transition-colors flex items-center gap-1">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
              GitHub
            </a>
          </div>
        </div>
      </footer>
      </div>
    </div>
  );
}
