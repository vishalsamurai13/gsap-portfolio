/* eslint-disable react/no-unescaped-entities */
'use client';

import Form from '@/components/form'
import React from 'react'
import SplitText from '@/components/SplitText'
import { Boxes } from '@/components/ui/shadcn-io/background-boxes';


const Contact = () => {

  return (
    <div className="flex flex-col items-center justify-center h-screen px-6 bg-black overflow-hidden relative">
      <Boxes className="absolute inset-0 z-0" />
      <div className="text-center mb-6 mt-24 z-10">
        <SplitText
          text="Drop me a Text!"
          className="text-4xl lg:text-6xl font-black text-center"
          delay={100}
          duration={0.6}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="center"
        />
        <p className="text-[#aeaeae] text-md mt-1 lg:mt-4">
          I'd love to hear about your project
        </p>
      </div>

      <Form />
    </div>

  )
}

export default Contact
