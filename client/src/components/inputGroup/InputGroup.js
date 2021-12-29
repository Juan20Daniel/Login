import React from 'react';
import './inputGroup.css';

const InputGroup = ({ type, name, place, textError, state, setState }) => {
    const handleChange = (e) => {
        const { value } = e.target;
        setState({
            ...state,
            value:value
        })
    }
    return (
        <div className='inputGroup'>
            <div className='input'>
                <input type={type} name={name} onChange={handleChange} id={name} placeholder=" " />
                <label htmlFor={name}>{place}</label>
            </div>
            <p>{textError}</p>
        </div>
    );
}

export default InputGroup;