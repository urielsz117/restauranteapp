import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CabeceraComponente } from './components/CabeceraComponente';
import { BodyComponente } from './components/BodyComponente';
import { FooterComponente } from './components/FooterComponente';

function App() {
  return (
    <div className="App">
      <CabeceraComponente />
      <BodyComponente />
      <FooterComponente />
    </div>
  );
}

export default App;
