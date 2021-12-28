import React from 'react';
import './inputGroup.css';

const InputGroup = ({ type, name, place, textError }) => {
    return (
        <div className='inputGroup'>
            <div className='input'>
                <input type={type} name={name} id={name} placeholder=" " />
                <label htmlFor={name}>{place}</label>
            </div>
            <p>{textError}</p>
        </div>
    );
}

export default InputGroup;