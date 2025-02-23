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

		if (name === "languages") {
			// Convert comma-separated string to an array
			setInputs((prev) => ({ ...prev, [name]: selectedLanguages }));
		} else {
			// For other fields, update as usual
			setInputs((prev) => ({ ...prev, [name]: value }));
		}
	};
	const handleSelectChange = (selectedOption) => {
		setSelectedLanguages(selectedOption.map((obj) => obj.value));

		setInputs((prev) => ({
			...prev,
			languages: selectedOption.map((obj) => obj.value),
		}));
	};
	const handleSubmit = async (e) => {
		/* we don't want to refresh our page */
		e.preventDefault();
		try {
			// Check if all required fields are filled
            for (const field of ["name", "email", "password", "languages", "description", "phone", "linkedin"]) {
                if (!inputs[field]) {
                    setError(`Please fill in the ${field} field.`);
                    return; // Do not proceed with submission
                }
            }

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
					type="text"
					placeholder="description"
					name="description"
					onChange={handleChange}
				/>
				<input
					required
					type="text"
					placeholder="phone number"
					name="phone"
					onChange={handleChange}
				/>
				<input
					required
					type="text"
					placeholder="LinkedIn profile URL"
					name="linkedin"
					onChange={handleChange}
				/>

				<button type="submit" onClick={handleSubmit}>Register</button>
				{err && <p>Oops! - {err} </p>}
				<span>
					do you have an account? <Link to="/login">Login</Link>
				</span>
			</form>
		</div>
	);
};

export default Register;
