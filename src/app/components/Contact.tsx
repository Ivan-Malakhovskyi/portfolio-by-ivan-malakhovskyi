import { FC } from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";

const Contact: FC = () => {
  return (
    <MaxWidthWrapper>
      <section id="contact" className="pb-14">
        <h2 className="text-mainWhite text-3xl font-semibold  text-center md:text-6xl mb-8">
          Contact
        </h2>
        <p className="text-mainGrey text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut culpa
          ullam ipsa placeat incidunt voluptatum recusandae nobis. Officia,
          commodi autem fugit, optio tempore officiis vel ea sunt ipsum
          assumenda voluptas!
        </p>
      </section>
    </MaxWidthWrapper>
  );
};

export default Contact;
