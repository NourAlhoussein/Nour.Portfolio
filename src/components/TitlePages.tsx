import { type Title } from "../types";
function TitlePages({ name }: Title) {
  return (
    <>
      <div className="text-center sm:text-4xl text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6B6EF6] to-[#B37CEB]">
        {name}
      </div>
    </>
  );
}

export default TitlePages;
