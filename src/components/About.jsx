import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-4xl p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          You have been looking for a Web developer who is able to deliver you
          the best. I consider myself as the right choice for you because I have
          the right skills and potentiality to match your needs. I am an
          established Web Developer and additionally a graduate in Sistem
          Information. Through hard work I have gained some excellent skills in
          Web Development. So, I want to explore the vast possibilities in Web
          Development.
        </p>

        <br />

        <p className="text-xl">
          I would like to inform you also that I am highly skilled with HTML,
          CSS, JavaScrip, React.js C# and python as I have handsome experience
          with them. Still, I am always eager to learn anew and make my skill
          sharper whenever I get any chance.
        </p>
      </div>
    </div>
  );
};

export default About;
