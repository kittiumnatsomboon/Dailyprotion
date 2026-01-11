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
import { AuthProvider } from './Authen/auth';
import AdminDashboard from './Pages/Controller/AdminDashboard';
import Dashboard from './Component/Dashboard';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Navbar/>}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="dashboard" element={<Dashboard />} />

          {/* Admin */}
          <Route path="admin/dashboard" element={<AdminDashboard />} />
        </Route>
      </Routes>
    </AuthProvider>
    </BrowserRouter>
  </StrictMode>
)
