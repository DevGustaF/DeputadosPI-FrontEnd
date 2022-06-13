import React from 'react'
import { Pagination } from 'react-bootstrap'

const Paginacao = (props) => {
    let items = [];
    let total = props.totalPaginas;

    for (let number = 1; number <= total; number++) {
        items.push(
            <Pagination.Item key={number}>
                {number}
            </Pagination.Item>
        );
    }

    const click = (e => {
        for (let x = 0; x < e.currentTarget.children.length; x++) { //remove a marcação dos numeros das paginas
            e.currentTarget.children[x].className = "page-item"
        }
        e.currentTarget.children[e.target.firstChild.nodeValue - 1].className = "page-item active" //marca a numeração da pagina clicada
        props.novaPagina(e.target.innerHTML) // envia para o componente pai o numero da pagina para próxima requisição
    })

    return (
        <>
            <div className='row'>
                <Pagination size="sm" style={{ paddingLeft: '2rem' }} onClick={click}>{items}</Pagination>
            </div>

        </>
    )
}

export default Paginacao