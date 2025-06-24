import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AnimatedText = ({ children }) => {
  const [ref, inView] = useInView({
    triggerOnce: false,       // Keeps animating on every view
    threshold: 0.2,           // Triggers when 20% of the element is in view
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{
        duration: 1.2,         // Increased duration for slow animation
        ease: "easeOut"        // Makes it more natural
      }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedText;
