import SplineHome from "@/components/spline/SplineHome"
import HeroWithSkills from "@/components/HeroWithSkills"

export default function Home() {
  return (
    <main className="flex flex-col bg-gray-900 min-h-screen overflow-hidden">
      {/* Hero Section */}
      <section className="relative flex flex-col w-screen h-screen">
        {/* Background spline */}
        <SplineHome />

        {/* Absolute overlay (Hero + Skills) */}
        <div className="absolute inset-0 w-full flex flex-col justify-center items-center lg:w-2/5 top-1/7 lg:top-1/8 lg:justify-start lg:items-start lg:px-2">
          <div className="w-full max-w-4xl lg:max-w-none">
            <HeroWithSkills />
          </div>
        </div>
      </section>
    </main>
  )
}