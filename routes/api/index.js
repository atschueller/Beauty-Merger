const router = require("express").Router();
const productsRoutes = require("./productapi");
const htmlRoutes = require("./htmlapi");
const userRoutes = require("./userapi");

router.use("/productapi", productsRoutes);
router.use("/htmlapi", htmlRoutes);
router.use("/userapi", userRoutes);

module.exports = router;

