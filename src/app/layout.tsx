import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import "normalize.css/normalize.css";
import Footer from "../components/Footer";
import Header from "../components/Header";

const roboto = Roboto({
  weight: ["400", "500", "700", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  icons: {
    icon: "/favicon/favicon.svg",
  },
  title: "Portfolio by Ivan Malakhovskyi",
  description: "Home page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Portfolio by Ivan Malakhovskyi</title>
        <meta
          name="description"
          content="Portfolio by Ivan Malakhovskyi, MERN Full Stack Developer"
        />
        <meta
          name="keywords"
          content="MERN, HTML5, CSS3, SaSS, JavaScript, TypeScript, React, Next.js, Tailwind CSS, Redux, Zustand, Firebase, Node.js, Express.js, MongoDB, Postman, Figma, Pixso, Vinnytsia, Ivan Malakhovskyi"
        />
        <link rel="icon" href="/favicon/favicon.svg" />
      </head>
      <body className={roboto.className} style={{ backgroundColor: "#000" }}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
