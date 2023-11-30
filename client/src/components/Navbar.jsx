import React, { useContext } from "react";
import Logo from "../images/QueenB.png";
import {Link} from "react-router-dom";
import { AuthContext } from "../context/authContext";
import "./Navbar.css"


const Navbar = () => {
    const { currentUser, logout } = useContext(AuthContext);

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
                    {currentUser ? (
                    <a className="link" href={`/${currentUser.id}`}>
                        <span>{currentUser?.name}</span>
                        </a>) : (
                        <span>{currentUser?.name}</span>
                        )}
                    {currentUser ? (<span onClick={logout}>Logout</span>) : (<Link className="link" to="/login">Login</Link>)}
                </div>
            </div>
        </div>
    );
};

export default Navbar;