import { Routes, Route } from 'react-router'
import RootLayout from './Layouts/RootLayout'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import ThankYou from './pages/ThankYou'
import CaseStudy from './pages/CaseStudy'   // ← new

function App() {
  return (
    <Routes>
      {/* Thank you is outside RootLayout — no navbar/footer */}
      <Route path="thank-you" element={<ThankYou />} />

      <Route element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="projects" element={<Projects />} />
        <Route path="projects/:slug" element={<CaseStudy />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  )
}

export default App