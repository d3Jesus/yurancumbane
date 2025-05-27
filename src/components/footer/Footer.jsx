import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { navItems, socials } from "../../constants";
import "./footer.css";

function Footer() {
	const toggleMenu = () => {
		setIsMenuOpen((value) => !value);
	};
	return (
		<footer className="footer pt-4 pb-2 text-white">
			<div className="container">
				<div className="row d-flex justify-content-between">
					<div className="col-lg-4 mb-3">
						<h4>Yuran Cumbane</h4>
						<p>Creating digital experiences that matter</p>
					</div>
					<div className="col-lg-4 mb-3">
						<h4>Quick Links</h4>
						<div className="quick-links">
							<ul>
								{navItems.map((item) => (
									<li key={item.id}>
										<a
											href={item.link}
											onClick={toggleMenu}
										>
											{item.title}
										</a>
									</li>
								))}
							</ul>
						</div>
					</div>
					<div className="col-lg-4 mb-3">
						<h4>Connect</h4>
						<div className="d-flex align-items-center">
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
					{/* <div className="col-md-6 col-sm-12 order-xs-2 order-sm-2 order-md-1 order-lg-1">
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
        </div> */}
				</div>
				<hr />
				<p className="text-center">&copy; 2024 Yuran Cumbane</p>
			</div>
		</footer>
	);
}

export default Footer;
