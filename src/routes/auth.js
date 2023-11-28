const { Router } = require("express");
const controller = require("../controllers/auth.js");

const router = Router();

router.post("/register",controller.register);
router.post("/login",controller.login);
router.post("/logout",controller.logout);

module.exports = router;