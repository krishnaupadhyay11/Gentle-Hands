import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Homepage, About, Services, Gallery, ContactUs } from './pages/index'

import ScrollToTop from './components/ScrollToTop'

import './App.css'

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
    </Router>
  )
}
