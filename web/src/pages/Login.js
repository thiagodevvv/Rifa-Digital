import React, { useState, useContext } from 'react'
import {Context} from '../Context/AuthContext'


export default function Login () {
  
  const { handleLogin } = useContext(Context)


  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  return (
   
    <div>
      <form >
        <input placeholder="nome" value={name} onChange={e => setName(e.target.value)}></input>
        <input placeholder="email" value={email} onChange={e => setEmail(e.target.value)}></input>
        <input placeholder="password" value={password} onChange={e => setPassword(e.target.value)}></input>
        <button type="button" onClick={() => handleLogin(name,email,password)}>Enviar</button>
        </form>

    </div>

  )
}

