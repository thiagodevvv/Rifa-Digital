import React,{useContext, useState} from 'react'
import {Context} from '../Context/AuthContext'
import { TiEdit } from 'react-icons/ti'




function Account () {
    const { updatePass } = useContext(Context)

    const [confirmpass, setConfirmpass] = useState('')
    const [newpass, setNewpass] = useState('')

    function changedisplaypass () {
        const box = document.getElementById('box-update-pass')
        box.style.display="flex"
        const box2 = document.getElementById('account-options')
        box2.style.display="none"
    }

    function changedisplayemail () {
        const box = document.getElementById('box-update-email')
        box.style.display="flex"
        const box2 = document.getElementById('account-options')
        box2.style.display="none"
    }

    return (
        <div className="container-account">
           <div className="box-account">
                <span className="dados-pessoais"><h1><span className="orange">D</span>ados <span className="orange">P</span>essoais</h1></span>
                <div id="account-options">
                        <span id="text-account">Alterar Senha<button className="btn-updatepass" onClick={changedisplaypass}><TiEdit style={{width: "30px", height: "30px"}} /></button> </span>
                        <span id="text-account">Alterar E-mail <button className="btn-updatepass" onClick={changedisplayemail}><TiEdit style={{width: "30px", height: "30px"}} /></button></span>
                </div>

            <div id="box-update-pass">
                <input id="input-new-password" placeholder="Digite sua senha atual" value={confirmpass} onChange={e => setConfirmpass(e.target.value)}></input>
                <input id="input-new-password" placeholder="Nova senha" value={newpass} onChange={e => setNewpass(e.target.value)}></input>
                <input id="input-new-password" placeholder="Repita nova senha" value={newpass} onChange={e => newpass(e.target.value)}></input>
                <button id="btn-new-pass" onClick={() => updatePass(newpass)}>Mudar senha</button>
            </div>
            <div id="box-update-email">
                <input id="input-new-password" placeholder="Digite seu email atual" value={confirmpass} onChange={e => setConfirmpass(e.target.value)}></input>
                <input id="input-new-password" placeholder="Novo email" value={newpass} onChange={e => setNewpass(e.target.value)}></input>
                <input id="input-new-password" placeholder="Repita novo email" value={newpass} onChange={e => newpass(e.target.value)}></input>
                <button id="btn-new-pass" onClick={() => updatePass(newpass)}>Mudar email</button>
            </div>
           </div>
        </div>
    )
}



export default Account