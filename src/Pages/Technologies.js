import React from "react";
import { techStackDetails } from "../Details";

function Technologies({ isActive }) {
  const {
    html,
    css,
    js,
    react,
    tailwind,
    bootstrap,
    laravel,
    python,
    java,
    c,
    mysql,
    vscode,
    git,
    github,
    figma,
    docker,
    kubernetes,
    gitlab,
  } = techStackDetails;

  const techItems = [
    { src: html, label: "HTML" },
    { src: css, label: "CSS" },
    { src: js, label: "JavaScript" },
    { src: react, label: "React" },
    { src: tailwind, label: "Tailwind" },
    { src: bootstrap, label: "Bootstrap" },
    { src: laravel, label: "Laravel" },
    { src: python, label: "Python" },
    { src: java, label: "Java" },
    { src: c, label: "C" },
    { src: mysql, label: "MySQL" },
  ];

  const toolItems = [
    { src: vscode, label: "VS Code" },
    { src: git, label: "Git" },
    { src: github, label: "GitHub" },
    { src: figma, label: "Figma" },
    { src: docker, label: "Docker" },
    { src: gitlab, label: "GitLab" },
  ];

  return (
    <main className="container mx-auto max-width pt-10 pb-20">
      <section className="space-y-2">
        <h1
          className={`section-title ${
            isActive ? "section-title-active" : ""
          } text-3xl md:text-4xl xl:text-5xl xl:leading-tight font-bold text-hero-heading`}
        >
          Technologies & Tools
        </h1>
        <p className="text-content lg:max-w-3xl">
          Technologies I enjoy working with and the tools I use daily.
        </p>
      </section>

      <section className="pt-8 space-y-4">
        <h2 className="text-lg md:text-xl font-semibold text-hero-heading">
          Core Technologies
        </h2>
        <div className="tech-grid">
          {techItems.map(({ src, label }) => (
            <div key={label} className="tech-card">
              <img src={src} alt={label} title={label} />
              <span>{label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="pt-10 space-y-4">
        <h2 className="text-lg md:text-xl font-semibold text-hero-heading">
          Tools
        </h2>
        <div className="tech-grid">
          {toolItems.map(({ src, label }) => (
            <div key={label} className="tech-card">
              <img src={src} alt={label} title={label} />
              <span>{label}</span>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Technologies;
