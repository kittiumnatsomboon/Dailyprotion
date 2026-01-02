import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Navbar from './Component/Navbar';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Footer from './Pages/Footer';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar/>}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
