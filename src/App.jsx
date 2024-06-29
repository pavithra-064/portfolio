import React, { useState, useEffect } from "react";
import Loader from "./components/loader"; // Adjust the path as necessary
import "./index.css"; // Assuming Tailwind CSS is imported here
import "./components/loader.css"; // Import the custom CSS file
import Home from "./components/home";
import Contact from "./components/contact";
import About from "./components/about";
import Projects from "./components/projects";
import Timeline from "./components/timeline";
import Navbar from "./components/navbar";
import "./App.css";
const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {/* {isLoading ? (
        // <Loader />
      ) : ( */}
      <div>
        <div className="flex flex-col w-full min-w-full  min-h-screen px-10 md:px-32 ">
          <Navbar />
          <Home />
          <About />
          <Projects />
          <Timeline />

          <Contact />
        </div>
        <hr className="w-full border-[#E59BE9] border-[1px] mx-auto  mt-10" />

        <p className="text-center my-4 text-[#D6D4D4]">Developed by Pavithra</p>
      </div>
      {/* )} */}
    </div>
  );
};

export default App;
