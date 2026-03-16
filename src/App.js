import React, { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import LoadingScreen from "./Components/LoadingScreen";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Projects from "./Pages/Projects";
import Technologies from "./Pages/Technologies";
import SideIndicator from "./Components/SideIndicator";

const SECTION_IDS = ["home", "about", "technologies", "projects", "contact"];

function App() {
  const [loadingComplete, setLoadingComplete] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [showCompact, setShowCompact] = useState(false);

  useEffect(() => {
    const sections = SECTION_IDS.map((id) => document.getElementById(id)).filter(Boolean);
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const { id } = entry.target;
            entry.target.classList.add("section-visible");
            setActiveSection(id);
          }
        });
      },
      { threshold: 0.25 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [loadingComplete]);

  useEffect(() => {
    const onScroll = () => {
      setShowCompact(window.scrollY > 80);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-portfolio-bg text-light-heading font-primary relative overflow-x-hidden">
      <Toaster position="bottom-right" reverseOrder={false} />
      {/* Global Moving Lines Background */}
      <div className="bg-lines-container opacity-40 fixed inset-0 pointer-events-none z-0">
        <div className="bg-line-sleek" style={{ left: '5%', animationDuration: '10s' }} />
        <div className="bg-line-sleek" style={{ left: '15%', animationDuration: '18s', animationDelay: '-2s' }} />
        <div className="bg-line-sleek" style={{ left: '25%', animationDuration: '15s', animationDelay: '-5s' }} />
        <div className="bg-line-sleek" style={{ left: '35%', animationDuration: '22s', animationDelay: '-8s' }} />
        <div className="bg-line-sleek" style={{ left: '45%', animationDuration: '14s', animationDelay: '-1s' }} />
        <div className="bg-line-sleek" style={{ left: '55%', animationDuration: '25s', animationDelay: '-4s' }} />
        <div className="bg-line-sleek" style={{ left: '65%', animationDuration: '17s', animationDelay: '-6s' }} />
        <div className="bg-line-sleek" style={{ left: '75%', animationDuration: '20s', animationDelay: '-3s' }} />
        <div className="bg-line-sleek" style={{ left: '85%', animationDuration: '12s', animationDelay: '-7s' }} />
        <div className="bg-line-sleek" style={{ left: '95%', animationDuration: '28s', animationDelay: '-9s' }} />
      </div>

      <LoadingScreen onComplete={() => setLoadingComplete(true)} />
      <Header activeSection={activeSection} isSideNav={false} hidden={showCompact} />
      <SideIndicator
        sections={[
          { id: "home", label: "Home" },
          { id: "about", label: "About" },
          { id: "technologies", label: "Technologies" },
          { id: "projects", label: "Projects" },
          { id: "contact", label: "Contact" },
        ]}
        activeSection={activeSection}
        visible={showCompact}
      />
      <main
        className={`main-content pt-2 space-y-24 md:space-y-32 md:pt-24`}
      >
        <section id="home" className="section-fade-in section-home">
          <Home loadingComplete={loadingComplete} />
          <div className="section-divider" />
        </section>
        <section id="about" className="section-fade-in">
          <About isActive={activeSection === "about"} />
          <div className="section-divider" />
        </section>
        <section id="technologies" className="section-fade-in">
          <Technologies isActive={activeSection === "technologies"} />
          <div className="section-divider" />
        </section>
        <section id="projects" className="section-fade-in">
          <Projects isActive={activeSection === "projects"} />
          <div className="section-divider" />
        </section>
        <section id="contact" className="section-fade-in mb-24">
          <Contact isActive={activeSection === "contact"} />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
