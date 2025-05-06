import React from "react";
import "./style.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Services from "./components/Services";
import Process from "./components/Process";
import Projects from "./components/Projects";
import Techstack from "./components/Techstack";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

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
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
