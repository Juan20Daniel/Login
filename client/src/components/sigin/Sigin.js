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
    const siginUser = async e => {
        e.preventDefault();
        const data = {
            firstname:firstname.value,
            lastname:lastname.value,
            email:email.value,
            password:password.value
        }
        const result = await addUser(data);
        if(result) {
            const { accessToken } = result;
            localStorage.setItem('accessToken', accessToken)
        }
    }
    return (
        <FormLoginSigin sigin={sigin} setSigin={setSigin} title="CUSTOMER SIGIN" submit={siginUser}>
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
                type="email" 
                name="emai" 
                place="Correo electronico" 
                textError="Nombre invalido"
                state={email}
                setState={setEmail}  
            />
            <InputGroup 
                type="password" 
                name="passwor" 
                place="Contraseña" 
                textError="Nombre invalido"
                state={password}
                setState={setPassword}  
            />
            <BtnForm name="SIGIN" active="active" type="submit"/>
            <BtnForm name="LOGIN" active="none" action={openLogin} type="button"/>
        </FormLoginSigin>
    );  
}

export default Sigin;