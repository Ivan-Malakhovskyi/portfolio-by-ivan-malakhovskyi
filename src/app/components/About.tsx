import Image from "next/image";
import { FC } from "react";
import people from "../../../public/icons/people_alt.svg";
import code from "../../../public/icons/embed2.svg";
import ImageComponent from "./global/ImageComponent";

const About: FC = () => {
  return (
    <section id="about" className="pb-14">
      <h2 className="text-mainWhite text-3xl font-semibold  text-center md:text-6xl mb-8">
        About me
      </h2>
      <ul className="flex justify-center gap-4">
        {" "}
        <li>
          {" "}
          <div>
            <ul>
              <li className="border border-addBlack p-10 rounded-lg bg-gray-900 shadow-2xl mb-10">
                {" "}
                <h3 className="text-mainWhite font-semibold  text-3xl">
                  {" "}
                  <div className="mb-4">
                    <ImageComponent
                      src={people}
                      width={40}
                      height={40}
                      alt="people_icon"
                    />
                  </div>
                  Soft skills
                </h3>
                <p className="text-mainGrey text-2xl">
                  I am a dedicated Junior Full Stack developer passionate about
                  creating stunning and user-friendly websites and committed to
                  continuous learning and growth. I own HTML5, CSS3 , SASS,
                  JavaScript, TypeScript, React, Redux, Node.js and MongoDB with
                  experience in creating adaptive and interactive web
                  applications.I’m recently completed a Full Stack Developer
                  course at GoIT. My dream is to work in a team because I am a
                  collective team player with excellent communication skills,
                  ready to contribute to the team of dynamic development.
                </p>
              </li>
              <li className="border border-addBlack p-10 rounded-lg bg-gray-900 shadow-2xl">
                <h3 className="text-mainWhite font-semibold  text-3xl">
                  <div className="mb-4">
                    <ImageComponent
                      src={code}
                      width={40}
                      height={40}
                      alt="people_icon"
                    />
                  </div>
                  Soft skills
                </h3>
                <p className="text-mainGrey text-2xl">
                  I am a dedicated Junior Full Stack developer passionate about
                  creating stunning and user-friendly websites and committed to
                  continuous learning and growth. I own HTML5, CSS3 , SASS,
                  JavaScript, TypeScript, React, Redux, Node.js and MongoDB with
                  experience in creating adaptive and interactive web
                  applications.I’m recently completed a Full Stack Developer
                  course at GoIT. My dream is to work in a team because I am a
                  collective team player with excellent communication skills,
                  ready to contribute to the team of dynamic development.
                </p>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default About;
