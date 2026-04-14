import React from "react";
import { motion } from "framer-motion";

const data = [
  {
    title: "Bachelor of Technology",
    subtitle: "RGIPT Amethi",
    year: "2022 - present",
    description: "Currently pursuing B.Tech at an Institute of National Importance, building a strong engineering foundation.",
    icon: "💻",
    highlight: true,
  },
  {
    title: "JEE Advanced",
    subtitle: "Qualified",
    year: "2022",
    description: "Achieved a top 1.5% rank in JEE Advanced, one of the toughest entrance exams in India.",
    icon: "🏆",
  },
  {
    title: "Higher Secondary (12th)",
    subtitle: "S.D. Adarsh Public School",
    year: "2022",
    description: "Completed class 12 with 80% marks, focusing on Physics, Chemistry, and Mathematics.",
    icon: "🎓",
  },
  {
    title: "Secondary (10th)",
    subtitle: "S.D. Adarsh Public School",
    year: "2020",
    description: "Completed secondary education with strong foundations in science and mathematics.",
    icon: "🎓",
  },
];

const Education = () => {
  return (
    <section id="education" className="py-32 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <h2 className="text-5xl md:text-7xl font-black mb-4 tracking-tighter text-white">Timeline.</h2>
          <p className="text-xl text-slate-400">The foundation of knowledge.</p>
        </motion.div>

        <div className="relative border-l border-white/10 md:ml-6 space-y-12 pb-12">
          {data.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative pl-8 md:pl-16 group"
            >
              {/* Timeline dot */}
              <div className={`absolute top-8 left-[-9px] w-4 h-4 rounded-full border-4 border-black ${item.highlight ? 'bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.6)]' : 'bg-slate-500'} group-hover:scale-150 transition-transform duration-300`} />
              
              <div className={`bento-card p-8 md:p-10 ${item.highlight ? 'border-cyan-500/30 shadow-[0_0_30px_rgba(34,211,238,0.1)]' : ''}`}>
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                  <div>
                    <h4 className="text-2xl font-bold text-white mb-2">{item.title}</h4>
                    <p className="text-sm uppercase tracking-widest text-slate-400 font-semibold">{item.subtitle}</p>
                  </div>
                  <span className="shrink-0 inline-flex items-center justify-center px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-bold text-slate-300">
                    {item.year}
                  </span>
                </div>
                
                <p className="text-slate-400 leading-relaxed text-sm md:text-base border-l-2 border-white/10 pl-4 py-1">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
