import React from "react";
import { Link } from "react-router-dom";
import "../styles/NavBar.css";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <ul className="link">
        <li>
          <Link to="/">Accueil</Link>
        </li>
        <li>
          <a href="https://github.com/Cookiedought" target="_blank">
            Github
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/camille-lemort-562497162"
            target="_blank"
          >
            LinkedIn
          </a>
        </li>
        <li>
          <a
            href="/CV_Camille_Lemort.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            CV
          </a>
        </li>
        <li>
          <a href="#Projets">Projets</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
