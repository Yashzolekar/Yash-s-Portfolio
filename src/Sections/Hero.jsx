import React from "react";
import { ArrowDown } from "lucide-react";

import yash from "/yash.png";

export default function Hero() {
  return (
    <section id="Home" className="relative min-h-screen items-center justify-center bg-black overflow-hidden mt-20 md:-mb-60 lg:mb-0">
      
      <div className="flex items-center justify-center bg-black overflow-hidden mt-20">
      {/* CLOUD BACKGROUND */}
      {/* <div className="absolute flex right-30 bottom-30 items-center">
        <div className="cloud-shape"></div>
      </div> */}

            
      {/* BLUE GLOW */}
      <div className="absolute top-1/2 left-2/3 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <div className="w-125 h-125 bg-[#1F89E5]/40 rounded-full blur-[160px]" />
      </div>


      {/* MAIN CONTENT */}
      <div className="relative z-10 flex flex-col md:flex-row items-center gap-12 px-6">
        
        {/* LEFT TEXT */}
        <div className="text-center md:text-left max-w-xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
            Cloud & <span className="text-[#f0b638]">DevOps</span> Engineer
          </h1>
          <p className="mt-4 text-gray-300 text-lg">
            Designing scalable cloud infrastructure with AWS, Docker, Kubernetes
            and modern DevOps practices.
          </p>

          <div className="mt-6 flex gap-4 justify-center md:justify-start">
            <button className="px-6 py-3 bg-[#f0b638] text-black rounded-xl font-semibold hover:scale-105 transition">
<a href="#Projects">View Project </a> </button>
            <button 
            className="px-6 py-3 border border-[#f0b638] text-[#f0b638] rounded-xl hover:bg-[#f0b638] hover:text-black transition">
<a href="/yash_zolekar_Cloud and Devops.pdf" download>Download CV</a> </button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative flex justify-center">
                  {/* CLOUD BACKGROUND */}
      <div className="absolute flex -right-1/3 bottom-0 items-center">
        <div className="cloud-shape"></div>
      </div>
          <img
            src={yash}
            alt="Yash"
            className="w-60 md:w-72 drop-shadow-[0_25px_40px_rgba(240,182,56,0.5)]"
          />
        </div>

      </div>
</div>
      
            {/* Scroll Indicator */}
            <div className="flex flex-col items-center mt-8 animate-bounce text-[#f0b638]">
                <span className="text-xs tracking-wide">Scroll</span>
                <ArrowDown size={26} />
            </div>
    </section>
  );
}
