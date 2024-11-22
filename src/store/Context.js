import React from 'react'
import { createContext, useState } from "react";
export const firebaseContext = createContext()
export const authContext = createContext()


function Context({children}) {
    const [user,setUser] = useState(null)
  return (
    <div>
      <authContext.Provider value={{user, setUser}}>
        {children}
      </authContext.Provider>
    </div>
  )
}

export default Context
