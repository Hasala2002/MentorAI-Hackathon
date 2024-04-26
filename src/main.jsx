import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Navigation from './layouts/Navigation.jsx';
import Coding from './pages/Coding.jsx';
import Interviews from './pages/Interviews.jsx';

const router = createBrowserRouter([
  {
    path: "/coding",
    element: <Navigation><Coding /></Navigation>,
  },
  {
    path: "/interviews",
    element: <Navigation><Interviews /></Navigation>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
