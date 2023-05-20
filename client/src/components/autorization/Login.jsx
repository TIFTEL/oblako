import React, {useState, } from 'react';
import './autorization.scss'
import Input from "../../utils/input/input"
import Navbar from "../navbar/Navbar";
import {useDispatch} from "react-redux"
import {login} from "../../actions/user";
import {store} from "../../reducers";

const Login = () => {
    const [email, setEmail]= useState("")
    const [password, setPassword]= useState("")
    const dispatch = useDispatch()
    return (
        <div className="main">
            <Navbar/>
            <div className="wrap">
                <div className="autorization">
                    <div className="autorization__header">Авторизация</div>
                    <Input value={email} setValue={setEmail} type="text" placeholder="Введитe email..."/>
                    <Input value={password} setValue={setPassword} type="password" placeholder="Введитe пароль"/>
                    <button className="autorization__btn" onClick={()=> login (email,password)}>Войти</button>
                </div>
            </div>
        </div>
    );
};

export default Login;