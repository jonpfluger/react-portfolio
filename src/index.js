import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App'
import Portfolio from './components/Portfolio';
import About from './components/About'
import Contact from './components/Contact'
import Resume from './components/Resume'
import ErrorPage from './ErrorPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <About />,
        errorElement: <ErrorPage />
      },
      {
        path: '/Portfolio',
        element: <Portfolio />,
        errorElement: <ErrorPage />
      },
      {
        path: '/Resume',
        element: <Resume />,
        errorElement: <ErrorPage />
      },
      {
        path: '/Contact',
        element: <Contact />,
        errorElement: <ErrorPage />
      },
    ]
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);