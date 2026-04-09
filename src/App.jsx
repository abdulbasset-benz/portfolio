import { Routes, Route } from 'react-router'
import RootLayout from './Layouts/RootLayout'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'

function App() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="projects" element={<Projects />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  )
}

export default App