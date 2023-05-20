import React from 'react';
import './navbar.scss'
import Logo from '../../assets/img/navbarlogo.svg'
import {NavLink} from "react-router-dom";
const Navbar = () => {
    return (
        <div className="navbar">
            <div className="container">
                <img src={Logo} alt="" className="navbar_logo"/>
                <div className="navbar__header">CLOUD-DISK</div>
                <div className="navbar__login"><NavLink to="/login">Войти</NavLink></div>
                <div className="navbar__registration"><NavLink to="/registration">Регистрация</NavLink></div>
            </div>
        </div>
    );
};

export default Navbar;