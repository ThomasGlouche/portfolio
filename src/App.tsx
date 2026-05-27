import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Navbar from "./components/Navbar";
import Experience from "./sections/Experience";
import Skills from "./sections/Skills";
import Stats from "./sections/Stats";

export default function App() {
  return (
      <div className="min-h-screen bg-[#0B1120] text-white overflow-x-hidden">
          <Navbar />
          <Hero />
          <Stats />
        <About />
          <Experience />
          <Skills />
        <Projects />
          <Contact />
      </div>
  );
}