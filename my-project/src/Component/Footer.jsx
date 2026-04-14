import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub, FaArrowUp } from "react-icons/fa";
import { motion } from 'framer-motion';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <footer className="pt-32 pb-12 relative overflow-hidden bg-black z-10 border-t border-white/[0.05]">
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10 lg:mb-20 mb-12">
                {/* Brand Section */}
                <div className="space-y-6 text-center md:text-left lg:col-span-2">
                    <h2 className="text-3xl font-black tracking-tighter text-white uppercase">Sourabh Dharra.</h2>
                    <p className="text-slate-400 max-w-sm mx-auto md:mx-0 text-sm leading-relaxed">
                        Engineering scalable web applications with an obsession for performance and cutting-edge aesthetics. Available for freelance opportunities.
                    </p>
                </div>

                {/* Links Section */}
                <div className="text-center md:text-left">
                    <h4 className="text-xs font-bold text-slate-500 mb-6 uppercase tracking-[0.2em]">Sitemap</h4>
                    <ul className="space-y-3">
                        {['About', 'Projects', 'Education', 'Contact'].map((link) => (
                            <li key={link}>
                                <a 
                                    href={`#${link.toLowerCase()}`} 
                                    className="text-slate-300 hover:text-cyan-400 font-medium transition-colors inline-block"
                                >
                                    {link}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Socials Section */}
                <div className="text-center md:text-left flex flex-col justify-between">
                    <div>
                        <h4 className="text-xs font-bold text-slate-500 mb-6 uppercase tracking-[0.2em]">Connect</h4>
                        <div className="flex justify-center md:justify-start gap-4">
                            {[
                                { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/sourabh-dharra-707294288/"},
                                { icon: <FaGithub />, href: "https://github.com/SOURABH-05" },
                                { icon: <FaInstagram />, href: "https://www.instagram.com/100_rabhdharra/" },
                                { icon: <FaFacebook />, href: "https://www.facebook.com/profile.php?id=61564349244530" },
                            ].map((social, index) => (
                                <a 
                                    key={index}
                                    href={social.href} 
                                    target="_blank" 
                                    rel="noreferrer" 
                                    className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:bg-white hover:text-black hover:scale-110 transition-all duration-300"
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>
                    
                    <button 
                        onClick={scrollToTop}
                        className="mt-12 group flex items-center gap-3 text-slate-400 hover:text-white transition-colors mx-auto md:mx-0"
                    >
                        <div className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center group-hover:bg-cyan-500 group-hover:border-cyan-500 group-hover:text-black transition-all duration-300">
                            <FaArrowUp />
                        </div>
                        <span className="text-xs font-bold uppercase tracking-[0.2em]">Back to top</span>
                    </button>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/[0.05]">
                <p className="text-slate-600 text-xs font-medium uppercase tracking-widest mb-4 md:mb-0">
                    © {new Date().getFullYear()} SOURABH DHARRA
                </p>
                <p className="text-slate-600 text-xs font-medium uppercase tracking-widest">
                    ALL RIGHTS RESERVED
                </p>
            </div>
            
        </footer>
    );
};

export default Footer;
