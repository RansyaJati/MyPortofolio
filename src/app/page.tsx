import { About } from "@/components/sections/About";
import { Connect } from "@/components/sections/Connect";
import { Creative } from "@/components/sections/Creative";
import { Hero } from "@/components/sections/Hero";
import { Technical } from "@/components/sections/Technical";

export default function Home() {
  return (
    <main
      id="main-content"
      tabIndex={-1}
      className="bg-bg text-fg focus:outline-none"
    >
      <Hero />
      <Technical />
      <Creative />
      <About />
      <Connect />
    </main>
  );
}
