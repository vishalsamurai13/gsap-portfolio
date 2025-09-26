"use client";

import TextPressure from "@/components/ui/texts/TextPressure";
import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { ChevronDown } from "lucide-react";
import DesignCarousel from "@/components/design-carousel";
import ProjectCarousel from "@/components/project-carousel";

const Projects = () => {
  const [expandedDiv, setExpandedDiv] = useState<string | null>(null);

  const developmentRef = useRef<HTMLDivElement>(null);
  const designingRef = useRef<HTMLDivElement>(null);
  const developmentContentRef = useRef<HTMLDivElement>(null);
  const designingContentRef = useRef<HTMLDivElement>(null);

  // Mobile refs
  const mobileDevelopmentRef = useRef<HTMLDivElement>(null);
  const mobileDesigningRef = useRef<HTMLDivElement>(null);
  const mobileDevelopmentContentRef = useRef<HTMLDivElement>(null);
  const mobileDesigningContentRef = useRef<HTMLDivElement>(null);

  // Animate on expand/collapse for desktop
  useEffect(() => {
    const devBox = developmentRef.current;
    const desBox = designingRef.current;
    const devContent = developmentContentRef.current;
    const desContent = designingContentRef.current;

    if (expandedDiv === "development" && devBox) {
      gsap.to(devBox, {
        height: "30rem",
        width: "100%", // Set to full width
        transformOrigin: "bottom left",
        position: "absolute",
        left: 0,
        bottom: 0,
        zIndex: 10,
        duration: 1,
        ease: "power3.out",
      });

      // Ensure content scales correctly
      if (devContent) {
        gsap.to(devContent, {
          scaleX: 1,
          duration: 1,
          ease: "power3.out",
        });
      }
    } else if (devBox) {
      gsap.to(devBox, {
        height: "3rem",
        width: "50%", // Back to half width
        transformOrigin: "bottom left",
        position: "relative",
        zIndex: 1,
        duration: 1,
        ease: "power3.out",
      });

      // Reset content scale
      if (devContent) {
        gsap.to(devContent, {
          scaleX: 1,
          duration: 1,
          ease: "power3.out",
        });
      }
    }

    if (expandedDiv === "designing" && desBox) {
      gsap.to(desBox, {
        height: "30rem",
        width: "100%", // Set to full width
        transformOrigin: "bottom right", // Expand from right
        position: "absolute",
        right: 0,
        bottom: 0,
        zIndex: 10,
        duration: 1,
        ease: "power3.out",
      });

      // Ensure content scales correctly
      if (desContent) {
        gsap.to(desContent, {
          scaleX: 1,
          duration: 1,
          ease: "power3.out",
        });
      }
    } else if (desBox) {
      gsap.to(desBox, {
        height: "3rem",
        width: "50%", // Back to half width
        transformOrigin: "bottom right",
        position: "relative",
        zIndex: 1,
        duration: 1,
        ease: "power3.out",
      });

      // Reset content scale
      if (desContent) {
        gsap.to(desContent, {
          scaleX: 1,
          duration: 1,
          ease: "power3.out",
        });
      }
    }
  }, [expandedDiv]);

  // Animate on expand/collapse for mobile - only run on mobile screens
  useEffect(() => {
    // Check if we're on mobile
    const isMobile = window.innerWidth < 760; // lg breakpoint
    if (!isMobile) return;

    const mobileDevBox = mobileDevelopmentRef.current;
    const mobileDesBox = mobileDesigningRef.current;
    const mobileDevContent = mobileDevelopmentContentRef.current;
    const mobileDesContent = mobileDesigningContentRef.current;

    if (expandedDiv === "development" && mobileDevBox) {
      gsap.to(mobileDevBox, {
        height: "55vh",
        width: "100vw",
        transformOrigin: "bottom left",
        position: "fixed",
        top: "73%",
        left: "50%",
        x: "-50%",
        y: "-50%",
        zIndex: 50,
        duration: 1,
        ease: "power3.out",
      });

      if (mobileDevContent) {
        gsap.to(mobileDevContent, {
          scaleX: 1,
          duration: 0.8,
          ease: "power3.out",
        });
      }
    } else if (mobileDevBox) {
      gsap.to(mobileDevBox, {
        height: "3rem",
        width: "100%",
        transformOrigin: "center center",
        position: "relative",
        top: "auto",
        left: "auto",
        x: 0,
        y: 0,
        zIndex: 1,
        duration: 0.4,
        ease: "power2.in",
      });

      if (mobileDevContent) {
        gsap.to(mobileDevContent, {
          scaleX: 1,
          duration: 0.8,
          ease: "power3.out",
        });
      }
    }

    if (expandedDiv === "designing" && mobileDesBox) {
      gsap.to(mobileDesBox, {
        height: "55vh",
        width: "100vw",
        transformOrigin: "center center",
        position: "fixed",
        top: "73%",
        left: "50%",
        x: "-50%",
        y: "-50%",
        zIndex: 50,
        duration: 0.8,
        ease: "power3.out",
      });

      if (mobileDesContent) {
        gsap.to(mobileDesContent, {
          scaleX: 1,
          duration: 0.8,
          ease: "power3.out",
        });
      }
    } else if (mobileDesBox) {
      gsap.to(mobileDesBox, {
        height: "3rem",
        width: "100%",
        transformOrigin: "center center",
        position: "relative",
        top: "auto",
        left: "auto",
        x: 0,
        y: 0,
        zIndex: 1,
        duration: 0.5,
        ease: "power2.in",
      });

      if (mobileDesContent) {
        gsap.to(mobileDesContent, {
          scaleX: 1,
          duration: 0.8,
          ease: "power3.out",
        });
      }
    }
  }, [expandedDiv]);

  return (
    <div className="flex flex-col w-full h-screen lg:px-20 px-4">
      <div className="flex w-full h-full items-center justify-center lg:pt-40 pt-30">
        <TextPressure
          text="View My Work"
          flex={true}
          alpha={false}
          stroke={true}
          width={true}
          weight={true}
          italic={false}
          textColor="#ffffff"
          strokeColor="#ffffff"
          minFontSize={24}
        />
      </div>

      {/* Desktop Version */}
      <div className="hidden lg:flex w-full gap-6 items-end relative">
        {/* Development */}
        <div
          ref={developmentRef}
          onClick={() => {
            if (expandedDiv !== "development") {
              setExpandedDiv("development");
            }
          }}
          className="px-6 bg-gray-300 text-black flex flex-col items-center justify-center cursor-pointer overflow-hidden h-12 w-1/2"
        >
          <div
            ref={developmentContentRef}
            className={`w-full h-full flex flex-col ${
              expandedDiv === "development"
                ? "items-stretch cursor-default"
                : "items-center justify-center"
            }`}
          >
            {expandedDiv === "development" ? (
              <>
                <div className="w-full flex items-center justify-between py-4">
                  <h1 className="font-extrabold tracking-widest text-2xl uppercase">
                    Development
                  </h1>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setExpandedDiv(null);
                    }}
                    className="text-black hover:text-white flex items-center justify-center transition-colors cursor-pointer rounded-full border-2 border-black hover:bg-black"
                  >
                    <ChevronDown className="w-7 h-7" />
                  </button>
                </div>
                <div className="flex-1 w-full py-4 px-4">
                    <div className="flex space-x-4">
                        <ProjectCarousel />
                    </div>
                </div>
              </>
            ) : (
              <div className="flex items-center justify-center text-center w-full">
                <h1 className="font-extrabold tracking-widest text-2xl uppercase py-2">
                  Development
                </h1>
              </div>
            )}
          </div>
        </div>

        {/* Designing */}
        <div
          ref={designingRef}
          onClick={() => {
            if (expandedDiv !== "designing") {
              setExpandedDiv("designing");
            }
          }}
          className="px-6 bg-gray-300 text-black flex flex-col items-center justify-center cursor-pointer overflow-hidden h-12 w-1/2"
        >
          <div
            ref={designingContentRef}
            className={`w-full h-full flex flex-col ${
              expandedDiv === "designing"
                ? "items-stretch cursor-default"
                : "items-center justify-center"
            }`}
          >
            {expandedDiv === "designing" ? (
              <>
                <div className="w-full flex items-center justify-between py-4">
                  <h1 className="font-extrabold tracking-widest text-2xl uppercase">
                    Designing
                  </h1>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setExpandedDiv(null);
                    }}
                    className="text-black hover:text-white flex items-center justify-center transition-colors cursor-pointer rounded-full border-2 border-black hover:bg-black"
                  >
                    <ChevronDown className="w-7 h-7" />
                  </button>
                </div>
                <div className="flex-1 w-full py-4 px-4">
                    <div className="flex space-x-4">
                        <DesignCarousel />
                    </div>
                </div>
              </>
            ) : (
              <div className="flex items-center justify-center text-center w-full">
                <h1 className="font-extrabold tracking-widest text-2xl uppercase py-2">
                  Designing
                </h1>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Version */}
      <div className="lg:hidden w-full sm:flex flex-col space-y-4 relative">
        {/* Mobile Development */}
        <div
          ref={mobileDevelopmentRef}
          onClick={() => {
            if (expandedDiv !== "development") {
              setExpandedDiv("development");
            }
          }}
          className="px-4 bg-gray-300 text-black flex flex-col items-center justify-center cursor-pointer overflow-hidden h-4 w-full"
        >
          <div
            ref={mobileDevelopmentContentRef}
            className={`w-full flex flex-col ${
              expandedDiv === "development"
                ? "items-stretch cursor-default"
                : "items-center justify-center"
            }`}
          >
            {expandedDiv === "development" ? (
              <>
                <div className="w-full flex items-center justify-between py-3">
                  <h1 className="font-extrabold tracking-widest text-xl uppercase">
                    Development
                  </h1>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setExpandedDiv(null);
                    }}
                    className="text-black hover:text-white flex items-center justify-center transition-colors cursor-pointer rounded-full border-2 border-black hover:bg-black"
                  >
                    <ChevronDown className="w-6 h-6" />
                  </button>
                </div>
                <div className="flex-1 w-full py-2 px-2">
                  <div className="w-full overflow-x-auto">
                    <ProjectCarousel />
                  </div>
                </div>
              </>
            ) : (
              <div className="flex items-center justify-center text-center w-full">
                <h1 className="font-extrabold tracking-widest text-xl uppercase py-2">
                  Development
                </h1>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Designing */}
        <div
          ref={mobileDesigningRef}
          onClick={() => {
            if (expandedDiv !== "designing") {
              setExpandedDiv("designing");
            }
          }}
          className="px-4  bg-gray-300 text-black flex flex-col items-center justify-center cursor-pointer overflow-hidden h-12 w-full"
        >
          <div
            ref={mobileDesigningContentRef}
            className={`w-full h-full flex flex-col ${
              expandedDiv === "designing"
                ? "items-stretch cursor-default"
                : "items-center justify-center"
            }`}
          >
            {expandedDiv === "designing" ? (
              <>
                <div className="w-full flex items-center justify-between py-3">
                  <h1 className="font-extrabold tracking-widest text-xl uppercase">
                    Designing
                  </h1>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setExpandedDiv(null);
                    }}
                    className="text-black hover:text-white flex items-center justify-center transition-colors cursor-pointer rounded-full border-2 border-black hover:bg-black"
                  >
                    <ChevronDown className="w-6 h-6" />
                  </button>
                </div>
                <div className="flex-1 w-full py-2 px-2">
                  <div className="w-full overflow-x-auto">
                    <DesignCarousel />
                  </div>
                </div>
              </>
            ) : (
              <div className="flex items-center justify-center text-center w-full">
                <h1 className="font-extrabold tracking-widest text-xl uppercase py-2">
                  Designing
                </h1>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;