'use client';

import { useRef, useEffect } from 'react';
import Image from 'next/image';

interface Technology {
  name: string;
  color: string;
  logo: string;
  textContrast: string;
}

interface TechnologyCarouselProps {
  technologies: Technology[];
}

export default function TechnologyCarousel({ technologies }: TechnologyCarouselProps) {
  const carouselRef = useRef<HTMLDivElement>(null);
  const autoScrollRef = useRef<NodeJS.Timeout | null>(null);
  
  // Duplicate technologies for seamless infinite loop
  const duplicatedTechnologies = [...technologies, ...technologies];

  // Auto-scroll speed (pixels per second)
  const AUTO_SCROLL_SPEED = 30;

  // Handle infinite loop scrolling
  const handleInfiniteScroll = () => {
    if (!carouselRef.current) return;
    
    const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
    const maxScroll = scrollWidth - clientWidth;
    const singleSetWidth = maxScroll / 2;
    
    // Handle infinite loop with smooth transitions
    if (scrollLeft >= maxScroll - 100) {
      // Jump to the middle (start of second set) for seamless loop
      carouselRef.current.scrollLeft = singleSetWidth;
    } else if (scrollLeft <= 100) {
      // Jump to the middle (start of second set) for seamless loop
      carouselRef.current.scrollLeft = singleSetWidth;
    }
  };

  // Start auto-scroll
  const startAutoScroll = () => {
    if (autoScrollRef.current) return;
    
    autoScrollRef.current = setInterval(() => {
      if (carouselRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
        const maxScroll = scrollWidth - clientWidth;
        
        if (scrollLeft >= maxScroll - 100) {
          // Reset to middle for seamless infinite loop
          carouselRef.current.scrollLeft = maxScroll / 2;
        } else {
          // Smooth auto-scroll
          carouselRef.current.scrollLeft += AUTO_SCROLL_SPEED / 60; // 60fps
        }
      }
    }, 16); // ~60fps
  };

  // Stop auto-scroll
  const stopAutoScroll = () => {
    if (autoScrollRef.current) {
      clearInterval(autoScrollRef.current);
      autoScrollRef.current = null;
    }
  };

  // Add scroll event listener for infinite loop
  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const handleScroll = () => {
      handleInfiniteScroll();
    };

    carousel.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      carousel.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Start auto-scroll on mount
  useEffect(() => {
    startAutoScroll();
    
    return () => {
      stopAutoScroll();
    };
  }, []);

  return (
    <div className="w-full">
      <h3 className="text-xl font-semibold mb-6 text-center">My Toolkit</h3>
      <div className="max-w-4xl mx-auto relative overflow-hidden">
        {/* Left fade gradient */}
        <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-black via-black/80 to-transparent z-10 pointer-events-none" />
        
        {/* Right fade gradient */}
        <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-black via-black/80 to-transparent z-10 pointer-events-none" />
        
        {/* Simple auto-scrolling carousel */}
        <div className="relative z-0 px-4">
          <div 
            ref={carouselRef}
            className="flex gap-4 overflow-x-auto scrollbar-hide select-none"
            style={{ 
              scrollbarWidth: 'none', 
              msOverflowStyle: 'none',
              scrollBehavior: 'auto',
              pointerEvents: 'none' // Disable all user interaction
            }}
          >
            {duplicatedTechnologies.map((tech, index) => (
              <div key={index} className="flex-shrink-0">
                <div
                  className="flex flex-col items-center p-4 rounded-lg border border-gray-700 bg-gray-800/50 transition-colors min-w-[120px]"
                  style={{ 
                    backgroundColor: `${tech.color}20`,
                    borderColor: tech.color 
                  }}
                >
                  <div className="w-12 h-12 mb-3 relative">
                    <Image
                      src={tech.logo}
                      alt={tech.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <span 
                    className="text-sm font-medium text-center"
                    style={{ color: tech.textContrast }}
                  >
                    {tech.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
