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

							<h1 className="text-[#FFF5EE] text-[25px]">Ricoh</h1>
							<h2>Desktop Support Engineer Contractor</h2>
							<ul className="list-disc w-full pl-5">
								<li>
									Successfully deployed over 300 laptops and phones for refresh
									project for end-users
								</li>
								<li>
									Refederated LassPass accounts for over 1000 employees over
									three months, ensuring the security of sensitive data and
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
							<h2>3D Technical Artist Intern</h2>
							<ul className="list-disc w-full pl-5">
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
									<h1 className="text-[#FFF5EE] text-[25px]">Databases</h1>
									<p>PostgreSQL</p>
								</li>

								<li>
									<h1 className="text-[#FFF5EE] text-[25px]">
										Task Management
									</h1>
									<p>Jira, ServiceNow, TeamDynamix, Github</p>
								</li>
								<li>
									<h1 className="text-[#FFF5EE] text-[25px]">Languages</h1>
									<p>Python, Javascript, CSS, HTML, C#, Java</p>
								</li>
								<li>
									<h1 className="text-[#FFF5EE] text-[25px]">
										Framework and Libraries
									</h1>
									<p>ReactJS, Django, Tailwind, Electron, Redux, REST</p>
								</li>
								<li>
									<h1 className="text-[#FFF5EE] text-[25px]">
										Tools and Software
									</h1>
									<p>
										Postman, Gitkraken, Microsoft Teams, Unreal, Unity, Visual
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
