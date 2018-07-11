const router = require("express").Router();
const productsRoutes = require("/productapi.js");
const htmlRoutes = require("/htmlroutes.js");

router.use("/products", productsRoutes);
router.use("/htmlroutes", htmlRoutes);

module.exports = router;

