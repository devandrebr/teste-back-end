import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { RouterProvider } from 'react-router-dom'
import router from './router.jsx';
import { ContextProvider } from './contexts/contextprovider.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './index.css'

const root = createRoot(document.getElementById('root'));

root.render(
  <StrictMode>
    <ContextProvider>
      <RouterProvider router={router} />
    </ContextProvider>
  </StrictMode>
)

// document.body.classList.add('d-flex', 'flex-column', 'h-100');
