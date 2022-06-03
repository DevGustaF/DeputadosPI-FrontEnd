import React, { useEffect, useState } from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import apiDeputados from '../../services/apiDeputados'

const Deputados = () => {
    const [deputados, setDeputados] = useState([])

    useEffect(() => {
        apiDeputados.get('deputados').then(resultado => {
           setDeputados(resultado.data.dados)
        })
    })
  return (
      <>
    <div>
        <h1>Deputados</h1>
    </div>

    <Row>
        {deputados.map(item => (
            <Col key={item.id} md={2} className="mb-3">
                <Card title={item.nome}>
                    <Card.Img variant="top" src={item.urlFoto} />
                    <Card.Text>Nome: {item.nome}</Card.Text>
                    <Card.Text>Partido: {item.siglaPartido}</Card.Text>
                    <Link className='btn btn-success' to={'/deputados/' + item.id}>
                        Sobre
                    </Link>
                </Card>
            </Col>
        ))}
     </Row>
    </>
  )
}

export default Deputados