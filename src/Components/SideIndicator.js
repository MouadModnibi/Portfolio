import React from "react";

function SideIndicator({ sections, activeSection, visible }) {
  const handleNav = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav
      aria-label="Section navigation"
      className={[
        "fixed right-7 top-1/2 -translate-y-1/2",
        "z-50 pointer-events-none",
        "transition-all duration-500 ease-out",
        visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-3",
      ].join(" ")}
    >
      <ul className="flex flex-col gap-5 pointer-events-auto">
        {sections.map((s) => {
          const isActive = activeSection === s.id;
          return (
            <li key={s.id}>
              <a
                href={"#" + s.id}
                onClick={(e) => handleNav(e, s.id)}
                className={[
                  "group flex items-center",
                  "text-[12px] leading-none select-none",
                  isActive ? "text-violet-300" : "text-slate-400/80",
                ].join(" ")}
              >
                <span
                  aria-hidden="true"
                  className={[
                    "inline-block rounded-full",
                    isActive ? "w-3 h-3" : "w-2.5 h-2.5",
                    "transition-all duration-300 ease-out",
                    isActive
                      ? "bg-violet-400 shadow-[0_0_14px_rgba(139,92,246,0.95)] scale-100"
                      : "bg-slate-500/70 shadow-none scale-100 group-hover:shadow-[0_0_10px_rgba(139,92,246,0.7)] group-hover:bg-violet-300",
                  ].join(" ")}
                />
                <span
                  className={[
                    "ml-2 whitespace-nowrap",
                    "transition-all duration-300 ease-out",
                    isActive
                      ? "opacity-100 translate-x-0 text-violet-200 font-semibold drop-shadow-[0_0_10px_rgba(139,92,246,0.75)]"
                      : "opacity-100 translate-x-0 text-slate-400/80",
                  ].join(" ")}
                >
                  {s.label}
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default SideIndicator;
