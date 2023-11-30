import React from "react";
import MentorCard from "./MentorCard";
import firstPerson from "../images/person1.svg";
import { Grid } from '@mui/material';


function MentorsList(props) {
	const { filteredMentors } = props;
	return (
		<div style={styles.mentorsList}>
			<Grid container spacing={2}>
			{filteredMentors.map((mentor, index) => {
				return (
					
					<Grid key={mentor.id} item xs={12} sm={6} md={4}>

					<div key={mentor.id}>
						<MentorCard mentor={mentor} person={firstPerson}></MentorCard>
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
		flexDirection: "column",
		height: "90%",
		width: "90%",
		marginTop: "3%",
		display: "flex",
		alignItems: "center",
	},
};

export default MentorsList;
