const checkMentorId = "SELECT * FROM mentors WHERE id = $1";
const getMentors= "SELECT * FROM mentors";
const addMentor = "INSERT INTO mentors (name,password,email,languages,description,phone,linkedin) VALUES ($1, $2, $3, $4, $5, $6, $7)";
const checkEmailExists = "SELECT * FROM mentors WHERE email = $1";




module.exports = {
    addMentor,
    getMentors,
    checkMentorId,
    checkEmailExists,
}