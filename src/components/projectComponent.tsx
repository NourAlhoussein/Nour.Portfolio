import { type project } from "../types";
import { GoArrowRight } from "react-icons/go";
interface projectProp {
  project: project;
}
function projectComponent({ project }: projectProp) {
  return (
    <div className="max-w-[400px] mb-[20px]">
      <img
        className="sm:h-[280px] h-[250px] w-full rounded-t-xl"
        src={project.image}
        alt=""
      />
      <div
        className="flex flex-col justify-between p-[20px] sm:gap-[20px] gap-[10px] rounded-b-xl bg-thirdColor text-secanderyColor h-[220px]"
      >
        <div className="text-2xl font-medium   hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#6B6EF6] hover:to-[#B37CEB]">{project.title}</div>
        <div className="flex items-start h-full overflow-y-auto scrollbar-thin text-sm">
          {project.description}
        </div>
        <a
          className="flex flex-row items-center text-transparent bg-clip-text bg-gradient-to-r from-[#6B6EF6] to-[#B37CEB]"
          href={project.link}
          target="_blank"
        >
          View Project{" "}
          <span className="ml-[10px] text-sm text-[#6B6EF6]">
            <GoArrowRight />
          </span>
        </a>
      </div>
    </div>
  );
}

export default projectComponent;
