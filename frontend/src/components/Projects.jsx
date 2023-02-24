import React from "react";
import { motion } from "framer-motion";

function Projects() {
  return (
    <section
      id="Projects"
      className="flex flex-col basis-11/12 max-w-[1400px] mx-auto"
    >
      <header className="flex relative top-12 text-[140px] justify-center h-60 text-orange-500 font-semibold">
        <h1 style={{ textShadow: "2px 4px  rgb(0 0 0 / 0.2)" }}>Projects</h1>
      </header>
      <ul className="grid sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4  lg-grid-rows-3 w-full h-fit gap-5">
        <li className=" sm:col-span-2 md:col-span-2 md:row-span-1 rounded-2xl shadow-highLight border-[1px] border-white border-opacity-[15%] md:h-80 sm:h-auto bg-[#1b1c1e] hover:shadow-glow hover:shadow-orange-500 hover:scale-[101%] hover:ease-in-out transition duration-150 flex items-center justify-center">
          <img
            src="./assets/linkedin.png"
            alt="LinkedIn Profile"
            className="scale-[25%]"
          />
        </li>
        <li className=" sm:col-span-2 md:col-span-2 md:row-span-2 rounded-2xl shadow-highLight border-[1px] border-white border-opacity-[15%] md:h-full sm:h-auto bg-[#1b1c1e] hover:shadow-glow hover:shadow-orange-500 hover:scale-[101%] hover:ease-in-out transition duration-150 flex items-center justify-center">
          <img
            src="./assets/linkedin.png"
            alt="LinkedIn Profile"
            className="scale-[25%]"
          />
        </li>
        <li className=" sm:col-span-2 md:col-span-2 md:row-span-1 rounded-2xl shadow-highLight border-[1px] border-white border-opacity-[15%] md:h-80 sm:h-auto bg-[#1b1c1e] hover:shadow-glow hover:shadow-orange-500 hover:scale-[101%] hover:ease-in-out transition duration-150 flex items-center justify-center">
          <img
            src="./assets/linkedin.png"
            alt="LinkedIn Profile"
            className="scale-[25%]"
          />
        </li>
        <li className=" sm:col-span-2 md:col-span-2 md:row-span-1 rounded-2xl shadow-highLight border-[1px] border-white border-opacity-[15%] md:h-80 sm:h-auto bg-[#1b1c1e] hover:shadow-glow hover:shadow-orange-500 hover:scale-[101%] hover:ease-in-out transition duration-150 flex items-center justify-center">
          <img
            src="./assets/linkedin.png"
            alt="LinkedIn Profile"
            className="scale-[25%]"
          />
        </li>
        <li className=" sm:col-span-2 md:col-span-2 md:row-span-1 rounded-2xl shadow-highLight border-[1px] border-white border-opacity-[15%] md:h-80 sm:h-auto bg-[#1b1c1e] hover:shadow-glow hover:shadow-orange-500 hover:scale-[101%] hover:ease-in-out transition duration-150 flex items-center justify-center">
          <img
            src="./assets/linkedin.png"
            alt="LinkedIn Profile"
            className="scale-[25%]"
          />
        </li>
      </ul>
    </section>
  );
}

export default Projects;
