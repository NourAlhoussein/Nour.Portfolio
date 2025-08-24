import { type skill } from "../types/index";
import { motion } from "framer-motion";
interface SkillProps {
  skill: skill;
  index: number;
}
function skillComponent({ skill, index }: SkillProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }} // start hidden & moved down
      whileInView={{ opacity: 1, y: 0 }} // animate when in view
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }} // animate once, when 30% visible
      className={`bg-thirdColor font-medium flex flex-col items-center justify-center py-[15px] px-[20px] rounded-sm text-md cursor-pointer
        ${
          index % 2 === 0
            ? "hover:bg-[#142647] hover:border-1 hover:border-[#29549E] hover:text-[#60A5FA]"
            : "hover:bg-[#2B1E47] hover:border-1 hover:border-[#6A399F] hover:text-[#C084FC]"
        }`}
    >
      {skill.name}
    </motion.div>
  );
}

export default skillComponent;
