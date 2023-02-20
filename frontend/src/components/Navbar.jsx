import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "../hooks/useMediaQuery";
import { useState } from "react";

const Link = ({
  page,
  selectedPage,
  setSelectedPage,
  isDesktop,
  isMenuToggled,
}) => {
  return (
    <AnchorLink
      className={`${
        selectedPage === page ? "text-orange-500" : "text-[#676767]"
      } ${
        !isDesktop && isMenuToggled
          ? "w-full hover:bg-slate-600 hover:bg-opacity-30 rounded-[4px]"
          : ""
      } hover:text-black transition duration-150 hover:ease-in-out font-semibold`}
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
    <nav className="flex fixed top-0 items-center justify-center w-full font-quicksand backdrop-blur-xl bg-black bg-opacity-0 border-b border-slate-50/[0.06] z-30">
      {/* Desktop Navbar */}
      {isDesktop ? (
        <div className="flex items-center justify-between basis-10/12 max-w-[1320px] mx-[40px] my-[24px]">
          <div className="text-[#676767] font-semibold">Christopher</div>
          <div className="flex items-center justify-center gap-4">
            <Link
              page="About"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Projects"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Skills"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Contact"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </div>
          <Link
            className="flex rounded-full text-black bg-slate-700 p-1 "
            page="Resume"
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          ></Link>
        </div>
      ) : (
        // Mobile Navbar
        <div className="basis-full">
          {!isMenuToggled ? (
            <div className="flex items-center justify-between mx-[40px] my-[24px]">
              <div className="font-semibold">Christopher</div>
              <button
                className="opacity-50 p-2 hover:opacity-60 hover:scale-105 hover:ease-in-out transition duration-150"
                onClick={() => setIsMenuToggled(true)}
              >
                <img alt="menu-icon" src="../assets/menu-icon.svg" />
              </button>
            </div>
          ) : (
            <div className="basis-full flex items-center justify-between mx-[40px] my-[24px]">
              <div>Christopher</div>
              <button
                className="p-2 z-40"
                onClick={() => setIsMenuToggled(false)}
              >
                <img
                  alt="close-icon"
                  src="../assets/close-icon.svg"
                  className="hover:scale-105 hover:opacity-100 opacity-80 hover:ease-in-out transition duration-150"
                ></img>
              </button>
            </div>
          )}
        </div>
      )}
      {/* Mobile Menu popup */}
      {!isDesktop && isMenuToggled && (
        <div>
          <div className="fixed top-[90px] right-0 w-2/5 bg-slate-800 bg-opacity-80 m-4 rounded-lg shadow-highLight backdrop-blur-xl border-[1px] border-white border-opacity-[5%]">
            <div className="flex flex-col gap-1 text-xl my-6 mx-7">
              <Link
                page="All"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
                isMenuToggled={isMenuToggled}
                isDesktop={isDesktop}
              />
              <div className="h-[1px] bg-slate-700" />
              <div className="flex flex-col gap-2 text-xl">
                <Link
                  page="About"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                  isMenuToggled={isMenuToggled}
                  isDesktop={isDesktop}
                />
                <Link
                  page="Projects"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                  isMenuToggled={isMenuToggled}
                  isDesktop={isDesktop}
                />
                <Link
                  page="Skills"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                  isMenuToggled={isMenuToggled}
                  isDesktop={isDesktop}
                />
                <Link
                  page="Resume"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                  isMenuToggled={isMenuToggled}
                  isDesktop={isDesktop}
                />
                <Link
                  page="Contact"
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
