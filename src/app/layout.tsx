import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import "normalize.css/normalize.css";
import Head from "next/head";

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
      <Head>
        <title>Portfolio by Ivan Malakhovskyi</title>
        <meta
          name="description"
          content="Portfolio by Ivan Malakhovskyi, MERN Full Stack Developer from Vinnitsya"
        />
        <link
          rel="canonical"
          href="https://portfolio-by-ivan-malakhovskyi.vercel.app/en"
        />
        <meta
          name="keywords"
          content="Frontend developer, Full Stack, MERN, HTML5, CSS3, Sass, JavaScript, TypeScript, React, Next.js, Tailwind CSS, Redux, Zustand, Firebase, Node.js, Express.js, MongoDB, Postman, Figma, Pixso, Vinnytsia, Ivan Malakhovskyi"
        />
        <meta name="theme-color" content="hsl(24.3, 97.4%, 54.3%)" />
        <link rel="icon" href="/favicon/favicon.svg" />
      </Head>
      <body className="bg-white dark:bg-black">{children}</body>
    </html>
  );
}

export default RootLayout;
