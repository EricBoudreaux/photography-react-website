import Navbar from "./components/Navbar";

import React, { Component } from 'react';
import Home from './pages/Home'
import Gallery from './pages/Gallery'
import Services from './pages/Services'
import About from './pages/About'
import Contact from './pages/Contact'
import { Route, Routes } from 'react-router-dom';
import Footer from "./components/Footer";




function App() {


  return (
    <>
      <Navbar />

      <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/gallery' element={<Gallery />} />
            <Route path='/services' element={<Services />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
