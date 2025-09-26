import React from 'react'
import { HeroGeometric } from './ui/shadcn-io/shape-landing-hero'

const DesignCarousel = () => {
  
  const responsiveWidth = "100%"; 
  const responsiveHeight = "100%";

  return (
    <div className="flex space-x-4 w-full lg:overflow-hidden overflow-x-scroll snap-x snap-mandatory pb-6 dark-scrollbar">
      <div className="flex-shrink-0 h-[350px] lg:h-[380px] w-[300px] sm:w-[400px] lg:w-[480px]">
        <HeroGeometric 
          badge="Explore Components"
          title1="Material UI"
          title2="Components Library"
          description="A collection of ready-to-use Material UI components built for speed, consistency, and modern design."
          height={responsiveHeight}
          width={responsiveWidth}
          className="lg:w-[480px] lg:h-[380px]" // Ensure desktop width is 480px
        />
      </div>

      <div className="flex-shrink-0 w-[300px] sm:w-[400px] lg:w-[480px]">
        <HeroGeometric 
          badge="Explore Landing Pages"
          title1="SAAS"
          title2="Landing Pages"
          description="Beautifully crafted SaaS landing page templates designed to engage users and drive conversions."
          height={responsiveHeight}
          width={responsiveWidth}
          className="lg:w-[480px]"
        />
      </div>

      <div className="flex-shrink-0 w-[300px] sm:w-[400px] lg:w-[480px]">
        <HeroGeometric 
          badge="Explore Work"
          title1="Personal"
          title2="Design Systems"
          description="Custom design systems that streamline your workflow, ensuring visual harmony and brand consistency."
          height={responsiveHeight}
          width={responsiveWidth}
          className="lg:w-[480px]"
        />
      </div>

      <style jsx>{`
        .dark-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: #000000 #C2C176;
          scroll-behavior: smooth;
        }
        
        .dark-scrollbar::-webkit-scrollbar {
          height: 4px;
          width: 4px;
        }
        
        .dark-scrollbar::-webkit-scrollbar-track {
          background: #0f172a;
          border-radius: 2px;
        }
        
        .dark-scrollbar::-webkit-scrollbar-thumb {
          background: #1f2937;
          border-radius: 2px;
          transition: background-color 0.2s ease;
        }
        
        .dark-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #374151;
        }
        
        .dark-scrollbar::-webkit-scrollbar-thumb:active {
          background: #4b5563;
        }
        
        .dark-scrollbar::-webkit-scrollbar-corner {
          background: transparent;
        }
        
        @media (max-width: 768px) {
          .dark-scrollbar::-webkit-scrollbar {
            height: 3px;
          }
        }
      `}</style>
    </div>
  )
}

export default DesignCarousel;