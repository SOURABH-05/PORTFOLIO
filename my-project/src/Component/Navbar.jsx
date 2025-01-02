import React, { useState } from 'react';
// import { FaChevronRight } from "react-icons/fa";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import ResponsiveMenu from './ResponsiveMenu';
import logo from "../assets/logo.png"



const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className='bg-gray-950 -mb-7 z-50 w-full py-4 fixed'>
      <div className='flex items-center justify-between max-w-7xl mx-auto px-4 md:px-0'>

        <div>
          <img src={logo} alt="Logo" className='w-[100px]  ' />
        </div>

        <nav className='hidden md:block'>
          <ul className='flex gap-8 text-lg items-center text-base text-white'>
            <li>
              <a
                href="#"
                className='cursor-pointer relative hover:text-blue-500 after:content-[""] after:block after:w-0 after:h-[2px] after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full'
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className='cursor-pointer relative hover:text-blue-500 after:content-[""] after:block after:w-0 after:h-[2px] after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full'
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#education"
                className='cursor-pointer relative hover:text-blue-500 after:content-[""] after:block after:w-0 after:h-[2px] after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full'
              >
                Education
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className='cursor-pointer relative hover:text-blue-500 after:content-[""] after:block after:w-0 after:h-[2px] after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full'
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className='cursor-pointer relative hover:text-blue-500 after:content-[""] after:block after:w-0 after:h-[2px] after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full'
              >
                <button className='px-3 py-2 flex item-center gap-2 bg-blue-500 rounded-md text-white hover:bg-blue-600 shadow-blue-500 border-2 border-blue-400 transition-all shadow-[0_0_2px_#fff,0_0_2px_#fff,0_0_5px_#33CCCC,0_0_15px_#33CCCC,0_0_30px_#33CCCC] border-blue-400'>
                  Contact
                </button>
              </a>
            </li>
          </ul>
        </nav>


        <div className='md:hidden text-white text-4xl'>
          {
            showMenu ? <HiMenuAlt1 onClick={toggleMenu} /> : <HiMenuAlt3 onClick={toggleMenu} />
          }
        </div>
      </div>

      <ResponsiveMenu showMenu={showMenu} setShowMenu={setShowMenu} />
    </div>
  );
};

export default Navbar;
