import React, { useRef } from "react";
import HeroImage from "../assets/heroImage.jpg";
import {
  // MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import "./global.css";

const Home = ({ links }) => {
  const test = useRef((el) => el.getBoundingClientRect().height, []);

  const goToTop = () => {
    window.scrollTo({
      top: 997,
      behavior: "smooth",
    });
  };

  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
      id="home"
      ref={test}
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-2 md:flex-row">
        <div className="flex flex-col justify-center h-full mr-7">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'm a <span className="frontSpan"> Front</span> End Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            I'am Bernard Kastrati passionned in Programming
          </p>

          <div>
            <button
              onClick={goToTop}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500"
            >
              Explore
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </button>

            {/* <span className="explore">
              Expolore
              <MdOutlineKeyboardArrowDown size={25} className="ml-1" />
            </span> */}
          </div>
        </div>

        <div>
          <img
            src={HeroImage}
            alt="My profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full image"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
