import React, {useContext} from 'react'
import { Context } from '../Context/AuthContext'
import history from '../history'



function PanelControl() {
        const name = localStorage.getItem('name')
        const { handleLogout } = useContext(Context)


    return (
            <div className="container-painel">
                    <span className="bem-vindo"><h1>Seja Bem-Vindo, {name}</h1></span>
                        <button className="button-menu" type="button" onClick={()=> history.push('/account')}>Minha conta</button>
                        <button className="button-menu" type="button" onClick={()=> history.push('/create')}>Minhas Rifas</button>
                
                        <button className="button-menu" type="button" onClick={()=> history.push('/create')}>Rifas compradas</button>
                        <button className="button-menu" type="button" onClick={()=> history.push('/create')}>Criar rifa</button>
                        <button className="button-logout" type="button" onClick={() => handleLogout()}>Sair</button>
            </div>
    )
}


export default PanelControl