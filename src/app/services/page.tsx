import SplitText from "@/components/SplitText";
import StickyCards from "@/components/StickyCard";
import { WavyBackground } from "@/components/ui/shadcn-io/wavy-background";
import ReactLenis from "lenis/react";
import Link from "next/link";


export default function Services() {
  return (
    
    <main className="flex flex-col min-h-screen overflow-hidden">
      <ReactLenis root />
      <div className="relative h-screen w-full overflow-hidden">
        <WavyBackground
            backgroundFill="black"
            colors={["#ff6b6b", "#4ecdc4", "#45b7d1", "#96ceb4", "#feca57"]}
            waveWidth={50}
            blur={5}
            speed="slow"
            waveOpacity={0.5}
            containerClassName="h-full w-full"
            className="flex flex-col items-center justify-center"
        >
            <div className="text-center flex flex-col gap-4 mb-32 items-center">
                <SplitText
                    text="Explore our Services"
                    className="font-black text-3xl lg:text-[150px] tracking-[-0.1rem] lg:tracking-[-0.35rem] text-center z-10"
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
                <Link 
                  href="/contact" 
                  className="px-4 py-2 bg-gray-300 text-black rounded-xl min-w-38 mt-4 lg:mt-8 hover:bg-gray-600 hover:text-white shadow-2xl font-semibold transition-all duration-500 ease-in-out text-sm"
                >
                    Get a Quotation
                </Link>
            </div>

            <div className="lg:flex grid grid-cols-2 gap-6 lg:gap-32 px-4 mt-16">
                <div className="flex gap-4 items-center lg:min-w-[240px] border-2 px-4 py-2 rounded-lg text-white justify-center">
                    <h1 className="text-3xl font-bold flex lg:items-center items-end">16 
                        <span className="text-xl font-light">+</span>
                    </h1>
                    <p className="text-center font-light text-xs tracking-wide lg:text-[16px]">Services Offered</p>
                </div>
                <div className="flex gap-4 items-center lg:min-w-[240px] border-2 px-4 py-2 rounded-lg text-white justify-center">
                    <h1 className="text-3xl font-bold flex lg:items-center items-end">6 
                        <span className="text-xl font-light">+</span>
                    </h1>
                    <p className="text-center font-light text-xs tracking-wide lg:text-[16px]">Clients Served</p>
                </div>
                <div className="flex gap-4 items-center lg:min-w-[240px] border-2 px-4 py-2 rounded-lg text-white justify-center">
                    <h1 className="text-3xl font-bold flex lg:items-center items-end">10 
                        <span className="text-xl font-light">+</span>
                    </h1>
                    <p className="text-center font-light text-xs tracking-wide lg:text-[16px]">Projects Completed</p>
                </div>
                <div className="flex gap-4 items-center lg:min-w-[240px] border-2 px-4 py-2 rounded-lg text-white justify-center">
                    <h1 className="text-3xl font-bold flex lg:items-center items-end">1 
                        <span className="text-xl font-light">+</span>
                    </h1>
                    <p className="text-center font-light text-xs tracking-wide lg:text-[16px]">Year Experience</p>
                </div>
            </div>

            <div className="relative lg:top-50 top-40 left-0 w-full h-full flex flex-col items-end px-4">
                <div className="flex flex-col gap-2 text-right p-2 bg-red-500/60">
                    <p className="text-[8px]">*Note: I usually charge 5-15$ per hour for my services.</p>
                    <p className="text-[8px]">*Note: Prices may vary depending on the project/type of services.</p>   
                </div>
            </div>
        </WavyBackground>
      </div>
      <StickyCards />
    </main>
    
  );
}
