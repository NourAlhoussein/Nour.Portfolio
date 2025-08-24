import ProjectsComponent from "../components/ProjectsComponent";
import TitlePages from "../components/TitlePages";
function Projects() {
  return (
    <div id="projects" className="flex flex-col items-center justify-start py-[50px] w-full">
      <TitlePages name="Featured Projects" />
      <ProjectsComponent />
    </div>
  );
}

export default Projects;
