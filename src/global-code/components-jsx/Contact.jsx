import React from "react";
import '../components-css/Contact.css'
import { EnvelopeSimpleOpen } from "@phosphor-icons/react";

const Contact = () => {
  return (
    <div id="contact">
      <div className="title">
        <EnvelopeSimpleOpen size="50px" color="#FFF" weight="regular" />
        <h1>- contact</h1>
      </div>
      <div className="coordonnees">
      <p>
        <span>Adresse email de contact :</span> <br />
        <a className="email" href="mailto:julienbraultcherif@gmail.com">
          julienbraultcherif@gmail.com
        </a>
      </p>
      <p><span>Linkedin :</span> <a className="linkedin" target="_blank" href="https://www.linkedin.com/in/julien-brault-ch%C3%A9rif-aa276226b/">ici</a></p>
              
      </div>
    </div>
  );
};

export default Contact;
