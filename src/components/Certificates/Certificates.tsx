import React, { FC } from "react";
import CertificatesList from "./CertificatesList";
import { useTranslations } from "next-intl";
import MaxWidthWrapper from "../global/MaxWidthWrapper";

const Certificates: FC = () => {
  const t = useTranslations("Certificates");
  return (
    <MaxWidthWrapper>
      <section id="certificates" className="pb-14 ">
        <h2 className=" text-3xl text-mainBlack dark:text-mainWhite font-semibold  text-center md:text-6xl mb-8">
          {t("title")}
        </h2>
        <CertificatesList />
      </section>
    </MaxWidthWrapper>
  );
};

export default Certificates;
