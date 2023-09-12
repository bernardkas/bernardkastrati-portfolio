import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white pt-80 "
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-6">Submit form below to get in touch with me</p>
        </div>

        <div className="flex justify-left items-center h-5/6">
          <form
            action="https://getform.io/f/dc21603c-0d5b-4629-917a-59313dc72e00"
            method="POST"
            className="flex flex-col  w-full sm:w-1/2 md:w-3/4 h-3/4"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter yout name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter yout email"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Message"
              rows="15"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none h-1/2 sm: h-auto"
            ></textarea>
            <button
              className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-5 py-3 
              my-8 mx-auto flex items-center 
              rounded-md hover:scale-110 duration-300 mr-0"
            >
              Let's talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
