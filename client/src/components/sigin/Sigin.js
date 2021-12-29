import React, { useState } from "react";
import FormLoginSigin from '../formLoginSigin/FormLoginSigin';
import InputGroup from "../inputGroup/InputGroup";
import BtnForm from "../btnForm/BtnForm";
import { addUser } from "../../api/addUser";
const Sigin = ({ sigin, setSigin, setLogin }) => {
    const [ firstname, setFirstname ] = useState({value:'', camp:'firstname'});
    const [ lastname, setLastname ] = useState({value:'', camp:'lastname'});
    const [ email, setEmail ] = useState({value:'', camp:'email'});
    const [ password, setPassword ] = useState({value:'', camp:'password'});
    const openLogin = () => {
        setSigin(false);
        setLogin(true);
    }
    const siginUser = () => {
        addUser();
    }
    return (
        <FormLoginSigin sigin={sigin} setSigin={setSigin} title="CUSTOMER SIGIN">
            <InputGroup 
                type="text" 
                name="firstname" 
                place="Nombres" 
                textError="Nombre invalido"
                state={firstname} 
                setState={setFirstname} 
            />
            <InputGroup 
                type="text" 
                name="lastname" 
                place="Apellidos" 
                textError="Nombre invalido"
                state={lastname}
                setState={setLastname}  
            />
            <InputGroup 
                type="text" 
                name="email" 
                place="Correo electronico" 
                textError="Nombre invalido"
                state={email}
                setState={setEmail}  
            />
            <InputGroup 
                type="text" 
                name="password" 
                place="Contraseña" 
                textError="Nombre invalido"
                state={password}
                setState={setPassword}  
            />
            <BtnForm name="SIGIN" active="active" action={siginUser}/>
            <BtnForm name="LOGIN" active="none" action={openLogin}/>
        </FormLoginSigin>
    );  
}

export default Sigin;