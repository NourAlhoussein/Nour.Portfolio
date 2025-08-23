import "./App.css";
import HomeSection from "./components/HomeSection";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
function App() {
  return (
    <>
      <div className="bg-primaryColor">
        <HomeSection />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </>
  );
}

export default App;
