const express = require('express');
const router = express.Router();
const Saldo = require('../models').Saldo;

router.get('/saldo-usuario', function (req, res, next) {
    Saldo
        .findAll({
            where: {
                login: String(req.query.login)
            }
        })
        .then((saldo) => {
            res.status(200).send({ saldo: saldo[0] ? saldo[0].dataValues.saldo : 0 });
        })
        .catch((error) => res.status(400).send(error));

});

module.exports = router;
