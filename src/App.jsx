import Hero from "./components/hero/Hero";
import Experience from "./components/experience/Experience";
import Project from "./components/recent-projects/Project";
import Writting from "./components/writting/Writting";
import Footer from "./components/footer/Footer";

import Header from "./components/Header";
import Services from "./components/services/Services";
import CTA from "./components/call-to-action/CTA";
import Contact from "./components/contact/Contact";

function App() {
  return (
    <>
      <Header />
      {/* <main className="container"> */}
      <Hero />
      <Services />
      <Experience />
      <Project />
      <Writting />
      <Contact />
      <Footer />
      {/* </main> */}
    </>
  );
}

export default App;
