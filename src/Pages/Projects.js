import React from "react";
import Project from "../Components/Project";
import { projectDetails } from "../Details";

function Projects({ isActive }) {
  return (
    <main className="container mx-auto max-width pt-10 mb-20">
      <section>
        <h1
          className={`section-title ${
            isActive ? "section-title-active" : ""
          } text-3xl md:text-4xl xl:text-5xl xl:leading-tight font-bold text-hero-heading`}
        >
          Projects
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {React.Children.toArray(
            projectDetails.map(
              ({ title, image, description, techstack, previewLink, githubLink }) => (
                <Project
                  title={title}
                  image={image}
                  description={description}
                  techstack={techstack}
                  previewLink={previewLink}
                  githubLink={githubLink}
                />
              )
            )
          )}
        </div>
      </section>
    </main>
  );
}

export default Projects;
