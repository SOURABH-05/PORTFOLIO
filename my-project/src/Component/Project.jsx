import React, { useState, useEffect } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import axios from "axios";
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { useMagnetic } from '../hooks/useMagnetic';

const MagneticButton = ({ children, href, className }) => {
  const { ref, style } = useMagnetic(0.3, 100);
  return (
    <div ref={ref} style={style}>
      <a href={href} target="_blank" rel="noreferrer" className={className}>
        {children}
      </a>
    </div>
  );
};

const Project = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get("https://portfolio-2-7q5d.onrender.com");
        setProjects(response.data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };
    fetchProjects();
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    cssEase: "cubic-bezier(0.87, 0, 0.13, 1)",
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section id="projects" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 flex flex-col md:flex-row justify-between items-end gap-6 border-b border-white/10 pb-8"
        >
          <div>
            <h2 className="text-5xl md:text-7xl font-black mb-2 tracking-tighter text-white">Work.</h2>
            <p className="text-xl text-slate-400">Selected featured projects.</p>
          </div>
          <p className="text-sm text-slate-500 uppercase tracking-[0.2em] font-semibold">
            {projects.length} Initiatives deployed
          </p>
        </motion.div>

        <div className="project-slider-premium -mx-4">
          <Slider {...settings}>
            {projects.map((item, index) => (
              <div key={index} className="px-4 pb-12 outline-none">
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bento-card group flex flex-col h-[600px] outline-none cursor-grab active:cursor-grabbing"
                >
                  <div className="relative h-[65%] w-full overflow-hidden border-b border-white/5 bg-black/50">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105"
                    />
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
                    
                    <div className="absolute top-6 right-6 flex gap-3 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                      {item.link && (
                        <MagneticButton 
                          href={item.link} 
                          className="w-12 h-12 flex items-center justify-center rounded-full glass-card hover:bg-white hover:text-black transition-colors"
                        >
                          <FaExternalLinkAlt size={16} />
                        </MagneticButton>
                      )}
                      {item.github && (
                        <MagneticButton 
                          href={item.github} 
                          className="w-12 h-12 flex items-center justify-center rounded-full glass-card hover:bg-white hover:text-black transition-colors"
                        >
                          <FaGithub size={18} />
                        </MagneticButton>
                      )}
                    </div>
                  </div>

                  <div className="p-8 lg:p-10 flex flex-col flex-grow bg-gradient-to-br from-white/[0.03] to-transparent">
                    <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors uppercase tracking-tight">{item.title}</h3>
                    <p className="text-slate-400 mb-8 text-sm line-clamp-2 leading-relaxed flex-grow">
                      {item.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {item.techStack.map((tech, idx) => (
                        <span
                          key={idx}
                          className="bg-white/5 text-slate-300 text-xs font-semibold px-4 py-2 rounded-full border border-white/10 uppercase tracking-wider"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Project;
