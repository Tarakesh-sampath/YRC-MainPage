import React, { useState, useEffect } from 'react';
import Navbar from '../../Navbar/Navbar.js';
import YRCSeparator from "../../Elements/YRCSeparator";
import "./Home.css";
import Footer from '../../Navbar/Footer.js';
import Display_event from '../../Elements/Display/Display_event.js';

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
      
      //achivement display
      const events = [
        {
          image: "images/home/blood_donation.jpg",
          title: "Blood Donation Drive",
          description: "Over 200 units of blood collected for local hospitals.",
          paragraph: "More details about the drive...",
        },
        {
          image: "images/home/blood_donation.jpg",
          title: "Fire Safety Workshop",
          description: "Trained 150 students on emergency response techniques.",
          paragraph: "More details about the workshop...",
        },
        {
          image: "images/home/blood_donation.jpg",
          title: "Tree Planting Campaign",
          description: "Planted 300 saplings to support environmental sustainability.",
          paragraph: "More details about the campaign...",
        },
        // Add more events as needed
      ];

    return (
        <>
            <Navbar menuItems={menuItems} text={"YOUTH RED CROSS"}/>
            {/* Hero Section */}
            <div className="background-container" style={{ backgroundImage: `url(${images[currentImage]})` }}>
                <div className="black-overlay"></div>
                <div className="content">
                    <div className='Title-content'>           
                    <div className='Title'><h1 id='yrc'>YOUTH RED CROSS</h1><p>HUMANITY TOWORDS PEACE</p></div><img src={require("../../../images/yrc_logo.svg").default} className="yrc-logo" alt="logo"/>
                    </div>
                    <p>Join us in making a difference through service, health initiatives, and community building.</p>
                    <div className="cta-buttons">
                      <button onClick={() => window.location.href='/join'}>Join Us</button>
                      <button onClick={() => window.location.href='/events'}>Upcoming Events</button>
                    </div>           
                  </div>
            </div>

            {/* About Us Section */}
              <div className='aboutus-content'>
                  <h1>Who Are We</h1>
                  <YRCSeparator lineLength="100px"/>
                  <p>The Youth Red Cross (YRC) of Velammal Engineering College is a student-run organization that aims to promote humanitarian values and social service among the youth. Our motto is "to serve," and <br/> we encourage students to actively engage in community welfare, disaster management, blood donation drives, health awareness, and disaster preparedness.
                  </p>
                  <br/>
                  <p>By participating in the YRC, students not only contribute to society but also gain valuable experiences that enhance their personal growth and leadership skills.<br/> Together, we strive to create a positive impact on society through acts of kindness and dedication.
                  </p>
              </div>
            {/* Highlights Section */}
              <div className="highlights">
                  <h1>Our Impact</h1>
                  <YRCSeparator lineLength="100px"/>
                  <Display_event events={events} />
              </div>
              <div className='highlights-content'>
                  <center><h1>Our Activities</h1></center>
                  <YRCSeparator lineLength="100px"/>
                  <center>
                      <p>We organize a variety of events and initiatives that foster a spirit of service and community involvement:
                      <ul>
                          <li>Health Camps: Conducting health awareness programs and medical camps for the community.</li>
                          <li>Blood Donation Drives: Partnering with hospitals to facilitate voluntary blood donations.</li>
                          <li>Disaster Relief: Assisting in natural calamities through fundraising and relief distribution.</li>
                          <li>First Aid and CPR Training: Equipping students with life-saving skills.</li>
                          <li>Social Awareness Campaigns: Promoting hygiene, sanitation, and environmental conservation.</li>
                      </ul>
                      </p>
                  </center>
              </div>
              <div className='quote-content'>
                  <center><h1>Inspiring Words</h1></center>
                  <YRCSeparator lineLength="100px"/>
                  <center><p><i><b>"The youth of today is the driving force of tomorrow."</b></i> - Pandit Jawaharlal Nehru</p></center>
              </div>
              <Footer/>
        </>
    )
}

export default Home
