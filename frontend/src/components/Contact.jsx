import React from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";

function Contact() {
  return (
    <section
      id="Contact"
      className="flex flex-col basis-11/12 max-w-[1400px] mx-auto"
    >
      <header className="flex relative top-12 text-[140px] justify-center h-60 text-orange-500 font-semibold">
        <h1 style={{ textShadow: "2px 4px  rgb(0 0 0 / 0.2)" }}>Contact</h1>
      </header>
      <ul className="grid sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-6 rows-2 w-full h-fit gap-5">
        <li className="bg-[#1b1c1e] sm:col-span-2 md:col-span-3 lg:col-span-3 lg:row-span-1 rounded-2xl shadow-highLight border-[1px] border-white border-opacity-[15%] h-[450px]">
          <h1 className="text-[#FFF5EE]">Get in Touch</h1>
        </li>
        <li className="bg-[#1b1c1e] sm:col-span-2 md:col-span-3 lg:col-span-3 lg:row-span-1 rounded-2xl shadow-highLight border-[1px] border-white border-opacity-[15%] h-[450px]"></li>
        <li className="bg-[#1b1c1e] sm:col-span-2 md:col-span-2 rounded-2xl shadow-highLight border-[1px] border-white border-opacity-[15%] h-96 flex flex-col justify-end p-10">
          <h1 className="h-fit text-[35px] text-[#FFF5EE] m-2">
            Front-end Development
          </h1>
          <p className="h-fit text-[25px] m-2 text-[#676767]">
            Experienced designer & visual developer. I love using tools like
            React and Tailwind.
          </p>
        </li>
        <li className="bg-[#1b1c1e] sm:col-span-2 md:col-span-2 rounded-2xl shadow-highLight border-[1px] border-white border-opacity-[15%] h-96 flex flex-col justify-end p-10">
          <h1 className="text-[#FFF5EE] h-fit text-[35px] m-2">
            Back-end Development
          </h1>
          <p className="h-fit text-[25px] m-2 text-[#676767]">
            Experienced designer & developer. I love using tools like Django and
            SQL.
          </p>
        </li>
        <li className="bg-[#1b1c1e] sm:col-span-2 md:col-span-2 rounded-2xl shadow-highLight border-[1px] border-white border-opacity-[15%] h-96 flex flex-col justify-end p-10">
          <h1 className="text-[#FFF5EE] h-fit text-[35px] m-2">Data Science</h1>
          <p className="h-fit text-[25px] m-2 text-[#676767]">
            Experienced designer & visual developer. I love using tools like
            React and Tailwind.
          </p>
        </li>
      </ul>
    </section>
  );
}

export default Contact;
