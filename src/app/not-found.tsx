import React, { FC } from "react";
import Link from "next/link";

const NotFoundPage: FC = () => {
  return (
    <section>
      {" "}
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <p className="text-xl mb-8   text-white  transition duration-300">
          Page not found
        </p>
        <Link
          href="/"
          className="bg-blue-500 hover:bg-blue-600 rounded-lg px-6 py-3 "
        >
          Back to home page
        </Link>
      </div>
    </section>
  );
};

export default NotFoundPage;
