import { FC } from "react";
import waterTracker from "/public/images/WaterTracker.png";
import Image from "next/image";
import ImageComponent from "./global/ImageComponent";
import Link from "next/link";

const projects = [
  {
    id: 1,
    href: "https://okimmi.github.io/stackNinjas-frontend/",
    title: "LearnLingo",
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
];

const ProjectList: FC = () => {
  return (
    <>
      <ul className="flex flex-wrap justify-center items-center gap-6">
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
            <li
              key={id}
              className="flex items-center flex-wrap justify-between gap-6 bg-gray-900 shadow-lg rounded-lg p-8 w-full"
            >
              <div className="w-1/2 mb-4 ">
                {" "}
                <h3 className="text-lg font-medium text-gray-800 dark:text-white mb-2">
                  {title}
                  <span className="ml-8">
                    {" "}
                    <Link href={href}>Repo</Link>
                  </span>
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {description}
                </p>
              </div>

              <div>
                {" "}
                <ImageComponent
                  className="rounded-lg w-1/2 md:w-[400px] md:h-[400px]"
                  src={waterTracker}
                  width={400}
                  height={400}
                  alt="water_tracker"
                />
              </div>
            </li>
          )
        )}
      </ul>
    </>
  );
};

export default ProjectList;
