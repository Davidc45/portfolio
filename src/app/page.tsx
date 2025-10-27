'use client';

import Image from "next/image";
import ProjectCard from "@/components/projectCard";
import TechnologyCarousel from "@/components/TechnologyCarousel";
import ChatBot from "@/components/ChatBot";
import { useState } from "react";

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Smooth scroll function
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
    // Close mobile menu after clicking
    setIsMobileMenuOpen(false);
  };
  return (

    <div className=" bg-black text-gray-400 font-aldrich p-3">  {/* Entire website container */}  
       <div> {/* Landing Page Container */}
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 sm:px-6 py-4 border-b border-gray-800 bg-black/95 backdrop-blur-md"> {/* Header */}
        <div className="flex items-center space-x-3">
          <Image  
            src="/assets/logo.webp"  
            alt="Davids Icon"  
            width={48}
            height={48}
            className="sm:w-14"
          />
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
          <button 
            onClick={() => scrollToSection('about')} 
            className="hover:text-white transition-colors text-sm lg:text-base cursor-pointer"
          >
            About
          </button>
          <button 
            onClick={() => scrollToSection('experience')} 
            className="hover:text-white transition-colors text-sm lg:text-base cursor-pointer"
          >
            Experience
          </button>
          <button 
            onClick={() => scrollToSection('projects')} 
            className="hover:text-white transition-colors text-sm lg:text-base cursor-pointer"
          >
            Projects
          </button>
          <a  href="/assets/DavidCalderonResume.pdf" download
           className="flex items-center space-x-2 border border-gray-600 rounded-lg px-3 py-2 hover:bg-gray-900 hover:border-gray-400 transition-all duration-300 text-sm lg:text-base">
            <span className="hidden sm:inline">Resume</span>
            <span className="sm:hidden">CV</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 text-gray-400 hover:text-white transition-colors"
        >
          {isMobileMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-md border-b border-gray-800 py-4 px-4">
          <div className="flex flex-col space-y-4">
            <button 
              onClick={() => scrollToSection('about')} 
              className="hover:text-white transition-colors text-sm cursor-pointer text-left"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('experience')} 
              className="hover:text-white transition-colors text-sm cursor-pointer text-left"
            >
              Experience
            </button>
            <button 
              onClick={() => scrollToSection('projects')} 
              className="hover:text-white transition-colors text-sm cursor-pointer text-left"
            >
              Projects
            </button>
            <a  href="/assets/DavidCalderonResume.pdf" download
             className="flex items-center space-x-2 border border-gray-600 rounded-lg px-3 py-2 w-26
             transition-all duration-300 text-sm">
              <span>Resume</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </a>
          </div>
        </div>
        )}
      </header>

      <main className="flex flex-col items-center justify-center min-h-[calc(100vh-60px)] px-4 sm:px-6 relative pt-20 sm:pt-24">  {/* Hero Section */}
      
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-center mb-6 sm:mb-8 w-full sm:w-11/12 md:w-10/12 lg:w-8/12 xl:w-6/12 leading-tight px-2">  {/* Main Headline */}
        <span className="text-white "> Software engineer </span> developing <span className="text-white ">clean</span> & <span className="text-white ">modern</span> web applications.
        </h1>

      <div className="w-full max-w-4xl px-4">
        <Image 
          src="/assets/roomrender.png" 
          alt="Room Render" 
          width={1100} 
          height={800}
          className="w-full h-auto"
          priority
        />
      </div>
       
      <div className="border border-white rounded-full px-4 sm:px-6 py-2 sm:py-3 mt-32 lg:mt-10 sm:mb-8 hover:bg-white hover:text-black transition-all duration-300 animate-float text-sm sm:text-base">
  <a
    href="https://mail.google.com/mail/?view=cm&fs=1&to=davidcalderon4000@gmail.com&su=Hello%20from%20your%20portfolio&body=Hi%20David,%20I%20came%20across%20your%20portfolio%20and%20would%20like%20to%20connect!"
    target="_blank"
    rel="noopener noreferrer"
    className="cursor-pointer">
    Hello, I&apos;m David 👋
  </a>
</div>

      </main>
      </div>

       {/* About Me Container */}
       <div id="about" className="flex flex-col lg:flex-row items-center justify-between mx-4 sm:mx-8 md:mx-16 lg:mx-32 mt-16 sm:mt-20 gap-8 lg:gap-12">
       
        <div className="w-full lg:w-1/2 order-2 lg:order-1 flex justify-center items-center">
        <Image 
          src="/assets/headshot.webp" 
          alt="David's Headshot" 
          width={900} 
          height={400} 
          className="rounded-xl w-8/12 sm:w-6/12 lg:w-11/12 xl:w-7/12 h-auto"
        />
        </div>
        <div className="flex flex-col items-center lg:items-start w-full lg:w-1/2 order-1 lg:order-2">
        <div className="flex flex-col items-center lg:items-start w-full">
          <h1 className="bg-gray-800 py-2 px-3 rounded-full text-white text-sm sm:text-base">About Me</h1>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-4 text-center lg:text-left">Curiosity turned <span className="text-white">Analytical.</span></h1>
          <p className="leading-relaxed sm:leading-loose mt-6 sm:mt-10 w-full text-sm sm:text-base text-center lg:text-left">
            Current Senior at California State University of Fullerton driven by developing scalable, responsive, and visually polished web applications. From crafting sleek websites to managing the behind the scenes of
            full-stack application features, I bring a unique blend of technical expertise and creative vision to every project.
            </p>
            <div className="grid grid-cols-2 gap-x-4 sm:gap-x-8 gap-y-8 sm:gap-y-12 mt-8 sm:mt-10 w-full">
              <div className="text-center lg:text-left">
                <h1 className="text-sm sm:text-base lg:text-lg font-bold">Projects Completed:</h1>
                <p className="mt-2 sm:mt-4 text-2xl sm:text-3xl text-white">5+</p>
              </div>
              <div className="text-center lg:text-left">
                <h1 className="text-sm sm:text-base lg:text-lg font-bold">Years of Experience:</h1>
                <p className="mt-2 sm:mt-4 text-2xl sm:text-3xl text-white">2+</p>
              </div>
              <div className="text-center lg:text-left">
                <h1 className="text-sm sm:text-base lg:text-lg font-bold">Technologies Mastered:</h1>
                <p className="mt-2 sm:mt-4 text-2xl sm:text-3xl text-white">12+</p>
              </div>
              <div className="text-center lg:text-left">
                <h1 className="text-sm sm:text-base lg:text-lg font-bold">Users Impacted:</h1>
                <p className="mt-2 sm:mt-4 text-2xl sm:text-3xl text-white">2,000+</p>
              </div>
            </div>
            </div>
                </div> 
        </div>
         {/* Technology Carousel */}
     <div className="w-full mt-16 sm:mt-20 px-4 sm:px-8 md:px-16 lg:px-32">
          <TechnologyCarousel 
            technologies={[
              { name: "HTML", color: "#e34f26", logo: "/technology/HTML.webp", textContrast: "#ffffff"},
              { name: "CSS", color: "#264de4", logo: "/technology/CSS3_logo.webp", textContrast: "#ffffff"},
              { name: "JavaScript", color: "#ffd133", logo: "/technology/JAVASCRIPT.webp", textContrast: "#ffffff"},
              { name: "TypeScript", color: "#007acc", logo: "/technology/typescript.svg", textContrast: "#ffffff"},
              { name: "React", color: "#0081a3", logo: "/technology/react.svg", textContrast: "#ffffff"},
              { name: "Next.js", color: "#ffffff", logo: "/technology/Next.png", textContrast: "#ffffff"},
              { name: "Node.js", color: "#339933", logo: "/technology/nodejs.svg", textContrast: "#ffffff"},
              { name: "PostgreSQL", color: "#31708F", logo: "/technology/postgresql.png", textContrast: "#ffffff"},
              { name: "Prisma", color: "#ffffff", logo: "/technology/Prisma.svg", textContrast: "#ffffff"},
              { name: "Firebase", color: "#DD2C00", logo: "/technology/Firebase.png", textContrast: "#ffffff"},
              { name: "Docker", color: "#1D63ED", logo: "/technology/docker.png", textContrast: "#ffffff"},
              { name: "Tailwind CSS", color: "#06B6D4", logo: "/technology/tailwind.svg", textContrast: "#ffffff"},
              { name: "Docker", color: "#1D63ED", logo: "/technology/docker.png", textContrast: "#ffffff"},
              { name: "Express", color: "#ffffff", logo: "/technology/expressjs.svg", textContrast: "#ffffff"}
            ]} 
          />
          </div>

        {/* Experience Container */}
       
       <section id="experience" className="w-full my-16 sm:my-20 lg:my-24">
         <div className="mx-auto w-11/12 sm:w-10/12">
           <div className="flex flex-col items-center mb-8 sm:mb-12">
             <span className="inline-block rounded-full bg-gray-800/70 px-3 py-1 text-xs tracking-wide text-white">Career</span>
             <h2 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-bold text-center lg:text-left">
               <span className="text-gray-300"> <span className="hidden sm:inline">And This Is</span> My</span> <span className="text-white">Experience</span>
             </h2>
           </div>

           {/* Timeline */}
           <div className="relative">
             {/* vertical line - hidden on mobile */}
             <div className="hidden md:block absolute left-1/2 top-0 -translate-x-1/2 h-full w-px bg-gray-800" />

             {/* Item 1 */}
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10 py-8 sm:py-10 border-b border-gray-800">
               <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 pr-0 ">
                 <div className="flex items-center gap-2 sm:gap-3">
                   <Image src="/assets/laptop.svg" alt="Freelance Work" width={28} height={24} className="rounded-xl bg-white sm:w-9 sm:h-8" />
                   <div>
                     <h3 className="text-base sm:text-lg font-semibold text-white">Freelance - Web Development</h3>
                     <p className="text-xs sm:text-sm text-gray-400">Jun 2022 - Sep 2023</p>
                   </div>
                 </div>
                 
               </div>
               <div className="pl-0 md:pl-8 text-gray-300 leading-relaxed text-sm sm:text-base">
                 <p>
                   Built responsive websites for local clients, emphasizing clean UI/UX and optimized performance. Managed full scale projects from client 
                   visions to deployment, improving communication and delivery speed.
                 </p>
               </div>
             </div>

             {/* Item 2 */}
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10 py-8 sm:py-10 border-b border-gray-800">
               <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 pr-0 ">
                 <div className="flex items-center gap-2 sm:gap-3">
                   <Image src="/assets/altitud.svg" alt="Altitud Work" width={28} height={24} className="rounded-xl sm:w-9 sm:h-8" />
                   <div>
                     <h3 className="text-base sm:text-lg font-semibold text-white">Altitud - Software Engineer</h3>
                     <p className="text-xs sm:text-sm text-gray-400">Sep 2023 - Jun 2024</p>
                   </div>
                 </div>
            
               </div>
               <div className="pl-0 md:pl-8 text-gray-300 leading-relaxed text-sm sm:text-base">
                 <p>
                   A community-driven startup providing me with the privilege to offer service-free web services to local businesses.
                   I led a team of developers through Agile sprints and built scalable UI systems with reusable components where I also initially offered
                   back-end app functionalities.
                 </p>
               </div>
             </div>
              
              {/* Item 3 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10 py-8 sm:py-10 border-b border-gray-800">
               <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 pr-0">
                 <div className="flex items-center gap-2 sm:gap-3">
                   <Image src="/project/usda.svg" alt="USDA Fellowship" width={32} height={24} className="rounded-xl sm:w-10 sm:h-8" />
                   <div>
                     <h3 className="text-base sm:text-lg font-semibold text-white">Digital Agricultural Fellowship - Data Analyst</h3>
                     <p className="text-xs sm:text-sm text-gray-400">Jun 2024 - Aug 2024</p>
                   </div>
                 </div>
              
               </div>
               <div className="pl-0 md:pl-8 text-gray-300 leading-relaxed text-sm sm:text-base">
                 <p>
                  Processed and visualized 30K+ satellite data entries to analyze crop growth. Built Python dashboards that delivered crucial insights for farmers
                  and presented findings at the 2024 UCR MSRIP Symposium under mentorship of a senior scientist.
                 </p>
               </div>
             </div>
           
             {/* Item 4 */}
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10 py-8 sm:py-10">
               <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 pr-0 md:pr-8">
                 <div className="flex items-center gap-2 sm:gap-3">
                   <Image src="/assets/logo.svg" alt="Green Portfolio" width={32} height={24} className="rounded-xl sm:w-10 sm:h-8" />
                   <div>
                     <h3 className="text-base sm:text-lg font-semibold text-white">Green Portfolio - Web Developer</h3>
                     <p className="text-xs sm:text-sm text-gray-400">Sep 2024 - May 2025</p>
                   </div>
                 </div>
                 
               </div>
               <div className="pl-0 md:pl-8 text-gray-300 leading-relaxed text-sm sm:text-base">
                 <p>
                  Developed the company&apos;s main site using front-end technologies and collaborated with a team to deliver a seamless experience for 2,000+ users.
                  I gained experience in web optimization such as reducing bundle size and improving load times for bigger client bases. 
                 </p>
               </div>
             </div>
           </div>
         </div>
       </section>

       {/* Projects */}
       
       <div id="projects" className="flex flex-col items-center mt-16 w-full min-h-screen px-4 sm:px-8 ">
         <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 text-center">My Featured <span className="text-white">Projects</span> </h2>
         <div className="w-9/12 sm:w-10/12 lg:w-9/12 xl:w-7/12 max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">

      <ProjectCard
        project={{ title: "Steph's Puppies", description: "A front-end project helping adorable puppies find their new homes.", imageUrl: "/project/steph.jpg",
    technologies: 
    [
      { name: "HTML", color: "#e34f26", logo: "/technology/HTML.webp", textContrast: "#ffffff"},
      { name: "CSS", color: "#264de4", logo: "/technology/CSS3_logo.webp", textContrast: "#ffffff"},
      { name: "JavaScript",color: "#ffd133", logo: "/technology/JAVASCRIPT.webp", textContrast: "#ffffff"},
      { name: "Firebase", color: "#DD2C00", logo: "/technology/Firebase.png", textContrast: "#ffffff"}
    ],
    liveUrl: "https://stephs-puppies.vercel.app/"
  }} className="w-full"
/>

      <ProjectCard
        project={{ title: "Calderon Bulldogs", description: "A full-stack project encompassing all aspects of a local dog breeder's business.", imageUrl: "/project/calderon.jpg",
    technologies: 
    [
      { name: "Next.js", color: "#ffffff", logo: "/technology/Next.png", textContrast: "#000000"},
      { name: "React", color: "#0081a3", logo: "/technology/react.svg", textContrast: "#ffffff"},
      { name: "TypeScript",color: "#007acc", logo: "/technology/typescript.svg", textContrast: "#ffffff"},
      { name: "PostgreSQL", color: "#31708F", logo: "/technology/postgresql.png", textContrast: "#ffffff"},
      { name: "Prisma", color: "#ffffff", logo: "/technology/Prisma.svg", textContrast: "#000000"}

    ],
    liveUrl: "https://calderonbulldogs.com",
    panelHeight: "h-7/12"
  }} className="w-full"
/>
          
      <ProjectCard
        project={{ title: "GPP", description: "Educational platform designed to help students access business content.", imageUrl: "/project/green.png",
    technologies: 
    [
      { name: "Next.js", color: "#ffffff", logo: "/technology/Next.png", textContrast: "#000000"},
      { name: "React", color: "#0081a3", logo: "/technology/react.svg", textContrast: "#ffffff"},
      { name: "TypeScript",color: "#007acc", logo: "/technology/typescript.svg", textContrast: "#ffffff"},
      { name: "SQL", color: "#0F80CC", logo: "/technology/sql.png", textContrast: "#ffffff"},
      { name: "Docker", color: "#1D63ED", logo: "/technology/docker.png", textContrast: "#ffffff"}

    ],
    liveUrl: "https://green-portfolio-website.vercel.app/",
    panelHeight: "h-7/12"
  }} className="w-full"
/>
<ProjectCard
        project={{ title: "Altitud", description: "For a startup company that provides web services to businesses.", imageUrl: "/assets/altitud.svg",
    technologies: 
    [
      { name: "Next.js", color: "#ffffff", logo: "/technology/Next.png", textContrast: "#000000"},
      { name: "React", color: "#0081a3", logo: "/technology/react.svg", textContrast: "#ffffff"},
      { name: "TypeScript",color: "#007acc", logo: "/technology/typescript.svg", textContrast: "#ffffff"},
      { name: "SQL", color: "#0F80CC", logo: "/technology/sql.png", textContrast: "#ffffff"},
      { name: "Docker", color: "#1D63ED", logo: "/technology/docker.png", textContrast: "#ffffff"}

    ],
    liveUrl: "https://altitud.io",
    panelHeight: "h-7/12"
  }} className="w-full"
/>
      </div>

        </div>
        
        {/* ChatBot Component */}
        <ChatBot />
    </div>
  );
}
