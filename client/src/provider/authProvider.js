import React,{ useEffect, createContext } from "react";


export const AuthContext = createContext();

export default function AuthProvider({ children }) {

    useEffect(() => {
     console.log("fgrfg")
    }, [])

    return <AuthContext.Provider value="fff">{ children }</AuthContext.Provider>
}

