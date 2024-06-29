import React, { useState } from "react";
import "../App.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <section id="home">
        <nav className="text-white fixed top-0 left-0 right-0 z-50 navbar-bg shadow-md">
          <div className="max-w-7xl mx-auto md:px-32 px-10">
            <div className="flex flex-col md:flex-row md:justify-between items-center py-4">
              <div className="flex flex-row justify-between w-full">
                <a href="#" className="text-xl">
                  &lt;paviee23/&gt;
                </a>
                <button
                  className="text-white block md:hidden"
                  id="menuToggle"
                  onClick={toggleMenu}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                      id="menuIcon"
                    />
                  </svg>
                </button>
              </div>

              <div
                className={`${
                  isMenuOpen ? "block" : "hidden"
                } w-full md:block md:w-auto`}
                id="navLinks"
              >
                <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 text-center rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
                  <li>
                    <a
                      href="#home"
                      className="block py-2 px-1 text-[0.9rem] uppercase leading-1 text-[#00000] rounded md:bg-transparent hover:text-font hover:underline duration-100"
                      aria-current="page"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="#about"
                      className="block py-2 px-1 text-[0.9rem] uppercase leading-1 text-[#00000] rounded md:bg-transparent hover:text-font hover:underline duration-100"
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      href="#projects"
                      className="block py-2 px-1 text-[0.9rem] uppercase leading-1 text-[#00000] rounded hover:text-font hover:underline duration-100"
                    >
                      Projects
                    </a>
                  </li>
                  <li>
                    <a
                      href="#skills"
                      className="block py-2 px-1 text-[0.9rem] uppercase leading-1 text-[#00000] rounded hover:text-font hover:underline duration-100"
                    >
                      Skills
                    </a>
                  </li>
                  <li>
                    <a
                      href="#contact"
                      className="block py-2 px-1 text-[0.9rem] uppercase leading-1 text-[#00000] rounded hover:text-font hover:underline duration-100"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="w-7xl text-[#E59BE9] border-[#eab5ed19] border-[1.3px]" />
        </nav>
      </section>

      <div className="h-1 bg-[#E59BE9]"></div>
    </div>
  );
};

export default Navbar;
