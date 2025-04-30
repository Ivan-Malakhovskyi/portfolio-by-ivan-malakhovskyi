import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import "normalize.css/normalize.css";

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

async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={roboto.className}>
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
        <meta name="theme-color" content="hsl(24.3, 97.4%, 54.3%)" />
        <link rel="icon" href="/favicon/favicon.svg" />
      </head>
      <body className="bg-white dark:bg-black">{children}</body>
    </html>
  );
}

export default RootLayout;
