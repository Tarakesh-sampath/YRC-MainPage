import React, { useState } from "react";
import "./ContactUs.css";
import Navbar_white from '../../Navbar/Navbar_white.js';


const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);
  const [errors, setErrors] = useState({});
  const [animationClass, setAnimationClass] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    Object.keys(formData).forEach((key) => {
      if (!formData[key].trim()) {
        newErrors[key] = "This field is required.";
      }
    });

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setFormSubmitted(true);
    }
  };

  const handleEditDetails = () => {
    setFormSubmitted(false);
  };

  const faqData = [
  {
    question: "What training does YRC provide?",
    answer: "YRC provides training in first-aid, disaster management, and emergency response.",
    },
  {
    question: "What are the key objectives of YRC?",
    answer: "To promote health, provide service, and encourage humanitarianism.",
    },
  {
    question: "What is the significance of blood donation in YRC?",
    answer: "YRC organizes blood donation drives to save lives and meet medical needs.",
    },
  {
    question: "Does YRC participate in disaster relief?",
    answer: "Yes, YRC trains and mobilizes volunteers to assist in disaster relief and recovery.",
    },
  {
    question: "What health awareness activities does YRC conduct?",
    answer: "YRC promotes awareness about hygiene, diseases, mental health, and environmental sustainability.",
    },
  {
    question: "How does YRC contribute to the community?",
    answer: "YRC engages in community service, helping the underprivileged and promoting social welfare.",
    },
  {
    question: "Is there any membership fee for joining YRC?",
    answer: "Membership fees, if applicable, vary by institution or organization.",
    },
  {
    question: "What skills can members gain from YRC?",
    answer: "Members learn leadership, teamwork, emergency response, and social responsibility.",
    },
  {
    question: "What is the international connection of YRC?",
    answer: "YRC is part of the International Red Cross and Red Crescent Movement.",
    },
];

  const FaqItem = ({ question, answer, index, openFaq, toggleFaq }) => (
    <div>
      <div
        className="faq-item"
        role="button"
        tabIndex={0}
        onClick={() => toggleFaq(index)}
        onKeyDown={(e) => e.key === "Enter" && toggleFaq(index)}
        aria-expanded={openFaq === index}
      >
        <span className={`arrow ${openFaq === index ? "rotate" : ""}`}>▶</span>
        <h3>{question}</h3>
      </div>
      {openFaq === index && <p className="faq-answer">{answer}</p>}
    </div>
  );

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const renderContactForm = () => (
    <form onSubmit={handleFormSubmit}>
      <div>
        <input
          id="name"
          placeholder="Enter name"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          required
          className={errors.name ? "error" : ""}
        />
        {errors.name && <p className="error-text">{errors.name}</p>}
      </div>
      <div>
        <input
          id="email"
          placeholder="Enter email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
          className={errors.email ? "error" : ""}
        />
        {errors.email && <p className="error-text">{errors.email}</p>}
      </div>
      <div>
        <input
          id="phone"
          placeholder="Enter phone number"
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
          required
          className={errors.phone ? "error" : ""}
        />
        {errors.phone && <p className="error-text">{errors.phone}</p>}
      </div>
      <div>
        <input
          id="subject"
          placeholder="Subject"
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleInputChange}
          required
          className={errors.subject ? "error" : ""}
        />
        {errors.subject && <p className="error-text">{errors.subject}</p>}
      </div>
      <div>
        <textarea
          id="message"
          rows="5"
          placeholder="Your message"
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          required
          className={errors.message ? "error" : ""}
        ></textarea>
        {errors.message && <p className="error-text">{errors.message}</p>}
      </div>
      <button id="submitBtn" type="submit">
        Submit
      </button>
    </form>
  );

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
    <div>
      <Navbar_white menuItems={menuItems}/>
      <section className="layout">
        <div id="c-form">
          <section id="contact-form">
            <h2>Contact Form</h2>
            {formSubmitted ? (
              <>
                <p id="success-message" className="fade-out">
                  Thank you! Your message has been sent.
                </p>
                <button id="editBtn" onClick={handleEditDetails}>
                  Edit Details
                </button>
              </>
            ) : (
              renderContactForm()
            )}
          </section>
        </div>
        <div>
          <section className= "our-location">
            <h2>Our Location</h2>
            <div className="map-container">
              <iframe
                src="https://www.google.com/maps?q=Velammal+New-Gen+Park,Ambattur+Red-hills+Road,Surapet+Main+Rd,Surappattu,Chennai,Tamil+Nadu+600066&output=embed"
                className="google-map"
                width="100%"
                height="350"
                loading="lazy"
                sandbox="allow-scripts allow-same-origin"
              ></iframe>
            </div>
          </section>
        </div>
        <div>
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
        </div>
        <section className="faq-section">
          <h2>FAQs</h2>
          {faqData.map((faq, index) => (
            <FaqItem
              key={index}
              index={index}
              question={faq.question}
              answer={faq.answer}
              openFaq={openFaq}
              toggleFaq={toggleFaq}
            />
          ))}
        </section>
      </section>
    </div>
  );
};

export default ContactPage;