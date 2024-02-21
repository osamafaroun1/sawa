import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter ,Routes,Route } from 'react-router-dom';
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename='/sawa' >
    <React.StrictMode>
      <Routes>
        <Route path='/*'  element={<App />} />
      </Routes>
    </React.StrictMode>
  </BrowserRouter>,
)
