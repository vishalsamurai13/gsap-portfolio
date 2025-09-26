import { Divider } from "@/lib/divider";
import { ChevronRight, MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

// Experience data structure
interface ExperienceData {
  id: string;
  number: string;
  companyName: string;
  companyUrl: string;
  logo: string;
  position: string;
  location: string;
  duration: string;
  workType: string;
  responsibilities: string[];
  keySkills: string[];
}

// Sample experience data
const experiencesData: ExperienceData[] = [
  {
    id: "rfrncs",
    number: "01",
    companyName: "References*",
    companyUrl: "https://www.rfrncs.in/",
    logo: "/rfrncs.png",
    position: "Frontend Developer & Designer",
    location: "Mumbai, India",
    duration: "March, 2025 - Present",
    workType: "Remote",
    responsibilities: [
      "Designed and developed multiple web pages and digital products for diverse clients, focusing on modern, clean, and user-centric interfaces.",
      "Applied core design principles such as consistency, hierarchy, and visual balance to create aesthetically pleasing and intuitive user experiences.",
      "Built responsive, cross-device optimized web applications using React.js, Next.js, and TailwindCSS, improving performance and user engagement.",
      "Developed client-specific systems and integrated RESTful APIs with thorough testing, ensuring seamless functionality and reducing errors by 20%."
    ],
    keySkills: [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "TailwindCSS",
      "Figma",
      "REST API Integration",
      "Responsive Design"
    ]
  },
  {
    id: "company2",
    number: "02",
    companyName: "TechCorp Solutions",
    companyUrl: "https://www.techcorp.com/",
    logo: "/techcorp-logo.png",
    position: "Full Stack Developer",
    location: "San Francisco, USA",
    duration: "Jan, 2024 - Feb, 2025",
    workType: "Hybrid",
    responsibilities: [
      "Led the development of enterprise-level web applications using MERN stack technologies.",
      "Implemented microservices architecture resulting in 40% improvement in application scalability.",
      "Mentored junior developers and conducted code reviews to maintain high code quality standards.",
      "Collaborated with product teams to translate business requirements into technical solutions."
    ],
    keySkills: [
      "Node.js & Express",
      "MongoDB & PostgreSQL",
      "Docker & Kubernetes",
      "AWS Cloud Services",
      "GraphQL & REST APIs",
      "Team Leadership"
    ]
  }
];

interface ExperienceCardProps {
  experienceData?: ExperienceData;
  className?: string;
}

const ExperienceCard = ({ 
  experienceData = experiencesData[0], 
  className = "" 
}: ExperienceCardProps) => {
  return (
    <div className={`relative px-4 lg:px-30 ${className}`}>
      <div className="flex flex-col lg:flex-row w-full min-h-[600px] lg:min-h-[700px] bg-amber-400 text-black p-4 lg:p-6 rounded-2xl gap-6 lg:gap-0">
        
        {/* Left Section - Main Content */}
        <div className="flex flex-col gap-4 w-full lg:w-2/3">
          <span className="font-black text-4xl lg:text-7xl flex items-center gap-6">
            {experienceData.number}
          </span>

          <Link
            href={experienceData.companyUrl} 
            target="_blank"
            className="inline-flex gap-6 items-end hover:text-green-700 transition-colors duration-500 slide-in w-fit"
          >
            <h1 className="font-bold text-3xl sm:text-4xl lg:text-8xl">{experienceData.companyName}</h1>
            <ChevronRight className="w-12 h-12 lg:w-18 lg:h-18 hidden sm:block" />
          </Link>

          {/* Responsibilities Section - Full Width */}
          <div className="mt-4 w-full">
            <h2 className="font-bold text-xl lg:text-2xl mb-4 text-green-800">Key Responsibilities:</h2>
            <ul className="flex flex-col gap-3 lg:gap-4 w-full">
              {experienceData.responsibilities.map((responsibility, index) => (
                <li key={index} className="flex gap-3 items-start w-full">
                  <MoveRight className="w-6 h-6 lg:w-8 lg:h-8 mt-1 flex-shrink-0" />
                  <p className="font-medium text-base lg:text-xl xl:text-2xl leading-relaxed flex-1">
                    {responsibility}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider - Desktop Only */}
        <div className="hidden lg:block max-h-[650px] mx-8">
          <Divider />
        </div>

        {/* Right Section - Company Info */}
        <div className="w-full lg:w-1/3 flex flex-col">
          {/* Logo Container */}
          <div className="flex items-center justify-center h-32 lg:h-48 mb-4">
            <Image 
              src={experienceData.logo} 
              alt={`${experienceData.companyName} Logo`} 
              width={120} 
              height={120} 
              className="lg:w-[180px] lg:h-[180px] object-contain"
            />
          </div>
          
          {/* Position Info */}
          <div className="flex flex-col p-4 text-black">
            <h1 className="text-lg lg:text-xl uppercase font-bold text-center mb-4">
              {experienceData.position}
            </h1>
            <div className="space-y-2 px-2 lg:px-9 text-center lg:text-left">
              <h2 className="text-sm lg:text-base font-medium">{experienceData.location}</h2>
              <h3 className="text-sm lg:text-base font-medium">{experienceData.duration}</h3>
              <h4 className="text-sm lg:text-base font-medium">{experienceData.workType}</h4>
            </div>
            
            {/* Key Skills */}
            <div className="mt-6">
              <h1 className="text-lg lg:text-xl uppercase font-bold text-center mb-4">
                Key Skills & Tech Stack
              </h1>
              <div className="space-y-2 px-2">
                <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                  {experienceData.keySkills.map((skill, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-black/10 rounded-full text-xs lg:text-sm font-medium border border-black/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>        
      </div>
    </div>
  );
};

// Export component and data for external use
export default ExperienceCard;
export { experiencesData };
export type { ExperienceData };