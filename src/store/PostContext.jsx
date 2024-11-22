
import React from 'react'
import { createContext, useState } from "react";

export const postContext =  createContext()


function PostContext({children}) {
const [postDetails,setPostDetails] = useState()

  return (
    <postContext.Provider  value={{postDetails, setPostDetails}}>
        {children}
    </postContext.Provider >    
  )
}

export default PostContext
