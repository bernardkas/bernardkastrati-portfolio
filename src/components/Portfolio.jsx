import React, { useState } from "react";
import { portfolios, video } from "../data";
import VideoModal from "./VideoModal";

const Portfolio = () => {
  const [openVideoModal, setOpenVideoModal] = useState(false);
  const [activeVideo, setActiveVideo] = useState(0);

  const handlePortfolioClick = (id) => {
    console.log("clicked", id);
    setActiveVideo(id);
    setOpenVideoModal(true);
  };

  console.log("activeVideo prot", activeVideo);

  return (
    <div
      name="portfolio"
      className={`bg-gradient-to-b from-black to-gray-500 w-full text-white sm:pt-15 md:h-auto md:pt-40 relative`}
    >
      <div
        className={`sm:w-1/2 md:w-3/4 p-4 mx-auto flex flex-col justify-center h-full ${
          openVideoModal ? "blur-md" : ""
        }`}
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check Out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 sm:px-8 md:pl-0 md:pr-60 sm:p-0 md:p-20 lg:px-20 column-gap sm:gap-x-80 md:gap-x-50 lg:gap-x-20 gap-8 text-center justify-center">
          {/* <div className="flex justify-between flex-wrap px-12 sm:px-0 p-20"> */}
          {portfolios.map(({ id, src, href }) => (
            <div
              key={id}
              className="shadow-md shadow-gray-600 rounded-lg h-72 w-80 cursor-pointer"
            >
              <img
                onClick={() => handlePortfolioClick(id)}
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105 h-4/5 w-80"
              />
              <div className="flex items-center justify-center ">
                {/* <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Demo
                </button> */}
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="w-2/3 px-6 py-3 pb-3 m-4 duration-200 hover:scale-105 text-center"
                >
                  Check it out
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      {openVideoModal && (
        <VideoModal
          activeVideo={activeVideo}
          setOpenVideoModal={() => setOpenVideoModal(false)}
        />
      )}
    </div>
  );
};

export default Portfolio;
