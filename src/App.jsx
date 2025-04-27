import React from "react";
import "./style.css";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import ServiceCard from "./components/ServiceCard";


function App() {
  return (
    <div className="container mx-auto bg-primary h-screen antialiased">
      <Navigation />
      <Hero />
      <AboutMe />
      <ServiceCard />
    </div>
  );
}

export default App;
