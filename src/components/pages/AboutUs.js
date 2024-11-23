import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar.js';
import "./AboutUs.css";

function AboutUs() {
    //use state
    const [currentImage, setCurrentImage] = useState(0);

    // Images in the public folder
    const images = ["/images/1.jpg", "/images/2.jpg"];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % images.length);
        }, 8000); // Change every 8 seconds

        return () => clearInterval(interval); // Cleanup interval on component unmount
    }, []); // Empty dependency array

    return (
        <>
            <div className="background-container" style={{ backgroundImage: `url(${images[currentImage]})` }}>
                <div className="black-overlay"></div>
                <Navbar />
                <div className="content">
                    <div className='Title-content'>           
                    <div className='Title'><h1 id='yrc'>YOUTH RED CROSS</h1><p>HUMANITY TOWORDS PEACE</p></div><img src={require("../../images/yrc_logo.svg").default} className="yrc-logo" alt="logo" height={200} />
                    </div>
                </div>
            </div>
            <div>
                hello to the remaining content
            </div>
        </>
    )
}

export default AboutUs
