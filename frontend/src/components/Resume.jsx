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
										Social Media Website
									</h1>
									<ul className="flex flex-col list-disc w-full pl-5 gap-2">
										<li>
											Engineered a Reddit-like platform with NextAuth for secure
											Google logins, full CRUD operations, and community
											features like voting, commenting, and categorization.
										</li>
										<li>
											Optimized MySQL with Prisma and Redis caching, enhancing
											data access and reducing response times by 40%.
										</li>
										<li>
											Utilized Vercel for deployment, enabling seamless updates,
											and optimized server-side rendering, increasing load times
											by 30%.
										</li>
										<li>
											Leveraged NextJS features, including image optimization,
											lazy loading, and .webp conversion, for a 50% performance
											improvement.
										</li>
										<li>
											Implemented a modern UI using Tailwind CSS, reducing CSS
											code by 65%, and React's component-based structure,
											boosting code reusability by 60%.
										</li>
									</ul>
								</li>
								<li>
									<h1 className="text-[#FFF5EE] text-[25px]">
										Crowdfunding Platform
									</h1>
									<ul className="flex flex-col list-disc w-full pl-5 gap-2">
										<li>
											Developed a secure, Ethereum-based crowdfunding platform
											using Solidity, featuring real-time transaction tracking
											to enhance transparency for backers and creators
										</li>
										<li>
											Enabled users to create, view, fund, and search for
											campaigns, offering a comprehensive and interactive
											crowdfunding experience.
										</li>
										<li>
											Utilized a robust tech stack including Hardhat, Thirdweb,
											React, and Tailwind CSS to develop and deploy the
											application, ensuring scalability and maintainability.
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
									Troubleshooted and resolved a wide range of technical issues,
									from software and hardware problems to network and
									connectivity issues
								</li>
								<li>
									Maintained a high customer satisfaction rating of 99%, as
									reported through user feedback, by resolving an average of
									eight tickets per day
								</li>
								<li>
									Developed and implemented powershell and bash scripts to
									automate the software download process, reducing the time and
									effort required to install software on laptops.
								</li>
								<li>
									Developed an automated ticket queue management tool using
									Puppeteer, significantly reducing manual sorting time and
									enhancing workflow efficiency.
								</li>
								<li>
									Utilized ServiceNow as the primary ticketing system, managing
									and prioritizing tickets, communicating effectively with
									end-users, and maintaining accurate records of all
									interactions and resolutions
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
									<p>PostgreSQL, MongoDB, MySQL, Redis</p>
								</li>

								<li>
									<h1 className="text-[#FFF5EE] text-[25px]">
										Task Management
									</h1>
									<p>Jira, ServiceNow, TeamDynamix</p>
								</li>
								<li>
									<h1 className="text-[#FFF5EE] text-[25px]">Languages</h1>
									<p>Python, JavaScript, TypeScript, CSS, HTML, Solidity</p>
								</li>
								<li>
									<h1 className="text-[#FFF5EE] text-[25px]">
										Framework and Libraries
									</h1>
									<p>
										ReactJS, AuthJS, Tailwind CSS, Electron, REST, NextJS,
										Prisma, Puppeteer, Cypress, Jest
									</p>
								</li>
								<li>
									<h1 className="text-[#FFF5EE] text-[25px]">
										Tools and Software
									</h1>
									<p>
										Vercel, Github, GitKraken, Microsoft Teams, Docker, Unreal,
										Unity, Docker
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
