import React, {useContext} from 'react'
import { Context } from '../Context/AuthContext'
import history from '../history'

function PanelControl() {

    const { handleLogout } = useContext(Context)

    return (
            <div className="painel-bar">
                <div>
                        <button className="button-menu" type="button" onClick={()=> history.push('/create')}>Minha conta</button>
                        <button className="button-menu" type="button" onClick={()=> history.push('/create')}>Minhas Rifas</button>
                </div>
                <div>
                        <button className="button-menu" type="button" onClick={()=> history.push('/create')}>Rifas compradas</button>
                        <button className="button-menu" type="button" onClick={()=> history.push('/create')}>Criar rifa</button>
                </div>
                <div className="container-btn-logout">
                        <button className="button-logout" type="button" onClick={() => handleLogout()}>Sair</button>
                </div>
            </div>
    )
}


export default PanelControl