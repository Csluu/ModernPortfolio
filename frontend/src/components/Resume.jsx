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
			className="flex w-full justify-center h-fit mx-5"
			variants={container}
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true, amount: 0.1 }}
		>
			<main className="flex xs:flex-col sm:flex-row basis-11/12 max-w-[1400px] xs:mx-5 h-fit xl:h-fit gap-5 px-10">
				<article className="flex flex-col gap-5 text-[#1b1c1e] mt-32 sm:w-[500px] h-fit">
					<motion.section
						variants={child}
						className="flex flex-col justify-center gap-5 w-full h-96 bg-orange-bg text-[#1b1c1e] rounded-xl p-10 font-semibold shadow-highLight  border-[1px] border-white border-opacity-[15%]"
					>
						<div className="flex justify-center w-full">
							<div className="h-48 w-48 rounded-full bg-profile-picture bg-cover bg-center shadow-highLight  border-[1px] border-white border-opacity-[15%]"></div>
						</div>
						<header className="flex flex-col place-items-center">
							<h1 className="xs:text-[30px] sm:text-[30px] text-[35px] md:text-[25px]">
								Christopher Luu
							</h1>
							<h2 className="xs:text-[20px] sm:text-[20px] text-[25px] md:text-[25px]">
								Software Developer
							</h2>
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
				<div className="text-[#70798C] text-opacity-75 sm:mt-32 w-full h-fit text-[20px]">
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
									<h1 className="text-[#FFF5EE] text-[25px]">Kanban</h1>
									<ul className="flex flex-col list-disc w-full pl-5 gap-2">
										<li>
											Developed a user-friendly Kanban board application using
											JavaScript, HTML, CSS, and the Electron framework. This
											cross-platform application enhanced task management
											efficiency and improved user productivity.
										</li>
										<li>
											Utilized Electron to package the application for Windows,
											Mac, and Linux operating systems, broadening its
											accessibility and usability across various platforms.
										</li>
										<li>
											Utilized the React-DnD library for seamless drag-and-drop
											functionality. This allowed users to intuitively move task
											cards between different stages of the workflow.
										</li>
										<li>
											Leveraged local storage to persist data, ensuring that
											users' tasks and their states are saved between sessions,
											enabling seamless resumption of work across different
											sessions.
										</li>
										<li>
											Incorporated Tailwind CSS for efficient and responsive
											styling, delivering an intuitive and enjoyable user
											experience.
										</li>
									</ul>
								</li>
								<li>
									<h1 className="text-[#FFF5EE] text-[25px]">
										Social Media Platform for Developers
									</h1>
									<ul className="flex flex-col list-disc w-full pl-5 gap-2">
										<li>
											Designed and developed a dynamic social networking
											platform specifically tailored for software developers,
											akin to LinkedIn, providing a dedicated space to meet
											their unique needs and interests.
										</li>
										<li>
											Utilized a robust tech stack including JavaScript, HTML,
											CSS, Django, and PostgreSQL to create a powerful,
											scalable, and secure platform.
										</li>
										<li>
											Empowered developers to create comprehensive profiles
											showcasing their skills, experience, and projects,
											facilitating a centralized hub for developers to highlight
											their expertise and build their professional brand.
										</li>
										<li>
											Leveraged Django for robust backend development and
											PostgreSQL for efficient data management, ensuring optimal
											performance and a reliable user experience.
										</li>
									</ul>
								</li>
								<li>
									<h1 className="text-[#FFF5EE] text-[25px]">
										Article Summarizer
									</h1>
									<ul className="flex flex-col list-disc w-full pl-5 gap-2">
										<li>
											Developed an efficient Article Summarizer tool that
											leverages the advanced capabilities of ChatGPT to generate
											concise and accurate summaries, enhancing user
											comprehension of complex articles.
										</li>
										<li>
											Integrated local storage functionality to enhance
											usability, allowing users to conveniently access and
											manage their past article summaries for easy reference.
										</li>
										<li>
											Utilized JavaScript and Redux for efficient state
											management, ensuring a smooth and responsive user
											experience throughout the application.
										</li>
										<li>
											Leveraged React for building an interactive and intuitive
											user interface, and employed Tailwind CSS for rapid UI
											development, delivering a visually appealing and
											user-friendly interface.
										</li>
										<li>
											Deployed the application using Vercel for seamless
											deployment and hosting, benefiting from its serverless
											architecture, automatic Git integration, and global CDN
											for optimal performance and scalability.
										</li>
									</ul>
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

							<h1 className="text-[#FFF5EE] text-[25px]">Ricoh</h1>
							<h2 className="text-[#FFF5EE]">
								Desktop Support Engineer Contractor
							</h2>
							<ul className="flex flex-col list-disc w-full pl-5 gap-2">
								<li>
									Successfully deployed over 300 laptops and phones for refresh
									project for end-users
								</li>
								<li>
									Refederated LassPass accounts for over 1000 employees over
									four months, ensuring the security of sensitive data and
									accounts
								</li>
								<li>
									Troubleshooted and resolved a wide range of technical issues,
									from software and hardware problems to network and
									connectivity issues
								</li>
								<li>
									Maintained a high customer satisfaction rating of 99%, as
									reported through user feedback, by resolving an average of
									five tickets per day
								</li>
								<li>
									Developed and implemented scripts to automate the software
									download process, reducing the time and effort required to
									install software on laptops.
								</li>
								<li>
									Utilized ServiceNow as the primary ticketing system, managing
									and prioritizing tickets, communicating effectively with
									end-users, and maintaining accurate records of all
									interactions and resolutions
								</li>
							</ul>
							<h1 className="text-[#FFF5EE] text-[25px]">Little Arm Studios</h1>
							<h2 className="text-[#FFF5EE]">3D Technical Artist Intern</h2>
							<ul className="flex flex-col list-disc w-full pl-5 gap-2">
								<li>
									Used source control software such as GitKraken to manage and
									track changes to 3D assets and code
								</li>
								<li>
									Reduced memory and storage up to 40% for image textures by
									utilizing channel packing and trim sheets
								</li>
								<li>
									Utilized Jira for task management, including creating,
									updating, and tracking tickets for assigned tasks and bugs
								</li>
								<li>
									Created and textured 3D models of infrastructure, weaponry,
									and vehicles using Blender and Substance Painter
								</li>
								<li>
									Actively participated in daily scrum meetings to update the
									team on progress, identify any issues, and collaborate with my
									colleagues towards achieving our project goals.
								</li>
							</ul>
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
							<h2 className="text-[#FFF5EE]">B.F.A Computer Game Design</h2>
							<p>Summa Cum Laude: 3.91 GPA</p>
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
									<h1 className="text-[#FFF5EE] text-[25px]">Databases</h1>
									<p>PostgreSQL</p>
								</li>

								<li>
									<h1 className="text-[#FFF5EE] text-[25px]">
										Task Management
									</h1>
									<p>Jira, ServiceNow, TeamDynamix</p>
								</li>
								<li>
									<h1 className="text-[#FFF5EE] text-[25px]">Languages</h1>
									<p>Python, Javascript, CSS, HTML, C#, Java</p>
								</li>
								<li>
									<h1 className="text-[#FFF5EE] text-[25px]">
										Framework and Libraries
									</h1>
									<p>
										ReactJS, ViteJS, Django, Tailwind, Electron, Redux, REST
									</p>
								</li>
								<li>
									<h1 className="text-[#FFF5EE] text-[25px]">
										Tools and Software
									</h1>
									<p>
										Github, Gitkraken, Microsoft Teams, Unreal, Unity, Visual
										Studio Code
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
