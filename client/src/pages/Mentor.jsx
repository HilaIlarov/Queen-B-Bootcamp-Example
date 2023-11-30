import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { Card, CardContent, Typography } from "@mui/material";
import genericPerson from "../assets/genericProfilePictureEdited.jpg";
import "./Mentor.css";

const Mentor = () => {
	const [mentor, setMentor] = useState({});
	const location = useLocation();

	const mentorId = location.pathname.split("/")[1];

	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await axios.get(
					`http://localhost:5001/mentors/${mentorId}`
				);
				console.log("Response from server:", res);
				console.log("Mentor data:", res.data); // Log the actual data
				setMentor(res.data);
			} catch (err) {
				console.log("Error fetching data:", err);
			}
		};
		fetchData();
	}, [mentorId]);

	const openWhatsApp = () => {
		window.open("https://wa.me/+972${mentor.phone}");
	};

	const openEmail = () => {
		const subject = 'A message from QueenB member'; // Replace with the desired subject
		const body = 'Hello, \n\nI hope this email finds you well :).'; // Replace with the desired body
	
		const mailtoLink = `mailto:${mentor.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
		window.location.href = mailtoLink;
	};

	return (
		<div style={useStyles.container}>
			<Card sx={useStyles.root}>
				<CardContent>
					{<img src={genericPerson} style={styles.personImg} />}
					<Typography
						gutterBottom
						variant="h5"
						component="h2"
						sx={useStyles.main}
						style={{ fontSize: "17" }}
					>
						{mentor.name}
					</Typography>
					<Typography
						gutterBottom
						variant="h6"
						component="h2"
						style={{ textAlign: "left" }}
					>
						{mentor.languages?.join(", ")}
					</Typography>

					<Typography
						gutterBottom
						variant="h6"
						component="h2"
						sx={useStyles.main}
					>
						about our queen {mentor.name}
					</Typography>

					<Typography
						variant="h6"
						color="textSecondary"
						component="h6"
						sx={useStyles.description}
						style={{ textAlign: "left" }}
					>
						{mentor.description}
					</Typography>

					<Typography
						gutterBottom
						variant="h6"
						component="h2"
						sx={useStyles.main}
					>
						contact {mentor.name}
					</Typography>

					<Typography
						variant="body2"
						color="textSecondary"
						component="div"
						sx={useStyles.media}
					>
						<a 
							href="#" onClick={openWhatsApp}>
        					<img
								src="https://www.pngkit.com/png/full/1-13187_instagram-logo-new-vector-eps-free-download-logo.png"
								alt="WhatsApp Icon"
								style={{ width: "30px", height: "30px" }} // Adjust the image size as needed
							/>
      					</a>

						<a
							href={mentor.linkedin}>
							<img
								src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/640px-LinkedIn_logo_initials.png"
								alt="Linkedin"
								style={{ width: "30px", height: "30px" }} // Adjust the image size as needed
							/>
						</a>

						<a
							href="#" onClick={openEmail}>
							<img
								src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/640px-LinkedIn_logo_initials.png"
								alt="email"
								style={{ width: "30px", height: "30px" }} // Adjust the image size as needed
							/>
						</a>

					</Typography>
				</CardContent>
				{/* <div className="content"> */}
			</Card>
			{/* </div> */}
		</div>
		
	);
};

const useStyles = {
	container: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		height: "90vh",
	},
	root: {
		width: 435,
		height: 800,
		margin: 10,
		borderRadius: "40px", /* Adjust the value as needed */
  		overflow: "hidden", /* Optional: hides content overflow if any */
		
	},
	main: {
		fontWeight: "bold",
		textAlign: "left",
		fontFamily: "Chilanka", // Add the desired font family
		fontSize: "14", // Add the desired font size
	},
	description: {
		height: 50, // Fixed height for the description
		overflowY: "scroll",
		textOverflow: "ellipsis",
		margin: 5,
		WebkitLineClamp: 5, // Maximum lines to display
		fontFamily: "Chilanka", // Add the desired font family
		fontSize: "12", // Add the desired font size
	},
	media: {
		// position: "fixed",
		// backgroundColor: "red",
		display: "flex",
		flexDirection: "row",
		// marginTop: "80%",
		// width: "20px",
		margin: 10,
		height: "40px",
		justifyContent: "space-around",
		// alignItems: "center",
	},
};

const styles = {
	container: {
		backgroundColor: "blue",
		display: "flex",
		flexDirection: "column",
		position: "fixed",
		width: "40%",
		height: "80%",
		marginTop: "5%",
	},
	description: {
		position: "fixed",
		backgroundColor: "blue",
		width: "30%",
		height: "40%",
		overflow:
			"scroll" /* or 'hidden', 'scroll', or 'overlay' depending on your preference */,
		overflowWrap: "break-word",
		// alignSelf: "center",
		// display: "flex",
		alignItems: "center", // Aligns content horizontally
		justifyContent: "center", // Aligns content vertically
        boxShadow:
			"0px 0px 8px 8px rgba(0, 0, 0, 0.3)" /* Adjust the shadow properties as needed */,
	},
	mediaContainer: {
		width: "100%",
		display: "flex",
		justifyContent: "flex-end",
	},
	media: {
		// position: "fixed",
		// backgroundColor: "red",
		display: "flex",
		flexDirection: "row",
		marginTop: "80%",
		// width: "20px",
		// height: "20px",
		justifyContent: "space-around",
		alignItems: "center",
	},
};

export default Mentor;
