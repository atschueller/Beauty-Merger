const router = require("express").Router();
const productsRoutes = require("./productapi");
const userRoutes = require("./userapi");

router.use("/productapi", productsRoutes);
router.use("/userapi", userRoutes);

module.exports = router;

