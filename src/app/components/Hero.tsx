import Link from "next/link";
import { FC } from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";

const Hero: FC = () => {
  return (
    <div className="bg-gradient-to-r from-mainBlack to-slate-500 animate-gradient-xy">
      <MaxWidthWrapper>
        <section className="py-14">
          {" "}
          <h2 className="text-mainWhite mb-8">Hey there 🙌, my name is</h2>
          <div className="max-w-4xl">
            <h1 className="text-mainWhite text-3xl md:text-7xl font-medium mb-8">
              Ivan Malakhovskyi Enthusiastic Full Stack Developer from Ukraine,
              Vinnytsia
            </h1>

            <p className="text-mainWhite mb-8">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque
              in harum culpa, reiciendis incidunt veritatis. Obcaecati aperiam
              porro expedita veniam qui id non? Maxime quis mollitia, ex at
              adipisci minus!
            </p>

            <Link
              href="mailto:ivanmalahovskij121@gmail.com"
              className="text-mainBlack bg-mainGreen px-12 py-4 mb-4 md:mb-0 rounded-full hover:bg-addGreen focus:bg-addGreen transition ease-out duration-300 mr-10"
            >
              Hire me
            </Link>

            <Link
              download
              target="_blank"
              rel="noopener noreferrer"
              href="/Ivan_Malakhovskyi_Junior_Full_Stack_Developer.pdf"
              className="text-mainWhite px-12 py-4 rounded-full bg-mainBlack border-[1px] border-solid border-mainWhite hover:bg-gray-400 focus:bg-gray-400 transition ease-out duration-300 "
            >
              Download CV
            </Link>
          </div>
        </section>
      </MaxWidthWrapper>
    </div>
  );
};

export default Hero;
