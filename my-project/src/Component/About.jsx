import React from 'react';
import AboutImg from '../assets/rb_37267.png';
import CSS from "../assets/CSS.png";
import HTML from "../assets/Html.png";
import javascript from "../assets/JS.png";
import react from "../assets/React.png";
import redux from "../assets/Redux.png";
import tailwind from "../assets/Tailwind Css.png";
import Bootstrap from "../assets/Bootstrap.png";
import node from "../assets/NodeLogo.png";
import mongo from "../assets/mongodb.svg";
import express from "../assets/Express.png";
import next from "../assets/NextJs.svg";
import git from "../assets/Github.png";
import python from "../assets/python.svg";
import ui from "../assets/icons8-ux-48.png";
import c from "../assets/c.svg";
import api from "../assets/icons8-rest-api-48.png";
import Solving from "../assets/solving.png";
import ml from "../assets/ml.png";
import { motion } from "framer-motion";


const About = () => {
  return (
    <div id='about' className='py-20 bg-gray-900 z-50 text-gray-300'>
      <div className='max-w-7xl mx-auto px-4'>
        <h2 className='text-4xl md:text-5xl font-bold mb-11 text-center'>About Me</h2>
        <div className='flex flex-col md:flex-row gap-20 items-center'>
          {/* img section */}
          <div>
            <motion.img
              initial={{ opacity: 1, y: 0 }} // Start fully visible at its original position
              animate={{ opacity: 1, y: [-10, 10, -10] }} // Moves up and down without disappearing
              transition={{ duration: 2, ease: "easeInOut", repeat: Infinity, repeatType: "loop" }} // Infinite loop with smooth easing
              src={AboutImg} alt="About Me"
              className="w-[600px] md:w-[1200px] rounded-full relative border-blue-600 p-1 shadow-blue-500" // Removed hidden for clarity
            />
          </div>


          {/* paragraph section */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}


            className='p-5 md:p-10 bg-gray-950 mt-9 rounded-md shadow-[0px_0px_20px_10px_rgba(0,0,0,0.3)] shadow-blue-500'>
            <p className='text-lg leading-7 mb-6'>
              Hi, I'm Sourabh, a BTech student with a deep passion for web development. Currently, I specialize in building dynamic and responsive websites using the MERN stack (MongoDB, Express.js, React, Node.js). I enjoy solving real-world challenges with code and crafting seamless user experiences. My goal is to develop high-performance web applications that are both functional and visually appealing.
            </p>
            <p className='text-lg leading-7 mb-6'>
              Through this portfolio, I invite you to explore the projects I've worked on. I'm always eager to learn and grow, and I'm open to connecting with like-minded developers and future collaborators. Let's collaborate and build something incredible together!
            </p>

            <div className='mt-5'>
              <h1 className='font-bold text-2xl mb-5 text-center text-blue-400'>My Skills</h1>
              <div className='flex items-center justify-center flex-wrap gap-4'>
                {/* Skill Icons */}
                <div className='flex flex-wrap gap-4'>
                  <div className='relative border border-blue-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-blue-500 hover:bg-gradient-to-r hover:from-blue-500 hover:via-blue-400 hover:to-blue-300 hover:text-white hover:shadow-xl hover:scale-105 hover:border-transparent transition-all duration-300'>
                    <img src={c} alt="C/C++" className='w-6 h-6' />
                    <p className='font-semibold text-white text-xs'>C/C++</p>
                  </div>
                  <div className='relative border border-blue-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-blue-500 hover:bg-gradient-to-r hover:from-green-500 hover:via-yellow-400 hover:to-orange-500 hover:text-white hover:shadow-xl hover:scale-105 hover:border-transparent transition-all duration-300'>
                    <img src={python} alt="Python" className='w-6 h-6' />
                    <p className='font-semibold text-white text-xs'>Python</p>
                  </div>
                  <div className='relative border border-blue-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-blue-500 hover:bg-gradient-to-r hover:from-blue-500 hover:via-blue-400 hover:to-blue-300 hover:text-white hover:shadow-xl hover:scale-105 hover:border-transparent transition-all duration-300'>
                    <img src={HTML} alt="HTML" className='w-6 h-6' />
                    <p className='font-semibold text-white text-xs'>HTML</p>
                  </div>
                  <div className='relative border border-blue-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-blue-500 hover:bg-gradient-to-r hover:from-pink-500 hover:via-purple-400 hover:to-blue-500 hover:text-white hover:shadow-xl hover:scale-105 hover:border-transparent transition-all duration-300'>
                    <img src={CSS} alt="CSS" className='w-6 h-6' />
                    <p className='font-semibold text-white text-xs'>CSS</p>
                  </div>
                  <div className='relative border border-blue-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-blue-500 hover:bg-gradient-to-r hover:from-yellow-400 hover:via-orange-500 hover:to-red-500 hover:text-white hover:shadow-xl hover:scale-105 hover:border-transparent transition-all duration-300'>
                    <img src={javascript} alt="Javascript" className='w-6 h-6' />
                    <p className='font-semibold text-white text-xs'>Javascript</p>
                  </div>
                  <div className='relative border border-blue-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-blue-500 hover:bg-gradient-to-r hover:from-cyan-500 hover:via-blue-500 hover:to-indigo-500 hover:text-white hover:shadow-xl hover:scale-105 hover:border-transparent transition-all duration-300'>
                    <img src={react} alt="React" className='w-6 h-6 rounded-full' />
                    <p className='font-semibold text-white text-xs'>React</p>
                  </div>
                  <div className='relative border border-blue-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-blue-500 hover:bg-gradient-to-r hover:from-purple-500 hover:via-indigo-500 hover:to-blue-500 hover:text-white hover:shadow-xl hover:scale-105 hover:border-transparent transition-all duration-300'>
                    <img src={redux} alt="Redux" className='w-6 h-6' />
                    <p className='font-semibold text-white text-xs'>Redux</p>
                  </div>
                  <div className='relative border border-blue-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-blue-500 hover:bg-gradient-to-r hover:from-teal-400 hover:via-blue-500 hover:to-purple-600 hover:text-white hover:shadow-xl hover:scale-105 hover:border-transparent transition-all duration-300'>
                    <img src={tailwind} alt="Tailwind CSS" className='w-6 h-6 rounded-full' />
                    <p className='font-semibold text-white text-xs'>Tailwind CSS</p>
                  </div>
                  <div className='relative border border-blue-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-blue-500 hover:bg-gradient-to-r hover:from-blue-500 hover:via-gray-400 hover:to-blue-300 hover:text-white hover:shadow-xl hover:scale-105 hover:border-transparent transition-all duration-300'>
                    <img src={Bootstrap} alt="Bootstrap" className='w-6 h-6' />
                    <p className='font-semibold text-white text-xs'>Bootstrap</p>
                  </div>
                  <div className='relative border border-blue-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-blue-500 hover:bg-gradient-to-r hover:from-green-500 hover:via-teal-400 hover:to-blue-500 hover:text-white hover:shadow-xl hover:scale-105 hover:border-transparent transition-all duration-300'>
                    <img src={node} alt="Node.js" className='w-6 h-6' />
                    <p className='font-semibold text-white text-xs'>Node.js</p>
                  </div>
                  <div className='relative border border-blue-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-blue-500 hover:bg-gradient-to-r hover:from-green-500 hover:via-yellow-400 hover:to-green-300 hover:text-white hover:shadow-xl hover:scale-105 hover:border-transparent transition-all duration-300'>
                    <img src={mongo} alt="MongoDB" className='w-6 h-6' />
                    <p className='font-semibold text-white text-xs'>MongoDB</p>
                  </div>
                  <div className='relative border border-blue-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-blue-500 hover:bg-gradient-to-r hover:from-gray-500 hover:via-gray-400 hover:to-gray-300 hover:text-white hover:shadow-xl hover:scale-105 hover:border-transparent transition-all duration-300'>
                    <img src={express} alt="Express.js" className='w-6 h-6' />
                    <p className='font-semibold text-white text-xs'>Express.js</p>
                  </div>
                  <div className='relative border border-blue-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-blue-500 hover:bg-gradient-to-r hover:from-black hover:via-gray-800 hover:to-gray-600 hover:text-white hover:shadow-xl hover:scale-105 hover:border-transparent transition-all duration-300'>
                    <img src={next} alt="Next.js" className='w-6 h-6' />
                    <p className='font-semibold text-white text-xs'>Next.js</p>
                  </div>
                  <div className='relative border border-blue-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-blue-500 hover:bg-gradient-to-r hover:from-gray-500 hover:via-gray-400 hover:to-gray-300 hover:text-white hover:shadow-xl hover:scale-105 hover:border-transparent transition-all duration-300'>
                    <img src={git} alt="Github" className='w-6 h-6' />
                    <p className='font-semibold text-white text-xs'>Github</p>
                  </div>
                  <div className='relative border border-blue-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-blue-500 hover:bg-gradient-to-r hover:from-gray-500 hover:via-gray-400 hover:to-gray-300 hover:text-white hover:shadow-xl hover:scale-105 hover:border-transparent transition-all duration-300'>
                    <img src={ui} alt="UI/UX" className='w-6 h-6' />
                    <p className='font-semibold text-white text-xs'>UI/UX</p>
                  </div>
                  <div className='relative border border-blue-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-blue-500 hover:bg-gradient-to-r hover:from-gray-500 hover:via-gray-400 hover:to-gray-300 hover:text-white hover:shadow-xl hover:scale-105 hover:border-transparent transition-all duration-300'>
                    <img src={api} alt="Rest APIs" className='w-6 h-6' />
                    <p className='font-semibold text-white text-xs'>Rest APIs</p>
                  </div>
                  <div className='relative border border-blue-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-blue-500 hover:bg-gradient-to-r hover:from-teal-400 hover:via-blue-500 hover:to-purple-600 hover:text-white hover:shadow-xl hover:scale-105 hover:border-transparent transition-all duration-300'>
                    <img src={Solving} alt="Tailwind CSS" className='w-6 h-6 rounded-full ' />
                    <p className='font-semibold text-white text-xs'>Problem Solving</p>
                  </div>
                  <div className='relative border border-blue-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-blue-500 hover:bg-gradient-to-r hover:from-yellow-400 hover:via-orange-500 hover:to-red-500 hover:text-white hover:shadow-xl hover:scale-105 hover:border-transparent transition-all duration-300'>
                    <img src={ml} alt="Javascript" className='w-6 h-6' />
                    <p className='font-semibold text-white text-xs'>Machine Learning</p>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>
        </div>
      </div>
    </div >
  );
};

export default About;
