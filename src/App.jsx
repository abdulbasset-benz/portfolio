import React from "react";
import "./style.css";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Services from "./components/Services";


function App() {
  return (
    <div className="container mx-auto bg-primary h-screen antialiased">
      <Navigation />
      <Hero />
      <AboutMe />
      <Services />
    </div>
  );
}

export default App;
