import React, { useState, useEffect } from 'react';
import Digital from '../assets/IMG_77146.jpg';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import axios from "axios";

const Project = () => {
  const [project, setProject] = useState([]);

  useEffect(() => {
    const getItem = async () => {
      try {
        const response = await axios.get("http://localhost:3000/");
       
        setProject(response.data); // Update the state with API data
      } catch (error) {
    
      }
    };
    getItem();
  }, []);

  // Slick carousel settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section id="projects" className="bg-gradient-to-r bg-gray-900 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-center text-gray-300 mb-12">
          Projects
        </h2>

        <div className="h-300 overflow-hidden">
          <Slider {...settings}>
            {project.map((item, index) => (
              <div
                key={index}
                className="bg-gray-950 rounded-lg shadow-lg overflow-hidden mt-8 mx-4 max-w-[26rem] ml-1 mt-1 transition-transform duration-300 hover:shadow-3xl hover:shadow-blue-500"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-[400px] object-cover px-3 pt-3 rounded-2xl transition-all duration-300"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-gray-300 mb-2">{item.title}</h3>
                  <p className="text-gray-400 mb-4 text-sm">{item.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.techStack.map((tech, idx) => (
                      <div
                        key={idx}
                        className="bg-gray-900 text-gray-300 text-sm font-medium px-3 py-1 rounded-full"
                      >
                        {tech}
                      </div>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition-colors text-xs"
                    >
                      View Project
                    </a>
                    <a
                      href={item.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex gap-2 items-center bg-gray-800 text-white px-4 py-2 rounded-lg shadow-md hover:bg-gray-900 transition-colors text-xs"
                    >
                      View Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Project;
