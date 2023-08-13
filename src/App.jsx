import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Construccion from './components/Construccion/Construccion';
import Navbar from './components/Navbar/Navbar';
import Seniorita from './components/Seniorita/Seniorita';
import Bio from './components/Bio/Bio';
import Contacto from './components/Contacto/Contacto';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Construccion />}/>
          <Route path="/bio" element={<Bio />}/>
          <Route path="/seniorita" element={<Seniorita />}/>
          <Route path="/pielderio" element={<Construccion />}/>
          <Route path="/proyectoarana" element={<Construccion />}/>
          <Route path="/silencio" element={<Construccion />}/>
          <Route path="/contacto" element={<Contacto />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
