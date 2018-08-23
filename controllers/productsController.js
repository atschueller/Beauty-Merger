const db = require("../models");

module.exports = {
  findAll: function(req, res) {
    console.log(req.query);
    db.Product.find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findOne: function(req, res) {
    db.Product.find({ name: { $regex: req.params.name, $options: "i" } })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Product.create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Product.findOne({ name: req.params.name }).then(function(dbReview) {
      if (!dbReview) {
        // If it doesn't exist, create it with a review
        db.Product.create(req.body)
          .then(dbProduct => res.json(dbProduct)) // send the created Product
          .catch(console.log); // log the error
      } else {
        // If it exists, update it (add a review)
        dbReview.review.push(req.body.review);
        dbReview
          .save()
          .then(dbProduct => res.json(dbProduct))
          .catch(console.log);
      }
    });
  }
};
