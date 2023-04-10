import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "../hooks/useMediaQuery";
import { useState } from "react";
import { Link } from "react-router-dom";

const LinkAnchor = ({
  page,
  selectedPage,
  setSelectedPage,
  isDesktop,
  isMenuToggled,
}) => {
  const isResumePage = window.location.href === "http://localhost:3000/Resume";
  return isResumePage ? (
    <Link to="/">
      <div
        className="text-black font-semibold text-lg hover:text-orange-500 transition duration-150 hover:ease-in-out"
        style={{ textShadow: "1px 2px  rgb(0 0 0 /0.2)" }}
      >
        <div className="hover:scale-105 px-4 py-1.5 transition duration-150">
          {page}
        </div>
      </div>
    </Link>
  ) : (
    <AnchorLink
      className={`${
        selectedPage === page ? "text-orange-500" : "text-[#1b1c1e]"
      } ${
        !isDesktop && isMenuToggled
          ? "w-full hover:bg-slate-600 hover:bg-opacity-30 rounded-[4px]"
          : ""
      } hover:text-black transition duration-150 hover:ease-in-out font-semibold text-lg`}
      style={{ textShadow: "1px 2px  rgb(0 0 0 /0.2)" }}
      href={`#${page}`}
      onClick={() => setSelectedPage(page)}
    >
      <div
        className={`${
          !isDesktop && isMenuToggled
            ? "hover:translate-x-4 h-full py-3"
            : "hover:scale-105 px-4 py-1.5"
        } transition duration-150`}
      >
        {page}
      </div>
    </AnchorLink>
  );
};

const Navbar = ({ selectedPage, setSelectedPage }) => {
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  return (
    <nav className="flex fixed top-0 items-center justify-center w-full font-quicksand z-30">
      <div className="absolute inset-0 z-[-1]">
        <div className="w-full h-full bg-linux filter saturate-50"></div>
      </div>
      {/* Desktop Navbar */}
      {isDesktop ? (
        <div className="flex items-center justify-between basis-10/12 max-w-[1320px] mx-[40px] my-[24px]">
          <div
            className="text-[#1b1c1e] font-semibold text-lg w-[84px] justify-center place-items-center "
            style={{ textShadow: "1px 2px  rgb(0 0 0 /0.2)" }}
          >
            <h1 className="xs:w-fit sm:w-36">
              <Link to="/">Christopher Luu</Link>
            </h1>
          </div>
          <div className="flex items-center justify-center gap-4">
            <LinkAnchor
              page="About"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <LinkAnchor
              page="Projects"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <LinkAnchor
              page="Skills"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <LinkAnchor
              page="Contact"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </div>
          <Link
            to="/Resume"
            className="flex rounded-lg text-[#1b1c1e] font-semibold bg-orange-500 py-1 px-2 hover:scale-105 text-lg w-[84px] shadow-highLight-text border-[1px] border-white border-opacity-[15%]"
          >
            Resume
          </Link>
        </div>
      ) : (
        // Mobile Navbar
        <div className="basis-full">
          {!isMenuToggled ? (
            <div className="flex items-center justify-between mx-[40px] my-[24px]">
              <div className="font-semibold text-[#1b1c1e]">Christopher</div>
              <button
                className="opacity-50 p-2 hover:opacity-60 hover:scale-105 hover:ease-in-out transition duration-150"
                onClick={() => setIsMenuToggled(true)}
              >
                <img
                  alt="menu-icon"
                  src="../assets/menu.png"
                  className="hover:scale-105 hover:opacity-100 opacity-80 hover:ease-in-out transition duration-150 h-8"
                />
              </button>
            </div>
          ) : (
            <div className="basis-full flex items-center justify-between mx-[40px] my-[24px]">
              <div className="font-semibold text-[#1b1c1e]">Christopher</div>
              <button
                className="p-2 z-40"
                onClick={() => setIsMenuToggled(false)}
              >
                <img
                  alt="menu-icon"
                  src="../assets/cancel.png"
                  className="hover:scale-[135%] hover:opacity-70 opacity-50 hover:ease-in-out transition duration-150 h-8 scale-125"
                ></img>
              </button>
            </div>
          )}
        </div>
      )}
      {/* Mobile Menu popup */}
      {!isDesktop && isMenuToggled && (
        <div>
          <div className="fixed top-[90px] right-0 w-2/5 bg-slate-800 xs:w-48 m-3 rounded-lg shadow-highLight  border-[1px] border-white border-opacity-[5%]">
            <div className="flex flex-col gap-1 text-xl my-6 mx-7">
              <div className="flex flex-col gap-2 text-xl">
                <LinkAnchor
                  page="About"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                  isMenuToggled={isMenuToggled}
                  isDesktop={isDesktop}
                />
                <LinkAnchor
                  page="Projects"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                  isMenuToggled={isMenuToggled}
                  isDesktop={isDesktop}
                />
                <LinkAnchor
                  page="Skills"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                  isMenuToggled={isMenuToggled}
                  isDesktop={isDesktop}
                />
                <LinkAnchor
                  page="Contact"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                  isMenuToggled={isMenuToggled}
                  isDesktop={isDesktop}
                />
                <LinkAnchor
                  page="Resume"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                  isMenuToggled={isMenuToggled}
                  isDesktop={isDesktop}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
