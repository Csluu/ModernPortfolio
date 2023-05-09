import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

function Skills() {
  const [isPythonOpen, setPythonOpen] = useState(false);
  const [isDjangoOpen, setDjangoOpen] = useState(false);
  const [isCssOpen, setCssOpen] = useState(false);
  const [isHtmlOpen, setHtmlOpen] = useState(false);
  const [isJavaScriptOpen, setJavaScriptOpen] = useState(false);
  const [isTailwindOpen, setTailwindOpen] = useState(false);
  //   const [isPythonOpen, setPythonOpen] = useState(false);
  const [isSqlOpen, setSqlOpen] = useState(false);
  const [isReactOpen, setReactOpen] = useState(false);
  const [isGitOpen, setGitOpen] = useState(false);
  const [isApiOpen, setApiOpen] = useState(false);
  const [isScrumOpen, setScrumOpen] = useState(false);

  function ExpandableContent({ isOpen, setOpen, title, content, image }) {
    return (
      <>
        {isOpen && (
          <div
            onClick={() => {
              setOpen(!isOpen);
              if (isOpen) {
                document.body.style.overflow = "visible";
              } else {
              }
            }}
            className="fixed top-0 left-0 w-full h-full backdrop-blur-sm z-40"
          >
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.25 }}
              variants={{
                hidden: { opacity: 0, scale: 0.9 },
                visible: { opacity: 1, scale: 1.0 },
              }}
              onClick={() => setOpen(!isOpen)}
              className="flex flex-col fixed xs:top-20 ss:top-1/3 ss:left-[8.5%] sm:left-[20%] md:left-1/4 lg:left-1/3 xl:left-[37.5%] xs:mx-2 ss:h-96 xs:w-fit ss:mx-5 ss:w-[640px]"
            >
              <div className="flex justify-start flex-col p-10 w-full h-full hover:shadow-glow hover:shadow-orange-500 hover:ease-in-out transition duration-150 rounded-xl bg-[#1b1c1e] shadow-highLight border-[1px] border-white border-opacity-[15%] gap-3 backdrop-blur-2xl">
                <header className="flex justify-between place-items-center gap-5 ">
                  <h1 className="text-[#FFF5EE] font-semibold text-[50px]">
                    {title}
                  </h1>
                  <img src={image} alt={title} className="scale-[75%] h-16" />
                </header>
                <p className="text-[#70798C] text-opacity-75 text-[20px]">
                  {content}
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </>
    );
  }
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
      viewport={{ once: true, amount: 0.1 }}
    >
      <div
        id="Skills"
        className="flex flex-col basis-11/12 max-w-[1400px] xs:mx-5 lg:mx-5 xl-mx-auto h-fit gap-12 pt-10"
      >
        <header className="flex relative top-10 ss:text-[150px] xs:text-[60px] xs:place-items-end xs:h-32 sm:text-[180px] justify-center ss:h-60 text-orange-500 font-semibold">
          <h1 style={{ textShadow: "2px 4px  rgb(0 0 0 / 0.2)" }}>Skills</h1>
        </header>
        <ul className="grid xs:grid-cols-1 ss:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full h-fit gap-5">
          <motion.li
            variants={child}
            onClick={() => {
              setPythonOpen(!isPythonOpen);
              if (!isPythonOpen) {
                document.body.style.overflow = "hidden";
              } else {
              }
            }}
            className="col-span-1"
          >
            <div className="flex flex-col items-center justify-center w-full rounded-xl hover:shadow-glow hover:shadow-orange-500 hover:scale-[101%] hover:ease-in-out transition duration-150 shadow-highLight  border-[1px] text-[25px] text-[#70798C] text-opacity-75 hover:text-orange-500 border-white border-opacity-[15%] h-72 bg-[#1b1c1e]">
              <img src="./assets/python.png" alt="python" className="w-32" />
              <div className="translate-y-5 font-semibold">Python</div>
            </div>
          </motion.li>

          <motion.li
            variants={child}
            onClick={() => {
              setDjangoOpen(!isDjangoOpen);
              if (!isDjangoOpen) {
                document.body.style.overflow = "hidden";
              } else {
              }
            }}
            className="col-span-1"
          >
            <div className="flex flex-col items-center justify-center w-full rounded-xl hover:shadow-glow hover:shadow-orange-500 hover:scale-[101%] hover:ease-in-out transition duration-150 shadow-highLight  border-[1px] text-[25px] text-[#70798C] text-opacity-75 hover:text-orange-500 border-white border-opacity-[15%] h-72 bg-[#1b1c1e]">
              <img
                src="./assets/django.png"
                alt="LinkedIn Profile"
                className="w-32"
              />
              <div className="translate-y-5 font-semibold">Django</div>
            </div>
          </motion.li>
          <motion.li
            variants={child}
            onClick={() => {
              setCssOpen(!isCssOpen);
              if (!isCssOpen) {
                document.body.style.overflow = "hidden";
              } else {
              }
            }}
            className="col-span-1"
          >
            <div className="flex flex-col items-center justify-center w-full rounded-xl hover:shadow-glow hover:shadow-orange-500 hover:scale-[101%] hover:ease-in-out transition duration-150 shadow-highLight  border-[1px] text-[25px] text-[#70798C] text-opacity-75 hover:text-orange-500 border-white border-opacity-[15%] h-72 bg-[#1b1c1e]">
              <img
                src="./assets/css.png"
                alt="LinkedIn Profile"
                className="w-32"
              />
              <div className="translate-y-5 font-semibold">CSS</div>
            </div>
          </motion.li>
          <motion.li
            variants={child}
            onClick={() => {
              setHtmlOpen(!isHtmlOpen);
              if (!isHtmlOpen) {
                document.body.style.overflow = "hidden";
              } else {
              }
            }}
            className="col-span-1"
          >
            <div className="flex flex-col items-center justify-center w-full rounded-xl hover:shadow-glow hover:shadow-orange-500 hover:scale-[101%] hover:ease-in-out transition duration-150 shadow-highLight  border-[1px] text-[25px] text-[#70798C] text-opacity-75 hover:text-orange-500 border-white border-opacity-[15%] h-72 bg-[#1b1c1e]">
              <img
                src="./assets/html.png"
                alt="LinkedIn Profile"
                className="w-32"
              />
              <div className="translate-y-5 font-semibold">HTML</div>
            </div>
          </motion.li>
          <motion.li
            variants={child}
            onClick={() => {
              setJavaScriptOpen(!isJavaScriptOpen);
              if (!isJavaScriptOpen) {
                document.body.style.overflow = "hidden";
              } else {
              }
            }}
            className="col-span-1"
          >
            <div className="flex flex-col items-center justify-center w-full rounded-xl hover:shadow-glow hover:shadow-orange-500 hover:scale-[101%] hover:ease-in-out transition duration-150 shadow-highLight  border-[1px] text-[25px] text-[#70798C] text-opacity-75 hover:text-orange-500 border-white border-opacity-[15%] h-72 bg-[#1b1c1e]">
              <img
                src="./assets/javascript.png"
                alt="LinkedIn Profile"
                className="w-32"
              />
              <div className="translate-y-5 font-semibold">Javascript</div>
            </div>
          </motion.li>
          <motion.li
            variants={child}
            onClick={() => {
              setTailwindOpen(!isTailwindOpen);
              if (!isTailwindOpen) {
                document.body.style.overflow = "hidden";
              } else {
              }
            }}
            className="col-span-1"
          >
            <div className="flex flex-col items-center justify-center w-full rounded-xl hover:shadow-glow hover:shadow-orange-500 hover:scale-[101%] hover:ease-in-out transition duration-150 shadow-highLight  border-[1px] text-[25px] text-[#70798C] text-opacity-75 hover:text-orange-500 border-white border-opacity-[15%] h-72 bg-[#1b1c1e]">
              <img
                src="./assets/tailwind.png"
                alt="LinkedIn Profile"
                className="w-32"
              />
              <div className="translate-y-5 font-semibold">Tailwind</div>
            </div>
          </motion.li>

          <motion.li
            variants={child}
            onClick={() => {
              setPythonOpen(!isPythonOpen);
              if (!isPythonOpen) {
                document.body.style.overflow = "hidden";
              } else {
              }
            }}
            className="col-span-1"
          >
            <div className="flex flex-col items-center justify-center w-full rounded-xl hover:shadow-glow hover:shadow-orange-500 hover:scale-[101%] hover:ease-in-out transition duration-150 shadow-highLight  border-[1px] text-[25px] text-[#70798C] text-opacity-75 hover:text-orange-500 border-white border-opacity-[15%] h-72 bg-[#1b1c1e]">
              <img
                src="./assets/django.png"
                alt="LinkedIn Profile"
                className="w-32"
              />
              <div className="translate-y-5 font-semibold">Django</div>
            </div>
          </motion.li>
          <motion.li
            variants={child}
            onClick={() => {
              setSqlOpen(!isSqlOpen);
              if (!isSqlOpen) {
                document.body.style.overflow = "hidden";
              } else {
              }
            }}
            className="col-span-1"
          >
            <div className="flex flex-col items-center justify-center w-full rounded-xl hover:shadow-glow hover:shadow-orange-500 hover:scale-[101%] hover:ease-in-out transition duration-150 shadow-highLight  border-[1px] text-[25px] text-[#70798C] text-opacity-75 hover:text-orange-500 border-white border-opacity-[15%] h-72 bg-[#1b1c1e]">
              <img
                src="./assets/PostgreSQL_logo.png"
                alt="LinkedIn Profile"
                className="w-32"
              />
              <div className="translate-y-5 font-semibold">SQL</div>
            </div>
          </motion.li>
          <motion.li
            variants={child}
            onClick={() => {
              setReactOpen(!isReactOpen);
              if (!isReactOpen) {
                document.body.style.overflow = "hidden";
              } else {
              }
            }}
            className="col-span-1"
          >
            <div className="flex flex-col items-center justify-center w-full rounded-xl hover:shadow-glow hover:shadow-orange-500 hover:scale-[101%] hover:ease-in-out transition duration-150 shadow-highLight  border-[1px] text-[25px] text-[#70798C] text-opacity-75 hover:text-orange-500 border-white border-opacity-[15%] h-72 bg-[#1b1c1e]">
              <img
                src="./assets/react.png"
                alt="LinkedIn Profile"
                className="w-32"
              />
              <div className="translate-y-5 font-semibold">React</div>
            </div>
          </motion.li>
          <motion.li
            variants={child}
            onClick={() => {
              setGitOpen(!isGitOpen);
              if (!isGitOpen) {
                document.body.style.overflow = "hidden";
              } else {
              }
            }}
            className="col-span-1"
          >
            <div className="flex flex-col items-center justify-center w-full rounded-xl hover:shadow-glow hover:shadow-orange-500 hover:scale-[101%] hover:ease-in-out transition duration-150 shadow-highLight  border-[1px] text-[25px] text-[#70798C] text-opacity-75 hover:text-orange-500 border-white border-opacity-[15%] h-72 bg-[#1b1c1e]">
              <img
                src="./assets/Git.png"
                alt="LinkedIn Profile"
                className="w-32"
              />
              <div className="translate-y-5 font-semibold">Git</div>
            </div>
          </motion.li>
          <motion.li
            variants={child}
            onClick={() => {
              setApiOpen(!isApiOpen);
              if (!isApiOpen) {
                document.body.style.overflow = "hidden";
              } else {
              }
            }}
            className="col-span-1"
          >
            <div className="flex flex-col items-center justify-center w-full rounded-xl hover:shadow-glow hover:shadow-orange-500 hover:scale-[101%] hover:ease-in-out transition duration-150 shadow-highLight  border-[1px] text-[25px] text-[#70798C] text-opacity-75 hover:text-orange-500 border-white border-opacity-[15%] h-72 bg-[#1b1c1e]">
              <img
                src="./assets/api.png"
                alt="LinkedIn Profile"
                className="w-32"
              />
              <div className="translate-y-5 font-semibold">Api</div>
            </div>
          </motion.li>
          <motion.li
            variants={child}
            onClick={() => {
              setScrumOpen(!isScrumOpen);
              if (!isScrumOpen) {
                document.body.style.overflow = "hidden";
              } else {
              }
            }}
            className="col-span-1"
          >
            <div className="flex flex-col items-center justify-center w-full rounded-xl hover:shadow-glow hover:shadow-orange-500 hover:scale-[101%] hover:ease-in-out transition duration-150 shadow-highLight  border-[1px] text-[25px] text-[#70798C] text-opacity-75 hover:text-orange-500 border-white border-opacity-[15%] h-72 bg-[#1b1c1e]">
              <img
                src="./assets/scrum.png"
                alt="LinkedIn Profile"
                className="w-32"
              />
              <div className="translate-y-5 font-semibold">Scrum</div>
            </div>
          </motion.li>
          <ExpandableContent
            isOpen={isPythonOpen}
            setOpen={setPythonOpen}
            title="Python"
            content="I have been programming in Python for about a year now, and I have completed several projects using the language. Using python with additional to Django I have completed several projects using the language; A store website, Linkedin for developers, spotify room hosting, and a stock screener."
            image="./assets/python.png"
          />
          <ExpandableContent
            isOpen={isDjangoOpen}
            setOpen={setDjangoOpen}
            title="Django"
            content="I have been programming in Python for about a year now, and I have completed several projects using the language. Using python with additional to Django I have completed several projects using the language; A store website, Linkedin for developers, spotify room hosting, and a stock screener."
            image="./assets/django.png"
          />
          <ExpandableContent
            isOpen={isCssOpen}
            setOpen={setCssOpen}
            title="CSS"
            content="I have been programming in Python for about a year now, and I have completed several projects using the language. Using python with additional to Django I have completed several projects using the language; A store website, Linkedin for developers, spotify room hosting, and a stock screener."
            image="./assets/css.png"
          />
          <ExpandableContent
            isOpen={isHtmlOpen}
            setOpen={setHtmlOpen}
            title="HTML"
            content="I have been programming in Python for about a year now, and I have completed several projects using the language. Using python with additional to Django I have completed several projects using the language; A store website, Linkedin for developers, spotify room hosting, and a stock screener."
            image="./assets/html.png"
          />
          <ExpandableContent
            isOpen={isJavaScriptOpen}
            setOpen={setJavaScriptOpen}
            title="Javascript"
            content="I have been programming in Python for about a year now, and I have completed several projects using the language. Using python with additional to Django I have completed several projects using the language; A store website, Linkedin for developers, spotify room hosting, and a stock screener."
            image="./assets/javascript.png"
          />
          <ExpandableContent
            isOpen={isTailwindOpen}
            setOpen={setTailwindOpen}
            title="Tailwind"
            content="I have been programming in Python for about a year now, and I have completed several projects using the language. Using python with additional to Django I have completed several projects using the language; A store website, Linkedin for developers, spotify room hosting, and a stock screener."
            image="./assets/tailwind.png"
          />
          <ExpandableContent
            isOpen={isSqlOpen}
            setOpen={setSqlOpen}
            title="Postgres"
            content="I have been programming in Python for about a year now, and I have completed several projects using the language. Using python with additional to Django I have completed several projects using the language; A store website, Linkedin for developers, spotify room hosting, and a stock screener."
            image="./assets/PostgreSQL_logo.png"
          />
          <ExpandableContent
            isOpen={isReactOpen}
            setOpen={setReactOpen}
            title="React"
            content="I have been programming in Python for about a year now, and I have completed several projects using the language. Using python with additional to Django I have completed several projects using the language; A store website, Linkedin for developers, spotify room hosting, and a stock screener."
            image="./assets/react.png"
          />
          <ExpandableContent
            isOpen={isGitOpen}
            setOpen={setGitOpen}
            title="Git"
            content="I have been programming in Python for about a year now, and I have completed several projects using the language. Using python with additional to Django I have completed several projects using the language; A store website, Linkedin for developers, spotify room hosting, and a stock screener."
            image="./assets/Git.png"
          />
          <ExpandableContent
            isOpen={isApiOpen}
            setOpen={setApiOpen}
            title="Api"
            content="I have been programming in Python for about a year now, and I have completed several projects using the language. Using python with additional to Django I have completed several projects using the language; A store website, Linkedin for developers, spotify room hosting, and a stock screener."
            image="./assets/api.png"
          />
          <ExpandableContent
            isOpen={isScrumOpen}
            setOpen={setScrumOpen}
            title="Scrum"
            content="I have been programming in Python for about a year now, and I have completed several projects using the language. Using python with additional to Django I have completed several projects using the language; A store website, Linkedin for developers, spotify room hosting, and a stock screener."
            image="./assets/scrum.png"
          />
        </ul>
      </div>
    </motion.section>
  );
}

export default Skills;
