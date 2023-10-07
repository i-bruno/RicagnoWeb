import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Construccion from './components/Construccion/Construccion';
import Navbar from './components/Navbar/Navbar';
//Obras
import Inestable from './components/Inestable/Inestable';
import Devastacion from './components/Devastacion/Devastacion';
import Devenirterritorio from './components/Devenirterritorio/Devenirterritorio';
import Capasabrigo from './components/Capasabrigo/Capasabrigo';
import Seniorita from './components/Seniorita/Seniorita';
import Pielderio from './components/Pielderio/Pielderio';
import Proyectoarana from './components/Proyectoarana/Proyectoarana';
import Silencio from './components/Silencio/Silencio';
import Bio from './components/Bio/Bio';
import Contacto from './components/Contacto/Contacto';
import 'react-photo-view/dist/react-photo-view.css';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Construccion />} />
          <Route path="/bio" element={<Bio />} />
          <Route path="/seniorita" element={<Seniorita />} />
          <Route path="/pielderio" element={<Pielderio />} />
          <Route path="/inestable" element={<Inestable />} />
          <Route path="/devastacion" element={<Devastacion />} />
          <Route path="/devenirterritorio" element={<Devenirterritorio />} />
          <Route path="/capasabrigo" element={<Capasabrigo />} />
          <Route path="/proyectoarana" element={<Proyectoarana />} />
          <Route path="/silencio" element={<Silencio />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
