
import React, { useEffect, useState } from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { createUseStyles } from 'react-jss'
import { Link } from 'react-router-dom'
import Paginacao from '../../components/Paginacao'
import apiDeputados from '../../services/apiDeputados'

const useStyles = createUseStyles({
  title: {
    whiteSpace: 'nowrap',
  },
  text: {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  }
});

const Deputados = () => {

  const classes = useStyles()

  const [totalPaginas, setTotalPaginas] = useState([])

  const [deputados, setDeputados] = useState([])

  const [pagina, setPagina] = useState([])

  const novaPagina = (proxima) => {
    console.log("NOVA PAGINA = " + proxima)
    setPagina(proxima);
  }

  useEffect(() => {
    apiDeputados.get('deputados', { params: { itens: 18, pagina: pagina } }).then(resultado => {
      setDeputados(resultado.data.dados)
      if (totalPaginas.length === 0) {
        setTotalPaginas(getTotalPagina(resultado.data.links))
      }
    })
  }, [pagina])

  const getTotalPagina = (links) => {
    let ultimoLink = links.slice(links.length - 1)[0];
    return ultimoLink.href.substring(ultimoLink.href.lastIndexOf("pagina=") + 7, ultimoLink.href.lastIndexOf("&itens"));
  }

  return (
    <div>

      <h3 style={{ textAlign: 'center' }}>Deputados</h3>


      <Row>
        {deputados.map(item => (
          <Col key={item.id} md={2} className="mb-3">

            <Card title={item.nome} style={{ padding: '10px' }}>
              <Card.Header><h6 style={{ textAlign: 'center' }}><strong>{item.nome}</strong></h6></Card.Header>
              <Card.Img variant="top" src={item.urlFoto} />
              <Card.Body>
                <Card.Text className={classes.text}>Partido: {item.siglaPartido}</Card.Text>
              </Card.Body>
              <Link className='btn btn-outline-dark' to={'/deputados/' + item.id}>
                Sobre
              </Link>
            </Card>

          </Col>
        ))}
      </Row>
      <Paginacao totalPaginas={totalPaginas} novaPagina={novaPagina} />
    </div>
  )
}

export default Deputados