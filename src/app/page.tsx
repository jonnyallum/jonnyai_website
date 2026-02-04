import { Hero } from "@/components/sections/Hero";
import { Problem } from "@/components/sections/Problem";
import { Solution } from "@/components/sections/Solution";
import { ServiceCards } from "@/components/sections/ServiceCards";
import { CTA } from "@/components/sections/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Problem />
      <Solution />
      <ServiceCards />
      <CTA />
    </>
  );
}
