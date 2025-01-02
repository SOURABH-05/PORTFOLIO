import React from "react";

const data = [
  {
    title: "Secondary (10th)",
    subtitle: "S.D. Adarsh Public School",
    year: "2020",
    description: "I completed my 10th Class with Good Grades, marking an important milestone in my educational journey.",
    icon: "🎓",
  },
  {
    title: "Higher Secondary (11th-12th)",
    subtitle: "S.D. Adarsh Public School",
    year: "2022",
    description: "I completed my class 12 in 2022 with an 80% grade, reflecting my hard work and dedication throughout my studies.",
    icon: "🎓",
  },
  {
    title: "EXAM",
    subtitle: "JEE advance Qualify",
    year: "2022",
    description: "In 2022, I achieved a top 1.5% rank in JEE Advanced, reflecting my dedication and hard work in mastering complex concepts. ",
    icon: "📃",
  },
  {
    title: "Bachelor of Technology (B.Tech)",
    subtitle: "RGIPT",
    year: "2022 - present",
    description:"I am currently pursuing BTech to become a skilled professional and build a strong foundation in technology & development.",
    icon: "🎓",
  },
 
];

const Education = () => {
  return (
    <section id="education" className="bg-gradient-to-r bg-gray-950 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-gray-300 mb-12">
          Education & Achievements
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {data.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-start bg-gray-900 p-6  rounded-xl shadow-lg transition-all duration-500 transform hover:scale-105 hover:-translate-y-3 hover:shadow-lg hover:shadow-blue-500/60"
            >
              <div className="text-4xl mb-4 text-blue-500">{item.icon}</div>
              <h4 className="text-xl font-bold text-gray-200">{item.title}</h4>
              <p className="text-gray-300">{item.subtitle}</p>
              <p className="text-gray-300 text-sm italic">{item.year}</p>
              <p className="text-gray-300 mt-2">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;


