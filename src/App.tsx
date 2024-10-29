import avatar from "./assets/Avatar.png";
import "./index.css"
import Skills from "./components/Skills"

function App() {
  return (
    <>
      <header>
        <nav className="navbar">
          <ul className="link">
            <li>Accueil</li>
            <li>Compétences</li>
            <li>Projets</li>
            <li>Contact</li>
          </ul>
        </nav>
        <div className="presentation">
          <img src={avatar}></img>
          <h1>Camille Lemort</h1>
          <p className="skill">Developpeuse Web</p>
        </div>
        <p className="scroll">Scroll Down</p>
      </header>

      <main>
    <div>
      <Skills/>
    </div>
        
      </main>
    </>
  );
}

export default App;
