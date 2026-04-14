import React from 'react'
import Navbar from './Component/Navbar';
import Hero from './Component/Hero';
import About from './Component/About';
import Education from './Component/Education';
import Project from './Component/Project';
import Contact from './Component/Contact';
import Footer from './Component/Footer';
import AnimatedBackground from './Component/AnimatedBackground';
import CustomCursor from './Component/CustomCursor';

import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <>
      <CustomCursor />
      <AnimatedBackground />
      <div className='overflow-x-hidden relative z-0'>
        <Navbar/>
        <Hero/>
        <About/>
        <Education/>
        <Project/>
        <Contact/>
        <Footer/>
        <Toaster position="top-center" reverseOrder={false} />
      </div>
    </>
  )
}

export default App;