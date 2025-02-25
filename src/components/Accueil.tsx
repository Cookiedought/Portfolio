import { useState } from "react";
import avatar1 from "../assets/images/Avatar1.png";
import avatar2 from "../assets/images/Avatar2.png";
import "../styles/Accueil.css";
import CSSLogo from "../assets/images/CSS.png";
import HTMLLogo from "../assets/images/HTML5.png";
import IllustratorLogo from "../assets/images/Illustrator.png";
import IndesignLogo from "../assets/images/Indesign.png";
import JSLogo from "../assets/images/JS.png";
import ReactLogo from "../assets/images/React.png";
import SQLLogo from "../assets/images/SQL.png";
import TSLogo from "../assets/images/TS.png";
import ViteLogo from "../assets/images/Vite.png";
import GithubLogo from "../assets/images/Github.png";
import GitbashLogo from "../assets/images/Gitbash.png";
import "../styles/Projets.css";
import MacatoImage from "../assets/images/Macato.png";
import TravelUpImage from "../assets/images/TravelUp.png";
import reConnectImage from "../assets/images/reConnect.png";

function Accueil() {
  const [isHovered, setIsHovered] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isSecondaryCarouselVisible, setIsSecondaryCarouselVisible] =
    useState(false);
  const [secondarySlides, setSecondarySlides] = useState<any[]>([]);

  const handleContactClick = () => {
    window.location.href = "mailto:b.lemortcamille@gmail.com";
  };

  const logos = [
    { src: ReactLogo },
    { src: CSSLogo },
    { src: HTMLLogo },
    { src: TSLogo },
    { src: JSLogo },
    { src: ViteLogo },
    { src: SQLLogo },
    { src: GithubLogo },
    { src: GitbashLogo },
    { src: IllustratorLogo },
    { src: IndesignLogo },
  ];

  const slides = [
    {
      firstCard: MacatoImage,
      link: "https://nzlthomas.github.io/Macato-Eats/",
      secondaryCard: [
        {
          title: "Présentation du projet",
          description: "Description",
        },
        {
          title: "Framework",
          description: "Explications",
        },
        {
          title: "Finalité",
          description: "Présentation",
        },
      ],
    },
    {
      firstCard: TravelUpImage,
      link: "https://travel-up.netlify.app/",
      secondaryCard: [
        {
          title: "Présentation du projet",
          description: "Description",
        },
        {
          title: "Framework",
          description: "Explications",
        },
        {
          title: "Finalité",
          description: "Présentation",
        },
      ],
    },
    {
      firstCard: reConnectImage,
      secondaryCard: [
        {
          title: "Présentation du projet",
          description: "Description",
        },
        {
          title: "Framework",
          description: "Explications",
        },
        {
          title: "Finalité",
          description: "Présentation",
        },
      ],
    },
  ];

  const handleFirstCardClick = (index: number) => {
  setCurrentSlide(index);
  setSecondarySlides(slides[index].secondaryCard);
  setIsSecondaryCarouselVisible(true);

  // Scrolling jusqu'à la carte sélectionnée
  const cardSection = document.getElementById(`firstCard-${index}`);
  if (cardSection) {
    cardSection.scrollIntoView({ behavior: "smooth" }); // Défilement fluide
  }
};


  const handleCloseSecondaryCarousel = () => {
    setIsSecondaryCarouselVisible(false);
  };

  return (
    <>
      <header>
        <div className="entete">
          <img
            className="avatar"
            src={isHovered ? avatar2 : avatar1}
            alt="Photo et avatar de Camille Lemort"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
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

          <button className="contact" onClick={handleContactClick}>
            Contactez-moi ici !
          </button>
        </div>

        <div className="logos">
          {logos.map((logo, index) => (
            <img
              key={index}
              src={logo.src}
              className="logo"
              alt={`Logo ${index}`}
            />
          ))}
        </div>

        <section id="Projets">
          <div className="container">
            <div className="carousel">
              <ul className="carousel_detail">
                {slides.map((slide, index) => (
                  <li key={index} id={`firstCard-${index}`}>
                    <button
                      onClick={() => handleFirstCardClick(index)}
                      className={currentSlide === index ? "active" : ""}
                      aria-label={`${index + 1}`}
                    >
                      <img
                        src={slide.firstCard}
                        alt={`Miniature ${index + 1}`}
                        className="first-card-image"
                      />
                    </button>
                    <a
                      href={slide.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-website"
                    >
                      Voir le site
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {isSecondaryCarouselVisible && (
              <div className="secondary-carousel">
                <button
                  className="close-carousel"
                  onClick={handleCloseSecondaryCarousel}
                >
                  Fermer
                </button>
                <ul className="secondary-carousel_slides">
                  {secondarySlides.map((card, index) => (
                    <li key={index} className="secondary-carousel_slide">
                      <div className="card">
                        <h4>{card.title}</h4>
                        <p>{card.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </section>
      </main>

      <footer>© 2025 Portfolio Camille Lemort | Tous droits réservés.</footer>
    </>
  );
}

export default Accueil;
