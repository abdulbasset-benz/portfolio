import React from "react";
import "./style.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import Hero from "./components/Hero";
import LazySection from "./components/LazySection";
import Layout from "./components/Layout";
function App() {
  return (
    <Layout>
      <Hero />
      <LazySection
        importFunc={() => import("./components/AboutMe")}
        delay={100}
      />
      <LazySection
        importFunc={() => import("./components/Services")}
        delay={200}
      />
      <LazySection
        importFunc={() => import("./components/Process")}
        delay={300}
      />
      <LazySection
        importFunc={() => import("./components/Projects")}
        delay={400}
      />
      <LazySection
        importFunc={() => import("./components/Techstack")}
        delay={500}
      />
      <LazySection
        importFunc={() => import("./components/Contact")}
        delay={600}
      />
    </Layout>
  );
}

export default App;
