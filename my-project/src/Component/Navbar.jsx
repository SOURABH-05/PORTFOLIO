import React, { useState, useEffect } from 'react';
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import ResponsiveMenu from './ResponsiveMenu';
import logo from "../assets/logo.png"
import { motion, AnimatePresence } from 'framer-motion';
import { useMagnetic } from '../hooks/useMagnetic';

const MagneticLink = ({ children, href, className }) => {
  const { ref, style } = useMagnetic(0.2, 80);
  return (
    <div ref={ref} style={style}>
      <a href={href} className={className}>
        {children}
      </a>
    </div>
  );
};

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { ref: logoRef, style: logoStyle } = useMagnetic(0.3, 100);
  const { ref: btnRef, style: btnStyle } = useMagnetic(0.2, 80);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Timeline', href: '#education' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled ? 'bg-black/60 backdrop-blur-2xl border-b border-white/[0.05] py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className='max-w-7xl mx-auto px-6 flex items-center justify-between'>
        <div 
          ref={logoRef}
          style={logoStyle}
          className="flex items-center cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <img src={logo} alt="Logo" className='w-16 md:w-20 filter invert brightness-0 grayscale transition-all hover:brightness-200' />
        </div>

        <nav className='hidden md:block'>
          <ul className='flex gap-4 items-center bg-white/5 border border-white/10 px-6 py-2 rounded-full backdrop-blur-md'>
            {navLinks.map((link) => (
              <li key={link.name}>
                <MagneticLink
                  href={link.href}
                  className='text-[10px] uppercase tracking-[0.2em] font-extrabold text-slate-400 hover:text-white transition-colors relative group block px-4 py-2'
                >
                  {link.name}
                  <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-cyan-400 opacity-0 transition-all duration-300 group-hover:opacity-100" />
                </MagneticLink>
              </li>
            ))}
          </ul>
        </nav>
        
        <div className="hidden md:block" ref={btnRef} style={btnStyle}>
           <a href="#contact">
            <button className='group relative overflow-hidden px-8 py-3 bg-white text-black rounded-full font-bold text-xs uppercase tracking-widest transition-all hover:scale-105 active:scale-95'>
              <div className="absolute inset-0 bg-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10 transition-colors duration-300 group-hover:text-black">Let's Talk</span>
            </button>
          </a>
        </div>

        <div className='md:hidden text-white cursor-pointer z-50'>
          {showMenu ? (
            <HiMenuAlt1 size={32} onClick={toggleMenu} />
          ) : (
            <HiMenuAlt3 size={32} onClick={toggleMenu} />
          )}
        </div>
      </div>

      <AnimatePresence>
        {showMenu && (
          <ResponsiveMenu showMenu={showMenu} setShowMenu={setShowMenu} />
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
