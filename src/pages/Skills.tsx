import SkillsComponent from "../components/SkillsComponent";
import TitlePages from "../components/TitlePages";
function Skills() {
  return (
    <>
      <div id="skills" className="sm:px-[30px] px-[15px] flex flex-col items-center justify-start py-[50px] w-full">
        <TitlePages name="Skills" />
        <SkillsComponent />
      </div>
    </>
  );
}

export default Skills;
