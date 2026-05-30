import { motion } from "framer-motion";

const ScrollReveal = ({ children }) => {
  return (
    <motion.div
    initial={{ opacity: 0, y: 100, scale: 0.98 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    transition={{
        duration: 1.2,
        ease: "easeOut"
    }}
    viewport={{ once: false, amount: 0.2 }}
    >
  {children}
</motion.div>
  );
};

export default ScrollReveal;