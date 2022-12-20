import React from "react";
import project1 from "../assets/portfolio/smart-engineering.png";
import project2 from "../assets/portfolio/spacex-missions.gif";
import project3 from "../assets/portfolio/box-office.gif";
import project4 from "../assets/portfolio/servisimi.png";
import project5 from "../assets/portfolio/garden.png";
import project6 from "../assets/portfolio/csharp.jpg";
import project7 from "../assets/portfolio/note.png";
import project8 from "../assets/portfolio/tic-tac-toe.gif";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: project1,
      href: "https://smart-engineering.tech/",
    },
    {
      id: 2,
      src: project2,
      href: "https://github.com/bernardkas/react-graphql-spaceX",
    },
    {
      id: 3,
      src: project3,
      href: "https://github.com/bernardkas/box-office",
    },
    {
      id: 4,
      src: project4,
      href: "",
    },
    {
      id: 5,
      src: project5,
      href: "https://github.com/bernardkas/Garden",
    },
    {
      id: 6,
      src: project6,
      href: "",
    },
    {
      id: 7,
      src: project7,
      href: "https://github.com/bernardkas/Note",
    },
    {
      id: 8,
      src: project8,
      href: "https://github.com/bernardkas/tictactoe",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-500 w-full text-white md:h-screen pt-4/5"
    >
      <div className="w-3/4 p-4 mx-auto flex flex-col justify-center h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check Out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-12 sm:px-0 pb-20 p-20">
          {portfolios.map(({ id, src, href }) => (
            <div
              key={id}
              className="shadow-md shadow-gray-600 rounded-lg h-72 w-80"
            >
              <img
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
    </div>
  );
};

export default Portfolio;
