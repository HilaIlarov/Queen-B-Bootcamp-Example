const { Router } = require("express");
const controller = require("../controllers/mentor");

const router = Router();


router.get("/", controller.getAllMentors);
router.get('/:id', controller.getMentor);
router.post("/", controller.postNewMentor);


module.exports = router;







