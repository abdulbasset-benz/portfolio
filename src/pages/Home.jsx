import Hero from '../components/Hero'
import Projects from '../components/Projects'
import About from '../components/About'
import Services from '../components/Services'
import Cta from '../components/Cta'
import Testimonials from '../components/Testimonials'

export default function Home() {
  return (
    <>
      <Hero />
      <Projects />
      <About />
      <Services />
      <Testimonials />
      <Cta />
    </>
  )
}