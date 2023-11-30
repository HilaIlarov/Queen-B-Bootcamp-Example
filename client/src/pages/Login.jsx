import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import "./auth.css";

const Login = () => {
	const [inputs, setInputs] = useState({
		email: "",
		password: "",
	});
	const [err, setError] = useState(null);

	const navigate = useNavigate();

	const { login } = useContext(AuthContext);

	const handleChange = (e) => {
		console.log("Input change:", e.target.name, e.target.value);
		setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
	};

	const handleSubmit = async (e) => {
		/* we don't want to refresh our page */
		e.preventDefault();
		try {
			console.log("Submitting:", inputs);
			await login(inputs);
			navigate("/");
		} catch (err) {
			console.error("Login error:", err);
			setError(err.response.data);
		}
	};

	return (
		<div className="auth">
			<h1>Welcome to QueenB</h1>
			<p>
				We are thrilled to have you here!
				<br />
				Our community is all about empowering teen-girl programmers like you
				with coding tips, inspiring stories, and plenty of memes!
				<br />
				So, let's get started! Log in below to access exclusive content.
			</p>
			<form>
				<input
					required
					type="text"
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
				<button onClick={handleSubmit}>login</button>
				{err && <p>Oops! - {err}</p>}
				<span>
					Not a member yet? Join us and be part of something amazing!{" "}
					<Link to="/register">Register</Link>
				</span>
			</form>
		</div>
	);
};

export default Login;
