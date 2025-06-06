"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div
      className=" h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className=" h-full flex flex-col lg:flex-row px-4 md:px-8 lg:px-24 xl:px-48">
        <div className=" h-1/2 lg:h-full lg:w-1/2  relative">
          <Image src="/hero.png" alt="hero" fill className=" object-contain" />
        </div>
        <div className=" h-1/2 flex flex-col gap-8 lg:h-full lg:w-1/2 items-center justify-center">
          <h1 className=" text-4xl md:text-6xl font-bold z-20">
            Next.JS Full Stack MERN Developer{" "}
          </h1>
          <p className=" md:text-xl">
            Highly skilled and motivated MERN Full Stack Developer with 4 years
            of experience in designing, developing, and deploying scalable web
            applications. Proficient in building responsive front-end interfaces
            using React.js and robust back-end systems using Node.js and
            Express.js, with MongoDB for database management. Adept at
            collaborating with cross-functional teams to deliver high-quality
            software solutions. Passionate about writing clean, maintainable
            code and staying updated with the latest web development trends
          </p>
          <div className=" flex gap-4">
            <button className=" p-4 rounded-lg ring-1 ring-white bg-black text-white">
              View My Work
            </button>
            <button className="p-4 rounded-lg ring-1 ring-black">
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Home;
