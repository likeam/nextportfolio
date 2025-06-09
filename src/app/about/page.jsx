"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const About = () => {
  return (
    <motion.div
      className=" h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="  ">
        {/* Text Container  */}
        <div className=" p-4 md:p-8 lg:p-24 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64">
          <div className=" flex flex-col gap-12 justify-center">
            <h1 className=" font-bold text-2xl">BIOGRAPHY</h1>
            <p className=" text-lg">
              Highly skilled and motivated MERN Full Stack Developer with 4
              years of experience in designing, developing, and deploying
              scalable web applications. Proficient in building responsive
              front-end interfaces using React.js, NextJs and robust back-end
              systems using Node.js and Express.js, with MongoDB for database
              management. Adept at collaborating with cross-functional teams to
              deliver high-quality software solutions. Passionate about writing
              clean, maintainable code and staying updated with the latest web
              development trends
            </p>
            <span className=" italic">
              Expert in NodeJS, MongoDB, MySQL, React and Next{" "}
            </span>
            <div className=" self-end">
              <Image src="/sign.svg" alt="sig" width={385} height={177} />
            </div>
          </div>
          {/* Skills  */}{" "}
          <div className=" flex flex-col gap-12 justify-center">
            <h1 className=" font-bold text-2xl">SKILLS</h1>
            <div className=" flex gap-4 flex-wrap">
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                JavaScript
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                TypeScript
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                ReactJS
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                NextJS
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                TailwindCSS
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                NodeJS
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                ExpressJS
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                MongoDB
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Postgres
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                MySQL
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Prisma
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Redux
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Framer Motion
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Shadcn UI
              </div>
            </div>
          </div>
          {/* Experence  */}
          <div className=" flex flex-col gap-12 justify-center">
            <h1 className=" font-bold text-2xl">EXPERIENCE</h1>
          </div>
        </div>
        {/* SVG Contaner  */}
        <div className=" hidden"></div>
      </div>
    </motion.div>
  );
};

export default About;
