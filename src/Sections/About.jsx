import yash from "/aboutYash.png";

export default function About() {
  return (
    <section id="About" className="relative w-full py-20 bg-black text-white overflow-hidden">
      
      {/* Container to constrain width */}
      <div className="max-w-6xl mx-auto px-6 flex flex-col lg:flex-row items-center justify-center gap-12">
        
        {/* --- IMAGE SECTION (Hidden on Mobile/Tablet, Visible on Desktop) --- */}
        <div className="hidden lg:flex w-full lg:w-[40%] justify-center relative z-10">
          {/* Golden Glow behind image */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#f0b638]/20 rounded-full blur-[80px]" />
          
          <img
            src={yash}
            alt="Yash"
            className="relative w-80 object-cover drop-shadow-[0_0_30px_rgba(240,182,56,0.3)] hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* --- TEXT SECTION --- */}
        <div className="w-full lg:w-[60%] flex flex-col items-center lg:items-start text-center lg:text-left relative z-10">
          
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            About <span className="text-[#f0b638]">Me</span>
          </h2>

          {/* Golden Glow for mobile text background */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#f0b638]/5 rounded-full blur-[100px] pointer-events-none lg:hidden" />

          <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-2xl lg:text-justify">
            I am <span className="text-[#f0b638] font-semibold">Yash</span>, an aspiring <strong className="text-white">Cloud</strong> and <strong className="text-white">DevOps</strong> Engineer with hands-on experience in AWS services and Infrastructure as Code. I have worked on real-world projects using EC2, S3, VPC, RDS, Terraform, and CI/CD concepts. I am passionate about learning cloud technologies, automating infrastructure, and building scalable and secure systems.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap justify-center lg:justify-start gap-5">
            <a 
              href="#Contact" 
              className="px-8 py-3 bg-[#f0b638] text-black rounded-xl font-bold hover:scale-105 hover:bg-[#d9a42d] transition-all shadow-[0_0_15px_rgba(240,182,56,0.4)]"
            >
              Contact Me
            </a>
            
            <a 
              href="#Projects" 
              className="px-8 py-3 border-2 border-[#f0b638] text-[#f0b638] font-bold rounded-xl hover:bg-[#f0b638] hover:text-black transition-all"
            >
              View Projects
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}