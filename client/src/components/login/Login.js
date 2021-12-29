import React from 'react';
import FormLoginSigin from '../formLoginSigin/FormLoginSigin';
import InputGroup from '../inputGroup/InputGroup';
import BtnForm from '../btnForm/BtnForm';
const Login = ({ login, setLogin, setSigin}) => {
    const openSigin = () => {
        setLogin(false);
        setSigin(true);
    }
    const loginUser = () => {
        console.log("Login");
    }
    return (
        <FormLoginSigin sigin={login} setSigin={setLogin} title="CUSTOMER LOGIN">
            <InputGroup type="text" name="email" place="Correo electronico" textError="Nombre invalido"  />
            <InputGroup type="text" name="password" place="Contraseña" textError="Nombre invalido"  />
            <BtnForm name="LOGIN" active="active" action={loginUser}/>
            <BtnForm name="SIGIN" active="none" action={openSigin}/>
        </FormLoginSigin>
    );
}

export default Login;