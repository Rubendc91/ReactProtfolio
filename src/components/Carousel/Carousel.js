import React, { Component } from "react";
// import Carousel from "react-spring-3d-carousel";
// import uuidv4 from "uuid";
import { config } from "react-spring";
import Horiseon from '../../components/img/Horiseon.png';
// import Placeholder from '../../components/img/Placeholder.png';
import JATE from '../../components/img/JATE.png';
import Nutriteam from '../../components/img/Nutriteam.png';
import CatsVsDogs from '../../components/img/CatsVsDogs.png';
import VerticalCarousel from "./VerticalCarousel";


let slides = [
    {
        key: 1,
        content:
        <section className="cardColumn">
        <a href="https://rubendc91.github.io/HoriseonRefactor" target="blank">
            <img className="Port-Img " src={Horiseon} alt="placeholder" />
            <h2 className="cardHeader">Horiseon</h2>
        </a>
    </section>
    },
    {
        key: 2,
        content: 
        <section className="cardColumn">
            <a href="https://jate-just-a-text-editor.herokuapp.com/" target="_blank">
                <img className="Port-Img" src={JATE} alt="placeholder" />
                <h2 className="cardHeader">J.A.T.E</h2>
            </a>
        </section>
    },
    {
        key: 3,
        content: 
        <section className="cardColumn">
            <a href="https://rubendc91.github.io/NutriTeam/" target="_blank">
                <img className="Port-Img star" src={Nutriteam} alt="placeholder" />
                <h2 className="cardHeader">Nutriteam</h2>
            </a>
        </section>
    },
    {
        key: 4,
        content: 
        <section className="cardColumn">
            <a href="https://mysterious-hollows-84029.herokuapp.com/login" target="_blank">
                <img className="Port-Img" src={CatsVsDogs} alt="placeholder" />
                <h2 className="cardHeader">Codenames</h2>
            </a>
        </section>
    }
];

export default class Example extends Component {
    state = {
        goToSlide: 0,
        offsetRadius: 2,
        showNavigation: false,
        config: config.wobbly
    };

    // onChangeInput = e => {
    //   this.setState({
    //     [e.target.name]: parseInt(e.target.value, 10) || 0
    //   });
    // };

    render() {
        return (
            <div
                style={{
                    position: "fixed",
                    left: 0,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    width: "100vw",
                    height: "40vh",
                    marginTop: "3rem",
                    // background: "#7FfFbF"
                }}
            >
                <VerticalCarousel
                    slides={slides}
                    offsetRadius={this.state.offsetRadius}
                    showNavigation={this.state.showNavigation}
                    animationConfig={this.state.config}
                />
            </div>
        );
    }
}


// slides = [
//     {
//         key: uuidv4(),
//         content:
            // <section className="cardColumn">
            //     <a href="https://rubendc91.github.io/HoriseonRefactor" target="blank">
            //         <img className="Port-Img " src={Horiseon} alt="placeholder" />
            //         <h2 className="cardHeader">Horiseon App</h2>
            //     </a>
            // </section>
//     },
//     {
//         key: uuidv4(),
//         content: 
        // <section className="cardColumn">
        //     <a href="https://jate-just-a-text-editor.herokuapp.com/" target="_blank">
        //         <img className="Port-Img" src={JATE} alt="placeholder" />
        //         <h2 className="cardHeader">J.A.T.E</h2>
        //     </a>
        // </section>
//     },
//     {
//         key: uuidv4(),
//         content: 
        // <section className="cardColumn">
        //     <a href="https://rubendc91.github.io/NutriTeam/" target="_blank">
        //         <img className="Port-Img star" src={Nutriteam} alt="placeholder" />
        //         <h2 className="cardHeader">Nutriteam</h2>
        //     </a>
        // </section>
//     },
//     {
//         key: uuidv4(),
//         content: 
        // <section className="cardColumn">
        //     <a href="https://mysterious-hollows-84029.herokuapp.com/login" target="_blank">
        //         <img className="Port-Img" src={CatsVsDogs} alt="placeholder" />
        //         <h2 className="cardHeader">Cats V.s. Dogs</h2>
        //     </a>
        // </section>
//     }