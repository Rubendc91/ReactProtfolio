import React from 'react';
import Resume from '../../components/img/Resume.png';
// import Placeholder from '../../components/img/Placeholder.png';

function resumePage() {
    return (
        <section className="projectsBox">
        <h1>Resume</h1>
        <section className="projects">

            <section className="cardColumn">
                <a href="https://docs.google.com/document/d/e/2PACX-1vSAfTYDCkeqJcgQPhI-gUt5KkQW_i08NjPt2ov0dikU3lLqdDKT7JJHJjphGd2GqA/pub" target= "blank">
                    <img className="Resume-Img" src={Resume} alt="placeholder" />
                </a>
            </section>

        </section>
    </section >
    )
}

export default resumePage;