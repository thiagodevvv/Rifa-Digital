import React,{useContext} from 'react'
import {Context} from '../Context/AuthContext'
import { TiEdit } from 'react-icons/ti'

function Account () {

    const {updatePass} = useContext(Context)
    return (
        <div className="container-create-rifa">
           <div className="container-form">
                <span className="dados-pessoais"><h1><span className="orange">D</span>ados <span className="orange">P</span>essoais</h1></span>
                <span>Alterar Senha</span> <button className="btn-updatepass" onClick={() => updatePass()}><TiEdit style={{width: "30px", height: "30px"}} /></button>
           </div>
        </div>
    )
}



export default Account