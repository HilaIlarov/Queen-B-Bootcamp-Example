import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import Select from "react-select";
import MentorCard from "../components/MentorCard";
import MentorsList from "../components/MentorsList";
import { IoIosSearch } from "react-icons/io";
import WebFont from "webfontloader";
import { IconButton } from "@mui/material";
import firstPerson from "../images/person1.svg";
import { Grid } from "@mui/material";
import NewMentorForm from "../components/NewMentorForm";
import Mentor from "./Mentor";
const port = process.env.PORT || 5001;

const Home = () => {
    const [flagForRender, setFlagToRender] = useState(true);
	const [message, setMessage] = useState("");
	const [mentors, setMentors] = useState([]);
	const [searchVal, setSearchVal] = useState("");
	const [filteredMentors, setFilteredMentors] = useState([]);
	const [name, setName] = useState("");
	const [languages, setLanguages] = useState([]);
	const [selectedLanguage, setSelectedLanguage] = useState(null);

	// for fonts
	WebFont.load({
		google: {
			families: ["Droid Sans", "Chilanka"],
		},
	});

	const language_options = [
		{ value: "Python", label: "Python" },
		{ value: "Java", label: "Java" },
		{ value: "C", label: "C" },
		{ value: "JavaScript", label: "JavaScript" },
		{ value: "C#", label: "C#" },
		{ value: "C++", label: "C++" },
	];

	const fetchMentors = async () => {
		console.log("fetching mentors...:");
		try {
			console.log(`http://localhost:${port}/mentors`);
			const response = await axios.get(`http://localhost:${port}/mentors`);
			console.log(response.data);
			// const data = response.data.data;
			const mentors = response.data;
			setMentors(mentors);
			console.log("mentors are set");
		} catch (error) {
			console.log(error.message);
		}
	};

	const handleSelectChange = (selectedOption) => {
		setSelectedLanguage(selectedOption);
	};

	const clearSelection = () => {
		setSelectedLanguage(null); // Reset the selection to nothing
	};

	const searchHandler = async (searchVal) => {
		const languages = ["C", "C#", "Java", "JavaScript", "Python"];
		let filtered = [];
		console.log("search vals: ", searchVal, selectedLanguage);
		if (selectedLanguage) {
            console.log(selectedLanguage);
			filtered = mentors.filter((mentor) =>
				mentor.languages.includes(selectedLanguage.value)
			);
		} else {
			filtered = mentors.filter((mentor) => mentor.name.includes(searchVal));
		}
		setFilteredMentors(filtered);
        setSearchVal("");
        clearSelection();
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

	useEffect(() => {
		setTimeout(fetchMentors, 500);
	}, [flagForRender]);

    return (
        <div style={styles.container}>
			<div style={{ ...styles.searchBox, ...styles.shadow }}>
				<input
					style={{ width: "187px" }}
					id="newTask"
					name="newTask"
                    value={searchVal}
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
			</div>
			<div>
				<Select
					options={language_options}
					isMulti={false}
					onChange={handleSelectChange}
					value={selectedLanguage}
				/>
			</div>
			<MentorsList filteredMentors={filteredMentors} />
			{/* <img src={firstPerson} alt="person1" /> */}
		</div>
    );
};

const styles = {
	container: {
		backgroundColor: "#FABEBD",
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

export default Home;