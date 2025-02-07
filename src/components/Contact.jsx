import React from "react";
import Title from "./Title";
import SubTitle from "./SubTitle";
import Text from "./Text";
import { IoCall } from "react-icons/io5";
import { BsFillChatDotsFill } from "react-icons/bs";
import { BsPersonVideo } from "react-icons/bs";
import { BiSolidMessageDots } from "react-icons/bi";

const Contact = () => {
  return (
    <section className="contact-section">
      <div className="container">
        <div className="contact-left">
          <SubTitle subTitle={"We are here to help you"} />
          <Title title={"Contact Us"} />
          <Text text={"We always ready to help by providijng the best services for you. We beleive a good blace to live can make your life better"} />
          <div className="contact-left-menu">
            <ContactMenuItem title={"Call"} number={"021 123 145 14"} button={"Call Now"} icon={<IoCall className="contact-menu-item-icon" />} />
            <ContactMenuItem title={"Chat"} number={"021 123 145 14"} button={"Chat Now"} icon={<BsFillChatDotsFill className="contact-menu-item-icon" />} />
            <ContactMenuItem title={"Video Call"} number={"021 123 145 14"} button={"Video Call Now"} icon={<BsPersonVideo className="contact-menu-item-icon" />} />
            <ContactMenuItem title={"Message"} number={"021 123 145 14"} button={"Chat Now"} icon={<BiSolidMessageDots className="contact-menu-item-icon" />} />
          </div>
        </div>
        <div className="contact-right">
          <img src="/images/contact.jpg" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Contact;

export const ContactMenuItem = ({ title, number, button, icon }) => {
  return (
    <div className="contact-left-menu-item">
      <div className="contact-menu-item-top">
        <div className="contact-menu-item-icon-wrapper">{icon}</div>
        <div className="contact-menu-item-details">
          <h1>{title}</h1>
          <p>{number}</p>
        </div>
      </div>
      <button className="contact-menu-item-btn">{button}</button>
    </div>
  );
};
