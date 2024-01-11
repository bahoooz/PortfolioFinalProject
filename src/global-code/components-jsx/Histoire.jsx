import React from "react";
import { BookOpen } from "@phosphor-icons/react";
import "../components-css/Histoire.css";

const Histoire = () => {
  return (
    <div id="histoire">
      <div className="title">
        <BookOpen size="50px" color="#FFF" weight="regular" />
        <h1>- histoire</h1>
      </div>
      <div className="container-histoire">
        <div className="timeline">
          <div className="point p1"></div>
          <div className="point p2"></div>
          <div className="point p3"></div>
          <div className="point p4"></div>
          <span className="date-1 date">2023</span>
          <span className="date-2 date">2024</span>
          <p className="timeline-text tx1">
            Formation développement web chez
            <span>La Toile Emlyon business</span> school sur une durée de 4 mois
            avec obtention d’une <span>certification développement web</span> et
            un <span>trophée meilleur prototype</span> obtenu lors d’un{" "}
            <span>hackaton</span> avec plusieurs entreprises
          </p>
          <p className="timeline-text tx2">
            Stage de 3 mois effectué chez <span>l’entreprise UTF France</span>
            pour la réalisation d’une <span>Progressive Web App</span> pour
            faciliter le recrutement des candidats. Chargé exclusivement de la
            partie <span>front-end</span> et du <span>design</span>.
          </p>
          <p className="timeline-text tx3">
            Apprentissage en <span>autodidacte</span> à la maison,
            <span>veille technique</span>, tutos et projets personnels
          </p>
          <p className="timeline-text tx4">
            Future formation <span>Full Stack</span> avec <span>MERN</span> pour
            le début d’année <span>2024</span>.
          </p>
        </div>
      </div>
      <div className="blur blur-1"></div>
      <div className="blur blur-2"></div>
      <div className="blur blur-3"></div>
    </div>
  );
};

export default Histoire;
