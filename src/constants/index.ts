import github from "/public/icons/github.svg";
import linkedin from "/public/icons/linkedin.svg";
import instagram from "/public/icons/instagram.svg";
import facebook from "/public/icons/facebook.svg";

import html5 from "/public/icons/html5.svg";
import css3 from "/public/icons/css3.svg";
import sass from "/public/icons/sass.svg";
import js from "/public/icons/javascript.svg";
import ts from "/public/icons/typescript.svg";
import react from "/public/icons/react.svg";
import redux from "/public/icons/redux.svg";
import zustand from "/public/icons/favicon.ico";
import next from "/public/icons/brand-nextjs.svg";
import tailwindcss from "/public/icons/tailwindcss.svg";
import firebase from "/public/icons/firebase.svg";
import node from "/public/icons/node-dot-js.svg";
import express from "/public/icons/icons8-express-js_light.svg";
import mongodb from "/public/icons/mongodb.svg";
import git from "/public/icons/git.svg";
import vite from "/public/icons/vitejs.svg";
import postman from "/public/icons/postman.svg";
import figma from "/public/icons/figma.svg";
import mail from "/public/icons/mail.svg";
import telegram from "/public/icons/telegram.svg";
import pixso from "/public/icons/pixso.jpg";

import { ChatBubbleLeftRightIcon } from "@heroicons/react/24/outline";
import { CheckCircleIcon } from "@heroicons/react/24/outline";
import { SparklesIcon } from "@heroicons/react/24/outline";
import { LightBulbIcon } from "@heroicons/react/24/outline";

//! SOCIAL LINKS

export const socialLinks = [
  {
    id: 1,
    href: "https://github.com/Ivan-Malakhovskyi",
    icon: github,
    alt: "github_icon",
  },
  {
    id: 2,
    href: "https://www.linkedin.com/in/ivan-malakhovskyi",
    icon: linkedin,
    alt: "linkedin_icon",
  },
  {
    id: 3,
    href: "https://www.instagram.com/ivan_m_06/",
    icon: instagram,
    alt: "instagram_icon",
  },
  {
    id: 4,
    href: "https://www.facebook.com/",
    icon: facebook,
    alt: "facebook_icon",
  },
  {
    id: 5,
    href: "ivanmalahovskij121@gmail.com",
    icon: mail,
    alt: "mail_icon",
  },
  {
    id: 6,
    href: "https://t.me/ivan_malakhovskyi",
    icon: telegram,
    alt: "telegram_icon",
  },
];

export const hardSkills = [
  { name: "HTML5", icon: html5 },
  { name: "CSS3", icon: css3 },
  { name: "Sass", icon: sass },
  { name: "JavaScript (ES6+)", icon: js },
  { name: "React", icon: react },
  { name: "Redux Toolkit", icon: redux },
  { name: "Zustand", icon: zustand },
  { name: "Next.js", icon: next },
  { name: "Tailwind CSS", icon: tailwindcss },
  { name: "TypeScript", icon: ts },
  { name: "Firebase", icon: firebase },
  { name: "Node.js", icon: node },
  { name: "Express.js", icon: express },
  { name: "MongoDB", icon: mongodb },
  { name: "Git", icon: git },
  { name: "Vite", icon: vite },
  { name: "Postman", icon: postman },
  { name: "Figma", icon: figma },
  { name: "Pixso", icon: pixso },
];

export const softSkills = [
  { name: "Communicative", Icon: SparklesIcon },
  { name: "Being proactive", Icon: LightBulbIcon },
  { name: "Problem solving", Icon: ChatBubbleLeftRightIcon },
  { name: "Responsible", Icon: CheckCircleIcon },
];

export const experiences = [
  {
    position: "Frontend developer",
    company: "Talent Bay",
    project: "CRM",
    period: "2024 - Present",
    employment: "Part-time",
  },
  {
    position: "Frontend developer",
    company: "Team Challenge",
    project: "Online store - marketplace",
    period: "2023 - 2024",
    employment: "Part-time",
  },
];

export const certificatesList = [
  {
    id: 1,
    title: "Full Stack Developer",
    organization: "GoIT",
    href: "https://drive.google.com/file/d/1PdEMoA8pEyztGqEPJ7dzMsf-dP1jjVcD/view",
  },
];
