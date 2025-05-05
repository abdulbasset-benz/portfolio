import React from "react";
import "./style.css";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Services from "./components/Services";
import Process from "./components/Process";
import Projects from "./components/Projects";
import Techstack from "./components/Techstack";

function App() {
  return (
    <div className="bg-primary h-screen antialiased">
      <Navigation />
      <Hero />
      <AboutMe />
      <Services />
      <Process />
      <Projects />
      <Techstack />
    </div>
  );
}

export default App;
