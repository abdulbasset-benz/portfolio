import React from "react";
import "./style.css";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";

function App() {
  return (
    <div className="container mx-auto bg-primary h-screen">
      <Navigation />
      <Hero />
    </div>
  );
}

export default App;
