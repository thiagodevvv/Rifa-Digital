import React, {useState, useContext, useEffect} from 'react'
import {Context} from '../Context/AuthContext'
import FlatList from 'flatlist-react'


import {ImageRifa, ContainerImage} from './FileList/previewImageStyle'
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
            <div className="list-timeline" key={id}>
               
                 <div className="image-timeline">

               
                        <div>
                            <ContainerImage>
                                <ImageRifa src={data.url} />
                            </ContainerImage>
                        </div>  
                     
                    <div>
                        <h2>Descrição: {data.description}<br></br></h2>
                        <h3>Prêmio: {data.premio}<br></br></h3>
                        <h4>Data do Sorteio:  {formatedDate(data.datasorteio)}</h4>
                        <h4>Valor: R$ {data.valor}<br></br></h4>
                            <div className="btn">
                                <img src={car}  width="30px" heigth="30px" alt="Icone carrinho de compra"/>
                                <span className="span-buy">Comprar</span>
                            </div>
                        <button className="btn-compartilhar" type="button">Compartilhar</button>
                        </div>
                        </div>
                        
                </div>
        )
    }

    return (
        <div className="container-timeline">
        <ul>
                <FlatList 
                    list={teste}
                    renderItem={renderDados}
                    renderWhenEmpty={() => <div>Carregando rifas...</div>}
                    renderOnScroll={true}
                    />
        </ul>
        </div>
    )
}


export default TimeLine
