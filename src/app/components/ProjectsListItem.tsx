"use client";

import React, { FC, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import waterTracker from "/public/images/WaterTracker.png";
import bookSelf from "/public/images/book_shelf.png";
import watchSpot from "/public/images/watch_spot.png";
import learnLingo from "/public/images/LearnLingoPortfolio.png";
import ImageComponent from "./global/ImageComponent";
import Link from "next/link";
import WorkedOnList from "./WorkedOnList";
import RolesList from "./RolesList";

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

// {
//   id: 2,
//   href: "https://learn-lingo-pet-project.vercel.app/",
//   title: "LearnLingo",
//   description:
//     "This application is designed for a company that offers online language learning services. The app consists of three main pages: 'Home', 'Teachers' and 'Favorites' ",
//   img: learnLingo,
//   role: "Frontend developer",
//   workedOn: [
//     "React + Vite + TS",
//     "React-dom",
//     "Redux",
//     "Firebase (signUp, signIn, signOut, Fetch data)",
//     "Filtering teachers by languages, level, price, ",
//     "Add teachers to favorites",
//   ],
//   toDo: "",
//   type: "Personal project",
// },

const animationVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const transition = { duration: 1 };

const ProjectsListItem: FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  const [animate, setAnimate] = useState(false);
  const handleAnimate = () => {
    setAnimate(!animate);
  };
  return (
    <>
      {" "}
      <ul
        className="flex flex-wrap justify-center items-center gap-6"
        ref={ref}
      >
        {projects.map(
          ({ id, title, toDo, description, img, role, workedOn, href }) => (
            <Link href={href} key={id}>
              <li className="flex items-center flex-wrap justify-between gap-6 bg-gray-900 shadow-lg rounded-lg p-8 w-full hover:scale-95 transition ease-out duration-300">
                <motion.div
                  className="md:w-1/2 mb-4 "
                  variants={animationVariants}
                  initial={animate ? "visible" : "hidden"}
                  animate={inView ? "visible" : "hidden"}
                  transition={transition}
                  onAnimationComplete={handleAnimate}
                >
                  {" "}
                  <h3 className="text-lg font-medium text-mainWhite mb-2 ">
                    {title}
                  </h3>
                  <p className="text-gray-600 mb-2">{description}</p>
                  <p className="text-mainWhite mb-2">
                    Role: <RolesList role={role} />
                  </p>
                  <p className="text-mainWhite mb-2">
                    ToDO:{" "}
                    <span className="ml-2 border-2 rounded-full border-mainGrey px-2 py-[2px]">
                      {toDo}
                    </span>
                  </p>
                  <div className="text-mainWhite ">
                    <p className="mb-2">Worked On:</p>{" "}
                    <WorkedOnList workedOn={workedOn} />
                  </div>
                </motion.div>

                <motion.div
                  variants={animationVariants}
                  initial={animate ? "visible" : "hidden"}
                  animate={inView ? "visible" : "hidden"}
                  transition={transition}
                  onAnimationComplete={handleAnimate}
                >
                  {" "}
                  <ImageComponent
                    className="rounded-lg w-1/2 md:w-full md:h-full"
                    src={img}
                    width={400}
                    height={400}
                    alt="learn_lingo"
                  />
                </motion.div>
              </li>
            </Link>
          )
        )}
      </ul>
    </>
  );
};

export default ProjectsListItem;
