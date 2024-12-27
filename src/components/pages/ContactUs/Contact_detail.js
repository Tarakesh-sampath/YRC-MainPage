import React from 'react'

function Contact_detail() {
  return (
    <>
      <section>
            <h2>Contact Details</h2>
            <hr id="line" />
            <div id="detail-1"style={{ display: "flex", alignItems: "center", marginBottom: "8px" }}>
              <a href="mailto:info@yrc.com" style={{ textDecoration: "none" }} title="Open mail">
                <i className="fa fa-envelope" style={{ color: "#ff5656", fontSize: "20px", marginRight: "8px" }}></i>
              </a>
              <p style={{ margin: 0 }}>Email: info@yrc.com</p>
            </div>
            <hr id="line" />
            <div id="detail-2"style={{ display: "flex", alignItems: "center", marginBottom: "8px" }}>
              <a href="https://wa.me/911234567890" style={{ textDecoration: "none" }} title="Open WhatsApp">
                <i className="fa fa-phone" style={{ color: "#ff5656", fontSize: "20px", marginRight: "8px" }}></i>
              </a>
              <p style={{ margin: 0 }}>Phone: +91 12345 67890</p>
            </div>
            <hr id="line" />
            <div id ="detail-3"style={{ display: "flex", alignItems: "center", marginBottom: "8px" }}>
              <a
                href="https://www.google.com/maps?q=Velammal+New-Gen+Park,+Ambattur+Red-hills+Road,+Surapet+Main+Rd,+Surappattu,+Chennai,+Tamil+Nadu+600066"
                style={{ textDecoration: "none" }}
                title="Open map"
              >
                <i className="fa-solid fa-location-dot" style={{ color: "#ff5656", fontSize: "20px", marginRight: "8px" }}></i>
              </a>
              <p style={{ margin: 0 }}>Address: Velammal New Gen park, Ambattur </p>
            </div>
            <hr id="line" />
            <div id="detail-4"style={{ display: "flex", alignItems: "center", marginBottom: "8px" }}>
              <i className="fa-solid fa-clock" style={{ color: "#ff5656", fontSize: "20px", marginRight: "8px" }}></i>
              <p style={{ margin: 0 }}>Hours: Mon-Fri, 9:00 AM - 6:00 PM</p>
            </div>
          </section>
          <section>
            <h2>Follow Us</h2>
            <div className="social-media-links" style={{ display: "flex", gap: "16px", alignItems: "center" }}>
              <a
                id= "icon-1"
                href="https://instagram.com/yrc_vec"
                target="_blank"
                rel="noopener noreferrer"
                title="Follow us on Instagram"
              >
                <i
                  className="fa-brands fa-square-instagram"
                  style={{ color: "#E4405F", fontSize: "24px", cursor: "pointer" }}
                ></i>
              </a>
              <a
                id= "icon-2"
                href="https://facebook.com/yrc_vec"
                target="_blank"
                rel="noopener noreferrer"
                title="Follow us on Facebook"
              >
                <i
                  className="fa-brands fa-square-facebook"
                  style={{ color: "#4267B2", fontSize: "24px", cursor: "pointer" }}
                ></i>
              </a>
              <a
                id= "icon-3"
                href="https://twitter.com/yrc_vec"
                target="_blank"
                rel="noopener noreferrer"
                title="Follow us on Twitter"
              >
                <i
                  className="fa-brands fa-square-twitter"
                  style={{ color: "#1DA1F2", fontSize: "24px", cursor: "pointer" }}
                ></i>
              </a>
              <a
                id= "icon-4"
                href="https://youtube.com/yrc_vec"
                target="_blank"
                rel="noopener noreferrer"
                title="Follow us on YouTube"
              >
                <i
                  className="fa-brands fa-square-youtube"
                  style={{ color: "#ff5656", fontSize: "24px", cursor: "pointer" }}
                ></i>
              </a>
            </div>
          </section>
    </>
  )
}

export default Contact_detail
