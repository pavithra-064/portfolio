// Home.js
import React, { useState, useEffect } from "react";
import imgg from "../assets/homeimg.png";
import "../App.css"; 

const Home = () => {
  const roles = [
    "Computer Science Student",
    "Full Stack Developer",
    "MERN Stack Developer",
  ];
  const delay = 40;
  const pause = 400; 
  const [currentText, setCurrentText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let typingTimeout;
    if (!isDeleting && currentIndex < roles[roleIndex].length) {
      typingTimeout = setTimeout(() => {
        setCurrentText((prev) => prev + roles[roleIndex][currentIndex]);
        setCurrentIndex(currentIndex + 1);
      }, delay);
    } else if (isDeleting && currentIndex > 0) {
      typingTimeout = setTimeout(() => {
        setCurrentText((prev) => prev.slice(0, -1));
        setCurrentIndex(currentIndex - 1);
      }, delay);
    } else if (!isDeleting && currentIndex === roles[roleIndex].length) {
      typingTimeout = setTimeout(() => {
        setIsDeleting(true);
      }, pause);
    } else if (isDeleting && currentIndex === 0) {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(typingTimeout);
  }, [currentIndex, isDeleting, roleIndex, roles]);

  return (
    <div className="flex flex-col md:flex-row w-full md:h-screen ">
      <div className="w-full md:w-1/2 mt-24 md:mt-0  flex flex-col items-start justify-center">
        <h4 className="text-center w-full md:text-start text-gray-300 text-xl md:text-3xl">
          Hello{" "}
          <span className="wave" role="img" aria-labelledby="wave">
            👋🏻
          </span>
          , I'm
        </h4>
        <h1 className="text-center w-full md:text-start text-font tracking-wide text-5xl  md:text-[5rem]  -ml-1 font-[700] z-10 py-5">
          Pavithra S
        </h1>
        <div className="text-center w-full md:text-start text-gray-300 text-xl md:text-3xl h-10">
          <span>{currentText}</span>
          <span className="cursor">|</span>
        </div>
      </div>
      <div className="flex w-full md:w-1/2 justify-center items-center h-1/2 md:h-full">
        <img src={imgg} alt="Home" className="rounded-lg max-w-full h-auto" />
      </div>
    </div>
  );
};

export default Home;
