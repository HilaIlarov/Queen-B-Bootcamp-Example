import React, { useState } from "react";
import axios from "axios";
import Checkbox from '@mui/material/Checkbox';
function NewMentorForm(props) {
	const { handleSubmit, setName, setLanguages } = props;

	return (
		<div style={styles.container}>
			<div name="newTaskForm">Enter your details:</div>
			<form
				id="newMentorForm"
				onSubmit={handleSubmit}
				style={styles.formContainer}
			>
				<label htmlFor="newMentor">
					<input
						id="newMentor"
						name="newMentor"
						form="newMentorForm"
						type="text"
						placeholder="Name"
						onChange={(event) => {
							setName(event.target.value);
						}}
					/>
				</label>
				<div style={styles.buttonContainer}>
					<input
						id="submitButton"
						type="submit"
						value="Add Mentor"
						style={styles.button}
					/>
					{/* <button type="submit" style={styles.button}>
						Add task
					</button> */}
					{/* <Checkbox defaultChecked />
					<Checkbox />
					<Checkbox disabled />
					<Checkbox disabled checked /> */}
				</div>
			</form>
		</div>
	);
}

const styles = {
	container: {
		backgroundColor: "#F4C2C2",
		position: "fixed", // important for the background color to be over ALL the page
		// center the div vertically
		display: "flex",
		flexDirection: "column",
		// justifyContent: "space-around",
		alignItems: "center",
		height: "100%",
		width: "100%",
		fontFamily: "Chilanka",
	},
	formContainer: {
		backgroundColor: "white",
		flexDirection: "column",
		// justifyContent: "center",
		alignContent: "center",
		marginTop: "30%",
		height: "60%",
		width: "100%",
	},
};
export default NewMentorForm;
