import React from "react";
import learnLingo from "/public/images/LearnLingoPortfolio.png";
import PersonalProjectListItem from "./PersonalProjectListItem";

const personalProjects = [
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
];

const PersonalProjectList = () => {
  return (
    <ul className="flex flex-wrap justify-center items-center gap-6">
      {personalProjects.map((project) => (
        <PersonalProjectListItem key={project.id} project={project} />
      ))}
    </ul>
  );
};

export default PersonalProjectList;
