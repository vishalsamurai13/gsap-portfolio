import React from 'react'
import CardHolder from './ui/card'

const ProjectCarousel = () => {
  return (
    <div className='w-full'>
      <div className='flex space-x-8 overflow-x-scroll pb-6 dark-scrollbar'>
        <CardHolder />
        <CardHolder projectId="ecommerce" />
        <CardHolder projectId='analytics' />
        <CardHolder projectId='analytics' />
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

export default ProjectCarousel