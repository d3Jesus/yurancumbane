import AOS from "aos";
import "./hero.css";
import { useEffect } from "react";
import { ReactTyped } from "react-typed";

function Hero() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section id="hero" className="hero section">
      <div
        className="container d-flex flex-column align-items-center justify-content-center text-center"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <h2>I am Yuran Cumbane</h2>
        <p>
          <span>
            <ReactTyped
              strings={[
                "System Analyst",
                "Web Developer",
                "RPA Developer",
                "Freelancer",
              ]}
              typeSpeed={70}
              backSpeed={40}
              loop
            />
          </span>
        </p>
      </div>
    </section>
  );
}

export default Hero;
