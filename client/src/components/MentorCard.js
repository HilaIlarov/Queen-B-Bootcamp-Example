import React from "react";
import firstPerson from "../images/person1.svg";
import genericPerson from "../images/pic9.jpg";
import { useHistory } from "react-router-dom";
import WebFont from "webfontloader";

function MentorCard(props) {
	const { mentor, personImg } = props;
	const { id, name, languages } = mentor;
	// for fonts
	WebFont.load({
		google: {
			families: ["Droid Sans", "Chilanka"],
		},
	});
	console.log("mentor name: ", name);
	return (
		<div style={{ ...styles.container, ...styles.shadow }}>
			<div>
				<a className="link" href={`/${mentor.id}`}>
					<img src={genericPerson} style={styles.personImg} />
				</a>
			</div>
			<div style={{ fontWeight: "bold" }}>{name}</div>
			<br />
			<div>{languages.sort().join(", ")}</div>
		</div>
	);
}

const styles = {
	container: {
		fontFamily: "Chilanka",
		backgroundColor: "white",
		// center the div vertically
		display: "flex",
		//flexDirection: "column",
		//alignItems: "center",
		justifyContent: "center",
		// flexWrap: "wrap",
		// alignContent: "center",
		// alignItems: "center",
		height: "220px",
		width: "170px",
		//margin: "20px",
		alignSelf: "center",
		// width: "30%", /* Adjust the width to leave some space for margins */
		// margin: "1%" /* Adjust the margin to create spacing between cards */,
		display: "inline-block",
		verticalAlign: "top",
		boxSizing: "border-box",
		border:
			"1px solid #ddd" /* Optional: Add a border for better visualization */,
		paddingLeft: "20px",
		paddingTop: "10px",
		margin: "10px",
		/* Add any other styles you want for your cards */
	},

	personImg: {
		height: "100px",
		width: "100px",
		margin: "10px",
		boxShadow:
			"0px 0px 8px 8px rgba(0, 0, 0, 0.2)" /* Adjust the shadow properties as needed */,
	},
	shadow: {
		boxShadow:
			"0px 0px 8px 8px rgba(0, 0, 0, 0.3)" /* Adjust the shadow properties as needed */,
	},
};

export default MentorCard;
