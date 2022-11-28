// == Import
import './style.scss';
import { Routes, Route } from 'react-router-dom';

// == Import Composants
import NavBar from 'src/components/NavBar';
import Home from 'src/components/Home';
import Contact from 'src/components/Contact';
import Projects from 'src/components/Projects';
import Skills from 'src/components/Skills';

// == Composant
function App() {
  return (
    <div className="app">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/competences" element={<Skills />} />
        <Route path="/projets" element={<Projects />} />
      </Routes>
    </div>
  );
}

// == Export
export default App;
