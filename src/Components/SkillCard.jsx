export default function SkillCards({ skill, icon }) {
  return (
    <div className="group relative">
      {/* Background Glow Effect on Hover */}
      <div className="absolute -inset-0.5 bg-[#f0b638] rounded-xl blur opacity-0 group-hover:opacity-20 transition duration-500"></div>
      
      <div className="relative flex flex-col items-center justify-center p-6 bg-[#0d0f18] border border-gray-800 rounded-xl transition-all duration-300 group-hover:-translate-y-2 group-hover:border-[#f0b638]/50">
        
        <div className="mb-4 text-3xl text-gray-400 group-hover:text-[#f0b638] transition-colors duration-300">
          <i className={icon}></i>
        </div>
        
        <h3 className="text-sm font-semibold tracking-wide text-gray-300 group-hover:text-white">
          {skill}
        </h3>

        {/* Modern Accent line */}
        <div className="mt-3 w-0 h-0.5 bg-[#f0b638] transition-all duration-300 group-hover:w-full"></div>
      </div>
    </div>
  );
}