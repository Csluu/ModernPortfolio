import React from "react";
import { motion } from "framer-motion";

function AboutMe() {
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
        id="About"
        className="flex flex-col basis-11/12 max-w-[1400px] xs:mx-5 h-fit xl:h-screen gap-12"
      >
        <motion.header
          variants={child}
          className="flex relative top-10 ss:text-[150px] xs:text-[60px] xs:place-items-end xs:h-32 sm:text-[180px] justify-center ss:h-[260px] text-orange-500 font-semibold"
        >
          <h1 style={{ textShadow: "2px 4px  rgb(0 0 0 /0.2)" }}>About Me</h1>
        </motion.header>
        <ul className="grid sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4  lg-grid-rows-3 w-full h-fit gap-5">
          <motion.li
            variants={child}
            className="bg-orange-500 sm:col-span-1 md:col-span-1 lg:col-span-1 rounded-xl shadow-highLight border-[1px] border-white border-opacity-[15%] h-72 flex justify-center gap-5"
          >
            <div className="h-full w-full rounded-xl bg-profile-picture border-[1px] border-white border-opacity-[15%] bg-cover bg-center"></div>
          </motion.li>
          <motion.li
            variants={child}
            className="bg-orange-500 sm:col-span-1 md:col-span-2 lg:col-span-3 rounded-xl shadow-highLight border-[1px] border-white border-opacity-[15%] h-72 flex justify-center p-5 gap-5"
          >
            <div className="flex flex-col font-semibold xs:justify-evenly justify-center bg-am">
              <p className="text-[35px] ss:text-[80px] sm:text-[55px] md:text-[80px] lg:text-[120px] text-[#1b1c1e] font-quicksand">
                Christopher Luu
              </p>
              <p className="text-[35px] xs:text-[25px] ss:text-[50px] sm:text-[35px] md:text-[50px] lg:text-[60px] text-[#1b1c1e] relative top-[-25px]">
                Software Developer
              </p>
            </div>
          </motion.li>
          <motion.li
            variants={child}
            className=" sm:col-span-2 md:col-span-2 md:row-span-2 lg:col-span-2 lg:row-span-2 rounded-xl shadow-highLight  border-[1px] border-white border-opacity-[15%] md:h-auto sm:h-auto bg-[#1b1c1e]  p-10 flex flex-col justify-center"
          >
            <h1 className="flex flex-col text-[#FFF5EE] xs:text-[40px] ss:text-[75px] lg:text-[75px] font-semibold">
              Introduction
            </h1>

            <p className="h-fit xs:text-[20px] ss:text-[25px] m-2 text-[#70798C] text-opacity-75">
              I am a full stack developer with a passion for crafting elegant
              and efficient web solutions. My technical expertise ranges from
              front-end technologies like React to back-end frameworks such as
              Django.
            </p>
            <p className="h-fit xs:text-[20px] ss:text-[25px]  m-2 text-[#70798C] text-opacity-75">
              I am well-equipped to tackle complex problems and implement robust
              solutions. I am dedicated to delivering high-quality work that
              meets both business objectives and user needs.
            </p>
          </motion.li>
          <motion.li variants={child}>
            <div className="col-span-1 rounded-xl shadow-highLight  border-[1px] text-[25px] text-[#70798C] text-opacity-75 border-white border-opacity-[15%] md:h-72 sm:h-auto lg:h-auto bg-[#1b1c1e] hover:shadow-glow hover:shadow-orange-500 hover:scale-[101%] hover:ease-in-out duration-150 flex items-center justify-center">
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
            </div>
          </motion.li>

          <motion.li variants={child}>
            <div className="col-span-1 rounded-xl shadow-highLight  border-[1px] text-[25px] text-[#70798C] text-opacity-75 border-white border-opacity-[15%] md:h-72 sm:h-auto lg:h-auto bg-[#1b1c1e] hover:shadow-glow hover:shadow-orange-500 hover:scale-[101%] hover:ease-in-out duration-150 flex items-center justify-center">
              <div className="flex flex-col items-center justify-center w-full h-full">
                <img
                  src="./assets/resumeicon.png"
                  alt="Github Profile"
                  className="scale-[44%]"
                />
                <div className="-translate-y-10 font-semibold">Resume</div>
              </div>
            </div>
          </motion.li>

          <motion.li variants={child}>
            <div className="col-span-1 rounded-xl shadow-highLight  border-[1px] text-[25px] text-[#70798C] text-opacity-75 border-white border-opacity-[15%] md:h-72 sm:h-auto lg:h-auto bg-[#1b1c1e] hover:shadow-glow hover:shadow-orange-500 hover:scale-[101%] hover:ease-in-out transition duration-150 flex items-center justify-center">
              <div className="flex flex-col items-center justify-center w-full h-full">
                <img
                  src="./assets/mail.png"
                  alt="Github Profile"
                  className="scale-[44%]"
                />
                <div className="-translate-y-10 font-semibold">Contact Me</div>
              </div>
            </div>
          </motion.li>

          <motion.li variants={child}>
            <div className="col-span-1 rounded-xl shadow-highLight text-[25px] text-[#70798C] text-opacity-75 border-[1px] border-white border-opacity-[15%] md:h-72 sm:h-auto lg:h-auto bg-[#1b1c1e] hover:shadow-glow hover:shadow-orange-500 hover:scale-[101%] hover:ease-in-out transition duration-150 flex items-center justify-center">
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
                <div className="-translate-y-10 font-semibold">Github</div>
              </a>
            </div>
          </motion.li>
        </ul>
      </div>
    </motion.section>
  );
}

export default AboutMe;
