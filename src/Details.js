// Enter all your detials in this file
// Logo images
import logogradient from "./assets/logo.svg";
import logo from "./assets/logo2.svg";
// Profile Image
import profile from "./assets/profile.jpg";
// Tech stack images
import html from "./assets/techstack/html.png";
import css from "./assets/techstack/css.png";
import sass from "./assets/techstack/sass.png";
import js from "./assets/techstack/js.png";
import react from "./assets/techstack/react.png";
import redux from "./assets/techstack/redux.png";
import tailwind from "./assets/techstack/tailwind.png";
import bootstrap from "./assets/techstack/bootstrap.png";
import vscode from "./assets/techstack/vscode.png";
import github from "./assets/techstack/github.png";
import git from "./assets/techstack/git.png";
import npm from "./assets/techstack/npm.png";
import postman from "./assets/techstack/postman.png";
import figma from "./assets/techstack/figma.png";
// Porject Images
import projectImage1 from "./assets/projects/project1.jpg";
import projectImage2 from "./assets/projects/project2.jpg";
import projectImage3 from "./assets/projects/project3.jpg";
import projectImage4 from "./assets/projects/project4.jpg";
import projectImage5 from "./assets/projects/project5.jpg";
import projectImage6 from "./assets/projects/project6.jpg";

// Logos
export const logos = {
  logogradient: logogradient,
  logo: logo,
};

// Enter your Personal Details here
export const personalDetails = {
  name: "Mouad Modnibi",
  tagline: "I build scalable and secure systems",
  img: profile,
  about: `I am a Software Engineering student specializing in Networks and Information Systems. I am particularly interested in DevOps and Cloud technologies, and I enjoy building efficient systems and practical web solutions. I am always motivated to learn new technologies and improve my skills through real projects.`,
};

// Enter your Social Media URLs here
export const socialMediaUrl = {
  linkdein: "https://www.linkedin.com/in/mouadmodnibi/",
  github: "https://github.com/MouadModnibi",
  instagram: "https://www.instagram.com/mouad._.md/",
};

// Enter your Work Experience here
export const workDetails = [
  {
    Position: "Full Stack Developer",
    Company: `OCP Group`,
    Location: "Khouribga ",
    Type: "Full Time",
    Duration: "July 2025 - August 2025",
    logo: "https://scontent.frak2-1.fna.fbcdn.net/v/t39.30808-6/408797812_746015394232419_7924109667355450322_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=1d70fc&_nc_eui2=AeH07-YfUgxR38FPQzx_mTGbmmhVMP60fyWaaFUw_rR_JQAMFdBdS20RRbxh0vGDX3IIpS58AbM0_UIOeoLz-Z0g&_nc_ohc=IgzQpSz7Y1MQ7kNvwFtG1cp&_nc_oc=Adl_31rHSCOf_IJkISmTTjNVT3B9Wj8k_tpaorUaImwsVduaR6k7XgVKclhwz6rbcB8&_nc_zt=23&_nc_ht=scontent.frak2-1.fna&_nc_gid=KVANkBzuUgI9tFCORaMMfQ&_nc_ss=8&oh=00_AfwzqMEMsJia5--HQ4ulcn9iyg6cCTNIewA1sG4UspJiKw&oe=69B67D33",
  },
];

// Enter your Education Details here
export const eduDetails = [
  {
    Position: "Élève ingénieur en Réseaux et Systèmes d’Information",
    Company: `Faculté des Sciences et Techniques Gueliz - Marrakech`,
    Duration: "2024-present",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ02M3Opt5mWYhHoiAGBTcLzj3BNnRC85RJiA&s",
  },
  {
    Position: "Diplôme d'études universitaires scientifiques et techniques (DEUST), MIP",
    Company: `Faculté des Sciences et Techniques Mohammedia`,
    Duration: "2022-2024",
    logo: "https://media.licdn.com/dms/image/v2/C4E0BAQHsmvJCblF1VA/company-logo_400_400/company-logo_400_400/0/1652945941816/fstm_logo?e=2147483647&v=beta&t=0vx8Czbevp4OdWMYoCgG27Q5ryU7v-mHsIxeLAMq_zo",
  },
  {
    Position: "Baccalauréat en science mathematique option A",
    Company: "Lycée residence khouribga",
    Duration: "2021-2022",
    logo: "https://skillicons.dev/icons?i=school",
  },
];

// Tech Stack and Tools
export const techStackDetails = {
  html: html,
  css: css,
  js: js,
  react: react,
  tailwind: tailwind,
  bootstrap: bootstrap,
  laravel: "https://skillicons.dev/icons?i=laravel",
  python: "https://skillicons.dev/icons?i=python",
  java: "https://skillicons.dev/icons?i=java",
  c: "https://skillicons.dev/icons?i=c",
  mysql: "https://skillicons.dev/icons?i=mysql",
  vscode: vscode,
  git: git,
  github: github,
  figma: figma,
  docker: "https://skillicons.dev/icons?i=docker",
  kubernetes: "https://skillicons.dev/icons?i=kubernetes",
  gitlab: "https://skillicons.dev/icons?i=gitlab",
};

// Enter your Project Details here
export const projectDetails = [
  {
    title: "pneumonia detector",
    image: projectImage1,
    description: `An AI-powered web application that detects pneumonia from chest X-ray images using deep learning. Built with Python and Streamlit, the system allows users to upload an X-ray image and receive an instant prediction from a trained model, providing a fast preliminary screening tool for pneumonia detection.`,
    techstack: "Python / TensorFlow / Keras / NumPy & Pandas / Streamlit",
    githubLink: "https://github.com/lekssayshamza/pneumonia",
  },
  {
    title: "Smart_study",
    image: projectImage2,
    description: `Smart Study is an Android mobile application designed to help students organize their courses and prepare for exams. It allows users to manage study materials and plan their revision schedules. The app also includes AI-powered features that generate flashcards and QCM (multiple-choice quizzes) from study content to help students revise more efficiently.`,
    techstack: "Android Studio, Java",
    githubLink: "https://github.com/erraguibiabdelilah/Smart_study",
  },
  {
    title: "Symphony",
    image: projectImage3,
    description: `Symphony is a web-based music streaming platform inspired by services like Spotify. It allows users to stream music, create and manage playlists, and enjoy an integrated audio player. The platform also includes a role-based system (user and administrator) and a Premium subscription management module for advanced features.`,
    techstack: "Laravel, Tailwind CSS, PHP, MySQL.",
    githubLink: "https://github.com/MouadModnibi/Symphony",
  },
];

// Enter your Contact Details here
export const contactDetails = {
  email: "mouadmodnibi123@gmail.com",
  phone: "06 56 81 26 20",
};
