import React, { useContext } from "react";
import Logo from "../images/QueenB.png"
import {Link} from "react-router-dom";

const Navbar = () => {

    return (
        <div className="navbar">
            <div className="container">
                <div className="logo">
                    <Link ClassName="link" to="/">
                        <img src={Logo} alt=""/>
                    </Link>
                </div>
                <div className="links">
                    <Link ClassName="link" to="/mentors">
                        <h6>Mentors</h6>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;