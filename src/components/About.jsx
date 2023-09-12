import React from "react";
import { useScroll } from "@react-spring/web";
import { animated, useSpring } from "@react-spring/web";

const About = () => {
  const containerRef = React.useRef(null);

  const [textStyles, textApi] = useSpring(() => ({
    opacity: 0, // Use opacity to control visibility
  }));

  const { scrollYProgress } = useScroll({
    container: containerRef,
    onChange: ({ value: { scrollYProgress } }) => {
      if (scrollYProgress > 0.5) { // Adjust this threshold as needed
        textApi.start({ opacity: 1 });
      } else {
        textApi.start({ opacity: 0 });
      }
    },
    default: {
      immediate: true,
    },
  });

  console.log('scrrol', scrollYProgress);
  return (
    <div
      ref={containerRef}
      name="about"
      className="w-full h-screen d-flex justify-center align-middle bg-gradient-to-b from-gray-800 to-black text-white"
      id="about"
    >
      <animated.div
        className={
          "w-full h-screen d-flex justify-center align-middle bg-gradient-to-b from-gray-700 to-black text-white"
        }
        style={{opacity: textStyles.opacity}}
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
          I am a web developer with a Bachelor's degree in Information Systems and over 1 year of professional experience. I'm passionate about creating user-friendly websites and have a knack for turning ideas into elegant web applications. With a strong foundation in Information Systems, I excel in collaborative environments and am committed to staying up-to-date with the latest web development trends. My goal is to continue crafting innovative web solutions that make a meaningful impact.
          </p>

          <br />

          <p className="text-xl">
          If you're seeking a passionate coder who can transform ideas into reality, don't hesitate to reach out. Let's collaborate and craft something extraordinary together!
          </p>
        </div>
      </animated.div>
    </div>
  );
};

export default About;
