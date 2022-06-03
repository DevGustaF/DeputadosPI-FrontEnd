import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <div>
        <Navbar bg="success" variant="dark" className="mb-3">
            <Container>
                <Navbar.Brand href="#home">LogoDeputados</Navbar.Brand>
                <Nav className=" me-auto">
                    <Link className="nav-link" to="">Deputados</Link>
                </Nav>
            </Container>
        </Navbar>
    </div>
  )
}

export default Menu