import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <div>
        <Navbar bg="success" variant="dark" className="mb-3">
          
          <Container>
              <Navbar.Brand href="/home"> LOGO
              </Navbar.Brand>
              <Nav className=" me-auto">
                  <Link className="nav-link" to="/home">Home</Link>
                  <Link className="nav-link" to="/partidos">Partidos</Link>
                  <Link className="nav-link" to="/deputados">Deputados</Link>
                  <Link className="nav-link" to="/orgaos">Órgãos</Link>
                  <Link className="nav-link" to="/eventos">Eventos</Link>
                  <Link className="nav-link" to="/frentes">Frentes</Link>
                  <Link className="nav-link" to="/legislaturas">Legislaturas</Link>
                  <Link className="nav-link" to="/proposicoes">Proposições</Link>
              </Nav>
          </Container>
        </Navbar>
    </div>
  )
}

export default Menu