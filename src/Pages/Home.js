import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { personalDetails, socialMediaUrl } from "../Details";

function Home({ loadingComplete }) {
  const { name, tagline, img } = personalDetails;
  const { linkdein, github, instagram } = socialMediaUrl;
  const h11 = useRef();
  const h12 = useRef();
  const h13 = useRef();
  const btnRef = useRef();
  const myimageref = useRef();
  const mainRef = useRef();
  const logosRef = useRef([]);
  const [typedText, setTypedText] = useState("");

  const techPool = [
    { name: "laravel", icon: "https://skillicons.dev/icons?i=laravel" },
    { name: "java", icon: "https://skillicons.dev/icons?i=java" },
    { name: "kubernetes", icon: "https://skillicons.dev/icons?i=kubernetes" },
    { name: "docker", icon: "https://skillicons.dev/icons?i=docker" },
    { name: "python", icon: "https://skillicons.dev/icons?i=python" },
    { name: "mysql", icon: "https://skillicons.dev/icons?i=mysql" },
    { name: "php", icon: "https://skillicons.dev/icons?i=php" },
    { name: "spring", icon: "https://skillicons.dev/icons?i=spring" },
    { name: "react", icon: "https://skillicons.dev/icons?i=react" },
    { name: "tailwind", icon: "https://skillicons.dev/icons?i=tailwind" },
  ];

  const [selectedLogos, setSelectedLogos] = useState([]);

  useEffect(() => {
    // Randomly select 5 logos from the pool on load
    const shuffled = [...techPool].sort(() => 0.5 - Math.random());
    setSelectedLogos(shuffled.slice(0, 5));
  }, []);

  useEffect(() => {
    if (!loadingComplete || selectedLogos.length === 0) return;

    const tl = gsap.timeline();
    tl.from(
      h11.current,
      {
        y: "20%",
        delay: 0.8,
        opacity: 0,
        duration: 1.5,
        ease: "Power3.easeOut",
      }
    )
      .from(
        h12.current,
        {
          y: "20%",
          delay: 0.2,
          opacity: 0,
          duration: 1.5,
          ease: "Power3.easeOut",
        },
        "<"
      )
      .from(
        h13.current,
        {
          y: "20%",
          delay: 0.2,
          opacity: 0,
          duration: 1.5,
          ease: "Power3.easeOut",
        },
        "<"
      )
      .from(
        btnRef.current,
        {
          y: "20%",
          delay: 0.2,
          opacity: 0,
          duration: 1.5,
          ease: "Power3.easeOut",
        },
        "<"
      )
      .from(
        myimageref.current,
        {
          scale: 0.8,
          delay: 0.2,
          opacity: 0,
          duration: 2,
          ease: "Power3.easeOut",
        },
        "<"
      );

    // Bobbing animation for logos
    logosRef.current.forEach((logo, i) => {
      if (logo) {
        gsap.to(logo, {
          y: "random(-15, 15)",
          x: "random(-10, 10)",
          rotation: "random(-10, 10)",
          duration: "random(2, 4)",
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: i * 0.2,
        });
      }
    });

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      
      // Section parallax
      const xPos = (clientX / window.innerWidth - 0.5) * 20;
      const yPos = (clientY / window.innerHeight - 0.5) * 20;

      gsap.to(mainRef.current, {
        "--parallax-x": `${xPos}px`,
        "--parallax-y": `${yPos}px`,
        duration: 0.5,
        ease: "power2.out",
      });

      // Logo repulsion
      logosRef.current.forEach((logo) => {
        if (logo) {
          const rect = logo.getBoundingClientRect();
          const logoX = rect.left + rect.width / 2;
          const logoY = rect.top + rect.height / 2;
          
          const dx = clientX - logoX;
          const dy = clientY - logoY;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 150) {
            const angle = Math.atan2(dy, dx);
            const force = (150 - distance) / 150;
            const moveX = -Math.cos(angle) * 40 * force;
            const moveY = -Math.sin(angle) * 40 * force;
            
            gsap.to(logo, {
              x: moveX,
              y: moveY,
              duration: 0.4,
              ease: "power2.out",
            });
          }
        }
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [loadingComplete, selectedLogos]);

  useEffect(() => {
    if (!loadingComplete) return;

    const fullText = tagline;
    let index = 0;
    let direction = 1;
    const typeSpeed = 80;
    const eraseSpeed = 50;
    const pauseTime = 1400;
    let timeoutId;

    const type = () => {
      setTypedText(fullText.slice(0, index));

      if (direction === 1) {
        if (index < fullText.length) {
          index += 1;
          timeoutId = setTimeout(type, typeSpeed);
        } else {
          direction = -1;
          timeoutId = setTimeout(type, pauseTime);
        }
      } else {
        if (index > 0) {
          index -= 1;
          timeoutId = setTimeout(type, eraseSpeed);
        } else {
          direction = 1;
          timeoutId = setTimeout(type, pauseTime / 2);
        }
      }
    };

    type();

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [tagline, loadingComplete]);

  return (
    <main 
      ref={mainRef}
      className="container mx-auto max-width md:flex justify-between items-center gap-10 hero-wrapper relative overflow-hidden"
      style={{
        transform: "translate(var(--parallax-x, 0), var(--parallax-y, 0))"
      }}
    >
      <div className="space-y-6 md:space-y-8 z-20">
        <div>
          <h1
            ref={h11}
            className="text-lg md:text-xl xl:text-2xl font-bold text-hero-heading"
          >
            Hi 👋 My Name is
          </h1>
          <h1
            ref={h12}
            className="text-4xl md:text-6xl xl:text-7xl xl:leading-tight font-extrabold bg-clip-text bg-gradient text-transparent"
          >
            {name}
          </h1>
          <h2
            ref={h13}
            className="text-xl md:text-3xl xl:text-4xl xl:leading-tight font-semibold text-hero-subtitle"
          >
            <span className="inline-flex items-center">
              {typedText}
              <span className="typing-cursor">|</span>
            </span>
          </h2>
        </div>
        
        <div ref={btnRef} className="flex flex-col md:flex-row items-start md:items-center gap-6">
           <a
  href={`${process.env.PUBLIC_URL}/CV.pdf`}
  download="CV.pdf"
  className="cv-button inline-flex items-center gap-2 group"
>
            <svg
              className="w-5 h-5 transition-transform group-hover:translate-y-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
            Download CV
          </a>

          <div className="flex items-center gap-4 pl-2">
            <a href={github} target="_blank" rel="noreferrer noopener" className="social-icon-hero group">
              <svg className="w-6 h-6 fill-current transition-all duration-300 group-hover:text-[#8B5CF6] group-hover:drop-shadow-[0_0_8px_rgba(139,92,246,0.8)]" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a href={linkdein} target="_blank" rel="noreferrer noopener" className="social-icon-hero group">
              <svg className="w-6 h-6 fill-current transition-all duration-300 group-hover:text-[#00D2FF] group-hover:drop-shadow-[0_0_8px_rgba(0,210,255,0.8)]" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a href={instagram} target="_blank" rel="noreferrer noopener" className="social-icon-hero group">
              <svg className="w-6 h-6 fill-current transition-all duration-300 group-hover:text-[#E1306C] group-hover:drop-shadow-[0_0_8px_rgba(225,48,108,0.8)]" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
      
      <div className="mt-5 md:mt-0 z-10 relative">
        {/* Floating Tech Logos */}
        {selectedLogos.map((logo, i) => {
          const angle = (i / selectedLogos.length) * Math.PI * 2;
          const radius = window.innerWidth > 768 ? 220 : 160;
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;
          
          return (
            <div
              key={logo.name}
              ref={(el) => (logosRef.current[i] = el)}
              className="floating-logo-container flex items-center justify-center rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 p-2"
              style={{
                left: `calc(50% + ${x}px)`,
                top: `calc(50% + ${y}px)`,
                transform: "translate(-50%, -50%)",
                zIndex: 15,
              }}
            >
              <img src={logo.icon} alt={logo.name} className="w-8 h-8 object-contain" />
            </div>
          );
        })}

        <div className="profile-glow relative z-10">
          <img ref={myimageref} className="w-full max-w-[320px] md:max-w-[420px] rounded-full" src={img} alt={name} />
        </div>
      </div>
    </main>
  );
}

export default Home;
