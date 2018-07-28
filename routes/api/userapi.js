const router = require("express").Router();
const axios = require("axios");
const userController = require("../../controllers/userController");

router.route("/:name")
.get(userController.findOne);

router.route("/")
.post(userController.create);



module.exports = router;
