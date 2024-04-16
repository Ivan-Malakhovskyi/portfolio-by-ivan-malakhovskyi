import { FC } from "react";

const OpenToWork: FC = () => {
  return (
    <section className="py-14">
      <h3 className="text-mainWhite text-xl  font-medium mb-8">
        I`m currently looking for Jobs.
      </h3>
      <ul className="flex gap-4 flex-col items-center mb-8">
        {" "}
        <li>
          <span className="text-mainWhite text-3xl md:text-6xl">
            {" "}
            Jobs: &#123;
          </span>
        </li>{" "}
        <li>
          <h2 className="text-3xl md:text-6xl font-bold bg-gradient-to-r from-neon to-skyBlue text-transparent bg-clip-text break-word">
            Full Stack Developer
          </h2>
        </li>
        <li>
          <h2 className="text-3xl md:text-6xl font-bold bg-gradient-to-r from-aqua to-purple text-transparent bg-clip-text break-word">
            Frontend Developer
          </h2>
        </li>
        <li>
          <h2 className="text-3xl md:text-6xl font-bold bg-gradient-to-r from-mainWhite to-gray-600 text-transparent bg-clip-text break-word">
            Backend Developer
          </h2>
        </li>
        <li>
          {" "}
          <span className="text-mainWhite text-3xl md:text-6xl">&#125;</span>
        </li>
      </ul>
      <h3 className="text-mainWhite text-xl  font-medium max-w-[600px] ">
        I am particularly interested in product based positions where I can help
        make an organization wide impact.
      </h3>
    </section>
  );
};

export default OpenToWork;
