import React from 'react'
import Navbar from './Component/Navbar';
import Hero from './Component/Hero';
import About from './Component/About';
import Education from './Component/Eduction';
import Project from './Component/Project';
import Contact from './Component/Contact';
import Footer from './Component/Footer';

import { Toaster } from "react-hot-toast";
const App = () => {
  return (

    <>
    <div className='overflow-hidden'>
    <Navbar/>
    <Hero/>
    <About/>
    <Education/>
    <Project/>
    <Contact/>
    <Footer/>
   
    <Toaster
  position="top-center"
  reverseOrder={false}
/>
    </div>
    
    </>
  )
}

export default App;