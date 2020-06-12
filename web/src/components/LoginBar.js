import React, { useState, useContext} from 'react'
import { Context } from '../Context/AuthContext'
import './styleComponents.css'



export default function LoginBar () {
    const { handleLogin } = useContext(Context)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
    <section className="login-bar">
        <form className="form-bar">
                <input className="input-login" value={email} 
                onChange={e => setEmail(e.target.value)} placeholder="Email">
                </input>

                <input className="input-login" value={password}
                onChange={e => setPassword(e.target.value)} placeholder="Password">
                </input>

                <div className="button-inline">
                    <button className="button-login" type="button" onClick={() => handleLogin(email,password) }>OK</button>
                    <button className="button-register">Register</button>
                </div>
        </form>
    </section>    
    )
}


// export default LoginBar