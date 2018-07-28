const router = require("express").Router();
const productsController = require("../../controllers/productsController");

router.route("/")
.get(productsController.findAll)
.post(productsController.create)
.put(productsController.update);

router.route("/:name")
.get(productsController.findOne);


module.exports = router;


