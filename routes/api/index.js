const router = require("express").Router();
const productsRoutes = require("./productapi.js");
const htmlRoutes = require("./htmlroutes.js");

router.use("/products.js", productsRoutes);
router.use("/htmlroutes.js", htmlRoutes);

module.exports = router;

