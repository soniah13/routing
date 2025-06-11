import React, { createContext, useState } from 'react'

const UserContext = createContext();

export function UserProvider({children}) {
    const [user, setUser] = useState({
        name: 'john Doe',
        isLoggedIn: true
    })
    return (
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContext