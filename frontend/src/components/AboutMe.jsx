import React from "react";

function AboutMe() {
  return (
    <section
      id="About"
      className="flex flex-col basis-11/12 max-w-[1400px] mx-auto"
    >
      <header className="flex relative top-12 text-[140px] justify-center h-60 text-[#edece8] font-semibold">
        <h1 className="flex ">About Me</h1>
      </header>
      <ul className="grid sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4  lg-grid-rows-3 w-full h-fit gap-5">
        <li className="bg-orange-200 sm:col-span-2 md:col-span-1 lg:col-span-4 rounded-xl shadow-highLight border-[1px] border-white border-opacity-[5%] h-80 flex justify-center p-5 gap-5">
          <div className="flex flex-col h-full justify-center ">
            <div className="h-48 w-48 rounded-full bg-profile-picture bg-cover bg-center "></div>
          </div>
          <div className="flex flex-col font-semibold justify-center bg-am">
            <p className="text-[35px] md:text-[18px] lg:text-[100px] text-black font-quicksand">
              Christopher Luu
            </p>
            <p className="text-[35px] md:text-[18px] lg:text-[50px] text-[#676767] relative top-[-25px]">
              Software Developer
            </p>
          </div>
        </li>

        <li className="sm:col-span-2 md:col-span-1 rounded-xl shadow-highLight  border-[1px] border-white border-opacity-[5%] md:h-80 sm:h-auto bg-white hover:shadow-glow hover:shadow-orange-200 hover:scale-[101%] hover:ease-in-out transition duration-150 flex items-center justify-center">
          <a
            href="https://www.linkedin.com/in/csluu/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-full h-full"
          >
            <img
              src="./assets/linkedin.png"
              alt="LinkedIn Profile"
              className="scale-[44%]"
            />
          </a>
        </li>

        <li className="bg-white sm:col-span-2 md:col-span-1 lg:col-span-1 rounded-xl shadow-highLight  border-[1px] border-white border-opacity-[5%] h-80 flex justify-center p-10 gap-3 hover:shadow-glow hover:shadow-orange-200 hover:scale-[101%] hover:ease-in-out transition ">
          <img src="./assets/resume.png" alt="resume" className="scale-[55%]" />
        </li>
        <li className=" sm:col-span-2 md:col-span-1 lg:col-span-2 lg:row-span-2 rounded-xl shadow-highLight  border-[1px] border-white border-opacity-[5%] md:h-160 sm:h-auto bg-white hover:shadow-glow hover:shadow-orange-200 hover:scale-[101%] hover:ease-in-out transition duration-150 p-10 flex flex-col justify-center">
          <h1 className="flex flex-col text-black text-[75px] font-semibold">
            Introduction
          </h1>

          <p className="h-fit text-[25px] m-2 text-[#676767]">
            I am a full stack developer with a passion for crafting elegant and
            efficient web solutions. My technical expertise ranges from
            front-end technologies like React to back-end frameworks such as
            Django.
          </p>
          <p className="h-fit text-[25px] m-2 text-[#676767]">
            I am well-equipped to tackle complex problems and implement robust
            solutions. I am dedicated to delivering high-quality work that meets
            both business objectives and user needs.
          </p>
        </li>
        <li className="bg-white sm:col-span-2 md:col-span-1 lg:col-span-1 rounded-xl shadow-highLight  border-[1px] border-white border-opacity-[5%] h-80 flex justify-center p-10 gap-3 hover:shadow-glow hover:shadow-orange-200 hover:scale-[101%] hover:ease-in-out transition">
          <img src="./assets/mail.png" alt="mail" className="scale-[55%]" />
        </li>
        <li className=" sm:col-span-2 md:col-span-1 lg:col-span-1 rounded-xl shadow-highLight  border-[1px] border-white border-opacity-[5%] md:h-80 sm:h-auto bg-white hover:shadow-glow hover:shadow-orange-200 hover:scale-[101%] hover:ease-in-out transition duration-150 flex items-center justify-center">
          <a
            href="https://github.com/Csluu"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-full h-full"
          >
            <img
              src="./assets/github.png"
              alt="Github Profile"
              className="scale-[49%]"
            />
          </a>
        </li>
      </ul>
    </section>
  );
}

export default AboutMe;
