import React, { useState } from 'react'

function C_form() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    
      const [formSubmitted, setFormSubmitted] = useState(false);
      
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
  return (
    <>
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
    </>
  )
}

export default C_form
