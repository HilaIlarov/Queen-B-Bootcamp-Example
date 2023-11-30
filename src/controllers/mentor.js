const { pool } = require("../db");
const queries = require("../queries");

const getAllMentors = (req, res) => {
    console.log("get ALL mentor");
    pool.query(queries.getMentors, (error,results)=>{
        if (error) throw error;
        res.status(200).json(results.rows);
    })
};


const postNewMentor = (req, res) => {
	const {name,password,email,languages,description,phone,linkedin} = req.body;
    //cheking if the email already exist
    pool.query(queries.checkEmailExists,[email], (error,results)=>{
        if(results.rows.length) {
            res.status(409).send("email already exist");
        }
        else{
            // Add mentor to DB
	        pool.query(queries.addMentor, [name,password,email,languages,description,phone,linkedin], (error, data) => {
		        if (error) {
			        throw error;
		        }
		        res.status(201).send("mentor has been created.");
	        });
            
        }
    });
};

const getMentor = (req, res) => {
    const id = req.params.id;
    pool.query(queries.checkMentorId,[id], (error,results)=>{
        if (error) throw error;
        res.status(200).json(results.rows[0]);
    })
};

module.exports = {
    getAllMentors,
    postNewMentor,
	getMentor,
}