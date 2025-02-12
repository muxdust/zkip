import EverythingYouNeed from "@/components/Landing/Everything";
import Hero from "@/components/Landing/Hero";
import Footer from "@/components/ui/Footer";
import Navbar from "@/components/ui/Navbar";
import React from "react";

const Landing = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <EverythingYouNeed />
      </main>
      <Footer />
    </>
  );
};

export default Landing;
