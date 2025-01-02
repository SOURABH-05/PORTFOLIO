import React, { useState } from "react";

const SideSlider = () => {
    const [isOpen, setIsOpen] = useState(false);

    // Toggle the slider
    const toggleSlider = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative">
            {/* Button to toggle the slider */}
            <button
                onClick={toggleSlider}
                className="fixed top-5 left-5 z-50 bg-blue-500 text-white p-2 rounded-full shadow-md"
            >
                {isOpen ? "Close" : "Menu"}
            </button>

            {/* Side Slider */}
            <div
                className={`fixed top-0 left-0 h-full w-64 bg-gray-800 text-white shadow-lg transform transition-transform ${
                    isOpen ? "translate-x-0" : "-translate-x-full"
                }`}
            >
                {/* Slider Content */}
                <div className="p-5">
                    <h2 className="text-xl font-bold mb-5">Side Slider</h2>
                    <ul className="space-y-4">
                        <li>
                            <a href="#home" className="hover:text-blue-400">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#about" className="hover:text-blue-400">
                                About
                            </a>
                        </li>
                        <li>
                            <a href="#services" className="hover:text-blue-400">
                                Services
                            </a>
                        </li>
                        <li>
                            <a href="#contact" className="hover:text-blue-400">
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Overlay (optional, for dimming the background) */}
            {isOpen && (
                <div
                    onClick={toggleSlider}
                    className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-40"
                ></div>
            )}
        </div>
    );
};

export default SideSlider;
