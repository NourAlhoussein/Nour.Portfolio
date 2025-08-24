import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import AboutMe from "./pages/AboutMe";
function App() {
  return (
    <>
      <div className="bg-primaryColor">
        <Navbar />
        <div className="sm:px-[30px] px-[15px]">
          <Home />
          <AboutMe />
          <Skills />
          <Projects />
        </div>
        <Contact />
      </div>
    </>
  );
}

export default App;
