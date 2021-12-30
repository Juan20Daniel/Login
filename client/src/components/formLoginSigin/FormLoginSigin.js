import React from "react";
import './formLoginSigin.css';
import bxs_user_circle from './assets/bxs-user-circle.svg';
import closeModal from './assets/closeModal.svg';
const Sigin = ({ sigin, setSigin, title, children, submit }) => {
    const callSetSigin = () => {
        setSigin(false);
    }
    return (
        <div className={`login ${sigin && "is-open"}`}>
            <form className="login__form" onSubmit={submit}>
               <div className="form-box">
                    <div className="login__form--logo">
                        <img src={bxs_user_circle} alt="Icon of user" />
                    </div>
                    <button type="button" onClick={callSetSigin} className="form__btn-close">
                        <img src={closeModal} alt="Icon modal close"/>
                    </button>
                    <p className="login__form--title">{title}</p>
                    { children }
               </div>
            </form>
        </div>
    );
}

export default Sigin;