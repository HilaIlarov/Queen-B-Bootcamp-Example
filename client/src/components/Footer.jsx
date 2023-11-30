import React from "react";
// import Logo from "../images/QueenB.png"; // Removed the photo import
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
    const authors = ["Yara Salami", "Tanya Gendelman", "Hila Ilarov"]; // Replace with actual author names

    return (
        <footer>
            <div className="author-list">
                {authors.map((author, index) => (
                    <p key={index} className="author-item">{author}</p>
                ))}
            </div>
        </footer>
    );
};

export default Footer;
