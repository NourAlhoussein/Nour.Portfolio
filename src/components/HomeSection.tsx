import picture from "../assets/images/picture2.jpg";
import TitlePages from "./TitlePages";
// import { IoIosArrowDown } from "react-icons/io";
// import { NavLink } from "react-router";
function HomeSection() {
  return (
    <div className="text-center text-secanderyColor flex flex-col font-roboto sm:gap-[50px] gap-[30px] h-[100vh] w-full items-center justify-center">
      <img
        className="w-[150px] h-[150px] border-2 border-thirdColor rounded-full mt-[100px]"
        src={picture}
        alt="My photo"
      />
      <TitlePages name="Nour Ahmad Alhoussein" />
      <div className="sm:text-3xl text-xl font-bold">
        Front End Developer
      </div>
      <div className="sm:text-lg text-sm">
        "Creating Exceptional Digital Experiences with React.js." Dedicated to
        turning complex challenges into simple, beautiful web applications.
      </div>
      {/* <button className="flex flex-col items-center justify-center">
        <div className="text-5xl mt-[40px] cursor-pointer">
          <IoIosArrowDown />
        </div>
        <p className=" cursor-pointer">Click me to more information</p>
      </button> */}
    </div>
  );
}

export default HomeSection;
