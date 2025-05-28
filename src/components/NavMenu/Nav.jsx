import "./navmenu.css";
import { navItems } from "../../constants";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen((value) => !value);
  };
  return (
    <nav
      id="navmenu"
      className={`navmenu ${isMenuOpen ? "mobile-nav-active" : ""}`}
    >
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
      {isMenuOpen ? (
        <FontAwesomeIcon
          className="mobile-nav-toggle d-xl-none"
          icon={faX}
          onClick={toggleMenu}
        />
      ) : (
        <FontAwesomeIcon
          className="mobile-nav-toggle d-xl-none"
          icon={faBars}
          onClick={toggleMenu}
        />
      )}
    </nav>
  );
}

export default Nav;
