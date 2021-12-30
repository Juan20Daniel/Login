import { useContext } from "react";
import { AuthContext } from "../provider/authProvider";

const Auth = () => useContext(AuthContext);

export default Auth;