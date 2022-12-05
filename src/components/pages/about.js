import React from 'react';
import Headshot from '../../components/img/Headshot.png';
import '../style.css';


function aboutPage() {
    return (
        <section>

            {/* <h1>About</h1> */}
            <section className="about-Img">
                <img src={Headshot} alt="a picture of me" />
            </section>
            <p>
            I have always had a passion for technology. I obtained my degree in Network Administration in 2012. Though, I have toiled in many areas in the world of technology; acquiring knowledge from both self-teaching and hands-on experience.  I completed the web development program with UCSD Extended Studies November 2022. Now, I am ready and eager to apply the skills and knowledge I acquired in the workforce.
            </p>
            <p>
            I am not looking for a job but instead a career in which I am able to utilize my skills to my fullest ability, grow and expand as the company does. I am a hard worker, fast learner and dedicated with a strong work ethic. I can multitask and maintain a steady pace. I believe you would find me to be a great asset to your team.
            </p>
        </section>
    )
}

export default aboutPage;