const router = require("express").Router();
const productsController = require("../../controllers/productsController");

router.route("/")
.get(productsController.findAll)
.post(productsController.create);

router.route("/:name")
.get(productsController.findOne)
.post(productsController.update);


module.exports = router;


