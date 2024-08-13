import learnLingo from "/public/images/LearnLingoPortfolio.png";
import carRental from "/public/images/car_rental.png";
import movieSearch from "/public/images/main_page_movies_app.png";
import contactsApp from "/public/images/main_page_contacts.png";
import webStudio from "/public/images/lending.png";
import restaurantTestTask from "/public/images/restaurant_test_task.png";
import contactsTestTask from "/public/images/contacts-test-task.png";

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
  {
    id: 10,
    href: "https://main--contacts-test-task.netlify.app/",
    img: contactsTestTask,
    title: "Contact Test Task",
    description:
      "Restaurant is a web application for manage contacts. The project must be adaptive and support the rendering of a list of contact with the possibility add/remove contacts and also user must be have opportunity add tags to contact.",
    workedOn: [
      "React",
      "Vite",
      "styled-components",
      "react-router",
      "Responsive design",
    ],
  },
];
