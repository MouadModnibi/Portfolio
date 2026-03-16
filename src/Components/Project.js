import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { techStackDetails } from "../Details";

function Project({ title, image, description, techstack, githubLink }) {
  const [isHovered, setIsHovered] = useState(false);

  // Parse techstack string into an array of tech names
  const techArray = techstack ? techstack.split(/[,\/]/).map(t => t.trim().toLowerCase()) : [];

  return (
    <motion.article 
      className="project-card mt-12 bg-[#020617] relative cursor-pointer"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ y: -8 }}
    >
      {/* Envelope / Folder open effect */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-b from-[#8B5CF6]/10 to-transparent z-20 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />
      
      {/* Folder Tab Text */}
      <div className="absolute top-[-26px] left-[10px] z-30 opacity-60 font-mono text-xs text-blue-400">
        ./{title.toLowerCase().replace(/\s+/g, "_")}
      </div>

      <div className="project-image-container aspect-[16/10] overflow-hidden relative z-10">
        <motion.img 
          src={image} 
          alt={title} 
          loading="lazy" 
          className="project-image w-full h-full object-cover" 
          animate={{ scale: isHovered ? 1.05 : 1 }}
          transition={{ duration: 0.4 }}
        />
        <div className="absolute inset-0 bg-[#020617]/20 z-10 transition-colors duration-300 pointer-events-none mix-blend-overlay hover:bg-transparent" />
      </div>
      
      <div className="p-6 relative z-10 bg-[#020617]">
        <h1 className="text-xl font-bold text-white tracking-wide">{title}</h1>
        <p className="text-slate-400 font-light mt-3 leading-relaxed text-sm">{description}</p>
        
        <div className="mt-6">
          <h3 className="text-sm font-semibold text-slate-300 mb-3">Technologies</h3>
          <div className="flex flex-wrap gap-3">
            {techArray.map((tech, idx) => {
              // Try to find the matching icon from techStackDetails (handle variations like 'react js' -> 'react')
              const matchedKey = Object.keys(techStackDetails).find(key => tech.includes(key));
              const iconSrc = matchedKey ? techStackDetails[matchedKey] : null;

              if (!iconSrc) {
                 // Fallback to text if icon not found
                 return <span key={idx} className="text-xs px-2 py-1 rounded bg-[#1e293b] text-slate-300">{tech}</span>;
              }

              return (
                <div key={idx} className="relative group/tooltip flex items-center justify-center w-8 h-8 rounded-full bg-[#1e293b] border border-white/5 hover:border-purple-500/50 hover:bg-[#8B5CF6]/10 transition-colors">
                  <img src={iconSrc} alt={tech} className="w-4 h-4 object-contain" />
                  
                  {/* Tooltip */}
                  <div className="absolute -top-10 scale-0 group-hover/tooltip:scale-100 transition-transform origin-bottom bg-slate-800 text-white text-[10px] px-2 py-1 rounded shadow-lg whitespace-nowrap">
                    {tech}
                    <div className="absolute bottom-[-4px] left-1/2 -translate-x-1/2 border-l-4 border-r-4 border-t-4 border-transparent border-t-slate-800" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex justify-start items-center mt-8 pt-4 border-t border-slate-800/80">
          <a
            href={githubLink}
            target="_blank"
            rel="noreferrer noopener"
            className="flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-purple-400 transition-colors group/link"
          >
            <svg
              className="w-5 h-5 fill-current transition-transform group-hover/link:rotate-12"
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            View Source
          </a>
        </div>
      </div>
    </motion.article>
  );
}

export default Project;
