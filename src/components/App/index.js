// == Import
import './style.scss';

// == Import Composants
import NavBar from 'src/components/NavBar';

// == Composant
function App() {
  return (
    <div className="app">
      <NavBar />
      <h1 className="app_firstname">Benjamin Etchegaray </h1>
      <h2 className="app_jobName">Développeur web Front-End </h2>
    </div>
  );
}

// == Export
export default App;
