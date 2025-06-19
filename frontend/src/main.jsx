import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import App from './App.jsx';
import './index.css';

import About from './pages/About.jsx';
import Experiences from './pages/Experiences.jsx';
import Learning from './pages/Learning.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Navigate to="/about" replace />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'experiences',
        element: <Experiences />,
      },
      {
        path: 'learning',
        element: <Learning />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
