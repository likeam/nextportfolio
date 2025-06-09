"use client";
import { motion } from "framer-motion";

const Portfolio = () => {
  return (
    <motion.div
      className=" h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      Prtfolio
    </motion.div>
  );
};

export default Portfolio;
