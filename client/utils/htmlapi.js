const db = require("../../../routes");

module.exports = function(data) {
  db.getJSON("/products", function(data) {
    console.log(data);
    router.route("/").get(productsController.findAll);
  });

  db.getJSON("/name", function(data) {
    console.log(data);
    router.route("/:name").get(productsController.findOne);
  });
  db.postJSON("/", function(data) {
    console.log(data);
    router.route("/").post(productsController.create);
  });
};
