import { About } from "@/components/About";
import { Business } from "@/components/Business";
import { Contact } from "@/components/Contact";
import { Mainvisual } from "@/components/Mainvisual";
import { Recruit } from "@/components/Recruit";
import Sustainability from "@/components/Sustainability";
import Works from "@/components/Works";

export default function Home() {
  return (
    <>
      <main>
        <Mainvisual />
        <About />
        <Business />
        <Works />
        <Sustainability />
        <Recruit />
        <Contact />
      </main>
    </>
  );
}
