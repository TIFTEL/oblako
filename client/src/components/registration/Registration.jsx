import React, {useState} from 'react';
import './registration.scss'
import Input from "../../utils/input/input"
import Navbar from "../navbar/Navbar";
import {registration} from "../../actions/user";
const Registration = () => {
    const [email, setEmail]= useState("")
    const [password, setPassword]= useState("")
    return (
        <div className="main">
            <Navbar/>
            <div className="wrap">
        <div className="registration">
            <div className="registration__header">Регистрация</div>
            <Input value={email} setValue={setEmail} type="text" placeholder="Введитe email..."/>
            <Input value={password} setValue={setPassword} type="password" placeholder="Введитe пароль"/>
            <button className="registration__btn"  onClick={() => registration(email, password)}>Зарегистрироваться</button>
        </div>
        </div>
        </div>
    );
};

export default Registration;