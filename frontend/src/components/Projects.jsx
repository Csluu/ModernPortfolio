import React from "react";
import { motion } from "framer-motion";

function Projects() {
  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const child = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    viewport: { once: true, amount: 0.5 },
  };
  return (
    <motion.section
      className="flex w-full justify-center h-fit"
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div
        id="Projects"
        className="flex flex-col basis-11/12 max-w-[1400px] sm:mx-5 lg:mx-5 xl-mx-auto h-fit gap-16 pt-10"
      >
        <motion.header
          variants={child}
          className="flex relative top-10 ss:text-[150px] xs:text-[60px] xs:place-items-end xs:h-32 sm:text-[180px] justify-center ss:h-60 text-orange-500 font-semibold"
        >
          <h1 style={{ textShadow: "2px 4px  rgb(0 0 0 /0.2)" }}>Projects</h1>
        </motion.header>
        <ul className="grid sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-6  lg-grid-rows-3 w-full h-fit gap-5">
          <motion.li variants={child} className="col-span-2 row-span-1">
            <div
              className=" text-[#70798C] text-opacity-75 text-[50px]
            hover:text-orange-500 font-semibold col-span-1 row-span-1
            rounded-2xl shadow-highLight border-[1px] border-white
            border-opacity-[15%] xs:h-72 bg-[#1b1c1e] hover:shadow-glow
            hover:shadow-orange-500 hover:scale-[101%] hover:ease-in-out
            transition duration-150 flex items-center justify-center"
            >
              Bastion
            </div>
          </motion.li>
          <motion.li variants={child} className="col-span-2 row-span-1">
            <div
              className=" text-[#70798C] text-opacity-75 text-[50px]
            hover:text-orange-500 font-semibold col-span-1 row-span-1
            rounded-2xl shadow-highLight border-[1px] border-white
            border-opacity-[15%] xs:h-72 bg-[#1b1c1e] hover:shadow-glow
            hover:shadow-orange-500 hover:scale-[101%] hover:ease-in-out
            transition duration-150 flex items-center justify-center"
            >
              DevSearch
            </div>
          </motion.li>

          <motion.li variants={child} className="col-span-2 row-span-1">
            <div
              className=" text-[#70798C] text-opacity-75 text-[50px]
            hover:text-orange-500 font-semibold col-span-1 row-span-1
            rounded-2xl shadow-highLight border-[1px] border-white
            border-opacity-[15%] xs:h-72 bg-[#1b1c1e] hover:shadow-glow
            hover:shadow-orange-500 hover:scale-[101%] hover:ease-in-out
            transition duration-150 flex items-center justify-center"
            >
              StudyBud
            </div>
          </motion.li>
          <motion.li
            variants={child}
            className="sm:col-span-2 md:col-span-3 md:row-span-2"
          >
            <div
              className="  rounded-2xl
            shadow-highLight border-[1px] border-white border-opacity-[15%]
            md:h-[576px] xs:h-fit bg-[#1b1c1e] flex items-center justify-center"
            >
              Picture
            </div>
          </motion.li>

          <motion.li
            variants={child}
            className="sm:col-span-2 md:col-span-3 md:row-span-2"
          >
            <div
              className="  rounded-2xl
            shadow-highLight border-[1px] border-white border-opacity-[15%]
            md:h-[576px] xs:h-fit bg-[#1b1c1e] flex items-center justify-center"
            >
              Picture
            </div>
          </motion.li>
        </ul>
      </div>
    </motion.section>
  );
}

export default Projects;
