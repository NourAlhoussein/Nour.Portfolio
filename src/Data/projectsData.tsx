import type { project } from "../types";
import l from "../assets/images/l.png";
import Flora from "../assets/images/Flora.webp";
// import ProductSales from "../assets/images/Product Sales.webp";
import Firnature from "../assets/images/firnature.png";
import Cleaning from "../assets/images/cleaning.webp";
import StyleLoom from "../assets/images/Style.Loom1.png";
import Blog from "../assets/images/Blogs.png";

const projectsArray: project[] = [
  {
    id: 0,
    image: Blog,
    title: "The Blogs",
    description:
      "Designing responsive blogs for all screen sizes (small, medium, and large) in dark and light modes using Vite, written in TypeScript, creating pages using a router provider, formatting them using Tailwind, and implementing a status management application.",
    link: "https://nouralhoussein.github.io/Task_6_Blogs",
  },
  {
    id: 1,
    image: StyleLoom,
    title: "Style.Loom",
    description:
      "A project to sell products using the technology of React, Typescript, Tailwind, Redux Toolkit",
    link: "https://nouralhoussein.github.io/Style.Loom",
  },
  {
    id: 2,
    image: l,
    title: "Little Learner",
    description:
      "This project is built using react js, Vite, and React Router Dom and is responsive to all screens.",
    link: "https://nouralhoussein.github.io/Task_3",
  },
  {
    id: 3,
    image: Flora,
    title: "Flora Project",
    description:
      "A project for reserving apartments and real estate (flora landing page) in a responsive manner for all small, medium and large screens (Responsive) using React Vite built in TypeScript language.",
    link: "https://nouralhoussein.github.io/Task_4/",
  },
  // {
  //   id: 4,
  //   image: ProductSales,
  //   title: "Product Sales",
  //   description:
  //     "A project to design a dashboard for a product sales website that is responsive to all screens using Vite, written in typescript, creating pages using routerprovider, formatting using React bootstrap, and applying connectivity with API.",
  //   link: "https://nouralhoussein.github.io/Task_5/",
  // },
  {
    id: 5,
    image: Firnature,
    title: "Firnature",
    description:
      "landing page for Home furniture selling created using html, css, js and bootstrap with Popup in login button",
    link: "https://nouralhoussein.github.io/Firnature/#home",
  },
  {
    id: 6,
    image: Cleaning,
    title: "Cleaning Project",
    description:
      "landing page for Cleaning created using React and react-bootstrap and react-router-dom",
    link: "https://nouralhoussein.github.io/Cleaning_web/",
  },
];

export default projectsArray;
