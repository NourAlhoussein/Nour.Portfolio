import picture from "../assets/images/picture2.jpg";
// import { IoIosArrowDown } from "react-icons/io";
// import { NavLink } from "react-router";
function HomeSection() {
  return (
    <div className="sm:px-[30px] px-[15px] text-center bg-primaryColor text-secanderyColor flex flex-col font-roboto py-[50px] gap-[50px] h-[100vh] w-full items-center justify-center">
      <img
        className="w-[150px] h-[150px] border-2 border-thirdColor rounded-full"
        src={picture}
        alt="My photo"
      />
      <div className="sm:text-4xl text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6B6EF6] to-[#B37CEB]">
        Nour Alhoussein
      </div>
      <div className="sm:text-3xl text-xl font-bold animate-pulse">
        Front End Developer (React Js)
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
