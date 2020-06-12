import React, {useEffect, useState, useContext} from 'react'
import {Context} from '../Context/AuthContext'
import FlatList from 'flatlist-react'




function TimeLine () {
    const [teste, setTeste] = useState([])
    const { getRifas } = useContext(Context)

    async function pegarDados () {
        const dados = await getRifas()
        const { data } = dados
        setTeste(data)
    }
    useEffect( () => pegarDados)

    const renderDados = (person, id) => {
        return (
            <div className="list-timeline"key={id}>
                {person.description}<br></br>
                <b>{person.premio}</b><br></br>
                <b>{person.datasorteio}</b><br></br>
                <b>{person.valor}</b><br></br>
            </div>
        )
    }
    return (
        <div className="time-line">
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
