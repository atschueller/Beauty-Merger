const router = require("express").Router();
const productsController = require("../../controllers/productsController");

router.route("/")
.get(productsController.findAll)
.post(productsController.create);

router.route("/:name")
.findOne(productsController.findOne);

module.exports = router;


