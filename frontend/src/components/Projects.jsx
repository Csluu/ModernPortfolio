import { useState } from "react";
import React from "react";
import { motion } from "framer-motion";

function Projects() {
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

	const [currentProject, setCurrentProject] = useState("Kanban");
	const handleButtonClick = (button) => {
		if (button === "Kanban") {
			setCurrentProject("Kanban");
		} else if (button === "DevSearch") {
			setCurrentProject("DevSearch");
		} else if (button === "Article Summarizer") {
			setCurrentProject("Article Summarizer");
		}
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
				id="Projects"
				className="flex flex-col basis-11/12 max-w-[1400px] sm:mx-5 lg:mx-5 xl-mx-auto h-fit gap-16 pt-10"
			>
				<motion.header
					variants={child}
					className="flex relative top-10 ss:text-[150px] xs:text-[60px] xs:place-items-end xs:h-32 sm:text-[180px] justify-center ss:h-60 text-orange-500 font-semibold"
				>
					<h1 style={{ textShadow: "2px 4px  rgb(0 0 0 /0.2)" }}>Projects</h1>
				</motion.header>
				<ul className="grid ss:grid-cols-1 sm:grid-cols-6 lg-grid-rows-3 w-full h-fit gap-5">
					<motion.li variants={child} className="col-span-2 row-span-1">
						<div
							className={`${
								currentProject === "Kanban"
									? "text-orange-500"
									: "text-[#70798C] text-opacity-75"
							} hover:text-orange-500 font-semibold col-span-1 row-span-1
			rounded-2xl shadow-highLight border-[1px] border-white
			border-opacity-[15%] xs:h-72 bg-[#1b1c1e] hover:shadow-glow
			hover:shadow-orange-500 hover:scale-[101%] hover:ease-in-out
			transition duration-150 flex items-center justify-center text-opacity-75 xs:text-[40px] ss:text-[75px] sm:text-[40px] md:text-[60px] lg:text-[75px]`}
							onClick={() => handleButtonClick("Kanban")}
						>
							Kanban
						</div>
					</motion.li>
					<motion.li variants={child} className="col-span-2 row-span-1">
						<div
							className={`${
								currentProject === "DevSearch"
									? "text-orange-500"
									: "text-[#70798C] text-opacity-75"
							} hover:text-orange-500 font-semibold col-span-1 row-span-1
			rounded-2xl shadow-highLight border-[1px] border-white
			border-opacity-[15%] xs:h-72 bg-[#1b1c1e] hover:shadow-glow
			hover:shadow-orange-500 hover:scale-[101%] hover:ease-in-out
			transition duration-150 flex items-center justify-center text-opacity-75 xs:text-[40px] ss:text-[75px] sm:text-[40px] md:text-[60px] lg:text-[75px]`}
							onClick={() => handleButtonClick("DevSearch")}
						>
							DevSearch
						</div>
					</motion.li>
					<motion.li variants={child} className="col-span-2 row-span-1">
						<div
							className={`${
								currentProject === "Article Summarizer"
									? "text-orange-500"
									: "text-[#70798C] text-opacity-75"
							} hover:text-orange-500 font-semibold col-span-1 row-span-1
			rounded-2xl shadow-highLight border-[1px] border-white
			border-opacity-[15%] xs:h-72 bg-[#1b1c1e] hover:shadow-glow
			hover:shadow-orange-500 hover:scale-[101%] hover:ease-in-out
			transition duration-150 flex items-center justify-center text-opacity-75 xs:text-[40px] ss:text-[75px] sm:text-[40px] md:text-[50px] lg:text-[60px] text-center`}
							onClick={() => handleButtonClick("Article Summarizer")}
						>
							Blockchain Crowdfunding
						</div>
					</motion.li>
					{/* Description */}
					{currentProject === "Kanban" ? (
						<motion.li
							variants={child}
							className="col-span-2 row-span-1 sm:col-span-2 md:col-span-2 md:row-span-2"
						>
							<div
								className="  rounded-2xl
            shadow-highLight border-[1px] border-white border-opacity-[15%]
            lg:h-[576px] h-fit bg-[#1b1c1e] flex flex-col items-center justify-between p-10 gap-7"
							>
								<h1 className="flex w-full justify-start  ss:text-6xl sm:text-[40px] md:text-6xl font-semibold text-[#FFF5EE]">
									Description
								</h1>
								<div className="flex flex-col gap-3">
									<p className="text-xl text-[#70798C] ">
										A simple Kanban board implementation. The board is divided
										into columns that represent the stages of the workflow, such
										as "To Do," "In Progress," and "Completed."
									</p>
									<p className="text-xl text-[#70798C]">
										Tasks are represented as cards that can be moved between
										columns by dragging and dropping, allowing people to track
										their progress more effectively.
									</p>
								</div>
								<div className="flex w-full flex-col justify-start">
									<ul className="flex flex-row gap-5 text-[#70798C] flex-wrap">
										<li>Javascript</li>
										<li>HTML</li>
										<li>CSS</li>
										<li>Electron</li>
										<li>Tailwind</li>
									</ul>
								</div>
								<button>
									<a
										href="https://github.com/Csluu/Kanban"
										target="_blank"
										rel="noopener noreferrer"
										className="bg-orange-600 p-2 px-4 rounded-full"
									>
										Github
									</a>
								</button>
							</div>
						</motion.li>
					) : currentProject === "DevSearch" ? (
						<motion.li
							variants={child}
							className="col-span-2 row-span-1 sm:col-span-2 md:col-span-2 md:row-span-2"
						>
							<div
								className="  rounded-2xl
            shadow-highLight border-[1px] border-white border-opacity-[15%]
            lg:h-[576px] h-fit  bg-[#1b1c1e] flex flex-col items-center justify-between p-10 gap-7"
							>
								<h1 className="flex w-full justify-start  ss:text-6xl sm:text-[40px] md:text-6xl font-semibold text-[#FFF5EE]">
									Description
								</h1>
								<div className="flex flex-col gap-3">
									<p className="text-xl text-[#70798C]">
										DevSearch is a social media platform specifically designed
										for software developers. It functions like a LinkedIn for
										developers where users can create profiles to showcase their
										skills, experience, and projects.
									</p>
									<p className="text-xl text-[#70798C]">
										Developers can connect with one another, collaborate on
										projects, and discover job opportunities.
									</p>
								</div>

								<div className="flex flex-col justify-center place-items-center">
									<ul className="flex flex-row gap-5 text-[#70798C] flex-wrap">
										<li>Javascript</li>
										<li>HTML</li>
										<li>CSS</li>
										<li>Django</li>
										<li>PostgreSQL</li>
									</ul>
								</div>
								<button>
									<a
										href="https://github.com/Csluu/DevSearch"
										target="_blank"
										rel="noopener noreferrer"
										className="bg-orange-600 p-2 px-4 rounded-full"
									>
										Github
									</a>
								</button>
							</div>
						</motion.li>
					) : (
						<motion.li
							variants={child}
							className="col-span-2 row-span-1 sm:col-span-2 md:col-span-2 md:row-span-2"
						>
							<div
								className="  rounded-2xl
            shadow-highLight border-[1px] border-white border-opacity-[15%]
            lg:h-[576px] h-fit  bg-[#1b1c1e] flex flex-col items-center justify-between p-10 gap-7"
							>
								<h1 className="flex w-full justify-start  ss:text-6xl sm:text-[40px] md:text-6xl font-semibold text-[#FFF5EE]">
									Description
								</h1>
								<div className="flex flex-col gap-3">
									<p className="text-xl text-[#70798C]">
										A blockchain-powered crowdfunding platform that seamlessly
										connects creators with backers. With decentralized
										transparency, it simplifies fundraising, giving users
										confidence in supporting and tracking innovative projects.
									</p>
								</div>

								<div className="flex flex-col justify-center place-items-center">
									<ul className="flex flex-row gap-5 text-[#70798C] flex-wrap">
										<li>Javascript</li>
										<li>HTML</li>
										<li>CSS</li>
										<li>React</li>
										<li>Tailwind</li>
										<li>Solidity</li>
										<li>Thirdweb</li>
									</ul>
								</div>

								<div className="flex gap-5">
									<button>
										<a
											href="https://github.com/Csluu/crowdFunding"
											target="_blank"
											rel="noopener noreferrer"
											className="bg-orange-600 p-2 px-4 rounded-full"
										>
											Github
										</a>
									</button>
								</div>
							</div>
						</motion.li>
					)}
					{/* picture */}
					<motion.li
						variants={child}
						className="col-span-1 sm:col-span-4 md:col-span-4 md:row-span-2"
					>
						{currentProject === "Kanban" ? (
							<div
								className="  rounded-2xl
            shadow-highLight border-[1px] border-white border-opacity-[15%]
            lg:h-[576px] h-[665px] bg-[#1b1c1e] flex items-center justify-center p-10"
							>
								<img
									src="./assets/kanban.png"
									alt="LinkedIn Profile"
									className="scale-[100%] rounded-xl"
								/>
							</div>
						) : currentProject === "DevSearch" ? (
							<div
								className="  rounded-2xl
            shadow-highLight border-[1px] border-white border-opacity-[15%]
            lg:h-[576px] h-[665px] bg-[#1b1c1e] flex items-center justify-center p-10"
							>
								<img
									src="./assets/DevSearch.png"
									alt="LinkedIn Profile"
									className="scale-[100%] rounded-xl"
								/>
							</div>
						) : (
							<div
								className="  rounded-2xl
		shadow-highLight border-[1px] border-white border-opacity-[15%]
		lg:h-[576px] h-[695px] bg-[#1b1c1e] flex items-center justify-center p-10"
							>
								<img
									src="./assets/crowdfunding.png"
									alt="LinkedIn Profile"
									className="scale-[80%] rounded-xl"
								/>
							</div>
						)}
					</motion.li>
				</ul>
			</div>
		</motion.section>
	);
}

export default Projects;
