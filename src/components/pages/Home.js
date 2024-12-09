import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar.js';
import "./Home.css";

function Home() {
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

    // menue items
    const menuItems = [
        {
          title: "Home",
          path: "/",
          cName: "nav-link",
          drop: null,
        },
        {
          title: "AboutUs",
          path: "/AboutUs",
          cName: "nav-link",
          drop: null,
        },
        {
          title: "Service",
          path: "/service",
          cName: "nav-link",
          drop: [
            {
              title: "Action - 1",
              path: "/service-Serv1",
              cName: "dropdown-link",
            },
            {
              title: "Action - 2",
              path: "/service-Serv2",
              cName: "dropdown-link",
            },
          ],
        },
        {
          title: "Contact Us",
          path: "/contactus",
          cName: "nav-link",
          drop: null,
        },
      ];
      
    return (
        <>
            <Navbar menuItems={menuItems}/>
            <div className="background-container" style={{ backgroundImage: `url(${images[currentImage]})` }}>
                <div className="black-overlay"></div>
                <div className="content">
                    <div className='Title-content'>           
                    <div className='Title'><h1 id='yrc'>YOUTH RED CROSS</h1><p>HUMANITY TOWORDS PEACE</p></div><img src={require("../../images/yrc_logo.svg").default} className="yrc-logo" alt="logo" height={200} />
                    </div>
                </div>
            </div>
            <div className='aboutus-content'>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <center><h1>Who Are We</h1></center>
                
                <center><p>The Youth Red Cross (YRC) is a voluntary humanitarian organization that empowers youth to serve society. Operating under the principles of the International Red Cross and Red Crescent <br/>
                Movement, we aim to foster a culture of health, safety, and compassion among students.</p><br/></center>

            </div>
        </>
    )
}

export default Home
