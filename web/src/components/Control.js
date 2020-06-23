import React, {useContext} from 'react'
import {Context} from '../Context/AuthContext'

import LoginBar from './LoginBar'
import PanelControl from './PanelControl'


function Control() {
    
    const { isLoggedIn } = useContext(Context)

    if(isLoggedIn) {
        return <PanelControl />
    }
    return <LoginBar />
}


export default Control