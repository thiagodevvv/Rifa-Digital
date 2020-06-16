import React, {useState, useContext} from 'react'
import {Context} from '../Context/AuthContext'


export default function Register () {

    const { register } = useContext(Context)

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    return (
        <div className="container-register">
            <h1 style={{display: "flex", 
            justifyContent: "center",
            alignItems: "center",
            fontFamily: "san-serif"}}>Cadastro</h1>
            <form className="form-register">
                <input className="input-register" placeholder="Nome" value={name} onChange={e => setName(e.target.value)}/>
                <input className="input-register" placeholder="E-mail" value={email} onChange={e => setEmail(e.target.value)}/>
                <input className="input-register" placeholder="Senha" value={password} onChange={e => setPassword(e.target.value)}/>
                <button className="button-register-form" type="button" onClick={() => register(name,email,password)}>Cadastrar</button>
            </form>
        </div>
    )
}