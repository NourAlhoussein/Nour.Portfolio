import { Link } from "react-scroll";
import { RiMenu5Line } from "react-icons/ri";
import { IoClose } from "react-icons/io5";
import { useState } from "react";
import SocialMedia from "./SocialMedia";
import Links from "../Data/NavbarData";
function Navbar() {
  const [menu, setMenu] = useState<boolean>(false);
  const [active, setActive] = useState("Home");
  const viewMenu = () => {
    setMenu((prev: boolean) => !prev);
  };
  return (
    <div
      className="flex flex-row items-center justify-between fixed w-full md:px-[40px] px-[15px] py-[20px]
    bg-thirdColor/70 font-rubik"
    >
      <div className="font-rubik lg:text-4xl text-3xl text-[#B37CEB] cursor-pointer">
        Nour
      </div>
      {/* Desktup Navbar */}
      <div className="sm:flex hidden lg:text-xl text-md text-[#B37CEB]">
        {Links.map((link, index) => {
          return (
            <div
              className="flex flex-col items-center justify-center"
              key={index}
            >
              <Link
                to={link.content}
                smooth={true}
                duration={800}
                spy={true}
                offset={-120}
                activeClass="is-active"
                onSetActive={() => setActive(link.name)}
                className={`peer cursor-pointer lg:text-lg sm:text-sm hover:text-[#B37CEB] sm:px-[10px] ${
                  active === link.name ? "is-active text-secanderyColor" : ""
                }`}
              >
                {link.name}
              </Link>
              <div
                className="bg-[#B37CEB] h-[1px] transition-all duration-500 ease-in-out
                  w-0 peer-[.is-active]:w-[80%]"
              ></div>
            </div>
          );
        })}
      </div>

      {/* Mobile Navbar */}
      <button
        onClick={viewMenu}
        className="sm:hidden font-rubik text-2xl text-[#B37CEB]"
      >
        <RiMenu5Line />
      </button>

      <div
        className={`sm:hidden flex flex-col items-center justify-between absolute w-full h-[100vh] top-0
        p-[20px] text-[#B37CEB] z-50 bg-primaryColor ${
          menu === true
            ? "left-0 transition-all duration-300 ease-in-out"
            : "-left-[100%] transition-all duration-300 ease-in-out"
        }`}
      >
        <button
          onClick={viewMenu}
          className="flex flex-col items-end justify-center w-full font-rubik text-3xl text-[#B37CEB]"
        >
          <IoClose />
        </button>
        <div className="flex flex-col items-center justify-center h-full gap-[30px]">
          {Links.map((link, index) => {
            return (
              <div
                className="flex flex-col items-center justify-center"
                key={index}
              >
                <Link
                  key={index}
                  to={link.content}
                  smooth={true}
                  duration={800}
                  spy={true}
                  offset={-200}
                  activeClass="is-active"
                  onSetActive={() => {
                    setActive(link.name);
                    setMenu(false);
                  }}
                  className={`peer cursor-pointer hover:text-[#B37CEB] md:px-[10px] px-[5px]  ${
                    active === link.name ? "is-active text-secanderyColor" : ""
                  }`}
                >
                  {link.name}
                </Link>
                <div className="bg-[#B37CEB] h-[1px] transition-all duration-500 ease-in-out w-0 peer-[.is-active]:w-[80%]"></div>
              </div>
            );
          })}
          <SocialMedia />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
