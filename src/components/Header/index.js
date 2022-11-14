import React from 'react';

import "./style.css";

function Header(props) {
    return (
        <header className="header-container">
            <h1>Hello my name is Ruben, Welcome to my portfolio.</h1>
            <img className="Header-Img" src="https://images.unsplash.com/photo-1566837945700-30057527ade0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3870&q=80" />
            {props.children}
        </header>);
}
export default Header;