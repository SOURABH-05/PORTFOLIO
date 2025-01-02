import React from 'react';
import { HiOutlineDownload } from "react-icons/hi";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

import img from "../assets/IMG_7714.png"
import { motion } from "framer-motion"
import "../CSS/Hero.css"
const Hero = () => {
  return (
    <section className='h-max md:h-screen bg-gradient-to-1 bg-gray-950 text-white flex flex-col justify-center items-center relative z-10 pb-10'>
      <div>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>




      </div>
      <div className='max-w-7xl mt-24 mx-auto items-center flex flex-col md:flex-row gap-16 md:gap-40 justify-between'>

        <div className='md:space-y-6 px-4'>
          <motion.h1
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className='md:text-6xl text-4xl font-bold mb-4'>
            Hi👋, I'm  <br /><p className='text-blue-400'>Sourabh Dharra</p>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className='md:text-2xl text-lg mb-3'>Full-Stack Developer | MERN Stack Enthusiast</motion.p>
          <motion.p
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.4, delay: 0.3 }}
            className='lg:w-[600px] mb-4 md:mb-0  text-sm text-lg'>
            Hi, I'm Sourabh, a full-stack developer with a deep passion for creating dynamic, responsive web applications. I specialize in using the MERN stack to build efficient websites.
          </motion.p>
          <motion.button
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.4, delay: 0.3 }}
            className='px-3 py-2 flex items-center gap-2 bg-blue-500 rounded-md text-white hover:bg-blue-600 shadow-blue-500 border-2 border-blue-400 transition-all shadow-[0_0_2px_#fff,0_0_2px_#fff,0_0_5px_#33CCCC,0_0_15px_#33CCCC,0_0_30px_#33CCCC]'>
            <HiOutlineDownload />  Download CV
          </motion.button>

          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.4, delay: 0.4 }}
            className="flex gap-3 text-2xl transition-all mt-5 md:mt-0"
          >
            <a href="https://www.facebook.com/profile.php?id=61564349244530&mibextid=ZbWKwL" target="_blank"><FaFacebook className="hover:text-blue-400 hover:-translate-y-1 transition-transform" /></a>
            <a href="https://www.instagram.com/100_rabhdharra/" target="_blank"><FaInstagram className="hover:text-blue-400 hover:-translate-y-1 transition-transform" /></a>
            <a href="https://www.linkedin.com/in/sourabh-dharra-707294288/" target="_blank"><FaLinkedin className="hover:text-blue-400 hover:-translate-y-1 transition-transform" /></a>

            <a href="https://github.com/SOURABH-05" target="_blank"><FaGithub className="hover:text-blue-400 hover:-translate-y-1 transition-transform" /></a>
          </motion.div>

        </div>
        <div className='relative group'>
          <motion.img
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.4, delay: 0 }}
            src={img}
            alt=""
            className='rounded-full border border-blue-600 md:w-[500px] md:h-[500px] w-[300px] h-[300px] object-cover shadow-[0px_0px_20px_10px_rgba(0,0,0,0.3)] shadow-blue-500'
          />
        </div>

      </div>
    </section>
  );
}

export default Hero;
