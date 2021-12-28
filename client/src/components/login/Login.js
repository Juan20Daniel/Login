import React from 'react';
import FormLoginSigin from '../formLoginSigin/FormLoginSigin';
import InputGroup from '../inputGroup/InputGroup';
const Login = ({ login, setLogin}) => {
    return (
        <FormLoginSigin sigin={login} setSigin={setLogin} title="CUSTOMER LOGIN">
           
            <InputGroup type="text" name="lastname" place="Apellidos" textError="Nombre invalido"  />
            <InputGroup type="text" name="email" place="Correo electronico" textError="Nombre invalido"  />
            <InputGroup type="text" name="password" place="Contraseña" textError="Nombre invalido"  />
            <p>ff</p>
        </FormLoginSigin>
    );
}

export default Login;