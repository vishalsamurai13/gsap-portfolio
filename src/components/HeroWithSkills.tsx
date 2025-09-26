"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Send, MoveDown, MoveUp } from "lucide-react";
import SkillSection from "@/components/skills";
import SplitText from "./ui/texts/SplitText";

export default function HeroWithSkills() {
  const [showSkills, setShowSkills] = useState(false);
  const [showComponent, setShowComponent] = useState(false);

  // Show the component after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowComponent(true);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {showComponent && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="relative w-full h-[90vh] overflow-hidden">
            <AnimatePresence mode="wait">
              {!showSkills ? (
                // ---------------- Hero Section ----------------
                <motion.div
                  key="hero"
                  className="flex flex-col items-center justify-center w-full h-full"
                  initial={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  {/* Profile Image */}
                  <div className="flex justify-center lg:h-[150px] lg:w-[150px] h-[100px] w-[100px]">
                    <Image
                      src="/pfp.png"
                      alt="Vishal Sharma Profile"
                      width={150}
                      height={150}
                      className="rounded-full object-cover object-center border-2 border-green-400"
                    />
                  </div>

                  {/* Text */}
                  <div className="text-center mt-6 lg:mt-4 space-y-4 px-2 lg:px-6">
                    <SplitText
                      text="Vishal Sharma"
                      className="text-4xl lg:text-6xl font-semibold tracking-[2px] text-green-300 items-center"
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

                    <h2 className="text-sm lg:text-2xl font-semibold text-gray-500">
                      Adapting to technology, delivering with precision.
                    </h2>
                    <p className="text-md lg:text-lg lg:leading-[30px] font-normal mt-6 text-gray-400 lg:tracking-[1px]">
                      Full-stack developer with hands-on experience building
                      responsive and scalable web applications. Skilled in
                      React.js, Next.js, TypeScript, Node.js, and MongoDB, with
                      projects spanning real-time chat apps, collaborative
                      platforms, and inventory management systems. Experienced
                      in API integrations, UI/UX optimization, and delivering
                      solutions in fast-paced environments through internships
                      and startup projects. Passionate about coding, I
                      continuously build projects to sharpen my skills and
                      explore new technologies.
                    </p>
                  </div>

                  {/* Buttons */}
                  <div className="mt-12 items-center flex flex-col gap-12">
                    <Link
                      href="/contact"
                      className="bg-white text-black font-light px-4 py-2 flex items-center gap-4 hover:bg-gray-200 transition-colors duration-500 ease-in-out rounded-lg"
                    >
                      Drop me a text
                      <Send size={15} />
                    </Link>

                    {/* Toggle to Skills */}
                    <button
                      onClick={() => setShowSkills(true)}
                      className="border-2 border-dashed rounded-full p-2 animate-pulse hover:animate-none hover:border-green-300 hover:text-green-500 cursor-pointer"
                    >
                      <MoveDown size={20} />
                    </button>
                  </div>
                </motion.div>
              ) : (
                // ---------------- Skills Section ----------------
                <motion.div
                  key="skills"
                  className="flex flex-col items-center w-full h-full"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 50 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="flex-1 flex items-center justify-start w-full overflow-hidden">
                    <SkillSection />
                  </div>

                  {/* Toggle back to Hero */}
                  <button
                    onClick={() => setShowSkills(false)}
                    className="mb-12 lg:mb-18 border-2 border-dashed rounded-full p-2 animate-pulse hover:animate-none hover:border-green-300 hover:text-green-500 cursor-pointer"
                  >
                    <MoveUp size={20} />
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
