import React from "react";
import pic from "../assets/img.png";

const About = () => {
  return (
    <div className="w-full min-h-screen " id="about">
      <h1 className="text-center text-white text-3xl md:text-5xl mt-16 font-bold z-10">
        About <span className="text-font">Me</span>
      </h1>
      <hr className="w-[50%] hidden  md:w-[22%] mr-12 mt-2 md:mt-6 float-right md:mr-[20rem] md:block text-[#E59BE9] border-[#E59BE9] border-[1.3px]" />
      <div className="flex flex-col md:flex-row w-full  md:mt-20">
        <div className="w-full md:w-1/2 md:px-6 flex my-8 md:my-0 items-center justify-center md:justify-start">
          <img
            src={pic}
            alt="Picture"
            className="rounded-[7em] bg-[#9c889c] shadow-md border-4 border-font  md:mt-0 h-[200px] w-[200px] md:h-[300px] md:w-[300px]"
          />
        </div>

        <div className="w-full md:w-1/2 flex flex-col items-start justify-center">
          <div className="w-full  flex flex-col items-start justify-center">
            <p className=" text-[#D6D4D4] font-sans md:pt-4 text-md text-[0.85rem] text md:text-[1.1rem] md:-ml-12 text-start">
              Computer science enthusiast with a strong passion for web
              development. Skilled in creating websites using HTML, CSS, and the
              MERN stack, ensuring good user experiences and responsive design.
              <br />
              <br />I also have a keen interest in coding and thrive in
              collaborative team environments, tackling challenges with
              enthusiasm and a growth mindset. From conceptualization to
              deployment, I am dedicated to achieving excellence and
              transforming ideas into outstanding solutions.
            </p>

            <div className="flex justify-center md:justify-start items-center w-full pt-7 md:-ml-12    space-x-3 md:space-x-4">
              <div>
                <a
                  href="https://github.com/pavithra-064"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h3 className="text-[#E59BE9] border-2 p-2 px-4 rounded-lg border-[#0f0f0f] shadow-sm shadow-zinc-700">
                    GitHub
                  </h3>
                </a>
              </div>
              <div>
                <a
                  href="https://www.linkedin.com/in/pavithrasubramanian23/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h3 className="text-[#E59BE9] border-2 p-2 px-4 rounded-lg border-[#0f0f0f] shadow-sm shadow-zinc-700">
                    LinkedIn
                  </h3>
                </a>
              </div>
              <div>
                <a
                  href="Pavithra S_Resume.pdf"
                  download="Pavithra S_Resume.pdf"
                >
                  <h3 className="text-[#E59BE9] border-2 p-2 px-4 rounded-lg border-[#0f0f0f] shadow-sm shadow-zinc-700">
                    Resume
                  </h3>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
