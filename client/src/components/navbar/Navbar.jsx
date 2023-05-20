import React from 'react';
import './navbar.scss'
import Logo from '../../assets/img/navbarlogo.svg'
import {Link} from "react-router-dom";
const Navbar = () => {
    return (
        <div className="navbar">
            <div className="container">
                <img src={Logo} alt="" className="navbar_logo"/>
                <div className="navbar__header">CLOUD-DISK</div>
                <div className="navbar__login"><Link to="/login">Войти</Link></div>
                <div className="navbar__registration"><Link to="/registration">Регистрация</Link></div>
            </div>
        </div>
    );
};

export default Navbar;