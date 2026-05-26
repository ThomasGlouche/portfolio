import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Navbar from "./components/Navbar";
import Experience from "./sections/Experience";

export default function App() {
  return (
      <div className="min-h-screen bg-[#0B1120] text-white overflow-x-hidden">
          <Navbar />
          <Hero />
        <About />
          <Experience />
        <Projects />
        <Contact />
      </div>
  );
}