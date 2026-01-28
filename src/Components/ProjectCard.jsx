import { ExternalLink, Github } from "lucide-react";

export default function ProjectCards({ img, title, description, languages, liveLink, githubLink }) {
  return (
    <div className="group bg-[#0d1117] border border-gray-800 rounded-2xl overflow-hidden flex flex-col transition-all duration-500 hover:border-[#f0b638]/50 hover:-translate-y-2 shadow-2xl">
      
      {/* Project Image with Overlay */}
      <div className="relative h-48 w-full overflow-hidden">
        <img 
          src={img || "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=500&auto=format&fit=crop"} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d1117] to-transparent opacity-60"></div>
      </div>

      <div className="p-6 flex flex-col grow">
        {/* Tech Stack Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {languages?.map((lang, idx) => (
            <span
              key={idx}
              className="px-2.5 py-0.5 text-[10px] uppercase tracking-wider rounded-md bg-gray-900 border border-gray-700 text-[#f0b638] font-bold"
            >
              {lang}
            </span>
          ))}
        </div>

        <h3 className="text-xl font-bold text-white group-hover:text-[#f0b638] transition-colors mb-2 text-left">
          {title}
        </h3>
        
        <p className="text-gray-400 text-sm leading-relaxed text-left line-clamp-3 mb-6 flex-grow">
          {description}
        </p>

        {/* Links Footer */}
        <div className="flex items-center gap-4 pt-4 border-t border-gray-800">
          {liveLink && (
            <a href={liveLink} target="_blank" className="text-gray-400 hover:text-[#f0b638] transition-colors flex items-center gap-1 text-xs font-medium">
              <ExternalLink size={16} /> Live Demo
            </a>
          )}

          {githubLink && (
            <a href={githubLink} target="_blank" className="text-gray-400 hover:text-[#f0b638] transition-colors flex items-center gap-1 text-xs font-medium">
              <Github size={16} /> Source Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
}