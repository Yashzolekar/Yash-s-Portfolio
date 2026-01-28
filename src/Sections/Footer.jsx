import { Heart, ExternalLink } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#05070a] border-t border-gray-800 text-gray-400 text-sm">
      <div className="max-w-6xl mx-auto px-5 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
        
        {/* Left Side: Copyright */}
        <div className="text-center md:text-left">
          <p>© 2026 <span className="text-white font-semibold">Yash Zolekar</span>. All rights reserved.</p>
        </div>

        {/* Right Side: CP Colab Advertisement */}
        <div className="flex items-center gap-2">
          <span className="hidden sm:inline">Designed & Developed by</span>
          
          <a 
            href="https://cpcolab.vercel.app" // Replace with actual link
            target="_blank" 
            rel="noopener noreferrer"
            className="group flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0d1117] border border-gray-700 hover:border-[#f0b638] hover:bg-[#f0b638]/10 transition-all duration-300"
          >
            <span className="font-bold text-white group-hover:text-[#f0b638] transition-colors">
              CP Colab
            </span>
            <ExternalLink size={14} className="group-hover:text-[#f0b638] transition-colors" />
          </a>
        </div>

      </div>
      
      {/* Bottom subtle text (Optional tagline) */}
      <div className="w-full text-center pb-8 pt-2 opacity-50 text-xs">
        <p className="flex items-center justify-center gap-1">
          Built with <Heart size={10} className="text-red-500 fill-red-500" /> for the future.
        </p>
      </div>
    </footer>
  );
}