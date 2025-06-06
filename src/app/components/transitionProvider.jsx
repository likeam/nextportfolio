"use client";
import { AnimatePresence } from "framer-motion";
import Navbar from "../components/navbar";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

const TransitionProvider = ({ children }) => {
  const pathName = usePathname();
  return (
    <AnimatePresence mode="wait">
      <div
        key={pathName}
        className=" w-screen h-screen bg-gradient-to-b from-blue-300 to-red-200"
      >
        <motion.div
          className=" w-screen h-screen fixed bg-black rounded-b-[100px] z-40"
          animate={{ height: "0vh" }}
          exit={{ height: "140vh" }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        />
        <motion.div
          className=" fixed m-auto top-0 bottom-0 left-0 right-0 text-white text-8xl cursor-default z-50 w-fit h-fit capitalize"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {pathName.substring(1)}
        </motion.div>
        <motion.div
          className=" w-screen h-screen fixed bg-black rounded-t-[100px] z-40 bottom-0"
          initial={{ height: "140vh" }}
          animate={{ height: "0vh", transition: { delay: 0.5 } }}
        />
        <div className=" h-24 border-b-2  border-blue-400 ">
          <Navbar />
        </div>
        <div className=" h-[calc(100vh-6rem)]">{children}</div>
      </div>
    </AnimatePresence>
  );
};

export default TransitionProvider;
