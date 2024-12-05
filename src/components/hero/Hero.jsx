
//import { faMedium } from '@fortawesome/free-brands-svg-icons';
import AOS from 'aos';
import './hero.css'
import { useEffect } from 'react';

function Hero() {
    useEffect(() =>{
        AOS.init()
    },[])

    return (
        <section id="hero" className="hero section">
            <div className="container" data-aos="fade-up" data-aos-delay="100">
                <div className="row">
                    <div className="hero-content" data-aos="fade-up" data-aos-delay="200">
                        <h6> Hi, my name is </h6>
                        <h1 className="mb-1">
                            Yuran Cumbane
                        </h1>
                        <h3>
                            Web developer focused on creating impactful solutions. 
                        </h3>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero