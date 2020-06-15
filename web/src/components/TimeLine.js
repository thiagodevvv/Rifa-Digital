import React, {useState, useContext, useEffect} from 'react'
import {Context} from '../Context/AuthContext'
import FlatList from 'flatlist-react'

import './styleComponents.css'


function TimeLine () {
   
    const [teste, setTeste] = useState([])
    const { getRifas,formatedDate } = useContext(Context)

    async function pegarDados () {
        const dados = await getRifas()
        const { data } = dados
        setTeste(data)
    }useEffect( () => {
        pegarDados()
    })

    const renderDados = (data, id) => {
        return (
            <div className="list-timeline"
            key={id}>
                 <div className="image-timeline">
                <h2>Descrição: {data.description}<br></br></h2>
                <h3>Prêmio: {data.premio}<br></br></h3>
                <img className="image" src={data.url}  alt="imagem da rifa"/>

                    <div className="container-isolado">
                        <h4>Data do Sorteio:  {formatedDate(data.datasorteio)}</h4>
                        <div className="separador"></div>
                        <h4>Valor: R$ {data.valor}<br></br></h4>
                    </div>
                </div>
            </div>
    
        )
    }

    return (
        <ul>
                <FlatList 
                    list={teste}
                    renderItem={renderDados}
                    renderWhenEmpty={() => <div>Carregando rifas...</div>}
                    renderOnScroll={true}
                    />
        </ul>

    )
}


export default TimeLine
