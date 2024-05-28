"use client";

import { FC, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import waterTracker from "/public/images/WaterTracker.png";
import learnLingo from "/public/images/LearnLingoPortfolio.png";
import ImageComponent from "./global/ImageComponent";
import Link from "next/link";

const projects = [
  {
    id: 1,
    href: "https://okimmi.github.io/stackNinjas-frontend/",
    title: "WaterTracker",
    description:
      "Water Tracker is a web application that allows the user to monitor their daily living.The application has the following functional components: Home Page, Water Log and Settings.",
    img: waterTracker,
    role: "Frontend developer",
    workedOn: [
      "updating the user's avatar🧑, updating user information 📝 ",
      "updating the user's password 🔑",
      "validation of fields ✅",
    ],
    toDo: "Setting modal",
    type: "Full Stack TEAM project",
  },
  {
    id: 2,
    href: "https://okimmi.github.io/stackNinjas-frontend/",
    title: "LearnLingo",
    description:
      "This application is designed for a company that offers online language learning services. The app consists of three main pages: 'Home', 'Teachers' and 'Favorites' ",
    img: learnLingo,
    role: "Frontend developer",
    workedOn: [
      "-React + Vite + TS",
      "-React-dom",
      "-Redux, redux-persist",
      "-Firebase (signUp,signIn, signOut, fetch data)",
    ],
    toDo: "Setting modal",
    type: "Full Stack TEAM project",
  },
];

const animationVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const transition = { duration: 1 };

const ProjectList: FC = () => {
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
      <ul
        className="flex flex-wrap justify-center items-center gap-6"
        ref={ref}
      >
        {projects.map(
          ({
            id,
            title,
            toDo,
            description,
            img,
            role,
            workedOn,
            type,
            href,
          }) => (
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
                  <p className="text-mainWhite">
                    Role: <span className="ml-2">{role}</span>
                  </p>
                  <p className="text-mainWhite">
                    ToDO: <span className="ml-2">{toDo}</span>
                  </p>
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
                    src={waterTracker}
                    width={400}
                    height={400}
                    alt="water_tracker"
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

export default ProjectList;
