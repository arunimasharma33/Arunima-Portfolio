import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import arrow from "../assets/direct-selection.png"

const skills = [
  "HTML", "CSS", "JavaScript", "React", "Tailwind",
  "Node.js", "Express", "MongoDB", "SQL", "C++", "Java", "C"
];

const useWindowSize = () => {
  const [size, setSize] = useState({ width: window.innerWidth, height: window.innerHeight });

  useEffect(() => {
    const handleResize = () => {
      setSize({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return size;
};

const generateFinalPositions = (count, width, height) => {
  const positions = [];
  const minDistance = 100;

  for (let i = 0; i < count; i++) {
    let valid = false;
    let x, y;

    while (!valid) {
      x = (Math.random() - 0.5) * (width * 0.7);
      y = (Math.random() - 0.5) * (height * 0.5);

      valid = true;
      for (const pos of positions) {
        const dx = pos.x - x;
        const dy = pos.y - y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < minDistance) {
          valid = false;
          break;
        }
      }
    }

    positions.push({ x, y });
  }

  return positions;
};

const About = () => {
  const [exploded, setExploded] = useState(false);
  const [settle, setSettle] = useState(false);
  const { width, height } = useWindowSize();

  const [finalPositions, setFinalPositions] = useState([]);

  useEffect(() => {
    if (exploded) {
      setFinalPositions(generateFinalPositions(skills.length, width, height));
      const timer = setTimeout(() => {
        setSettle(true);
      }, 1100);
      return () => clearTimeout(timer);
    }
  }, [exploded, width, height]);

  return (
    <section className="min-h-screen w-screen flex flex-col items-center justify-center px-4 py-20 font-change3 text-[#f5ecff] relative overflow-clip z-0 bg-gradient-to-br bg-gradient-to-br from-[#2a1a3a] via-[#3e2b5c] to-[#4c2a74]">
      {!exploded && (
        <motion.div
          initial={{ opacity: 0.6, scale: 0.9, rotate: 0 }}
          animate={{
            scale: [0.95, 1.05, 0.95],
            rotate: [0, 360],
            opacity: [0.6, 1, 0.6]
          }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-[220px] h-[220px] sm:w-[300px] sm:h-[300px] rounded-full border-2 border-[#c9a4ff]/50 z-10"
          style={{ boxShadow: "0 0 15px 4px rgba(201, 164, 255, 0.3), inset 0 0 12px rgba(201, 164, 255, 0.1)" }}
        ></motion.div>
      )}

      {!exploded && (
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          {[...Array(100)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-[2px] h-[2px] bg-[#b28cf5] shadow-[0_0_6px_#b28cf5] rounded-full opacity-30"
              style={{ top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%` }}
              animate={{ opacity: [0.2, 0.8, 0.2], scale: [0.8, 1.2, 0.8] }}
              transition={{ duration: Math.random() * 3 + 2, repeat: Infinity, ease: "easeInOut" }}
            />
          ))}
        </div>
      )}

      <motion.h2
        onClick={() => { if (!exploded) setExploded(true); }}
        whileHover={!exploded ? { scale: 1.1 } : {}}
        className={`text-[3rem] sm:text-[5rem] md:text-[6rem] font-extrabold tracking-widest text-[#8e44ad] select-none z-20 text-center transition-opacity duration-500 ${exploded ? "opacity-40 cursor-default" : "cursor-pointer"}`}
      >
        SKILLS
      </motion.h2>

      {!exploded && (
        <motion.img
          src={arrow}
          alt="Click Arrow"
          className="w-10 sm:w-14 absolute top-[53%] sm:top-[52%] z-30"
          style={{ pointerEvents: "none" }}
        />
      )}

      <AnimatePresence>
        {exploded &&
          skills.map((skill, index) => {
            const random = {
              x: (Math.random() - 0.5) * width,
              y: (Math.random() - 0.5) * height,
              rotate: (Math.random() - 0.5) * 360
            };

            const final = finalPositions[index] || { x: 0, y: 0 };

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 0, y: 0, rotate: 0, scale: 0.5 }}
                animate={
                  settle
                    ? { opacity: 1, x: final.x, y: final.y, rotate: 0, scale: 1 }
                    : { opacity: 1, x: random.x, y: random.y, rotate: random.rotate, scale: 1.1 }
                }
                transition={{ duration: settle ? 0.8 : 1.1, ease: "easeOut", delay: index * 0.03 }}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#e9d7ff] text-[#5c3d7a] px-4 py-3 sm:px-6 sm:py-4 rounded-2xl text-center font-bold text-sm sm:text-lg md:text-xl shadow-xl whitespace-nowrap"
              >
                {skill}
              </motion.div>
            );
          })}
      </AnimatePresence>

      {settle && (
        <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
          {[...Array(30)].map((_, i) => {
            const randomTop = Math.random() * 100;
            const randomLeft = Math.random() * 100;
            const randomX = (Math.random() - 0.5) * 100;
            const randomY = (Math.random() - 0.5) * 200;
            const randomDuration = 2 + Math.random() * 3;

            return (
              <motion.div
                key={i}
                className="w-[3px] h-[3px] bg-[#b28cf5] shadow-[0_0_6px_#b28cf5] rounded-full opacity-40 absolute"
                style={{ top: `${randomTop}%`, left: `${randomLeft}%` }}
                animate={{ x: [0, randomX, 0], y: [0, randomY, 0], opacity: [0.4, 0.7, 0.4] }}
                transition={{ duration: randomDuration, repeat: Infinity, repeatType: "loop", delay: i * 0.15 }}
              />
            );
          })}
        </div>
      )}
    </section>
  );
};

export default About;