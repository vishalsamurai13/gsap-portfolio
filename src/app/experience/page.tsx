'use client'

import React from 'react'
import LiquidEther from '@/components/ui/shadcn-io/liquid-background/LiquidEther'
import { ChevronDown } from 'lucide-react'
import SplitText from '@/components/SplitText'

const Experience = () => {
  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 w-full h-full">
        <LiquidEther
          colors={['#5227FF', '#FF9FFC', '#B19EEF']}
          mouseForce={20}
          cursorSize={100}
          isViscous={false}
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.5}
          isBounce={false}
          autoDemo={true}
          autoSpeed={0.5}
          autoIntensity={2.2}
          takeoverDuration={0.25}
          autoResumeDelay={3000}
          autoRampDuration={0.6}
        />
      </div>

      {/* Centered Header */}
      <SplitText
        text="My Experiences"
        className="font-black text-[40px] lg:text-[150px] tracking-[-0.1rem] lg:tracking-[-0.35rem] text-center z-10"
        delay={100}
        duration={1}
        ease="power3.out"
        splitType="chars"
        from={{ opacity: 0, y: 40 }}
        to={{ opacity: 1, y: 0 }}
        threshold={0.1}
        rootMargin="-100px"
        textAlign="center"
      />

      {/* Bottom Scroll Indicator */}
      <div className="absolute bottom-6 flex flex-col items-center z-10">
        <p className="text-[9px] animate-bounce text-center mb-1 text-[#afafaf]">
          Scroll down to reveal
        </p>
        <span className="h-18 w-[1px] bg-[#afafaf]/60 animate-pulse" />
        <ChevronDown className="-mt-2 w-4 h-4 text-[#afafaf]/80 animate-ping" />
      </div>
    </div>
  )
}

export default Experience
