
import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'

import { BsInfoSquareFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import apiDeputados from '../../services/apiDeputados'

const Proposicoes = () => {

    const [proposicoes, setProposicoes] = useState([])

    useEffect(() => {
        apiDeputados.get('proposicoes').then(resultado => {
            setProposicoes(resultado.data.dados)
        })
    }, [])

    console.log(proposicoes);

    return (
        <div>
            <h3 className='mb-3' style={{ textAlign: 'center' }}>Proposições</h3>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Detalhar</th>
                        <th>Tipo de Proposição</th>
                        <th>Ano da Proposição</th>
                        <th>Ementa</th>
                    </tr>
                </thead>
                <tbody>
                    {proposicoes.map(item => (
                        <tr key={item.id}>
                            <td><Link className='btn btn-outline-dark' to={'/proposicoes/' + item.id}><BsInfoSquareFill /> Info</Link></td>
                            <td>{item.siglaTipo}</td>
                            <td>{item.ano}</td>
                            <td>{item.ementa}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    )
}

export default Proposicoes