import React, { useEffect, createContext } from "react";

export const AuthContext = createContext();

export default  function AuthProvider({children}) {

    return <AuthContext.Provider value="dddd">{children}</AuthContext.Provider>
}