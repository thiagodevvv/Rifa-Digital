import React, {useState, useContext, useEffect} from 'react'
import {Context} from '../Context/AuthContext'
import FlatList from 'flatlist-react'

import './styleComponents.css'


function TimeLine () {
   
    const [teste, setTeste] = useState([])
    const { getRifas } = useContext(Context)

    async function pegarDados () {
        const dados = await getRifas()
        const { data } = dados
        setTeste(data)
    }useEffect( () => {
        pegarDados()
    })
    
    const style = {
        height: "300px",
        width: "600px",
        borderRadius: "10px"
    }

    const renderDados = (person, id) => {
        return (
            <div className="list-timeline"
            key={id}>
                 <div className="image-timeline">
                {person.description}<br></br>
                <b>{person.premio}</b><br></br>
                <b>{person.datasorteio}</b><br></br>
                <b>{person.valor}</b><br></br>
               
                <img className="image" style={style} 
                      src={person.url}  alt="imagem da rifa"/>
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
