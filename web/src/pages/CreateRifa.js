import React, {useState, useContext} from 'react'
import { Context } from '../Context/AuthContext'

import './style/StyleCreate.css'

export default function CreateRifa () {

    const { handleCreateRifa } = useContext(Context)

    const [desc, setDesc] = useState('')
    const [premio, setPremio] = useState('')
    const [datasorteio, setDatasorteio] = useState('')
    const [valor, setValor] = useState('')
    const [maxNumeros, setMaxnumeros] = useState('')

return (
    <div className="container-create-rifa">
        <div className="container-form">
            <div style={{display: "flex", justifyContent: "center", alignItems: "center", fontFamily: "Arial"}}>
                <h1> <span className="orange">C</span>riar <span className="orange">R</span>ifa</h1>
            </div>
            <form className="form-create-rifa">
                    <input className="input-create-rifa" value={desc} onChange={e => setDesc(e.target.value)} placeholder="Descrição"></input>
                    <input className="input-create-rifa" value={premio} onChange={e => setPremio(e.target.value)} placeholder="Prêmio"></input>
                    <input className="input-create-rifa" type="date" value={datasorteio} onChange={e => setDatasorteio(e.target.value)} placeholder="Data do sorteio"></input>
                    <input className="input-create-rifa" value={valor} onChange={e => setValor(e.target.value)} placeholder="Valor"></input>
                    <input className="input-create-rifa" value={maxNumeros} onChange={e => setMaxnumeros(e.target.value)} placeholder="Máximo de numeros"></input>
                    <button className="button-create-rifa" type="button" onClick={() => handleCreateRifa(desc,premio,datasorteio,valor,maxNumeros) }>Criar</button>
            </form>
        </div>
    </div>
)
}