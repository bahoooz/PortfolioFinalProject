import React from "react";
import { BookOpen } from "@phosphor-icons/react";
import '../components-css/Histoire.css';

const Histoire = () => {
    return ( 
        <div id="histoire">
            <div className="title">
            <BookOpen size="50px" color="#FFF" weight="regular" />
            <h1>- histoire</h1>
            </div>
            <div className="content-histoire">
                <p>Depuis tout petit passionné par l’informatique et les jeux vidéos, je découvrais mon tout premier ordinateur à l’âge de mes <span>6 ans</span>. J’avais tout de suite été intrigué par ce nouvel gros objet qui était posé dans mon salon. Je me suis donc mis a testé et a essayé de comprendre comment cela fonctionnait.</p> <br />

                <p>Des années et des années après avoir été conquis par les <span>ordinateurs et les jeux vidéos</span>, je décidais d’apprendre une nouvelle chose qui me semblait inconnue. <span>Le développement Web.</span></p> <br />

                <p>Plus particulièrement <span>HTML et CSS</span> qui m’ont tout de suite semblé génial à l’idée de pouvoir créer mes <span>propres sites internet</span> sans passer par un seul outil qui ferait les choses à notre place. J’avais donc commencé le développement Web vers l’âge de mes <span>13, 14 ans</span>.</p> <br />

                <p>Rapidement limité par la patience et les capacités que j’avais à 14 ans <span>j’abandonne</span> rapidement au chapitre des <span>Flex-box</span> et je délaisse donc le <span>développement web pendant 3 ans</span>.</p> <br />

                <p>Je reprends finalement le <span>développement web</span> en intégrant la formation <span>La Toile de l’emlyon business school</span> a mes 17 ans qui me permettra de me remettre dans le bain du développement web. Et depuis je ne cesse <span>d’apprendre et de pratiquer chaque jour</span>, j’ai pour objectif de devenir <span>développeur Full Stack</span> pour l’instant orienté vers la <span>stack MERN</span> et de pouvoir créer <span>ce que je veux</span> sur le web.</p>

                <div className="blur"></div>
            </div>
        </div>
     );
}
 
export default Histoire;