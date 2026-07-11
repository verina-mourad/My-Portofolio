"use client";

import { FloatingNav } from "@/components/ui/floating-navbar";
import Hero from "./_components/Hero";
import { FaHome } from "react-icons/fa";
import Grid from "./_components/Grid";
import RecentProject from "./_components/RecentProject";
import Client from "./_components/Client";
import Experience from "./_components/Experience";



const Home = () => {
const navItems = [
  {
    name: "About",
    link: "#about",
  },
  {
    name: "Projects",
    link: "#projects",
  },
  {
    name: "Testimonials",
    link: "#testimonials",
  },
  {
    name: "Contact",
    link: "#contact",
  },
];

  return (
    <main className="relative bg-black flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={
        navItems
        } />
        <Hero />
        <Grid/>
        <RecentProject/>
        <Client/>
        <Experience/>
      </div>
    </main>
  );
};

export default Home;