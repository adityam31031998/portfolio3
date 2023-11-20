// Navbar.js
import React from "react";
import Menu from "./Menu";
import "./style1.css";
import { GrDocumentUser } from "react-icons/gr";
import { RiContactsLine } from "react-icons/ri";
import { AiOutlineHome } from "react-icons/ai";
import { LuUser2 } from "react-icons/lu";
import { FaFacebookSquare, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { GoBriefcase } from "react-icons/go";

const Navbar = () => {

  return (
    <div className="navLeft">
      <img className="profile" src="./fin.png" alt="loading" />
      <h1 className="proText">Aditya .M</h1>
      <div className="items1">
        <Menu menuImg={<AiOutlineHome className="menuImg" />} iconText="Home" />
        <Menu menuImg={<LuUser2 className="menuImg" />} iconText="About Me" />
        
        <Menu menuImg={<GrDocumentUser className="menuImg" />} iconText="Resume" />
        <Menu menuImg={<GoBriefcase className="menuImg" />} iconText="Portfoilio" />
        <Menu menuImg={<RiContactsLine className="menuImg" />} iconText="Contact" />
      </div>
      <div className="fotters">
        <a className="icon1" rel="noreferrer" target="_blank" href=" https://www.facebook.com/aditya31031998">
          <FaFacebookSquare className="facebookIcon" />
        </a>
        <a className="icon1" rel="noreferrer" target="_blank" href="https://www.instagram.com/aditya_varma06/">
          <FaInstagram className="facebookIcon" />
        </a>
        <a className="icon1" rel="noreferrer" target="_blank" href="https://api.whatsapp.com/send/?phone=9066910183&text=Hi Need Query &type=phone_number&app_absent=0">
          <FaWhatsapp className="facebookIcon" />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
