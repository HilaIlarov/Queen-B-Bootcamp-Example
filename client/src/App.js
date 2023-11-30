import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Mentors from "./pages/Mentors";
import Mentor from "./pages/Mentor";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const Layout = () => {
	return (
		<>
			<Navbar />
			<Outlet />
			{/*<Footer />*/}
		</>
	);
};

const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				index: true,
				element: <Home />,
			},
			{
				path: "mentors",
				element: <Mentors />,
			},
			{
				path: ":id",
				element: <Mentor />,
			},
		],
	},
	{
		path: "register",
		element: <Register />,
	},
	{
		path: "login",
		element: <Login />,
	},
]);

function App() {
	return (
		// <div className="app">
			<div className="container">
				<RouterProvider router={router} />
			</div>
		// </div>
	);
}

export default App;
