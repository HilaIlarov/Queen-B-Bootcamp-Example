import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { Card, CardContent, Typography } from "@mui/material";
import genericPerson from "../images/pic9.jpg";
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
		window.open(`https://wa.me/+972${mentor.phone}`);
	};

	const openEmail = () => {
		const subject = "A message from QueenB member"; // Replace with the desired subject
		const body = "Hello, \n\nI hope this email finds you well :)."; // Replace with the desired body

		const mailtoLink = `mailto:${mentor.email}?subject=${encodeURIComponent(
			subject
		)}&body=${encodeURIComponent(body)}`;
		window.location.href = mailtoLink;
	};

	return (
		<div className="mentor-list-container">
			<div className="card">
				<div className="photo-container">
					<img src={genericPerson} alt="Mentor" className="photo" />
				</div>
				<div className="text-container">
					<strong>{mentor.name}</strong>
					<br />
					<div className="kills-containe">
						<div className="skill-item">
							{mentor.languages?.join(", ")}
							<br />
						</div>
					</div>

					<br />
					<strong>about our queen {mentor.name}</strong>
                    <br />
					{mentor.description}
					<br /> 
					{/* <strong>Contact information</strong> */}
					<br />
					<div
						style={{
							display: "flex",
							alignItems: "center",
							justifyContent: "space-around",
							width: "90%",
							padding: "10px",
						}}
					>
						<a href="#" onClick={openWhatsApp}>
							<img
								src="https://www.pngkit.com/png/detail/94-943684_this-is-the-logo-for-whatsapp-whatsapp-logo.png"
								alt="WhatsApp"
								style={{ width: "40px", height: "40px" }} // Adjust the image size as needed
							/>
						</a>

						<a href={mentor.linkedin}>
							<img
								src="https://www.pngkit.com/png/detail/8-85849_new-latest-linkedin-logo-linkedin-icon-png-black.png"
								alt="Linkedin"
								style={{ width: "40px", height: "40px" }} // Adjust the image size as needed
							/>
						</a>
						<a href="#" onClick={openEmail}>
							<img
								src="https://www.pngkit.com/png/detail/9-95364_email-png-icons-jpg-royalty-free-stock-e.png"
								alt="Email"
								style={{ width: "40px", height: "40px" }} // Adjust the image size as needed
							/>
						</a>
					</div>
				</div>
			</div>
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
		borderRadius: "40px" /* Adjust the value as needed */,
		overflow: "hidden" /* Optional: hides content overflow if any */,
	},
	main: {
		fontWeight: "bold",
		textAlign: "left",
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

export default Mentor;
