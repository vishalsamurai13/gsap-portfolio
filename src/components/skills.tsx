import React from 'react';
import SplitText from './SplitText';

export default function SkillSection(){
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", icon: "", color: "text-cyan-400" },
        { name: "Next.js", icon: "", color: "text-white" },
        { name: "Redux", icon: "", color: "text-purple-500" },
        { name: "React Native", icon: "", color: "text-cyan-300" },
        { name: "Tailwind CSS", icon: "", color: "text-teal-400" },
        { name: "UI Libraries", icon: "", color: "text-teal-400" },
        { name: "WebGL / GSAP", icon: "", color: "text-teal-400" },
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", icon: "", color: "text-green-500" },
        { name: "Express.js", icon: "", color: "text-yellow-600" },
        { name: "Django", icon: "", color: "text-red-500" },
        { name: "REST APIs", icon: "", color: "text-yellow-500" },
      ]
    },
    {
      title: "Databases",
      skills: [
        { name: "MongoDB", icon: "", color: "text-green-500" },
        { name: "MySQL", icon: "", color: "text-blue-600" },
        { name: "PostgreSQL", icon: "", color: "text-blue-400" }
      ]
    },
    {
      title: "Languages",
      skills: [
        { name: "JavaScript", icon: "", color: "text-yellow-500" },
        { name: "TypeScript", icon: "", color: "text-blue-400" },
        { name: "Python", icon: "", color: "text-blue-400" }
      ]
    },
    {
        title: "Tools",
        skills: [
          { name: "Postman", icon: "", color: "text-yellow-500" },
          { name: "Git", icon: "", color: "text-blue-400" },
          { name: "Github", icon: "", color: "text-blue-400" },
          { name: "Figma", icon: "", color: "text-blue-400" },
          { name: "Docker", icon: "", color: "text-blue-400" },
          { name: "VS Code", icon: "", color: "text-blue-400" },
        ]
      }
  ];

  return (
    <div className="text-white py-4 sm:py-6 lg:py-8 w-full px-4 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col gap-4">
        {/* Header */}
        <div className="mb-6 sm:mb-8 text-center pt-4">
          <SplitText
            text="Skills & Technologies"
            className="text-3xl lg:text-5xl font-semibold tracking-[2px] text-green-300 items-center p-1"
            delay={100}
            duration={0.3}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
          />
          <p className="text-sm lg:text-xl font-medium text-gray-500 mt-2">Technologies I work with to bring ideas to life</p>
        </div>

        {/* Skills Categories */}
        <div className="space-y-8">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="space-y-3 sm:space-y-4">
              {/* Category Title */}
              <div className="flex items-center gap-2 sm:gap-3 justify-start">
                <div className="grid grid-cols-2 gap-1">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-400 rounded-full"></div>
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-400 rounded-full"></div>
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-400 rounded-full"></div>
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-400 rounded-full"></div>
                </div>
                <h2 className="text-base sm:text-lg md:text-xl font-semibold text-green-400">{category.title}</h2>
              </div>

              {/* Skills Grid */}
              <div className="flex flex-wrap gap-2 sm:gap-3 justify-start">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="bg-gray-800/50 hover:bg-gray-700/70 backdrop-blur-sm rounded-lg px-2.5 sm:px-3 lg:px-4 py-1.5 sm:py-2 lg:py-2.5 flex items-center justify-center transition-all duration-300 hover:scale-105 cursor-pointer border border-gray-700/50 hover:border-green-400/50 flex-shrink-0 group min-w-0"
                  >
                    <div className={`text-lg sm:text-xl lg:text-2xl ${skill.color} flex-shrink-0 mr-1.5 sm:mr-2 group-hover:scale-110 transition-transform duration-300`}>
                      {skill.icon}
                    </div>
                    <span className="text-xs sm:text-sm font-medium text-gray-200 whitespace-nowrap group-hover:text-white transition-colors duration-300 truncate">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom spacing */}
        <div className="h-4 sm:h-6 lg:h-8"></div>
      </div>
    </div>
  );
};