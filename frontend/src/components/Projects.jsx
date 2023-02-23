import React from "react";
import { motion } from "framer-motion";

function Projects() {
  return (
    <section
      id="Projects"
      className="flex flex-col basis-11/12 max-w-[1400px] mx-auto"
    >
      <header className="flex relative top-12 text-[140px] justify-center h-60 text-[#edece8] font-semibold">
        <h1 className="flex ">Projects</h1>
      </header>
      <ul className="grid sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4  lg-grid-rows-4 w-full h-fit gap-5">
        <li className=" sm:col-span-2 md:col-span-3 rounded-2xl shadow-highLight border-[1px] border-white border-opacity-[5%] md:h-80 sm:h-auto bg-[#5285ce] hover:shadow-glow hover:shadow-orange-200 hover:scale-[101%] hover:ease-in-out transition duration-150 flex items-center justify-center">
          <img
            src="./assets/linkedin.png"
            alt="LinkedIn Profile"
            className="scale-[25%]"
          />
        </li>
        <li className="bg-white text-black sm:col-span-2 md:col-span-2 lg:col-span-1 rounded-2xl shadow-highLight border-[1px] border-white border-opacity-[5%] md:h-80 sm:h-auto hover:shadow-glow hover:shadow-orange-200 hover:scale-[101%] hover:ease-in-out transition duration-150">
          <img
            src="./assets/linkedin.png"
            alt="LinkedIn Profile"
            className="scale-[25%]"
          />
        </li>
        <li className=" sm:col-span-2 md:col-span-1 lg:col-span-2 rounded-2xl shadow-highLight border-[1px] border-white border-opacity-[5%] md:h-80 sm:h-auto bg-[#161b22] hover:shadow-glow hover:shadow-orange-200 hover:scale-[101%] hover:ease-in-out transition duration-150 flex items-center justify-center">
          <img
            src="./assets/github.png"
            alt="Github Profile"
            className="scale-[25%]"
          />
        </li>
        <li className=" sm:col-span-2 md:col-span-1 lg:col-span-1 lg:row-span-2 rounded-2xl shadow-highLight border-[1px] border-white border-opacity-[5%] md:h-160 sm:h-auto bg-[#161b22] hover:shadow-glow hover:shadow-orange-200 hover:scale-[101%] hover:ease-in-out transition duration-150 flex items-center justify-center">
          <img
            src="./assets/github.png"
            alt="Github Profile"
            className="scale-[25%]"
          />
        </li>
        <li className=" sm:col-span-2 md:col-span-1 lg:col-span-2 lg:row-span-2 rounded-2xl shadow-highLight border-[1px] border-white border-opacity-[5%] md:h-160 sm:h-auto bg-[#161b22] hover:shadow-glow hover:shadow-orange-200 hover:scale-[101%] hover:ease-in-out transition duration-150 flex items-center justify-center">
          <img
            src="./assets/github.png"
            alt="Github Profile"
            className="scale-[25%]"
          />
        </li>
        <li className=" sm:col-span-2 md:col-span-1 lg:col-span-2 lg:row-span-1 rounded-2xl shadow-highLight border-[1px] border-white border-opacity-[5%] md:h-80 sm:h-auto bg-[#161b22] hover:shadow-glow hover:shadow-orange-200 hover:scale-[101%] hover:ease-in-out transition duration-150 flex items-center justify-center">
          <img
            src="./assets/github.png"
            alt="Github Profile"
            className="scale-[25%]"
          />
        </li>
      </ul>
    </section>
  );
}

export default Projects;
