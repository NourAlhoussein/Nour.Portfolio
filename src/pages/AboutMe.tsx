import TitlePages from "../components/TitlePages";
function AboutMe() {
  return (
    <div
      id="aboutMe"
      className="flex flex-col items-center justify-start py-[50px] w-full"
    >
      <TitlePages name="About Me" />
      <div className="text-md text-secanderyColor text-center sm:mt-[80px] mt-[40px]">
        {/* <span className="text-lg block text-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6B6EF6] to-[#B37CEB]">
          Hi there! i'm Nour Alhoussein
        </span> */}
        I am a <span className="font-bold">Front End Developer</span>. I
        attended an advanced course on{" "}
        <span className="font-bold">React.js </span> at
        <a
          href="https://focal-x.com/"
          className="font-bold text-[#B37CEB] hover:text-secanderyColor px-[5px]"
          target="_blank"
        >
          Focal X
        </a>
        agency,and in{" "}
        <a
          href="https://www.facebook.com/share/1EC6dXAAad/"
          className="font-bold text-[#B37CEB] hover:text-secanderyColor px-[5px]"
          target="_blank"
        >
          {" "}
          JCI{" "}
        </a>{" "}
        organization in partnership with{" "}
        <a
          href="https://my.syriatel.sy/"
          className="font-bold text-[#B37CEB] hover:text-secanderyColor px-[5px]"
          target="_blank"
        >
          {" "}
          Syriatel{" "}
        </a>{" "}
        which strengthened my expertise in building scalable and efficient web
        applications. My objective is to expand my professional experience, and
        I am currently seeking new opportunities in the field of software
        engineering. I am enthusiastic about contributing to a forward-thinking
        team where my skills in React.js and passion for problem-solving can
        make a meaningful impact. Let’s connect to explore potential
        collaborations and discuss how my background aligns with your
        organization’s goals.
      </div>
    </div>
  );
}

export default AboutMe;
