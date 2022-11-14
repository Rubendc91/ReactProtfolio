import React from 'react';
import Resume from '../../components/img/Resume.png';
// import Placeholder from '../../components/img/Placeholder.png';

function resumePage() {
    return (
        <section className="projectsBox">
        <h1>Resume</h1>
        <section className="projects">

            <section className="cardColumn">
                <a href="https://drive.google.com/file/d/1BKYuObSD0DidP2d2MwjTA5oC1CANPZ9k/view?usp=share_link" target= "blank">
                    <img className="Resume-Img" src={Resume} alt="placeholder" />
                </a>
            </section>

        </section>
    </section >
    )
}

export default resumePage;