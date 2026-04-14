import React from 'react';
import { FaUserCircle } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa6";
import { motion } from 'framer-motion';

const ResponsiveMenu = ({ showMenu, setShowMenu }) => {
  return (
    <motion.div
      initial={{ x: "-100%" }}
      animate={{ x: showMenu ? 0 : "-100%" }}
      transition={{ type: "spring", damping: 25, stiffness: 200 }}
      className="fixed top-0 left-0 z-40 h-screen w-[75%] glass-nav border-r border-white/10 p-8 flex flex-col md:hidden"
    >
      <div className="flex items-center gap-4 mb-12">
        <div className="p-1 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full">
          <FaUserCircle size={48} className='text-white' />
        </div>
        <div>
          <h1 className='text-xl font-bold text-white'>Sourabh Dharra</h1>
          <p className='text-sm text-blue-400 font-medium'>Full Stack Developer</p>
        </div>
      </div>

      <nav>
        <ul className='flex flex-col gap-6 text-lg font-semibold'>
          {[
            { name: 'Home', href: '#' },
            { name: 'About', href: '#about' },
            { name: 'Education', href: '#education' },
            { name: 'Projects', href: '#projects' },
          ].map((link) => (
            <li key={link.name}>
              <a 
                href={link.href} 
                className='text-slate-300 hover:text-white transition-colors block py-2'
                onClick={() => setShowMenu(false)}
              >
                {link.name}
              </a>
            </li>
          ))}

          <li className="pt-4">
            <a href="#contact" onClick={() => setShowMenu(false)}> 
              <button className='w-full px-6 py-3 rounded-xl bg-blue-600 text-white flex items-center justify-center gap-2 font-bold shadow-lg shadow-blue-500/20'>
                Contact <FaChevronRight />
              </button>
            </a>
          </li>
        </ul>
      </nav>
      
      <div className="mt-auto text-center">
        <p className="text-slate-500 text-xs italic">Crafted with passion by Sourabh</p>
      </div>
    </motion.div>
  );
}

export default ResponsiveMenu;
