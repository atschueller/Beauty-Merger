const db = require("../models");

module.exports = {
    create: function (req, res) {
        db.User
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

    findOne: function (req, res) {
        db.User
        .get(req.body.name)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    }
};