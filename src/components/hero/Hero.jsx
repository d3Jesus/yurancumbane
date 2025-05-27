import AOS from "aos";
import "./hero.css";
import { useEffect } from "react";
import { ReactTyped } from "react-typed";

function Hero() {
	useEffect(() => {
		AOS.init();
	}, []);

	return (
		<main className="container">
			<section id="hero" className="hero section m-0">
				<div
					className="row align-items-center justify-content-between"
					data-aos="fade-up"
					data-aos-delay="100"
				>
					<div className="col-lg-6">
						<h2>Hi 👋, my name is Yuran Cumbane</h2>
						<p>
							Creating beautiful and functional digital experience that make a difference.
						</p>
						<div className="d-flex gap-2 my-3">
							<a className="btn btn-dark" href="#projects">View Projects</a>
							<a className="btn btn-outline-dark" href="#contact">Contact Me</a>
						</div>
					</div>
					<div className="col-lg-6">
						<img src="./portfolio.PNG" className="img-fluid" alt="YC picture" width={622} height={312} />
					</div>
				</div>
			</section>
		</main>
	);
}

export default Hero;
