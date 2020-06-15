import React, {createContext} from 'react'

import useAuth from './hooks/useAuth'
import useFuncsUtils from './hooks/useFuncsUtils'

const Context = createContext()


function AuthProvider({children}) {
    
    const {handleLogin,handleLogout,loading,authenticated,handleCreateRifa,register,isLoggedIn, getRifas} = useAuth()
    const {formatedDate} = useFuncsUtils()
    return (
        <Context.Provider value={{loading,handleLogin,handleLogout,authenticated,
        handleCreateRifa,register, isLoggedIn, getRifas, formatedDate}}>
            {children}
        </Context.Provider>
    )

}

export {Context, AuthProvider}