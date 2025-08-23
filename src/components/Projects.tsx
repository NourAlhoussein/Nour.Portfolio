import projectsArray from "../Data/projectsData";
import ProjectComponent from "./projectComponent";
import ReactPaginate from "react-paginate";
import { useEffect, useState } from "react";
// import { motion } from "motion/react";
function Projects() {
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(2);
  useEffect(() => {
    const updateItemPerPage = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setItemsPerPage(1);
      } else if (width >= 640 && width < 1536) {
        setItemsPerPage(2);
      } else if (width >= 1536) {
        setItemsPerPage(3);
      }
    };
    updateItemPerPage();
    window.addEventListener("resize", updateItemPerPage);
    return () => {
      window.removeEventListener("resize", updateItemPerPage);
    };
  }, []);

  // Calculate the start and end index of the items to display
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Get the items to display for the current page
  const currentItems = projectsArray.slice(startIndex, endIndex);
  const pageCount = Math.ceil(projectsArray.length / itemsPerPage);

  const handlePageClick = (event: { selected: number }) => {
    if (event.selected >= pageCount) {
      setCurrentPage(0);
      console.log(currentPage);
    } else {
      setCurrentPage(event.selected);
    }
  };

  return (
    <div className="sm:px-[30px] px-[15px] flex flex-col items-center justify-start py-[50px] w-full bg-primaryColor dark:text-secanderyColor">
      <div className="text-center sm:text-4xl text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6B6EF6] to-[#B37CEB]">
        Featured Projects
      </div>

      <div className="grid 2xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-[80px] gap-[60px]">
        {currentItems.map((project, index) => (
          <ProjectComponent key={index} project={project} />
        ))}
      </div>
      <div>
        <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next"}
          breakLabel={"..."}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageClick}
          containerClassName={
            "flex justify-center sm:p-[30px] sm:space-x-2 space-x-1 text-xs"
          }
          pageClassName={
            "pagination-item sm:px-4 sm:py-2 px-2 py-1 text-secanderyColor border-1 border-secanderyColor cursor-pointer rounded hover:bg-thirdColor hover:border-0"
          }
          pageLinkClassName={"px-0 py-0"}
          previousClassName={"pagination-item flex justify-center"}
          previousLinkClassName={
            "sm:px-4 sm:py-2 px-2 py-1 text-secanderyColor border-1 border-secanderyColor cursor-pointer rounded hover:bg-thirdColor hover:border-0"
          }
          nextClassName={"pagination-item flex justify-center"}
          nextLinkClassName={
            "sm:px-4 sm:py-2 px-2 py-1 text-secanderyColor border-1 border-secanderyColor cursor-pointer rounded hover:bg-thirdColor hover:border-0"
          }
          breakClassName={"pagination-item"}
          breakLinkClassName={
            "sm:px-4 sm:py-2 px-2 py-1 border-secanderyColor rounded"
          }
          activeClassName={"!border-0 bg-thirdColor text-white"}
        />
      </div>
    </div>
  );
}

export default Projects;
