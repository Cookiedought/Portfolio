import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Accueil from "./Accueil";
import Projets from "./components/Projets";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/projets" element={<Projets />} />
      </Routes>
    </Router>
  );
}

export default App;
