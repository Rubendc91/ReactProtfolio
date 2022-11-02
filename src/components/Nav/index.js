import React from 'react';

import "./style.css";

function Nav(props) {
    const {
        pages =[],
        setCurrentPage,
        currentPage
    } = props
    return (
        <nav><ul>{pages.map((page) =>{
            return <li>{page.name}</li>
        })}</ul></nav>
    );
}
export default Nav;