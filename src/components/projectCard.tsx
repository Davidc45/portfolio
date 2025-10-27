'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Technology interface with custom styling
interface Technology {
  name: string;
  color: string;
  logo?: string; // URL to technology logo
  textContrast: string; 
}

// Interface for project data
interface Project {
  title: string;
  description: string;
  imageUrl: string;
  technologies: Technology[];
  liveUrl: string;
  panelHeight?: string; // Custom height for sliding panel (e.g., "h-16", "h-20", "h-24")
}

// Props interface for the component
interface ProjectCardProps {
  project: Project;
  className?: string;
}

// Main component
const ProjectCard: React.FC<ProjectCardProps> = ({ project, className = '' }) => {
  return (
    <Link 
      href={project.liveUrl} 
      target="_blank" 
      rel="noopener noreferrer"
      className={`group relative overflow-hidden rounded-lg bg-white shadow-lg transition-all duration-500 hover:shadow-xl dark:bg-gray-800 block w-full ${className}`}
    >
      {/* Project Image Container */}
      <div className="relative h-48 sm:h-56 md:h-64 w-full overflow-hidden">
        {/* Monotone Image (resting state) */}
        <Image
          src={project.imageUrl}
          alt={project.title}
          fill
          className="object-cover transition-all duration-500 group-hover:grayscale-0 grayscale group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      {/* Sliding Description Panel */}
      <div className={`absolute bottom-0 left-0 right-0 ${project.panelHeight || 'h-5/12'} 
      bg-gradient-to-t from-black/90 via-black/70 to-transparent p-3 transform translate-y-full transition-transform duration-500 group-hover:translate-y-0`}>
        {/* Title */}
        <h3 className="text-xs sm:text-sm font-bold text-white mb-1 truncate">
          {project.title}
        </h3>
        <p className="text-xs sm:text-sm text-gray-300 py-1">{project.description}</p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-1 sm:gap-2 gap-x-2 sm:gap-x-4">
          {project.technologies.map((tech, index) => (
            <div key={index} className="flex items-center gap-1">
              {/* Technology Logo Badge */}
              {tech.logo && (
                <Image
                  src={tech.logo}
                  alt={`${tech.name} logo`}
                  width={16}
                  height={16}
                  className="rounded-sm object-contain sm:w-5 sm:h-5"
                  onError={(e) => {
                    console.error(`Failed to load tech logo: ${tech.logo} for technology: ${tech.name}`);
                    console.error('Image element:', e.currentTarget);
                    e.currentTarget.style.display = 'none';
                  }}
                  onLoad={() => {
                    console.log(`Successfully loaded: ${tech.logo} for ${tech.name}`);
                  }}
                  unoptimized={tech.logo.includes('.webp')}
                />
              )}
                  {/* Technology Name in Colored Bubble */}
               <span
                 className="rounded-full px-1.5 sm:px-2 py-0.5 text-xs font-medium backdrop-blur-sm"
                 style={{ 
                   backgroundColor: tech.color,
                   color: tech.textContrast
                 }}
               >
                 {tech.name}
               </span>
            </div>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
