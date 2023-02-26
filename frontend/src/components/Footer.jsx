import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "../hooks/useMediaQuery";
import { useState } from "react";

const Link = ({
  page,

  isDesktop,
  isMenuToggled,
}) => {
  return (
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
      <div className="flex items-center justify-center basis-10/12 max-w-[1320px] mx-[40px] my-[24px]">
        <ul className="flex gap-4">
          <Link page="About" />
          <Link page="Projects" />
          <Link page="Skills" />
          <Link page="Contact" />
        </ul>
      </div>
      <div>Icon Icon Icon</div>
    </nav>
  );
};

export default Footer;
