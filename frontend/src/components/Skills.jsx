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
	const [isElectronOpen, setElectronOpen] = useState(false);

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
							<div className="flex justify-start flex-col p-10 w-full h-fit hover:shadow-glow hover:shadow-orange-500 hover:ease-in-out transition duration-150 rounded-xl bg-[#1b1c1e] shadow-highLight border-[1px] border-white border-opacity-[15%] gap-3 backdrop-blur-2xl">
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
							setElectronOpen(!isElectronOpen);
							if (!isElectronOpen) {
								document.body.style.overflow = "hidden";
							} else {
							}
						}}
						className="col-span-1"
					>
						<div className="flex flex-col items-center justify-center w-full rounded-xl hover:shadow-glow hover:shadow-orange-500 hover:scale-[101%] hover:ease-in-out transition duration-150 shadow-highLight  border-[1px] text-[25px] text-[#70798C] text-opacity-75 hover:text-orange-500 border-white border-opacity-[15%] h-72 bg-[#1b1c1e]">
							<img
								src="./assets/Electron.png"
								alt="LinkedIn Profile"
								className="w-32"
							/>
							<div className="translate-y-5 font-semibold">Electron</div>
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
							<div className="translate-y-5 font-semibold">PostgreSQL</div>
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
							<div className="translate-y-5 font-semibold">API</div>
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
						content="Proficient in using Python programming language to build efficient and scalable applications. Experienced in using Python for backend web development with popular web frameworks such as Django. Strong ability to write clean and maintainable code, optimize performance, and stay up-to-date with the latest Python features and best practices."
						image="./assets/python.png"
					/>
					<ExpandableContent
						isOpen={isDjangoOpen}
						setOpen={setDjangoOpen}
						title="Django"
						content="Experienced in using Django web framework to build scalable and secure web applications. Proficient in using Django's Model-View-Template (MVT) architecture to organize application components and data models. Skilled in using Django's built-in admin interface to manage website content and user authentication. Familiar with using Django ORM to interact with databases and query data using Python code. Experienced in integrating Django with other web technologies such as JavaScript and AJAX to create dynamic and interactive web pages. Strong ability to write clean and maintainable Python code, debug and optimize application performance, and implement best practices for web security and scalability."
						image="./assets/django.png"
					/>
					<ExpandableContent
						isOpen={isCssOpen}
						setOpen={setCssOpen}
						title="CSS"
						content="Proficient in using Cascading Style Sheets (CSS) to create responsive and visually appealing web designs. Experienced in using modern CSS3 features such as flexbox, grid layout, and animations to create flexible and dynamic layouts. Familiar with using CSS frameworks such as Tailwind to streamline front-end development. Experienced in implementing responsive design techniques to optimize website performance across different devices and screen sizes. Strong ability to write clean and maintainable CSS code, troubleshoot layout and style issues, and stay up-to-date with the latest CSS features and best practices."
						image="./assets/css.png"
					/>
					<ExpandableContent
						isOpen={isHtmlOpen}
						setOpen={setHtmlOpen}
						title="HTML"
						content="Proficient in using HTML markup language to create semantic and accessible web pages. Experienced in using modern HTML5 elements and attributes to improve website structure and enhance user experience. Skilled in using HTML forms and input types to collect and validate user input. Familiar with integrating HTML with other web technologies such as CSS and JavaScript to create dynamic and interactive web applications. Experienced in using HTML validation tools to ensure website compliance with web standards. Strong ability to write clean and maintainable HTML code, optimize website performance, and implement best practices for SEO and web accessibility."
						image="./assets/html.png"
					/>
					<ExpandableContent
						isOpen={isJavaScriptOpen}
						setOpen={setJavaScriptOpen}
						title="Javascript"
						content="Proficient in using JavaScript programming language to build interactive and dynamic web applications. Experienced in using modern JavaScript frameworks such as React to create single-page applications. Strong ability to write efficient and maintainable code, debug and optimize performance, and keep up-to-date with the latest JavaScript features and best practices."
						image="./assets/javascript.png"
					/>
					<ExpandableContent
						isOpen={isTailwindOpen}
						setOpen={setTailwindOpen}
						title="Tailwind"
						content="Experienced in using Tailwind CSS framework to build responsive and scalable user interfaces. Proficient in using Tailwind's utility-first approach to create styles for typography, layout, and components. Skilled in customizing Tailwind's default configuration to match project-specific design requirements. Familiar with integrating Tailwind with popular frontend frameworks such as React and Vue.js. Experienced in using Tailwind's features such as responsive design, dark mode, and JIT (Just-In-Time) compilation to optimize application performance. Strong ability to create consistent and maintainable user interfaces, perform browser compatibility testing, and write efficient CSS code using Tailwind."
						image="./assets/tailwind.png"
					/>
					<ExpandableContent
						isOpen={isElectronOpen}
						setOpen={setElectronOpen}
						title="Electron"
						content="Proficient in developing cross-platform desktop applications using Electron framework. Experienced in using web technologies such as HTML, CSS, and JavaScript to build desktop applications that can run on Windows, macOS, and Linux. Skilled in using Electron APIs to access system resources, create native user interfaces, and handle desktop-specific events. Familiar with popular Electron-based applications such as Visual Studio Code and Slack. Experienced in packaging and distributing Electron applications using tools such as Electron Forge and electron-builder. Strong ability to create user-friendly and performant desktop applications, integrate with external APIs, and debug application issues."
						image="./assets/Electron.png"
					/>
					<ExpandableContent
						isOpen={isSqlOpen}
						setOpen={setSqlOpen}
						title="PostgreSQL"
						content="Proficient in working with PostgreSQL relational database management system. Experienced in creating and managing database schemas, tables, and indexes. Skilled in using PostgreSQL's advanced features such as stored procedures, triggers, and views to optimize database performance and maintain data integrity. Familiar with SQL query optimization techniques and using EXPLAIN to analyze query execution plans. Experienced in working with PostgreSQL client applications such as pgAdmin and psql CLI. Strong ability to design and implement efficient database architectures, perform backup and recovery procedures, and ensure database security."
						image="./assets/PostgreSQL_logo.png"
					/>
					<ExpandableContent
						isOpen={isReactOpen}
						setOpen={setReactOpen}
						title="React"
						content="Experienced in developing web applications using React library. Proficient in using React to build reusable components, manage state, and handle events. Skilled in creating dynamic user interfaces using React Hooks and Context API. Familiar with popular React-based frameworks such as ViteJS. Experienced in integrating React with other technologies such as Redux for state management, and React Router for client-side routing. Strong ability to write efficient and scalable code, perform debugging, and optimize performance for large-scale applications."
						image="./assets/react.png"
					/>
					<ExpandableContent
						isOpen={isGitOpen}
						setOpen={setGitOpen}
						title="Git"
						content="Proficient in using Git version control system during my internship at Little Arms Studios. Experienced in managing code repositories, branching and merging code, and resolving merge conflicts. Skilled in creating and applying patches, reviewing and merging pull requests, and reverting changes when necessary. Familiar with using Git command-line interface (CLI) and popular Git GUI clients such as GitHub Desktop and GitKraken. Strong ability to work collaboratively in a team environment, using Git to manage code changes and track issues and bugs."
						image="./assets/Git.png"
					/>
					<ExpandableContent
						isOpen={isApiOpen}
						setOpen={setApiOpen}
						title="API"
						content="Proficient in designing and developing RESTful APIs using popular frameworks such as Django. Experienced in implementing various HTTP methods, handling authentication and authorization, and integrating third-party services. Skilled in documentation and testing, ensuring API reliability and scalability."
						image="./assets/api.png"
					/>
					<ExpandableContent
						isOpen={isScrumOpen}
						setOpen={setScrumOpen}
						title="Scrum"
						content="Experienced in working with Agile methodologies, particularly Scrum, during my internship at Little Arms Studios. Proficient in using Scrum frameworks to organize and manage tasks, prioritize work items, and improve team communication. Skilled in facilitating daily stand-up meetings, sprint planning, sprint reviews, and retrospectives."
						image="./assets/scrum.png"
					/>
				</ul>
			</div>
		</motion.section>
	);
}

export default Skills;
