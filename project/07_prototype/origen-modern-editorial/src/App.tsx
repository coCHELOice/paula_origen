import Hero from './components/sections/Hero';
import QueEsOrigen from './components/sections/QueEsOrigen';
import ParaQuienEs from './components/sections/ParaQuienEs';
import LaExperiencia from './components/sections/LaExperiencia';
import ElLugar from './components/sections/ElLugar';
import Programa from './components/sections/Programa';
import PaulaEquipo from './components/sections/PaulaEquipo';
import Reserva from './components/sections/Reserva';
import FaqCierre from './components/sections/FaqCierre';
import Header from './components/layout/Header';

function App() {
  return (
    <main className="relative w-full overflow-x-hidden">
      <Header />
      <Hero />
      <div id="que-es">
        <QueEsOrigen />
      </div>
      <ParaQuienEs />
      <LaExperiencia />
      <ElLugar />
      <Programa />
      <PaulaEquipo />
      <Reserva />
      <FaqCierre />
    </main>
  );
}

export default App;
