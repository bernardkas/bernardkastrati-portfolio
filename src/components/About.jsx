import React from "react";
import { useScroll } from "@react-spring/web";
import { animated, useSpring } from "@react-spring/web";

const About = () => {
  const containerRef = React.useRef(null);

  const [textStyles, textApi] = useSpring(() => ({
    y: "100%",
  }));

  const { scrollYProgress } = useScroll({
    container: containerRef,
    onChange: ({ value: { scrollYProgress } }) => {
      if (scrollYProgress > 1) {
        textApi.start({ y: "0%" });
      } else {
        textApi.start({ y: "100%" });
      }
    },
    default: {
      immediate: true,
    },
  });

  return (
    <div
      name="about"
      className="w-full h-screen d-flex justify-center align-middle bg-gradient-to-b from-gray-800 to-black text-white"
      id="about"
    >
      <animated.div
        className={
          "w-full h-screen d-flex justify-center align-middle bg-gradient-to-b from-gray-700 to-black text-white"
        }
        style={{
          clipPath: scrollYProgress.to((val) => `circle(${val * 300}%)`),
        }}
      >
        <div
          style={textStyles}
          className="max-w-4xl p-4 mx-auto flex flex-col justify-center w-full h-full"
        >
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500">
              About
            </p>
          </div>

          <p className="text-xl mt-20">
            I want to make this simple. I studied Information Systems and gained
            very good knowledge in Programming, IT and management. It all
            started when I saw how technology is moving forward. Through hard
            work I have gained some excellent skills in Web Development. So, I
            want to explore the vast possibilities in Web Development.
          </p>

          <br />

          <p className="text-xl">
            I would like to inform you also that I am highly skilled with HTML,
            CSS, JavaScrip, React.js C# and python as I have handsome experience
            with them. Still, I am always eager to learn anew and make my skill
            sharper whenever I get any chance.
          </p>
        </div>
      </animated.div>
    </div>
  );
};

export default About;
