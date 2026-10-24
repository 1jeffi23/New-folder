import React, { createContext, useState } from 'react'
export const countcontext = createContext();


const CountProvider = ({children}) => {

        const [count,setCount]=useState(0);         

  return (
   <>
    <countcontext.Provider value={{count,setCount}}>
        {children}
    </countcontext.Provider>
   </>
  )
}

export default CountProvider