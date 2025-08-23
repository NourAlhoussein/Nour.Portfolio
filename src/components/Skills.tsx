import skillsArray from "../Data/skillsData";
import SkillComponent from "./skillComponent";
function Skills() {
  return (
    <div className="sm:px-[30px] px-[15px] flex flex-col items-center justify-start py-[50px] w-full bg-primaryColor text-secanderyColor">
      <div className="text-center sm:text-4xl text-2xl  font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6B6EF6] to-[#B37CEB]">
        Skills & Technologies
      </div>
      <div className="grid sm:grid-cols-3 grid-cols-2 mt-[80px] sm:gap-5 gap-2">
        {skillsArray.map((skill, index) => {
          return <SkillComponent key={index} skill={skill} index={index} />;
        })}
      </div>
    </div>
  );
}

export default Skills;
