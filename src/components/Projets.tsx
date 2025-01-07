import "../styles/Projets.css";
import { useState } from "react";
import MacatoImage from "../assets/images/Macato.png";
import TravelUpImage from "../assets/images/TravelUp.png";
import reConnectImage from "../assets/images/reConnect.png";

function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isSecondaryCarouselVisible, setIsSecondaryCarouselVisible] =
    useState(false);
  const [secondarySlides, setSecondarySlides] = useState<any[]>([]);

  const slides = [
    {
      firstCard: MacatoImage, // Image de la carte principale
      secondaryCard: [
        {
          title: "Sous-carte 1",
          description: "Description de la sous-carte 1",
        },
        {
          title: "Sous-carte 2",
          description: "Description de la sous-carte 2",
        },
        {
          title: "Sous-carte 3",
          description: "Description de la sous-carte 3",
        },
      ],
    },
    {
      firstCard: TravelUpImage,
      secondaryCard: [
        {
          title: "Sous-carte A",
          description: "Description de la sous-carte A",
        },
        {
          title: "Sous-carte B",
          description: "Description de la sous-carte B",
        },
        {
          title: "Sous-carte C",
          description: "Description de la sous-carte C",
        },
      ],
    },
    {
      firstCard: reConnectImage,
      secondaryCard: [
        {
          title: "Sous-carte X",
          description: "Description de la sous-carte X",
        },
        {
          title: "Sous-carte Y",
          description: "Description de la sous-carte Y",
        },
        {
          title: "Sous-carte Z",
          description: "Description de la sous-carte Z",
        },
      ],
    },
  ];

  const handleFirstCardClick = (index: number) => {
    setCurrentSlide(index);
    setSecondarySlides(slides[index].secondaryCard);
    setIsSecondaryCarouselVisible(true);
  };

  const handleCloseSecondaryCarousel = () => {
    setIsSecondaryCarouselVisible(false);
  };

  return (
    <section>
      <div className="container">
        <div className="carousel">
          <ul className="carousel_detail">
            {slides.map((slide, index) => (
              <li key={index}>
                <button
                  onClick={() => handleFirstCardClick(index)}
                  className={currentSlide === index ? "active" : ""}
                  aria-label={`${index + 1}`}
                >
                  {/* Affichage de l'image de la première carte */}
                  <img
                    src={slide.firstCard}
                    alt={`Miniature ${index + 1}`}
                    className="first-card-image"
                  />
                </button>
                <h3>Voir le site</h3>
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
                    <h3>{card.title}</h3>
                    <p>{card.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}

export default Carousel;
