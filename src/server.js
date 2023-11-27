const express = require("express");
const cookieParser = require("cookie-parser");
const { pool } = require("./db");
const queries = require("./queries");

const app = express();
const port = process.env.PORT || 5001;

/* This is going to allow us to post and get json from our endpoint */
app.use(express.json());
app.use(cookieParser());


const getAllMentors = (req, res) => {
    pool.query(queries.getMentors, (error,results)=>{
        if (error) throw error;
        res.status(200).json(results.rows);
    })
};

const postNewMentor = (req, res) => {
	const {name, languages} = req.body;
	// Add mentor to DB
	pool.query(queries.addMentor, [name, languages], (error, data) => {
		if (error) {
			throw error;
		}
		res.status(201).send("mentor has been created.");
	});
};


app.get("/mentors", getAllMentors);
app.post("/mentors", postNewMentor);

app.listen(port, () => {
	console.log(`Server running on http://localhost:${port}`);
});
