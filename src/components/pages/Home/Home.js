import React, { useState, useEffect } from 'react';
import Navbar from '../../Navbar/Navbar.js';
import YRCSeparator from "../../Elements/YRCSeparator";
import "./Home.css";

function Home() {
    //use state
    const [currentImage, setCurrentImage] = useState(0);

    // Images in the public folder
    const images = ["/images/home/1.jpg", "/images/home/2.jpg"];

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
            <Navbar menuItems={menuItems} text={"YOUTH RED CROSS"}/>
            <div className="background-container" style={{ backgroundImage: `url(${images[currentImage]})` }}>
                <div className="black-overlay"></div>
                <div className="content">
                    <div className='Title-content'>           
                    <div className='Title'><h1 id='yrc'>YOUTH RED CROSS</h1><p>HUMANITY TOWORDS PEACE</p></div><img src={require("../../../images/yrc_logo.svg").default} className="yrc-logo" alt="logo" height={200} />
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
                <YRCSeparator lineLength="100px"/>
                <center><p>The Youth Red Cross (YRC) is a voluntary humanitarian organization that empowers young minds to serve society with compassion and dedication. Aligned with the principles of the International Red Cross and Red Crescent Movement,<br/>
                           YRC aims to nurture health, safety, and a culture of service among students. Our organization believes in fostering the values of humanity, impartiality, neutrality, independence, voluntary service, unity, and universality to <br/>
                           create a positive impact on communities. YRC members actively participate in social welfare initiatives, spreading awareness about health and hygiene, organizing blood donation camps, and supporting disaster relief efforts.<br/>
                           Together, we strive to make the world a better place, one act of kindness at a time.</p><br/></center>
            </div>
        </>
    )
}

export default Home
