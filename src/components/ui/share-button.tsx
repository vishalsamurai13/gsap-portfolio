"use client"

import React, { useState } from "react"
import { LucideIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

interface ShareLink {
  icon: LucideIcon
  href?: string
  onClick?: () => void
  label?: string
}

interface ShareButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  links: ShareLink[]
  children: React.ReactNode
}

const ShareButton = ({
  className,
  links,
  children,
  ...props
}: ShareButtonProps) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div 
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Button
        className={cn(
          "relative min-w-40 rounded-3xl ",
          "bg-transparent",
          "hover:bg-gray-50 dark:hover:bg-gray-950",
          "text-black dark:text-white",
          "border-2 border-[#4d631a] ",
          "transition-all duration-300",
          isHovered ? "opacity-0" : "opacity-100",
          className
        )}
        {...props}
      >
        <span className="flex items-center gap-2 text-black">{children}</span>
      </Button>
      
      <div 
        className={cn(
          "absolute left-0 top-0 flex h-10 overflow-hidden",
          "transition-all duration-500 ease-in-out",
          isHovered ? "opacity-100 w-auto" : "opacity-0 w-0"
        )}
      >
        {links.map((link, index) => {
          const Icon = link.icon
          const Wrapper = link.href ? "a" : "button"

          return (
            <Wrapper
              key={index}
              {...(link.href
                ? { href: link.href, target: "_blank", rel: "noopener noreferrer" }
                : { onClick: link.onClick, type: "button" })}
              className={cn(
                "h-10 w-15 flex items-center justify-center flex-shrink-0",
                "bg-[#5b8200] text-white dark:text-black",
                "border-2 border-white",
                "transition-all duration-500 ease-in-out",
                index === 0 && "rounded-l-3xl",
                index === links.length - 1 && "rounded-r-3xl",
                "border-r border-white/10 last:border-r-0 dark:border-black/10",
                "hover:bg-gray-900 dark:hover:bg-gray-900",
                isHovered
                  ? "translate-x-0 opacity-100 scale-100"
                  : "translate-x-4 opacity-0 scale-95"
              )}
              style={{
                transitionDelay: isHovered ? `${index * 100}ms` : `${(links.length - 1 - index) * 50}ms`
              }}
            >
              <Icon className="size-5 text-white" />
            </Wrapper>
          )
        })}
      </div>
    </div>
  )
}

export default ShareButton