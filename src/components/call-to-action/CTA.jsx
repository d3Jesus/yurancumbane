import ConfettiExplosion from "react-confetti-explosion";
import { useState } from "react";
import "./cta.css";

const CTA = () => {
  const [isExploding, setIsExploding] = useState(false);
  const copyEmail = () => {
    navigator.clipboard.writeText("yuran.dejesus@gmail.com");
    setIsExploding((explode) => !explode);
  };
  return (
    <div className="cta text-center" data-aos="fade-right" data-aos-delay="100">
      <h3 className="mb-3">Let's Create Something Amazing Together.</h3>
      <button className="shiny-cta" onClick={copyEmail}>
        <span>Copy Email</span>
      </button>
      {isExploding && <ConfettiExplosion force={0.6} />}
    </div>
  );
};

export default CTA;
