import React, { useState } from "react";
import "./ContactUs.css";
import Navbar_white from '../../Navbar/Navbar_white.js';
import FAQ from "./FAQ.js";
import Location from "./Location.js";
import Contact_detail from "./Contact_detail.js";
import C_form from "./C_form.js";
const ContactPage = () => {
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
      <Navbar_white menuItems={menuItems}/>
      <div className="layout">
        <C_form/>
        <Location/>
        <div>
        <Contact_detail/>
        </div>
        <FAQ/>
      </div>
    </>
  );
};

export default ContactPage;