import React from "react";

function Contact() {
  return (
    <section
      id="Contact"
      className="flex flex-col basis-11/12 max-w-[1400px] mx-auto"
    >
      <header className="flex relative top-12 text-[140px] justify-center h-60 text-[#edece8] font-semibold ">
        <h1 className="flex ">Contact</h1>
      </header>
      <ul className="grid sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 w-full h-fit gap-5">
        <li className="bg-white sm:col-span-2 md:col-span-3 lg:col-span-2 rounded-2xl shadow-highLight backdrop-blur-2xl border-[1px] border-white border-opacity-[5%] h-80">
          <div className="bg-cover bg-hero-pattern w-full h-full bg-center bg-origin-padding rounded-2xl "></div>
        </li>
        <li className="bg-white sm:col-span-2 md:col-span-1 lg:col-span-2 rounded-2xl shadow-highLight backdrop-blur-2xl border-[1px] border-white border-opacity-[5%] h-80 flex flex-col justify-end p-10 gap-3">
          <h1 className="text-black h-fit text-[70px] lg:text-[70px] md:text-4xl m-2">
            Christopher Luu
          </h1>
          <p className="h-fit text-[35px] md:text-[18px] lg:text-[35px] text-[#676767] m-2">
            Full Stack Developer
          </p>
        </li>
        <li className="bg-white sm:col-span-2 md:col-span-2 rounded-2xl shadow-highLight backdrop-blur-2xl border-[1px] border-white border-opacity-[5%] h-80 flex flex-col justify-end p-10">
          <h1 className="text-black h-fit text-[35px] m-2">About Me</h1>
          <p className="h-fit text-[18px] m-2 text-[#676767]">
            I am a full stack developer with expertise in React and Django. I am
            committed to delivering high-quality web solutions that meet
            business objectives and user needs
          </p>
        </li>
        <li className=" sm:col-span-2 md:col-span-2 rounded-2xl shadow-highLight backdrop-blur-2xl border-[1px] border-white border-opacity-[5%] md:h-80 sm:h-auto bg-[#5285ce] hover:shadow-glow hover:shadow-orange-200 hover:scale-[101%] hover:ease-in-out transition duration-150 flex items-center justify-center">
          <a
            href="https://www.linkedin.com/in/csluu/"
            target="_blank"
            rel="noopener noreferrer"
            className="h-full flex items-center justify-center "
          >
            <img
              src="./assets/linkedin.png"
              alt="LinkedIn Profile"
              className="scale-[25%]"
            />
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Contact;
