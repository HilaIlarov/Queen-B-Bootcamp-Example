import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./components/Theme";
import MentorCard from "./components/MentorCard";
import MentorsList from "./components/MentorsList";
import { IoIosSearch } from "react-icons/io";
import WebFont from "webfontloader";
import { IconButton } from "@mui/material";
import firstPerson from "./images/person1.svg";
import { Grid } from "@mui/material";
import NewMentorForm from "./components/NewMentorForm";
const port = process.env.PORT || 5001;

function App() {
	const [flagForRender, setFlagToRender] = useState(true);
	const [message, setMessage] = useState("");
	const [mentors, setMentors] = useState([]);
	const [searchVal, setSearchVal] = useState("");
	const [filteredMentors, setFilteredMentors] = useState([]);
	const [name, setName] = useState("");
	const [languages, setLanguages] = useState([]);

	// for fonts
	WebFont.load({
		google: {
			families: ["Droid Sans", "Chilanka"],
		},
	});

	const fetchMentors = async () => {
		console.log("fetching mentors...:");
		try {
			console.log(`http://localhost:${port}/mentors`);
			const response = await axios.get(`http://localhost:${port}/mentors`);
			const data = response.data.data;
			const mentors = data.mentors;
			setMentors(mentors);
			console.log("mentors are set");
		} catch (error) {
			console.log(error.message);
		}
	};
	useEffect(() => {
		setTimeout(fetchMentors, 500);
		// axios
		// 	.get(`http://localhost:${port}/api/helloworld`)
		// 	.then((response) => setMessage(response.data))
		// 	.catch((error) =>
		// 		console.error(`There was an error retrieving the message: ${error}`)
		// 	);
	}, [flagForRender]);

	const searchHandler = async (searchVal) => {
		const languages = ["C", "C#", "Java", "JavaScript", "Python"];
		let filtered = [];
		if (languages.includes(searchVal)) {
			filtered = mentors.filter((mentor) =>
				mentor.languages.includes(searchVal)
			);
		} else {
			filtered = mentors.filter((mentor) => mentor.name.includes(searchVal));
		}
		setFilteredMentors(filtered);
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		console.log("submitting mentor...");
		let newId = 0;
		if (mentors.length !== 0) {
			newId = mentors[mentors.length - 1].id + 1;
		}
		const newMentor = {
			id: newId,
			name: name,
			languages: languages,
		};
		try {
			const response = await axios.post(
				`http://localhost:${port}/mentors`,
				newMentor
			);
			setFlagToRender(!flagForRender);
		} catch (error) {
			console.log(error.message);
		}
	};

	// return (
	// 		<NewMentorForm
	// 			handleSubmit={handleSubmit}
	// 			setName={setName}
	// 			setLanguages={setLanguages}
	// 		/>
	// );

	return (
		<div style={styles.container}>
			<div style={{ ...styles.searchBox, ...styles.shadow }}>
				<input
					style={{ width: "187px" }}
					id="newTask"
					name="newTask"
					// form="newTaskForm"
					type="text"
					placeholder="Search mentor by name or role"
					onChange={(event) => {
						setSearchVal(event.target.value);
					}}
				/>

				<IoIosSearch
					onClick={() => {
						searchHandler(searchVal);
					}}
				/>
				{/* <Grid /> */}
			</div>
			<MentorsList filteredMentors={filteredMentors} />
			{/* <img src={firstPerson} alt="person1" /> */}
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
		alignItems: "center",
		height: "100%",
		width: "100%",
		fontFamily: "Chilanka",
	},
	searchBox: {
		// backgroundColor: "blue",
		display: "flex",
		alignItems: "center",
		justifyContent: "space-around",
		// flexWrap: "wrap",
		alignContent: "center",
		// alignContent: "space-around",
		width: "220px",
		height: "30px",
		marginTop: "5%",
	},
	shadow: {
		boxShadow:
			"0px 0px 4px 4px rgba(0, 0, 0, 0.35)" /* Adjust the shadow properties as needed */,
	},
};

export default App;
