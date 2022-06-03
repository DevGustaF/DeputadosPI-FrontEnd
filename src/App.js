import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Menu from './components/Menu';
import Deputados from './pages/deputados/Deputados';
import DeputadosDetalhes from './pages/deputados/DeputadosDetalhes';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Menu />
        <Container>
          <Routes>
            <Route path="/" element={<Deputados />} />
              <Route path="/deputados" element={<Deputados />} />
              <Route path="/deputados/:id" element={<DeputadosDetalhes />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;
