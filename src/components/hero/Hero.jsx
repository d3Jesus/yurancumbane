import AOS from "aos";
import "./hero.css";
import { useEffect } from "react";

function Hero() {
	useEffect(() => {
		AOS.init();
	}, []);

	return (
		<main className="container">
			<section id="hero" className="hero section m-0">
				<h1 className="text-uppercase" data-aos="fade-up" data-aos-delay="100">Yuran Cumbane</h1>
				<p data-aos="fade-up" data-aos-delay="200">
					<span>Creating beautiful and functional digital experience that make a difference.</span>
				</p>
				<div className="d-flex gap-2 mt-5" data-aos="fade-up" data-aos-delay="300">
					<a className="btn btn-dark" href="#projects">View Projects</a>
					<a className="btn btn-outline-dark" href="#contact">Contact Me</a>
				</div>
			</section>
		</main>
	);
}

export default Hero;
