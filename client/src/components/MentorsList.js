import React from "react";
import MentorCard from "./MentorCard";
import firstPerson from "../images/person1.svg";

function MentorsList(props) {
	const { filteredMentors } = props;
	return (
		<div style={styles.mentorsList}>
			{/* <Grid container spacing={2}>
                {mentors.map((mentor, index) => (
                    <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
                    <MentorCard
								mentor={mentor}
								person={firstPerson}
							></MentorCard>
                    </Grid>
                ))}
                </Grid> */}
			{filteredMentors.map((mentor, index) => {
				return (
					<div key={mentor.id}>
						<MentorCard mentor={mentor} person={firstPerson}></MentorCard>
					</div>
				);
			})}
		</div>
	);
}

const styles = {
	mentorsList: {
		flexDirection: "column",
		height: "90%",
		width: "90%",
		overflow: "auto",
		marginTop: "3%",
		display: "flex",
		alignItems: "center",
		// justifyContent: "center",
		// flexwrap: "wrap",
	},
};

export default MentorsList;
