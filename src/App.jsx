import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Porjects from "./components/Projects";
import Services from "./components/Services";
import Cta from "./components/Cta";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
  return (
    <section className="">
      <Navigation />
      <Hero />
      <Porjects />
      <About />
      <Services />
      <Cta />
      <Footer />
    </section>
  );
}

export default App;
