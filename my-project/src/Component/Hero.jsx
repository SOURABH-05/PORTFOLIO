import React, { useRef } from 'react';
import { HiOutlineDownload } from "react-icons/hi";
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import CV from "../assets/cvs_compressed.pdf"
import img from "../assets/IMG_7714.png"
import { motion, useTransform, useMotionValue, useSpring } from "framer-motion"
import { useMagnetic } from '../hooks/useMagnetic';

const MagneticSocial = ({ icon, href }) => {
  const { ref, style } = useMagnetic(0.3, 100);
  return (
    <div ref={ref} style={style}>
      <a 
        href={href} 
        target="_blank" 
        rel="noreferrer" 
        className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-xl text-slate-300 hover:text-white transition-all"
      >
        {icon}
      </a>
    </div>
  );
};

const Hero = () => {
  const containerRef = useRef(null);
  const { ref: ctaRef, style: ctaStyle } = useMagnetic(0.2, 120);

  // Mouse move parallax effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX / innerWidth) - 0.5;
    const y = (clientY / innerHeight) - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const springConfig = { damping: 50, stiffness: 300 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Transformations for elements
  const imageX = useTransform(smoothX, [-0.5, 0.5], [-20, 20]);
  const imageY = useTransform(smoothY, [-0.5, 0.5], [-20, 20]);
  const textX = useTransform(smoothX, [-0.5, 0.5], [10, -10]);
  const textY = useTransform(smoothY, [-0.5, 0.5], [10, -10]);
  const bgX = useTransform(smoothX, [-0.5, 0.5], [-50, 50]);
  const bgY = useTransform(smoothY, [-0.5, 0.5], [-50, 50]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className='relative min-h-[100svh] flex items-center justify-center pt-28 pb-12 px-6 overflow-hidden'
    >
      {/* Interactive Background Elements */}
      <motion.div 
        style={{ x: bgX, y: bgY }}
        className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500/10 blur-[120px] rounded-full pointer-events-none -z-10" 
      />
      <motion.div 
        style={{ x: textX, y: textY }}
        className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-violet-500/10 blur-[150px] rounded-full pointer-events-none -z-10" 
      />

      <div className='max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center'>
        
        {/* Left Side: Content */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{ x: textX, y: textY }}
          className='relative z-10 text-center lg:text-left order-2 lg:order-1'
        >
          {/* Top Badge */}
          <motion.div variants={itemVariants} className="flex justify-center lg:justify-start mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border-white/20 bg-white/5">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500"></span>
              </span>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">Available for work</span>
            </div>
          </motion.div>

          <motion.h1 variants={itemVariants} className='text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.95] mb-6'>
            Hi, I'm <br className="hidden lg:block"/>
            <span className='text-gradient py-2'>Sourabh Dharra.</span>
          </motion.h1>

          <motion.p variants={itemVariants} className='text-lg md:text-xl text-slate-400 font-medium max-w-xl mx-auto lg:mx-0 leading-relaxed mb-10'>
            A Full-Stack Developer engineering scalable, high-performance web applications with a focus on immersive aesthetics.
          </motion.p>

          <motion.div variants={itemVariants} className='flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-8'>
            <div ref={ctaRef} style={ctaStyle}>
              <a href={CV} download="resume">
                <button className='px-8 py-4 bg-white text-black hover:bg-slate-200 rounded-full font-bold flex items-center gap-2 transition-all hover:scale-105 active:scale-95 shadow-[0_0_40px_-10px_rgba(255,255,255,0.4)]'>
                  <HiOutlineDownload size={22} />
                  <span className="text-base md:text-lg">Download CV</span>
                </button>
              </a>
            </div>
            
            <div className="flex gap-4">
              {[
                { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/sourabh-dharra-707294288/" },
                { icon: <FaGithub />, href: "https://github.com/SOURABH-05" },
                { icon: <FaInstagram />, href: "https://www.instagram.com/100_rabhdharra/" },
                { icon: <FaFacebook />, href: "https://www.facebook.com/profile.php?id=61564349244530" },
              ].map((social, index) => (
                <MagneticSocial key={index} {...social} />
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Right Side: Profile Image */}
        <motion.div 
          style={{ x: imageX, y: imageY }}
          initial={{ opacity: 0, scale: 0.8, x: 50 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className='relative flex justify-center order-1 lg:order-2'
        >
          <div className="relative animate-float w-full max-w-[280px] md:max-w-sm lg:max-w-md">
             <div className="absolute inset-0 bg-cyan-500/10 blur-[100px] rounded-full -z-10" />
             
             <div className="relative overflow-hidden rounded-[2.5rem] md:rounded-[4rem] border border-white/10 bg-black/40">
                <img
                  src={img}
                  alt="Sourabh"
                  className='w-full object-cover filter contrast-110 brightness-90 grayscale-[10%]'
                  style={{ maskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)' }}
                />
             </div>

             <div className="absolute -top-4 -right-4 p-4 glass-card rounded-2xl hidden md:block">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                  <span className="text-[10px] uppercase tracking-tighter text-slate-300 font-bold">MERN EXPERT</span>
                </div>
             </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default Hero;
