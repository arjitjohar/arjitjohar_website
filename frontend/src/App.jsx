import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './pages/About';
import Experiences from './pages/Experiences';
import Learning from './pages/Learning';
import Contact from './pages/Contact';
import Simulations from './pages/Simulations';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background-light">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/experiences" element={<Experiences />} />
            <Route path="/learning" element={<Learning />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/simulations" element={<Simulations />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
