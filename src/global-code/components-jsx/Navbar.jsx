import {
  Package,
  BookOpen,
  EnvelopeSimpleOpen,
  Lightning,
} from "@phosphor-icons/react";
import "../../global-code/components-css/Navbar.css";
import Logo from "../../assets/logo_bahoz.webp";

const Navbar = () => {
  return (
    <nav>
      <div className="left-nav">
        <img
          onClick={() => scrollTo({ top: "0", left: "0", behavior: "smooth" })}
          src={Logo}
          alt="logo bahoz"
        />
        <span className="url">
          bahoz-dev.com
        </span>
      </div>
      <ul className="icons-navbar">
        <a href="#portfolio">
          <li>
            <Package weight="regular" />
            <div className="infobulle-navbar">
              <span>Portfolio</span>
            </div>
          </li>
        </a>
        <a href="#skills">
          <li>
            <Lightning weight="regular" />
            <div className="infobulle-navbar">
              <span>Skills</span>
            </div>
          </li>
        </a>
        <a href="#histoire">
          <li>
            <BookOpen weight="regular" />
            <div className="infobulle-navbar">
              <span>Histoire</span>
            </div>
          </li>
        </a>
        <a href="#footer">
          <li>
            <EnvelopeSimpleOpen weight="regular" />
            <div className="infobulle-navbar">
              <span>Contact</span>
            </div>
          </li>
        </a>
      </ul>
    </nav>
  );
};

export default Navbar;
