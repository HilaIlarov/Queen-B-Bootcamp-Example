const addMentor = "INSERT INTO mentors_tmp (name, language) VALUES ($1, $2)";
const getMentors= "SELECT * FROM mentors_tmp";

module.exports = {
    addMentor,
    getMentors,
}