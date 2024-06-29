import React from "react";

const Contact = () => {
  return (
    <div>
      <div
        className="flex items-center justify-center min-h-screen"
        id="contact"
      >
        <div
          id="contact"
          className="flex flex-col items-center w-full md:max-w-md p-5"
        >
          <h1 className="text-center tracking-[0.01em] text-3xl w-[80%] md:w-full mx-auto md:text-5xl mt-9 mb-8  md:mt-16 md:mb-2 font-bold z-10">
            <span className="text-font">Contact</span> Me
          </h1>
          <hr className="w-[70%] hidden md:w-[60%] ml-10 mb-7  mt-2  md: float-right  md:block text-[#E59BE9] border-[#E59BE9] border-[1.3px]" />
          <form
            action="https://formsubmit.co/c85f574a59281f24934a45c15a609679"
            method="POST"
            className="border border-gray-400 p-5 rounded-lg w-full"
          >
            <h2 className="text-2xl font-semibold mb-4">
              Send mail using this form
            </h2>

            <input
              type="text"
              id="name"
              name="name"
              required
              placeholder="Name*"
              className="w-full p-2 mb-4 border border-gray-300 rounded-md bg-transparent focus:outline-none focus:border-blue-500"
            />

            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="Email*"
              className="w-full p-2 mb-4 border border-gray-300 rounded-md bg-transparent focus:outline-none focus:border-blue-500"
            />

            <textarea
              name="message"
              id="message"
              required
              placeholder="Message*"
              className="w-full p-2 mb-4 border border-gray-300 rounded-md bg-transparent resize-vertical h-36 focus:outline-none focus:border-blue-500"
            ></textarea>
            <button
              type="submit"
              className="mx-auto text-center flex justify-center  w-40 hover:bg-[#c14366] text-white p-2 rounded-md bg-font transition-colors duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
