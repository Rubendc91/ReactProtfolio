import React from 'react';
import '../style.css';

function Footer() {
    const icons = [
        {
            name: "fa-brands fa-github",
            links: "https://github.com/Rubendc91"
        },
        {
            name: "fa-brands fa-linkedin",
            links: "https://www.linkedin.com/in/ruben-correa-a5622661/"
        }

    ]


    const linkStyle = {
        textDecoraton: "none",
        color: "black",
        cursor: "pointer"
    }

    const FooterStyle = {
        height: "2rem",
        // backgroundColor: "white",
        display: "grid",
        justifyContent: "center",
        gridGap: "15px",
        position: "fixed",
        left: 0,
        bottom: 0,
        right: 0

    }
    const FooterSection = {
        display: "grid",
        gridTemplateColumns: "max-content 1fr 1fr",
        gridGap: "20px"
    }


    return (
        <footer style={FooterStyle} className="footer">
            <section style={FooterSection} >
                <span style={{ paddingRight: "15px" }}>© {new Date().getFullYear()}</span>
                {icons.map(icon => {
                    return <a href={icon.links} key={icon.name} target="_blank" rel="noopener noreferrer" style={linkStyle}><i className={icon.name}></i></a>
                })}
            </section>
        </footer>
    )

}

export default Footer;