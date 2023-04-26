import { Component } from "react";
import mypicture from "./my_cover.png";
import './Navbar.css';
import Typed from 'react-typed';
import {Carousel} from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

class Section extends Component{
    render(){
            
        return(
            <section id={this.props.tab}>
                <div className="Left-container">
                <h1 className="bold">I am <strong>
                    <Typed
                    strings={['Soj', 'a Coder']}
                    loop = {true}
                    typeSpeed={100}
                    backSpeed ={80}
                />
                </strong> 
                </h1>
                <h1>Hi, I am Joselle Callora</h1>
                <p>Graduated at Technological University of the Philippines</p>
                </div>
                <div className="Right-container">
                    <img src={mypicture} alt="myphoto"/>
                </div>
                <Carousel className="carousel">
                <div>
                    <img src="assets/1.jpg" alt="1"/>
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="assets/2.PNG" alt="2"  width="100px"/>
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="assets/3.png" alt="3"  width="100px"/>
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
            </section>
        )
    }
}

export default Section;