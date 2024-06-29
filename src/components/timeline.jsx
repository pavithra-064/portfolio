import React from "react";
import htmlIcon from "../assets/icons8-html-5-48.png";
import cssIcon from "../assets/icons8-css-48.png";
import jsIcon from "../assets/icons8-js-48.png";
import reactIcon from "../assets/icons8-react-100.png";
import apiIcon from "../assets/api.png";
import bootstrapIcon from "../assets/icons8-bootstrap-48.png";
import cppIcon from "../assets/icons8-c++-48.png";
import figmaIcon from "../assets/icons8-figma-48.png";
import gitIcon from "../assets/icons8-git-48.png";
import nodejsIcon from "../assets/icons8-nodejs-48.png";
import tailwindIcon from "../assets/icons8-tailwind-css-48.png";
import pyIcon from "../assets/icons8-python-48.png";
import "../App.css";

const SkillsTimeline = () => {
  const skills = [
    { image: htmlIcon, alt: "HTML5", name: "HTML5" },
    { image: cssIcon, alt: "CSS", name: "CSS" },
    { image: jsIcon, alt: "JavaScript", name: "JavaScript" },
    { image: reactIcon, alt: "React", name: "React" },
    { image: apiIcon, alt: "API", name: "API" },
    { image: bootstrapIcon, alt: "Bootstrap", name: "Bootstrap" },
    { image: cppIcon, alt: "C++", name: "C++" },
    { image: figmaIcon, alt: "Figma", name: "Figma" },
    { image: gitIcon, alt: "Git", name: "Git" },
    { image: nodejsIcon, alt: "Node.js", name: "Node.js" },
    { image: tailwindIcon, alt: "Tailwind CSS", name: "Tailwind CSS" },
    { image: pyIcon, alt: "Python", name: "Python" },
  ];

  const experiences = [
    {
      company: "Bosch Global Software Solutions, Bangalore",
      role: "Student Trainee (Jan - May 2024)",
    },
    {
      company: "Optum Global Solutions, Noida",
      role: "Full Stack Intern (Jun - Aug 2023)",
    },
    {
      company: "Trinal Web Pvt Limited",
      role: "React Developer (Jan - May 2024)",
    },
    {
      company: "iGEM Indian League",
      role: "Web Developer (Apr - Oct 2022)",
    },
    {
      company: "Google Developer Students Club",
      role: "Web Developer (Aug 2022 - May 2024)",
    },
    {
      company: "Developer Community SASTRA",
      role: "Web Developer (Dec 2021 - May 2024)",
    },
    {
      company: "300dpi",
      role: "Developer (Nov 2020 - May 2024)",
    },
  ];

  return (
    <section id="skills" className="skills md:my-40 section">
      <h1 className="text-center text-white text-3xl md:text-5xl mt-16 font-bold z-10">
        Skills <span className="text-font">&</span> Timeline
      </h1>
      <hr className="w-[70%] hidden md:w-[30%] mt-3 md:mt-6 md: float-right md:mr-[20rem] md:block text-[#E59BE9] border-[#E59BE9] border-[1.3px]" />
      <div className="flex flex-col md:flex-row md:px-6 justify-center items-center mt-7 md:mt-16">
        <div className="w-full md:w-1/2 p-4 overflow-y-auto">
          <div className="grid gap-x-3 md:gap-x-5 grid-cols-3 md:grid-cols-4 justify-items-center items-center gap-y-10">
            {skills.map((skill, index) => (
              <div key={index} className="flex flex-col items-center">
                <img
                  src={skill.image}
                  alt={skill.alt}
                  className="p-2 shadow-lg rounded-full animate-fade-in w-[65px] h-[65px] md:w-[60px] md:h-[60px] transform hover:scale-110 transition-transform duration-300"
                  style={{
                    boxShadow:
                      "-2px -2px 4px rgba(46, 45, 45, 0.4), 4px 4px 4px rgba(0, 0, 0, 0.4), inset 0 0 0 hsla(0, 0%, 100%, 0.2), inset 0 0 0 rgba(0, 0, 0, 0.4)",
                  }}
                />
                <span className="text-white text-xs mt-2">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="border-l-2 hidden md:block h-[20rem] border-gray-400"></div>
        <div className="w-full md:w-1/2 p-4 mt-8 md:mt-0 md:ml-10">
          <div className="overflow-y-auto scrollbar-thin scrollbar-thumb-[#4A4A4A] scrollbar-track-[#2F2F2F] h-[20rem] rounded-[1.5rem]">
            <ul className="list-disc text-[#ffffff] py-4 md:py-0">
              {experiences.map((experience, index) => (
                <li
                  key={index}
                  className="text-md md:text-[1.1rem] pb-6 pl-4 relative"
                >
                  <h1 className="text-white">{experience.company}</h1>
                  <h3 className="text-[#D7D5D599] text-[13px] md:text-[17px]">
                    {experience.role}
                  </h3>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsTimeline;
