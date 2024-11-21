import React, { useState, useEffect } from 'react';
import Navbar from './Navbar.js';
import "../style/AboutUs.css";

function AboutUs() {
    const [currentImage, setCurrentImage] = useState(0);

    // Images in the public folder
    const images = ["/images/1.jpg", "/images/2.jpg"];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % images.length);
        }, 5000); // Change every 5 seconds

        return () => clearInterval(interval); // Cleanup interval on component unmount
    }, []); // Empty dependency array

    return (
        <>
            <div
                className="background-container"
                style={{ backgroundImage: `url(${images[currentImage]})` }}
            >
                <div className="black-overlay"></div>
                <div className="content">
                    <Navbar />
                    {/* Other elements go here */}
                    <h1>Welcome to My Web Page</h1>
                    <p>This is an example content.</p>
                </div>
            </div>
            <div>
                hello to the remaining content
            </div>
        </>
    );
}

export default AboutUs;
