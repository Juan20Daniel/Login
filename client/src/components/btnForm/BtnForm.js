import React from 'react';
import './btnForm.css';
const BtnForm = ({ name, active, action }) => {
    return (
        <button onClick={action} className={`btnForm ${active} `} type='button'>
            {name}
        </button>
    );
}

export default BtnForm;