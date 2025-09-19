'use client';

import Image from 'next/image'
import React, { useRef } from 'react'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const StickyCards = () => {
    const stickyCardsData = [
        {
          index: '01',
          title: 'Development Services',
          image: "/card1.PNG",
          service: [
            {
              id: "a",
              header: "Frontend Development",
              description: "I build clean, responsive, and user-friendly interfaces that deliver seamless experiences across devices, ensuring websites look modern and professional."
            },
            {
              id: "b",
              header: "Backend Development",
              description: "I create fast, secure, and scalable backend systems with well-structured APIs and databases powering applications efficiently."
            },
            {
              id: "c",
              header: "E-Commerce Development",
              description: "I develop customized online stores with smooth checkout, secure payments, and easy management to help businesses sell more effectively."
            },
            {
              id: "d",
              header: "API Development & Integration",
              description: "I design and integrate APIs that connect applications and services smoothly, making data sharing fast and reliable."
            },
          ],
          bgColor: 'bg-white'
        },
        {
          index: '02',
          title: 'Optimization Services',
          image: "/card2.PNG",
          service: [
            {
              id: "a",
              header: "Performance Optimization",
              description: "I optimize website speed and efficiency, ensuring pages load quickly and run smoothly for better user engagement."
            },
            {
              id: "b",
              header: "Landing Page Optimization",
              description: "I improve landing pages to increase conversions with refined design, faster loading, and effective call-to-actions."
            },
            {
              id: "c",
              header: "Cross-Platform Optimization",
              description: "I ensure websites work seamlessly across all devices and browsers, providing a consistent and reliable user experience."
            },
            {
              id: "d",
              header: "Website Maintenance & Support",
              description: "I provide regular updates, bug fixes, and support to keep websites secure, functional, and up-to-date."
            },
          ],
          bgColor: 'bg-blue-100'
        },
        {
          index: '03',
          title: 'Add-on Services',
          image: "/card3.jpg",
          service: [
            {
              id: "a",
              header: "Cloud Deployment & CI/CD Pipelines",
              description: "I set up cloud hosting and CI/CD pipelines for faster deployments, scalability, and streamlined project management."
            },
            {
              id: "b",
              header: "Data Analytics Dashboards",
              description: "I design dashboards that present data clearly, helping businesses track performance and make informed decisions."
            },
            {
              id: "c",
              header: "Custom Software Solutions",
              description: "I build custom software tailored to unique business needs with flexibility, scalability, and ease of use."
            },
            {
              id: "d",
              header: "Third-Party Tool Integration",
              description: "I integrate external tools and services to enhance functionality and simplify workflows in applications."
            },
          ],
          bgColor: 'bg-green-100'
        },
        {
          index: '04',
          title: 'Design Services',
          image: "/card4.jpg",
          service: [
            {
              id: "a",
              header: "UI/UX Designing",
              description: "I craft visually appealing designs with intuitive navigation, ensuring smooth and enjoyable user experiences."
            },
            {
              id: "b",
              header: "Responsive Design",
              description: "I create responsive layouts that adjust seamlessly across devices, making websites look great everywhere."
            },
            {
              id: "c",
              header: "Brand Identity Design",
              description: "I design logos, color schemes, and brand assets that reflect business identity and values effectively."
            },
            {
              id: "d",
              header: "Interactive Prototyping",
              description: "I build interactive prototypes to visualize and test ideas before moving into full development."
            },
          ],
          bgColor: 'bg-purple-100'
        },
      ];

    const container = useRef(null);

    useGSAP(() => {
        const stickyCards = document.querySelectorAll(".sticky-card");

        stickyCards.forEach((card, index) => {
            if (index < stickyCards.length - 1) {
                ScrollTrigger.create({
                    trigger: card,
                    start: "top top",
                    endTrigger: stickyCards[stickyCards.length - 1],
                    end: "top top",
                    pin: true,
                    pinSpacing: false,
                });
            }

            if (index < stickyCards.length - 1) {
                ScrollTrigger.create({
                    trigger: stickyCards[index + 1],
                    start: "top bottom",
                    end: "top top",
                    onUpdate: (self) => {
                        const progress = self.progress;
                        const scale = 1 - progress * 0.25;
                        const rotation = (index % 2 === 0 ? 5 : -5) * progress;
                        const afterOpacity = progress;

                        gsap.set(card, {
                            scale: scale,
                            rotation: rotation,
                            "--after-opacity": afterOpacity,
                        });
                    }
                });
            }
        });
    }, { scope: container });

    return (
        <div className='w-full h-full relative' style={{ backgroundColor: '#373737' }} ref={container}>
            {stickyCardsData.map((cardData, index) => (
                <div 
                    className={`sticky-card relative w-full h-screen ${cardData.bgColor} text-black p-6 flex lg:flex-row flex-col lg:gap-12 gap-6 z-10`}
                    key={index}
                    style={{ willChange: 'transform' }}
                >
                    {/* Overlay */}
                    <div 
                        className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 pointer-events-none z-20 transition-opacity duration-100 ease-linear"
                        style={{ opacity: 'var(--after-opacity, 0)' }}
                    />
                    
                    {/* Left Section */}
                    <div className="lg:flex-[2] flex-1">
                        <h2 className="text-6xl font-semibold tracking-wider">{cardData.index}</h2>
                    </div>
                    
                    {/* Right Section */}
                    <div className="lg:flex-[4] lg:pt-12 flex flex-col gap-6">
                        <div className="lg:w-3/4 w-full flex flex-col gap-6">
                            <h2 className="text-3xl lg:text-5xl font-bold tracking-[-0.1rem] leading-tight">
                                {cardData.title}
                            </h2>

                            <div className="w-full relative h-[200px] lg:h-[500px]">
                                <Image
                                    src={cardData.image}
                                    alt={cardData.title}
                                    fill
                                    sizes="(max-width: 768px) 100vw, 
                                        (max-width: 1200px) 80vw, 
                                        50vw"
                                    className="rounded-lg object-cover"
                                    priority={index === 0} // first image loads faster
                                />
                            </div>
                        </div>

                        {/* Services List */}
                        <div className="flex flex-col gap-4">
                            {cardData.service.map((srv) => (
                                <div key={srv.id} className="flex flex-col">
                                    <h3 className="flex items-center text-[18px] lg:text-[20px] font-semibold gap-2">
                                        <ArrowRight className="text-green-600 w-5 h-5" />
                                        {srv.header}
                                    </h3>
                                    <p className="text-gray-700 text-[12px] lg:text-[14px] pl-7">
                                        {srv.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default StickyCards;
