import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "../hooks/useMediaQuery";
import { useState } from "react";

const Link = ({
  page,
  selectedPage,
  setSelectedPage,
  isDesktop = null,
  isMenuToggled = null,
}) => {
  return (
    <AnchorLink
      className={`${
        selectedPage === page
          ? "text-white rounded-lg "
          : "rounded-lg text-slate-700"
      } ${
        !isDesktop && isMenuToggled
          ? "w-3/4 flex justify-center py-4 m-4 "
          : "flex px-4 py-1.5"
      } hover:text-white transition duration-300 hover:scale-110 hover:bg-hover-text hover:ease-in-out hover:bg-slate-600`}
      href={`#${page}`}
      onClick={() => setSelectedPage(page)}
    >
      {page}
    </AnchorLink>
  );
};

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }) => {
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const navbarBackground = isTopOfPage
    ? ""
    : "backdrop-blur-2xl shadow-sm shadow-black bg-black bg-opacity-10";

  return (
    <nav
      className={`${navbarBackground} flex items-center justify-center basis-full`}
    >
      {/* Desktop Navbar */}
      {isDesktop ? (
        <div className="flex items-center justify-between basis-[1120px] mx-[40px] my-[24px]">
          <div className="">Christopher</div>
          <div className="flex items-center justify-center gap-4">
            <Link
              page="All"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
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
              page="Resume"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </div>
          <Link
            className="flex rounded-full text-black bg-slate-700 p-1 "
            page="Contact"
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          ></Link>
        </div>
      ) : (
        // Mobile Navbar
        <div className="flex items-center justify-between basis-full mx-[40px] my-[24px]">
          <div>Christopher</div>
          <button
            className="rounded-full bg-slate-600 p-2"
            onClick={() => setIsMenuToggled(!isMenuToggled)}
          >
            <img alt="menu-icon" src="../assets/menu-icon.svg" />
          </button>
        </div>
      )}

      {/* Mobile Menu popup */}
      {!isDesktop && isMenuToggled && (
        <div className="fixed top-0 h-screen right-0 w-2/5 bg-black">
          <button
            className="flex justify-end py-8 px-12"
            onClick={() => setIsMenuToggled(!isMenuToggled)}
          >
            <img
              alt="close-icon"
              src="../assets/close-icon.svg"
              className="scale-125"
            ></img>
          </button>

          <div className="flex flex-col place-items-center gap-4 text-2xl">
            <Link
              page="All"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
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
              page="Resume"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              className="flex rounded-full text-black bg-slate-700 p-1 "
              page="Contact"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
