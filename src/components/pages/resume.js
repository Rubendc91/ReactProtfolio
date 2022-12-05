import React from 'react';
import Resume from '../../components/img/Resume.png';
// import Placeholder from '../../components/img/Placeholder.png';

function resumePage() {
    return (
        <section className="projectsBox">
        <h1>Resume</h1>
        <section className="resume">
<p>Labore esse et magna cillum proident. Eiusmod nisi laborum cupidatat quis velit adipisicing exercitation non sit. Occaecat Lorem eu duis magna et et culpa incididunt consequat culpa. Lorem dolore fugiat magna nostrud deserunt cupidatat Lorem reprehenderit.</p>
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