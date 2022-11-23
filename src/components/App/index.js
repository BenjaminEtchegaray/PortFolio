// == Import
import './style.scss';

// == Import Composants
import NavBar from 'src/components/NavBar';

// == Composant
function App() {
  return (
    <div className="app">
      <NavBar />
      <h1>Benjamin Etchegaray </h1>
    </div>
  );
}

// == Export
export default App;
