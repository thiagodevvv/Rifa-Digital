import React, {useState, useContext} from 'react'
import {Context} from '../Context/AuthContext'


export default function Register () {

    const {register} = useContext(Context)

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    return (
        <div>
            <form >
                <input placeholder="Nome" value={name} onChange={e => setName(e.target.value)}/>
                <input placeholder="E-mail" value={email} onChange={e => setEmail(e.target.value)}/>
                <input placeholder="Senha" value={password} onChange={e => setPassword(e.target.value)}/>
                <button type="button" onClick={() => register(name,email,password)}>Registrar</button>
            </form>
        </div>
    )
}