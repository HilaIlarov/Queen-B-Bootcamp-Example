const { pool } = require("../db");
const queries = require("../queries");

const getAllMentors = (req, res) => {
    pool.query(queries.getMentors, (error,results)=>{
        if (error) throw error;
        res.status(200).json(results.rows);
    })
};

const postNewMentor = (req, res) => {
	const { name, languages } = req.body;
	// Add mentor to DB
	pool.query(queries.addMentor, [name, languages], (error, data) => {
		if (error) {
			throw error;
		}
		res.status(201).send("mentor has been created.");
	});
};

module.exports = {
    getAllMentors,
    postNewMentor,
}