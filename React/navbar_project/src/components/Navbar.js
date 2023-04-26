import { Component } from "react";
import './Navbar.css';
import image from './image.jpg'
class Navbar extends Component{
    render(){
        
       
        return (
            <div>
                <header>
                <img src={image}  alt="logo" width={"100px"}/>
                    <nav>
                        <ul>
                            <li><a href="#home">Home</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#contact">Contact</a></li>
                            <li><a href="#certificate">Certificates</a></li>
                        </ul>
                    </nav>
                </header>
            </div>
        )
    }
}

export default Navbar;