import React from 'react';
import Banner from '../../components/img/Banner.png';

import '../style.css';

function Header(props) {
    return (
        <header className="header-container">
            <h1>Hello my name is Ruben, Welcome to my portfolio.</h1>
            <img className="Header-Img" src={Banner}  alt="banner_for_portfolio"/>
            {props.children}
        </header>);
}
export default Header;