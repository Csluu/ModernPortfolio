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
              className="flex flex-col fixed top-1/3 left-[37.5%] p-10 h-96 w-[640px] bg-[#1b1c1e] rounded-2xl justify-start shadow-highLight backdrop-blur-2xl border-[1px] border-white border-opacity-[15%] hover:shadow-glow hover:shadow-orange-500 hover:scale-[101%] hover:ease-in-out transition duration-150 gap-2"
            >
              <h1 className="text-[#FFF5EE] font-semibold text-[50px]">
                {title}
              </h1>
              <p className="text-[#70798C] text-opacity-75 text-[20px]">
                {content}
              </p>
            </motion.div>
          </div>
        )}
      </>
    );
  }

  return (
    <section
      id="Skills"
      className="flex flex-col basis-11/12 max-w-[1400px] mx-auto h-screen gap-12"
    >
      <header className="flex relative top-12 text-[180px] justify-center h-60 text-orange-500 font-semibold">
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
          className="sm:col-span-2 md:col-span-1 rounded-xl shadow-highLight  border-[1px] text-[25px] text-[#70798C] text-opacity-75 hover:text-orange-500 border-white border-opacity-[15%] md:h-72 sm:h-auto bg-[#1b1c1e] hover:shadow-glow hover:shadow-orange-500 hover:scale-[101%] hover:ease-in-out transition duration-150 flex items-center justify-center"
        >
          <div className="flex flex-col items-center justify-center w-full h-full">
            <img
              src="./assets/python.png"
              alt="LinkedIn Profile"
              className="scale-[33%]"
            />
            <div className="h-0 -translate-y-20 font-semibold">Python</div>
          </div>
        </motion.li>

        <motion.li
          onClick={() => {
            setDjangoOpen(!isDjangoOpen);
            if (!isDjangoOpen) {
              document.body.style.overflow = "hidden";
            } else {
            }
          }}
          d
          className="sm:col-span-2 md:col-span-1 rounded-xl shadow-highLight  border-[1px] text-[25px] text-[#70798C] text-opacity-75 hover:text-orange-500 border-white border-opacity-[15%] md:h-72 sm:h-auto bg-[#1b1c1e] hover:shadow-glow hover:shadow-orange-500 hover:scale-[101%] hover:ease-in-out transition duration-150 flex items-center justify-center"
        >
          <div className="flex flex-col items-center justify-center w-full h-full">
            <img
              src="./assets/django.png"
              alt="LinkedIn Profile"
              className="scale-[33%]"
            />
            <div className="h-0 -translate-y-20 font-semibold">Django</div>
          </div>
        </motion.li>
        <motion.li
          onClick={() => {
            setCssOpen(!isCssOpen);
            if (!isCssOpen) {
              document.body.style.overflow = "hidden";
            } else {
            }
          }}
          d
          className="sm:col-span-2 md:col-span-1 rounded-xl shadow-highLight  border-[1px] text-[25px] text-[#70798C] text-opacity-75 hover:text-orange-500 border-white border-opacity-[15%] md:h-72 sm:h-auto bg-[#1b1c1e] hover:shadow-glow hover:shadow-orange-500 hover:scale-[101%] hover:ease-in-out transition duration-150 flex items-center justify-center"
        >
          <div className="flex flex-col items-center justify-center w-full h-full">
            <img
              src="./assets/css.png"
              alt="LinkedIn Profile"
              className="scale-[33%]"
            />
            <div className="h-0 -translate-y-20 font-semibold">CSS</div>
          </div>
        </motion.li>
        <motion.li
          onClick={() => {
            setHtmlOpen(!isHtmlOpen);
            if (!isHtmlOpen) {
              document.body.style.overflow = "hidden";
            } else {
            }
          }}
          d
          className="sm:col-span-2 md:col-span-1 rounded-xl shadow-highLight  border-[1px] text-[25px] text-[#70798C] text-opacity-75 hover:text-orange-500 border-white border-opacity-[15%] md:h-72 sm:h-auto bg-[#1b1c1e] hover:shadow-glow hover:shadow-orange-500 hover:scale-[101%] hover:ease-in-out transition duration-150 flex items-center justify-center"
        >
          <div className="flex flex-col items-center justify-center w-full h-full">
            <img
              src="./assets/html.png"
              alt="LinkedIn Profile"
              className="scale-[33%]"
            />
            <div className="h-0 -translate-y-20 font-semibold">HTML</div>
          </div>
        </motion.li>
        <motion.li
          onClick={() => {
            setJavaScriptOpen(!isJavaScriptOpen);
            if (!isJavaScriptOpen) {
              document.body.style.overflow = "hidden";
            } else {
            }
          }}
          d
          className="sm:col-span-2 md:col-span-1 rounded-xl shadow-highLight  border-[1px] text-[25px] text-[#70798C] text-opacity-75 hover:text-orange-500 border-white border-opacity-[15%] md:h-72 sm:h-auto bg-[#1b1c1e] hover:shadow-glow hover:shadow-orange-500 hover:scale-[101%] hover:ease-in-out transition duration-150 flex items-center justify-center"
        >
          <div className="flex flex-col items-center justify-center w-full h-full">
            <img
              src="./assets/javascript.png"
              alt="LinkedIn Profile"
              className="scale-[33%]"
            />
            <div className="h-0 -translate-y-20 font-semibold">Javascript</div>
          </div>
        </motion.li>
        <motion.li
          onClick={() => {
            setTailwindOpen(!isTailwindOpen);
            if (!isTailwindOpen) {
              document.body.style.overflow = "hidden";
            } else {
            }
          }}
          d
          className="sm:col-span-2 md:col-span-1 rounded-xl shadow-highLight  border-[1px] text-[25px] text-[#70798C] text-opacity-75 hover:text-orange-500 border-white border-opacity-[15%] md:h-72 sm:h-auto bg-[#1b1c1e] hover:shadow-glow hover:shadow-orange-500 hover:scale-[101%] hover:ease-in-out transition duration-150 flex items-center justify-center"
        >
          <div className="flex flex-col items-center justify-center w-full h-full">
            <img
              src="./assets/tailwind.png"
              alt="LinkedIn Profile"
              className="scale-[33%]"
            />
            <div className="h-0 -translate-y-20 font-semibold">Tailwind</div>
          </div>
        </motion.li>

        <motion.li
          onClick={() => {
            setPythonOpen(!isPythonOpen);
            if (!isPythonOpen) {
              document.body.style.overflow = "hidden";
            } else {
            }
          }}
          d
          className="sm:col-span-2 md:col-span-1 rounded-xl shadow-highLight  border-[1px] text-[25px] text-[#70798C] text-opacity-75 hover:text-orange-500 border-white border-opacity-[15%] md:h-72 sm:h-auto bg-[#1b1c1e] hover:shadow-glow hover:shadow-orange-500 hover:scale-[101%] hover:ease-in-out transition duration-150 flex items-center justify-center"
        >
          <div className="flex flex-col items-center justify-center w-full h-full">
            <img
              src="./assets/django.png"
              alt="LinkedIn Profile"
              className="scale-[33%]"
            />
            <div className="h-0 -translate-y-20 font-semibold">Django</div>
          </div>
        </motion.li>
        <motion.li
          onClick={() => {
            setSqlOpen(!isSqlOpen);
            if (!isSqlOpen) {
              document.body.style.overflow = "hidden";
            } else {
            }
          }}
          d
          className="sm:col-span-2 md:col-span-1 rounded-xl shadow-highLight  border-[1px] text-[25px] text-[#70798C] text-opacity-75 hover:text-orange-500 border-white border-opacity-[15%] md:h-72 sm:h-auto bg-[#1b1c1e] hover:shadow-glow hover:shadow-orange-500 hover:scale-[101%] hover:ease-in-out transition duration-150 flex items-center justify-center"
        >
          <div className="flex flex-col items-center justify-center w-full h-full">
            <img
              src="./assets/PostgreSQL_logo.png"
              alt="LinkedIn Profile"
              className="scale-[33%]"
            />
            <div className="h-0 -translate-y-20 font-semibold">SQL</div>
          </div>
        </motion.li>
        <motion.li
          onClick={() => {
            setReactOpen(!isReactOpen);
            if (!isReactOpen) {
              document.body.style.overflow = "hidden";
            } else {
            }
          }}
          d
          className="sm:col-span-2 md:col-span-1 rounded-xl shadow-highLight  border-[1px] text-[25px] text-[#70798C] text-opacity-75 hover:text-orange-500 border-white border-opacity-[15%] md:h-72 sm:h-auto bg-[#1b1c1e] hover:shadow-glow hover:shadow-orange-500 hover:scale-[101%] hover:ease-in-out transition duration-150 flex items-center justify-center"
        >
          <div className="flex flex-col items-center justify-center w-full h-full">
            <img
              src="./assets/react.png"
              alt="LinkedIn Profile"
              className="scale-[33%]"
            />
            <div className="h-0 -translate-y-20 font-semibold">React</div>
          </div>
        </motion.li>
        <motion.li
          onClick={() => {
            setGitOpen(!isGitOpen);
            if (!isGitOpen) {
              document.body.style.overflow = "hidden";
            } else {
            }
          }}
          d
          className="sm:col-span-2 md:col-span-1 rounded-xl shadow-highLight  border-[1px] text-[25px] text-[#70798C] text-opacity-75 hover:text-orange-500 border-white border-opacity-[15%] md:h-72 sm:h-auto bg-[#1b1c1e] hover:shadow-glow hover:shadow-orange-500 hover:scale-[101%] hover:ease-in-out transition duration-150 flex items-center justify-center"
        >
          <div className="flex flex-col items-center justify-center w-full h-full">
            <img
              src="./assets/Git.png"
              alt="LinkedIn Profile"
              className="scale-[33%]"
            />
            <div className="h-0 -translate-y-20 font-semibold">Git</div>
          </div>
        </motion.li>
        <motion.li
          onClick={() => {
            setApiOpen(!isApiOpen);
            if (!isApiOpen) {
              document.body.style.overflow = "hidden";
            } else {
            }
          }}
          d
          className="sm:col-span-2 md:col-span-1 rounded-xl shadow-highLight  border-[1px] text-[25px] text-[#70798C] text-opacity-75 hover:text-orange-500 border-white border-opacity-[15%] md:h-72 sm:h-auto bg-[#1b1c1e] hover:shadow-glow hover:shadow-orange-500 hover:scale-[101%] hover:ease-in-out transition duration-150 flex items-center justify-center"
        >
          <div className="flex flex-col items-center justify-center w-full h-full">
            <img
              src="./assets/api.png"
              alt="LinkedIn Profile"
              className="scale-[33%]"
            />
            <div className="h-0 -translate-y-20 font-semibold">API</div>
          </div>
        </motion.li>
        <motion.li
          onClick={() => {
            setScrumOpen(!isScrumOpen);
            if (!isScrumOpen) {
              document.body.style.overflow = "hidden";
            } else {
            }
          }}
          d
          className="sm:col-span-2 md:col-span-1 rounded-xl shadow-highLight  border-[1px] text-[25px] text-[#70798C] text-opacity-75 hover:text-orange-500 border-white border-opacity-[15%] md:h-72 sm:h-auto bg-[#1b1c1e] hover:shadow-glow hover:shadow-orange-500 hover:scale-[101%] hover:ease-in-out transition duration-150 flex items-center justify-center"
        >
          <div className="flex flex-col items-center justify-center w-full h-full">
            <img
              src="./assets/scrum.png"
              alt="LinkedIn Profile"
              className="scale-[33%]"
            />
            <div className="h-0 -translate-y-20 font-semibold">Scrum</div>
          </div>
        </motion.li>
        <ExpandableContent
          isOpen={isPythonOpen}
          setOpen={setPythonOpen}
          title="Python"
          content="I have been programming in Python for about a year now, and I have completed several projects using the language. Using python with additional to Django I have completed several projects using the language; A store website, Linkedin for developers, spotify room hosting, and a stock screener."
        />
        <ExpandableContent
          isOpen={isDjangoOpen}
          setOpen={setDjangoOpen}
          title="Django"
          content="I have been programming in Python for about a year now, and I have completed several projects using the language. Using python with additional to Django I have completed several projects using the language; A store website, Linkedin for developers, spotify room hosting, and a stock screener."
        />
        <ExpandableContent
          isOpen={isCssOpen}
          setOpen={setCssOpen}
          title="CSS"
          content="I have been programming in Python for about a year now, and I have completed several projects using the language. Using python with additional to Django I have completed several projects using the language; A store website, Linkedin for developers, spotify room hosting, and a stock screener."
        />
        <ExpandableContent
          isOpen={isHtmlOpen}
          setOpen={setHtmlOpen}
          title="HTML"
          content="I have been programming in Python for about a year now, and I have completed several projects using the language. Using python with additional to Django I have completed several projects using the language; A store website, Linkedin for developers, spotify room hosting, and a stock screener."
        />
        <ExpandableContent
          isOpen={isJavaScriptOpen}
          setOpen={setJavaScriptOpen}
          title="Javascript"
          content="I have been programming in Python for about a year now, and I have completed several projects using the language. Using python with additional to Django I have completed several projects using the language; A store website, Linkedin for developers, spotify room hosting, and a stock screener."
        />
        <ExpandableContent
          isOpen={isTailwindOpen}
          setOpen={setTailwindOpen}
          title="Tailwind"
          content="I have been programming in Python for about a year now, and I have completed several projects using the language. Using python with additional to Django I have completed several projects using the language; A store website, Linkedin for developers, spotify room hosting, and a stock screener."
        />
        <ExpandableContent
          isOpen={isSqlOpen}
          setOpen={setSqlOpen}
          title="Postgres"
          content="I have been programming in Python for about a year now, and I have completed several projects using the language. Using python with additional to Django I have completed several projects using the language; A store website, Linkedin for developers, spotify room hosting, and a stock screener."
        />
        <ExpandableContent
          isOpen={isReactOpen}
          setOpen={setReactOpen}
          title="React"
          content="I have been programming in Python for about a year now, and I have completed several projects using the language. Using python with additional to Django I have completed several projects using the language; A store website, Linkedin for developers, spotify room hosting, and a stock screener."
        />
        <ExpandableContent
          isOpen={isGitOpen}
          setOpen={setGitOpen}
          title="Git"
          content="I have been programming in Python for about a year now, and I have completed several projects using the language. Using python with additional to Django I have completed several projects using the language; A store website, Linkedin for developers, spotify room hosting, and a stock screener."
        />
        <ExpandableContent
          isOpen={isApiOpen}
          setOpen={setApiOpen}
          title="Api"
          content="I have been programming in Python for about a year now, and I have completed several projects using the language. Using python with additional to Django I have completed several projects using the language; A store website, Linkedin for developers, spotify room hosting, and a stock screener."
        />
        <ExpandableContent
          isOpen={isScrumOpen}
          setOpen={setScrumOpen}
          title="Scrum"
          content="I have been programming in Python for about a year now, and I have completed several projects using the language. Using python with additional to Django I have completed several projects using the language; A store website, Linkedin for developers, spotify room hosting, and a stock screener."
        />
      </motion.ul>
    </section>
  );
}

export default Skills;
