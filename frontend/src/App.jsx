import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="min-h-screen bg-background-light">
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
