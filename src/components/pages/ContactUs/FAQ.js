import React, { useState } from 'react'

function FAQ() {
    const [openFaq, setOpenFaq] = useState(null);
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
    return (
        <>
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
        </>
    )
}

export default FAQ
