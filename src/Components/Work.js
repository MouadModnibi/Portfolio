import React from "react";

function Work({ position, company, location, type, duration, logo }) {
  return (
    <article className="relative rounded-xl border border-white/10 bg-white/5 px-5 py-4 transition-all duration-300 hover:border-[#8B5CF6]/40 hover:bg-white/[0.08]">
      <div className="flex gap-4 items-start">
        {logo && (
          <div className="shrink-0 w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center overflow-hidden border border-white/10 mt-1">
            <img 
              src={logo} 
              alt={company} 
              className="w-10 h-10 object-contain"
              onError={(e) => {
                e.target.onerror = null;
                e.target.style.display = 'none';
                e.target.parentNode.innerHTML = '<span class="text-[#8B5CF6] font-bold text-xl">' + company.charAt(0) + '</span>';
              }}
            />
          </div>
        )}
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap justify-between items-start gap-2">
            <h3 className="text-hero-heading font-semibold text-base md:text-lg truncate">{position}</h3>
            <span className="text-[10px] md:text-xs font-medium px-2 md:py-1 rounded-full bg-[#8B5CF6]/25 text-[#C4B5FD] border border-[#8B5CF6]/40 whitespace-nowrap">
              {type}
            </span>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-1 pt-1.5 text-content text-sm items-center">
            <span className="flex items-center gap-1.5 font-medium">
              <svg className="fill-[#A7A7A7] shrink-0" width="16" height="12" viewBox="0 0 16 12" fill="none">
                <path d="M3.33331 1.5V10.5H7.33331V8.75H8.66665V10.5H12.6666V1.5H3.33331ZM4.66665 2.5H5.99998V3.5H4.66665V2.5ZM7.33331 2.5H8.66665V3.5H7.33331V2.5ZM9.99998 2.5H11.3333V3.5H9.99998V2.5ZM4.66665 4.5H5.99998V5.5H4.66665V4.5ZM7.33331 4.5H8.66665V5.5H7.33331V4.5ZM9.99998 4.5H11.3333V5.5H9.99998V4.5ZM4.66665 6.5H5.99998V7.5H4.66665V6.5ZM7.33331 6.5H8.66665V7.5H7.33331V6.5ZM9.99998 6.5H11.3333V7.5H9.99998V6.5ZM4.66665 8.5H5.99998V9.5H4.66665V8.5ZM9.99998 8.5H11.3333V9.5H9.99998V8.5Z" />
              </svg>
              {company}
            </span>
            {location && (
              <span className="flex items-center gap-1.5 opacity-80">
                {location}
              </span>
            )}
            <span className="text-content/70 italic text-xs ml-auto md:ml-0">{duration}</span>
          </div>
        </div>
      </div>
    </article>
  );
}

export default Work;
