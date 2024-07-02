import ContactMe from "./home/contact";
import Hero from "./home/hero";
import Summary from "./work/summary";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <Hero/>
      <Summary/>
      <ContactMe/>
    </main>
  );
}
