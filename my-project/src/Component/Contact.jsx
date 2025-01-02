import React, { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { toast } from "react-hot-toast";
import { ClipLoader } from "react-spinners";

import mail from "../assets/email.png";
import phone from "../assets/phone-call.png";
import location from "../assets/gps.png";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMail = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading

    try {
      const { data } = await axios.post("https://portfolio-2-7q5d.onrender.com/mail", {
        name,
        email,
        message,
      });

      toast.success(data.message);
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {

      toast.error("Failed to send the message. Please try again later.");
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <section id="contact" className="bg-gray-950 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-center text-gray-300 mb-12">
          Contact Me
        </h2>
        <div className="grid lg:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div className="grid gap-10 lg:gap-10 p-6 lg:p-12 rounded-lg shadow-xl">
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-300 text-center lg:text-left">
              Let's Talk
            </h1>
            <div className="grid gap-6">
              {/* Email Section */}
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="flex items-center gap-4 lg:gap-6 bg-gray-800 p-6 lg:p-[40px] hover:scale-105 text-white rounded-xl shadow-lg transition-transform hover:-translate-y-3 hover:shadow-blue-500/60"
              >
                <div className="text-3xl lg:text-4xl flex items-center justify-center w-12 lg:w-16 h-12 lg:h-16 bg-blue-600 rounded-full">
                  <img src={mail} alt="mail" />
                </div>
                <div>
                  <h2 className="text-xl lg:text-2xl font-semibold">Email</h2>
                  <p className="text-sm lg:text-lg opacity-50">s2447491@gmail.com</p>
                </div>
              </motion.div>

              {/* Phone Section */}
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.2, delay: 0.3 }}
                className="flex items-center gap-4 lg:gap-6 bg-gray-800 p-6 lg:p-[40px] hover:scale-105 text-white rounded-xl shadow-lg transition-transform hover:-translate-y-3 hover:shadow-blue-500/60"
              >
                <div className="text-3xl lg:text-4xl flex items-center justify-center w-12 lg:w-16 h-12 lg:h-16 bg-green-600 rounded-full">
                  <img src={phone} alt="phone" />
                </div>
                <div>
                  <h2 className="text-xl lg:text-2xl font-semibold">Phone</h2>
                  <p className="text-sm lg:text-lg opacity-50">+91 8607699421</p>
                </div>
              </motion.div>

              {/* Location Section */}
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.4, delay: 0.4 }}
                className="flex items-center gap-4 lg:gap-6 bg-gray-800 p-6 lg:p-[40px] hover:scale-105 text-white rounded-xl shadow-lg transition-transform hover:-translate-y-3 hover:shadow-blue-500/60"
              >
                <div className="text-3xl lg:text-4xl flex items-center justify-center w-12 lg:w-16 h-12 lg:h-16 bg-red-600 rounded-full">
                  <img src={location} alt="location" />
                </div>
                <div>
                  <h2 className="text-xl lg:text-2xl font-semibold">Location</h2>
                  <p className="text-sm lg:text-lg opacity-50">Karnal, Haryana, India</p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
            className="bg-gray-900 rounded-lg shadow-[0px_0px_20px_10px_rgba(0,0,0,0.3)] shadow-blue-500 p-6 lg:p-8 mt-9"
          >
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-300 text-center lg:text-left">
              Get in Touch
            </h3>
            <form className="space-y-4 lg:space-y-6 mt-6" onSubmit={sendMail}>
              <div>
                <label htmlFor="name" className="block text-lg font-medium text-gray-300">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-1 w-full p-3 border bg-gray-950 text-gray-300 border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-lg font-medium text-gray-300">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1 w-full p-3 border bg-gray-950 text-gray-300 border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-lg font-medium text-gray-300">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="mt-1 w-full p-3 border bg-gray-950 text-gray-300 border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={loading}
                className={`w-full py-3 rounded-lg shadow-md flex justify-center items-center gap-2 ${loading
                    ? "bg-blue-400 cursor-not-allowed text-gray-300"
                    : "bg-blue-500 hover:bg-blue-600 text-white transition-colors"
                  }`}
              >
                {loading && <ClipLoader size={20} color="white" />}
                {loading ? "Sending..." : "Send Message"}
              </button>

            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
