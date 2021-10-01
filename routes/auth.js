const express = require('express');
const router = express.Router();
const Usuario = require('../models').Usuario;
const Saldo = require('../models').Saldo;
var bcrypt = require('bcrypt-nodejs');

router.post('/cadastro', function (req, res) {
    if (!req.body.login || !req.body.senha) {
        res.status(400).send({ msg: 'Please pass login and senha.' })
    } else {
        Usuario
            .create({
                login: req.body.login,
                senha: req.body.senha,
                nome: req.body.nome
            })
            .then((usuario) => {
                Saldo.create({
                    login: req.body.login,
                    saldo: 100
                })

                res.status(200).send(usuario)
            })
            .catch((error) => {
                console.log(error);
                res.status(400).send(error);
            });
    }
});

router.post('/login', function (req, res) {
    Usuario
        .findAll({
            where: {
                login: String(req.body.login)
            }
        })
        .then((usuario) => {
            if (!usuario) {
                return res.status(401).send({
                    message: 'Authentication failed. Usuario not found.',
                });
            }

            if (bcrypt.compareSync(String(req.body.senha), usuario[0].dataValues.senha)) {
                res.status(200).send({ success: true, msg: 'Authentication successful.' , usuario: usuario[0].dataValues});
            } else {
                res.status(401).send({ success: false, msg: 'Authentication failed. Wrong senha.' });
            }
        })
        .catch((error) => res.status(400).send(error));
});

module.exports = router;
