import React from "react";
import Work from "../Components/Work";
import { personalDetails, workDetails, eduDetails } from "../Details";

function About({ isActive }) {
  return (
    <main className="container mx-auto max-width pt-10 pb-20">
      <section className="space-y-5 max-w-3xl mb-12">
        <h1
          className={`section-title ${
            isActive ? "section-title-active" : ""
          } text-3xl md:text-4xl xl:text-5xl xl:leading-tight font-bold text-hero-heading`}
        >
          About Me
        </h1>
        <p className="text-content leading-relaxed">{personalDetails.about}</p>
      </section>
      <section className="space-y-8 relative">
        <h2 className="text-2xl md:text-3xl font-bold text-hero-heading flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-[#8B5CF6]/20 flex items-center justify-center text-sm">01</span>
          Work Experience
        </h2>
        <div className="timeline-container ml-2 md:ml-6">
          {workDetails.map((item, i) => (
            <div key={i} className="timeline-item relative">
              <div className="timeline-dot" />
              <Work
                position={item.Position}
                company={item.Company}
                location={item.Location}
                type={item.Type}
                duration={item.Duration}
                logo={item.logo}
              />
            </div>
          ))}
        </div>
      </section>
      <section className="pt-16 space-y-8 relative">
        <h2 className="text-2xl md:text-3xl font-bold text-hero-heading flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-[#8B5CF6]/20 flex items-center justify-center text-sm">02</span>
          Education
        </h2>
        <div className="timeline-container ml-2 md:ml-6">
          <div className="timeline-connector" />
          {eduDetails.map((item, i) => (
            <div key={i} className="timeline-item relative">
              <div className="timeline-dot" />
              <Work
                position={item.Position}
                company={item.Company}
                location={item.Location}
                type={item.Type}
                duration={item.Duration}
                logo={item.logo}
              />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default About;
