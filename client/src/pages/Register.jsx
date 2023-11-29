import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./auth.css";
import Select from "react-select";
import language_options from "../components/languages";

const Register = () => {
	const [selectedLanguages, setSelectedLanguages] = useState([]);
	const [inputs, setInputs] = useState({
		name: "",
		email: "",
		password: "",
		languages: selectedLanguages,
		description: "",
		phone: "",
		linkedin: "",
	});

	const [err, setError] = useState(null);

	const navigate = useNavigate();

	const handleChange = (e) => {
		const { name, value } = e.target;

		console.log("Input change:", e.target.name, e.target.value);

		console.log("languages: ", selectedLanguages);
		if (name === "languages") {
			// Convert comma-separated string to an array
			// const languagesArray = value.split(",").map((skill) => skill.trim());
			console.log("inside inputs, languages is: ", selectedLanguages);
			setInputs((prev) => ({ ...prev, [name]: selectedLanguages }));
		} else {
			// For other fields, update as usual
			setInputs((prev) => ({ ...prev, [name]: value }));
		}
	};
	const handleSelectChange = (selectedOption) => {
		setSelectedLanguages(selectedOption.map((obj) => obj.value));
		console.log(
			"selectedOption: ",
			selectedOption.map((obj) => obj.value)
		);
		setInputs((prev) => ({
			...prev,
			languages: selectedOption.map((obj) => obj.value),
		}));
		console.log("input languages: ", inputs.languages);
	};
	const handleSubmit = async (e) => {
		/* we don't want to refresh our page */
		e.preventDefault();
		try {
			console.log("Submitting:", inputs);

			/* handle api req */
			await axios.post("http://localhost:5001/auth/register", inputs);
			navigate("/login");
		} catch (err) {
			console.error("Registration error:", err);
			setError(err.response.data);
		}
	};
	return (
		<div className="auth">
			<h1>Register</h1>
			<form>
				<input
					required
					type="text"
					placeholder="name"
					name="name"
					onChange={handleChange}
				/>
				<input
					required
					type="email"
					placeholder="email"
					name="email"
					onChange={handleChange}
				/>
				<input
					required
					type="password"
					placeholder="password"
					name="password"
					onChange={handleChange}
				/>
				{/* <p>Note: Enter programming languages separated by commas (e.g., Java,Python).</p>
                <input required type="languages" placeholder="programming languages" name="languages" onChange={ handleChange }/> */}
				<div>
					<Select
						options={language_options}
						isMulti={true}
						onChange={handleSelectChange}
						// value={selectedLanguages}
					/>
				</div>
				<input
					required
					type="description"
					placeholder="description"
					name="description"
					onChange={handleChange}
				/>
				<input
					required
					type="phone"
					placeholder="phone"
					name="phone"
					onChange={handleChange}
				/>
				<input
					required
					type="linkedin"
					placeholder="linkedin"
					name="linkedin"
					onChange={handleChange}
				/>

				<button onClick={handleSubmit}>Register</button>
				{err && <p>Oops! - {err} </p>}
				<span>
					do you have an account? <Link to="/login">Login</Link>
				</span>
			</form>
		</div>
	);
};

export default Register;
