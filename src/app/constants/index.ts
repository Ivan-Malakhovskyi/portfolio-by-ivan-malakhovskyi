import github from "/public/icons/github.svg";
import linkedin from "/public/icons/linkedin.svg";
import instagram from "/public/icons/instagram.svg";
import facebook from "/public/icons/facebook.svg";

import waterTracker from "/public/images/WaterTracker.png";
import bookSelf from "/public/images/book_shelf.png";
import watchSpot from "/public/images/watch_spot.png";
import learnLingo from "/public/images/LearnLingoPortfolio.png";
import carRental from "/public/images/car_rental.png";
import movieSearch from "/public/images/main_page_movies_app.png";
import contactsApp from "/public/images/main_page_contacts.png";
import webStudio from "/public/images/lending.png";

export const socialLinks = [
  {
    id: 1,
    href: "https://github.com/Ivan-Malakhovskyi",
    icon: github,
    alt: "github_icon",
  },
  {
    id: 2,
    href: "www.linkedin.com/in/ivan-malakhovskyi",
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

export const teamProjects = [
  {
    id: 1,
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
    id: 2,
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
    id: 3,
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
];
