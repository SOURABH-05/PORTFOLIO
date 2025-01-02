import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { BsArrowUpSquareFill } from "react-icons/bs";
import logo from "../assets/logo.png";

const Footer = () => {
    // Function to handle scroll to top
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <footer className="bg-gray-900 text-gray-400 py-8 relative">
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">
                {/* Section 1: About/Contact Info */}
                <div>
                    <div>
                        <img src={logo} alt="Logo" className='w-[100px]' />
                    </div>
                    <p className="text-sm mt-3">
                        We provide top-notch services and products to help you achieve your goals.
                    </p>
                    <p className="mt-4 text-sm">Email: s2447491@gamil.com</p>
                    <p className="text-sm">Phone: +91 8607699421</p>
                </div>

                {/* Section 2: Navigation Links */}
                <div>
                    <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
                    <ul className="space-y-2">
                        <li><a href="#education" className="hover:text-blue-500">Education</a></li>
                        <li><a href="#about" className="hover:text-blue-500">About Me</a></li>
                        <li><a href="#projects" className="hover:text-blue-500">Projects</a></li>
                        <li><a href="#contact" className="hover:text-blue-500">Contact</a></li>
                    </ul>
                </div>

                {/* Section 3: Social Media */}
                <div>
                    <h4 className="text-lg font-semibold text-white mb-4">Social Media</h4>
                    <ul className="space-y-2 list-none">
                        <li>
                            <a
                                href="https://www.facebook.com/profile.php?id=61564349244530&mibextid=ZbWKwL"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-blue-500 flex items-center transform transition-all duration-300 hover:translate-x-[10px]"
                            >
                                <FaFacebook className="mr-2" />Facebook
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://twitter.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-blue-500 flex items-center transform transition-all duration-300 hover:translate-x-[10px]"
                            >
                                <FaTwitter className="mr-2" />Twitter
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.instagram.com/100_rabhdharra/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-blue-500 flex items-center transform transition-all duration-300 hover:translate-x-[10px]"
                            >
                                <FaInstagram className="mr-2" />Instagram
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.linkedin.com/in/sourabh-dharra-707294288/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-blue-500 flex items-center transform transition-all duration-300 hover:translate-x-[10px]"
                            >
                                <FaLinkedin className="mr-2" />LinkedIn
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Back to Top Icon - Positioned to the right */}
            <div className="absolute bottom-20 right-20">
                <button onClick={scrollToTop} className="text-2xl">
                    <BsArrowUpSquareFill
                        className="h-10 w-10 text-white hover:text-blue-600 hover:translate-y-[-4px] transition-all"
                    />
                </button>
            </div>

            {/* Footer Bottom */}
            <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm">
                © 2025 Sourabh Dharra. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
