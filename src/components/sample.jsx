// Contact.js
import React from "react";

const Contact = () => {
  return (
    <div className="flex flex-col md:flex-row w-full  h-screen">
      <div className="flex w-full md:w-1/2 justify-center items-center h-1/2 md:h-full">
        <img
          src="https://via.placeholder.com/300"
          alt="Contact"
          className="rounded-lg max-w-full h-auto"
        />
      </div>
      <div id="contact" className="flex w-full md:w-1/2 flex-col justify-center items-center h-1/2 md:h-full mt-8 md:mt-0">

        <form
          action="https://formspree.io/f/mbjnvkgz"
          method="POST"
          className="border border-gray-400 p-5  rounded-lg w-full max-w-xs"
        >
          <h2 className="text-2xl font-bold mb-4">Contact</h2>
          <label htmlFor="name" className="block mb-1 font-semibold">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full p-2 mb-4 border border-gray-300 rounded-md bg-transparent focus:outline-none focus:border-blue-500"
          />
          <label htmlFor="email" className="block mb-1 font-semibold">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full p-2 mb-4 border border-gray-300 rounded-md bg-transparent focus:outline-none focus:border-blue-500"
          />
          <label htmlFor="message" className="block mb-1 font-semibold">
            Message
          </label>
          <textarea
            name="message"
            id="message"
            required
            className="w-full p-2 mb-4 border border-gray-300 rounded-md bg-transparent resize-vertical h-24 focus:outline-none focus:border-blue-500"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700 transition-colors duration-300"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
