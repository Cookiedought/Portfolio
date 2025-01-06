// src/Accueil.tsx
import { useState } from "react";
import avatar1 from "./assets/images/Avatar1.png";
import avatar2 from "./assets/images/Avatar2.png";
import "./styles/Accueil.css";

function Accueil() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <header>
        <nav className="navbar">
          <ul className="link">
            <li>
              <a href="/">Accueil</a>
            </li>
            <li>
              <a href="https://github.com/Cookiedought">Github</a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/camille-lemort-562497162">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="/CV_Camille_Lemort.pdf" download="CV_Camille_Lemort.pdf">
                CV
              </a>
            </li>
            <li><a href="/">Projets</a></li>
          </ul>
        </nav>
        <div
          className="entete"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <img
            className="avatar"
            src={isHovered ? avatar2 : avatar1}
            alt="Photo et avatar de Camille Lemort"
          />
          <h1>Camille Lemort</h1>
          <p className="metier">Développeuse Web Junior</p>
        </div>
      </header>

      <main>
        <div className="presentation">
          <p>Bonjour et bienvenue sur mon portfolio.</p>
          <p>
            Si vous êtes arrivés ici c'est sûrement que mon profil vous
            intéresse, alors j'espère que vous trouverez ce que vous cherchez !
          </p>
          <i>Qui suis-je ? </i>
          <p>
            Je m'appelle Camille, j'ai 32 ans et je suis en reconversion
            professionnelle après 14 années en industries graphiques. J'ai sauté
            le pas dans le but de m'épanouir dans un métier qui me permet de
            mettre à profit ma créativité et ma soif d'apprendre!
          </p>
          <i>Pourquoi le développement web ?</i>
          <p>
            Comme beaucoup, depuis petite je suis passionnée par le numérique et
            toutes ces possibilités. Curieuse de nature, j'ai toujours aimé
            chercher par moi-même lorsque j'avais des problèmes informatiques,
            ce que je n'ai jamais perdu.
          </p>
          <i>Pourquoi moi plus qu'un ou une autre ?</i>
          <p>
            Être débutante dans ce secteur n'est pas chose facile, alors je
            compense mon manque d'expérience par une motivation sans faille, une
            volonté d’apprendre et une grande capacité d’adaptation. Ma
            personnalité pétillante et ma curiosité sont des atouts qui, je
            l'espère, vous donneront envie de m'intégrer à votre équipe!
          </p>
          <p>Alors, pourquoi ne pas me laisser ma chance ?</p>
        </div>
      </main>
    </>
  );
}

export default Accueil;
