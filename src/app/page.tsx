import Image from "next/image";
import ProjectCard from "@/components/projectCard";
export default function Home() {
  return (

    <div className=" bg-black text-white font-aldrich">  {/* Entire website container */}  
       <div> {/* Landing Page Container */}
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 border-b border-gray-800 bg-black/95 backdrop-blur-md"> {/* Header */}
        <div className="flex items-center space-x-3">
          <Image  src="/assets/logo.webp"  alt="David's Icon"  width={40}  height={40} />
        </div>
        
        <nav className="flex items-center space-x-8">
          <a href="#portfolio" className="hover:text-blue-400 transition-colors">About</a>
          <a href="#about" className="hover:text-blue-400 transition-colors">Experience</a>
          <a href="#contact" className="hover:text-blue-400 transition-colors">Projects</a>
          <a  href="/DavidCalderonResume.pdf" download
           className="flex items-center space-x-2 border border-gray-600 rounded-lg px-4 py-2 hover:bg-gray-900 hover:border-gray-400 transition-all duration-300">
            <span>Resume</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </a>
          
        </nav>
      </header>

      <main className="flex flex-col items-center justify-center min-h-[calc(100vh-80px)] px-6 relative pt-24">  {/* Hero Section */}
      
        <h1 className="text-5xl md:text-7xl font-bold text-center mb-8 max-w-4xl leading-tight ">  {/* Main Headline */}
          David Calderon
          <p className="text-lg text-gray-400">Full-stack Web Developer</p>
        </h1>

      <Image src="/assets/roomrender.png" alt="Room Render" width={800} height={800} />
       
        <div className="border border-white rounded-full px-6 py-3 mb-8 hover:bg-white hover:text-black transition-all duration-300 animate-float"> {/* Greeting Bubble */}
          <a href="#about" className="">Hello, I'm David 👋</a>
        </div>
      </main>
      </div>

       {/* About Me Container */}
       <div className="min-h-screen flex flex-row items-center justify-between mx-32">
       
        <div>
        <Image src="/assets/headshot.webp" alt="Room Render" width={900} height={400} className="rounded-xl" />
        </div>
        <div className="flex flex-col items-center  mx-10  h-[600px]">
        <div className="flex flex-col items-center mx-10 w-10/12 ">
          <h1 className="bg-gray-800 py-2 px-3 rounded-full ">About Me</h1>
          <p className="leading-loose mt-10 w-10/12 ">
            Curiosity turned to passion in developing scalable, responsive, and visually polished web applications. From crafting sleek websites to managing the behind the scenes of
            full-stack application features, I bring a unique blend of technical expertise and creative vision to every project.
            </p>
            <div className="grid grid-cols-2 gap-x-10 gap-y-20 mt-10 w-10/12  ">
              <h1 className="text-lg font-bold">Projects Completed: <p className="mt-6 text-3xl">5+</p> </h1>
              <h1 className="text-lg font-bold">Years of Experience: <p className="mt-6 text-3xl"> 2+</p> </h1>
              <h1 className="text-lg font-bold">Technologies Mastered:<p className="mt-6 text-3xl"> 12+</p></h1>
              <h1 className="text-lg font-bold">Users Impacted:<p className="mt-6 text-3xl"> 200+</p></h1>
            </div>
            </div>
       </div>
       </div>

       {/* Experience Container */}
       
       <section className="w-full my-24">
         <div className="mx-auto w-10/12">
           <div className="mb-12">
             <span className="inline-block rounded-full bg-gray-800/70 px-3 py-1 text-xs tracking-wide">Career</span>
             <h2 className="mt-4 text-4xl font-bold">
               <span className="text-gray-300">And This Is</span> <span className="text-white">My Career</span>
             </h2>
           </div>

           {/* Timeline */}
           <div className="relative">
             {/* vertical line */}
             <div className="absolute left-1/2 top-0 -translate-x-1/2 h-full w-px bg-gray-800" />

             {/* Item 1 */}
             <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-10 border-b border-gray-800">
               <div className="flex items-center justify-between pr-8">
                 <div className="flex items-center gap-2">
                 <Image src="/assets/laptop.svg" alt="Room Render" width={30} height={30} className="rounded-xl bg-white" />

                   <h3 className="text-lg font-semibold">Freelance - Web Development</h3>
                   <p className="mt-1 text-sm text-gray-400">2019 - 2020</p>
                 </div>
                 <span className="hidden mt-2 h-2 w-2 rounded-full bg-white translate-x-1/2" />
               </div>
               <div className="pl-0 md:pl-8 text-gray-300 leading-relaxed">
                 <p>
                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer in massa sed odio volutpat mattis.
                 </p>
               </div>
             </div>

             {/* Item 2 */}
             <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-10 border-b border-gray-800">
               <div className="flex items-center justify-between pr-8">
                 <div className="flex items-center gap-2">
                 <Image src="/assets/altitud.svg" alt="Room Render" width={35} height={30} className="rounded-xl" />
                   <h3 className="text-lg font-semibold">Altitud - Software Engineer</h3>
                   <p className="mt-1 text-sm text-gray-400">2020 - 2022</p>
                 </div>
                 <span className="hidden mt-2 h-2 w-2 rounded-full bg-white translate-x-1/2" />
               </div>
               <div className="pl-0 md:pl-8 text-gray-300 leading-relaxed">
                 <p>
                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque porttitor, sapien a congue luctus, ex nisl posuere mi, sed scelerisque magna magna vel mi. Suspendisse potenti. Curabitur at elit a elit placerat tempus.
                 </p>
               </div>
             </div>

             {/* Item 3 */}
             <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-10">
               <div className="flex items-center justify-between pr-8">
                 <div className="flex items-center gap-2">
                 <Image src="/assets/logo.svg" alt="Room Render" width={40} height={30} className="rounded-xl" />
                   <h3 className="text-lg font-semibold">Green Portfolio - Web Developer</h3>
                   <p className="mt-1 text-sm text-gray-400">2022 - Now</p>
                 </div>
                 <span className="hidden mt-2 h-2 w-2 rounded-full bg-white translate-x-1/2" />
               </div>
               <div className="pl-0 md:pl-8 text-gray-300 leading-relaxed">
                 <p>
                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus, nulla id lacinia tincidunt, eros arcu tincidunt quam, in fermentum erat dui a metus. Aliquam erat volutpat. Nunc tempus massa id justo luctus dapibus.
                 </p>
               </div>
             </div>
           </div>
         </div>
       </section>

       {/* Projects */}
       
       <div className="flex flex-col items-center mt-16 w-full min-h-screen">
         <h2 className="text-3xl font-bold mb-8">Featured Projects</h2>
         <div className="w-7/12 grid grid-cols-2">

      <ProjectCard
        project={{ title: "Steph's Puppies", description: "A front-end project helping adorable puppies find their new homes.", imageUrl: "/project/steph.jpg",
    technologies: 
    [
      { name: "HTML", color: "#e34f26", logo: "/technology/HTML.webp", textContrast: "#ffffff"},
      { name: "CSS", color: "#264de4", logo: "/technology/CSS3_logo.svg.webp", textContrast: "#ffffff"},
      { name: "JavaScript",color: "#ffd133", logo: "/technology/JavaScript.webp", textContrast: "#ffffff"},
      { name: "Firebase", color: "#DD2C00", logo: "/technology/Firebase.png", textContrast: "#ffffff"}
    ],
    liveUrl: "https://stephs-puppies.vercel.app/"
  }} className="m-10"
/>

      <ProjectCard
        project={{ title: "Calderon Bulldogs", description: "A full-stack project encompassing all aspects of a local dog breeder's business.", imageUrl: "/project/calderon.jpg",
    technologies: 
    [
      { name: "Next.js", color: "#ffffff", logo: "/technology/Next.png", textContrast: "#000000"},
      { name: "React", color: "#0081a3", logo: "/technology/react.svg", textContrast: "#ffffff"},
      { name: "TypeScript",color: "#007acc", logo: "/technology/typescript.svg", textContrast: "#ffffff"},
      { name: "PostgreSQL", color: "#31708F", logo: "/technology/PostgreSQL.png", textContrast: "#ffffff"},
      { name: "Prisma", color: "#ffffff", logo: "/technology/Prisma.svg", textContrast: "#000000"}

    ],
    liveUrl: "https://calderonbulldogs.com",
    panelHeight: "h-7/12"
  }} className="m-10 h-64"
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
  }} className="m-10"
/>
      </div>
    </div>
    </div>
  );
}
