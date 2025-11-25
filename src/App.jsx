import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {
  const [open, setOpen] = useState(false);

  return (
    <Router>
      {/* NAVBAR */}
      <nav className="bg-white shadow-md p-4 sticky top-0 z-50">
        <div className="flex items-center justify-between">
          {/* Logo / Name */}
          <h1 className="text-xl font-semibold">My Portfolio</h1>

          {/* Hamburger button (mobile) */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setOpen(!open)}
          >
            ☰
          </button>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="hover:text-purple-600">Home</Link>
            <Link to="/about" className="hover:text-purple-600">About</Link>
            <Link to="/skills" className="hover:text-purple-600">Skills</Link>
            <Link to="/projects" className="hover:text-purple-600">Projects</Link>
            <Link to="/contact" className="hover:text-purple-600">Contact</Link>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="flex flex-col mt-3 space-y-3 md:hidden">
            <Link to="/" className="hover:text-purple-600" onClick={() => setOpen(false)}>Home</Link>
            <Link to="/about" className="hover:text-purple-600" onClick={() => setOpen(false)}>About</Link>
            <Link to="/skills" className="hover:text-purple-600" onClick={() => setOpen(false)}>Skills</Link>
            <Link to="/projects" className="hover:text-purple-600" onClick={() => setOpen(false)}>Projects</Link>
            <Link to="/contact" className="hover:text-purple-600" onClick={() => setOpen(false)}>Contact</Link>
          </div>
        )}
      </nav>

      {/* PAGE CONTENT */}
      <div className="p-8 font-sans">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
