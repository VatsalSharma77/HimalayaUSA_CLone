import React, {createContext, useState} from 'react'


export const mycontext = createContext();
export default function AuthContextProvider({children}) {

  const [isAuth,setIsAuth] = useState(false);
  
  

  return <mycontext.Provider value={{isAuth,setIsAuth}}>
    {children}
  </mycontext.Provider>
}
