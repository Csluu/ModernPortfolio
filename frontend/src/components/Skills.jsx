import React from "react";

function Skills() {
  return (
    <section
      id="Skills"
      className="flex flex-col basis-11/12 max-w-[1400px] mx-auto"
    >
      <header className="flex relative top-12 text-[140px] justify-center h-60 text-[#edece8] font-semibold ">
        <h1 className="flex ">Skills</h1>
      </header>
      <ul className="grid sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 w-full h-fit gap-5">
        <li className="bg-white sm:col-span-2 md:col-span-3 lg:col-span-1 rounded-2xl shadow-highLight backdrop-blur-2xl border-[1px] border-white border-opacity-[5%] h-80">
          <img
            alt="python"
            src="./assets/python.png"
            alt="LinkedIn Profile"
            className="scale-[33%]"
          ></img>
        </li>
        <li className="bg-white sm:col-span-2 md:col-span-3 lg:col-span-1 rounded-2xl shadow-highLight backdrop-blur-2xl border-[1px] border-white border-opacity-[5%] h-80">
          <img
            alt="django"
            src="./assets/django.png"
            alt="LinkedIn Profile"
            className="scale-[33%]"
          ></img>
        </li>
        <li className="bg-white sm:col-span-2 md:col-span-3 lg:col-span-1 rounded-2xl shadow-highLight backdrop-blur-2xl border-[1px] border-white border-opacity-[5%] h-80">
          <img
            alt="css"
            src="./assets/css-3.png"
            alt="LinkedIn Profile"
            className="scale-[33%]"
          ></img>
        </li>
        <li className="bg-white sm:col-span-2 md:col-span-3 lg:col-span-1 rounded-2xl shadow-highLight backdrop-blur-2xl border-[1px] border-white border-opacity-[5%] h-80">
          <img
            alt="html"
            src="./assets/html-5.png"
            alt="LinkedIn Profile"
            className="scale-[33%]"
          ></img>
        </li>
        <li className="bg-white sm:col-span-2 md:col-span-3 lg:col-span-1 rounded-2xl shadow-highLight backdrop-blur-2xl border-[1px] border-white border-opacity-[5%] h-80">
          <img
            alt="Javascript"
            src="./assets/js.png"
            alt="LinkedIn Profile"
            className="scale-[33%]"
          ></img>
        </li>
        <li className="bg-white sm:col-span-2 md:col-span-3 lg:col-span-2 rounded-2xl shadow-highLight backdrop-blur-2xl border-[1px] border-white border-opacity-[5%] h-80 flex justify-center">
          <img
            alt="Tailwind"
            src="./assets/tailwind.png"
            alt="LinkedIn Profile"
            className="scale-[50%]"
          ></img>
        </li>
        <li className="bg-white sm:col-span-2 md:col-span-3 lg:col-span-1 rounded-2xl shadow-highLight backdrop-blur-2xl border-[1px] border-white border-opacity-[5%] h-80">
          <img
            alt="PostgresSQL"
            src="./assets/PostgreSQL_logo.png"
            alt="LinkedIn Profile"
            className="scale-[33%]"
          ></img>
        </li>
        <li className="bg-white sm:col-span-2 md:col-span-3 lg:col-span-1 rounded-2xl shadow-highLight backdrop-blur-2xl border-[1px] border-white border-opacity-[5%] h-80">
          <img
            alt="React"
            src="./assets/logo512.png"
            alt="LinkedIn Profile"
            className="scale-[33%]"
          ></img>
        </li>
        <li className="bg-white sm:col-span-2 md:col-span-3 lg:col-span-1 rounded-2xl shadow-highLight backdrop-blur-2xl border-[1px] border-white border-opacity-[5%] h-80">
          <img
            alt="Git"
            src="./assets/Git-Icon-1788C.png"
            alt="LinkedIn Profile"
            className="scale-[33%]"
          ></img>
        </li>
        <li className="bg-white sm:col-span-2 md:col-span-3 lg:col-span-1 rounded-2xl shadow-highLight backdrop-blur-2xl border-[1px] border-white border-opacity-[5%] h-80">
          <img
            alt="API"
            src="./assets/api.png"
            alt="LinkedIn Profile"
            className="scale-[33%]"
          ></img>
        </li>
        <li className="bg-white sm:col-span-2 md:col-span-3 lg:col-span-1 rounded-2xl shadow-highLight backdrop-blur-2xl border-[1px] border-white border-opacity-[5%] h-80">
          <img
            alt="Scrum"
            src="./assets/scrum.png"
            alt="LinkedIn Profile"
            className="scale-[33%]"
          ></img>
        </li>
      </ul>
    </section>
  );
}

export default Skills;
