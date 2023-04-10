import React from "react";
import { motion } from "framer-motion";

function Resume() {
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
    <motion.div
      className="flex w-full justify-center h-fit"
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <main className="flex basis-11/12 max-w-[1400px] xs:mx-5 h-fit xl:h-fit gap-5 px-10">
        <article className="flex flex-col gap-5 text-[#1b1c1e] mt-32 w-[500px] h-fit">
          <motion.section
            variants={child}
            className="flex flex-col justify-center gap-5 w-full h-96 bg-orange-bg text-[#1b1c1e] rounded-xl p-10 font-semibold shadow-highLight  border-[1px] border-white border-opacity-[15%]"
          >
            <div className="flex justify-center w-full">
              <div className="h-48 w-48 rounded-full bg-profile-picture bg-cover bg-center shadow-highLight  border-[1px] border-white border-opacity-[15%]"></div>
            </div>
            <header className="flex flex-col place-items-center">
              <h1 className="text-[35px]">Christopher Luu</h1>
              <h2 className="text-[25px]">Software Developer</h2>
            </header>
          </motion.section>
          <motion.section variants={child}>
            <div className="w-full h-fit bg-[#1b1c1e] rounded-xl shadow-highLight  border-[1px] border-white border-opacity-[15%] text-white text-[25px]  hover:shadow-glow hover:shadow-orange-500 hover:scale-[101%] hover:ease-in-out transition duration-150">
              <a
                href="https://www.linkedin.com/in/csluu/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-row gap-5 w-full h-full p-10"
              >
                <img
                  src="./assets/linkedin.png"
                  alt="Linkedin"
                  className="h-10"
                />
                Linkedin
              </a>
            </div>
          </motion.section>
          <motion.section variants={child}>
            <div className="w-full h-fit bg-[#1b1c1e] rounded-xl shadow-highLight  border-[1px] border-white border-opacity-[15%] text-white text-[25px] hover:shadow-glow hover:shadow-orange-500 hover:scale-[101%] hover:ease-in-out transition duration-150">
              {" "}
              <a
                href="https://github.com/Csluu"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-row gap-5 w-full h-full p-10"
              >
                <img
                  src="./assets/github.png"
                  alt="Linkedin"
                  className="h-10"
                />
                Github
              </a>
            </div>
          </motion.section>
        </article>
        <div className="text-[#70798C] text-opacity-75 mt-32 w-full h-fit text-[20px]">
          <ul className="flex flex-col gap-5 h-full">
            <motion.li
              variants={child}
              className="flex flex-col font-semibold bg-[#1b1c1e] p-10 rounded-xl gap-5 shadow-highLight  border-[1px] border-white border-opacity-[15%]"
            >
              <header className="text-orange-500 text-opacity-100 text-[35px]">
                Projects
              </header>
              <ul className="flex flex-col gap-5">
                <li>
                  <h1 className="text-[#FFF5EE] text-[25px]">
                    Asset Documentation Tool
                  </h1>
                  <p>
                    Incorporated features such as task assignment, progress
                    tracking, and real-time notifications, inventory management,
                    reporting, and user authentication Utilized React, Django,
                    and MongoDB to create a scalable and user-friendly interface
                  </p>
                </li>
                <li>
                  <h1 className="text-[#FFF5EE] text-[25px]">
                    Study Chat Room
                  </h1>
                  <p>
                    Built a web-based chat room application designed for
                    students to discuss and collaborate on classwork Implemented
                    real-time messaging and file sharing capabilities using
                    WebSockets and JavaScript Utilized MongoDB to store user
                    data and chat history
                  </p>
                </li>
                <li>
                  <h1 className="text-[#FFF5EE] text-[25px]">
                    eCommerce Store
                  </h1>
                  <p>
                    Developed an eCommerce platform that allows users to browse
                    and purchase products online Incorporated features such as
                    shopping cart, customer account management, and secure
                    checkout using Stripe Utilized React, Django, and MySQL to
                    create a responsive and user-friendly interface
                  </p>
                </li>
              </ul>
            </motion.li>
            <motion.li
              variants={child}
              className="font-semibold bg-[#1b1c1e] p-10 rounded-xl shadow-highLight  border-[1px] border-white border-opacity-[15%]"
            >
              <header className="text-orange-500 text-opacity-100 text-[35px]">
                Work Experience
              </header>
              <h1 className="text-[#FFF5EE] text-[25px]">Little Arm Studios</h1>
              <h2>3D Technical Artist Intern</h2>
              <p>
                Created and textured 3D models of infrastructure, weaponry, and
                vehicles using Increased performance by utilizing channel
                packing and creating trim sheets for existing assets storage and
                memory Using source control software such as GitKraken to manage
                and track changes to 3D assets and code Participating in daily
                scrum meetings to update the team on progress and identify any
                blockers or issues Utilizing Jira for task management, including
                creating, updating, and tracking tickets for assigned tasks and
                bugs Collaborating with the team to prioritize tasks and ensure
                that all assets are delivered on time and meet quality standards
                Communicating and coordinating with other departments, such as
                engineering and design, to ensure assets are integrated and
                functioning correctly in the final product Reviewing and
                providing feedback on the work of other team members to ensure
                that all assets are of high quality and meet the project's
                requirements.
              </p>
            </motion.li>
            <motion.li
              variants={child}
              className="font-semibold bg-[#1b1c1e] p-10 rounded-xl shadow-highLight  border-[1px] border-white border-opacity-[15%]"
            >
              <header className="text-orange-500 text-opacity-100 text-[35px]">
                Education
              </header>
              <h1 className="text-[#FFF5EE] text-[25px]">
                George Mason University
              </h1>
              <h2>B.F.A Computer Game Design</h2>
              <p>Summa Cum Laude; 3.91 GPA</p>
            </motion.li>
            <motion.li
              variants={child}
              className="font-semibold bg-[#1b1c1e] p-10 rounded-xl shadow-highLight  border-[1px] border-white border-opacity-[15%]"
            >
              <header className="text-orange-500 text-opacity-100 text-[35px]">
                Technical Skills
              </header>
              <ul>
                <li>
                  <h1 className="text-[#FFF5EE] text-[25px]">Certifications</h1>
                  <p>
                    Microsoft Certified: Azure Developer Associate, AWS
                    Certified Developer - Associate
                  </p>
                </li>
                <li>
                  <h1 className="text-[#FFF5EE] text-[25px]">
                    Ticketing Management
                  </h1>
                  <p>Jira, ServiceNow, TeamDynamix</p>
                </li>
                <li>
                  <h1 className="text-[#FFF5EE] text-[25px]">
                    Programming Languages
                  </h1>
                  <p>Python, JavaScript, solidity</p>
                </li>
                <li>
                  <h1 className="text-[#FFF5EE] text-[25px]">Languages</h1>
                  <p>SQL, MongoDB, HTML, CSS</p>
                </li>
                <li>
                  <h1 className="text-[#FFF5EE] text-[25px]">
                    Frameworks and Libraries
                  </h1>
                  <p>Django, React, Kivy, PyQt, Tailwind</p>
                </li>
                <li>
                  <h1 className="text-[#FFF5EE] text-[25px]">Databases</h1>
                  <p>MongoDB, MySQL</p>
                </li>
                <li>
                  <h1 className="text-[#FFF5EE] text-[25px]">Tools</h1>
                  <p>
                    Git, Github, Gitkraken, Visual Studio, chatGPT, Tailwind,
                    bootstrap, postman, pgadmin
                  </p>
                </li>
              </ul>
            </motion.li>
          </ul>
        </div>
      </main>
    </motion.div>
  );
}

export default Resume;
