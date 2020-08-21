import React, {useState, useContext} from 'react'
import {Context} from '../Context/AuthContext'


export default function Register () {

    const { register } = useContext(Context)

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    return (
        <div className="container-register">
            <h1 className="h1-register">Criar Conta </h1>
            <form className="form-register">
                <input className="input-register" type="email" placeholder="Name" value={name} onChange={e => setName(e.target.value)}/>
                <input className="input-register" placeholder="E-mail" value={email} onChange={e => setEmail(e.target.value)}/>
                <input className="input-register" type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)}/>
                <button className="button-register-form" type="button" onClick={() => register(name,email,password)}>Cadastrar</button>
            </form>
        </div>
    )
}