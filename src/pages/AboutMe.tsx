import TitlePages from "../components/TitlePages";
function AboutMe() {
  return (
    <div
      id="aboutMe"
      className="sm:px-[30px] px-[15px] flex flex-col items-center justify-start py-[50px] w-full"
    >
      <TitlePages name="About Me" />
      <div className="text-md text-secanderyColor text-center sm:mt-[80px] mt-[40px]">
        <span className="text-lg block text-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6B6EF6] to-[#B37CEB]">
          Hi there! i'm Nour Alhoussein 
        </span>
        I am a Front End Developer (React js), My objective is to develop my
        working experience, Currently seeking new opportunities in the field of
        software engineering, I am enthusiastic about contributing to a
        forward-thinking team where my skills in React.js and passion for
        problem-solving can make a significant impact. Let's connect to explore
        potential collaborations and discuss how my background aligns with your
        organization's goals.
      </div>
    </div>
  );
}

export default AboutMe;
