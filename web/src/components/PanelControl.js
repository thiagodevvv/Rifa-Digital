import React, {useContext} from 'react'
import { Context } from '../Context/AuthContext'


function PanelControl() {

    const { handleLogout } = useContext(Context)

    return (
            <div className="painel-bar">
                <a href="#">Minha Conta</a>
                <a href="#">Minhas Rifas</a>
                <a href="#">Rifas Compradas</a>
                <a href="http://localhost:3000/CreateRifa">Criar Rifa</a>
                <button className="button-logout" type="button" onClick={() => handleLogout()}>Sair</button>
       
            </div>
    )
}


export default PanelControl