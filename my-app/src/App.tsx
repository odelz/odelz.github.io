import React from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';
import NavBar from './components/NavBar';
import Inspiration from './pages/Inspiration';
import Portfolio from './pages/Portfolio';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Calendar from './pages/Calendar';
import { ThemeProvider } from '@mui/material';
import theme
 from './theme';
function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <NavBar/> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/inspiration" element={<Inspiration />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </ThemeProvider>
  </div>
);
}

export default App;
