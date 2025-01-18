"use client";

import { certificatesList } from "@/constants";
import { motion } from "framer-motion";
import Link from "next/link";
import certificate from "/public/images/certificate.png";
import Image from "next/image";
import { container, item } from "@/constants/animations/animationStyles";
import { useInView } from "react-intersection-observer";

const CertificatesList = () => {
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <motion.ul
      className="flex items-center flex-col space-x-4"
      variants={container}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      ref={ref}
    >
      {certificatesList.map(({ id, title, organization, href }) => (
        <li key={id}>
          <Link href={href} target="_blank">
            <div className="bg-white text-gray-900 rounded-lg shadow-md m-2 hover:scale-105 focus:scale-105 ease-out duration-200">
              <motion.div
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={item}
              >
                {" "}
                <Image
                  src={certificate}
                  alt="Certificate 1"
                  className="w-full h-full object-cover rounded-full"
                  width={800}
                  height={800}
                />
              </motion.div>
            </div>
          </Link>
          <h3 className="text-2xl text-center font-semibold  mb-2">{title}</h3>
          <p className="text-xl text-center  mb-2">{organization}</p>
        </li>
      ))}
    </motion.ul>
  );
};

export default CertificatesList;
