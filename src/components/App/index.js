// == Import
import './style.scss';
import { Routes, Route } from 'react-router-dom';

// == Import Composants
import NavBar from 'src/components/NavBar';
import Home from 'src/components/Home';

// == Composant
function App() {
  return (
    <div className="app">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

// == Export
export default App;
