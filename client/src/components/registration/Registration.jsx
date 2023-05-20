import React from 'react';
import './registration.scss'
import Input from "../../utils/input/input"
const Registration = () => {
    return (
        <div className="registration">
            <div className="registration__header">Регистрация</div>
            <Input/>
            <Input/>
            <Input/>
            <Input/>
            <button className="registration__btn">Войти</button>
        </div>
    );
};

export default Registration;