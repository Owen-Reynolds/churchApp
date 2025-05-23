import { useState } from 'react'
import './App.css'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react"

import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import WebDesigners from './pages/WebDesigners/WebDesigners.jsx';
import ScrollToTop from './components/ScrollToTop/ScrollToTop.jsx';

import Home from './pages/Home/Home.jsx';
import AboutUs from './pages/AboutUs/AboutUs.jsx';
import SundayMornings from './pages/SundayMornings/SundayMornings.jsx';
import Staff from './pages/Staff/Staff.jsx';
import Youth from './pages/Youth/Youth.jsx';
import ChristianCadets from './pages/ChristianCadets/ChristianCadets.jsx';
import Connect from './pages/Connect/Connect.jsx';
import Give from './pages/Give/Give.jsx';

function App() {
  return (
    <>
    <Analytics />
    <BrowserRouter>
    <ScrollToTop />
      <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/AboutUs' element={<AboutUs />} />
          <Route path='/SundayMornings' element={<SundayMornings />} />
          <Route path='/Staff' element={<Staff />} />
          <Route path='/Youth' element={<Youth />} />
          <Route path='/ChristianCadets' element={<ChristianCadets />} />
          <Route path='/Connect' element={<Connect />} />
          <Route path='/Give' element={<Give />} />
          <Route path='/WebDesigners' element={<WebDesigners />} />
        </Routes>
      <Footer/>
      </BrowserRouter>
      
    </>
  )
}

export default App
