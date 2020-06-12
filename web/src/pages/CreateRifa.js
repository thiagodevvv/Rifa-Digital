import React, {useState, useContext} from 'react'
import { Context } from '../Context/AuthContext'



export default function CreateRifa () {

    const {handleCreateRifa,handleLogout} = useContext(Context)

    const [desc, setDesc] = useState('')
    const [premio, setPremio] = useState('')
    const [datasorteio, setDatasorteio] = useState('')
    const [valor, setValor] = useState(0)
    const [maxNumeros, setMaxnumeros] = useState(0)

return (
    <div>
        <form >
            <input value={desc} onChange={e => setDesc(e.target.value)} placeholder="desc"></input>
            <input value={premio} onChange={e => setPremio(e.target.value)} placeholder="premio"></input>
            <input value={datasorteio} onChange={e => setDatasorteio(e.target.value)} placeholder="data sorteio"></input>
            <input value={valor} onChange={e => setValor(e.target.value)} placeholder="valor"></input>
            <input value={maxNumeros} onChange={e => setMaxnumeros(e.target.value)} placeholder="max numeros"></input>
            <button type="button" onClick={() => handleCreateRifa(desc,premio,datasorteio,valor,maxNumeros) }>Enviar</button>
        </form>
    <button type="button" onClick={handleLogout}>SAIR</button>
    </div>
)
}