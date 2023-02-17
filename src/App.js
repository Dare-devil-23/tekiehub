import React, { useEffect, useState } from 'react';
import NavBar from './components/NavBar';
import { Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import About from "./pages/About";
import Technologies from "./pages/Technologies";
import Contact from "./pages/Contact";
import Footer from './components/Footer';
import Careers from "./pages/Careers";
import Loading from './pages/Loading';

const App = () => {
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2500);
    return () => clearTimeout(timer);
  }, [])

  return (
    <>{
      loading ? <Loading/> : <>
        <NavBar />
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/about" element={<About />} />
          <Route path="/technologies/:serviceId" element={<Technologies />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/careers" element={<Careers />} />
        </Routes>
        <Footer />
      </>
    }</>

  );
}

export default App;
