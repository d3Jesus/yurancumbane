import Hero from "./components/hero/Hero";
import Experience from "./components/experience/Experience";
import Project from "./components/recent-projects/Project";
import Writting from "./components/writting/Writting";
import Footer from "./components/footer/Footer";
import Nav from "./components/NavMenu/Nav";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faHamburger, faList } from "@fortawesome/free-solid-svg-icons";
import { navItems } from "./constants";
import Header from "./components/Header";
import Services from "./components/services/Services";
import CTA from "./components/call-to-action/CTA";

function App() {
  return (
    <>
      <Header />
      <main className="container">
        <Hero />
        <Services />
        <Experience />
        <Project />
        <Writting />
        <CTA />
        <Footer />
      </main>
    </>
  );
}

export default App;
