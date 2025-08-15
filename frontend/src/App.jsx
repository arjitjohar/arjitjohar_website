import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/Navbar';
import About from './pages/About';
import Experiences from './pages/Experiences';
import Learning from './pages/Learning';
import Contact from './pages/Contact';
import Simulations from './pages/Simulations';
import SignIn from './pages/SignIn';

function App() {
  return (
    <AuthProvider>
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
              <Route path="/signin" element={<SignIn />} />
            </Routes>
          </main>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
