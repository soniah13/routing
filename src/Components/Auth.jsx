import React, { createContext, useState } from 'react'

function Auth() {
    const AuthContext = createContext(null);

    const AuthProvider = () => {
     const [user, setUser] = useState(null) 
     
     const login = (user) => {
        setUser(user);
     }

     const logout = () => {
        setUser(null);
     }
    }
  return (
    <>
    <AuthContext.Provider value={{user, login, logout}}>

    </AuthContext.Provider>
    </>
  )
}

export default Auth