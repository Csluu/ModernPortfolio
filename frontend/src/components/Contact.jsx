import React from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";

const Contact = () => {
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };

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
        id="Contact"
        className="flex flex-col basis-11/12 max-w-[1400px] sm:mx-5 lg:mx-5 xl-mx-auto h-fit gap-12"
      >
        <motion.header
          variants={child}
          className="flex relative top-10 ss:text-[150px] xs:text-[60px] xs:place-items-end xs:h-32 sm:text-[180px] justify-center ss:h-60 text-orange-500 font-semibold"
        >
          <h1 style={{ textShadow: "2px 4px  rgb(0 0 0 /0.2)" }}>Contact</h1>
        </motion.header>
        <ul className="grid sm:grid-cols-2  md:grid-cols-4 lg:grid-cols-6 rows-2 w-full h-fit gap-5">
          <motion.li
            variants={child}
            className="bg-[#1b1c1e] sm:col-span-1 md:col-span-2 lg:col-span-3 lg:row-span-1 rounded-2xl shadow-highLight border-[1px] border-white border-opacity-[15%] h-[450px] justify-center flex flex-col p-10 gap-10"
          >
            <h1 className="text-[#FFF5EE] font-semibold xs:text-[40px] sm:text-[75px]">
              Get in Touch
            </h1>
            <p className="text-[#70798C] text-opacity-75 text-[25px]">
              Feel free to contact me
            </p>
            <p className="text-[#70798C] text-opacity-75 text-[25px]">
              I'm always open to collaborate on a project or hear about an
              opportunity!
            </p>
          </motion.li>
          <motion.li
            variants={child}
            className="bg-[#1b1c1e] sm:col-span-1 md:col-span-2 lg:col-span-3 lg:row-span-1 rounded-2xl shadow-highLight border-[1px] border-white border-opacity-[15%] h-[450px]"
          >
            <form
              target="_blank"
              onSubmit={onSubmit}
              action="https://formsubmit.co/"
              method="POST"
              className="p-10 h-full flex flex-col justify-center gap-1"
            >
              <input
                className="w-full bg-[#70798C] bg-opacity-50 placeholder:italic placeholder:text-[#D2D4C8] placeholder:text-opacity-50 font-semibold placeholder-opaque-black p-3 rounded-lg focus:outline-none"
                type="text"
                placeholder="NAME"
                {...register("name", {
                  required: true,
                  maxLength: 100,
                })}
              />
              {errors.name && (
                <p>
                  {errors.name.type === "required" && "This field is required."}
                  {errors.name.type === "maxLength" &&
                    "Max length is 100 char."}
                </p>
              )}

              <input
                className="w-full bg-[#70798C] bg-opacity-50 placeholder:italic placeholder:text-[#D2D4C8] placeholder:text-opacity-50 font-semibold placeholder-opaque-black p-3 mt-5 rounded-lg focus:outline-none"
                type="text"
                placeholder="EMAIL"
                {...register("email", {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                })}
              />
              {errors.email && (
                <p>
                  {errors.email.type === "required" &&
                    "This field is required."}
                  {errors.email.type === "pattern" && "Invalid email address."}
                </p>
              )}

              <textarea
                className="w-full bg-[#70798C] bg-opacity-50 placeholder:italic placeholder:text-[#D2D4C8] placeholder:text-opacity-50 font-semibold placeholder-opaque-black p-3 mt-5 rounded-lg focus:outline-none"
                name="message"
                placeholder="MESSAGE"
                rows="4"
                cols="50"
                {...register("message", {
                  required: true,
                  maxLength: 2000,
                })}
              />
              {errors.message && (
                <p>
                  {errors.message.type === "required" &&
                    "This field is required."}
                  {errors.message.type === "maxLength" &&
                    "Max length is 2000 char."}
                </p>
              )}

              <button
                className="p-3 font-semibold mt-5 bg-orange-500 rounded-lg"
                type="submit"
              >
                <h1>Submit</h1>
              </button>
            </form>
          </motion.li>
          <motion.li
            variants={child}
            className="bg-[#1b1c1e] sm:col-span-1 md:col-span-2 rounded-2xl shadow-highLight border-[1px] border-white border-opacity-[15%] h-96 flex flex-col justify-center p-10"
          >
            <h1 className="h-fit text-[35px] text-[#FFF5EE] m-2">
              Front-end Development
            </h1>
            <p className="h-fit text-[25px] m-2 text-[#70798C] text-opacity-75">
              Experienced designer & visual developer. I love using tools like
              React and Tailwind.
            </p>
          </motion.li>
          <motion.li
            variants={child}
            className="bg-[#1b1c1e] sm:col-span-1 md:col-span-2 rounded-2xl shadow-highLight border-[1px] border-white border-opacity-[15%] h-96 flex flex-col justify-center p-10"
          >
            <h1 className="text-[#FFF5EE] h-fit text-[35px] m-2">
              Back-end Development
            </h1>
            <p className="h-fit text-[25px] m-2 text-[#70798C] text-opacity-75">
              Experienced designer & developer. I love using tools like Django
              and SQL.
            </p>
          </motion.li>
          <motion.li
            variants={child}
            className="bg-[#1b1c1e] sm:col-span-1 md:col-span-2 rounded-2xl shadow-highLight border-[1px] border-white border-opacity-[15%] h-96 flex flex-col justify-center p-10"
          >
            <h1 className="text-[#FFF5EE] h-fit text-[35px] m-2">Blockchain</h1>
            <p className="h-fit text-[25px] m-2 text-[#70798C] text-opacity-75">
              Experienced designer & visual developer. I love using tools like
              React and Tailwind.
            </p>
          </motion.li>
        </ul>
      </div>
    </motion.section>
  );
};

export default Contact;
