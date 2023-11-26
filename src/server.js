const fs = require("fs");
const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();
const port = process.env.PORT || 5001;

/*
CORS (Cross-Origin Resource Sharing) is a browser security feature that restricts
cross-origin HTTP requests with other servers and specifies which domains access your resources.
We will use this Node.js package to allow cross-origin requests.
 */
app.use(cors());
app.use(express.json());
// enables the server to serve the client app without running it
app.use(express.static(path.join(__dirname, "../client/build")));

// app.get("/api/helloworld", (req, res) => {
// 	res.send("Hello World");
// });

// app.get("/*", (req, res) => {
// 	// res.send('Anything else');
// 	res.sendFile(path.join(__dirname, "../client/build", "index.html"));
// });

const mentors = JSON.parse(fs.readFileSync(`${__dirname}/data/mentors.json`));
console.log("mentors from outside: ", mentors);

const getAllMentors = (req, res) => {
	console.log("Getting all mentors");
	console.log("mentors from getAllMentors is: ", mentors);
	res.status(200).json({
		status: "success",
		results: mentors.length,
		mentors,
		data: {
			mentors, //equals to tasks: tasks
		},
	});
};

const postNewMentor = (req, res) => {
	console.log("posting new mentor");
	const { id, name, languages } = req.body;
	const newMentorsList = [
		...mentors,
		{
			"id": id,
			"name": name,
			"languages": languages,
		},
	];
	fs.writeFile(
		`${__dirname}/data/mentors.json`,
		JSON.stringify(newMentorsList),
		(err) => console.log("written to tasks.json successfully")
	);
	res.send("completed");
};

app.get("/mentors", getAllMentors);
app.post("/mentors", postNewMentor);

app.listen(port, () => {
	console.log(`Server running on http://localhost:${port}`);
});
