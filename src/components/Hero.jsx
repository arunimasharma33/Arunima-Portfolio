import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  const WavyLine = () => (
    <svg width="160" height="40" viewBox="0 0 160 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 20 C 40 0, 120 40, 160 20" stroke="#c9a4ff" strokeWidth="2" fill="transparent" />
    </svg>
  );

  return (
    <section className="relative w-full min-h-screen flex flex-col lg:flex-row font-[Playfair Display] overflow-hidden bg-gradient-to-br from-[#ffe8ff] via-[#e5e2ff] to-[#daf2ff]">
      {/* Floating Circles */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-[#e0d1f5] rounded-full opacity-30 animate-pulse blur-2xl z-0" />
      <div className="absolute bottom-10 right-16 w-20 h-20 bg-[#c9a4ff] rounded-full opacity-20 animate-pulse blur-3xl z-0" />
      <div className="absolute top-1/3 right-6 w-12 h-12 bg-[#f9d7ff] rounded-full opacity-25 animate-bounce blur-2xl z-0" />

      {/* Sticky Buttons */}
      <div className="absolute left-4 sm:left-6 top-4 sm:top-6 z-20">
        <button className="cursor-pointer text-sm sm:text-lg font-semibold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-[#b370f1] via-[#8e44ad] to-[#5e60ce] hover:opacity-90 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]" onClick={() => document.getElementById("work")?.scrollIntoView({ behavior: "smooth" })}>
          WORK
        </button>
      </div>

      <div
        className="absolute right-4 sm:right-6 top-4 sm:top-6 text-sm sm:text-lg font-semibold tracking-widest text-[#5e60ce] sm:text-white cursor-pointer hover:opacity-90 z-20"
        onClick={() => document.getElementById("info")?.scrollIntoView({ behavior: "smooth" })}
      >
        INFO
      </div>

      {/* Left Side */}
      <motion.div
        initial={{ x: -80, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="w-full lg:w-1/2 bg-[#f5ecff] flex flex-col justify-center items-center px-6 sm:px-10 py-16 text-center z-10"
      >
        <motion.h2
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-2xl sm:text-4xl font-semibold uppercase bg-gradient-to-r from-[#c780f5] via-[#f1cbff] to-[#5e60ce] bg-clip-text text-transparent mb-2"
        >
          /2025/
        </motion.h2>

        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-[40px] sm:text-[70px] md:text-[90px] lg:text-[120px] font-extrabold text-[#8e44ad] leading-tight relative"
        >
          HELLO <br />
          <motion.span
            animate={{ y: [0, -5, 0] }}
            transition={{ repeat: Infinity, duration: 1 }}
            className="font-change absolute left-0 sm:text-[90px] md:text-[100px] lg:text-[130px] text-[#5e60ce] -mt-8 sm:-mt-14 md:-mt-16 lg:-mt-20"
          >
            there
          </motion.span>
        </motion.h1>

        <WavyLine />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="mt-4 text-sm sm:text-base md:text-lg text-[#6f4e8c] font-medium max-w-md font-change3 italic"
        >
          Building web magic with logic, design & curiosity
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="mt-4 text-sm sm:text-lg md:text-xl text-[#5c3d7a] font-light max-w-md font-change3"
        >
          A third-year student passionate about crafting full-stack experiences that feel alive.
        </motion.p>

        <motion.a
          href="/Arunima-Resume_2025.pdf"
          download
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.8 }}
          className="mt-6 inline-block px-6 py-2 sm:px-8 sm:py-3 bg-gradient-to-r from-[#8e44ad] to-[#5e60ce] text-white font-semibold text-sm sm:text-base rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
        >
          Resume
        </motion.a>
      </motion.div>

      {/* Right Side */}
      <motion.div
        initial={{ x: 80, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="w-full lg:w-1/2 bg-[#8e44ad] flex flex-col justify-center items-center px-6 sm:px-10 py-16 text-center z-10"
      >
        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-[90px] font-extrabold text-[#f5ecff] leading-tight font-change2"
        >
          i'm <br />
          <span className="text-[#e9d7ff]">
            <Typewriter
              words={["ARUNIMA"]}
              loop={false}
              cursor
              cursorStyle="_"
              typeSpeed={150}
              deleteSpeed={80}
              delaySpeed={3000}
            />
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="mt-4 text-sm sm:text-base md:text-lg text-[#e9d7ff] font-medium max-w-md italic font-change3"
        >
          Full Stack Developer with a flair for creativity
        </motion.p>

        <div className="mt-8 space-y-1">
          <a
            href="mailto:arusrma.29jan@gmail.com"
            className="text-xs sm:text-sm font-medium tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-[#e9d7ff] via-[#f5ecff] to-[#c9a4ff]"
          >
            arusrma.29jan@gmail.com
          </a>
          <br />
          <a
            href="https://github.com/arunimasharma33"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs sm:text-sm font-medium tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-[#e9d7ff] via-[#f5ecff] to-[#c9a4ff]"
          >
            github.com/arunimasharma33
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;