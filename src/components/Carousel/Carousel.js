import React, { Component } from "react";
import Carousel from "react-spring-3d-carousel";
import uuidv4 from "uuid";
import { config } from "react-spring";
import Horiseon from '../../components/img/Horiseon.png';
// import Placeholder from '../../components/img/Placeholder.png';
import JATE from '../../components/img/JATE.png';
import Nutriteam from '../../components/img/Nutriteam.png';
import CatsVsDogs from '../../components/img/CatsVsDogs.png';

export default class Slide extends Component {
    state = {
        goToSlide: 0,
        offsetRadius: 10,
        showNavigation: true,
        config: config.wobbly
    };

    slides = [
        {
            key: uuidv4(),
            content:
                <section className="cardColumn">
                    <a href="https://rubendc91.github.io/HoriseonRefactor" target="blank">
                        <img className="Port-Img " src={Horiseon} alt="placeholder" />
                        <h2 className="cardHeader">Horiseon App</h2>
                    </a>
                </section>
        },
        {
            key: uuidv4(),
            content: 
            <section className="cardColumn">
                <a href="https://jate-just-a-text-editor.herokuapp.com/" target="_blank">
                    <img className="Port-Img" src={JATE} alt="placeholder" />
                    <h2 className="cardHeader">J.A.T.E</h2>
                </a>
            </section>
        },
        {
            key: uuidv4(),
            content: 
            <section className="cardColumn">
                <a href="https://rubendc91.github.io/NutriTeam/" target="_blank">
                    <img className="Port-Img star" src={Nutriteam} alt="placeholder" />
                    <h2 className="cardHeader">Nutriteam</h2>
                </a>
            </section>
        },
        {
            key: uuidv4(),
            content: 
            <section className="cardColumn">
                <a href="https://mysterious-hollows-84029.herokuapp.com/login" target="_blank">
                    <img className="Port-Img" src={CatsVsDogs} alt="placeholder" />
                    <h2 className="cardHeader">Cats V.s. Dogs</h2>
                </a>
            </section>
        }
    ].map((slide, index) => {
        return { ...slide, onClick: () => this.setState({ goToSlide: index }) };
    });


    render() {
        return (
            <div style={{ width: "100%", height: "20vh", margin: "0 auto" }}>
                <Carousel
                    slides={this.slides}
                    goToSlide={this.state.goToSlide}
                    offsetRadius={this.state.offsetRadius}
                    showNavigation={this.state.showNavigation}
                    animationConfig={this.state.config}
                />
                <div
                    style={{
                        margin: "0 auto",
                        marginTop: "2rem",
                        width: "50%",
                        display: "flex",
                        justifyContent: "space-around"
                    }}
                >
                </div>
            </div>
        );
    }
}
