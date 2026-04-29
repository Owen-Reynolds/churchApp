import { useState, lazy, Suspense } from 'react'
import './App.css'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react"

import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import ScrollToTop from './components/ScrollToTop/ScrollToTop.jsx';

// Lazy load pages
const Home = lazy(() => import('./pages/Home/Home.jsx'));
const AboutUs = lazy(() => import('./pages/AboutUs/AboutUs.jsx'));
const SundayMornings = lazy(() => import('./pages/SundayMornings/SundayMornings.jsx'));
const Staff = lazy(() => import('./pages/Staff/Staff.jsx'));
const Youth = lazy(() => import('./pages/Youth/Youth.jsx'));
const NextSteps = lazy(() => import('./pages/WhatNext/WhatNext.jsx'));
const Connect = lazy(() => import('./pages/Connect/Connect.jsx'));
const Give = lazy(() => import('./pages/Give/Give.jsx'));
const WebDesigners = lazy(() => import('./pages/WebDesigners/WebDesigners.jsx'));

function App() {
  return (
    <>
    <Analytics />
    <BrowserRouter>
    <ScrollToTop />
      <Header />
        <Suspense fallback={<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', fontSize: '1.5rem', fontFamily: 'Lora' }}>Loading...</div>}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/AboutUs' element={<AboutUs />} />
            <Route path='/SundayMornings' element={<SundayMornings />} />
            <Route path='/Staff' element={<Staff />} />
            <Route path='/Youth' element={<Youth />} />
            <Route path='/nextsteps' element={<NextSteps />} />
            <Route path='/nextsteps/:section' element={<NextSteps />} />
            <Route path='/NextSteps' element={<NextSteps />} />
            <Route path='/NextSteps/:section' element={<NextSteps />} />
            <Route path='/Connect' element={<Connect />} />
            <Route path='/Give' element={<Give />} />
            <Route path='/WebDesigners' element={<WebDesigners />} />
          </Routes>
        </Suspense>
      <Footer/>
      </BrowserRouter>
      
    </>
  )
}

export default App
