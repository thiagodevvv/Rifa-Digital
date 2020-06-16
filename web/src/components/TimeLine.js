import React, {useState, useContext, useEffect} from 'react'
import {Context} from '../Context/AuthContext'
import FlatList from 'flatlist-react'

import './styleComponents.css'
import car from './car.png'


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
                     <div className="separador-altura"></div>
                <h2>Descrição: {data.description}<br></br></h2>
                <h3>Prêmio: {data.premio}<br></br></h3>
                <img className="image" src={data.url}  alt="imagem da rifa"/>

                    <div className="container-isolado">
                        <h4>Data do Sorteio:  {formatedDate(data.datasorteio)}</h4>
                        <div className="separador"></div>
                        <h4>Valor: R$ {data.valor}<br></br></h4>
                    </div>
                    <div className="container-isolado2">
                            <div className="btn">
                                <img src={car}  width="30px" heigth="30px" alt="Icone carrinho de compra"/>
                                <span className="span-buy">Comprar</span>
                            </div><div className="separador"></div>
                            <button className="btn-compartilhar" type="button">Compartilhar</button>
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
