import ContactMe from "./home/contact";
import Hero from "./home/hero";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <Hero/>
      <ContactMe/>
    </main>
  );
}
