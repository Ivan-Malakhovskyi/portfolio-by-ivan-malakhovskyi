import Image from "next/image";
import { FC } from "react";
import myPhoto from "/public/images/my_photo.jpg";
import { m } from "framer-motion";

const About: FC = () => {
  return (
    <section id="about" className="pb-14">
      <h2 className="text-mainWhite text-3xl text-center md:text-6xl mb-8">
        About me
      </h2>
      <ul className="flex justify-center gap-4">
        {" "}
        <li>
          {" "}
          <div className="w-[250] h-[250] lg:w-[400px] lg:h-[400px] ">
            {" "}
            <Image
              src={myPhoto}
              width={395}
              height={300}
              alt="my_photo"
              className="rounded-full"
            />
          </div>
        </li>
        <li>
          {" "}
          <div className="border border-addBlack p-10 rounded-lg bg-gray-900 shadow-2xl  ">
            <h3 className="text-mainWhite">Soft skills</h3>
            <p className="text-mainGrey text-2xl">
              I am a dedicated Junior Full Stack developer passionate about
              creating stunning and user-friendly websites and committed to
              continuous learning and growth. I own HTML5, CSS3 , SASS,
              JavaScript, TypeScript, React, Redux, Node.js and MongoDB with
              experience in creating adaptive and interactive web
              applications.I’m recently completed a Full Stack Developer course
              at GoIT. My dream is to work in a team because I am a collective
              team player with excellent communication skills, ready to
              contribute to the team of dynamic development.
            </p>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default About;
