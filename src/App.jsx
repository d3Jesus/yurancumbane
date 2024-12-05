import Hero from './components/hero/Hero';
import Experience from './components/experience/Experience';
import Project from './components/recent-projects/Project';
import Writting from './components/writting/Writting';
import Footer from './components/footer/Footer';
import Nav from './components/NavMenu/Nav';

function App() {
  return (
    <main className="container">
      <Nav />
      <Hero />
      <Experience />
      <Project />
      <Writting />
      <Footer />
    </main>

  )
}

export default App
