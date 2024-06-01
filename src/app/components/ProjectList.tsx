import { FC } from "react";
import ProjectsListItem from "./ProjectsListItem";
import waterTracker from "/public/images/WaterTracker.png";
import bookSelf from "/public/images/book_shelf.png";
import watchSpot from "/public/images/watch_spot.png";
import learnLingo from "/public/images/LearnLingoPortfolio.png";

const projects = [
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

const ProjectList: FC = () => {
  return (
    <ul className="flex flex-wrap justify-center items-center gap-6">
      {projects.map((project) => (
        <ProjectsListItem key={project.id} project={project} />
      ))}
    </ul>
  );
};

export default ProjectList;
