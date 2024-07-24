import React, { FC } from "react";
import CertificatesList from "./CertificatesList";
import MaxWidthWrapper from "./MaxWidthWrapper";

const Certificates: FC = () => {
  return (
    <MaxWidthWrapper>
      <section id="certificates" className="pb-14">
        <h2 className="text-mainWhite text-3xl font-semibold  text-center md:text-6xl mb-8">
          Certificates
        </h2>
        <CertificatesList />
      </section>
    </MaxWidthWrapper>
  );
};

export default Certificates;
