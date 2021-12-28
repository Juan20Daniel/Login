import React from "react";
import FormLoginSigin from '../formLoginSigin/FormLoginSigin';
import InputGroup from "../inputGroup/InputGroup";
const Sigin = ({ sigin, setSigin }) => {
    return (
        <FormLoginSigin sigin={sigin} setSigin={setSigin} title="CUSTOMER SIGIN">
            <InputGroup type="text" name="firstname" place="Nombres" textError="Nombre invalido"  />
            <InputGroup type="text" name="lastname" place="Apellidos" textError="Nombre invalido"  />
            <InputGroup type="text" name="email" place="Correo electronico" textError="Nombre invalido"  />
            <InputGroup type="text" name="password" place="Contraseña" textError="Nombre invalido"  />
            <p>ff</p>
        </FormLoginSigin>
    );  
}

export default Sigin;