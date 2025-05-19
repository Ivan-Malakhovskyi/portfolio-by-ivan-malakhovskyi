import techStop from "/public/images/techstop_large.jpg";
import waterTracker from "/public/images/WaterTracker.jpg";
import bookSelf from "/public/images/book_shelf.jpg";
import watchSpot from "/public/images/watch_spot.jpg";

export const teamProjects = [
  {
    id: 1,
    href: "https://tech-stop-woad.vercel.app/",
    git: "https://github.com/OlegTernovuy/TechStop",
    title: "TechStop",
    description:
      "TechStop is a modern online marketplace for buying and selling technological gadgets, electronics and accessories. Our marketplace provides a user-friendly interface, ease of use, and a wide selection of products from various sellers.",
    img: techStop,
    role: ["Frontend developer"],
    workedOn: [
      "Product card - AboutProduct | Characteristics | Feedback",
      "Admin panel - creating CMS from scratch",
      "Code review",
      "Readme description",
      "Product presentation",
      "Resolving problem to create CMS from scratch",
    ],
    technologies: ["Full Stack", "Next.js"],
    toDo: ["Product card", "CMS", "Product presentation"],
  },
  {
    id: 2,
    href: "https://okimmi.github.io/stackNinjas-frontend/",
    git: "https://github.com/Okimmi/stackNinjas-frontend",
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
    technologies: ["Full Stack", "React"],
    toDo: ["Setting modal"],
  },
  {
    id: 3,
    href: "https://arag0rn.github.io/project-CodeBusters/",
    git: "https://github.com/Arag0rn/project-CodeBusters",
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
    technologies: ["HTML/CSS/JS"],
    toDo: ["Shopping List"],
  },
  {
    id: 4,
    href: "https://arag0rn.github.io/The-Watch-Spot/",
    git: "https://github.com/Arag0rn/The-Watch-Spot",
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
    technologies: ["HTML/CSS/JS"],
    toDo: ["Collection watches"],
  },
];
