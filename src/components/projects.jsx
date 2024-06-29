import React from "react";
import diary from "../assets/2-650x650.png";
import url from "../assets/urlshortener.jpeg";
import ckd from "../assets/ml-e1610553826718.jpg";
import rn from "../assets/jobsearch.jpeg";
import wsn from "../assets/wsn.png";
import github from "../assets/icons8-github-30.png";
import linkIcon from "../assets/Link.png"; // Make sure this is a white or lighter icon
import "../App.css";

const Projects = () => {
  return (
    <div className="mt-12" id="projects">
      <h1 className="text-center tracking-[0.01em] text-3xl md:w-full md:text-5xl my-4 md:my-9 md:mt-16 font-bold z-10">
        My <span className="text-font">Projects</span> Section
      </h1>
      <hr className="w-[70%] hidden md:w-[40%] mt-3 md:mt-0 md:float-right md:mr-[15rem] md:block text-[#E59BE9] border-[#E59BE9] border-[1.3px]" />

      <div className="flex justify-center items-center md:mt-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:px-2 gap-10 mt-5 px-4">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="relative transform hover:scale-105 transition-transform duration-300 p-6 rounded-lg shadow-3d "
            >
  
              <div className="flex items-center justify-between w-full">
                <h2 className="text-md md:text-xl font-semibold text-[#E59BE9] mb-2">
                  {project.title}
                </h2>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"

                >
                  <img
                    src={linkIcon}
                    alt="Link Icon"
                    className="w-5 h-5 md:w-6 md:h-6 text-white"
                  />
                </a>
              </div>
              <p className="text-sm md:text-md text-[#D6D4D4] mb-2">
                {project.smallDescription}
              </p>
              <hr className="border-[#E59BE9] border-[1px] mb-2" />
              <p className="text-sm md:text-md text-[#D6D4D4]">
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const projectsData = [
  {
    image: diary,
    title: "Dear Diary",
    smallDescription: "Daily journal entries",
    description:
      "Documenting daily entries, personal thoughts, and private experiences.",
    link: "https://github.com/pavithra-064/Diary-frontend",
  },
  {
    title: "URL Shortener",
    smallDescription: "Shorten lengthy URLs",
    description:
      "React-based URL shortener, streamlining lengthy URLs effectively.",
    link: "https://github.com/pavithra-064/Mern-app",
  },
  {
    title: "Prediction of Chronic Kidney Disease",
    smallDescription: "Predicting disease based on the user input",
    description:
      "Seven classifier algorithms were implemented with and without feature selection and their results were computed.",
    link: "https://github.com/pavithra-064/Prediction-Of-Chronic-Kidney-Disease",
  },
  // {
  //   title: "Job Search App",
  //   smallDescription: "App to find jobs nearby",
  //   description:
  //     "React Native App for finding jobs based on popularity and nearby. Search Functionality to improve Job Search.",
  //   link: "#",
  // },
  {
    title: "Leach Protocol in WSN",
    smallDescription: "Advanced LEACH",
    description:
      "Implemented advanced LEACH, which performs better than LEACH in terms of energy efficiency and lifetime of the network.",
    link: "https://drive.google.com/file/d/1xFLifKPC8apgV8VQmz21Iw2izmYPs9Bj/view?usp=sharing",
  },
  {
    title: "Kuruksastra portal",
    smallDescription: "An online portal for annual cultural fest of SASTRA University.",
    description:
      "Developed responsive and user friendly frontend interfaces for administrative tasks and public relations desk functionalities",
    link: "https://www.kuruksastra.in/",
  },
];

export default Projects;
