import { Link } from "react-scroll";
import { RiMenu5Line } from "react-icons/ri";
import { IoClose } from "react-icons/io5";
import { useState } from "react";
import SocialMedia from "./SocialMedia";
function Navbar() {
  const [menu, setMenu] = useState<boolean>(false);
  const viewMenu = () => {
    setMenu((prev: boolean) => !prev);
  };
  return (
    <div
      className="flex flex-row items-center justify-between fixed w-full sm:px-[40px] px-[15px] py-[20px]
    bg-thirdColor/70 font-rubik"
    >
      <div className="font-rubik lg:text-4xl text-3xl text-[#B37CEB] cursor-pointer">
        Nour
      </div>
      <div className="sm:flex hidden lg:text-xl text-md text-[#B37CEB]">
        <Link
          to="Home"
          smooth={true}
          duration={800}
          className="cursor-pointer hover:text-[#B37CEB] md:px-[10px] px-[5px]"
        >
          Home
        </Link>
        <Link
          to="aboutMe"
          smooth={true}
          duration={800}
          className="cursor-pointer hover:text-[#B37CEB] md:px-[10px] px-[5px]"
        >
          About Me
        </Link>
        <Link
          to="skills"
          smooth={true}
          duration={800}
          className="cursor-pointer hover:text-[#B37CEB] md:px-[10px] px-[5px]"
        >
          Skills
        </Link>
        <Link
          to="projects"
          smooth={true}
          duration={800}
          className="cursor-pointer hover:text-[#B37CEB] md:px-[10px] px-[5px]"
        >
          Projects
        </Link>
        <Link
          to="contact"
          smooth={true}
          duration={800}
          className="cursor-pointer hover:text-[#B37CEB] md:px-[10px] px-[5px]"
        >
          Contact
        </Link>
      </div>
      <button
        onClick={viewMenu}
        className="sm:hidden font-rubik text-2xl text-[#B37CEB]"
      >
        <RiMenu5Line />
      </button>

      <div
        className={`sm:hidden flex flex-col items-center justify-between absolute w-full h-[100vh] top-0
        p-[20px] text-[#B37CEB] z-10 bg-primaryColor ${
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
        <div className="flex flex-col items-center justify-start gap-[50px]">
          <Link
            to="Home"
            smooth={true}
            duration={800}
            className="cursor-pointer hover:text-[#B37CEB] md:px-[10px] px-[5px]"
            onClick={viewMenu}
          >
            Home
          </Link>
          <Link
            to="aboutMe"
            smooth={true}
            duration={800}
            className="cursor-pointer hover:text-[#B37CEB] md:px-[10px] px-[5px]"
            onClick={viewMenu}
          >
            About Me
          </Link>
          <Link
            to="skills"
            smooth={true}
            duration={800}
            className="cursor-pointer hover:text-[#B37CEB] md:px-[10px] px-[5px]"
            onClick={viewMenu}
          >
            Skills
          </Link>
          <Link
            to="projects"
            smooth={true}
            duration={800}
            className="cursor-pointer hover:text-[#B37CEB] md:px-[10px] px-[5px]"
            onClick={viewMenu}
          >
            Projects
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={800}
            className="cursor-pointer hover:text-[#B37CEB] md:px-[10px] px-[5px]"
            onClick={viewMenu}
          >
            Contact
          </Link>
        </div>
        <SocialMedia />
      </div>
    </div>
  );
}

export default Navbar;
