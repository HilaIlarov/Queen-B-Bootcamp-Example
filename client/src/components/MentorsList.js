import React from "react";
import MentorCard from "./MentorCard";
import firstPerson from "../images/person1.svg";
import { Grid, Card, CardContent, Typography } from "@mui/material";

function MentorsList(props) {
	const { filteredMentors } = props;
	return (
		<div style={styles.mentorsList}>
			<Grid container spacing={2}>
				{filteredMentors.map((mentor, index) => {
					return (
						<Grid key={mentor.id} item xs={12} sm={6} md={4}>
							<div key={mentor.id}>
								<MentorCard
									mentor={mentor}
									person={firstPerson}
								></MentorCard>
							</div>
						</Grid>
					);
				})}
			</Grid>
		</div>
	);
}

const styles = {
	mentorsList: {
		// backgroundColor: "blue",
		flexDirection: "column",
		height: "100%",
		width: "70%",
		// overflow: "auto",
		marginLeft: "20%",
		marginTop: "10%",
		marginBottom: "5%",
		display: "flex",
		alignItems: "stretch",
		// overflowY: "scroll",
		justifyContent: "spaced-evenly",
		// flexwrap: "wrap",
	},
};

export default MentorsList;
