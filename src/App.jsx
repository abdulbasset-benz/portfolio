import React from "react";
import "./style.css";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";

function App() {
  return (
    <div className="container mx-auto bg-primary h-screen antialiased">
      <Navigation />
      <Hero />
      <AboutMe />
    </div>
  );
}

export default App;
