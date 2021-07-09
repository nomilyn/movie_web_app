import React from 'react'
import { Link } from "react-router-dom"

import facebookImage from "../assets/img/facebook.jpg";
import twitterImage from "../assets/img/twitter.jpg";
import instagramImage from "../assets/img/instagram.jpg";
import linkedinImage from "../assets/img/linkedin.jpg";
import youtubeImage from "../assets/img/youtube.jpg";

const Footer = () => {
    return (
        <footer>
            <p>© 2021. All rights reserved.</p>
            <ul>
                <li> <Link to = "/about-us">About Us</Link> </li>
                <li> <Link to = "/contact-us">Contact Us</Link> </li>
                <li> <a href = "https://www.facebook.com"><img src = {facebookImage} alt = "Facebook"/> </a> </li>
                <li> <a href = "https://www.twitter.com"><img src = {twitterImage} alt = "Twitter"/> </a> </li>
                <li> <a href = "https://www.instagram.com"><img src = {instagramImage} alt = "Instagram"/> </a> </li>
                <li> <a href = "https://www.linkedin.com"><img src = {linkedinImage} alt = "LinkedIn"/> </a> </li>
                <li> <a href = "https://www.youtube.com"><img src = {youtubeImage} alt = "You Tube"/> </a> </li>
            </ul>
        </footer>
    )
}

export default Footer
