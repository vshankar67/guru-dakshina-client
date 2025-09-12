import { useState, useEffect } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Courses from './pages/Courses';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import LoginRedirect from './pages/LoginRedirect';
import AOS from 'aos';
import 'aos/dist/aos.css';
import FloatingChatBot from './components/FloatingChatBot.jsx';


function App() { 
  useEffect(() => {
      AOS.init({ duration: 800, once: false });
      }, []);
  return (
    <>
      <Header />
      <main className="main-content">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<LoginRedirect />} />
      </Routes>
      </main>
      <FloatingChatBot />
      <Footer />
    
    </>
  )
}

export default App
