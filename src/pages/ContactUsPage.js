import React from 'react'

import mapImage from "../assets/img/map.jpg";

const ContactUsPage = () => {
    return (
        <>
            <main>
                
            <div className = "contact-us"></div>
                <table responsive = "sm md lg xl" className = "table-contact-us">
                    <thead>
                        <tr>
                            <th colSpan = "3"><h3>Contact Us</h3></th>
                        </tr>
                    </thead>
                    <tbody className = "contact-area">
                        <tr>
                            <td><h4>Office Location</h4></td>
                            <td colSpan = "2" rowSpan = "10"><img src = {mapImage} alt = ""/> </td>
                        </tr>
                        <tr>
                            <td>Aspire Building</td>
                        </tr>
                        <tr>
                            <td>33rd Floor, Unit 95</td>
                        </tr>
                        <tr>
                            <td>777 Yonge Avenue</td>
                        </tr>
                        <tr>
                            <td>Toronto, Ontario</td>
                        </tr>
                        <tr>
                            <td>M9B 8R5</td>
                        </tr>
                        <tr>
                            <td> </td>
                        </tr>
                        <tr>
                            <td><h4>General Inquiry</h4></td>
                        </tr>
                        <tr>
                            <td>Phone No: 416 555 7788 </td>
                        </tr>
                        <tr>
                            <td>Email Address: dmmat@gmail.com</td>
                        </tr>
                    </tbody>
                </table>
            </main>
        <br/><br/><br/><br/><br/>
        </>
    )
}

export default ContactUsPage
 