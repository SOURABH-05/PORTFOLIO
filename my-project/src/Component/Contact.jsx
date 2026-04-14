import React, { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { toast } from "react-hot-toast";
import { ClipLoader } from "react-spinners";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMail = async (e) => {
    e.preventDefault();
    setLoading(true);

    const apiUrl = window.location.hostname === "localhost" 
      ? "http://localhost:3000/mail" 
      : "https://portfolio-2-7q5d.onrender.com/mail";

    try {
      const response = await axios.post(apiUrl, {
        name,
        email,
        message,
      }, {
        headers: {
          'Content-Type': 'application/json'
        },
        timeout: 10000 // 10 second timeout
      });
      
      const { data } = response;
      toast.success(data.message);
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      toast.error("Failed to send the message. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    { icon: <FaEnvelope />, title: "Email", value: "s2447491@gmail.com" },
    { icon: <FaPhoneAlt />, title: "Phone", value: "+91 8607699421" },
    { icon: <FaMapMarkerAlt />, title: "Location", value: "Karnal, Haryana, India" },
  ];

  return (
    <section id="contact" className="py-32 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center md:text-left"
        >
          <h2 className="text-5xl md:text-7xl font-black mb-4 tracking-tighter text-white">Connect.</h2>
          <p className="text-xl text-slate-400">Let's build something extraordinary.</p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Info Side */}
          <div className="lg:col-span-5 space-y-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bento-card p-6 flex flex-col md:flex-row items-center md:items-start gap-6 text-center md:text-left group"
              >
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-2xl text-slate-300 group-hover:text-cyan-400 group-hover:bg-cyan-900/20 transition-all duration-300 group-hover:scale-110">
                  {info.icon}
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-slate-500 mb-1">{info.title}</h4>
                  <p className="text-lg font-semibold text-white">{info.value}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <form onSubmit={sendMail} className="bento-card p-8 md:p-12 space-y-8 bg-black/40">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="relative group">
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    id="name"
                    className="w-full bg-transparent border-b-2 border-white/10 py-3 text-white placeholder-transparent focus:outline-none focus:border-cyan-400 peer transition-colors"
                    placeholder="Name"
                  />
                  <label htmlFor="name" className="absolute left-0 -top-4 text-xs font-bold uppercase tracking-wider text-slate-500 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-placeholder-shown:text-slate-400 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-cyan-400">
                    Your Name
                  </label>
                </div>
                <div className="relative group">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    id="email"
                    className="w-full bg-transparent border-b-2 border-white/10 py-3 text-white placeholder-transparent focus:outline-none focus:border-cyan-400 peer transition-colors"
                    placeholder="Email"
                  />
                  <label htmlFor="email" className="absolute left-0 -top-4 text-xs font-bold uppercase tracking-wider text-slate-500 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-placeholder-shown:text-slate-400 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-cyan-400">
                    Your Email
                  </label>
                </div>
              </div>
              <div className="relative group pt-4">
                <textarea
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  id="message"
                  className="w-full bg-transparent border-b-2 border-white/10 py-3 text-white placeholder-transparent focus:outline-none focus:border-cyan-400 peer transition-colors resize-none"
                  placeholder="Message"
                />
                <label htmlFor="message" className="absolute left-0 -top-0 text-xs font-bold uppercase tracking-wider text-slate-500 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-6 peer-placeholder-shown:text-slate-400 peer-focus:-top-0 peer-focus:text-xs peer-focus:text-cyan-400">
                  Your Message
                </label>
              </div>
              
              <button
                type="submit"
                disabled={loading}
                className="group relative w-full overflow-hidden rounded-2xl bg-white px-8 py-4 text-black font-bold uppercase tracking-widest text-sm transition-all active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-violet-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative flex justify-center items-center gap-3 transition-colors duration-300 group-hover:text-white">
                  {loading ? <ClipLoader size={18} color="currentColor" /> : "Initiate Transmission"}
                  {!loading && <FaPaperPlane className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
                </span>
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
