import { type skill } from "../types/index";
interface SkillProps {
  skill: skill;
  index: number;
}
function skillComponent({ skill, index }: SkillProps) {
  return (
    <div
      className={`bg-thirdColor font-medium flex flex-col items-center justify-center py-[15px] px-[20px] rounded-sm text-md cursor-pointer
        ${
          index % 2 === 0
            ? "hover:bg-[#142647] hover:border-1 hover:border-[#29549E] hover:text-[#60A5FA]"
            : "hover:bg-[#2B1E47] hover:border-1 hover:border-[#6A399F] hover:text-[#C084FC]"
        }`}
    >
      {skill.name}
    </div>
  );
}

export default skillComponent;
