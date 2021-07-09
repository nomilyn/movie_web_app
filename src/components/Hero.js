import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from "react-bootstrap";

import Hero1Image from "../assets/img/hero1.jpg";
import Hero2Image from "../assets/img/hero2.jpg";
import Hero3Image from "../assets/img/hero3.jpg";

const Hero = () => {
    return (
        <Carousel>
            <Carousel.Item interval = {1000}>
                <img className = "d-block w-100" src = {Hero1Image} alt = "First slide" width = "640" height = "360"/>
            </Carousel.Item>
            <Carousel.Item interval = {1000}>
                <img className = "d-block w-100" src = {Hero2Image} alt = "Second slide" />
            </Carousel.Item>
            <Carousel.Item interval={1000}>
                <img className = "d-block w-100" src = {Hero3Image} alt = "Third slide"/>
            </Carousel.Item>
        </Carousel>
    )
}

export default Hero
