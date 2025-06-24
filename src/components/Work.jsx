// Work.jsx
import { motion } from "framer-motion";
import ecom from "../assets/ecom.png";
import educity from "../assets/educity.png";
import go from "../assets/go.png";
import go2 from "../assets/go2.png";
import github1 from "../assets/github1.png"
import github2 from "../assets/github2.png"
import file from "../assets/file.png"
import vie from "../assets/vie.png"

const Work = () => {
  return (
    <section className="min-h-screen px-6 py-20 bg-gradient-to-br from-[#daf2ff] via-[#f9e0ff] to-[#ffe0e0] text-[#a25d6a] font-poppins px-20">
      {/* Title top-left */}
      <motion.h1
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl sm:text-6xl font-extrabold text-left mb-20 text-[#da008d] transition-all duration-700"
      >
        My Projects
      </motion.h1>

      {/* Shoporia Project Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-20 transition-all duration-700"
      >
        {/* Image Preview Area */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full aspect-video rounded-3xl shadow-2xl overflow-hidden transition-all duration-700"
        >
          <a
  href="#"
  className="relative block w-full h-full rounded-3xl overflow-hidden group"
>
  <img
    src={ecom}
    alt="Shoporia Preview"
    className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110 group-hover:brightness-90"
  />

  {/* Elegant Dual Icon Overlay */}
  <div className="absolute inset-0 bg-gradient-to-br from-[#ffffff20] to-[#00000040] backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center space-x-8">
    <a
      href="https://github.com/arunimasharma33/Shoporia"
      target="_blank"
      rel="noopener noreferrer"
      className="transform hover:scale-110 transition-transform duration-300"
    >
      <img src={github1} alt="GitHub" className="w-12 h-12 sm:w-14 sm:h-14" />
    </a>
    <a
      href="https://shoporia-frontend.vercel.app/"
      target="_blank"
      rel="noopener noreferrer"
      className="transform hover:scale-110 transition-transform duration-300"
    >
      <img src={go} alt="Live Site" className="w-12 h-12 sm:w-14 sm:h-14" />
    </a>
  </div>

  {/* Glow Border on Hover */}
  <div className="absolute inset-0 rounded-3xl ring-0 group-hover:ring-4 ring-[#a25d6a]/50 transition-all duration-500 pointer-events-none" />
</a>



        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-4 w-full max-w-xl mb-20 transition-all duration-700"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0020da] transition-all duration-700">
            1. Shoporia - Ecommerce Website
          </h2>
          <p className="text-base sm:text-lg text-[#0020da] transition-all duration-700">
            A feature-rich MERN stack e-commerce platform designed for seamless shopping. It includes a dynamic admin panel for product and user management, intuitive UI, secure authentication, responsive layouts, search and filtering, and a smooth checkout experience.
          </p>
        </motion.div>
      </motion.div>

      {/* Education Website Project Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-20 transition-all duration-700"
      >
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-4 w-full max-w-xl transition-all duration-700"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[#da4d00] transition-all duration-700">
            2. Education Website
          </h2>
          <p className="text-base sm:text-lg text-[#da4d00] transition-all duration-700">
  A responsive educational platform interface built using React and Vite. It features modern UI components, smooth animations, and section-based navigation to showcase the design of a learning platform.
</p>

        </motion.div>

        {/* Image Preview Area */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full aspect-video rounded-3xl shadow-2xl overflow-hidden transition-all duration-700"
        >
          <a
  href="#"
  className="relative block w-full h-full rounded-3xl overflow-hidden group"
>
  <img
    src={educity}
    alt="Educity Preview"
    className="w-full h-full object-fit transform transition-transform duration-500 group-hover:scale-110 group-hover:brightness-90"
  />

  {/* Elegant Dual Icon Overlay */}
  <div className="absolute inset-0 bg-gradient-to-br from-[#ffffff20] to-[#00000040] backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center space-x-8">
    <a
      href="https://github.com/arunimasharma33/Educity"
      target="_blank"
      rel="noopener noreferrer"
      className="transform hover:scale-110 transition-transform duration-300"
    >
      <img src={github2} alt="GitHub" className="w-12 h-12 sm:w-14 sm:h-14" />
    </a>
    <a
      href="https://arunimasharma33.github.io/Educity/"
      target="_blank"
      rel="noopener noreferrer"
      className="transform hover:scale-110 transition-transform duration-300"
    >
      <img src={go2} alt="Live Site" className="w-12 h-12 sm:w-14 sm:h-14" />
    </a>
  </div>

  {/* Glow Border on Hover */}
  <div className="absolute inset-0 rounded-3xl ring-0 group-hover:ring-4 ring-[#a25d6a]/50 transition-all duration-500 pointer-events-none" />
</a>

        </motion.div>
      </motion.div>

      {/* Group Projects Section */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold text-center text-[#742c91] mb-12"
      >
        Group Projects
      </motion.h2>

      <motion.div
  initial={{ opacity: 0, scale: 0.95 }}
  whileInView={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.8 }}
  className="grid grid-cols-1 md:grid-cols-3 gap-8"
>
  {[
    {
      title: "Women Safety Analytics",
      description:
        "SafeAura is a cutting-edge solution designed to protect women from potential threats in public spaces using AI-driven real-time monitoring, by integrating seamlessly with existing CCTV infrastructure. This project was developed for SIH'24 and got selected in top 25 at college level.",
      github: "https://github.com/arunimasharma33/Women-Safety.git",
    },
    {
      title: "Golden Harvesting",
      description:
        "A machine learning project that leverages computer vision to evaluate apple quality based on visible defects, helping automate and enhance quality control processes in agriculture.",
      github: "https://github.com/arunimasharma33/Golden-Harvesting-A-Predictive-Model-for-Apple-Quality-Assurance.git",
    },
    {
      title: "Cyberfiction - Clone",
      description:
        "Frontend project made as a clone of existing korean based website - Cyberfiction.",
      github: "https://github.com/arunimasharma33/CYBERFICTION",
      live: "https://arunimasharma33.github.io/CYBERFICTION/",
    },
  ].map((project, index) => (
    <div
      key={index}
      className="relative group rounded-2xl overflow-hidden shadow-lg border border-[#b08ad7] bg-gradient-to-br from-[#f9ecff] via-[#fdf6ff] to-[#e3e0ff] transition-transform duration-300"
    >
      {/* Background effect */}
      <div className="absolute inset-0 bg-white bg-opacity-0 group-hover:bg-opacity-10 transition duration-300 z-0" />

      {/* Overlay with icons */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#ffffff20] to-[#00000040] backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 flex items-center justify-center space-x-6">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="transform hover:scale-110 transition-transform duration-300"
        >
          <img src={file} alt="GitHub" className="w-10 h-10 sm:w-12 sm:h-12" />
        </a>
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="transform hover:scale-110 transition-transform duration-300"
          >
            <img src={go} alt="Live Site" className="w-10 h-10 sm:w-12 sm:h-12" />
          </a>
        )}
      </div>

      {/* Glow ring on hover */}
      <div className="absolute inset-0 rounded-2xl ring-0 group-hover:ring-4 ring-[#a25d6a]/50 transition-all duration-500 pointer-events-none z-30" />

      {/* Content */}
      <div className="relative z-10 p-6 min-h-[200px] flex flex-col">
        <h3 className="text-xl font-bold mb-2 text-[#7530b0]">{project.title}</h3>
        <p className="text-sm leading-relaxed text-[#5a437a]">{project.description}</p>
      </div>
    </div>
  ))}
</motion.div>

    </section>
  );
};

export default Work;