import { motion } from "framer-motion";
import { subtitle } from "@/components/primitives";

const text = "Justify, seed and grow your financial future with our tools.";

const typingContainer = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const typingText = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const TypingText = () => (
  <motion.div
    className={subtitle({ class: "mt-4" })}
    variants={typingContainer}
    initial="hidden"
    animate="visible"
  >
    {text.split("").map((char, index) => (
      <motion.span key={index} variants={typingText}>
        {char}
      </motion.span>
    ))}
  </motion.div>
);

export default TypingText;
