import React from "react";
import { motion } from "framer-motion";
import bgImage from "../assets/backgroundImage.png";
import chinese from "../assets/chinese.png";
import girl from "../assets/girl.png";
import pen from "../assets/pen.png";
import laptop from "../assets/laptop.png";

const AboutIntro = () => {
  return (
    <section
      className="min-h-screen w-screen bg-cover relative flex items-center justify-center px-6 sm:px-12 py-20 font-change3 text-[#4b1d3f] overflow-hidden"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Softer pink overlay for better contrast */}
      <div className="absolute inset-0 bg-[#fbeaff]/70 z-0" />

      {/* Decorative Images - Around the central content */}
<img src={chinese} alt="Chinese" className="absolute top-[15%] left-[48%] w-12 sm:w-16 rotate-[12deg] opacity-80 z-10" />
<img src={girl} alt="Girl" className="absolute top-[80%] left-[35%] w-16 sm:w-24 -rotate-[8deg] opacity-85 z-10" />
<img src={pen} alt="Pen" className="absolute top-[42%] right-[15%] w-10 sm:w-14 rotate-[10deg] opacity-85 z-10" />
<img src={laptop} alt="Laptop" className="absolute top-[58%] left-[10%] w-20 sm:w-28 -rotate-[10deg] opacity-80 z-10" />


      <motion.h1
        className="absolute top-16 left-6 font-extrabold z-10 text-[#8e44ad] leading-none pointer-events-none select-none
                   text-[15vw] sm:text-[12vw] md:text-[9vw] lg:text-[8vw] xl:text-[7vw] max-w-[90vw] ml-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.5 }}
      >
        About <span className="text-[#c9a4ff]">Me</span>
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.5 }}
        className="relative z-10 max-w-4xl text-center"
      >
        <p className="text-base sm:text-xl text-right mt-10 max-w-300 md:text-xl mr-10 leading-relaxed text-[#8e44ad]">
          I'm a third-year IT student at VIT Vellore with a strong passion for frontend development in the MERN stack.<br className="hidden sm:inline" />
          I enjoy crafting elegant, responsive interfaces and translating ideas into clean, functional code.<br />
          With a current CGPA of 9.04, I'm committed to both academic excellence and practical learning.<br />
          Currently diving into Machine Learning, I’m equally drawn to creative design and user experience.<br className="hidden sm:inline" />
          I regularly practice DSA, and have earned recognition like placing in the top 10 of the HPE coding test.<br />
          I've actively participated in multiple hackathons, learning to thrive in fast-paced, team-based environments.<br className="hidden sm:inline" />
          I'm fluent in English, Hindi, and Punjabi, and have basic knowledge of Mandarin Chinese and Korean.<br />
          I’m always exploring new technologies and ways to turn code into something meaningful and impactful.
        </p>
      </motion.div>
    </section>
  );
};

export default AboutIntro;
