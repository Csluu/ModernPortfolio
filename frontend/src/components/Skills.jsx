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
  function ExpandableContent({ isOpen, setOpen, title, content }) {
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
              onClick={() => setOpen(!isOpen)}
              className="flex flex-col fixed top-1/3 left-[37.5%] p-10 h-96 w-[640px] bg-black rounded-2xl justify-start shadow-highLight backdrop-blur-2xl border-[1px] border-white border-opacity-[15%] hover:shadow-glow hover:shadow-orange-500 hover:scale-[101%] hover:ease-in-out transition duration-150"
            >
              <h1 className="text-[#fbf9f3] text-[70px]">{title}</h1>
              <p className="text-[#676767]">{content}</p>
            </motion.div>
          </div>
        )}
      </>
    );
  }

  return (
    <section
      id="Skills"
      className="flex flex-col basis-11/12 max-w-[1400px] mx-auto"
    >
      <header className="flex relative top-12 text-[140px] justify-center h-60 text-orange-500 font-semibold">
        <h1 style={{ textShadow: "2px 4px  rgb(0 0 0 / 0.2)" }}>Skills</h1>
      </header>
      <motion.ul className="grid sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 w-full h-fit gap-5">
        <motion.li
          onClick={() => {
            setPythonOpen(!isPythonOpen);
            if (!isPythonOpen) {
              document.body.style.overflow = "hidden";
            } else {
            }
          }}
          className="bg-[#1b1c1e] sm:col-span-2 md:col-span-3 lg:col-span-1 rounded-2xl shadow-highLight backdrop-blur-2xl border-[1px] border-white border-opacity-[15%] h-80 hover:shadow-glow hover:shadow-orange-500 hover:scale-[101%] hover:ease-in-out transition duration-150"
        >
          <img
            alt="python"
            src="./assets/python.png"
            className="scale-[33%] "
          ></img>
        </motion.li>

        <motion.li
          onClick={() => {
            setDjangoOpen(!isDjangoOpen);
            if (!isDjangoOpen) {
              document.body.style.overflow = "hidden";
            } else {
            }
          }}
          className="bg-[#1b1c1e] sm:col-span-2 md:col-span-3 lg:col-span-1 rounded-2xl shadow-highLight backdrop-blur-2xl border-[1px] border-white border-opacity-[15%] h-80 hover:shadow-glow hover:shadow-orange-500 hover:scale-[101%] hover:ease-in-out transition duration-150"
        >
          <img
            alt="django"
            src="./assets/django.png"
            className="scale-[33%]"
          ></img>
        </motion.li>
        <motion.li
          onClick={() => {
            setCssOpen(!isCssOpen);
            if (!isCssOpen) {
              document.body.style.overflow = "hidden";
            } else {
            }
          }}
          className="bg-[#1b1c1e] sm:col-span-2 md:col-span-3 lg:col-span-1 rounded-2xl shadow-highLight backdrop-blur-2xl border-[1px] border-white border-opacity-[15%] h-80 hover:shadow-glow hover:shadow-orange-500 hover:scale-[101%] hover:ease-in-out transition duration-150"
        >
          <img alt="css" src="./assets/css-3.png" className="scale-[33%]"></img>
        </motion.li>
        <motion.li
          onClick={() => {
            setHtmlOpen(!isHtmlOpen);
            if (!isHtmlOpen) {
              document.body.style.overflow = "hidden";
            } else {
            }
          }}
          className="bg-[#1b1c1e] sm:col-span-2 md:col-span-3 lg:col-span-1 rounded-2xl shadow-highLight backdrop-blur-2xl border-[1px] border-white border-opacity-[15%] h-80 hover:shadow-glow hover:shadow-orange-500 hover:scale-[101%] hover:ease-in-out transition duration-150"
        >
          <img
            alt="html"
            src="./assets/html-5.png"
            className="scale-[33%]"
          ></img>
        </motion.li>
        <motion.li
          onClick={() => {
            setJavaScriptOpen(!isJavaScriptOpen);
            if (!isJavaScriptOpen) {
              document.body.style.overflow = "hidden";
            } else {
            }
          }}
          className="bg-[#1b1c1e] sm:col-span-2 md:col-span-3 lg:col-span-1 rounded-2xl shadow-highLight backdrop-blur-2xl border-[1px] border-white border-opacity-[15%] h-80 hover:shadow-glow hover:shadow-orange-500 hover:scale-[101%] hover:ease-in-out transition duration-150"
        >
          <img
            alt="Javascript"
            src="./assets/js.png"
            className="scale-[33%]"
          ></img>
        </motion.li>
        <motion.li
          onClick={() => {
            setTailwindOpen(!isTailwindOpen);
            if (!isTailwindOpen) {
              document.body.style.overflow = "hidden";
            } else {
            }
          }}
          className="bg-[#1b1c1e] sm:col-span-2 md:col-span-3 lg:col-span-1 rounded-2xl shadow-highLight backdrop-blur-2xl border-[1px] border-white border-opacity-[15%] h-80 hover:shadow-glow hover:shadow-orange-500 hover:scale-[101%] hover:ease-in-out transition duration-150 flex justify-center"
        >
          <img
            alt="Tailwind"
            src="./assets/tailwind.png"
            className="scale-[50%]"
          ></img>
        </motion.li>

        <motion.li
          onClick={() => {
            setPythonOpen(!isPythonOpen);
            if (!isPythonOpen) {
              document.body.style.overflow = "hidden";
            } else {
            }
          }}
          className="bg-[#1b1c1e] sm:col-span-2 md:col-span-3 lg:col-span-1 rounded-2xl shadow-highLight backdrop-blur-2xl border-[1px] border-white border-opacity-[15%] h-80 hover:shadow-glow hover:shadow-orange-500 hover:scale-[101%] hover:ease-in-out transition duration-150 flex justify-center"
        >
          <img
            alt="Tailwind"
            src="./assets/tailwind.png"
            className="scale-[50%]"
          ></img>
        </motion.li>
        <motion.li
          onClick={() => {
            setSqlOpen(!isSqlOpen);
            if (!isSqlOpen) {
              document.body.style.overflow = "hidden";
            } else {
            }
          }}
          className="bg-[#1b1c1e] sm:col-span-2 md:col-span-3 lg:col-span-1 rounded-2xl shadow-highLight backdrop-blur-2xl border-[1px] border-white border-opacity-[15%] h-80 hover:shadow-glow hover:shadow-orange-500 hover:scale-[101%] hover:ease-in-out transition duration-150"
        >
          <img
            alt="PostgresSQL"
            src="./assets/PostgreSQL_logo.png"
            className="scale-[33%]"
          ></img>
        </motion.li>
        <motion.li
          onClick={() => {
            setReactOpen(!isReactOpen);
            if (!isReactOpen) {
              document.body.style.overflow = "hidden";
            } else {
            }
          }}
          className="bg-[#1b1c1e] sm:col-span-2 md:col-span-3 lg:col-span-1 rounded-2xl shadow-highLight backdrop-blur-2xl border-[1px] border-white border-opacity-[15%] h-80 hover:shadow-glow hover:shadow-orange-500 hover:scale-[101%] hover:ease-in-out transition duration-150"
        >
          <img
            alt="React"
            src="./assets/logo512.png"
            className="scale-[33%]"
          ></img>
        </motion.li>
        <motion.li
          onClick={() => {
            setGitOpen(!isGitOpen);
            if (!isGitOpen) {
              document.body.style.overflow = "hidden";
            } else {
            }
          }}
          className="bg-[#1b1c1e] sm:col-span-2 md:col-span-3 lg:col-span-1 rounded-2xl shadow-highLight backdrop-blur-2xl border-[1px] border-white border-opacity-[15%] h-80 hover:shadow-glow hover:shadow-orange-500 hover:scale-[101%] hover:ease-in-out transition duration-150"
        >
          <img
            alt="Git"
            src="./assets/Git-Icon-1788C.png"
            className="scale-[33%]"
          ></img>
        </motion.li>
        <motion.li
          onClick={() => {
            setApiOpen(!isApiOpen);
            if (!isApiOpen) {
              document.body.style.overflow = "hidden";
            } else {
            }
          }}
          className="bg-[#1b1c1e] sm:col-span-2 md:col-span-3 lg:col-span-1 rounded-2xl shadow-highLight backdrop-blur-2xl border-[1px] border-white border-opacity-[15%] h-80 hover:shadow-glow hover:shadow-orange-500 hover:scale-[101%] hover:ease-in-out transition duration-150"
        >
          <img alt="API" src="./assets/api.png" className="scale-[33%]"></img>
        </motion.li>
        <motion.li
          onClick={() => {
            setScrumOpen(!isScrumOpen);
            if (!isScrumOpen) {
              document.body.style.overflow = "hidden";
            } else {
            }
          }}
          className="bg-[#1b1c1e] sm:col-span-2 md:col-span-3 lg:col-span-1 rounded-2xl shadow-highLight backdrop-blur-2xl border-[1px] border-white border-opacity-[15%] h-80 hover:shadow-glow hover:shadow-orange-500 hover:scale-[101%] hover:ease-in-out transition duration-150"
        >
          <img
            alt="Scrum"
            src="./assets/scrum.png"
            className="scale-[33%]"
          ></img>
        </motion.li>
        <ExpandableContent
          isOpen={isPythonOpen}
          setOpen={setPythonOpen}
          title="Python"
          content="I have been programming in Python for about a year now, and I have completed several projects using the language. Using python with additional to Django I have completed several projects using the langauge; A store website, Linkedin for developers, spotify room hosting, and a stock screener."
        />
        <ExpandableContent
          isOpen={isDjangoOpen}
          setOpen={setDjangoOpen}
          title="Django"
          content="I have been programming in Python for about a year now, and I have completed several projects using the language. Using python with additional to Django I have completed several projects using the langauge; A store website, Linkedin for developers, spotify room hosting, and a stock screener."
        />
        <ExpandableContent
          isOpen={isCssOpen}
          setOpen={setCssOpen}
          title="CSS"
          content="I have been programming in Python for about a year now, and I have completed several projects using the language. Using python with additional to Django I have completed several projects using the langauge; A store website, Linkedin for developers, spotify room hosting, and a stock screener."
        />
        <ExpandableContent
          isOpen={isHtmlOpen}
          setOpen={setHtmlOpen}
          title="HTML"
          content="I have been programming in Python for about a year now, and I have completed several projects using the language. Using python with additional to Django I have completed several projects using the langauge; A store website, Linkedin for developers, spotify room hosting, and a stock screener."
        />
        <ExpandableContent
          isOpen={isJavaScriptOpen}
          setOpen={setJavaScriptOpen}
          title="Javascript"
          content="I have been programming in Python for about a year now, and I have completed several projects using the language. Using python with additional to Django I have completed several projects using the langauge; A store website, Linkedin for developers, spotify room hosting, and a stock screener."
        />
        <ExpandableContent
          isOpen={isTailwindOpen}
          setOpen={setTailwindOpen}
          title="Tailwind"
          content="I have been programming in Python for about a year now, and I have completed several projects using the language. Using python with additional to Django I have completed several projects using the langauge; A store website, Linkedin for developers, spotify room hosting, and a stock screener."
        />
        <ExpandableContent
          isOpen={isSqlOpen}
          setOpen={setSqlOpen}
          title="Postgres"
          content="I have been programming in Python for about a year now, and I have completed several projects using the language. Using python with additional to Django I have completed several projects using the langauge; A store website, Linkedin for developers, spotify room hosting, and a stock screener."
        />
        <ExpandableContent
          isOpen={isReactOpen}
          setOpen={setReactOpen}
          title="React"
          content="I have been programming in Python for about a year now, and I have completed several projects using the language. Using python with additional to Django I have completed several projects using the langauge; A store website, Linkedin for developers, spotify room hosting, and a stock screener."
        />
        <ExpandableContent
          isOpen={isGitOpen}
          setOpen={setGitOpen}
          title="Git"
          content="I have been programming in Python for about a year now, and I have completed several projects using the language. Using python with additional to Django I have completed several projects using the langauge; A store website, Linkedin for developers, spotify room hosting, and a stock screener."
        />
        <ExpandableContent
          isOpen={isApiOpen}
          setOpen={setApiOpen}
          title="Api"
          content="I have been programming in Python for about a year now, and I have completed several projects using the language. Using python with additional to Django I have completed several projects using the langauge; A store website, Linkedin for developers, spotify room hosting, and a stock screener."
        />
        <ExpandableContent
          isOpen={isScrumOpen}
          setOpen={setScrumOpen}
          title="Scrum"
          content="I have been programming in Python for about a year now, and I have completed several projects using the language. Using python with additional to Django I have completed several projects using the langauge; A store website, Linkedin for developers, spotify room hosting, and a stock screener."
        />
      </motion.ul>
    </section>
  );
}

export default Skills;
