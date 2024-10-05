import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Education from "./Components/Education/Education";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Projects from "./Components/Projects/Projects";
import Skills from "./Components/Skills/Skills";
import Testimonials from "./Components/Testimonials/Testimonials";

function App() {

  const projectNames = [
    "VulSca: Vulnerability scanning tool",
    "AGRIBS: Platform for farmers",
    "MEDIX: AI-Powered Medical platform"
  ];

  return (
    <div className="overflow-x-hidden">
      <Header />
      <Home />
      <About />
      <Skills />
      <Education />
      <Projects projectNames={projectNames}/>
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
