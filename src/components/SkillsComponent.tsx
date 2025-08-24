import skillsArray from "../Data/skillsData";
import SkillComponent from "./skillComponent";
function Skills() {
  return (
    <div className="grid sm:grid-cols-3 grid-cols-2 sm:mt-[80px] mt-[40px] sm:gap-5 gap-2 text-secanderyColor">
      {skillsArray.map((skill, index) => {
        return <SkillComponent key={index} skill={skill} index={index} />;
      })}
    </div>
  );
}

export default Skills;
