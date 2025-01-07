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
      firstCard: MacatoImage, 
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
                  <img
                    src={slide.firstCard}
                    alt={`Miniature ${index + 1}`}
                    className="first-card-image"
                  />
                </button>
                <h3>Le site</h3>
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
  );
}

export default Carousel;
