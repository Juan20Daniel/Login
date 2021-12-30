import React from 'react';
import './btnForm.css';
const BtnForm = ({ name, active, action, type }) => {
    return (
        <button onClick={action} className={`btnForm ${active} `} type={type}>
            {name}
        </button>
    );
}

export default BtnForm;