import Hero from "./components/Hero";
import MaxWidthWrapper from "./components/MaxWidthWrapper";

export default function Home() {
  return (
    <main className="bg-mainBlack">
      <MaxWidthWrapper>
        <Hero />
      </MaxWidthWrapper>
    </main>
  );
}
