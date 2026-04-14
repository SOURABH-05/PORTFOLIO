import React from 'react';
import AboutImg from '../assets/rb_37267.png';
import CSS from "../assets/CSS.png";
import HTML from "../assets/Html.png";
import javascript from "../assets/JS.png";
import react from "../assets/React.png";
import redux from "../assets/Redux.png";
import tailwind from "../assets/Tailwind Css.png";
import node from "../assets/NodeLogo.png";
import mongo from "../assets/mongodb.svg";
import express from "../assets/Express.png";
import next from "../assets/NextJs.svg";
import { motion } from "framer-motion";

const SkillIcon = ({ src, name }) => (
  <div className='flex flex-col items-center gap-2 group p-2'>
    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center p-2.5 transition-all duration-300 group-hover:bg-white/10 group-hover:scale-110 group-hover:-translate-y-1">
      <img src={src} alt={name} className='w-full h-full object-contain filter group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.4)]' />
    </div>
    <span className='text-[10px] font-medium text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity'>{name}</span>
  </div>
);

const About = () => {
  const mainSkills = [
    { name: "React", src: react }, { name: "Next.js", src: next },
    { name: "Node.js", src: node }, { name: "Express", src: express },
    { name: "MongoDB", src: mongo }, { name: "Tailwind", src: tailwind },
  ];

  return (
    <section id='about' className='py-32 px-6 relative z-10'>
      <div className='max-w-7xl mx-auto'>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className='mb-20 text-center md:text-left text-white'
        >
          <h2 className='text-5xl md:text-7xl font-black mb-4 tracking-tighter'>Discover.</h2>
          <p className='text-xl text-slate-400'>The architecture behind the experiences.</p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[250px]">
          
          {/* Main Bio Container - Spans 2 cols, 2 rows */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bento-card md:col-span-2 md:row-span-2 p-8 lg:p-12 flex flex-col justify-between"
          >
            <div className="space-y-6 relative z-10">
              <h3 className="text-3xl font-bold text-white">The Engineering Mindset</h3>
              <p className="text-slate-300 text-lg leading-relaxed mix-blend-screen">
                I am <span className="text-white font-bold">Sourabh Dharra</span>, an ambitious B.Tech student with a relentless drive for building. My journey is defined by transforming abstract problems into scalable, elegant web applications.
              </p>
              <p className="text-slate-400 leading-relaxed">
                I don't just write code; I architect solutions. Specializing in the <span className="text-cyan-400 font-semibold">MERN Stack</span>, I focus on performance, security, and pushing the boundaries of what the web can do.
              </p>
            </div>
            {/* Decorative Grid BG inside card */}
            <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent pointer-events-none opacity-50" />
          </motion.div>

          {/* Tech Stack - Spans 2 cols, 1 row */}
          <motion.div 
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.1 }}
             className="bento-card md:col-span-2 p-8 flex flex-col items-center justify-center bg-black/40"
          >
            <h4 className="text-sm uppercase tracking-[0.3em] text-slate-500 mb-6 font-semibold">Core Arsenal</h4>
            <div className="flex flex-wrap justify-center gap-4">
              {mainSkills.map((skill, i) => <SkillIcon key={i} {...skill} />)}
            </div>
          </motion.div>

          {/* Location/Status - Spans 1 col, 1 row */}
          <motion.div 
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
             className="bento-card p-8 flex flex-col justify-between items-start bg-black/40 relative overflow-hidden group"
          >
            <h4 className="text-sm uppercase tracking-[0.3em] text-slate-500 font-semibold">Base</h4>
            <div className="mt-auto z-10">
              <p className="text-2xl font-bold text-white">Haryana,</p>
              <p className="text-slate-400">India</p>
            </div>
            {/* Globe/Map aesthetic */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 border border-white/5 rounded-full group-hover:scale-150 transition-transform duration-700 ease-out" />
            <div className="absolute -bottom-5 -right-5 w-20 h-20 border border-white/10 rounded-full group-hover:scale-150 transition-transform duration-700 ease-out delay-75" />
          </motion.div>

          {/* Approach - Spans 1 col, 1 row */}
          <motion.div 
             initial={{ opacity: 0, x: 30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.3 }}
             className="bento-card p-8 flex flex-col justify-end bg-gradient-to-tr from-violet-900/20 to-transparent"
          >
             <h4 className="text-2xl font-bold text-white mb-2">100%</h4>
             <p className="text-sm text-slate-400">Commitment to delivering robust, pixel-perfect digital experiences.</p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
