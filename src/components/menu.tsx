"use client";

import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link';
import {gsap} from 'gsap';
import { useGSAP } from '@gsap/react';
import ShareButton from './ui/share-button';
import { Linkedin, Instagram, Github } from 'lucide-react';

const menuLinks = [
  {path: '/', label: 'Home'},
  {path: '/experience', label: 'Experience'},
  {path: '/projects', label: 'Projects'},
  {path: '/services', label: 'Services'},
  {path: '/contact', label: 'Contact'}
]

const Menu = () => {
  const contactLinks = [
    {icon: Linkedin, href: 'https://www.linkedin.com/in/vishal-sharma-0b5536219/'},
    {icon: Instagram, href: 'https://www.instagram.com/vishalsharma.dev/'},
    {icon: Github, href: 'https://github.com/vishalsamurai13'}
  ]

  const container = useRef<HTMLDivElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Type the timeline reference properly
  const tl = useRef<gsap.core.Timeline | null>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useGSAP(() => {
    gsap.set(".menu-link-item-holder", { y: 75});

    tl.current = gsap.timeline({ paused: true })
    
    .to(".menu-overlay", {
      duration: 1.25,
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      ease: "power4.inOut",
    })
    .to(".menu-link-item-holder", {
      y: 0,
      duration: 1,
      stagger: 0.1,
      ease: "power4.inOut",
      delay: -0.75,
    });
  }, { scope: container });

  useEffect(() => {
    if (tl.current) {
      if (isMenuOpen) {
        tl.current.play();
      } else {
        tl.current.reverse();
      }
    }
  }, [isMenuOpen]);

  return (
    <div className='relative' ref={container}>
      {/* Menu Bar */}
      <div className="fixed top-0 left-0 w-screen z-10 flex justify-between items-center bg-transparent" 
           style={{ padding: '2rem' }}>
        <div className="menu-logo">
          <Link href="/" className="text-white cursor-pointer hover:opacity-80 transition-opacity">
            Vishal Sharma
          </Link>
        </div>
        <div className="cursor-pointer" onClick={toggleMenu}>
          <p className="text-white cursor-pointer hover:opacity-80 transition-opacity">Menu</p>
        </div>
      </div>

      {/* Menu Overlay */}
      <div 
        className="menu-overlay fixed top-0 left-0 w-screen h-screen p-0 z-20 flex flex-col bg-[#c5fb45]"
        style={{
          clipPath: 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)'
        }}
      >
        {/* Menu Overlay Bar */}
        <div className="flex justify-between items-center z-25" style={{ padding: '2rem' }}>
          <div className="menu-logo">
            <Link href="/" className="text-black cursor-pointer hover:opacity-80 transition-opacity">
              Vishal Sharma
            </Link>
          </div>
          <div className="block menu-lg:hidden cursor-pointer" onClick={toggleMenu}>
            <p className="text-black cursor-pointer hover:opacity-80 transition-opacity">Close</p>
          </div>
        </div>

        {/* Close Icon */}
        <div className="absolute cursor-pointer z-35 hidden bg-[#c5fb45] lg:block" 
             style={{ top: '2rem', right: '2rem' }} 
             onClick={toggleMenu}>
          <p 
            className="text-black leading-[70%] cursor-pointer hover:opacity-80 transition-opacity"
            style={{
              fontSize: '100px',
              WebkitTextStroke: '5px #c5fb45'
            }}
          >
            &#x2715;
          </p>
        </div>

        {/* Menu Content */}
        <div className="flex-1 flex flex-col" style={{ padding: '2rem', paddingTop: '4rem' }}>
          <div className="mb-16">
            {menuLinks.map((link, index) => (
              <div 
                key={index}
                className="w-max mb-2"
                style={{clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)'}}
              >
                <div className='menu-link-item-holder relative cursor-pointer ' onClick={toggleMenu}>
                  <Link 
                    href={link.path} 
                    className='text-black text-6xl menu-lg:text-8xl font-thin tracking-tight block transition-transform duration-300 ease-out hover:translate-x-4 w-screen hover:font-medium'
                  >
                    {link.label}
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Menu Info */}
          <div className="flex flex-col menu-lg:flex-row gap-8 menu-lg:gap-16">
            <div className="flex-1 flex flex-col gap-2 w-full">
              <ShareButton links={contactLinks}> Contact Me </ShareButton>
            </div>
            <div className="flex-1 flex flex-col gap-2">
              <p className="text-black">vishal.s120103@gmail.com</p>
              <p className="text-black">+91 9819369217</p>
            </div>
          </div>
        </div>

        {/* Menu Preview */}
        <div className="absolute z-25" style={{ bottom: '2rem', right: '2rem' }}>
          <p className="text-black cursor-pointer hover:opacity-80 transition-opacity">View Show Reel</p>
        </div>

        {/* This section is removed as we now handle close button in the overlay bar for mobile */}
      </div>
    </div>
  )
}

export default Menu