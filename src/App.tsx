import avatar from "./assets/Avatar.png";

function App() {
  return (
    <section>
      <nav>
        <ul>
          <li>Accueil</li>
          <li>Compétences</li>
          <li>Projets</li>
          <li>Contact</li>
        </ul>
      </nav>
      <div>
        <img src={avatar}></img>
        <h1>Camille Lemort</h1>
        <p>Developpeuse Web</p>
      </div>
      <p>Scroll Down</p>
    </section>
  );
}

export default App;
