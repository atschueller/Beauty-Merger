const db = require("../models");

module.exports = {
    findAll: function (req, res) {
        db.Product
            .find(req.query)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findOne: function (req, res) {
        db.Product
            .find(({name:{$regex: req.params.name, $options: "i"}}))
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    create: function (req, res) {
        db.Product
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    update: function (req, res) {
        db.Product
        .findOneAndUpdate({$push: {review: req.params.review }})
        .then(dbModel => res.json(dbModel))
         .catch(err => res.status(422).json(err));
        }
};
