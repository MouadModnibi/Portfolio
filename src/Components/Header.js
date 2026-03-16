import React, { useState } from "react";
import { logos, socialMediaUrl } from "../Details";

function Header({ activeSection, isSideNav, hidden }) {
  const [isOpen, setIsOpen] = useState(false);
  const { linkdein, github, twitter } = socialMediaUrl;

  const toggleClass = () => {
    setIsOpen(!isOpen);
  };

  const handleNav = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setIsOpen(false);
  };

  const linkClass = (id) =>
    [
      "nav-link text-sm md:text-base",
      activeSection === id ? "nav-link-active" : "text-nav-muted",
    ].join(" ");

  return (
    <header className={`navbar-root ${isSideNav ? "navbar-side" : "navbar-top"} ${hidden ? "navbar-hidden" : ""}`}>
      <div className="nav-inner">
        <div className="flex justify-center md:hidden py-2 px-4">
          <div onClick={toggleClass} className="cursor-pointer">
            <svg
              className="stroke-dark-heading dark:stroke-white"
              width="25"
              height="20"
              viewBox="0 0 16 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.4375 1.3125H14.5625M1.4375 11.3125H14.5625H1.4375ZM1.4375 6.3125H14.5625H1.4375Z"
                strokeWidth="1.875"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
        <nav className={`${!isOpen ? "hidden" : ""} text-center md:flex md:items-center`}>
          <ul className="nav-main dark:text-light-content font-medium md:flex md:items-center md:space-x-5 md:px-4">
          <li className="pb-1 md:pb-0">
            <a href="#home" onClick={(e) => handleNav(e, "home")} className={linkClass("home")}>
              Home
            </a>
          </li>
          <li className="pb-1 md:pb-0">
            <a
              href="#about"
              onClick={(e) => handleNav(e, "about")}
              className={linkClass("about")}
            >
              About
            </a>
          </li>
          <li className="pb-1 md:pb-0">
            <a
              href="#technologies"
              onClick={(e) => handleNav(e, "technologies")}
              className={linkClass("technologies")}
            >
              Technologies
            </a>
          </li>
          <li className="pb-1 md:pb-0">
            <a
              href="#projects"
              onClick={(e) => handleNav(e, "projects")}
              className={linkClass("projects")}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={(e) => handleNav(e, "contact")}
              className={linkClass("contact")}
            >
              Contact
            </a>
          </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
