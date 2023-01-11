import React from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';
import NavBar from './components/NavBar';
import Inspiration from './pages/Inspiration';
import CodingPortfolio from './pages/CodingPortfolio';
import DesignPortfolio from './pages/DesignPortfolio';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Calendar from './pages/Calendar';

function App() {
  return (
    <div className="Appn">
        <NavBar/> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/inspiration" element={<Inspiration />} />
          <Route path="/codingportfolio" element={<CodingPortfolio />} />
          <Route path="/designportfolio" element={<DesignPortfolio />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
  </div>
);
}

export default App;
