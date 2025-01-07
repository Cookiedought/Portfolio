import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Accueil from "./components/Accueil";
import Projets from "./components/Projets";
import Navbar from "./components/NavBar"
import "./App.css"

const App: React.FC = () => {
  return (
    <Router>
      <Navbar /> 
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/projets" element={<Projets />} />
      </Routes>
    </Router>
  );
};

export default App;
