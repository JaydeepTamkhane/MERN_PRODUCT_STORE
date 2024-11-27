import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ProductProvider } from './context/Store'; // Import the context from Store.jsx
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <ProductProvider>
  <StrictMode>
    <App />
  </StrictMode>,
  </ProductProvider>
)
