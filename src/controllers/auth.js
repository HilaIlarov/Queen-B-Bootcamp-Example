const { pool } = require("../db");
const bcrypt = require("bcrypt");
const queries = require("../queries");
const jwt = require("jsonwebtoken");


const register = (req, res) => {
    const {name,password,email,languages,description,phone,linkedin} = req.body;
    // check if this Mentor already exist
    pool.query(queries.checkEmailExists,[email], (error,results)=>{
        if (error){
            throw error;
        }
        if(results.rows.length) {
            res.status(409).send("Mentor already exists!");
        }
        else{
            //Hash the password and create a user
            const salt = bcrypt.genSaltSync(10);
            const hash = bcrypt.hashSync(password, salt);
            // Add mentor to DB
	        pool.query(queries.addMentor, [name,hash,email,languages,description,phone,linkedin], (error, data) => {
		        if (error) {
			        throw error;
		        }
		        res.status(201).send("mentor has been created.");
	        });
        }
    });
}


const login = (req,res)=>{
    console.log("we are here at least");
    const email = req.body.email;
    const pass = req.body.password;
    console.log(`email : ${email}, pass: ${pass}`),

    pool.query(queries.checkEmailExists, [email], (err, result) => {
        if (err) {
            console.log(err);
            return res.status(500).json(err);
        }

        const rows = result.rows;
        console.log(`rows: ${rows}`);

        if (rows.length === 0) {
            console.log(rows.length);
            return res.status(404).json('Mentor not found!');
        }

        // Check password
        // we are chiking if the giving passowrd are identical to the one that have already inside our table
        const isPasswordCorrect = bcrypt.compareSync(pass, rows[0].password);
        if (!isPasswordCorrect) {
            console.log("wrong pass");
            return res.status(400).json('Wrong email or password!');
        }

        const token = jwt.sign({ id: rows[0].id }, 'jwtkey');
        // we don't want to send our password to the public eyes!
        const { password, ...other } = rows[0];

        res
            .cookie('access_token', token, {
                httpOnly: true,
            })
            .status(200)
            .json(other);
    });
}

const logout = (req,res)=>{
    res.clearCookie("access_token",{
        sameSite:"none",
        secure:true
    }).status(200).json("Mentor has been logged out.")
}

module.exports = {
    register,
    login,
    logout,
}