const express = require('express');
const router = express.Router();
const Movimentacao = require('../models').Movimentacao;
const Saldo = require('../models').Saldo;

router.get('/movimentacoes-usuario', function (req, res, next) {
    const Sequelize = require('sequelize');
    const Op = Sequelize.Op;
    Movimentacao
        .findAll({
            where: {
                [Op.or]: [{
                    login_origem: String(req.query.login)
                }, { login_destino: String(req.query.login) }],
            }
        })
        .then((movimentacoes) => {
            res.status(200).send({ movimentacoes: movimentacoes });
        })
        .catch((error) => res.status(400).send(error));

});

router.post('/transferencia', function (req, res, next) {
    Movimentacao
        .create({
            login_origem: req.body.login_origem,
            login_destino: req.body.login_destino,
            valor_transferido: req.body.valor_transferido
        })
        .then((transferencia) => {
            Saldo
                .findAll({
                    where: {
                        login: String(req.body.login_origem)
                    }
                })
                .then((saldo) => {
                    const saldoObj = saldo[0]
                    saldoObj.update({
                        login: req.body.login_origem,
                        saldo: saldo[0].dataValues.saldo - req.body.valor_transferido
                    })
                })
                .catch((error) => res.status(400).send(error));

            Saldo
                .findAll({
                    where: {
                        login: String(req.body.login_destino)
                    }
                })
                .then((saldo) => {
                    const saldoObj = saldo[0]
                    saldoObj.update({
                        login: req.body.login_destino,
                        saldo: saldo[0].dataValues.saldo + req.body.valor_transferido
                    })
                })
                .catch((error) => res.status(400).send(error));

            res.status(200).send(transferencia)
        })
        .catch((error) => {
            console.log(error);
            res.status(400).send(error);
        });

});

module.exports = router;
