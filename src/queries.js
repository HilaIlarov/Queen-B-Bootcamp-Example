const addMentor = "INSERT INTO mentors_tmp (name, language) VALUES ($1, $2)";
const getMentors= "SELECT * FROM mentors_tmp";
const checkMentorId = "SELECT * FROM mentors_tmp WHERE id = $1";

module.exports = {
    addMentor,
    getMentors,
    checkMentorId,
}