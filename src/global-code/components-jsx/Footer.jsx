import "../components-css/Footer.css";
import { Envelope, LinkedinLogo, Basket, DiscordLogo } from "@phosphor-icons/react";
import Logo from "../../assets/logo_bahoz.webp";

const Footer = () => {
  return (
    <footer id="footer">
      <img src={Logo} alt="logo Bahoz" className="logo" />
      <ul>
        <li>
          <Envelope className="icon-footer" weight="fill" color="#D1C6FF" />
          <a href="mailto:julienbraultcherif@gmail.com">
            Mail (julienbraultcherif@gmail.com)
          </a>
        </li>
        <li>
          <LinkedinLogo className="icon-footer" weight="fill" color="#D1C6FF" />
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/julien-brault-ch%C3%A9rif-aa276226b/"
          >
            Linkedin
          </a>
        </li>
        <li>
          <Basket className="icon-footer" weight="fill" color="#D1C6FF" />
          <a target="_blank" rel="noreferrer" href="https://fr.fiverr.com/bahoz_dev/create-your-website-or-landing-page-in-web-development">Fiverr</a>
        </li>
        <li>
          <DiscordLogo className="icon-footer" weight="fill" color="#D1C6FF" />
          <a target="_blank" rel="noreferrer" href="https://discord.gg/rvzyZVqdDs">Discord</a>
        </li>
      </ul>
      <span className="copyright">
        © Copyright 2024 - Julien Brault--Chérif
      </span>
    </footer>
  );
};

export default Footer;
