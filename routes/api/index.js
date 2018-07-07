const router = require("express").Router();
const productsRoutes = require("./productapi");
const htmlRoutes = require("./htmlroutes");

router.use("/products", productsRoutes);
router.use("/products", htmlRoutes);

module.exports = router;

