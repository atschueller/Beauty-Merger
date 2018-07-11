const router = require("express").Router();
const productsController = require("../../controllers/productsController");

router.route("/")
.get(productsController.findAll)
.post(productsController.create);

router.route("/:name")
.get(productsController.findOne);

module.exports = router;


