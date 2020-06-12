import React, {createContext} from 'react'

import useAuth from './hooks/useAuth'

const Context = createContext()


function AuthProvider({children}) {
    
    const {handleLogin,handleLogout,loading,authenticated,handleCreateRifa,register,isLoggedIn, getRifas} = useAuth()
    return (
        <Context.Provider value={{loading,handleLogin,handleLogout,authenticated,
        handleCreateRifa,register, isLoggedIn, getRifas}}>
            {children}
        </Context.Provider>
    )

}

export {Context, AuthProvider}