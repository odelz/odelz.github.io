import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import ButtonAppBar from './components/ButtonAppBar';
import Inspiration from './pages/Inspiration';
import Portfolio from './pages/Portfolio';
import Home from './pages/Home';
import Contact from './pages/Contact';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
        <ButtonAppBar/> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/inspiration" element={<Inspiration />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
  </div>
  </BrowserRouter>
  );
}

export default App;
