import github from "/public/icons/github.svg";
import linkedin from "/public/icons/linkedin.svg";
import instagram from "/public/icons/instagram.svg";
import facebook from "/public/icons/facebook.svg";

import techStop from "/public/images/techstop_large.png";
import waterTracker from "/public/images/WaterTracker.png";
import bookSelf from "/public/images/book_shelf.png";
import watchSpot from "/public/images/watch_spot.png";
import learnLingo from "/public/images/LearnLingoPortfolio.png";
import carRental from "/public/images/car_rental.png";
import movieSearch from "/public/images/main_page_movies_app.png";
import contactsApp from "/public/images/main_page_contacts.png";
import webStudio from "/public/images/lending.png";
import restaurantTestTask from "/public/images/restaurant_test_task.png";

import html5 from "/public/icons/html5.svg";
import css3 from "/public/icons/css3.svg";
import sass from "/public/icons/sass.svg";
import js from "/public/icons/javascript.svg";
import ts from "/public/icons/typescript.svg";
import react from "/public/icons/react.svg";
import redux from "/public/icons/redux.svg";
import next from "/public/icons/brand-nextjs.svg";
import node from "/public/icons/node-dot-js.svg";
import express from "/public/icons/icons8-express-js_light.svg";
import mongodb from "/public/icons/mongodb.svg";
import git from "/public/icons/git.svg";
import postman from "/public/icons/postman.svg";
import figma from "/public/icons/figma.svg";

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
];

export const animationVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

export const transition = { duration: 1 };

//! TEAM PROJECTS

export const teamProjects = [
  {
    id: 1,
    href: "https://tech-stop-woad.vercel.app/",
    title: "TechStop",
    description:
      "TechStop is a modern online marketplace for buying and selling technological gadgets, electronics and accessories. Our marketplace provides a user-friendly interface, ease of use, and a wide selection of products from various sellers.",
    img: techStop,
    role: ["Frontend developer"],
    workedOn: [
      "Product card - <AboutProduct> | <Characteristics> | <Feedback>",
      "Admin panel(CMS) - creating CMS from scratch including management: a)Products, b)Orders, c)Categories, d)Users, e)Reviews",
      "Сode refactoring other frontend developer",
      "Code review",
      "Readme description",
      "Demonstrate demo product",
      "Product presentation on release",
      "Resolving problem to create CMS from scratch",
    ],
    toDo: "Product card | CMS | Demonstrate project on release | demo",
  },
  {
    id: 2,
    href: "https://okimmi.github.io/stackNinjas-frontend/",
    title: "WaterTracker",
    description:
      "Water Tracker is a web application that allows the user to monitor their daily living.The application has the following functional components: Home Page, Water Log and Settings.",
    img: waterTracker,
    role: ["Frontend developer"],
    workedOn: [
      "updating the user's avatar🧑",
      "updating user information 📝",
      "updating the user's password 🔑",
      "validation of fields ✅",
    ],
    toDo: "Setting modal",
  },
  {
    id: 3,
    href: "https://arag0rn.github.io/project-CodeBusters/",
    title: "Bookshelf",
    description:
      "This is a web application for organizing and managing your book collection. It's designed for book lovers who want a convenient way to keep track of their books, add new books, view information about them, and keep things organized.",
    img: bookSelf,
    role: ["Frontend developer"],
    workedOn: [
      "adaptive layout 📟",
      "connecting fonts 🔣",
      "displaying a collection of books 📚",
      "removing books from the collection 🚮",
      "displaying a message to the user if there are no books 📖",
    ],
    toDo: "Shopping List",
  },
  {
    id: 4,
    href: "https://arag0rn.github.io/The-Watch-Spot/",
    title: "Watch Spot",
    description:
      "This is a modern platform for buying and selling watches, created for those who value time, style and quality. Our service is designed to facilitate the process of finding, buying and selling watches by providing users with a user-friendly interface and a wide selection of well-known brands and models",
    img: watchSpot,
    role: ["Frontend developer", "Scrum master"],
    workedOn: [
      "Scrum master organization of meetings, task list (trello)",
      "adaptive layout 📟",
      "collection display",
    ],
    toDo: "Collection watches",
  },
];

//! PERSONAL PROJECTS

export const personalProjects = [
  {
    id: 4,
    href: "https://learn-lingo-pet-project.vercel.app/",
    title: "Learn Lingo",
    description:
      "This application is designed for a company that offers online language learning services. The app consists of three main pages: 'Home', 'Teachers' and 'Favorites'",
    img: learnLingo,
    workedOn: [
      "React + Vite + TS",
      "React-dom",
      "Redux",
      "Firebase (signUp, signIn, signOut, Fetch data)",
      "Filtering teachers by languages, level, price, ",
      "Add/remove teachers to favorites",
    ],
  },
  {
    id: 5,
    href: "https://ivan-malakhovskyi.github.io/test-project-rental-car/",
    title: "Rental Car",
    description:
      "The Rental Car project is a comprehensive, responsive web application designed to facilitate the booking and management of rental cars. Built using  React, and Redux, this project provides a seamless user experience with features such as browsing available cars, making reservations, and managing bookings. Additionally, users can add or delete cars from their list of favorites for easy access later.",
    img: carRental,
    workedOn: ["React", "Redux", "React-router"],
  },
  {
    id: 6,
    href: "https://ivan-malakhovskyi.github.io/react-router-movies/",
    title: "Movie Search",
    description:
      "The Movie Search project is a web application designed to help users find detailed information about movies and TV shows. The application utilizes modern web development technologies and leverages external APIs to fetch and display movie data. Users can search for movies, view detailed information, and explore related content",
    img: movieSearch,
    workedOn: [
      "React",
      "React-router-dom",
      "React Hooks",
      "Http Abort",
      "styled-components",
    ],
  },
  {
    id: 7,
    href: "https://ivan-malakhovskyi.github.io/signup-signin-redux",
    title: "Contacts App",
    description:
      "The Contacts App is a modern web application designed to help users manage their personal and professional contacts efficiently. It provides an intuitive interface for adding, viewing, editing, and deleting contact information.",
    img: contactsApp,
    workedOn: [
      "React",
      "Redux",
      "Authentication",
      "React-router-dom",
      "React Hooks",
      "Http Abort",
      "styled-components",
      "Operations with contacts",
    ],
  },
  {
    id: 8,
    href: "https://ivan-malakhovskyi.github.io/adaptive-layout-graphics/",
    title: "Web Studio",
    description:
      "The Web Studio project is a modern, responsive website designed to showcase a web development studio's services, portfolio, and contact information. Built using HTML and SASS, this project emphasizes clean design, user experience, and accessibility. It serves as an ideal template for web studios looking to establish an online presence and attract potential clients.",
    img: webStudio,
    workedOn: ["HTML5", "CSS3", "SaSS", "Responsive design"],
  },
  {
    id: 9,
    href: "https://restaurant-test-task.vercel.app/",
    img: restaurantTestTask,
    title: "Restaurant Test Task",
    description:
      "Restaurant is a web application for displaying and filtering restaurant menus. The project must be adaptive and support the rendering of a list of dishes with the possibility of filtering them by category. A web application consists of two main pages: the main page and the menu page.",
    workedOn: ["Next.js", "TypeScript", "Tailwind CSS", "Responsive design"],
  },
];

//! SKILLS LIST

export const skills = [
  { name: "HTML5", icon: html5 },
  { name: "CSS3", icon: css3 },
  { name: "Sass", icon: sass },
  { name: "JavaScript (ES6+)", icon: js },
  { name: "React", icon: react },
  { name: "Redux Toolkit", icon: redux },
  { name: "Next.js", icon: next },
  { name: "TypeScript", icon: ts },
  { name: "Node.js", icon: node },
  { name: "Express.js", icon: express },
  { name: "MongoDB", icon: mongodb },
  { name: "Git", icon: git },
  { name: "Postman", icon: postman },
  { name: "Figma", icon: figma },
];

export const experiences = [
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
    href: "https://drive.google.com/file/d/1vT0EeVShIbEQI5OZPS0VdOF30HDbOP4g/view",
  },
];
