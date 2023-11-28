import React from "react";
import Logo from "../images/QueenB.png";
import { Link } from "react-router-dom";


const Footer = () => {
	return (
		<footer>
			<Link to="/">
    			<img src={Logo} alt=""/>
			</Link>
		</footer>
	);
};

export default Footer;
