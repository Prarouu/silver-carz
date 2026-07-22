import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Pricing } from "@/components/sections/Pricing";
import { Location } from "@/components/sections/Location";
import { Gallery } from "@/components/sections/Gallery";
import { About } from "@/components/sections/About";
import { Faq } from "@/components/sections/Faq";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Pricing />
      <Location />
      <Gallery />
      <About />
      <Faq />
      <Contact />
    </>
  );
}
