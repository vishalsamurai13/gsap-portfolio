/* eslint-disable @typescript-eslint/no-require-imports */
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './src/**/*.{js,ts,jsx,tsx,mdx}',
      './pages/**/*.{js,ts,jsx,tsx,mdx}',
      './components/**/*.{js,ts,jsx,tsx,mdx}',
      './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
      screens: {
        'sm': '640px',   // Small devices (landscape phones)
        'md': '768px',   // Medium devices (tablets)
        'lg': '1024px',  // Large devices (laptops/desktops)
        'xl': '1280px',  // Extra large devices
        '2xl': '1536px', // 2X Large devices
        // Custom breakpoints
        'mobile': '480px',
        'tablet': '768px',
        'laptop': '1024px',
        'desktop': '1280px',
        // Menu specific breakpoint
        'menu-lg': '900px', // This matches your original menu breakpoint
      },
      extend: {
        colors: {
          // Your custom colors
          'vanta-green': '#1e702d',
          'vanta-light-green': '#18dc18',
          'menu-bg': '#c5fb45',
      
          // Needed for shadcn Button component
          primary: {
            DEFAULT: '#2563eb', // blue-600
            foreground: '#ffffff',
          },
          secondary: {
            DEFAULT: '#6b7280', // gray-500
            foreground: '#ffffff',
          },
          destructive: {
            DEFAULT: '#dc2626', // red-600
            foreground: '#ffffff',
          },
          accent: {
            DEFAULT: '#f3f4f6', // gray-100
            foreground: '#111827',
          },
          background: '#ffffff',
          input: '#e5e7eb',
          ring: '#3b82f6',
        },
      },
    },
    plugins: [require('tailwind-scrollbar-hide')],
  }