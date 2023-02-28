import React from "react";
import { motion } from "framer-motion";

function AboutMe() {
  return (
    <section
      id="About"
      className="flex flex-col basis-11/12 max-w-[1400px] mx-auto h-screen gap-12"
    >
      <header className="flex relative top-10 text-[180px] justify-center h-60 text-orange-500 font-semibold">
        <h1 style={{ textShadow: "2px 4px  rgb(0 0 0 /0.2)" }}>About Me</h1>
      </header>
      <ul className="grid sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4  lg-grid-rows-3 w-full h-fit gap-5">
        <li className="bg-orange-500 sm:col-span-2 md:col-span-1 lg:col-span-1 rounded-xl shadow-highLight border-[1px] border-white border-opacity-[15%] h-72 flex justify-center gap-5">
          <div className="h-full w-full rounded-xl bg-profile-picture border-[1px] border-white border-opacity-[15%] bg-cover bg-center"></div>
        </li>
        <li className="bg-orange-500 sm:col-span-2 md:col-span-1 lg:col-span-3 rounded-xl shadow-highLight border-[1px] border-white border-opacity-[15%] h-72 flex justify-center p-5 gap-5">
          <div className="flex flex-col font-semibold justify-center bg-am">
            <p className="text-[35px] md:text-[18px] lg:text-[120px] text-[#1b1c1e] font-quicksand">
              Christopher Luu
            </p>
            <p className="text-[35px] md:text-[18px] lg:text-[60px] text-[#1b1c1e] relative top-[-25px]">
              Software Developer
            </p>
          </div>
        </li>
        <li className=" sm:col-span-2 md:col-span-1 lg:col-span-2 lg:row-span-2 rounded-xl shadow-highLight  border-[1px] border-white border-opacity-[15%] md:h-160 sm:h-auto bg-[#1b1c1e]  p-10 flex flex-col justify-center">
          <h1 className="flex flex-col text-[#FFF5EE] text-[75px] font-semibold">
            Introduction
          </h1>

          <p className="h-fit text-[25px] m-2 text-[#70798C] text-opacity-75">
            I am a full stack developer with a passion for crafting elegant and
            efficient web solutions. My technical expertise ranges from
            front-end technologies like React to back-end frameworks such as
            Django.
          </p>
          <p className="h-fit text-[25px] m-2 text-[#70798C] text-opacity-75">
            I am well-equipped to tackle complex problems and implement robust
            solutions. I am dedicated to delivering high-quality work that meets
            both business objectives and user needs.
          </p>
        </li>
        <li className="sm:col-span-2 md:col-span-1 rounded-xl shadow-highLight  border-[1px] text-[25px] text-[#70798C] text-opacity-75 border-white border-opacity-[15%] md:h-72 sm:h-auto bg-[#1b1c1e] hover:shadow-glow hover:shadow-orange-500 hover:scale-[101%] hover:ease-in-out transition duration-150 flex items-center justify-center">
          <a
            href="https://www.linkedin.com/in/csluu/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center w-full h-full"
          >
            <img
              src="./assets/linkedin.png"
              alt="LinkedIn Profile"
              className="scale-[44%]"
            />
            <div className="-translate-y-10 font-semibold">Linkedin</div>
          </a>
        </li>

        <li className="sm:col-span-2 md:col-span-1 rounded-xl shadow-highLight  border-[1px] text-[25px] text-[#70798C] text-opacity-75 border-white border-opacity-[15%] md:h-72 sm:h-auto bg-[#1b1c1e] hover:shadow-glow hover:shadow-orange-500 hover:scale-[101%] hover:ease-in-out transition duration-150 flex items-center justify-center">
          <div className="flex flex-col items-center justify-center w-full h-full">
            <img
              src="./assets/resumeicon.png"
              alt="Github Profile"
              className="scale-[44%]"
            />
            <div className="-translate-y-10 font-semibold">Resume</div>
          </div>
        </li>

        <li className="sm:col-span-2 md:col-span-1 rounded-xl shadow-highLight  border-[1px] text-[25px] text-[#70798C] text-opacity-75 border-white border-opacity-[15%] md:h-72 sm:h-auto bg-[#1b1c1e] hover:shadow-glow hover:shadow-orange-500 hover:scale-[101%] hover:ease-in-out transition duration-150 flex items-center justify-center">
          <div className="flex flex-col items-center justify-center w-full h-full">
            <img
              src="./assets/mail.png"
              alt="Github Profile"
              className="scale-[44%]"
            />
            <div className="-translate-y-10 font-semibold">Contact Me</div>
          </div>
        </li>

        <li className=" sm:col-span-2 md:col-span-1 lg:col-span-1 rounded-xl shadow-highLight text-[25px] text-[#70798C] text-opacity-75 border-[1px] border-white border-opacity-[15%] md:h-72 sm:h-auto bg-[#1b1c1e] hover:shadow-glow hover:shadow-orange-500 hover:scale-[101%] hover:ease-in-out transition duration-150 flex items-center justify-center">
          <a
            href="https://github.com/Csluu"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center w-full h-full"
          >
            <img
              src="./assets/github.png"
              alt="Github Profile"
              className="scale-[44%]"
            />
            <div className="h-0 -translate-y-10 font-semibold">Github</div>
          </a>
        </li>
      </ul>
    </section>
  );
}

export default AboutMe;
