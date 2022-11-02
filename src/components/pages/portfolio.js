import React from 'react';
import Horiseon from '../../components/img/Horiseon.png';
// import Placeholder from '../../components/img/Placeholder.png';
import JATE from '../../components/img/JATE.png';
import Nutriteam from '../../components/img/Nutriteam.png';
import './style.css';



function portfolioPage() {
    return (
        <section className="projectsBox" id="projects">
            <h1>Web apps</h1>
            <section className="projects">

                <section className="cardColumn">
                    <a href="https://rubendc91.github.io/HoriseonRefactor" target= "blank">
                        <img className="Port-Img " src={Horiseon} alt="placeholder" />
                        <h2 className="cardHeader">Horiseon App</h2>
                    </a>
                </section>


                <section className="cardColumn">
                    <a href="https://jate-just-a-text-editor.herokuapp.com/" target= "_blank">
                        <img className="Port-Img" src={JATE} alt="placeholder" />
                        <h2 className="cardHeader">J.A.T.E</h2>
                    </a>
                </section>

                <section className="cardColumn">
                    <a href="https://rubendc91.github.io/NutriTeam/" target= "_blank">
                        <img className="Port-Img star" src={Nutriteam} alt="placeholder" />
                        <h2 className="cardHeader">Nutriteam</h2>
                    </a>
                </section>
            </section>
        </section >


    )
}

export default portfolioPage;
