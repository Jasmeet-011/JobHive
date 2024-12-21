import './index.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'


createRoot(document.getElementById('root')).render(
  // StrictMode is a wrapper component which will check for potential problems in your app like depricated and unsafe life cycle methods Legacy context API usage 
  // we are inserting our app using render method
  <StrictMode>
    <App />
  </StrictMode>,
)
