import React from "react";
import firstPerson from "../images/person1.svg";
import genericPerson from "../assets/genericProfilePictureEdited.jpg";
import { useHistory } from "react-router-dom";

function MentorCard(props) {
	const { mentor, personImg } = props;
	const { id, name, languages } = mentor;
	console.log("mentor name: ", name);
	return (
		<div style={{ ...styles.container, ...styles.shadow }}>
			<div>
				<a className="link" href={`/${mentor.id}`}>
					<img src={genericPerson} style={styles.personImg} />
				</a>
			</div>
			<div>{name}</div>
			<div>{languages.join(", ")}</div>
		</div>
	);
}

const styles = {
	container: {
		backgroundColor: "white",
		// center the div vertically
		display: "flex",
		//flexDirection: "column",
		//alignItems: "center",
		justifyContent: "center",
		// flexWrap: "wrap",
		// alignContent: "center",
		// alignItems: "center",
		height: "210px",
		width: "160px",
		//margin: "20px",
		alignSelf: "center",
		// width: "30%", /* Adjust the width to leave some space for margins */
		// margin: "1%" /* Adjust the margin to create spacing between cards */,
		display: "inline-block",
		verticalAlign: "top",
		boxSizing: "border-box",
		border:
			"1px solid #ddd" /* Optional: Add a border for better visualization */,
		padding: "10px",
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

export default MentorCard;
