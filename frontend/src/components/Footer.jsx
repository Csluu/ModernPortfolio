import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "../hooks/useMediaQuery";
import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const LinkAnchor = ({ page }) => {
	const isResumePage = window.location.href === "https://www.csluu.com/Resume";
	return isResumePage ? (
		<Link to="/">
			<div
				className="text-[#1b1c1e] hover:text-black transition duration-150 hover:ease-in-out font-semibold text-lg hover:scale-105"
				style={{ textShadow: "1px 2px  rgb(0 0 0 /0.2)" }}
			>
				{page}
			</div>
		</Link>
	) : (
		<AnchorLink
			className="text-[#1b1c1e] hover:text-black transition duration-150 hover:ease-in-out font-semibold text-lg hover:scale-105"
			style={{ textShadow: "1px 2px  rgb(0 0 0 /0.2)" }}
			href={`#${page}`}
		>
			{page}
		</AnchorLink>
	);
};

const Footer = ({ selectedPage }) => {
	return (
		<nav className="flex flex-col items-center justify-center w-full font-quicksand p-5">
			<div className="flex items-center justify-center basis-10/12 max-w-[1320px] mx-[40px] my-[20px] h-fit">
				<ul className="flex gap-4">
					<LinkAnchor page="About" />
					<LinkAnchor page="Projects" />
					<LinkAnchor page="Skills" />
					<LinkAnchor page="Contact" />
				</ul>
			</div>
			<div className="flex flex-row gap-2">
				<a
					href="https://www.linkedin.com/in/csluu/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img
						src="./assets/linkedin32.png"
						alt="LinkedIn Profile"
						className="opacity-40 w-fit h-fit hover:scale-105 hover:opacity-60"
					/>
				</a>
				<a
					href="https://github.com/Csluu"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img
						src="./assets/github32.png"
						alt="github profile"
						className="opacity-40 w-fit h-fit hover:scale-105 hover:opacity-60"
					/>
				</a>
			</div>
		</nav>
	);
};

export default Footer;
