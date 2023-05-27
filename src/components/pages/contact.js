import React, { useState } from 'react';
import '../style.css';


function ContactPage() {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        message: ""
    });
    const [errorMessage, setErrorMessage] = useState("");
    const { name, email, message } = formState;
    const handleSubmit = (event) => {
        event.preventDefault();
        if (!errorMessage) {
            // alert("Submit Form")
            console.log("submit form", formState)
        }
    };

    const validateEmail = (email) => {
        const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
        return re.test(String(email).toLowerCase());
    };

    const handleChange = (event) => {
        console.log(event.target.name);
        if (event.target.name === "email") {
            const isValid = validateEmail(event.target.value);
            console.log(isValid);
            if (!isValid) {
                setErrorMessage("Your email is invalid")
            } else {
                setErrorMessage("")
            }
        } else {
            if (!event.target.value.length) {
                setErrorMessage(`${event.target.name} is required`)
            } else {
                setErrorMessage("")
            }
        }
        if (!errorMessage) {
            setFormState({ ...formState, [event.target.name]: event.target.value });
            console.log("Handle Form", formState);
        }
    }


    const contactForm = {
        color: "red",

    }
    const label = {
        display: "inline-block",
        width: "120px",
        textAlign: "center",
    }

    const icons = [
        {
            name: "fa-brands fa-github fa-bounce",
            links: "https://github.com/Rubendc91",
            tag: "Github___"
        },
        {
            name: "fa-brands fa-linkedin fa-bounce",
            links: "https://www.linkedin.com/in/ruben-correa-a5622661/",
            tag: "LinkedIn___"
        },
    ]

    const linkStyle = {
        border:".5rem outset black",
        textDecoraton: "none",
        color: "black",
        cursor: "pointer",
        fontSize: "2rem",
        justifyContent: "center",
        display: "flex",
        padding:"1rem",
        margin: "1rem"
    }

    return (
        <section style={{border: ".5rem inset black", padding: ".2rem", marginTop:"45%"}}>
            {/* <h1>Contact</h1> */}
            {/* <form id="contact-form" onSubmit={handleSubmit}>
                <section>
                    <label style={label} htmlFor="name">Name: </label>
                    <input style={contactForm} type="text" name="name" defaultValue={name} onBlur={handleChange} />
                </section>
                <section>
                    <label style={label} htmlFor="message">message: </label>
                    <input style={contactForm} type="text" name="message" defaultValue={message} onBlur={handleChange} />
                </section>
                <section>
                    <label style={label} htmlFor="email">Email address: </label>
                    <input style={contactForm} type="text" name="email" defaultValue={email} onBlur={handleChange} />
                </section>
                {errorMessage && (
                    <section>
                        <p>{errorMessage}</p>
                    </section>
                )} */}
                <section>
                {icons.map(icon => {
                    return <a href={icon.links} key={icon.name} target="_blank" rel="noopener noreferrer" style={linkStyle}>{icon.tag}<i className={icon.name}></i></a>
                })}
                </section>
                {/* <button style={{
                    // position: "fixed",
                    // left: "50%",
                    display: "flex",
                    // flexDirection: "row",
                    justifyContent: "center",
                    background: "#7FfFbF"
                }} type="submit"><a href= "mailto:Rubendc91@gmail.com?subject=Important!!!!!!&body=What would you like to say?">Send Email</a> </button>
            </form> */}
            <a href= "mailto:Rubendc91@gmail.com?subject=Important!!!!!!&body=What would you like to say?" style={linkStyle}>Email____<i class="fa-solid fa-paper-plane fa-bounce" ></i></a> 
        </section>
    );
}

export default ContactPage;