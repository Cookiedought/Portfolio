import avatar from "./assets/Avatar.png";
import "./index.css";
import Projets from "./components/Projets";


function App() {
  return (
    <>
      <header>
        <nav className="navbar">
          <ul className="link">
            <li>Accueil</li>
            <li>Compétences</li>
            <li>Liens utiles</li>
            <li>Contact</li>
          </ul>
        </nav>
        <div className="presentation">
          <img className="avatar" src={avatar}></img>
          <h1>Camille Lemort</h1>
          <p className="metier">Developpeuse Web</p>
        </div>
        <p className="scroll">Scroll Down</p>
      </header>

      <main>
        <div className="skills">
          <h2>Projets</h2>
          <Projets />
        </div>
      </main>
    </>
  );
}

export default App;
