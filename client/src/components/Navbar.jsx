import React, { useContext } from "react";
import Logo from "../images/QueenB.png";
import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<div className="navbar">
			<div className="container" style={styles.nav}>
				<div className="logo">
					<Link ClassName="link" to="/">
						<h6>Home</h6>
						{/* <img src={Logo} alt="" style={{ height: "50px", }}/> */}
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

const styles = {
	nav: { flexDirection: "row", 
    display: "flex",
    // justifyContent: "space-around",
    alignItems: "center", },
};

export default Navbar;
