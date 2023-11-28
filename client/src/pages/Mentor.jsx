import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import DOMPurify from "dompurify";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";

const Mentor = (props) => {
	const [mentor, setMentor] = useState({});
    // const mentor = {props}
	const location = useLocation();
	
    const mentorId = location.pathname.split("/")[1];
	console.log("hey?   ############");

	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await axios.get(`/mentors/${mentorId}`);
				setMentor(res.data);
			} catch (err) {
				console.log(err);
			}
		};
		fetchData();
	}, [mentorId]);

	const getText = (html) => {
		const doc = new DOMParser().parseFromString(html, "text/html");
		return doc.body.textContent;
	};

	return (
		<div
			className="Mentor"
			// style={styles.container}
		>
			<Card sx={useStyles.root}>
				{/* <CardMedia
					sx={useStyles.media}
					image={mentor.image}
					title={mentor.name}
				/> */}
				<CardContent>
					{/* <img src={`${mentor.img}`} alt="" /> */}
					<Typography gutterBottom variant="h5" component="h2">
						mentor.name
						{mentor.name}
					</Typography>
					<Typography variant="body2" color="textSecondary" component="p">
						mentor.profession
						{mentor.profession}
					</Typography>

					<Typography
						variant="body2"
						color="textSecondary"
						component="p"
						sx={useStyles.description}
					>
						mentor.description
						nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn
						{mentor.description}
					</Typography>
					<Typography
						variant="body2"
						color="textSecondary"
						component="div"
						sx={useStyles.media}
					>
						<a
							href={mentor.instagram}
							target="_blank"
							rel="noopener noreferrer"
						>
							<img
								src="https://www.pngkit.com/png/full/1-13187_instagram-logo-new-vector-eps-free-download-logo.png"
								alt="Instagram"
								style={{ width: "30px", height: "30px" }} // Adjust the image size as needed
							/>
						</a>
						<a
							href={mentor.linkedin}
							target="_blank"
							rel="noopener noreferrer"
						>
							<img
								src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/640px-LinkedIn_logo_initials.png"
								alt="Linkedin"
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
	root: {
		width: 345,
		height: 345,
		margin: 10,
	},
	
	description: {
		height: 100, // Fixed height for the description
		overflowY: "scroll",
		textOverflow: "ellipsis",
        margin: 5,
		// display: "-webkit-box",
		WebkitLineClamp: 5, // Maximum lines to display
		// WebkitBoxOrient: "vertical",
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
		backgroundColor: "white",
		display: "flex",
		flexDirection: "column",
		position: "fixed",
		width: "40%",
		height: "80%",
		marginTop: "5%",
		// alignItems: "center",
		// justifyContent: "center",
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
