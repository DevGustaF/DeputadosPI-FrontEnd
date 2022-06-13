import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Menu from './components/Menu';
import Deputados from './pages/deputados/Deputados';
import DeputadosDetalhes from './pages/deputados/DeputadosDetalhes';
import Home from './pages/Home';
import Partidos from './pages/partidos/Partidos';
import './App.css';
import PartidosDetalhes from './pages/partidos/PartidosDetalhes';
import Orgaos from './pages/orgaos/Orgaos';
import Eventos from './pages/eventos/Eventos';
import Frentes from './pages/frentes/Frentes';
import FrentesDetalhes from './pages/frentes/FrentesDetalhes';
import Legislaturas from './pages/legislaturas/Legislaturas';
import Proposicoes from './pages/proposicoes/Proposicoes';
import ProposicoesDetalhes from './pages/proposicoes/ProposicoesDetalhes';
import EventosDetalhes from './pages/eventos/EventosDetalhes';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Menu />
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/deputados" element={<Deputados />} />
              <Route path="/deputados/:id" element={<DeputadosDetalhes />} />
              <Route path="/partidos" element={<Partidos />} />
              <Route path="/partidos/:id" element={<PartidosDetalhes />} />
              <Route path="/orgaos" element={<Orgaos />} />
              <Route path="/eventos" element={<Eventos />} />
              <Route path="/eventos/:id" element={<EventosDetalhes />} />
              <Route path="/frentes" element={<Frentes />} />
              <Route path="/frentes/:id" element={<FrentesDetalhes />} />
              <Route path="/legislaturas" element={<Legislaturas />} />
              <Route path="/proposicoes" element={<Proposicoes />} />
              <Route path="/proposicoes/:id" element={<ProposicoesDetalhes />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;
