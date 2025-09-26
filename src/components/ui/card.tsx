import { Circle, Github, NotebookIcon, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { motion } from "framer-motion";

// Project data structure
interface ProjectData {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  links: {
    liveDemo: string;
    github: string;
  };
  documentation: {
    startDate: string;
    summary: string;
    techStack: string[];
  };
}

// Sample project data
const projectsData: ProjectData[] = [
  {
    id: "slider",
    title: "Slider",
    subtitle: "An instagram automation tool",
    description: "A tool to automate your Instagram posts along with a slider to showcase your work",
    image: "/card1.PNG",
    links: {
      liveDemo: "https://slider-demo.com",
      github: "https://github.com/username/slider",
    },
    documentation: {
      startDate: "January 2024",
      summary: "Built to streamline Instagram content management and provide an elegant portfolio showcase. This project combines automation with beautiful UI design to help creators manage their social media presence effectively.",
      techStack: ["React", "Node.js", "Instagram API", "MongoDB", "TypeScript", "Tailwind CSS"]
    }
  },
  {
    id: "ecommerce",
    title: "ShopFlow",
    subtitle: "Modern e-commerce platform",
    description: "A full-stack e-commerce solution with real-time inventory and payment processing",
    image: "/card2.PNG",
    links: {
      liveDemo: "https://shopflow-demo.com",
      github: "https://github.com/username/shopflow",
    },
    documentation: {
      startDate: "March 2024",
      summary: "A comprehensive e-commerce platform featuring real-time inventory management, secure payment processing, and modern UI/UX. Built with scalability and performance in mind.",
      techStack: ["Next.js", "Stripe", "PostgreSQL", "Prisma", "Redis", "Docker"]
    }
  },
  {
    id: "analytics",
    title: "DataViz",
    subtitle: "Real-time analytics dashboard",
    description: "Interactive dashboard for visualizing complex data with real-time updates",
    image: "/card3.jpg",
    links: {
      liveDemo: "https://dataviz-demo.com",
      github: "https://github.com/username/dataviz",
    },
    documentation: {
      startDate: "May 2024",
      summary: "An advanced analytics dashboard that transforms raw data into meaningful insights through interactive visualizations. Features real-time data streaming and customizable chart components.",
      techStack: ["React", "D3.js", "WebSocket", "Python", "FastAPI", "PostgreSQL"]
    }
  }
];

const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      delay: 0.5 + i * 0.2,
      ease: [0.25, 0.4, 0.25, 1] as const,
    },
  }),
};

const slideInVariants = {
  hidden: { y: "100%", opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.23, 0.86, 0.39, 0.96] as const,
    },
  },
  exit: {
    y: "100%",
    opacity: 0,
    transition: {
      duration: 0.8,
      ease: [0.23, 0.86, 0.39, 0.96] as const,
    },
  },
};

interface CardHolderProps {
  projectId?: string;
}

const CardHolder = ({ projectId = "slider" }: CardHolderProps) => {
  const [isDocsOpen, setIsDocsOpen] = useState(false);
  
  const projectData = projectsData.find(project => project.id === projectId) || projectsData[0];

  return (
    <div className="bg-black text-white w-full lg:min-w-[450px] min-w-[300px] lg:h-[350px] h-[330px] relative overflow-hidden mx-auto">
      <div className="relative w-full h-full overflow-hidden">
        <Image
          src={projectData.image}
          alt={projectData.title}
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center bg-black/50"></div>

        <div className="flex flex-col w-full p-4 sm:p-6 z-10 relative">
          <div className="flex w-full mb-4 justify-end">
            <motion.div
              custom={0}
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
              className="flex gap-2 sm:gap-3 flex-wrap w-full"
              style={{ justifyContent: "end" }}
            >
              <div className="inline-flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] shadow-sm shadow-green-400 hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer">
                <Link
                  href={projectData.links.liveDemo}
                  className="flex gap-1 sm:gap-2 items-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Circle className="h-2 w-2 fill-green-400/80 animate-pulse" />
                  <span className="text-xs sm:text-sm text-white/60 hover:text-white tracking-wide">
                    Live Demo
                  </span>
                </Link>
              </div>

              <div className="inline-flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] shadow-sm shadow-gray-400 hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer">
                <Link
                  href={projectData.links.github}
                  className="flex gap-1 sm:gap-2 items-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-3 w-3" />
                  <span className="text-xs sm:text-sm text-white/60 hover:text-white tracking-wide">
                    Github
                  </span>
                </Link>
              </div>

              <div
                className="inline-flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] shadow-sm shadow-yellow-400 hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer"
                onClick={() => setIsDocsOpen(true)}
              >
                <NotebookIcon className="h-3 w-3" />
                <span className="text-xs sm:text-sm text-white/60 hover:text-white tracking-wide">
                  Docs
                </span>
              </div>
            </motion.div>
          </div>

          <div className="flex flex-col items-center mt-8 sm:mt-12 px-2 sm:px-4 z-10 gap-1">
            <motion.div
              custom={1}
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
            >
              <h1 className="text-4xl sm:text-5xl font-bold">{projectData.title}</h1>
            </motion.div>
            
            <motion.div
              custom={2}
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
            >
              <h2 className="text-base sm:text-lg font-medium italic text-gray-300">
                {projectData.subtitle}
              </h2>
            </motion.div>
            
            <motion.div
              custom={3}
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-col items-center justify-center"
            >
              <p className="text-xs sm:text-sm mt-2 sm:mt-4 text-center text-gray-400 max-w-[90%]">
                {projectData.description}
              </p>
            </motion.div>
          </div>
        </div>

        {isDocsOpen && (
          <motion.div
            variants={slideInVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="absolute inset-0 bg-gradient-to-br from-yellow-500 to-orange-500 z-20 overflow-y-auto"
          >
            <div className="min-h-full flex flex-col items-center justify-start p-4 sm:p-8 py-10 sm:py-12">
              <motion.div
                custom={0}
                variants={fadeUpVariants}
                initial="hidden"
                animate="visible"
                className="w-full max-w-[90%] text-center space-y-4 sm:space-y-6"
              >
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                    {projectData.title} Documentation
                  </h2>
                  <p className="text-xs sm:text-sm text-white/80 mb-4">
                    Started: {projectData.documentation.startDate}
                  </p>
                </div>
                
                <div className="text-left bg-white/10 rounded-lg p-3 sm:p-4 backdrop-blur-sm">
                  <h3 className="text-base sm:text-lg font-semibold text-white mb-2">Project Summary</h3>
                  <p className="text-xs sm:text-sm text-white/90 leading-relaxed">
                    {projectData.documentation.summary}
                  </p>
                </div>
                
                <div className="text-left bg-white/10 rounded-lg p-3 sm:p-4 backdrop-blur-sm">
                  <h3 className="text-base sm:text-lg font-semibold text-white mb-2 sm:mb-3">Tech Stack</h3>
                  <div className="flex flex-wrap gap-2">
                    {projectData.documentation.techStack.map((tech, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-white/20 rounded-full text-xs text-white font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
            
            <button
              onClick={() => setIsDocsOpen(false)}
              className="absolute top-3 sm:top-4 right-3 sm:right-4 text-white hover:text-gray-200 transition-colors bg-white/20 rounded-full p-1 sm:p-2 cursor-pointer"
            >
              <X className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default CardHolder;
export { projectsData };
export type { ProjectData };