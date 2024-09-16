"use client"

import About from "@/components/about";
import Hero from "@/components/hero";

export default function Home() {
  return (
    <div className="flex flex-col gap-20 ">
        <Hero/>
        <About/>
    </div>
  );
}
