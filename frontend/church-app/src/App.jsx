import { useState } from 'react'
import './App.css'

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from './components/Header/Header.jsx';

import Home from './pages/Home/Home.jsx';
import AboutUs from './pages/AboutUs/AboutUs.jsx';
import SundayMornings from './pages/SundayMornings/SundayMornings.jsx';
import Staff from './pages/Staff/Staff.jsx';
import TrailLife from './pages/TrailLife/TrailLife.jsx';
import Connect from './pages/Connect/Connect.jsx';
import Give from './pages/Give/Give.jsx';

function App() {
  return (
    <>
    <BrowserRouter>
      <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/AboutUs' element={<AboutUs />} />
          <Route path='/SundayMornings' element={<SundayMornings />} />
          <Route path='/Staff' element={<Staff />} />
          <Route path='/TrailLife' element={<TrailLife />} />
          <Route path='/Connect' element={<Connect />} />
          <Route path='/Give' element={<Give />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
