// Collaborate.jsx
import { motion } from "framer-motion";

const Collaborate = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-r from-[#ffe6f0] via-[#e0f7fa] to-[#e6ffe6] px-6 py-24 font-poppins">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="bg-white rounded-3xl shadow-2xl p-10 md:p-16 max-w-4xl w-full text-center border-4 border-[#da008d]"
      >
        <div className="inline-flex items-center gap-2 bg-[#da008d] text-white text-sm px-4 py-2 rounded-full mb-6">
          <span className="h-2 w-2 bg-green-400 rounded-full"></span>
          OPEN FOR COLLABORATION
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#2d2a63] leading-tight">
          Let’s Build <span className="text-[#da008d]">Something</span> Great Together
        </h1>

        <p className="mt-6 text-lg text-[#555] max-w-xl mx-auto">
          Whether it's a creative idea, a startup project, or just a cool side hustle — I'm all ears and excited to team up. Drop a message and let's bring it to life.
        </p>

        <a
          href="https://www.linkedin.com/in/arunimasharma2005/" // <-- Replace with your LinkedIn URL
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-10 text-2xl sm:text-3xl md:text-4xl font-semibold text-[#da008d] hover:text-[#a1006f] underline underline-offset-4 transition-all duration-300"
        >
          ↳ Connect on LinkedIn
        </a>
      </motion.div>
    </section>
  );
};

export default Collaborate;
