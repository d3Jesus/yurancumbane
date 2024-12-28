import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { socials } from "../../constants";
import "./footer.css";

function Footer() {
  return (
    <footer className="footer mt-4">
      <div className="row gy-2">
        <div className="col-md-6 col-sm-12 order-xs-2 order-sm-2 order-md-1 order-lg-1">
          <p className="text-center">Copyright &copy; 2024 Yuran Cumbane</p>
        </div>
        <div className="col-md-6 col-sm-12 order-xs-1 order-sm-1 order-md-2 order-lg-2">
          <div className="d-flex align-items-center justify-content-center">
            {socials.map((social) => (
              <a
                key={social.id}
                className="social-icon"
                href={social.link}
                target="_blank"
              >
                <FontAwesomeIcon icon={social.icon} className="icon" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
