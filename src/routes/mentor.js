const { Router } = require("express");
const controller = require("../controllers/mentor");

const router = Router();


router.get("/", controller.getAllMentors);
router.post("/", controller.postNewMentor);


module.exports = router;







