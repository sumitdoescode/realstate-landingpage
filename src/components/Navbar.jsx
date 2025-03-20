import React from "react";
import PrimaryBtn from "./PrimaryBtn";

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <a href="" className="navbar-logo">
                    <img src="/images/logo.png" alt="" />
                </a>
                <ul className="navbar-items">
                    <li className="navbar-item">
                        <a href="#">Residnecies</a>
                    </li>
                    <li className="navbar-item">
                        <a href="#">Our Value</a>
                    </li>
                    <li className="navbar-item">
                        <a href="#">Contact Us</a>
                    </li>
                    <li className="navbar-item">
                        <a href="#">Get Started</a>
                    </li>
                    <li className="navbar-item">
                        <PrimaryBtn text={"Contact"} />
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
